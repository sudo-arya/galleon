import React from "react";
import Seo from "./Seo";
import farm1 from "../Assets/Untitled.png";
// import farm1 from "../Assets/Downpic.cc-19449896801.jpg";
// import downloadicon from "../Assets/icons8-download-50.png";


const About = () => {
  return (
    <div className="w-full bg-cs2">
      <Seo title="About - Galleon Trading" description="" keywords="" />

      <div className="relative h-100 overflow-hidden bg-black w-full">
        <div
          className="absolute inset-0 bg-cover bg-fixed bg-center"
          // bg-fixed
          style={{ backgroundImage: `url(${farm1})` }}
        ></div>
        <div className="flex items-center justify-center w-full h-full md:mt-28">
          <div className="relative h-fit flex flex-col justify-center  text-white z-10 bg-slate-200 md:mx-auto w-fit bg-opacity-80 md:px-10 px-8 mx-6 py-4 mt-36 md:mt-0 pt-9 pb-9 rounded-xl">
            <h1 className="text-5xl text-cs5 font-bold text-center">
              About Us
            </h1>
            <div className="flex items-center justify-center">
              <hr className=" w-1/2  border-cs7 mt-1" />
            </div>
            <p className=" text-cs4 mb-4 text-lg mx-auto">
              <br />
              Founded in 2023 by Sriraag Subramonian, Galleon Trading aims to
              bring modern solutions to the agricultural trading industry. With{" "}
              <br />a background in software engineering and over 11 years of
              experience in his family’s agricultural business, Sriraag combines{" "}
              <br />
              technical expertise with deep industry knowledge. His experience
              enables him to lead Galleon Trading with a focus on quality,{" "}
              <br />
              transparency, and sustainable growth in agriculture.
            </p>
          </div>
        </div>
      </div>

      <div className="h-fit  bg-cs2 flex items-center justify-center flex-col my-16">
        <p className="text-lg mx-auto w-9/12 pt-6">
          Galleon Trading LLC-FZ, headquartered in Dubai and registered under
          the Meydan Free Zone, is a dynamic organization specializing in the
          trading of agricultural commodities, including cashew nuts, sesame
          seeds, and other dry fruits. With strategic procurement operations
          across East and West Africa, and Asia, we source and trade raw
          agricultural products and value-added food items to processing
          countries like India and Vietnam and market them globally. Our
          presence in Dubai places us at the center of international trade,
          leveraging the region's connectivity and business-friendly
          environment.
          <br /> <br /> Since our inception, we have established a solid
          foothold in the global market, capitalizing on our extensive network
          and expertise in agricultural trading. We aim to expand our reach and
          strengthen our leadership in the industry, adhering to high standards
          of ethics and sustainability.
        </p>
        {/* <button className="p-3 my-6 px-4 bg-cs6 text-white flex flex-row hover:bg-cs5 transform transition ease-in-out delay-50 ">
          <img
            src={downloadicon}
            alt=""
            className="mx-3"
            height={24}
            width={24}
          />
          Download our Factsheet
        </button> */}
      </div>
    </div>
  );
};

export default About;
