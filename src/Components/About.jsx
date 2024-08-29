import React from "react";
import Seo from "./Seo";
import farm1 from "../Assets/Downpic.cc-1944989680.jpg";

const About = () => {
  return (
    <div className="w-full">
      <Seo title="About - Galleon Trading" description="" keywords="" />

      <div className="relative h-layout1 overflow-hidden bg-black w-full">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url(${farm1})` }}
        ></div>
        <div className="relative h-fit flex flex-col mt-96 justify-center text-white z-10 bg-slate-200 mx-auto w-6/12 px-28 pt-4 rounded-xl">
          <h1 className="text-4xl text-cs5 font-bold">About Us</h1>
          <p>
            Founded by Sriraag Subramonian in 2023 Sriraag Subramonian is a
            Software Engineer by education with extensive experience in the
            family business. Has experience of more than 11 years in the
            Agricultural Trading business.
          </p>
        </div>
      </div>

      <div className="h-fit bg-gray-200 flex items-center justify-center">
        <p className="text-xl">Scroll down to see the parallax effect.</p>
      </div>
    </div>
  );
};

export default About;
