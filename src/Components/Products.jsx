import React from "react";
import Seo from "./Seo";
import baseImage from "../Assets/base.jpg";
import cashewShellImage from "../Assets/cashew in shells.jpg";
import cashewImage from "../Assets/cashew.jpg";
import seasmeImage from "../Assets/seasme.jpg";
import peanutImage from "../Assets/peanut1.jpg";
import cottonImage from "../Assets/cotton.jpg";
import riceImage from "../Assets/rice.jpg";
import pulsesImage from "../Assets/pulses.jpg";

const Products = () => {
  // const arg = "Products";

  return (
    <div className="w-screen bg-cs2">
      {/* Products */}
      <Seo title="Products - Galleon Trading" description="" keywords="" />

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
                <p className="absolute inset-0 w-full h-full text-lg flex items-start justify-start p-6 font-bold flex-col z-20">
                  Years history
                  <span className="md:text-9xl text-10xl  font-semibold">
                    11+
                  </span>
                  Countries in Operation
                  <span className="text-5xl font-semibold">12+</span>
                  Employees worldwide
                  <span className="text-5xl font-semibold">1000+</span>
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
          <div className="w-ful">
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
              <a href="/rice">
                <div className="relative w-full overflow-hidden h-[49vh]  transform transition delay-150 ease-in-out group">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-black opacity-55 group-hover:opacity-40 z-10"></div>

                    <img
                      src={riceImage}
                      className="w-full h-full object-cover object-right"
                      alt=""
                    />
                    <p className="absolute inset-0 w-full h-full text-5xl flex items-start justify-start p-6 font-bold flex-col text-white z-20">
                      Rice
                      <span className=" text-base py-3 md:py-8 font-semibold">
                        Rice is sourced from India and Vietnam, celebrated for
                        its premium quality, rich aroma, and versatility as a
                        staple food grain.
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

      <div className="flex items-center justify-center text-5xl font-semibold mt-12 text-cs5">
        Our offering
      </div>
      <div className=" flex items-center justify-center">
        <hr className="h-2 w-1/4 border-cs5 pb-1 mt-2 " />
      </div>
      <div className="flex md:flex-col flex-row items-center justify-center mt-8 xl:mb-14">
        <div className="flex md:flex-row flex-col items-center text-nowrap justify-center w-full">
          <div className="flex items-center justify-center flex-col font-semibold w-1/6">
            <svg
              // fill="#000000"
              width="100px"
              height="100px"
              viewBox="0 0 52 52"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-cs5"
            >
              <path d="m24 35.33a.81.81 0 0 1 .81.71v11.52a2.44 2.44 0 0 1 -2.32 2.44h-16.42a2.45 2.45 0 0 1 -2.44-2.28v-11.57a.81.81 0 0 1 .71-.81h19.66zm23.61 0a.82.82 0 0 1 .81.71v11.52a2.44 2.44 0 0 1 -2.33 2.44h-16.42a2.44 2.44 0 0 1 -2.43-2.28v-11.57a.81.81 0 0 1 .71-.81h19.61zm-29.92 3.37-.09.07-4.6 5.06-2.11-2a.62.62 0 0 0 -.79-.07l-.08.07-.87.78a.49.49 0 0 0 -.07.71l.07.08 3 2.83a1.25 1.25 0 0 0 .87.36 1.15 1.15 0 0 0 .87-.36l5.52-5.84a.63.63 0 0 0 .06-.72l-.06-.07-.87-.78a.61.61 0 0 0 -.85-.12zm23.61 0-.09.07-4.66 5.06-2.11-2a.61.61 0 0 0 -.78-.07l-.09.07-.87.78a.49.49 0 0 0 -.06.71l.06.08 3 2.83a1.25 1.25 0 0 0 .87.36 1.14 1.14 0 0 0 .87-.36l5.56-5.89a.65.65 0 0 0 0-.72v-.07l-.87-.78a.61.61 0 0 0 -.83-.07zm-18.76-11.52a2.36 2.36 0 0 1 2.27 2.28v2.61a.81.81 0 0 1 -.66.81h-21.39a.78.78 0 0 1 -.76-.7v-2.55a2.38 2.38 0 0 1 2.13-2.44h18.41zm25.18 0a2.36 2.36 0 0 1 2.28 2.28v2.61a.81.81 0 0 1 -.66.81h-21.4a.78.78 0 0 1 -.75-.71v-2.54a2.38 2.38 0 0 1 2.13-2.44h18.4zm-12-17a.81.81 0 0 1 .8.71v11.48a2.44 2.44 0 0 1 -2.28 2.44h-16.37a2.46 2.46 0 0 1 -2.44-2.29v-11.52a.81.81 0 0 1 .71-.8h19.62zm-6.27 3.37-.08.07-4.66 5.06-2.11-2a.61.61 0 0 0 -.78-.07l-.09.07-.87.78a.5.5 0 0 0 -.07.71l.07.08 3 2.82a1.22 1.22 0 0 0 .87.37 1.13 1.13 0 0 0 .87-.37l5.53-5.83a.65.65 0 0 0 .05-.72l-.05-.07-.87-.78a.62.62 0 0 0 -.77-.15zm6.31-11.55a2.44 2.44 0 0 1 2.43 2.28v2.61a.83.83 0 0 1 -.71.81h-22.86a.81.81 0 0 1 -.81-.7v-2.56a2.44 2.44 0 0 1 2.27-2.44z" />
            </svg>
            <span className="my-2 text-cs5">Quality Products</span>
          </div>

          <div className="flex items-center justify-center flex-col font-semibold w-1/6">
            <svg
              width="100px"
              height="100px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-cs5"
            >
              <path
                d="M3 9H21M9 15L11 17L15 13M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                // stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="my-2 text-cs5">Timely Shipment</span>
          </div>

          <div className="flex items-center justify-center flex-col font-semibold  w-1/6">
            <svg
              width="100px"
              height="100px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              id="secure"
              class="icon glyph"
              className="fill-cs5"
            >
              <path
                d="M19.42,3.83,12.24,2h0A.67.67,0,0,0,12,2a.67.67,0,0,0-.2,0h0L4.58,3.83A2,2,0,0,0,3.07,5.92l.42,5.51a12,12,0,0,0,7.24,10.11l.88.38h0a.91.91,0,0,0,.7,0h0l.88-.38a12,12,0,0,0,7.24-10.11l.42-5.51A2,2,0,0,0,19.42,3.83ZM15.71,9.71l-4,4a1,1,0,0,1-1.42,0l-2-2a1,1,0,0,1,1.42-1.42L11,11.59l3.29-3.3a1,1,0,0,1,1.42,1.42Z"
                // style="fill:#231f20"
              ></path>
            </svg>
            <span className="my-2 text-cs5">Reliable & Secure</span>
          </div>
          <div className="flex items-center justify-center flex-col font-semibold  w-1/6">
            <svg
              // fill="#000000"
              width="100px"
              height="100px"
              version="1.1"
              id="Layer_1"
              viewBox="0 0 295.239 295.239"
              className="fill-cs5"
            >
              <g>
                <g>
                  <g>
                    <path
                      d="M36.625,100.001H58.61l3.405,15.319l9.3-2.067l-7.457-33.557c-1.701-7.672-8.382-13.029-16.239-13.029
				s-14.538,5.357-16.238,13.024l-7.457,33.562l9.3,2.067L36.625,100.001z M40.682,81.752c0.724-3.276,3.581-5.562,6.938-5.562
				s6.214,2.286,6.938,5.567l1.938,8.719H38.743L40.682,81.752z"
                    />
                    <path
                      d="M295.239,47.619C295.239,21.362,273.877,0,247.62,0s-47.619,21.362-47.619,47.619c0,10.462,3.433,20.41,9.586,28.571
				h-9.586v14.286c0,7.876,6.41,14.286,14.286,14.286h28.571v6.762c0,2.214-1.505,4.119-3.662,4.633L58.243,159.243
				c-1.448,0.338-2.905,0.01-4.057-0.895c-1.143-0.91-1.805-2.271-1.805-3.738v-2.229h28.571c7.876,0,14.286-6.41,14.286-14.286
				V123.81h-9.586c6.152-8.162,9.586-18.11,9.586-28.571c0-26.257-21.362-47.619-47.619-47.619
				c-26.257,0-47.619,21.361-47.619,47.618c0,10.462,3.433,20.41,9.586,28.571H0.001v14.286c0,7.876,6.41,14.286,14.286,14.286
				h28.571v2.229c0,4.4,1.981,8.486,5.433,11.21c2.557,2.019,5.652,3.081,8.824,3.081c1.11,0,2.233-0.129,3.338-0.395l77.3-18.405
				c-0.148,0.467-0.29,0.938-0.371,1.433l-23.957,143.705h68.386l-23.952-143.705c-0.362-2.176-1.4-4.067-2.848-5.543l86.39-20.571
				c6.467-1.533,10.981-7.248,10.981-13.895v-6.762h28.571c7.876,0,14.286-6.41,14.286-14.286V76.19h-9.586
				C291.805,68.029,295.239,58.081,295.239,47.619z M9.524,95.238c0-21.005,17.09-38.095,38.095-38.095s38.095,17.09,38.095,38.095
				c0,11-4.686,21.324-12.924,28.571H22.449C14.211,116.562,9.524,106.238,9.524,95.238z M14.287,142.857
				c-2.629,0-4.762-2.138-4.762-4.762v-4.762h9.5h57.19h9.5v4.762c0,2.624-2.133,4.762-4.762,4.762H14.287z M170.568,285.714h-45.9
				l22.105-132.619c0.138-0.829,1.552-0.829,1.69,0L170.568,285.714z M209.524,47.619c0-21.005,17.09-38.095,38.095-38.095
				s38.095,17.09,38.095,38.095c0,11-4.686,21.324-12.924,28.571h-50.343C214.211,68.943,209.524,58.619,209.524,47.619z
				 M285.714,85.714v4.762h0.001c0,2.624-2.133,4.762-4.762,4.762h-66.667c-2.629,0-4.762-2.138-4.762-4.762v-4.762h9.5h57.19
				H285.714z"
                    />
                    <path
                      d="M266.667,52.381c0-3.657-1.381-6.995-3.648-9.524c2.267-2.529,3.648-5.867,3.648-9.524
				c0-7.876-6.41-14.285-14.286-14.285h-23.81v47.619h23.81C260.258,66.667,266.667,60.257,266.667,52.381z M238.096,28.571h14.286
				c2.629,0,4.762,2.138,4.762,4.762c0,2.624-2.133,4.762-4.762,4.762h-14.286V28.571z M238.096,47.619h14.286
				c2.629,0,4.762,2.138,4.762,4.762c0,2.624-2.133,4.762-4.762,4.762h-14.286V47.619z"
                    />
                  </g>
                </g>
              </g>
            </svg>
            <span className="my-2 text-cs5">Competitive Pricing</span>
          </div>
        </div>

        <div className="flex md:flex-row flex-col text-nowrap items-center justify-center md:mt-6 w-full">
          <div className="flex items-center justify-center flex-col font-semibold  w-1/6">
            <svg
              // fill="#000000"
              height="100px"
              width="100px"
              version="1.1"
              id="Capa_1"
              className="fill-cs5"
              viewBox="0 0 460.007 460.007"
            >
              <g>
                <path
                  d="M321.552,1.004c-49.074,0-92.263,25.666-116.858,64.277c11.696,14.845,16.069,34.707,10.629,53.695
		c-4.978,17.374-17.108,30.81-32.497,37.911c4.007,3.75,7.424,8.291,9.95,13.329c2.492-1.988,5.249-3.531,8.104-4.617
		c14.829-5.649,31.646,1.29,38.104,15.942l6.942,15.744c6.313,1.482,12.18,4.564,17.05,9.031
		c6.283,5.763,10.403,13.373,11.81,21.702h38.829c16.542,0,30,13.458,30,30c0,4.687-1.094,9.471-3.443,13.93
		c1.146,1.335,2.193,2.755,3.13,4.253c66.047-10.466,116.704-67.796,116.704-136.742C460.007,63.115,397.897,1.004,321.552,1.004z
		 M338.338,184.172l-28.462-35.297c-2.15-2.666-3.323-5.99-3.323-9.415V66.951c0-8.284,6.716-15,15-15c8.284,0,15,6.716,15,15
		v67.214l25.139,31.176c5.2,6.449,4.188,15.892-2.261,21.092C352.986,191.63,343.541,190.624,338.338,184.172z"
                />
                <path
                  d="M228.492,429.859l-39.104-109.732c-4.552-12.772-5.399-17.531-20.256-22.294l-19.055-6.108l4.108-14.34
		c-8.147-1.373-15.038-6.865-18.25-14.389l-28.324-66.61l43.169,54.947c3.657,4.655,9.486,7.36,15.687,6.869l37.343-2.972
		c-0.257,0.886-0.402,1.819-0.402,2.788c0,5.523,4.477,10,10,10c22.94,0,77.556,0,100.206,0c5.551,0,10-4.511,10-10
		c0-5.525-4.479-10-10-10c-7.168,0-57.594,0-64.495,0h0c4.159-3.645,6.617-9.124,6.145-15.061
		c-0.793-9.976-9.523-17.417-19.501-16.626l-3.184,0.253c-10.034-22.755-7.149-16.213-11.894-26.975
		c-2.213-5.019-8.131-7.344-13.185-5.116c-5.053,2.229-7.344,8.132-5.115,13.186c2.864,6.496,5.607,12.716,9.077,20.585
		l-38.184,3.039l-37.166-47.307l39.624,28.173c0.928-3.239,1.109-3.811,1.342-4.812c3.23-13.898-4.959-28.081-18.882-32.069
		c-6.411-1.837-37.789-10.826-44.197-12.662c-15.168-4.347-30.789,5.196-33.919,20.591L53.433,304.294
		c-1.652,8.13,1.184,16.524,7.444,21.986H49.31c-0.846-6.679-18.576-146.684-19.427-153.409
		c-1.041-8.218-8.549-14.033-16.766-12.997c-8.218,1.041-14.037,8.547-12.997,16.766l21.088,166.524
		c0.95,7.496,7.326,13.116,14.881,13.116h47.352v49.49l-32.599,26.611c-6.417,5.239-7.373,14.688-2.134,21.105
		c5.24,6.418,14.688,7.374,21.106,2.135l28.627-23.369l28.627,23.369c6.417,5.237,15.867,4.284,21.106-2.135
		c5.239-6.417,4.283-15.866-2.134-21.105l-32.598-26.611V356.28h42.66l31.424,88.179c4.031,11.312,16.469,17.214,27.783,13.184
		C226.635,453.606,232.513,441.141,228.492,429.859z"
                />
                <path
                  d="M146.631,140.902c21.237,6.084,43.382-6.201,49.465-27.434c6.084-21.235-6.199-43.382-27.434-49.466
		c-21.236-6.083-43.382,6.2-49.465,27.434C113.111,112.678,125.403,134.821,146.631,140.902z"
                />
                <path
                  d="M313.615,279.707H213.409c-8.284,0-15,6.716-15,15c0,8.284,6.716,15,15,15h85.206v118.295h-35.103c-8.284,0-15,6.716-15,15
		c0,8.284,6.716,15,15,15h50.103c8.284,0,15-6.716,15-15V294.707C328.615,286.423,321.899,279.707,313.615,279.707z"
                />
              </g>
            </svg>
            <span className="my-2 text-cs5">Dedication</span>
          </div>
          <div className="flex items-center justify-center flex-col font-semibold  w-1/6">
            <svg
              width="100px"
              height="100px"
              className="fill-cs5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m11.0394722 1c5.5446474 0 10.0394721 4.49611456 10.0394721 10.0423529l-.0089443.4086471 1.93.9126364v3.5454545c0 3.2795455-2.1333333 6.3463636-5 7.0909091-1.4053789-.3650123-2.6345059-1.2881678-3.5224217-2.520903-1.0714058.3920967-2.2298289.6056089-3.4381061.6056089-5.5446474 0-10.0394722-4.4961146-10.0394722-10.042353 0-5.54623834 4.4948248-10.0423529 10.0394722-10.0423529zm2.0389129 16.0005391-4.35262762.0016139c.09272345.2684191.19191916.5251195.2972364.7687567.34504179.7982075.73991482 1.415346 1.14382492 1.8105602.3298076.3227071.6259778.4647645.8896312.4678891l.02555-.001359.0846135-.00531c.2399345-.0315648.5054296-.1756707.7972619-.4612201.4039101-.3952142.7987831-1.0123527 1.1438249-1.8105602l.0769619-.1881088c-.0425969-.1920882-.0781292-.386336-.1062771-.5822618zm-5.517233-.0001981-3.28855306.0007085c1.20672726 1.3672311 2.82199523 2.3651565 4.65470558 2.8026231-.53692274-.6998853-1.00258606-1.6586875-1.36615252-2.8033316zm11.4388479-4.000341h-2v1.999l-1.98736.0006193c-.0038995.0211157-.0078292.042194-.0117891.0632348l-.0008509 1.9371459 2-.001v2.001h2v-2.001l2 .001v-2l-2-.001zm-12.26175207-.9998315-4.66720064.0006585c.15515295 1.4672011.66247165 2.8293111 1.4358166 4.0001656l3.77463061-.0000211c-.29395418-1.2008106-.4844342-2.5562523-.54324657-4.000803zm7.02975207-.0001685-5.91667417.0009718c.06142061 1.4404875.26018398 2.8039709.57273858 4.0001644l4.57693559-.0011362-.001-.0909091v-3.5454545zm-6.68476771-5.00017713-4.10702588.00027079c-.60543227 1.2038667-.94887257 2.56223431-.95544416 4.00020464l4.69723775-.0002983.00298469-.2764328c.01773166-1.3214828.14531945-2.57862393.3622476-3.72374433zm6.83388951-.00026204h-5.70354938c-.24540613 1.22600975-.37993057 2.58641992-.38255229 4.00064557l6.46797987-.0002064-.0038275-.411469c-.0253805-1.26631178-.1565498-2.48238681-.3780507-3.58897017zm5.1569542.00053283-4.0773846-.00027079c.2320173 1.22477284.3618332 2.57769232.3643463 4.00042193l.5229623-.0002448 2.116-1 2.027.958-.0012228-.1812174c-.0392296-1.35521175-.37773-2.63538081-.9517012-3.77668894zm-10.14717797-4.71952395-.213682.05436933c-2.12891378.56409717-3.94851701 1.8886594-5.15062503 3.6654136l3.73955704-.00005449c.38842548-1.55188773.95066461-2.8398017 1.62474999-3.71972844zm2.13140507-.2452158c-.2588386-.00005979-.5579617.14153996-.8914843.46788205-.4039101.39521421-.79878313 1.01235274-1.14382492 1.8105602-.22010847.50919114-.41347859 1.07544151-.57690866 1.68647722h5.23852378c-.1634301-.61103571-.3568002-1.17728608-.5769087-1.68647722-.3450418-.79820746-.7399148-1.41534599-1.1438249-1.8105602-.3289821-.32189932-.6244948-.46405216-.8876507-.467863-.0058692.00003034-.0118947.00000268-.0179216-.00001905zm2.1015515.25456451.0240069.03129144c.660399.87872526 1.2114266 2.15092445 1.5939142 3.67908829l3.7099157.00005449c-1.2353305-1.82585813-3.1227592-3.17418457-5.3278368-3.71043422z"
                // fill="#4285f4"
              />
            </svg>
            <span className="my-2 text-cs5">Risk Management</span>
          </div>
          <div className="flex items-center justify-center flex-col font-semibold  w-1/6">
            <svg
              width="100px"
              height="100px"
              viewBox="0 0 24 24"
              fill="none"
              className="stroke-cs5"
            >
              <path
                d="M22 12C22 13.3132 21.7413 14.6136 21.2388 15.8268C20.7362 17.0401 19.9997 18.1425 19.0711 19.0711C18.1425 19.9997 17.0401 20.7362 15.8268 21.2388C14.6136 21.7413 13.3132 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C4.00035 18.1425 3.26375 17.0401 2.7612 15.8268C2.25866 14.6136 2 13.3132 2 12C2 10.6868 2.25866 9.38642 2.76121 8.17316C3.26375 6.95991 4.00035 5.85752 4.92893 4.92893C5.85752 4.00035 6.95991 3.26375 8.17317 2.7612C9.38642 2.25866 10.6868 2 12 2C13.3132 2 14.6136 2.25866 15.8268 2.76121C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12L22 12Z"
                // stroke="#1C274C"
                stroke-width="1.5"
              />
              <path
                d="M16 12C16 13.3132 15.8965 14.6136 15.6955 15.8268C15.4945 17.0401 15.1999 18.1425 14.8284 19.0711C14.457 19.9997 14.016 20.7362 13.5307 21.2388C13.0454 21.7413 12.5253 22 12 22C11.4747 22 10.9546 21.7413 10.4693 21.2388C9.98396 20.7362 9.54301 19.9997 9.17157 19.0711C8.80014 18.1425 8.5055 17.0401 8.30448 15.8268C8.10346 14.6136 8 13.3132 8 12C8 10.6868 8.10346 9.38642 8.30448 8.17316C8.5055 6.95991 8.80014 5.85752 9.17157 4.92893C9.54301 4.00035 9.98396 3.26375 10.4693 2.7612C10.9546 2.25866 11.4747 2 12 2C12.5253 2 13.0454 2.25866 13.5307 2.76121C14.016 3.26375 14.457 4.00035 14.8284 4.92893C15.1999 5.85752 15.4945 6.95991 15.6955 8.17317C15.8965 9.38642 16 10.6868 16 12L16 12Z"
                // stroke="#1C274C"
                stroke-width="1.5"
              />
              <path
                d="M2 12H22"
                // stroke="#1C274C"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            <span className="my-2 text-cs5">Global Network</span>
          </div>
          <div className="flex items-center justify-center flex-col font-semibold  w-1/6">
            <svg
              // fill="#000000"
              version="1.1"
              id="Layer_1"
              width="100px"
              height="100px"
              viewBox="0 0 472.623 472.623"
              className="fill-cs5"
            >
              <g>
                <g>
                  <path
                    d="M157.062,56.669c-0.985-3.151-3.545-5.514-6.794-6.4l-40.271-11.028L87.056,4.287c-3.643-5.514-12.898-5.514-16.542,0
			L47.573,39.241L7.302,50.269c-3.249,0.886-5.809,3.249-6.794,6.4c-1.083,3.151-0.394,6.695,1.674,9.255l26.191,32.591
			l-2.068,41.748c-0.098,3.348,1.378,6.498,4.135,8.468c2.659,1.969,6.105,2.462,9.255,1.28l39.089-14.868l39.089,14.868
			c1.182,0.394,2.363,0.591,3.545,0.591c1.969,0,4.037-0.591,5.711-1.871c2.757-1.969,4.234-5.12,4.135-8.468l-2.068-41.748
			l26.191-32.591C157.456,63.364,158.145,59.819,157.062,56.669z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <rect
                    x="196.931"
                    y="49.058"
                    width="167.385"
                    height="19.692"
                  />
                </g>
              </g>
              <g>
                <g>
                  <rect
                    x="196.931"
                    y="98.288"
                    width="275.692"
                    height="19.692"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M157.062,217.653c-0.985-3.151-3.545-5.612-6.794-6.498l-40.271-11.028l-22.942-34.954
			c-3.643-5.514-12.898-5.514-16.542,0l-22.942,34.954L7.302,211.155c-3.249,0.886-5.809,3.348-6.794,6.498
			c-1.083,3.151-0.394,6.597,1.674,9.157l26.191,32.591l-2.068,41.846c-0.098,3.249,1.378,6.498,4.135,8.369
			c2.659,1.969,6.105,2.462,9.255,1.28l39.089-14.769l39.089,14.769c1.182,0.394,2.363,0.689,3.545,0.689
			c1.969,0,4.037-0.689,5.711-1.969c2.757-1.871,4.234-5.12,4.135-8.369l-2.068-41.846l26.191-32.591
			C157.456,224.25,158.145,220.804,157.062,217.653z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <rect
                    x="196.931"
                    y="206.596"
                    width="167.385"
                    height="19.692"
                  />
                </g>
              </g>
              <g>
                <g>
                  <rect
                    x="196.931"
                    y="255.827"
                    width="275.692"
                    height="19.692"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M157.062,378.539c-0.985-3.151-3.545-5.612-6.794-6.498l-40.271-10.929l-22.942-35.052
			c-3.643-5.514-12.898-5.514-16.542,0l-22.942,35.052L7.302,372.041c-3.249,0.886-5.809,3.348-6.794,6.498
			c-1.083,3.151-0.394,6.597,1.674,9.157l26.191,32.689l-2.068,41.748c-0.098,3.348,1.378,6.498,4.135,8.468
			c2.659,1.871,6.105,2.363,9.255,1.182l39.089-14.769l39.089,14.769c1.182,0.492,2.363,0.689,3.545,0.689
			c1.969,0,4.037-0.689,5.711-1.871c2.757-1.969,4.234-5.12,4.135-8.468l-2.068-41.748l26.191-32.689
			C157.456,385.136,158.145,381.69,157.062,378.539z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <rect
                    x="196.931"
                    y="373.981"
                    width="167.385"
                    height="19.692"
                  />
                </g>
              </g>
              <g>
                <g>
                  <rect
                    x="196.931"
                    y="423.211"
                    width="275.692"
                    height="19.692"
                  />
                </g>
              </g>
            </svg>
            <span className="my-2 text-cs5">Experience</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
