import React, { useState } from "react";
import IconBookmark from "../assets/images/icon-bookmark";

import logoSection from "../assets/images/logo-mastercraft.svg";
import Button from "./Button";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleBookmark = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="w-11/12 mx-auto bg-white border border-slate-200 rounded-lg lg:w-10/12 xl:w-9/12">
      <div className="flex justify-center">
        <img className="relative -top-6" src={logoSection} />
      </div>
      <div className="flex flex-col text-center space-y-6">
        <p className="font-bold text-xl w-48 mx-auto lg:w-full">
          Mastercraft Bamboo Monitor Riser
        </p>
        <p className="text-dark-gray">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>

        <div className="flex justify-between mx-10 pb-8">
          <Button text="Back this project" />
          <div onClick={toggleBookmark} className="flex items-center">
            <span className={`absolute ml-24 hidden md:flex cursor-pointer ${isClicked ? "text-cyan-600" : ""}`}>
              {isClicked ? "Bookmarked" : "Bookmark"}
            </span>
            {isClicked ? (
              <IconBookmark
                fillCircle="#3CB4AC"
                fillPath="#fff"
                className="cursor-pointer md:bg-slate-200 md:w-60 md:rounded-full"
              />
            ) : (
              <IconBookmark
                fillCircle="#2F2F2F"
                fillPath="#B1B1B1"
                className="cursor-pointer md:bg-slate-200 md:w-60 md:rounded-full"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
