import React from "react";
import Seo from "./Seo";
import GlobeComponent from "./GlobeComponent";

const CashewShell = () => {
  // const arg = "CashewShell";

  return (
    <div className="w-screen bg-cs2 h-fit">
      CashewShell
      <Seo title="Cashew Shell - Galleon Trading" description="" keywords="" />
      <div className="">
        <h1>Import and Export Locations</h1>
        <GlobeComponent  className=""/>
      </div>
    </div>
  );
};

export default CashewShell;
