import React from "react";
import HeroImage from "../components/HeroImage";
import AllImages from "../constants/AllImages";

const Hero = () => {
  return (
    <div className="mt-12 flex flex-row-reverse items-end max-w-[76rem] mx-auto justify-between px-6 xl:px-14 lg:flex-col lg:items-center md:flex-col md:items-center sm:px-0 sm:mt-0">
      <HeroImage />
      <div className="w-[540px] flex flex-col gap-12 items-start xl:gap-8 lg:items-center lg:gap-8 lg:pt-16 md:items-center md:py-14 md:gap-8 sm:px-8 sm:w-full">
        <h1 className="text-[82px] text-AlmostBlack font-bold leading-[5rem] xl:text-[66px] lg:text-5xl lg:text-center md:text-5xl sm:text-[32px] sm:text-center">
          Make remote work
        </h1>
        <p className="text-lg max-w-[430px] text-MediumGray lg:text-center  md:text-center">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="font-bold bg-AlmostBlack px-8 py-3.5 rounded-xl text-AlmostWhite text-lg border border-AlmostBlack hover:text-AlmostBlack hover:bg-AlmostWhite hover:border sm:text-base">
          Learn more
        </button>
        <div className="flex items-center gap-12 mt-16 lg:mt-10 md:mt-10 sm:mt-6 sm:gap-x-20 sm:flex-wrap justify-center">
          <img src={AllImages.databiz} alt="databiz" className="xl:w-20" />
          <img
            src={AllImages.audiophile}
            alt="audiophile"
            className="xl:w-20"
          />
          <img src={AllImages.meet} alt="meet" className="xl:w-20" />
          <img src={AllImages.maker} alt="maker" className="xl:w-20" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
