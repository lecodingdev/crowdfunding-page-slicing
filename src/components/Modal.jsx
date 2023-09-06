import React, { useState } from "react";
import CardModal from "./CardModal";
import IconCloseModal from "../assets/images/icon-close-modal.svg";

const cards = [
  {
    title: "Bamboo Stand",
    price: "Pledge $25 or more",
    pledge: "$25",
    description:
      "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    limit: 101,
  },
  {
    title: "Black Edition Stand",
    price: "Pledge $75 or more",
    pledge: "$75",
    description:
      "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    limit: 64,
  },
  {
    title: "Mahogany Special Edition",
    price: "Pledge $200 or more",
    pledge: "",
    description:
      "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    limit: 0,
  },
];

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const [isChecked, setIsChecked] = useState(false)

  const toggleModal = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-10">
      <div className="w-10/12 xl:w-9/12">
        <div className="bg-white border border-slate-200 rounded-lg">
          <div className="flex justify-between items-center p-6">
            <p className="font-bold text-lg">Back this project</p>
            <img
              onClick={() => onClose()}
              src={IconCloseModal}
              className="h-5 cursor-pointer"
              alt="close"
            />
          </div>
          <div className="overflow-scroll max-h-[480px]">
            <div className="space-y-6 px-6">
              <p className="text-dark-gray text-base text-left">
                Want to support us in bringing Mastercraft Bamboo Monitor Riser
                out in the world?
              </p>
            </div>
            <div className="space-y-6 p-6 ">
              <label className="cursor-pointer">
                <input type="radio" className="peer sr-only" name="pricing" />
                <div className="w-full border border-slate-300 max-w-xl lg:max-w-screen-lg rounded-md bg-white p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-moderate-cyan peer-checked:ring-moderate-cyan peer-checked:ring-offset-0 peer-checked:border-none">
                  <div onClick={toggleModal} className="flex flex-col gap-1">
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
                        <circle cx="12" cy="12" r="4" fill={isChecked ? "currentColor" : "none"} />
                      </svg>
                      <p className="font-bold hover:text-moderate-cyan no-hover">
                        Pledge with no reward
                      </p>
                    </div>
                    <div className="flex items-end justify-between">
                      <p className="text-dark-gray text-left m-5 lg:mx-[70px] lg:m-0 lg:mb-2">
                        Choose to support us without a reward if you simply
                        believe in our project. As a backer, you will be signed
                        up to receive product updates via email.
                      </p>
                    </div>
                  </div>
                </div>
              </label>
              <div>
                {cards.map((card, index) => (
                  <CardModal
                    key={index}
                    title={card.title}
                    price={card.price}
                    description={card.description}
                    limit={card.limit}
                    pledge={card.pledge}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
