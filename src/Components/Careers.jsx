import React from "react";
import Seo from "./Seo";
import corporate1 from "../Assets/corporate1.jpg";
import ethics1 from "../Assets/ethics1.jpg";
import ethics2 from "../Assets/ethics2.jpg";

const Careers = () => {
  // const arg = "Careers";

  return (
    <div className="w-screen bg-cs2 h-fit -mt-1">
      {/* Careers */}
      <Seo title="Ethics - Galleon Trading" description="" keywords="" />
      <div className="relative h-[60vh] overflow-hidden bg-black w-full">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url(${corporate1})` }}
        ></div>
        <div className="flex items-center justify-center w-full h-full md:mt-48">
          <div className="relative h-fit flex flex-col justify-center  text-white z-10 bg-slate-200 md:mx-auto w-fit bg-opacity-80 md:px-10 px-8 mx-6 py-4 mt-60 md:mt-0 pt-9 pb-9 rounded-xl">
            <h1 className="text-5xl text-cs5 font-bold text-center">
              Work with Us{" "}
            </h1>
            <div className="flex items-center justify-center">
              <hr className=" w-1/2  border-cs7 mt-1" />
            </div>
            <p className=" text-cs4 mb-4 text-lg mx-auto">
              <br />
              The case for transformation in agribusiness is clear and our
              <br />
              leadership strength enables us to drive change.
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="h-fit  bg-cs2 flex items-center justify-center flex-col my-12">
        <p className="text-lg mx-auto w-9/12 pt-6">
          At Galleon Trading LLC FZ, we are always on the lookout for talented
          individuals who are passionate about agricultural trading and
          international business. As a rapidly growing company in the dynamic
          trading industry, we offer a variety of opportunities to grow your
          career, learn new skills, and make a meaningful impact.
        </p>
      </div>
      <div className="h-fit bg-cs2 flex items-center justify-center flex-col md:flex-row my-10 md:my-12 ">
        <div className="md:w-1/2 w-9/12 md:pt-20 bg-cs6 bg-opacity-15 flex items-end justify-end md:mb-0 mb-14">
          <img src={ethics1} alt="" className="md:w-3/4 w-full" />
        </div>
        <div className="md:w-1/2 w-9/12 mx-8">
          <p className="md:text-4xl text-3xl font-semibold items-center md:mx-4 w-10/12 ">
            Why Work With Us?
          </p>
          <p className="text-lg w-10/12 md:mx-4 pt-6">
            <br />
            <br />
            <ul className="list-disc list-inside">
              <li>
                <span className="font-semibold">Innovation and Growth:</span> Be
                part of a forward-thinking company that is constantly evolving.
                We encourage innovation and support our employees to bring their
                ideas to life.
              </li>
              <li>
                <span className="font-semibold">Global Exposure:</span> Work
                with a diverse team and engage in international markets. Our
                operations span across multiple continents, providing a truly
                global work environment.
              </li>
              <li>
                <span className="font-semibold">Career Development: </span> We
                believe in nurturing talent from within. We provide ongoing
                training, mentorship, and opportunities for professional
                development to help you achieve your career goals.
              </li>
              <li>
                <span className="font-semibold">
                  Sustainability Commitment:{" "}
                </span>{" "}
                Join a team that is dedicated to ethical and sustainable
                business practices. We are committed to creating a positive
                impact on the communities and environments in which we operate.
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div className="h-fit bg-cs2 flex items-center justify-center flex-col-reverse md:flex-row md:my-12 my-10 ">
        <div className="md:w-1/2 w-9/12 mx-8">
          <p className="md:text-4xl text-3xl font-semibold items-center md:mx-4 w-10/12 ">
            How to Apply
          </p>
          <p className="text-lg w-11/12 md:mx-4 pt-6">
            If you are interested in joining our dynamic team, please send your
            resume and a cover letter to{" "}
            <span className="bg-cs6 bg-opacity-15">
              &nbsp; mail@galleon-trading.com &nbsp;
            </span>{" "}
            Include the position you are applying for in the subject line.
          </p>
          <p className="text-lg w-10/12 md:mx-4 pt-6">
            <br />
            <br />
            <span className="font-semibold">Employee Benefits</span>

            <ul className="list-disc list-inside">
              <li>Competitive Salary Packages</li>
              <li>Health and Wellness Programs</li>
              <li>Professional Development and Training</li>
              <li>Flexible Working Arrangements</li>
              <li>Annual Leave and Paid Holidays</li>
            </ul>
          </p>
        </div>
        <div className="md:w-1/2 w-9/12 md:pb-20 bg-cs6 bg-opacity-15 flex md:mb-0 mb-14 items-start justify-start">
          <img src={ethics2} alt="" className="md:w-3/4 w-full" />
        </div>
      </div>
    </div>
  );
};

export default Careers;
