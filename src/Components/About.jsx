import React from "react";
import Seo from "./Seo";
import farm1 from "../Assets/Downpic.cc-1944989680.jpg";
import downloadicon from "../Assets/icons8-download-50.png";
import baseImage from "../Assets/base.jpg";
import cashewShellImage from "../Assets/cashew in shells.jpg";
import cashewImage from "../Assets/cashew.jpg";
import seasmeImage from "../Assets/seasme.jpg";
import peanutImage from "../Assets/peanut1.jpg";
import cottonImage from "../Assets/cotton.jpg";
import pulsesImage from "../Assets/pulses.jpg";

const About = () => {
  return (
    <div className="w-full bg-cs2">
      <Seo title="About - Galleon Trading" description="" keywords="" />

      <div className="relative h-100 overflow-hidden bg-black w-full">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
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
              Founded by Sriraag Subramonian in 2023 Sriraag Subramonian is a
              <br />
              Software Engineer by education with extensive experience in the
              <br />
              family business. Has experience of more than 11 years in the
              <br />
              Agricultural Trading business.
            </p>
          </div>
        </div>
      </div>

      <div className="h-fit  bg-cs2 flex items-center justify-center flex-col my-12">
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
        <button className="p-3 my-6 px-4 bg-cs6 text-white flex flex-row hover:bg-cs5 transform transition ease-in-out delay-50 ">
          <img
            src={downloadicon}
            alt=""
            className="mx-3"
            height={24}
            width={24}
          />
          Download our Factsheet
        </button>
      </div>

      <div className="h-fit bg-gray-200 flex justify-center w-10/12 my-12 flex-col md:flex-row mx-auto text-white ">
        <div className="md:w-1/3 flex-row">
          <div className="w-full text-white">
            <div className="relative w-full overflow-hidden h-[48.5vh] transform transition delay-150 ease-in-out group">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-black opacity-55 group-hover:opacity-40 z-10"></div>

                <img
                  src={baseImage}
                  className="absolute inset-0 w-full h-full object-cover object-right"
                  alt=""
                />
                <p className="absolute inset-0 w-full h-full text-xl flex items-start justify-start p-6 font-bold flex-col z-20">
                  Years history
                  <span className="md:text-11xl text-10xl py-14 md:py-20 font-semibold">
                    11+
                  </span>
                  Countries in Operation
                  <span className="text-6xl font-semibold">12+</span>
                  Employees worldwide
                  <span className="text-6xl font-semibold">1000+</span>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex-row">
            <div className="w-full">
              <a href="/seasme">
                <div className="relative w-full overflow-hidden h-[48.5vh]  transform transition delay-150 ease-in-out group">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-black opacity-55 group-hover:opacity-40 z-10"></div>

                    {/* <!-- Image with full cover and contrast enhanced by overlay --> */}
                    <img
                      src={seasmeImage}
                      className="absolute inset-0 w-full h-full object-cover object-right"
                      alt=""
                    />

                    {/* <!-- Text content on top of the image --> */}
                    <p className="absolute inset-0 w-full h-full text-5xl flex items-start justify-start p-6 font-bold flex-col text-white z-20">
                      Sesame Seeds
                      <span className=" text-base py-3 md:py-8 font-semibold">
                        Sesame seeds are sourced from Mozambique and Burkina
                        Faso. They are used in a variety of culinary
                        applications, including baking, cooking, and oil
                        extraction due to their rich flavor and nutritional
                        benefits.
                      </span>
                      <svg
                        height="512"
                        viewBox="0 0 512 512"
                        width="60"
                        xmlns="http://www.w3.org/2000/svg"
                        className=" fill-white"
                      >
                        <title />
                        <path d="M464,256c0-114.87-93.13-208-208-208S48,141.13,48,256s93.13,208,208,208S464,370.87,464,256ZM251.35,347.36a16,16,0,0,1-.09-22.63L303.58,272H170a16,16,0,0,1,0-32H303.58l-52.32-52.73A16,16,0,1,1,274,164.73l79.39,80a16,16,0,0,1,0,22.54l-79.39,80A16,16,0,0,1,251.35,347.36Z" />
                      </svg>
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-full">
              <a href="/pulses">
                <div className="relative w-full overflow-hidden h-[49vh] transform transition delay-150 ease-in-out group">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-black opacity-55 group-hover:opacity-40 z-10"></div>

                    <img
                      src={pulsesImage}
                      className="absolute inset-0 w-full h-full object-cover object-right"
                      alt=""
                    />
                    <p className="absolute inset-0 w-full h-full text-5xl flex items-start justify-start p-6 font-bold flex-col text-white z-20">
                      Pulses
                      <span className=" text-base py-3 md:py-8 font-semibold">
                        Pulses, including beans, lentils, and chickpeas, are
                        sourced from Tanzania and Mozambique. These are rich in
                        protein and fiber and are a staple in many diets
                        worldwide, used in cooking and processed food products.
                      </span>
                      <svg
                        height="512"
                        viewBox="0 0 512 512"
                        width="60"
                        xmlns="http://www.w3.org/2000/svg"
                        className=" fill-white"
                      >
                        <title />
                        <path d="M464,256c0-114.87-93.13-208-208-208S48,141.13,48,256s93.13,208,208,208S464,370.87,464,256ZM251.35,347.36a16,16,0,0,1-.09-22.63L303.58,272H170a16,16,0,0,1,0-32H303.58l-52.32-52.73A16,16,0,1,1,274,164.73l79.39,80a16,16,0,0,1,0,22.54l-79.39,80A16,16,0,0,1,251.35,347.36Z" />
                      </svg>
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 flex-row">
          <div className="w-full">
            <a href="/cashewShell">
              <div className="relative w-full overflow-hidden h-[48.5vh]  transform transition delay-150 ease-in-out group">
                <div className="absolute inset-0 bg-black opacity-55 group-hover:opacity-40 z-10"></div>

                <img
                  src={cashewShellImage}
                  className="absolute inset-0 w-full h-full object-cover object-right"
                  alt=""
                />
                <p className="absolute inset-0 w-full h-full text-5xl flex items-start justify-start p-6 font-bold flex-col text-white z-20">
                  Raw Cashew Nuts
                  <span className=" text-base py-1 md:py-8 font-semibold">
                    Sourced from multiple regions, including Tanzania,
                    Mozambique, Nigeria, Ghana, Côte d'Ivoire, Burkina Faso,
                    Guinea Conakry, Senegal, and Guinea Bissau, these are raw
                    cashew nuts still in their shells.
                  </span>
                  <svg
                    height="512"
                    viewBox="0 0 512 512"
                    width="60"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" fill-white"
                  >
                    <title />
                    <path d="M464,256c0-114.87-93.13-208-208-208S48,141.13,48,256s93.13,208,208,208S464,370.87,464,256ZM251.35,347.36a16,16,0,0,1-.09-22.63L303.58,272H170a16,16,0,0,1,0-32H303.58l-52.32-52.73A16,16,0,1,1,274,164.73l79.39,80a16,16,0,0,1,0,22.54l-79.39,80A16,16,0,0,1,251.35,347.36Z" />
                  </svg>
                </p>
              </div>
            </a>
          </div>
          <div className="w-full">
            <a href="/peanuts">
              <div className="relative w-full aspect-[9/16] contrast-75 h-[97.5vh] transform transition delay-150 ease-in-out group">
                <div className="absolute inset-0 bg-black opacity-55 group-hover:opacity-40 z-10"></div>

                <img
                  src={peanutImage}
                  className="absolute inset-0 w-full h-full object-cover object-right"
                  alt=""
                />
                <p className="absolute inset-0 w-full h-full text-5xl flex items-start justify-start p-6 font-bold flex-col text-white z-20">
                  Peanuts
                  <span className=" text-base py-3 md:py-8 font-semibold">
                    Sourced from South Africa, India, and Senegal, these peanuts
                    are used for direct consumption as snacks or for further
                    processing into products like peanut butter, oil, and
                    confections.
                  </span>
                  <svg
                    height="512"
                    viewBox="0 0 512 512"
                    width="60"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" fill-white"
                  >
                    <title />
                    <path d="M464,256c0-114.87-93.13-208-208-208S48,141.13,48,256s93.13,208,208,208S464,370.87,464,256ZM251.35,347.36a16,16,0,0,1-.09-22.63L303.58,272H170a16,16,0,0,1,0-32H303.58l-52.32-52.73A16,16,0,1,1,274,164.73l79.39,80a16,16,0,0,1,0,22.54l-79.39,80A16,16,0,0,1,251.35,347.36Z" />
                  </svg>
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="md:w-1/3 flex-row">
          <div className="w-full">
            <a href="/cashewKernels">
              <div className="relative w-full overflow-hidden h-[48.5vh]  transform transition delay-150 ease-in-out group">
                <div className="absolute inset-0 bg-black opacity-55 group-hover:opacity-40 z-10"></div>

                <img
                  src={cashewImage}
                  className="absolute inset-0 w-full h-full object-cover object-right"
                  alt=""
                />
                <p className="absolute inset-0 w-full h-full text-5xl flex items-start justify-start p-6 font-bold flex-col text-white z-20">
                  Cashew Kernels
                  <span className=" text-base py-3 md:py-8 font-semibold">
                    These are processed cashew nuts sourced from India, Vietnam,
                    Côte d'Ivoire, and Mozambique. Cashew kernels are available
                    in various grades and are commonly used in snacks,
                    confectionery, and cooking.
                  </span>
                  <svg
                    height="512"
                    viewBox="0 0 512 512"
                    width="60"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" fill-white"
                  >
                    <title />
                    <path d="M464,256c0-114.87-93.13-208-208-208S48,141.13,48,256s93.13,208,208,208S464,370.87,464,256ZM251.35,347.36a16,16,0,0,1-.09-22.63L303.58,272H170a16,16,0,0,1,0-32H303.58l-52.32-52.73A16,16,0,1,1,274,164.73l79.39,80a16,16,0,0,1,0,22.54l-79.39,80A16,16,0,0,1,251.35,347.36Z" />
                  </svg>
                </p>
              </div>
            </a>
          </div>
          <div className="w-full flex-row">
            <div className="w-full">
              <a href="/cotton">
                <div className="relative w-full overflow-hidden h-[48.5vh]  transform transition delay-150 ease-in-out group">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-black opacity-55 group-hover:opacity-40 z-10"></div>

                    <img
                      src={cottonImage}
                      className="w-full h-full object-cover object-right"
                      alt=""
                    />
                    <p className="absolute inset-0 w-full h-full text-5xl flex items-start justify-start p-6 font-bold flex-col text-white z-20">
                      Cotton
                      <span className=" text-base py-3 md:py-8 font-semibold">
                        Cotton is sourced from Burkina Faso and Côte d'Ivoire.
                        It is a vital raw material for the textile industry,
                        valued for its versatility and softness.
                      </span>
                      <svg
                        height="512"
                        viewBox="0 0 512 512"
                        width="60"
                        xmlns="http://www.w3.org/2000/svg"
                        className=" fill-white"
                      >
                        <title />
                        <path d="M464,256c0-114.87-93.13-208-208-208S48,141.13,48,256s93.13,208,208,208S464,370.87,464,256ZM251.35,347.36a16,16,0,0,1-.09-22.63L303.58,272H170a16,16,0,0,1,0-32H303.58l-52.32-52.73A16,16,0,1,1,274,164.73l79.39,80a16,16,0,0,1,0,22.54l-79.39,80A16,16,0,0,1,251.35,347.36Z" />
                      </svg>
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-full">
              <a href="/ethics">
                <div className="relative w-full overflow-hidden h-[49vh] transform transition delay-150 ease-in-out group">
                  <div className="relative w-full h-full bg-cs6 text-white">
                    <div className="absolute inset-0 bg-black opacity-55 group-hover:opacity-40 z-10"></div>

                    {/* <img
                    src={pulsesImage}
                    className="w-full h-full object-cover object-right"
                    alt=""
                  /> */}
                    <p className="absolute inset-0 w-full h-full text-5xl flex items-start justify-start p-6 font-bold flex-col text-white z-20">
                      Ethics & Complaince
                      <span className=" text-base py-3 md:py-8 font-semibold">
                        We are committed to upholding the highest standards of
                        ethics and compliance, ensuring transparency and
                        integrity in all our operations. Our practices are
                        aligned with global norms to foster trust and
                        accountability across our value chain.
                      </span>
                      <svg
                        height="512"
                        viewBox="0 0 512 512"
                        width="60"
                        xmlns="http://www.w3.org/2000/svg"
                        className=" fill-white"
                      >
                        <title />
                        <path d="M464,256c0-114.87-93.13-208-208-208S48,141.13,48,256s93.13,208,208,208S464,370.87,464,256ZM251.35,347.36a16,16,0,0,1-.09-22.63L303.58,272H170a16,16,0,0,1,0-32H303.58l-52.32-52.73A16,16,0,1,1,274,164.73l79.39,80a16,16,0,0,1,0,22.54l-79.39,80A16,16,0,0,1,251.35,347.36Z" />
                      </svg>
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
