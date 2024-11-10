import React from "react";
import Seo from "./Seo";
import seasmeImage from "../Assets/seasme.jpg";
import GlobeThree1 from "./GlobeThree1";

const Seasme = () => {
  // const arg = "Seasme";
  const locations = [
    // Origin countries (red)
    { lat: -18.6657, lng: 35.5296, label: "Mozambique", color: "green" },
    { lat: 12.2383, lng: -1.5616, label: "Burkina Faso", color: "green" },

    // Target markets (blue)
    // { lat: 20.5937, lng: 78.9629, label: "India", color: "red" },
    // { lat: 14.0583, lng: 108.2772, label: "Vietnam", color: "red" },
    // { lat: 54.526, lng: 15.2551, label: "Europe", color: "red" }, // Central point of Europe
    // { lat: 55.3781, lng: -3.436, label: "UK", color: "red" },
    // { lat: 37.0902, lng: -95.7129, label: "USA", color: "red" },
    // { lat: 56.1304, lng: -106.3468, label: "Canada", color: "red" },
  ];

  return (
    <div className="w-screen bg-cs2 h-fit -mt-1">
      {/* Seasme */}
      <Seo title="Seasme - Galleon Trading" description="" keywords="" />
      {/* <GlobeCesium /> */}
      <div className=" xl:flex-row flex-col flex items-center justify-center mt-7">
        <div className="xl:w-1/3 xl:mx-auto text-xl p-6 flex-col justify-center flex">
          <div className="flex w-full"></div>
          <div className="flex-row justify-center flex h-full bg-gray-200 mx-28 py-8 rounded-3xl">
            <div className=" text-white text-base w-full  flex-col flex items-center pl-2  ">
              <div className="whitespace-nowrap text-green-500 font-bold bg-opacity-60 px-2 rounded-full py-0.5 w-fit  text-3xl">
                Origins
              </div>
              <div className="h-0.5 rounded-full w-1/3 mb-3 bg-cs5 bg-opacity-60"></div>

              <div className="whitespace-nowrap bg-green-500 bg-opacity-60 px-2 rounded-full py-0.5 w-fit my-1">
                Mozambique{" "}
              </div>

              <div className="whitespace-nowrap bg-green-500 bg-opacity-60 px-2 rounded-full py-0.5 w-fit my-1">
                Burkina Faso
              </div>
            </div>
            {/* <div className="w-1 bg-cs5 rounded-full mt-9"></div> */}
            {/* <div className=" text-white text-base w-1/2  flex-col flex items-start pl-2 ">
              <div className="whitespace-nowrap text-red-600 font-bold bg-opacity-60 px-2 rounded-full py-0.5 w-fit my-1">
                exports
              </div>
              <div className="whitespace-nowrap bg-red-600 bg-opacity-60 px-2 rounded-full py-0.5 w-fit my-1">
                India
              </div>
              <div className="whitespace-nowrap bg-red-600 bg-opacity-60 px-2 rounded-full py-0.5 w-fit my-1">
                Vietnam
              </div>{" "}
              <div className="whitespace-nowrap bg-red-600 bg-opacity-60 px-2 rounded-full py-0.5 w-fit my-1">
                Europe
              </div>{" "}
              <div className="whitespace-nowrap bg-red-600 bg-opacity-60 px-2 rounded-full py-0.5 w-fit my-1">
                UK
              </div>{" "}
              <div className="whitespace-nowrap bg-red-600 bg-opacity-60 px-2 rounded-full py-0.5 w-fit my-1">
                USA
              </div>
              <div className="whitespace-nowrap bg-red-600 bg-opacity-60 px-2 rounded-full py-0.5 w-fit my-1">
                Canada
              </div>
            </div> */}
          </div>

          {/* <br /> */}
        </div>

        <div className="relative w-full xl:w-1/3 overflow-hidden h-[48.5vh]  transform transition delay-150 ease-in-out group">
          <a href="/contact">
            <div className="absolute inset-0 bg-black opacity-55 group-hover:opacity-40 z-10"></div>

            <img
              src={seasmeImage}
              className="absolute inset-0 w-full h-full object-cover object-right"
              alt=""
            />
            <p className="absolute inset-0 w-full h-full text-5xl md:text-6xl flex items-start justify-start p-6 font-bold flex-col text-white z-20">
              Sesame Seeds
              <span className=" md:text-xl text-base py-1 md:py-8 font-semibold w-1/2">
                High-quality sesame seeds for global markets.
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                fill="none"
                id="phone"
                className="fill-white"
                viewBox="0 0 24 24"
              >
                <path
                  // fill="#000"
                  // fill-rule="evenodd"
                  d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3.232-8.639 1.544 1.548c.307.309.297.82-.02 1.14l-.442.432-.01-.009a2.606 2.606 0 0 1-1.274.52c-.1.011-2.435.23-5.333-2.674-2.097-2.101-2.87-3.65-2.665-5.344.023-.212.075-.422.16-.643.09-.232.212-.448.358-.634l-.012-.012.435-.439c.319-.32.829-.329 1.135-.021l1.545 1.548c.307.308.298.818-.02 1.138l-.258.257-.522.523a10.386 10.386 0 0 1 .084.15l.001.003c.273.493.647 1.167 1.355 1.876.708.71 1.38 1.084 1.872 1.357l.153.086.778-.78c.319-.32.828-.329 1.136-.021Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </p>
          </a>
        </div>

        <div className="x:w-1/3">
          <GlobeThree1 locations={locations} />{" "}
        </div>
      </div>
    </div>
  );
};

export default Seasme;
