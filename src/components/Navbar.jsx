import React from "react";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <header className="bg-white text-gray-600 body-font shadow-md">
      <div className="container mx-auto flex flex-wrap p-3  flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center  text-gray-900 mb-0  md:mb-0">
          <img className="h-10" src={Logo} alt="Logo" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
