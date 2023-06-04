import React from "react";
import IconBookmark from "../assets/images/icon-bookmark";

import logoSection from "../assets/images/logo-mastercraft.svg";
import Button from "./Button";

const Header = () => {
  return (
    <div className="w-11/12 mx-auto bg-white border border-slate-200 rounded-lg">
      <div className="flex justify-center">
        <img className="relative -top-6" src={logoSection} />
      </div>
      <div className="flex flex-col text-center space-y-6">
        <p className="font-bold text-xl w-48 mx-auto">
          Mastercraft Bamboo Monitor Riser
        </p>
        <p className="text-dark-gray">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>

        <div className="flex justify-center space-x-2 pb-8">
        <Button text="Back this project" />
        <IconBookmark className="cursor-pointer"/>
      </div>
      </div>
    </div>
  );
};

export default Header;
