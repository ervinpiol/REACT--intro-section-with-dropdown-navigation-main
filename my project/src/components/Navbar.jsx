import React, { useState, useEffect } from "react";
import FeaturesModal from "./Modals/FeaturesModal";
import CompanyModal from "./Modals/CompanyModal";
import AllImages from "../constants/AllImages";
import MenuIcon from "./MenuIcon";

const Navbar = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openNav, setOpenNav] = useState(false);
  const [featuresArrowUp, setFeaturesArrowUp] = useState(false);
  const [companyArrowUp, setCompanyArrowUp] = useState(false);

  useEffect(() => {
    setFeaturesArrowUp(activeModal === "features");
    setCompanyArrowUp(activeModal === "company");
  }, [activeModal]);

  const companyClick = () => {
    setActiveModal((prevState) => (prevState === "company" ? null : "company"));
  };

  const featuresClick = () => {
    setActiveModal((prevState) =>
      prevState === "features" ? null : "features"
    );
  };

  const menuClick = () => {
    setOpenNav(!openNav);
  };

  const closeClick = () => {
    setOpenNav(false);
  };

  return (
    <nav className="flex items-center gap-16 text-MediumGray lg:justify-between p-8 lg:relative">
      <img src={AllImages.Logo} alt="Logo" className="" />
      <div
        className={`w-full lg:w-screen lg:h-screen  lg:absolute lg:top-0 lg:right-0 lg:bg-BGOpacity ${
          openNav ? "lg:flex" : "lg:hidden"
        }`}
      >
        <ul className="flex gap-12 items-center lg:bg-AlmostWhite lg:flex-col lg:w-2/4 lg:ml-auto lg:h-screen lg:py-24 lg:px-10 lg:items-start lg:gap-8 md:w-3/5 sm:w-4/6 sm:gap-6">
          <li
            className="flex items-center relative lg:flex-col lg:items-start"
            onClick={featuresClick}
          >
            <p className="flex items-center gap-2">
              Features{" "}
              <img
                src={featuresArrowUp ? AllImages.ArrowUp : AllImages.ArrowDown}
                alt="Arrow"
                style={{
                  transition: "all 220ms linear",
                  transform: featuresArrowUp ? "rotate(180deg)" : "",
                }}
              />
            </p>

            {activeModal === "features" && <FeaturesModal />}
          </li>
          <li
            className="flex items-center relative lg:flex-col lg:items-start"
            onClick={companyClick}
          >
            <p className="flex items-center gap-2">
              Company{" "}
              <img
                src={companyArrowUp ? AllImages.ArrowUp : AllImages.ArrowDown}
                alt="Arrow"
                style={{
                  transition: "all 220ms linear",
                  transform: companyArrowUp ? "rotate(360deg)" : "",
                }}
              />
            </p>
            {activeModal === "company" && <CompanyModal />}
          </li>
          <li>Careers</li>
          <li>About</li>
          <li className="ml-auto lg:mx-auto">
            <button className="text-MediumGray hover:text-AlmostBlack">
              Login
            </button>
          </li>
          <li className="lg:w-full sm:w-full">
            <button className="border-2 border-MediumGray px-6 py-2 rounded-xl text-MediumGray hover:text-AlmostBlack hover:border-AlmostBlack lg:w-full sm:w-full">
              Register
            </button>
          </li>
        </ul>
      </div>
      <MenuIcon menuClick={menuClick} openNav={openNav} />
    </nav>
  );
};

export default Navbar;
