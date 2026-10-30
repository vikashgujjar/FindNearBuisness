"use client";

import React from "react";
import Herosection from "./Component/Herosection";
import Attractions from "./Component/Attraction";
import Choose from "./Component/Choose";
import Citycategoire from "./Component/Citycategoire";
import ServiceList from "./Component/Servicelist";
import Contact from "./Component/Contact";
import ServiceBanner from "./Component/ServiceBanner";
import Testmonial from "./Component/Testmonial";
import OneStop from "./Component/OneStop";
import PopularCategories from "./Component/PopularCategories";
import WeddingBeautySpa from "./Component/WeddingBeautySpa";
import { useUserLocation } from "./context/LocationContext";

const page = () => {
  const { location: loc } = useUserLocation();

  return (
    <main>
      <Herosection loc={loc} />
      <Attractions loc={loc} />
      <ServiceBanner loc={loc} />
      <ServiceList loc={loc} />
      <Contact />
      <Citycategoire loc={loc} />
      <WeddingBeautySpa loc={loc} />
      <Choose />
      <Testmonial />
      <OneStop loc={loc} />
      <PopularCategories />
    </main>
  );
};

export default page;
