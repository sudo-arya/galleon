import React from "react";
import Seo from "./Seo";
import "../index";
import GlobalMap from "./WorldMap";


const OurPresence = () => {
  // const arg = "Home";

  return (
    <div className="w-screen bg-cs2 h-fit ">
      {/* Home */}
      <Seo title="Home - Galleon Trading" description="" keywords="" />
      <div className="h-fit bg-sky-600 bg-opacity-20 flex items-center justify-center flex-col pb-1 xl:p-20 p-14 w-full">
        <span className="x:text-8xl text-7xl text-cs5 font-bold -ml-6">
          {" "}
          Our Global Presence{" "}
          <div className=" flex items-center justify-center">
            <hr className="h-2 w-3/4 border-cs5 pb-1 mt-2 " />
          </div>
        </span>

        {/* <div className="xl:flex-row flex-col flex items-start justify-start pt-6">
          <div className="h-fit w-fit text-3xl font-semibold px-6 py-4 animated-gradient rounded-2xl m-2 text-white">
            Global
            <br /> Reach
          </div>
          <div className="h-fit w-fit text-3xl font-semibold px-6 py-4 animated-gradient rounded-2xl m-2 text-white">
            Quality
            <br /> Assurance
          </div>
          <div className="h-fit w-fit text-3xl font-semibold px-6 py-4 animated-gradient rounded-2xl m-2 text-white">
            Strong <br />
            Partnerships
          </div>
          <div className="h-fit w-fit text-3xl font-semibold px-6 py-4 animated-gradient bg-cs6 rounded-2xl m-2 text-white">
            Expertise &<br /> Experience{" "}
          </div>
          <div className="h-fit w-fit text-3xl font-semibold px-6 py-4 animated-gradient bg-cs6 rounded-2xl m-2 text-white">
            Sustainability <br />
            Focus{" "}
          </div>
        </div> */}
        <p className="text-2xl pt-6 text-cs5">
          We take pride in our extensive reach across diverse markets, ensuring
          the delivery of quality products and services worldwide. <br />
          Our network spans key regions, enabling us to connect with customers,
          partners, and communities on a global scale.
        </p>
      </div>
      <div className=" flex-col flex items-center justify-center xl:p-20 xl:px-80 bg-sky-600 bg-opacity-20 xl:pt-1 pt-8">
        <div className="bg-gray-300 h-fit w-full z-10 xl:rounded-3xl ">
          {" "}
          <GlobalMap />
        </div>
      </div>

      <div className="p-8 pt-28 xl:pt-2 pb-14 bg-sky-600 bg-opacity-20">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
          {/* First Column */}
          <div className="max-w-full p-6 rounded-xl overflow-hidden shadow-lg bg-white hover:bg-cs5 text-cs5 hover:text-white transition duration-300 ease-in-out group">
            <h3 className="text-xl font-semibold mb-4">
              Supply Chain Network{" "}
              <hr className="h-2 w-3/4 border-cs5 pb-1 mt-1 group-hover:border-cs2 " />
            </h3>

            <p>
              We operate through a robust supply chain, sourcing quality
              products and raw materials from countries such as India, Vietnam,
              Côte d'Ivoire, Burkina Faso, etc., ensuring reliability and
              sustainability at every step.
            </p>
          </div>

          <div className="max-w-full p-6 rounded-xl overflow-hidden shadow-lg bg-white hover:bg-cs5 text-cs5 hover:text-white transition duration-300 ease-in-out group">
            <h3 className="text-xl font-semibold mb-4">
              Manufacturing and Operations
              <hr className="h-2 w-3/4 border-cs5 pb-1 mt-1 group-hover:border-cs2 " />
            </h3>
            <p>
              Our state-of-the-art manufacturing units are strategically located
              in different regions of world, adhering to the highest standards of
              quality and efficiency to meet global demands.
            </p>
          </div>

          {/* Second Column */}
          <div className="max-w-full p-6 rounded-xl overflow-hidden shadow-lg bg-white hover:bg-cs5 text-cs5 hover:text-white transition duration-300 ease-in-out group">
            <h3 className="text-xl font-semibold mb-4">
              Global Reach
              <hr className="h-2 w-3/4 border-cs5 pb-1 mt-1 group-hover:border-cs2 " />
            </h3>
            <p>
              With exports to over 17+ countries across 5 continents, we
              continue to strengthen our position as a trusted name in the
              industry.
            </p>
          </div>

          <div className="max-w-full p-6 rounded-xl overflow-hidden shadow-lg bg-white hover:bg-cs5 text-cs5 hover:text-white transition duration-300 ease-in-out group">
            <h3 className="text-xl font-semibold mb-4">
              Sustainability & Impact
              <hr className="h-2 w-3/4 border-cs5 pb-1 mt-1 group-hover:border-cs2 " />
            </h3>
            <p>
              Our presence is not just about business; it’s about building
              lasting relationships, creating opportunities, and leaving a
              positive impact on the communities we operate in. From supporting
              local farmers in sourcing regions to implementing eco-friendly
              practices in our facilities, we are committed to a better
              tomorrow.
            </p>
          </div>
        </div>
      </div>

      <div className="h-fit bg-sky-600 bg-opacity-20 flex items-center justify-center flex-col xl:pt-2  pb-10 xl:p-20 p-8 w-full text-cs5">
        <div className="flex items-center justify-center flex-col xl:flex-row">
          <div className="rounded-full w-80 h-80 border-2 p-10 border-cs5 items-center justify-center flex flex-col text-7xl ">
            <span className="text-2xl">Since</span>2023
          </div>
          <div className="rounded-full w-80 h-80 border-2 p-10 border-cs5 items-center justify-center flex flex-col text-5xl font-semibold xl:my-0 my-8 xl:mx-8 text-center ">
            <span className="font-normal text-2xl mb-2">Source from a</span>
            Global
            <br />
            Network<span className="font-normal text-2xl mt-2">of Farmers</span>
          </div>
          <div className="rounded-full w-80 h-80 border-2 p-10 border-cs5 items-center justify-center flex flex-col text-7xl font-semibold text-center ">
            <span className="font-normal text-2xl mb-2">Operating in</span>17+
            <span className="font-normal text-2xl mt-2">Countries</span>
          </div>
        </div>
        <p className="my-10 text-2xl ">
          Our Corporate Office is the heart of our operations, driving
          innovation, strategy, and excellence in everything we do.
        </p>

        <a href="/contact">
          <button className="p-3 px-4 bg-cs6 text-white xl:flex hover:bg-cs5 transform transition ease-in-out delay-50 hidden ">
            Reach us{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              style={{ fill: "white" }}
              viewBox="0 0 32 32"
              id="arrow"
              className="ml-2"
            >
              <path d="M4 15a1 1 0 0 0 1 1h19.586l-4.292 4.292a1 1 0 0 0 1.414 1.414l6-6a.99.99 0 0 0 .292-.702V15c0-.13-.026-.26-.078-.382a.99.99 0 0 0-.216-.324l-6-6a1 1 0 0 0-1.414 1.414L24.586 14H5a1 1 0 0 0-1 1z"></path>
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
};

export default OurPresence;
