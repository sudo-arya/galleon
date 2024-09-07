import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

const GlobeThree = ({ locations }) => {
  const mountRef = useRef(null);
  const [font, setFont] = useState(null);

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.rotateSpeed = 0.5;

    // Globe setup
    const globeGroup = new THREE.Group();
    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(
        "https://unpkg.com/three-globe/example/img/earth-day.jpg"
      ),
    });
    const globe = new THREE.Mesh(geometry, material);
    globeGroup.add(globe);

    // Function to convert lat/lng to 3D coordinates
    const convertLatLngToVector3 = (lat, lng, radius) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);

      const x = -(radius * Math.sin(phi) * Math.cos(theta));
      const z = radius * Math.sin(phi) * Math.sin(theta);
      const y = radius * Math.cos(phi);

      return new THREE.Vector3(x, y, z);
    };

    // Load font and create text labels
    const fontLoader = new FontLoader();
    fontLoader.load(
      "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
      (loadedFont) => {
        setFont(loadedFont);
        createMarkers(loadedFont);
      }
    );

    const createMarkers = (font) => {
      locations.forEach((location) => {
        // Create marker
        const markerGeometry = new THREE.SphereGeometry(0.1, 8, 8);
        const markerMaterial = new THREE.MeshBasicMaterial({
          color: location.color || "red",
        });
        const markerMesh = new THREE.Mesh(markerGeometry, markerMaterial);
        const markerPosition = convertLatLngToVector3(
          location.lat,
          location.lng,
          5.1
        );
        markerMesh.position.copy(markerPosition);
        globeGroup.add(markerMesh);

        // Create label
        if (font) {
          const textGeometry = new TextGeometry(location.label, {
            font: font,
            size: 0.2,
            height: 0.01,
          });
          const textMaterial = new THREE.MeshBasicMaterial({
            color: location.color || "red",
          });
          const textMesh = new THREE.Mesh(textGeometry, textMaterial);

          // Position label on globe
          textMesh.position.copy(markerPosition);
          textMesh.position.y += 0.2; // Adjust label position slightly above the marker

          // Orient label to be flat on the globe's surface
          textMesh.lookAt(new THREE.Vector3(0, 0, 0));

          // Flip the text mesh to correct mirroring
          textMesh.rotateY(Math.PI);
          globeGroup.add(textMesh);
        }
      });

      scene.add(globeGroup);
      camera.position.z = 10;
    };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      globeGroup.rotation.y += 0.004;
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
  }, [locations]);

  return (
    <div 
      ref={mountRef}
      className="xl:w-[50vw] xl:h-[50vh] w-[50vw] h-[38vh] mx-auto relative"
    />
  );
};

export default GlobeThree;
