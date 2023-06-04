import React from "react";
import Button from "./Button";

const Card = ({ title, price, description, limit }) => {
  return (
    <div
      className={`bg-white border border-slate-300 rounded-md ${
        !limit && "opacity-40"
      }`}
    >
      <div className="space-y-6 p-4">
        <div>
          <p className="font-bold">{title}</p>
          <p className="text-moderate-cyan font-medium">{price}</p>
        </div>
        <p className="text-dark-gray">{description}</p>
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <p className="font-bold text-3xl">{limit}</p>
            <p>left</p>
          </div>
          <Button text="Select Reward" disabled={!limit}/>
        </div>
      </div>
    </div>
  );
};

export default Card;
