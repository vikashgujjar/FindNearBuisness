import React from 'react';
import AdvertiseHero from './AdvertiseHero';
import SuccessStrory from './SuccessStrory';
import AchiveGoals from './AchiveGoals';
import Plans from './Plans';
import Features from './Features';
import BusinessAds from './BusinessAds';
import Question from './Question';
import StillQuestion from './StillQuestion';
import LocalSeacrh from './LocalSeacrh';
import BranndVisbility from './BranndVisbility';
import PopularCategories from '../Component/PopularCategories';
import PopularCate from './PopularCate';
import AdvertiseNav from './AdvertiseNav';

const AdvertisePage = () => {
    
    return (
        <>
        <AdvertiseNav/>
            <AdvertiseHero/>
           <SuccessStrory/>
           <AchiveGoals/>
         <Plans/>
            <Features/> 
           <BusinessAds/>
           <Question/>
            <StillQuestion/>
              <LocalSeacrh/>
          <BranndVisbility/>
              <PopularCate/> 
              
        </>
    );
};

export default AdvertisePage;