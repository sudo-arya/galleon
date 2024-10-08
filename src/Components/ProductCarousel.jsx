import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation
import cashewShellImage from "../Assets/cashew in shells.jpg";
import cashewImage from "../Assets/cashew.jpg";
import seasmeImage from "../Assets/seasme.jpg";
import peanutImage from "../Assets/peanut1.jpg";
import cottonImage from "../Assets/cotton.jpg";
import pulsesImage from "../Assets/pulses.jpg";

const products = [
  {
    name: "Raw Cashew Nuts In Shell",
    color: "bg-green-500",
    textColor: "text-green-500",
    bgColor: "bg-gradient-to-tr from-green-300 via-green-500 to-green-600",
    image: cashewShellImage,
    link: "/cashewShell",
    description:
      "High-quality raw cashew nuts, sourced directly from farmers, perfect for processing into cashew kernels.",
  },
  {
    name: "Cashew Kernels",
    color: "bg-yellow-500",
    textColor: "text-yellow-500",
    bgColor: "bg-gradient-to-tr from-yellow-300 via-yellow-500 to-yellow-600",
    link: "/cashewKernels",
    image: cashewImage,
    description:
      "Delicious and crunchy cashew kernels, ideal for snacking or use in culinary creations.",
  },
  {
    name: "Sesame Seeds",
    color: "bg-blue-500",
    textColor: "text-blue-500",
    bgColor: "bg-gradient-to-tr from-blue-300 via-blue-500 to-blue-600",
    link: "/seasme",
    image: seasmeImage,
    description:
      "Rich in flavor and nutrients, our sesame seeds are perfect for baking, cooking, or as a salad topping.",
  },
  {
    name: "Peanuts",
    color: "bg-red-500",
    textColor: "text-red-500",
    bgColor: "bg-gradient-to-tr from-red-300 via-red-500 to-red-600",
    link: "/peanuts",
    image: peanutImage,
    description:
      "Fresh, high-quality peanuts, perfect for snacking, peanut butter production, or use in various recipes.",
  },
  {
    name: "Cotton",
    color: "bg-purple-500",
    textColor: "text-purple-500",
    bgColor: "bg-gradient-to-tr from-purple-300 via-purple-500 to-purple-600",
    link: "/cotton",
    image: cottonImage,
    description:
      "Premium-grade cotton, ideal for textile production, and known for its softness and durability.",
  },
  {
    name: "Pulses",
    color: "bg-pink-500",
    textColor: "text-pink-500",
    bgColor: "bg-gradient-to-tr from-pink-300 via-pink-500 to-pink-600",
    link: "/pulses",
    image: pulsesImage,
    description:
      "A variety of nutritious pulses, including lentils, chickpeas, and beans, perfect for healthy meals.",
  },
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 3) % products.length);
        setIsAnimating(false);
      }, 500); // Duration of animation
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const handleProductClick = (index) => {
    if (index === currentIndex) return; // No animation if the same product is clicked
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 500); // Duration of animation
  };

  return (
    <div className="flex flex-col xl:flex-row items-center justify-center h-fit bg-sky-600 bg-opacity-20">
      {products.slice(currentIndex, currentIndex + 3).map((product, index) => (
        <Link
          to={product.link}
          key={index}
          onClick={() => handleProductClick(currentIndex + index)}
          className={`relative flex items-center justify-center w-full xl:w-1/3 h-[50vh] overflow-hidden shadow-xl transition-transform duration-700 ${
            product.bgColor
          } ${product.color} ${
            isAnimating
              ? "animate-zoom-out opacity-0"
              : "animate-zoom-in opacity-100"
          }`}
        >
          <div className="absolute inset-0 bg-black opacity-55 group-hover:opacity-40 z-10"></div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 transform scale-100"
          />
          <p className="absolute inset-0 w-full h-full text-5xl flex px-8 xl:px-20 justify-start pt-20 font-bold flex-col text-white z-20">
            {product.name}
            <span className="text-base py-3 md:py-8 font-semibold">
              {product.description}
            </span>
            <svg
              height="60"
              viewBox="0 0 512 512"
              width="60"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-white"
            >
              <title />
              <path d="M464,256c0-114.87-93.13-208-208-208S48,141.13,48,256s93.13,208,208,208S464,370.87,464,256ZM251.35,347.36a16,16,0,0,1-.09-22.63L303.58,272H170a16,16,0,0,1,0-32H303.58l-52.32-52.73A16,16,0,1,1,274,164.73l79.39,80a16,16,0,0,1,0,22.54l-79.39,80A16,16,0,0,1,251.35,347.36Z" />
            </svg>
          </p>
        </Link>
      ))}
    </div>
  );
};

export default ProductCarousel;
