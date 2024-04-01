import React from "react";
import img from "./../../styles/img/img.png";

function Header() {
  return (
    <div className="flex lg:px-[15rem] md:px-[2rem]">
      <div className="logo lg:w-36 md:w-28 sm:w-20 max-sm:w-16">
        <img src={img} alt="" />
      </div>
      <div className="info"></div>
    </div>
  );
}

export default Header;
