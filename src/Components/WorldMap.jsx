import React, { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconUrl from "../Assets/marker-icon.png";

const Map = () => {
  const mapRef = useRef(null);

  // List of sources with coordinates, labels, and colors
  const sources = [
    { lat: -8.7832, lng: 34.5085, label: "Tanzania", color: "green" },
    { lat: -18.6657, lng: 35.5296, label: "Mozambique", color: "green" },
    { lat: 6.5244, lng: 3.3792, label: "Nigeria", color: "green" },
    { lat: 7.9465, lng: -1.0232, label: "Ghana", color: "green" },
    { lat: 7.539989, lng: -5.54708, label: "Cote d'Ivoire", color: "green" },
    { lat: 12.2383, lng: -1.5616, label: "Burkina Faso", color: "green" },
    { lat: 9.9456, lng: -9.6966, label: "Guinea Conakry", color: "green" },
    { lat: 14.4974, lng: -14.4524, label: "Senegal", color: "green" },
    { lat: 11.8037, lng: -15.1804, label: "Guinea Bissau", color: "green" },
    { lat: 20.5937, lng: 78.9629, label: "India", color: "green" },
    { lat: 14.0583, lng: 108.2772, label: "Vietnam", color: "green" },
  ];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // Define custom icons
    const customIcon = L.icon({
      iconUrl,
      iconSize: [32, 32],
      iconAnchor: [16, 6],
    });

    // Check if map has already been initialized
    if (!mapRef.current) {
      // Initialize map
      mapRef.current = L.map("map").setView(
        [8.444619629465514, 62.45748126777431],
        3
      ); // Centered on Ghana
// 8.444619629465514, 62.45748126777431;
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
        mapRef.current
      );

      // Add markers for all sources
      sources.forEach((source) => {
        const sourceIcon = L.divIcon({
          className: "",
          html: `<div style="background-color: ${source.color}; width: 12px; height: 12px; border-radius: 50%;"></div>`,
          iconSize: [12, 12],
          iconAnchor: [6, 6],
        });

        L.marker([source.lat, source.lng], { icon: sourceIcon })
          .addTo(mapRef.current)
          .bindPopup(`<b>${source.label}</b>`);
      });

      // Add marker for Galleon Trading LLC
      L.marker([25.155759110357906, 55.30033366215469], { icon: customIcon })
        .addTo(mapRef.current)
        .bindPopup(
          '<div style="cursor: pointer; color: blue;" onclick="window.handleAddressClick()"><u>Galleon Trading LLC FZ</u></div>'
        )
        .openPopup();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run once, after the initial render

  const handleAddressClick = () => {
    window.open(`https://maps.app.goo.gl/SkETZcsiZsFxz3dQA`, "_blank");
  };

  return (
    <div className="relative xl:rounded-3xl">
      <div
        id="map"
        style={{ width: "100%", height: "500px" }}
        className=" w-full h-full xl:rounded-3xl "
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
