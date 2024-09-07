import React from "react";
import Seo from "./Seo";
import GlobeThree from "./GlobeThree";

const CashewKernels = () => {
  // const arg = "CashewKernels";
   const locations = [
     { lat: -8.7832, lng: 34.5085, label: "Tanzania", color: "red" },
     { lat: 6.5244, lng: 3.3792, label: "Nigeria", color: "blue" },
     // Add more locations as needed
   ];

  return (
    <div className="w-screen bg-cs2 h-fit">
      CashewKernels
      <Seo
        title="Cashew Kernels - Galleon Trading"
        description=""
        keywords=""
      />
      <h1>3D Globe using Three.js</h1>
      <div className="w-full bg-black">
        <GlobeThree locations={locations} />{" "}
      </div>
    </div>
  );
};

export default CashewKernels;
