"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useUserLocation } from "@/app/context/LocationContext";
import Choose from "@/app/Component/Choose";
import { useApi } from "@/app/lib/api";
import { AdSlot } from "@/app/ui/AdSlot";
import Herosection from "@/app/Component/Herosection";
import Attraction from "@/app/Component/Attraction";
import Contact, { O } from "@/app/Component/Contact";
import { A } from "@/app/Component/Citycategoire";
import WeddingBeautySpa from "@/app/Component/WeddingBeautySpa";
import Testmonial from "@/app/Component/Testmonial";
import OneStop from "@/app/Component/OneStop";
import PopularCategories from "@/app/Component/PopularCategories";
let HomePage = () => {
  let { location } = useUserLocation(),
    { data, error } = useApi("/home", {
      auth: false,
    });
  return (
    <main>
      <Herosection loc={location} banners={data?.banners} bannersLoading={!data && !error} />
      <Attraction loc={location} categories={data?.categories} />
      <Contact loc={location} trending={data?.trending} />
      <O />
      <A loc={location} topRated={data?.top_rated} />
      <WeddingBeautySpa loc={location} />
      <Choose />
      <Testmonial testimonials={data?.testimonials} />
      <OneStop loc={location} />
      <AdSlot slot="home_bottom" className="container-x py-8" />
      <PopularCategories />
    </main>
  );
};
export default HomePage;
