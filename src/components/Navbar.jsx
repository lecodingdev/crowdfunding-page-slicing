import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import IconHamburger from "../assets/images/icon-hamburger.svg";
import IconClose from "../assets/images/icon-close-menu.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute py-7 md:py-12 px-6 z-10 w-full bg-gradient-to-b from-black-65 md:from-black to-transparent">
      <div className="max-w-6xl md:px-6 mx-auto flex items-center justify-between">
        <img src={logo} alt="crowdfund image alt" />

        <div className="flex items-center px-4">
          <button onClick={toggleMenu}>
            <img
              src={isOpen ? IconClose : IconHamburger}
              className="cursor-pointer md:hidden"
              alt="Menu Icon"
            />
          </button>

          <div
            onClick={toggleMenu}
            className={`absolute py-5 bg-white shadow-md rounded-lg max-w-[250px] w-full right-4 top-full md:block md:static md:bg-transparent md:max-w-full md:shadow-none md:rounded-none text-black md:text-white text-sm space-x-8 ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            <ul className="block md:flex">
                <li className="group">
                  <p
                    to=""
                    className="text-base text-dark py-2 mx-8 flex cursor-pointer"
                  >
                    About
                  </p>
                </li>
                <li className="group">
                  <p
                    to="blog"
                    className="text-base text-dark py-2 mx-8 flex cursor-pointer"
                  >
                    Discover
                  </p>
                </li>
                <li className="group">
                  <p
                    to="project"
                    className="text-base text-dark py-2 mx-8 flex cursor-pointer"
                  >
                    Get Started
                  </p>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
