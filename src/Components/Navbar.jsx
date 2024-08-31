// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Seo from "./Seo";
import gtlogoCircular from "../Assets/GT LOGO circular.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const location = useLocation();
   const [isVisible, setIsVisible] = useState(true); // State to manage visibility
   const [lastScrollY, setLastScrollY] = useState(0); // State to track last scroll position

   useEffect(() => {
     const handleScroll = () => {
       if (window.scrollY > lastScrollY) {
         // If scrolling down
         setIsVisible(false);
       } else {
         // If scrolling up
         setIsVisible(true);
       }
       setLastScrollY(window.scrollY); // Update last scroll position
     };

     window.addEventListener("scroll", handleScroll); // Add scroll event listener

     return () => {
       window.removeEventListener("scroll", handleScroll); // Cleanup event listener on unmount
     };
   }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getNavItemClass = (path) =>
    location.pathname === path
      ? "md:text-cs6 md:bg-white bg-cs6 rounded-lg text-white font-bold py-2 px-3 cursor-pointer transform transition duration-250 ease-in-out"
      : "md:text-cs5 text-white font-semibold py-2 px-2 cursor-pointer transform transition duration-250 ease-in-out ";

  return (
    <nav
      className={
        isSmallScreen
          ? "cs-2 shadow-md  fixed top-0 left-0 w-full z-50 mt-6"
          : "cs-2 shadow-md fixed top-0 left-0 w-full z-50 "
      }
    >
      <Seo title="Navbar - Galleon Trading" description="" keywords="" />
      <div
        className={`hidden md:visible md:rounded-none md:flex md:space-x-12 container bg-cs5 max-w-full justify-between items-center h-9 transition-transform duration-300 ${
          isVisible ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        {" "}
        <div className=" md:flex md:space-x-12 text-lg text-white container mx-auto ">
          <Link
            className="text-white p-4 md:w-3/12 mx-10 md:mx-0 md:ml-0 h-10 pt-1 whitespace-nowrap group relative overflow-y-hidden  md:flex "
            to="/#location"
          >
            <span
              className={` absolute transform transition-transform duration-300 ease-in-out group-hover:-translate-y-10`}
            >
              Our Presence
            </span>
            <span
              className={`absolute text-cs6 transform mt-3 group-hover:font-bold translate-y-full transition-transform duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-3`}
            >
              Our Presence
            </span>
          </Link>
          <Link
            className="text-white p-4 md:w-2/12 mx-28 md:mx-0 md:ml-0 h-10 pt-1 whitespace-nowrap group relative overflow-y-hidden  md:flex"
            to="/careers"
          >
            <span
              className={` absolute transform transition-transform duration-300 ease-in-out group-hover:-translate-y-10`}
            >
              Careers
            </span>
            <span
              className={`absolute text-cs6 transform mt-3 group-hover:font-bold translate-y-full transition-transform duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-3`}
            >
              Careers{" "}
            </span>
          </Link>

          <Link
            className="text-white my-auto w-5/6 hover:text-cs6 transform transition duration-500 ease-in-out hover:font-bold"
            to="/products"
          ></Link>
          <Link
            className="text-white my-auto w-1/12 h-10 whitespace-nowrap pt-1 group relative overflow-y-hidden md:flex hidden"
            to="https://www.linkedin.com/in/deepanshuarya2024/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="28"
              height="28"
              className="absolute fill-white transform transition-transform duration-300 ease-in-out group-hover:-translate-y-10"
              viewBox="0 0 50 50"
            >
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
            </svg>
            <div className="h-1"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="28"
              height="28"
              className="absolute fill-cs6 transform translate-y-full mt-3 transition-transform duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-3"
              viewBox="0 0 50 50"
            >
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
            </svg>
          </Link>
          <Link
            className="text-white my-auto w-1/12 h-10 whitespace-nowrap pt-1 group relative overflow-y-hidden  md:flex hidden"
            to="https://www.linkedin.com/in/deepanshuarya2024/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="28"
              height="28"
              className="absolute fill-white transform transition-transform duration-300 ease-in-out group-hover:-translate-y-10"
              viewBox="0 0 50 50"
            >
              <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
            </svg>
            <div className="h-1"></div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="28"
              height="28"
              className="absolute fill-cs6 transform mt-3 translate-y-full transition-transform duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-3"
              viewBox="0 0 50 50"
            >
              <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
            </svg>
          </Link>
          <Link
            className="text-white my-auto w-1/12 h-10 whitespace-nowrap pt-1 group relative overflow-y-hidden  md:flex hidden"
            to="https://www.linkedin.com/in/deepanshuarya2024/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="28"
              height="28"
              className="absolute fill-white transform transition-transform duration-300 ease-in-out group-hover:-translate-y-10"
              viewBox="0 0 50 50"
            >
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
            </svg>
            <div className="h-1"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="28"
              height="28"
              className="absolute fill-cs6 transform mt-3 translate-y-full transition-transform duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-3"
              viewBox="0 0 50 50"
            >
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
            </svg>
          </Link>
          <div className="w-20"></div>
        </div>
      </div>
      <div
        className={`flex md:px-40 px-3 bg-cs2 justify-between items-center h-full transition-transform duration-300 ${
          isVisible
            ? "transform translate-y-0"
            : "transform -translate-y-8 -mb-8"
        }`}
        // className="container mx-auto flex justify-between items-center bg-cs2  "
      >
        <div className="text-white font-bold cursor-pointer nav-item ">
          <Link to="/">
            <div className="flex flex-row items-center justify-center">
              <div>
                <img
                  src={gtlogoCircular}
                  alt="logo"
                  className={
                    isSmallScreen ? "w-16 my-3 ml-2" : " w-20 my-2 ml-3"
                  }
                />
              </div>
              <div className=" font-bold text-2xl md:text-4xl text-cs5 p-3 md:p-6">
                Galleon Trading
              </div>
            </div>
          </Link>
        </div>
        <div className="md:hidden ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white rounded-xl focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="60"
              id="menu"
              height="60"
              viewBox="0 0 128 128"
              className="mr-5"
              // style={{ fill: "#339947", stroke: "#0c2759" }}
            >
              <path
                fill="#fff"
                d="M64 14A50 50 0 1 0 64 114A50 50 0 1 0 64 14Z"
              ></path>
              <path
                fill="#0c2759"
                d="M64,117c-29.2,0-53-23.8-53-53s23.8-53,53-53s53,23.8,53,53S93.2,117,64,117z M64,17c-25.9,0-47,21.1-47,47s21.1,47,47,47s47-21.1,47-47S89.9,17,64,17z"
              ></path>
              <path
                fill="#0c2759"
                d="M86.5 52h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 52 86.5 52zM86.5 67h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 67 86.5 67z"
              ></path>
              <g>
                <path
                  fill="#0c2759"
                  d="M86.5,82h-45c-1.7,0-3-1.3-3-3s1.3-3,3-3h45c1.7,0,3,1.3,3,3S88.2,82,86.5,82z"
                ></path>
              </g>
            </svg>
          </button>
        </div>
        <div className="hidden md:flex md:space-x-1 text-lg">
          <Link
            className="text-white my-auto w-20 h-10 whitespace-nowrap group relative overflow-y-hidden  md:flex hidden"
            to="/"
          >
            <span
              className={`${getNavItemClass(
                "/"
              )} absolute transform transition-transform duration-500 ease-in-out group-hover:-translate-y-10`}
            >
              HOME{" "}
            </span>
            <span
              className={`${getNavItemClass(
                "/"
              )} absolute text-cs6 group-hover:text-cs6 transform mt-3 group-hover:font-bold translate-y-full transition-transform duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-3`}
            >
              HOME{" "}
            </span>
          </Link>
          <Link
            className="text-white my-auto w-36 h-10 whitespace-nowrap group relative overflow-y-hidden  md:flex hidden"
            to="/about"
          >
            <span
              className={`${getNavItemClass(
                "/about"
              )} absolute transform transition-transform duration-500 ease-in-out group-hover:-translate-y-10`}
            >
              WHO WE ARE
            </span>
            <span
              className={`${getNavItemClass(
                "/about"
              )} absolute text-cs6 transform mt-3 group-hover:text-cs6 group-hover:font-bold translate-y-full transition-transform duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-3`}
            >
              WHO WE ARE
            </span>
          </Link>
          <Link
            className="text-white my-auto w-32 h-10 whitespace-nowrap group relative overflow-y-hidden  md:flex hidden"
            to="/products"
          >
            <span
              className={`${getNavItemClass(
                "/products"
              )} absolute transform transition-transform duration-500 ease-in-out group-hover:-translate-y-10`}
            >
              PRODUCTS{" "}
            </span>
            <span
              className={`${getNavItemClass(
                "/products"
              )} absolute text-cs6 transform mt-3 group-hover:text-cs6 group-hover:font-bold translate-y-full transition-transform duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-3`}
            >
              PRODUCTS{" "}
            </span>
          </Link>
          <Link
            className="text-white my-auto w-60 h-10 whitespace-nowrap group relative overflow-y-hidden  md:flex hidden"
            to="/ethics"
          >
            <span
              className={`${getNavItemClass(
                "/ethics"
              )} absolute transform transition-transform duration-500 ease-in-out group-hover:-translate-y-10`}
            >
              ETHICS & COMPLIANCE
            </span>
            <span
              className={`${getNavItemClass(
                "/ethics"
              )} absolute text-cs6 transform mt-3 group-hover:text-cs6 translate-y-full group-hover:font-bold transition-transform duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-3`}
            >
              ETHICS & COMPLIANCE
            </span>
          </Link>
          <Link
            className="text-white my-auto w-36 h-10 whitespace-nowrap group relative overflow-y-hidden  md:flex hidden"
            to="/contact"
          >
            <span
              className={`${getNavItemClass(
                "/contact"
              )} absolute transform transition-transform duration-500 ease-in-out group-hover:-translate-y-10`}
            >
              CONTACT US
            </span>
            <span
              className={`${getNavItemClass(
                "/contact"
              )} absolute text-cs6 transform mt-3 group-hover:text-cs6 translate-y-full group-hover:font-bold transition-transform duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-3`}
            >
              CONTACT US
            </span>
          </Link>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-20 transform transition duration-500 ease-in-out"
          onClick={() => setIsOpen(false)}
        >
          <div className="fixed right-2 top-4 w-2/4 max-w-sm cs-1 bg-cs5 h-5/12 rounded-xl mt-3 z-30">
            <div className="flex justify-end pl-4 pr-4 pt-4">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-10 h-10 cs-1 rounded-lg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  // width="60"
                  // height="60"
                  style={{ fill: "#339947", stroke: "#339947" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col space-y-2 pl-4 pr-4 mt-2 mb-4">
              <Link className={getNavItemClass("/")} to="/">
                Home
              </Link>
              <Link className={`${getNavItemClass("/about")}`} to="/about">
                WHO WE ARE
              </Link>

              <Link className={getNavItemClass("/products")} to="/products">
                PRODUCTS
              </Link>
              <Link className={getNavItemClass("/ethics")} to="/ethics">
                ETHICS & COMPLIANCE
              </Link>
              <Link className={getNavItemClass("/careers")} to="/ethics">
                CAREERS
              </Link>
              <Link className={getNavItemClass("/contact")} to="/contact">
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
