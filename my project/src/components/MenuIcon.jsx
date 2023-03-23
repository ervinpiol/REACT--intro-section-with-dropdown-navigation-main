import React from "react";

const MenuIcon = ({ menuClick, openNav }) => {
  return (
    <div className="hidden lg:block">
      <div
        className={`menu-icon inline-block cursor-pointer ${
          openNav ? "active" : ""
        }`}
        onClick={menuClick}
      >
        <span className="block w-[30px] h-[3px] my-1.5 bg-black transition-transform duration-300 ease-out origin-top-left"></span>
        <span className="block w-[30px] h-[3px] my-1.5 bg-black transition-transform duration-300 ease-out"></span>
        <span className="block w-[30px] h-[3px] my-1.5 bg-black transition-transform duration-300 ease-out origin-bottom-left"></span>
      </div>
    </div>
  );
};

export default MenuIcon;
