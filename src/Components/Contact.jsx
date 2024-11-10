import React, { useState } from "react";
import Seo from "./Seo";
import map from "../Assets/maps.png";
import Map from "./Map";


const Contact = () => {
  // const arg = "Contact";
  // eslint-disable-next-line
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handlePhoneNumberClick = () => {
    const phoneNumber = "+971 542969703"; // Replace this with your actual phone number
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
    const email = " sriraag@galleon-trading.com"; // Replace this with your email address
    window.location.href = `mailto:${email}`;
  };
  const handleEmailClick2 = () => {
    const email = "mail@galleon-trading.com"; // Replace this with your email address
    window.location.href = `mailto:${email}`;
  };

  const handleAddressClick = () => {
    // const address ="C-107, 1st Floor, Pandav Nagar Complex Ganesh Nagar, New Delhi - 110092"; // Replace this with your actual address
    // const encodedAddress = encodeURIComponent(address);
    window.open(`https://google.com`, "_blank");
  };

  return (
    <div className="w-screen bg-cs2 h-fit -mt-1">
      {/* Contact */}
      <Seo title="Contact - Galleon Trading" description="" keywords="" />
      <div className=" flex-col flex items-center justify-center xl:p-20 xl:px-60">
        <div className="bg-gray-200 p-6 w-full flex flex-col xl:flex-row items-center justify-center xl:pb-14 h-fit">
          <div className="bg-gray-200 h-fit xl:w-2/3 w-full xl:p-6 pb-1 mt-20 xl:mt-0 xl:text-left text-center ">
            <span className="font-semibold text-4xl xl:ml-20 ">
              Galleon Trading LLC FZ
              <hr className="h-2  xl:w-4/6 w-2/4 ml-20 border-cs4 xl:pb-8 mt-1" />
            </span>

            <div className="xl:flex-row flex-col flex  xl:items-start xl:justify-start items-center justify-center h-fit xl:pl-20">
              <div className="flex md:flex-col flex-col xl:items-start xl:justify-start items-center justify-center mt-2 h-fit">
                <div className="mb-3 md:flex-row flex-col flex items-start justify-start  ">
                  <button
                    onClick={handlePhoneNumberClick}
                    className="flex-grow m-2"
                  >
                    <div
                      id="call1"
                      className="max-w-full p-4 sm:max-w-sm rounded-xl overflow-hidden text-cs5 shadow-md hover:text-white bg-white service transition duration-300 ease-in-out hover:bg-cs5"
                    >
                      <p className=" text-center font-semibold text-xl ">
                        Call Us
                      </p>
                      <div className="flex items-center justify-center">
                        <hr className="h-2 w-2/4 border-gray-400 pb-1" />
                      </div>
                      <p
                        className=" text-sm cursor-pointer nav-item"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          // style={{ fill: "white" }}
                          className="pr-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19.41,13c-.22,0-.45-.07-.67-.12a9.86,9.86,0,0,1-1.31-.39,2,2,0,0,0-2.48,1l-.22.46a13.17,13.17,0,0,1-2.67-2,13.17,13.17,0,0,1-2-2.67l.46-.21a2,2,0,0,0,1-2.48,10.47,10.47,0,0,1-.39-1.32c-.05-.22-.09-.45-.12-.67a3,3,0,0,0-3-2.49H5a3,3,0,0,0-2.24,1,3,3,0,0,0-.73,2.4,19.07,19.07,0,0,0,5.41,11,19.07,19.07,0,0,0,11,5.41,2.56,2.56,0,0,0,.39,0,3,3,0,0,0,2-.76,3,3,0,0,0,1-2.24v-3A3,3,0,0,0,19.41,13Zm.49,6a1,1,0,0,1-.33.74,1,1,0,0,1-.82.25,17.16,17.16,0,0,1-9.87-4.84A17.16,17.16,0,0,1,4,5.25a1,1,0,0,1,.25-.82A1,1,0,0,1,5,4.1h3a1,1,0,0,1,1,.78c0,.27.09.55.15.82a11,11,0,0,0,.46,1.54l-1.4.66a1,1,0,0,0-.52.56,1,1,0,0,0,0,.76,14.49,14.49,0,0,0,7,7,1,1,0,0,0,.76,0,1,1,0,0,0,.56-.52l.63-1.4a12.41,12.41,0,0,0,1.58.46c.26.06.54.11.81.15a1,1,0,0,1,.78,1ZM14,2c-.23,0-.47,0-.7,0a1,1,0,0,0,.17,2L14,4a6,6,0,0,1,6,6c0,.18,0,.35,0,.53a1,1,0,0,0,.91,1.08h.08a1,1,0,0,0,1-.91c0-.23,0-.47,0-.7A8,8,0,0,0,14,2Zm2,8a1,1,0,0,0,2,0,4,4,0,0,0-4-4,1,1,0,0,0,0,2A2,2,0,0,1,16,10Z"></path>
                        </svg>
                        +971 542969703{" "}
                      </p>
                    </div>
                  </button>
                  <button onClick={handleEmailClick1} className="flex-grow m-2">
                    <div
                      id="email1"
                      className="max-w-full p-4 sm:max-w-sm rounded-xl overflow-hidden text-cs5 hover:text-white shadow-md bg-white hover:bg-cs5 service transition duration-300 ease-in-out "
                    >
                      <p className=" text-center font-semibold text-xl ">
                        Mail Us
                      </p>
                      <div className="flex items-center justify-center">
                        <hr className="h-2 w-2/4 border-gray-400 pb-1" />
                      </div>
                      <p
                        className=" text-sm cursor-pointer nav-item"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 128 96"
                          width="36"
                          height="36"
                          // style={{ fill: "white" }}
                          className="pr-2"
                        >
                          <g>
                            <path d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z"></path>
                          </g>
                        </svg>
                        <span>&nbsp;sriraag@galleon-trading.com</span>
                        <br />
                      </p>
                    </div>
                  </button>
                </div>
                <div className="mb-3 md:flex-row flex flex-col items-cente justify-cente items-start justify-start md:items-center md:justify-center">
                  <button onClick={handleEmailClick2} className="flex-grow m-2">
                    <div
                      id="email1"
                      className="max-w-full p-4 pb-5 sm:max-w-sm rounded-xl overflow-hidden shadow-md bg-white hover:bg-cs5 text-cs5 hover:text-white service transition duration-300 ease-in-out"
                    >
                      <p className=" text-center font-semibold text-xl mb-2 whitespace-nowrap">
                        For Sales related query
                      </p>
                      <div className="flex items-center justify-center">
                        <hr className="h-2 w-2/4 border-gray-400 pb-1 " />
                      </div>
                      <p
                        className=" text-sm cursor-pointer nav-item pt-3"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 128 96"
                          width="36"
                          height="36"
                          // style={{ fill: "white" }}
                          className="pr-2"
                        >
                          <g>
                            <path d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z"></path>
                          </g>
                        </svg>
                        <span>&nbsp;mail@galleon-trading.com</span>
                        <br />
                      </p>
                    </div>
                  </button>

                  <button
                    onClick={handleAddressClick}
                    className="flex-grow m-2"
                  >
                    <div
                      id="address1"
                      className="max-w-full p-4 pb-5 sm:max-w-sm rounded-xl  overflow-hidden shadow-md bg-white hover:bg-cs5 text-cs5 hover:text-white service transition duration-300 ease-in-out"
                    >
                      <p className="text-center font-semibold text-xl whitespace-nowrap ">
                        Corporate Office
                      </p>
                      <div className="flex items-center justify-center">
                        <hr className="h-2 w-2/4 border-gray-400 pb-1" />
                      </div>
                      <p
                        className="text-sm cursor-pointer nav-item"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 64 64"
                          width="60"
                          height="60"
                          // style={{ fill: "white" }}
                          className="pr-2"
                        >
                          <path d="M49.00001,34h-3.59998c-4.88,6.70996-11.27002,11.16998-11.70001,11.46997-.5,.35004-1.09003,.53003-1.70001,.53003s-1.20001-.17999-1.70001-.53003c-.42999-.29999-6.81995-4.76001-11.69995-11.46997h-3.60004c-2.14581-.04651-4.03583,1.88818-3.99994,4-.00006,0-.00006,20-.00006,20,0,2.20996,1.79004,4,4,4H49.00001c2.21002,0,4-1.79004,4-4v-20c.03302-2.14868-1.87878-4.03577-4-4Zm2,24c0,1.09998-.89996,2-2,2H15.00001c-1.09998,0-2-.90002-2-2v-20c0-.27002,.06-.54004,.16003-.78003l15.70996,12.56c.91003,.73004,2.02002,1.09003,3.13,1.09003s2.22003-.35999,3.12-1.09003l15.72003-12.56c.09998,.23999,.15997,.51001,.15997,.78003v20Z"></path>
                          <path d="M46.00001 52h-5c-1.64996 0-3 1.34998-3 3s1.35004 3 3 3h5c3.95312-.10883 3.95502-5.89099 0-6zM31.4336 43.82324c.34106.23438.79175.23438 1.13281 0 .6709-.46191 16.43359-11.45117 16.43359-24.82324 0-9.37402-7.62598-17-17-17S15.00001 9.62598 15.00001 19c0 13.37207 15.7627 24.36133 16.43359 24.82324zm.56641-39.82324c8.271 0 15 6.72852 15 15 0 10.95898-12.20068 20.67871-15 22.76367-2.79932-2.08496-15-11.80469-15-22.76367 0-8.27148 6.729-15 15-15z"></path>
                          <path d="M42.00001,19c0-5.51416-4.48584-10-10-10-13.26636,.54907-13.26251,19.45288,.00006,20,5.5141,0,9.99994-4.48584,9.99994-10Z"></path>
                        </svg>
                        <span className="text-left overflow-hidden overflow-y-hidden whitespace-nowrap">
                          <u>
                            Business Center 1, M<br /> Floor, The Meydan Hotel,
                            <br />
                            Nad Al Sheba, Dubai
                          </u>
                        </span>
                      </p>
                    </div>
                  </button>
                </div>
              </div>
              <div className="w-1/3"></div>
            </div>
          </div>
          <img src={map} alt="" className=" xl:w-1/3 xl:mr-10 w-11/12" />
        </div>
        <div className="bg-gray-300 h-fit w-full z-10 ">
          {" "}
          <Map />
        </div>
        {/* <div className="bg-gray-300 h-[50vh] w-full ">
          fe
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
