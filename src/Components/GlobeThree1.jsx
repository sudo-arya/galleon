// src/GlobeThree.js
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const GlobeThree = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null; // Set the scene background to transparent
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

    // Renderer setup with transparent background
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Enable damping (inertia)
    controls.dampingFactor = 0.05;
    controls.enableZoom = true; // Allow zooming
    controls.enablePan = false; // Disable panning
    controls.rotateSpeed = 0.5; // Adjust rotation speed

    // Globe setup
    const globeGroup = new THREE.Group(); // Create a group for the globe and markers

    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(
        "https://unpkg.com/three-globe/example/img/earth-day.jpg"
      ),
    });
    const globe = new THREE.Mesh(geometry, material);
    globeGroup.add(globe); // Add the globe to the group

    // Function to convert lat/lng to 3D coordinates
    const convertLatLngToVector3 = (lat, lng, radius) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);

      const x = -(radius * Math.sin(phi) * Math.cos(theta));
      const z = radius * Math.sin(phi) * Math.sin(theta);
      const y = radius * Math.cos(phi);

      return new THREE.Vector3(x, y, z);
    };

    // Add markers with different colors
    const markers = [
      { lat: -8.7832, lng: 34.5085, label: "Tanzania", color: "red" }, // Tanzania example
      { lat: 6.5244, lng: 3.3792, label: "Nigeria", color: "blue" }, // Nigeria example
      // Add more locations with specific colors
    ];

    markers.forEach((marker) => {
      const markerGeometry = new THREE.SphereGeometry(0.1, 8, 8); // Small sphere for the marker
      const markerMaterial = new THREE.MeshBasicMaterial({
        color: marker.color,
      }); // Unique color for each marker
      const markerMesh = new THREE.Mesh(markerGeometry, markerMaterial);

      // Position marker on the globe
      const markerPosition = convertLatLngToVector3(
        marker.lat,
        marker.lng,
        5.1
      ); // Slightly above the globe surface
      markerMesh.position.copy(markerPosition);

      globeGroup.add(markerMesh); // Add marker to the globe group
    });

    scene.add(globeGroup); // Add the entire group to the scene
    camera.position.z = 10;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // Update controls
      globeGroup.rotation.y += 0.004; // Rotate the entire group slowly for auto-rotation effect
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="xl:w-[50vw] xl:h-[50vh] w-[100vw] h-[38vh] mx-auto relative"
    />
  );
};

export default GlobeThree;
