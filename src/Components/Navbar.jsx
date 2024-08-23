// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Seo from "./Seo";
import gtlogoCircular from "../Assets/GT LOGO circular.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const location = useLocation();

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
      ? " text-cs1 cs-1 font-semibold bg-gray-90 py-2 px-3 rounded-lg cursor-pointer"
      : "text-cs5 font-semibold cs-2 py-2 px-2 rounded-lg cursor-pointer hover:bg-cs4 hover:text-black ";

  return (
    <nav
      className={isSmallScreen ? "cs-2 p-2 pt-2 shadow-md" : "cs-2 shadow-md"}
    >
      <Seo title="Navbar - Galleon Trading" description="" keywords="" />
      <div className="hidden md:flex md:space-x-12 container bg-cs5 max-w-full p-0 justify-between items-center h-9">
        <div className="hidden md:flex md:space-x-12 text-lg text-white container mx-auto ">
          <Link
            className="text-white p-4 w-1/12 hover:text-cs6 transform transition duration-500 ease-in-out hover:font-bold"
            to="#location"
          >
            Locations
          </Link>
          <Link
            className="text-white p-4 w1/12 hover:text-cs6 transform transition duration-500 ease-in-out hover:font-bold"
            to="/about"
          >
            Careers
          </Link>
          <Link
            className="text-white my-auto w-5/6 hover:text-cs6 transform transition duration-500 ease-in-out hover:font-bold"
            to="/products"
          ></Link>
          <Link
            className="text-white my-auto w-1/12 p-3 pt-0 pb-4 whitespace-nowrap group  "
            to="/contact"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="28"
              height="28"
              className="absolute fill-white transform transition-transform duration-200 ease-in-out group-hover:-translate-y-10 "
              viewBox="0 0 50 50"
            >
              <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
            </svg>
            <div className="h-1"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="28"
              height="28"
              className="absolute fill-cs6 transform translate-y-full transition-transform duration-200 ease-in-out group-hover:-translate-y-3"
              viewBox="0 0 50 50"
            >
              <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
            </svg>
          </Link>
        </div>
      </div>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold cursor-pointer nav-item">
          <Link to="/">
            <img
              src={gtlogoCircular}
              alt="logo"
              className={isSmallScreen ? "w-16 my-3 ml-2" : " w-20 my-2"}
            />
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white rounded-xl focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              baseProfile="tiny"
              version="1.2"
              viewBox="0 0 24 24"
              id="menu"
              className="mr-3"
              style={{ fill: "#778DA9", stroke: "#415A77" }}
            >
              <path d="M8 3H6a2.99 2.99 0 0 0-2.119.881A2.99 2.99 0 0 0 3 6v2c0 .825.337 1.575.881 2.119A2.99 2.99 0 0 0 6 11h2a2.99 2.99 0 0 0 2.119-.881A2.99 2.99 0 0 0 11 8V6a2.99 2.99 0 0 0-.881-2.119A2.99 2.99 0 0 0 8 3zm10 0h-2a2.99 2.99 0 0 0-2.119.881A2.99 2.99 0 0 0 13 6v2c0 .825.337 1.575.881 2.119A2.99 2.99 0 0 0 16 11h2a2.99 2.99 0 0 0 2.119-.881A2.99 2.99 0 0 0 21 8V6a2.99 2.99 0 0 0-.881-2.119A2.99 2.99 0 0 0 18 3zM8 13H6a2.99 2.99 0 0 0-2.119.881A2.99 2.99 0 0 0 3 16v2c0 .825.337 1.575.881 2.119A2.99 2.99 0 0 0 6 21h2a2.99 2.99 0 0 0 2.119-.881A2.99 2.99 0 0 0 11 18v-2a2.99 2.99 0 0 0-.881-2.119A2.99 2.99 0 0 0 8 13zm10 0h-2a2.99 2.99 0 0 0-2.119.881A2.99 2.99 0 0 0 13 16v2c0 .825.337 1.575.881 2.119A2.99 2.99 0 0 0 16 21h2a2.99 2.99 0 0 0 2.119-.881A2.99 2.99 0 0 0 21 18v-2a2.99 2.99 0 0 0-.881-2.119A2.99 2.99 0 0 0 18 13z"></path>
            </svg>
          </button>
        </div>
        <div className="hidden md:flex md:space-x-6 text-lg">
          <Link className={getNavItemClass("/")} to="/">
            Home
          </Link>
          <Link className={getNavItemClass("/about")} to="/about">
            About Us
          </Link>
          <Link className={getNavItemClass("/products")} to="/products">
            Products
          </Link>
          <Link className={getNavItemClass("/contact")} to="/contact">
            Contact Us
          </Link>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 transform transition duration-1000 ease-in-out"
          onClick={() => setIsOpen(false)}
        >
          <div className="fixed right-0 top-0 w-2/4 max-w-sm cs-2 h-5/12 rounded-lg mt-3 z-30">
            <div className="flex justify-end pl-4 pr-4 pt-4">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-8 h-8 cs-1 rounded-lg p-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ fill: "#415A77", stroke: "#778DA9" }}
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
            <div className="flex flex-col space-y-2 pl-4 pr-4 mt-4 mb-4">
              <Link className={getNavItemClass("/")} to="/">
                Home
              </Link>
              <Link className={getNavItemClass("/about")} to="/about">
                About Us
              </Link>

              <Link className={getNavItemClass("/products")} to="/products">
                Products
              </Link>
              <Link className={getNavItemClass("/contact")} to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
