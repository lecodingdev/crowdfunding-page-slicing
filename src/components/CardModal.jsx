import React, {useState} from "react";
import Button from "./Button";

const CardModal = ({ title, price, description, limit, pledge }) => {
    const [isChecked, setIsChecked] = useState(false)
    const [isInputChecked, setIsInputChecked] = useState(false)

    const toggleModal = () => {
      setIsChecked(!isChecked);
      setIsInputChecked(!isInputChecked);
    };
  
  return (
    <div className={`mb-5 ${!limit && "opacity-40"}`}>
      <label className="cursor-pointer">
        <input onClick={toggleModal} type="radio" className="peer sr-only" name="pricing" />
        <div className="w-full border border-slate-300 max-w-xl lg:max-w-screen-lg rounded-md bg-white p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-moderate-cyan peer-checked:ring-moderate-cyan peer-checked:ring-offset-0 peer-checked:border-none">
          <div  className="flex flex-col gap-1">
            <div className="flex items-center px-5 py-5 gap-5 hover:text-moderate-cyan">
              <svg width="28" height="28" viewBox="0 0 24 24">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <circle cx="12" cy="12" r="4" fill={isInputChecked ? "currentColor" : "none"} />
              </svg>
              <div className="lg:flex lg:gap-5 text-left flex-grow">
                <p className="font-bold hover:text-moderate-cyan no-hover">{title}</p>
                <p className="text-moderate-cyan font-medium">{price}</p>
              </div>
                <div className="items-center space-x-2 hidden lg:flex lg:justify-end no-hover">
                  <p className="font-bold text-xl no-hover">{limit}</p>
                  <p className="text-base text-gray-400">left</p>
                </div>
            </div>
            <p className="text-dark-gray text-left mx-5 lg:mx-[70px] lg:m-0 lg:mb-2">
              {description}
            </p>
            <div className="space-y-6 lg:flex lg:justify-between lg:mx-5 my-5">
              <div className="flex items-center space-x-2 mx-5 lg:hidden">
                <p className="font-bold text-xl no-hover">{limit}</p>
                <p className="text-base text-gray-400">left</p>
              </div>
            </div>
            <div className={`border-t-2 lg:justify-between lg:items-center ${isChecked ? "lg:flex" : "hidden"}`}>
              <p className="text-dark-gray my-5 lg:mt-10">Enter your pledge</p>
              <div className="flex justify-center gap-5 lg:mt-5">
                <input
                  type="text"
                  className="border w-32 py-4 rounded-full text-center focus:border-moderate-cyan"
                  value={pledge}
                />
                <Button text="Continue" />
              </div>
            </div>
          </div>
        </div>
      </label>

      {/* <div className="space-y-6 p-6">
        <div className="flex lg:justify-between">
          <div className="flex items-center gap-5 text-left hover:text-moderate-cyan">
            <input type="radio" id="option1" className="opacity-0 absolute" />
            <label for="option1" class="cursor-pointer">
              <div className="w-6 h-6 border border-gray-400 rounded-full transition duration-300 transform translate-y-0 hover:border-cyan-500"></div>
            </label>
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
        <div className="border-t-2 lg:flex lg:justify-between lg:items-center">
          <p className="text-dark-gray my-5 lg:mt-10">Enter your pledge</p>
          <div className="flex justify-center gap-5 lg:mt-5">
            <input
              type="text"
              className="border w-32 py-4 rounded-full text-center focus:border-moderate-cyan"
              value={pledge}
            />
            <Button text="Continue" />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CardModal;
