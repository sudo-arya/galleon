import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Seo from "./Seo";
import gtlogoCircular from "../Assets/GT LOGO circular (1).png";



const Footer = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleNavItemClick = (path) => {
    navigate(`/${path}`);
    setIsOpen(false); // Close the navbar on item click for smaller screens
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 800); // Adjust the threshold as per your requirement
    };

    window.addEventListener("resize", handleResize);

    // Call the handleResize initially to set the initial state
    handleResize();

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePhoneNumberClick = () => {
    const phoneNumber = "+971542969703"; // Replace this with your actual phone number
    if (isSmallScreen) {
      // Redirect to dialer on small screens
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // Copy to clipboard on large screens
      navigator.clipboard
        .writeText(phoneNumber)
        .then(() => {
          alert("Phone number copied to clipboard");
        })
        .catch(() => {
          alert("Failed to copy phone number");
        });
    }
  };

  const handleEmailClick1 = () => {
    const email = "sriraag@galleon-trading.com"; // Replace this with your email address
    window.location.href = `mailto:${email}`;
  };
  const handleEmailClick2 = () => {
    const email = "mail@galleon-trading.com"; // Replace this with your email address
    window.location.href = `mailto:${email}`;
  };

  const handleAddressClick = () => {
    // const address ="C-107, 1st Floor, Pandav Nagar Complex Ganesh Nagar, New Delhi - 110092"; // Replace this with your actual address
    // const encodedAddress = encodeURIComponent(address);
    window.open(`https://maps.app.goo.gl/SA5W7z4EU24XujCY9`, "_blank");
  };

  return (
    <div>
      <Seo title="Home - Galleon Trading" description="" keywords="" />
      <div>
        {isSmallScreen && (
          <div className="">
            <div className="text-white flex-col flex items-center btn-back justify-center mb-2">
              {/* <div className="bg-cs2 w-full p-5"></div> */}
              <button
                className="md:w-48 pt-3 pb-3 bg-cs5 flex font-semibold items-center justify-between px-4 rounded-full allproduct  hover:bg-cs6 "
                onClick={() => handleNavItemClick("contact")}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="ml-2">Contact Us Today</div>
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      style={{ fill: "white" }}
                      viewBox="0 0 32 32"
                      id="arrow"
                    >
                      <path d="M4 15a1 1 0 0 0 1 1h19.586l-4.292 4.292a1 1 0 0 0 1.414 1.414l6-6a.99.99 0 0 0 .292-.702V15c0-.13-.026-.26-.078-.382a.99.99 0 0 0-.216-.324l-6-6a1 1 0 0 0-1.414 1.414L24.586 14H5a1 1 0 0 0-1 1z"></path>
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>

      <footer className="bg-cs5 text-white shadow-3xl shadow-inner">
        <div
          className={`${
            isSmallScreen ? "hidden" : "py-4"
          }  flex-row items-center justify-center sm:space-y-0 pt-5 hidden md:flex `}
        >
          <div className="w-fit flex flex-col mx-20 ">
            <div className="font-bold text-2xl text-cs2 mb-2 flex items-center justify-center">
              About Us
            </div>
            <div className="flex items-center justify-center">
              <hr className="h-2 w-80 border-cs7 pb-1" />
            </div>
          </div>
          <div className="w-fit  flex flex-col mx-28">
            <div className="font-bold text-2xl text-cs2 mb-2 flex items-center justify-center">
              Follow Us
            </div>
            <div className="flex items-center justify-center">
              <hr className="h-2 w-80 border-cs7 pb-1" />
            </div>
          </div>

          <div className="w-fit flex flex-col mx-20">
            <div className="font-bold text-2xl text-cs2 mb-2  flex items-center justify-center">
              Contact Details
            </div>
            <div className=" flex items-center justify-center">
              <hr className="h-2 w-80 border-cs7 pb-1" />
            </div>
          </div>
        </div>

        <div
          className={`${
            isSmallScreen ? "hidden" : "flex"
          }  hidden md:flex flex-row sm:space-y-0 justify-center `}
        >
          <div className="w-fit flex flex-col mx-20 mb-6">
            <div className="flex  items-center justify-center">
              <img
                src={gtlogoCircular}
                width="160"
                height="160"
                alt="logo"
                className="flex items-center justify-center py-2"
              />
            </div>
            <div className="flex items-center justify-center content-center ml-4">
              <p
                className="text-cs2 text-lg font-medium"
                style={{ display: "flex", alignItems: "center" }}
              >
                <span className="mt-2 text-sm">
                  Founded by Sriraag Subramonian in 2023 <br /> <br />
                  Sriraag Subramonian is a Software Engineer by education
                  <br /> with extensive experience in the family business.
                  <br /> <br />
                  Has experience of more than 11 years in the Agricultural
                  <br />
                  Trading business.
                </span>
              </p>
            </div>
          </div>
          <div className="w-fit flex flex-col mx-40  ">
            <Link
              to="https://www.linkedin.com/in/deepanshuarya2024/"
              target="_blank"
            >
              <p
                className="text-white hover:text-facebook hover:bg-cs2 my-1 rounded-xl text-base font-medium cursor-pointer nav-item px-3 w-fit group transform transition-transform duration-500 ease-in-out"
                style={{ display: "flex", alignItems: "center" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="28"
                  height="28"
                  className=" fill-cs2 group-hover:fill-facebook "
                  viewBox="0 0 50 50"
                >
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
                </svg>
                <span className="text-left p-2">
                  <u>facebook</u>
                </span>
              </p>
            </Link>
            <Link
              to="https://www.linkedin.com/in/deepanshuarya2024/"
              target="_blank"
            >
              <p
                className="text-white hover:text-yt hover:bg-cs2 rounded-xl my-1 text-base font-medium cursor-pointer nav-item px-3 w-fit group transform transition-transform duration-500 ease-in-out"
                style={{ display: "flex", alignItems: "center" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="28"
                  height="28"
                  viewBox="0 0 50 50"
                  className=" fill-cs2 group-hover:fill-yt "
                >
                  <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
                </svg>
                <span className="text-left p-2">
                  <u>YouTube</u>
                </span>
              </p>
            </Link>
            <Link
              to="https://www.linkedin.com/in/deepanshuarya2024/"
              target="_blank"
            >
              <p
                className="text-white hover:text-x hover:bg-cs2 my-1 rounded-xl text-base font-medium cursor-pointer nav-item px-3 w-fit group transform transition-transform duration-500 ease-in-out"
                style={{ display: "flex", alignItems: "center" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="28"
                  height="28"
                  viewBox="0 0 50 50"
                  className=" fill-cs2 group-hover:fill-x "
                >
                  <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                </svg>
                <span className="text-left p-2">
                  <u>X (Twitter)</u>
                </span>
              </p>
            </Link>
            <Link
              to="https://www.linkedin.com/in/deepanshuarya2024/"
              target="_blank"
            >
              <p
                className="text-white hover:text-linkedin hover:bg-cs2 my-1 rounded-xl text-base font-medium cursor-pointer nav-item px-3 w-fit group transform transition-transform duration-500 ease-in-out"
                style={{ display: "flex", alignItems: "center" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="28"
                  height="28"
                  viewBox="0 0 50 50"
                  className=" fill-cs2 group-hover:fill-linkedin "
                >
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                </svg>
                <span className="text-left p-2">
                  <u>LinkedIn</u>
                </span>
              </p>
            </Link>
          </div>
          <div className=" flex flex-col w-fit mx-16  ">
            <button onClick={`${handleAddressClick} `} id="address2">
              <p
                className="text-white hover:text-cs6 hover:bg-cs2 rounded-xl my-1 text-base font-medium cursor-pointer nav-item px-3 w-fit group transform transition-transform duration-500 ease-in-out"
                style={{ display: "flex", alignItems: "center" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  width="40"
                  height="40"
                  // style={{ fill: "#ffffff" }}
                  className=" pr-2 fill-cs2 group-hover:fill-cs6 "
                >
                  <path d="M49.00001,34h-3.59998c-4.88,6.70996-11.27002,11.16998-11.70001,11.46997-.5,.35004-1.09003,.53003-1.70001,.53003s-1.20001-.17999-1.70001-.53003c-.42999-.29999-6.81995-4.76001-11.69995-11.46997h-3.60004c-2.14581-.04651-4.03583,1.88818-3.99994,4-.00006,0-.00006,20-.00006,20,0,2.20996,1.79004,4,4,4H49.00001c2.21002,0,4-1.79004,4-4v-20c.03302-2.14868-1.87878-4.03577-4-4Zm2,24c0,1.09998-.89996,2-2,2H15.00001c-1.09998,0-2-.90002-2-2v-20c0-.27002,.06-.54004,.16003-.78003l15.70996,12.56c.91003,.73004,2.02002,1.09003,3.13,1.09003s2.22003-.35999,3.12-1.09003l15.72003-12.56c.09998,.23999,.15997,.51001,.15997,.78003v20Z"></path>
                  <path d="M46.00001 52h-5c-1.64996 0-3 1.34998-3 3s1.35004 3 3 3h5c3.95312-.10883 3.95502-5.89099 0-6zM31.4336 43.82324c.34106.23438.79175.23438 1.13281 0 .6709-.46191 16.43359-11.45117 16.43359-24.82324 0-9.37402-7.62598-17-17-17S15.00001 9.62598 15.00001 19c0 13.37207 15.7627 24.36133 16.43359 24.82324zm.56641-39.82324c8.271 0 15 6.72852 15 15 0 10.95898-12.20068 20.67871-15 22.76367-2.79932-2.08496-15-11.80469-15-22.76367 0-8.27148 6.729-15 15-15z"></path>
                  <path d="M42.00001,19c0-5.51416-4.48584-10-10-10-13.26636,.54907-13.26251,19.45288,.00006,20,5.5141,0,9.99994-4.48584,9.99994-10Z"></path>
                </svg>
                <span className="text-left p-2">
                  <u>
                    Business Center 1, M Floor,, The Meydan Hotel, <br />
                    Nad Al Sheba, Dubai, Dubai
                  </u>
                </span>
              </p>
            </button>

            <button id="call2" onClick={handlePhoneNumberClick}>
              <p
                className="text-white hover:text-cs6 hover:bg-cs2 my-1 rounded-xl text-base font-medium cursor-pointer nav-item px-3 w-fit group transform transition-transform duration-500 ease-in-out"
                style={{ display: "flex", alignItems: "center" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  // style={{ fill: "#0081a7" }}
                  className=" pr-2 fill-cs2 group-hover:fill-cs6 "
                  viewBox="0 0 24 24"
                >
                  <path d="M19.41,13c-.22,0-.45-.07-.67-.12a9.86,9.86,0,0,1-1.31-.39,2,2,0,0,0-2.48,1l-.22.46a13.17,13.17,0,0,1-2.67-2,13.17,13.17,0,0,1-2-2.67l.46-.21a2,2,0,0,0,1-2.48,10.47,10.47,0,0,1-.39-1.32c-.05-.22-.09-.45-.12-.67a3,3,0,0,0-3-2.49H5a3,3,0,0,0-2.24,1,3,3,0,0,0-.73,2.4,19.07,19.07,0,0,0,5.41,11,19.07,19.07,0,0,0,11,5.41,2.56,2.56,0,0,0,.39,0,3,3,0,0,0,2-.76,3,3,0,0,0,1-2.24v-3A3,3,0,0,0,19.41,13Zm.49,6a1,1,0,0,1-.33.74,1,1,0,0,1-.82.25,17.16,17.16,0,0,1-9.87-4.84A17.16,17.16,0,0,1,4,5.25a1,1,0,0,1,.25-.82A1,1,0,0,1,5,4.1h3a1,1,0,0,1,1,.78c0,.27.09.55.15.82a11,11,0,0,0,.46,1.54l-1.4.66a1,1,0,0,0-.52.56,1,1,0,0,0,0,.76,14.49,14.49,0,0,0,7,7,1,1,0,0,0,.76,0,1,1,0,0,0,.56-.52l.63-1.4a12.41,12.41,0,0,0,1.58.46c.26.06.54.11.81.15a1,1,0,0,1,.78,1ZM14,2c-.23,0-.47,0-.7,0a1,1,0,0,0,.17,2L14,4a6,6,0,0,1,6,6c0,.18,0,.35,0,.53a1,1,0,0,0,.91,1.08h.08a1,1,0,0,0,1-.91c0-.23,0-.47,0-.7A8,8,0,0,0,14,2Zm2,8a1,1,0,0,0,2,0,4,4,0,0,0-4-4,1,1,0,0,0,0,2A2,2,0,0,1,16,10Z"></path>
                </svg>
                <span className="text-left p-2">+971 542969703</span>
              </p>
            </button>

            <button id="email2" onClick={handleEmailClick1}>
              <p
                className="text-white hover:text-cs6 hover:bg-cs2 rounded-xl my-1 text-base font-medium cursor-pointer nav-item px-3 w-fit group transform transition-transform duration-500 ease-in-out"
                style={{ display: "flex", alignItems: "center" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 96"
                  width="36"
                  height="36"
                  // style={{ fill: "#0081a7" }}
                  className=" pr-2 fill-cs2 group-hover:fill-cs6 "
                >
                  <g>
                    <path d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z"></path>
                  </g>
                </svg>
                <span className="text-left p-2">
                  sriraag@galleon-trading.com
                </span>
                <br />
              </p>
            </button>
            <button id="email2" onClick={handleEmailClick2}>
              <p
                className="text-white hover:text-cs6 hover:bg-cs2 my-1 rounded-xl text-base font-medium cursor-pointer nav-item px-3 w-fit group transform transition-transform duration-500 ease-in-out"
                style={{ display: "flex", alignItems: "center" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 96"
                  width="36"
                  height="36"
                  // style={{ fill: "#0081a7" }}
                  className=" pr-2 fill-cs2 group-hover:fill-cs6 "
                >
                  <g>
                    <path d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z"></path>
                  </g>
                </svg>
                <span className="text-left p-2">mail@galleon-trading.com </span>
                <br />
              </p>
            </button>
          </div>
        </div>
        {/* </div> */}

        {isSmallScreen && (
          <div className=" sm:max-w-sm rounded overflow-hidden bg-cs5 mx-auto flex items-center justify-center p-4 pt-8">
            <div className="w-2">&nbsp;</div>
            <button onClick={handleAddressClick} id="address2">
              <p
                className="text-white rounded-xl text-base font-medium cursor-pointer nav-item px-4 flex-col"
                style={{ display: "flex", alignItems: "center" }}
              >
                <svg
                  width="40"
                  height="40"
                  // style={{ fill: "#0081a7" }}
                  className="pr-2 pt-1"
                  viewBox="0 0 48 48"
                >
                  <defs>
                    <path id="a" d="M.06 64V.04H64V64z"></path>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <mask id="b" fill="#1B263B"></mask>
                    <path
                      fill="#1B263B"
                      d="M64 32c0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0c17.673 0 32 14.327 32 32"
                      mask="url(#b)"
                    ></path>
                    <path
                      fill="#1B263B"
                      d="M43.605 46.272 32.602 40.77a1.341 1.341 0 0 0-1.204 0l-11.003 5.502L32 20.161l11.605 26.111"
                    ></path>
                    <path
                      fill="#1B263B"
                      d="M17.641 50.501a1.347 1.347 0 0 1-1.231-1.894l14.36-32.308a1.346 1.346 0 0 1 2.46 0l14.36 32.308a1.347 1.347 0 0 1-1.833 1.751L32 43.48l-13.757 6.878a1.339 1.339 0 0 1-.602.143M32 40.628c.206 0 .413.047.602.142l11.003 5.502L32 20.161 20.395 46.272l11.003-5.502c.189-.095.396-.142.602-.142"
                    ></path>
                    <path
                      fill="#FFFFFE"
                      d="M32 15 17.921 46.677 32 39.638l14.079 7.039L32 15"
                    ></path>
                    <path
                      fill="#FFFFFE"
                      d="m32 15-1.371-.609-14.078 31.677a1.499 1.499 0 1 0 2.041 1.951L32 41.315l13.408 6.704a1.499 1.499 0 0 0 2.042-1.951L33.371 14.391a1.5 1.5 0 0 0-2.742 0L32 15l-1.371.609L43.01 43.466l-10.339-5.17a1.502 1.502 0 0 0-1.342 0l-10.339 5.17 12.381-27.857L32 15l-1.371.609L32 15"
                    ></path>
                  </g>
                </svg>
                <span className="text-left p-2">
                  {/* <u>
                    C-107, 1st Floor, Pandav Nagar Complex Ganesh Nagar, New
                    Delhi - 110092
                  </u> */}
                  Location
                </span>
              </p>
            </button>

            <button id="call2" onClick={handlePhoneNumberClick}>
              <p
                className="text-white rounded-xl text-base font-medium cursor-pointer nav-item px-4 flex-col"
                style={{ display: "flex", alignItems: "center" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  style={{ fill: "#ffffff" }}
                  className="pb-1 pt-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.41,13c-.22,0-.45-.07-.67-.12a9.86,9.86,0,0,1-1.31-.39,2,2,0,0,0-2.48,1l-.22.46a13.17,13.17,0,0,1-2.67-2,13.17,13.17,0,0,1-2-2.67l.46-.21a2,2,0,0,0,1-2.48,10.47,10.47,0,0,1-.39-1.32c-.05-.22-.09-.45-.12-.67a3,3,0,0,0-3-2.49H5a3,3,0,0,0-2.24,1,3,3,0,0,0-.73,2.4,19.07,19.07,0,0,0,5.41,11,19.07,19.07,0,0,0,11,5.41,2.56,2.56,0,0,0,.39,0,3,3,0,0,0,2-.76,3,3,0,0,0,1-2.24v-3A3,3,0,0,0,19.41,13Zm.49,6a1,1,0,0,1-.33.74,1,1,0,0,1-.82.25,17.16,17.16,0,0,1-9.87-4.84A17.16,17.16,0,0,1,4,5.25a1,1,0,0,1,.25-.82A1,1,0,0,1,5,4.1h3a1,1,0,0,1,1,.78c0,.27.09.55.15.82a11,11,0,0,0,.46,1.54l-1.4.66a1,1,0,0,0-.52.56,1,1,0,0,0,0,.76,14.49,14.49,0,0,0,7,7,1,1,0,0,0,.76,0,1,1,0,0,0,.56-.52l.63-1.4a12.41,12.41,0,0,0,1.58.46c.26.06.54.11.81.15a1,1,0,0,1,.78,1ZM14,2c-.23,0-.47,0-.7,0a1,1,0,0,0,.17,2L14,4a6,6,0,0,1,6,6c0,.18,0,.35,0,.53a1,1,0,0,0,.91,1.08h.08a1,1,0,0,0,1-.91c0-.23,0-.47,0-.7A8,8,0,0,0,14,2Zm2,8a1,1,0,0,0,2,0,4,4,0,0,0-4-4,1,1,0,0,0,0,2A2,2,0,0,1,16,10Z"></path>
                </svg>
                {/* <span className="text-left p-2">+971542969703</span> */}
                Call
              </p>
            </button>

            <button id="email2" onClick={handleEmailClick1}>
              <p
                className="text-white rounded-xl text-base font-medium cursor-pointer nav-item px-4 flex-col"
                style={{ display: "flex", alignItems: "center" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 96"
                  width="30"
                  height="30"
                  style={{ fill: "#ffffff" }}
                  className="pb-1 pt-1"
                >
                  <g>
                    <path d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z"></path>
                  </g>
                </svg>
                {/* <span className="text-left p-2">
                  sriraag@galleon-trading.com
                </span> */}
                sriraag
                <br />
              </p>
            </button>
            <button id="email2" onClick={handleEmailClick2}>
              <p
                className="text-white rounded-xl px-4 text-base font-medium cursor-pointer nav-item flex-col"
                style={{ display: "flex", alignItems: "center" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 96"
                  width="30"
                  height="30"
                  style={{ fill: "#ffffff" }}
                  className="pt-1 pb-1"
                >
                  <g>
                    <path d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z"></path>
                  </g>
                </svg>
                {/* <span className="text-left p-2">
                  mail@galleon-trading.com
                </span> */}
                office
                <br />
              </p>
            </button>
            <div className="w-2">&nbsp;</div>
          </div>
        )}
        <div className="container mx-auto bg-cs5">
          <div className="flex items-center justify-center">
            <hr className="h-1 w-11/12 border-cs7 pb-4" />
          </div>
          <p className="text-center text-white font-bold py-2 pb-4">
            &copy; 2023 GALLEON TRADING
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
