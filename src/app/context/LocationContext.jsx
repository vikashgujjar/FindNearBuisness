"use client";
import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";

const LocationContext = createContext(null);

// Slug used in /{city}/... routes. Matches the rule the existing pages use.
export function getCitySlug(loc) {
  const name =
    loc?.county ||
    (loc?.Name === "NA" ? loc?.State : loc?.Name) ||
    loc?.city ||
    loc?.town ||
    loc?.state_district ||
    loc?.state;
  return name?.replace(/\s+/g, "") || "default-location";
}

// Human readable city name for the UI.
export function getCityLabel(loc) {
  if (!loc) return null;
  return (
    loc.city ||
    loc.town ||
    loc.village ||
    loc.county ||
    loc.state_district ||
    (loc.Name && loc.Name !== "NA" ? loc.Name : loc.District || loc.State) ||
    loc.state ||
    null
  );
}

export function getPincode(loc) {
  return loc?.postcode || loc?.Pincode || "";
}

export function toSlug(text) {
  return text.toLowerCase().trim().split(/\s+/).join("-");
}

// Always absolute, so links work from any page depth.
export function cityHref(loc, path) {
  return `/${getCitySlug(loc)}/${path}`;
}

export function LocationProvider({ children }) {
  const [location, setLocation] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("location");
      if (saved) setLocation(JSON.parse(saved));
    } catch {}

    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        try {
          const { data } = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?lat=${coords.latitude}&lon=${coords.longitude}&format=json`
          );
          if (data?.address) {
            localStorage.setItem("location", JSON.stringify(data.address));
            setLocation(data.address);
          }
        } catch (error) {
          console.error("Error fetching location:", error);
        }
      },
      // Users may simply deny permission; that's not an error worth surfacing.
      (error) => console.warn("Location unavailable:", error.message)
    );
  }, []);

  // Returns an error message, or null on success.
  const lookupPin = useCallback(async (pin) => {
    try {
      const response = await fetch(`https://api.postalpincode.in/pincode/${pin}`);
      const data = await response.json();
      const postOffice = data?.[0]?.PostOffice?.[0];
      if (!postOffice) return "No city found for the given PIN code";
      localStorage.setItem("location", JSON.stringify(postOffice));
      setLocation(postOffice);
      setModalOpen(false);
      // Older components read localStorage once on mount, so refresh them.
      window.location.reload();
      return null;
    } catch {
      return "Failed to fetch city details. Please try again.";
    }
  }, []);

  return (
    <LocationContext.Provider
      value={{
        location,
        cityLabel: getCityLabel(location),
        pincode: getPincode(location),
        modalOpen,
        openModal: () => setModalOpen(true),
        closeModal: () => setModalOpen(false),
        lookupPin,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}

export function useUserLocation() {
  return useContext(LocationContext);
}
