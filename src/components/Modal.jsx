import React from "react";
import CardModal from "./CardModal";
import IconCloseModal from "../assets/images/icon-close-modal.svg";

const cards = [
  {
    title: "Bamboo Stand",
    price: "Pledge $25 or more",
    description:
      "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    limit: 101,
  },
  {
    title: "Black Edition Stand",
    price: "Pledge $75 or more",
    description:
      "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    limit: 64,
  },
  {
    title: "Mahogany Special Edition",
    price: "Pledge $200 or more",
    description:
      "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    limit: 0,
  },
];

const Modal = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-10">
      <div className="w-10/12 xl:w-9/12">
        <div className="bg-white border border-slate-200 rounded-lg">
          <div className="flex justify-between items-center p-6">
            <p className="font-bold text-lg">Back this project</p>
            <img src={IconCloseModal} className="h-5" alt="close" />
          </div>
          <div className="overflow-scroll max-h-[480px]">
            <div className="space-y-6 px-6">
              <p className="text-dark-gray text-base text-left">
                Want to support us in bringing Mastercraft Bamboo Monitor Riser
                out in the world?
              </p>
            </div>
            <div className="space-y-6 p-6">
              <div className="bg-white border border-slate-300 rounded-md">
                <div className="flex px-5 py-5 gap-5">
                  <input type="radio" className="w-6" name="" id="" />
                  <p className="font-bold hover:text-moderate-cyan">Pledge with no reward</p>
                </div>
                <p className="text-dark-gray lg:mx-5 text-left m-5">Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>
              </div>
              <div>
                {cards.map((card, index) => (
                  <CardModal
                    key={index}
                    title={card.title}
                    price={card.price}
                    description={card.description}
                    limit={card.limit}
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
