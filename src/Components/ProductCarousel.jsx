import React, { useState } from "react";
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
    image: cashewShellImage,
    description:
      "High-quality raw cashew nuts, sourced directly from farmers, perfect for processing into cashew kernels.",
  },
  {
    name: "Cashew Kernels",
    color: "bg-yellow-500",
    textColor: "text-yellow-500",
    image: cashewImage,
    description:
      "Delicious and crunchy cashew kernels, ideal for snacking or use in culinary creations.",
  },
  {
    name: "Sesame Seeds",
    color: "bg-blue-500",
    textColor: "text-blue-500",
    image: seasmeImage,
    description:
      "Rich in flavor and nutrients, our sesame seeds are perfect for baking, cooking, or as a salad topping.",
  },
  {
    name: "Peanuts",
    color: "bg-red-500",
    textColor: "text-red-500",
    image: peanutImage,
    description:
      "Fresh, high-quality peanuts, perfect for snacking, peanut butter production, or use in various recipes.",
  },
  {
    name: "Cotton",
    color: "bg-purple-500",
    textColor: "text-purple-500",
    image: cottonImage,
    description:
      "Premium-grade cotton, ideal for textile production, and known for its softness and durability.",
  },
  {
    name: "Pulses",
    color: "bg-pink-500",
    textColor: "text-pink-500",
    image: pulsesImage,
    description:
      "A variety of nutritious pulses, including lentils, chickpeas, and beans, perfect for healthy meals.",
  },
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleProductClick = (index) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 500); // Duration of animation
  };

  return (
    <div className="flex flex-row items-center justify-center h-fit bg-gray-100 overflow-y-hidden overflow-hidden">
      {/* Left Side Image with Animation */}
      <div
        className={`relative flex items-center justify-center w-full h-[70vh] overflow-hidden shadow-xl transition-all duration-500 transform ${
          products[currentIndex].color
        } ${
          isAnimating
            ? "-translate-x-full opacity-0"
            : "translate-x-0 opacity-100"
        }`}
      >
        <img
          src={products[currentIndex].image}
          alt={products[currentIndex].name}
          className="w-96 h-96 object-cover rounded-full transition-transform duration-700 transform scale-100"
        />
      </div>

      {/* Product Selection Buttons */}
      <div className="mt-6 w-fit flex flex-col space-y-4 ">
        {products.map((product, index) => (
          <button
            key={index}
            onClick={() => handleProductClick(index)}
            className={`w-7 h-12 rounded-full border-4 transform transition-all duration-500 group ${
              index === currentIndex ? "scale-110 border-cs5" : "border-white"
            } ${product.color}`}
          />
        ))}
      </div>

      {/* Right Side Content with Animation */}
      <div
        className={`relative flex flex-col items-center justify-center w-full h-[70vh] overflow-hidden shadow-xl transition-all duration-500 transform  ${
          products[currentIndex].textColor
        } ${
          isAnimating
            ? "translate-x-full opacity-0"
            : "translate-x-0 opacity-100"
        }`}
      >
        <h2 className="text-5xl font-bold transition-transform duration-700 transform scale-100">
          {products[currentIndex].name}
        </h2>
        <hr
          className={`h-2 xl:w-2/4 w-full border-cs4 pb-8 mt-1 ${products[currentIndex].textColor} font-bold transition-transform duration-700 transform scale-100`}
        />
        <p className="text-xl font-bold transition-transform duration-700 transform scale-100 w-10/12">
          {products[currentIndex].description}
        </p>
      </div>
    </div>
  );
};

export default ProductCarousel;
