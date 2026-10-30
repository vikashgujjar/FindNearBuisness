import React from "react";
import AdvertiseNav from "./AdvertiseNav";
import AdvertiseHero from "./AdvertiseHero";
import SuccessStrory from "./SuccessStrory";
import AchiveGoals from "./AchiveGoals";
import Plans from "./Plans";
import Features from "./Features";
import BusinessAds from "./BusinessAds";
import Question from "./Question";
import StillQuestion from "./StillQuestion";
import LocalSeacrh from "./LocalSeacrh";
import BranndVisbility from "./BranndVisbility";
import PopularCate from "./PopularCate";

const AdvertisePage = () => {
  return (
    <>
      <AdvertiseNav />
      <main>
        <AdvertiseHero />
        <SuccessStrory />
        <AchiveGoals />
        <Plans />
        <Features />
        <BusinessAds />
        <Question />
        <StillQuestion />
        <LocalSeacrh />
        <BranndVisbility />
        <PopularCate />
      </main>
    </>
  );
};

export default AdvertisePage;
