// src/GlobeCesium.js
import React, { useRef, useEffect } from "react";
import { Viewer } from "cesium"; // Correct import from Cesium
import "cesium/Build/Cesium/Widgets/widgets.css"; // Correct import for styles

const GlobeCesium = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const viewer = new Viewer(mountRef.current, {
      shouldAnimate: true,
    });

    return () => {
      viewer.destroy();
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "600px" }} />;
};

export default GlobeCesium;
