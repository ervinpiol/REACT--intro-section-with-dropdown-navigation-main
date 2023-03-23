import React from "react";
import AllImages from "../constants/AllImages";

const HeroImage = () => {
  return (
    <div>
      <picture>
        <source
          media="(min-width: 62rem)"
          srcSet={AllImages.HeroDesktopImg}
          type="image/png"
        />
        <img
          src={AllImages.HeroDesktopMobile}
          alt=""
          aria-hidden="true"
          width={480}
          height={640}
        />
      </picture>
    </div>
  );
};

export default HeroImage;
