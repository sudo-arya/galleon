import React, { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconUrl from "../Assets/marker-icon.png";

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Define custom icon
    const customIcon = L.icon({
      iconUrl,
      iconSize: [32, 32],
      iconAnchor: [16, 6],
    });

    // Expose handleAddressClick to global scope
    window.handleAddressClick = handleAddressClick;

    // Check if map has already been initialized
    if (!mapRef.current) {
      // Create map
      mapRef.current = L.map("map").setView(
        [25.155759110357906, 55.30033366215469],
        17
      );

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
        mapRef.current
      );

      L.marker([25.155759110357906, 55.30033366215469], { icon: customIcon })
        .addTo(mapRef.current)
        .bindPopup(
          '<div style="cursor: pointer; color: blue;" onclick="window.handleAddressClick()"><u>Galleon Trading LLC FZ</u></div>'
        )
        .openPopup();
    }
  }, []); // Only run once, after the initial render

  const handleAddressClick = () => {
    // const address ="Business Center 1, M Floor,, The Meydan Hotel, Nad Al Sheba, Dubai, Dubai"; // Replace this with your actual address
    // const encodedAddress = encodeURIComponent(address);
    window.open(`https://maps.app.goo.gl/SkETZcsiZsFxz3dQA`, "_blank");
  };

  return (
    <div className="relative">
      <div
        id="map"
        style={{ width: "100%", height: "400px" }}
        className=" w-full h-full"
      />
      <div
        className="absolute bottom-0 left-0 right-0 bg-cs5 bg-opacity-75 text-center p-2 cursor-pointer md:visible hidden"
        onClick={handleAddressClick}
      >
        Business Center 1, M Floor,, The Meydan Hotel, Nad Al Sheba, Dubai,
        Dubai
      </div>
    </div>
  );
};

export default Map;
