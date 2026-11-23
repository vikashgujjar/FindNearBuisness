"use client";

import { createContext, useState, useEffect, useCallback, useContext } from "react";
let l = createContext(null);
function getCityLabel(e) {
  return (
    (e &&
      (e.city ||
        e.town ||
        e.village ||
        e.county ||
        e.state_district ||
        (e.Name && "NA" !== e.Name ? e.Name : e.District || e.State) ||
        e.state)) ||
    null
  );
}
function toSlug(e) {
  return e.toLowerCase().trim().split(/\s+/).join("-");
}
// City used in page addresses ("/Barara/hotel"); the label above can be a village inside it.
function getCityName(e) {
  return e?.county || (e?.Name === "NA" ? e?.State : e?.Name) || e?.city || e?.town || e?.state_district || e?.state || null;
}
function cityHref(e, t) {
  return `/${getCityName(e)?.replace(/\s+/g, "") || "default-location"}/${t}`;
}
function LocationProvider(props) {
  let { children } = props,
    [s, i] = useState(null),
    [o, c] = useState(false),
    [coords, setCoords] = useState(null); // {lat, lng}; unknown after a PIN code
  useEffect(() => {
    try {
      let e = localStorage.getItem("location");
      e && i(JSON.parse(e));
      let pos = JSON.parse(localStorage.getItem("coords") || "null");
      pos && setCoords(pos);
    } catch (e) {}
    navigator.geolocation &&
      navigator.geolocation.getCurrentPosition(
        async (e) => {
          let { coords } = e,
            pos = { lat: coords.latitude, lng: coords.longitude };
          setCoords(pos);
          try {
            localStorage.setItem("coords", JSON.stringify(pos));
            let e = await fetch(
                `https://nominatim.openstreetmap.org/reverse?lat=${coords.latitude}&lon=${coords.longitude}&format=json`,
              ),
              s = await e.json();
            s?.address && (localStorage.setItem("location", JSON.stringify(s.address)), i(s.address));
          } catch (e) {
            console.error("Error fetching location:", e);
          }
        },
        (e) => console.warn("Location unavailable:", e.message),
      );
  }, []);
  let d = useCallback(async (e) => {
    try {
      var t, s;
      let a = await fetch(`https://api.postalpincode.in/pincode/${e}`),
        n = await a.json(),
        l = n?.[0]?.PostOffice?.[0];
      if (!l) return "No city found for the given PIN code";
      localStorage.removeItem("coords");
      return localStorage.setItem("location", JSON.stringify(l)), setCoords(null), i(l), c(false), window.location.reload(), null;
    } catch (e) {
      return "Failed to fetch city details. Please try again.";
    }
  }, []);
  return (
    <l.Provider
      value={{
        location: s,
        coords,
        cityLabel: getCityLabel(s),
        pincode: s?.postcode || s?.Pincode || "",
        modalOpen: o,
        openModal: () => c(true),
        closeModal: () => c(false),
        lookupPin: d,
      }}
    >
      {children}
    </l.Provider>
  );
}
function useUserLocation() {
  return useContext(l);
}
export { toSlug, getCityLabel, getCityName, cityHref, LocationProvider, useUserLocation };
