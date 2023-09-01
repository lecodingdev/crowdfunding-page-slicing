import { useState } from "react";
import reactLogo from "./assets/react.svg";
import About from "./components/About";
import Banner from "./components/Banner";
import Button from "./components/Button";
import DoubleText from "./components/DoubleText";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ProgressBar from "./components/ProgressBar";

const doubleTexts = [
  {
    text1: "$89,914",
    text2: "of $100,000 backed",
    withLine: true,
  },
  {
    text1: "5,007",
    text2: "total backers",
    withLine: true,
  },
  {
    text1: "56",
    text2: "days left",
    withLine: false,
  },
];

function App() {
  return (
    <>
      <Navbar />
      <Banner />

      <main className="container relative -top-9 space-y-8">
        <Header />

        <div className="w-11/12 mx-auto bg-white flex flex-col items-center border border-slate-200 text-center rounded-lg space-y-6 py-12 lg:w-10/12 xl:w-9/12">
          <div className="lg:grid lg:grid-cols-3 lg:gap-28">
        {doubleTexts.map((doubleText, index) => (
          <DoubleText
          key={index}
          text1={doubleText.text1}
          text2={doubleText.text2}
          withLine={doubleText.withLine}
          />
          ))}
          </div>
        <ProgressBar />
        </div>

        <About />
      </main>
    </>
  );
}

export default App;
