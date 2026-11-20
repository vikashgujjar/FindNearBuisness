"use client";

// Client for the Laravel backend (backend/vivek, routes/api.php).
// Set NEXT_PUBLIC_API_URL in .env.local / .env.production; it is baked in at build time.
import { useState, useRef, useCallback, useEffect } from "react";

export const API_URL = (process.env.NEXT_PUBLIC_API_URL || "https://vivek.futuretouch.org/api/v1").replace(/\/$/, "");
const BACKEND_URL = API_URL.replace(/\/api\/v1$/, "");
const TOKEN_KEY = "ft_token";

// ---------- auth token (Sanctum bearer token) ----------
export function getToken() {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

export function setToken(token) {
  try {
    if (token) localStorage.setItem(TOKEN_KEY, token);
    else localStorage.removeItem(TOKEN_KEY);
  } catch {}
}

class ApiError extends Error {
  constructor(message, status, errors) {
    super(message);
    this.status = status;
    this.errors = errors || {};
  }
}

// ---------- requests ----------
export async function apiFetch(path, { method = "GET", body, auth = true, signal } = {}) {
  const headers = { Accept: "application/json" };
  const token = auth ? getToken() : null;
  if (token) headers.Authorization = `Bearer ${token}`;

  const isForm = typeof FormData !== "undefined" && body instanceof FormData;
  if (body && !isForm) headers["Content-Type"] = "application/json";

  // PUT/PATCH/DELETE go out as POST with an override header (some hosts block other verbs).
  const override = method !== "GET" && method !== "POST";
  if (override) headers["X-HTTP-Method-Override"] = method;

  const res = await fetch(`${API_URL}${path}`, {
    method: override ? "POST" : method,
    headers,
    body: body ? (isForm ? body : JSON.stringify(body)) : undefined,
    signal,
  });

  let data = null;
  try {
    data = await res.json();
  } catch {}

  if (!res.ok) {
    // An expired or revoked token: forget it so the user is treated as signed out.
    if (res.status === 401 && token) setToken(null);
    const firstFieldError = data?.errors ? Object.values(data.errors)[0]?.[0] : null;
    throw new ApiError(
      res.status === 429
        ? "Too many attempts. Please wait a minute and try again."
        : firstFieldError || data?.message || "Something went wrong. Please try again.",
      res.status,
      data?.errors,
    );
  }
  return data;
}

// ---------- useApi: GET with an in-memory cache ----------
const cache = new Map(); // path -> response
const inFlight = new Map(); // "auth:path" -> promise (dedupes simultaneous requests)

function fetchShared(path, auth) {
  const key = `${auth}:${path}`;
  if (!inFlight.has(key)) inFlight.set(key, apiFetch(path, { auth }).finally(() => inFlight.delete(key)));
  return inFlight.get(key);
}

export function useApi(path, { skip = false, auth = true, cacheable = true } = {}) {
  const [state, setState] = useState(() => ({
    data: cacheable && path ? (cache.get(path) ?? null) : null,
    loading: !!path && !skip,
    error: null,
  }));
  const mounted = useRef(true);

  const load = useCallback(async () => {
    if (!path || skip) return;
    setState((s) => ({ ...s, loading: true, error: null }));
    try {
      const data = await (cacheable ? fetchShared(path, auth) : apiFetch(path, { auth }));
      if (cacheable) cache.set(path, data);
      if (mounted.current) setState({ data, loading: false, error: null });
    } catch (error) {
      if (mounted.current) setState((s) => ({ ...s, loading: false, error }));
    }
  }, [path, skip, auth, cacheable]);

  useEffect(() => {
    mounted.current = true;
    load();
    return () => {
      mounted.current = false;
    };
  }, [load]);

  return { ...state, reload: load };
}

// Drop cached GET responses whose path starts with `prefix` (all of them by default).
export function clearApiCache(prefix = "") {
  for (const key of cache.keys()) if (key.startsWith(prefix)) cache.delete(key);
}

// Vendor image upload; resolves to { path }.
export function uploadFile(file) {
  const form = new FormData();
  form.append("file", file);
  return apiFetch("/vendor/upload", { method: "POST", body: form });
}

// Stored file path -> full URL on the backend (absolute URLs and site paths pass through).
export const mediaUrl = (path) =>
  path ? (/^(https?:)?\/\//.test(path) || path.startsWith("/") ? path : `${BACKEND_URL}/storage/${path}`) : "";

// ---------- small hooks ----------
// Query-string value; undefined until mounted (static export has no query at build time).
export function useQueryParam(name) {
  const [value, setValue] = useState(undefined);
  useEffect(() => {
    setValue(new URLSearchParams(window.location.search).get(name));
  }, [name]);
  return value;
}

// Plain form -> POST to the API; returns { status, onSubmit }.
export function useFormPost(path, transform = (values) => values) {
  const [status, setStatus] = useState(null);
  return {
    status,
    onSubmit: async (e) => {
      e.preventDefault();
      const form = e.currentTarget;
      setStatus({ busy: true });
      try {
        const res = await apiFetch(path, { method: "POST", body: transform(Object.fromEntries(new FormData(form))) });
        setStatus({ ok: res?.message || "Thank you!" });
        form.reset();
      } catch (err) {
        setStatus({ error: err.message });
      }
    },
  };
}

// Listing id from a detail URL: /{City}/{name}/{id}/. undefined until mounted, null if absent.
export function useListingIdFromPath() {
  const [id, setId] = useState(undefined);
  useEffect(() => {
    setId(window.location.pathname.match(/^\/[^/]+\/[^/]+\/(\d+)\/?$/)?.[1] ?? null);
  }, []);
  return id;
}

// ---------- formatting ----------
export const formatDate = (value, options = { day: "2-digit", month: "short", year: "numeric" }) => {
  if (!value) return "";
  const date = new Date(value);
  return isNaN(date) ? value : date.toLocaleDateString("en-GB", options);
};

export const formatPrice = (value) =>
  value == null ? "" : `$${Number(value).toLocaleString("en-US", { maximumFractionDigits: 2 })}`;

// ---------- links ----------
const urlPart = (text) =>
  String(text || "")
    .replace(/[^A-Za-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

// /{City}/{Business-name--address}/{id}/ — served by app/[cityname]/[cate]/[id] via public/.htaccess.
export const listingHref = (listing) => {
  if (!listing?.id || !listing?.name) return `/all/?slug=${encodeURIComponent(listing?.slug ?? listing)}`;
  const city =
    urlPart(listing.city)
      .toLowerCase()
      .replace(/(^|-)[a-z]/g, (c) => c.toUpperCase()) || "India";
  const address = urlPart(listing.address).slice(0, 60).replace(/-+$/, "");
  return `/${city}/${urlPart(listing.name) || "Business"}${address ? `--${address}` : ""}/${listing.id}/`;
};

export const productHref = (slug) => `/products-inner/?slug=${encodeURIComponent(slug)}`;
export const eventHref = (slug) => `/events-inner/?slug=${encodeURIComponent(slug)}`;
export const blogHref = (slug) => `/blog-inner/?slug=${encodeURIComponent(slug)}`;
export const vendorHref = (id) => `/view-business/?id=${id}`;
export const galleryHref = (id) => `/gallery/?id=${id}`;
