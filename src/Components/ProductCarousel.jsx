// src/ProductCarousel.js
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
    image: cashewShellImage, // Remove curly braces
  },
  {
    name: "Cashew Kernels",
    color: "bg-yellow-500",
    image: cashewImage, // Remove curly braces
  },
  {
    name: "Sesame Seeds",
    color: "bg-blue-500",
    image: seasmeImage, // Remove curly braces
  },
  {
    name: "Peanuts",
    color: "bg-red-500",
    image: peanutImage, // Remove curly braces
  },
  {
    name: "Cotton",
    color: "bg-purple-500",
    image: cottonImage, // Corrected image variable
  },
  {
    name: "Pulses",
    color: "bg-pink-500",
    image: pulsesImage, // Remove curly braces
  },
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleProductClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-row items-center justify-center h-fit bg-gray-100">
      <div
        className={`relative flex items-center justify-center w-1/2 h-1/2 overflow-hidden shadow-xl transition-all duration-500 transform ${products[currentIndex].color}`}
      >
        <img
          src={products[currentIndex].image}
          alt={products[currentIndex].name}
          className="w-full h-full object-cover rounded-full "
        />
        <h2 className="absolute bottom-4 text-white text-xl font-bold">
          {products[currentIndex].name}
        </h2>
      </div>
      <div className="mt-6 w-1/2 flex flex-col space-y-4">
        {products.map((product, index) => (
          <button
            key={index}
            onClick={() => handleProductClick(index)}
            className={`w-20 h-20 rounded-full border-4 transform transition-all duration-500 ${
              index === currentIndex ? "scale-110 border-black" : "border-white"
            } ${product.color}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
