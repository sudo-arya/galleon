// GlobeComponent.js
import React, { useEffect, useRef } from "react";
import Globe from "globe.gl";
import icon1 from "../Assets/icons8-location-48.png";

const GlobeComponent = () => {
  const globeEl = useRef();

  useEffect(() => {
    const globe = Globe()(globeEl.current)
      .globeImageUrl("//unpkg.com/three-globe/example/img/earth-day.jpg") // Daytime globe texture
      .backgroundImageUrl("//unpkg.com/three-globe/example/img/night-sky.png") // Background texture remains the same
      .htmlElementsData([
        { lat: -8.7832, lng: 34.5085, marker: "Tanzania" }, // Tanzania example
        { lat: 6.5244, lng: 3.3792, marker: "Nigeria" }, // Nigeria example
        // Add more locations
      ])
      .htmlElement((d) => {
        // Create a custom HTML element for each marker
        const markerEl = document.createElement("div");
        markerEl.innerHTML = `
          <img 
            src="${icon1}" 
            alt="${d.marker}" 
            style="width: 20px; height: 20px; transform: translate(-50%, -100%);" />
        `;
        return markerEl;
      });

    // Rotate globe
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.9;
  }, []);

  // CSS styles to make the component responsive
  

  return <div className="" ref={globeEl}  />;
};

export default GlobeComponent;
