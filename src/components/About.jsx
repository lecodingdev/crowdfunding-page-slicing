import React from "react";
import Card from "./Card";

const cards = [
  {
    title: "Bamboo Stand",
    price: "Pledge $25 or more",
    description: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    limit: 101,
  },
  {
    title: "Black Edition Stand",
    price: "Pledge $75 or more",
    description: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    limit: 64,
  },
  {
    title: "Mahogany Special Edition",
    price: "Pledge $200 or more",
    description: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    limit: 0,
  },
];

const About = () => {
  return (
    <div className="w-11/12 mx-auto bg-white border border-slate-200 rounded-lg">
      <div className="px-2 py-8">
        <p className="font-bold text-lg mb-6">About this project</p>
        <div className="space-y-6 mb-6">
          <p className="text-dark-gray text-base">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <p className="text-dark-gray text-base">
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
        </div>
        <div className="space-y-6">
          {cards.map((card, index) => (
            <Card
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
  );
};

export default About;
