"use client";
import { MotionConfig } from "framer-motion";
import { LocationProvider } from "./context/LocationContext";
import LocationModal from "./Component/LoactionModal";

export default function Providers({ children }) {
  return (
    // "user" honours the OS reduced-motion setting for every animation.
    <MotionConfig reducedMotion="user">
      <LocationProvider>
        {children}
        <LocationModal />
      </LocationProvider>
    </MotionConfig>
  );
}
