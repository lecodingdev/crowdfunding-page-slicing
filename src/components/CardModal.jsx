import React from "react";

const CardModal = ({ title, price, description, limit }) => {
  return (
    <div
      className={`bg-white border border-slate-300 rounded-md mb-6 ${
        !limit && "opacity-40"
      }`}
    >
      <div className="space-y-6 p-6">
        <div className="flex lg:justify-between">
          <div className="flex items-center gap-5 text-left ">
          <input type="radio" className="w-6 h-6" name="" id="" />
          <div className="lg:flex lg:gap-5">
            <p className="font-bold hover:text-moderate-cyan">{title}</p>
            <p className="text-moderate-cyan font-medium">{price}</p>
          </div>
          </div>
          <div className="items-center space-x-2 hidden lg:flex self-end">
            <p className="font-bold text-xl">{limit}</p>
            <p className="text-base text-gray-400">left</p>
          </div>
        </div>
        <p className="text-dark-gray text-left">{description}</p>
        <div className="space-y-6 lg:flex lg:justify-between lg:mx-5">
          <div className="flex items-center space-x-2 lg:hidden">
            <p className="font-bold text-xl">{limit}</p>
            <p className="text-base text-gray-400">left</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
