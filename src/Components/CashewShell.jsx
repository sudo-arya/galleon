import React from "react";
import Seo from "./Seo";
import cashewShellImage from "../Assets/cashew in shells.jpg";

// import GlobeComponent from "./GlobeComponent";
import GlobeThree1 from "./GlobeThree1";
// const arg = "CashewKernels";
   const locations = [
     { lat: -8.7832, lng: 34.5085, label: "Tanzania", color: "red" },
     { lat: 6.5244, lng: 3.3792, label: "Nigeria", color: "blue" },
     // Add more locations as needed
   ];


const CashewShell = () => {
  // const arg = "CashewShell";

  return (
    <div className="w-screen bg-cs2 h-fit -mt-1">
      CashewShell
      <Seo title="Cashew Shell - Galleon Trading" description="" keywords="" />
      <div className="">
        {/* <h1>Import and Export Locations</h1> */}
        {/* <GlobeComponent  className=""/> */}
        <div className="h-[80vh] bg-cs5 bg-opacity-15 p-6">
          {" "}
          <img src={cashewShellImage} className=" h-full rounded" alt="" />
          <div className="absolute inset-0 bg-black opacity-55 group-hover:opacity-40 z-10"></div>
        </div>
        <GlobeThree1 locations={locations} />{" "}
      </div>
    </div>
  );
};

export default CashewShell;
