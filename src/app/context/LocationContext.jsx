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
function cityHref(e, t) {
  return `/${(function (e) {
    let t = e?.county || (e?.Name === "NA" ? e?.State : e?.Name) || e?.city || e?.town || e?.state_district || e?.state;
    return t?.replace(/\s+/g, "") || "default-location";
  })(e)}/${t}`;
}
function LocationProvider(props) {
  let { children } = props,
    [s, i] = useState(null),
    [o, c] = useState(false);
  useEffect(() => {
    try {
      let e = localStorage.getItem("location");
      e && i(JSON.parse(e));
    } catch (e) {}
    navigator.geolocation &&
      navigator.geolocation.getCurrentPosition(
        async (e) => {
          let { coords } = e;
          try {
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
      return localStorage.setItem("location", JSON.stringify(l)), i(l), c(false), window.location.reload(), null;
    } catch (e) {
      return "Failed to fetch city details. Please try again.";
    }
  }, []);
  return (
    <l.Provider
      value={{
        location: s,
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
export { toSlug, getCityLabel, cityHref, LocationProvider, useUserLocation };
