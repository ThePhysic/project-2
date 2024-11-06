// client/src/components/SolarSystem.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const SolarSystem = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;
    controls.enableRotate = true;

    const textureLoader = new THREE.TextureLoader();

    // Load textures for Celestial Bodies:
    const textures = {
      sun: textureLoader.load(`${process.env.PUBLIC_URL}/textures/sun.jpg`),
      mercury: textureLoader.load(`${process.env.PUBLIC_URL}/textures/mercury.jpg`),
      venus: textureLoader.load(`${process.env.PUBLIC_URL}/textures/venus.jpg`),
      earth: textureLoader.load(`${process.env.PUBLIC_URL}/textures/earth.jpg`),
      mars: textureLoader.load(`${process.env.PUBLIC_URL}/textures/mars.jpg`),
      jupiter: textureLoader.load(`${process.env.PUBLIC_URL}/textures/jupiter.jpg`),
      saturn: textureLoader.load(`${process.env.PUBLIC_URL}/textures/saturn.jpg`),
      uranus: textureLoader.load(`${process.env.PUBLIC_URL}/textures/uranus.jpg`),
      neptune: textureLoader.load(`${process.env.PUBLIC_URL}/textures/neptune.jpg`),
    };

    // Create Sun:
    const sunMaterial = new THREE.MeshBasicMaterial({ map: textures.sun });
    const sun = new THREE.Mesh(new THREE.SphereGeometry(2, 32, 32), sunMaterial);
    scene.add(sun);

    // Helper function to create planets:
    const createPlanet = (size, texture, distance, orbitSpeed) => {
      const planetMaterial = new THREE.MeshBasicMaterial({ map: texture });
      const planet = new THREE.Mesh(new THREE.SphereGeometry(size, 32, 32), planetMaterial);

      const planetOrbitGroup = new THREE.Group();
      planetOrbitGroup.position.set(0, 0, 0);
      scene.add(planetOrbitGroup);

      planet.position.x = distance;
      planetOrbitGroup.add(planet);

      return { planet, orbitGroup: planetOrbitGroup, orbitSpeed };
    };

    // Create the planets:
    const mercury = createPlanet(0.2, textures.mercury, 3, 0.02);
    const venus = createPlanet(0.3, textures.venus, 5, 0.015);
    const earth = createPlanet(0.3, textures.earth, 7, 0.01);
    const mars = createPlanet(0.25, textures.mars, 9, 0.008);
    const jupiter = createPlanet(0.7, textures.jupiter, 12, 0.005);
    const saturn = createPlanet(0.6, textures.saturn, 15, 0.004);
    const uranus = createPlanet(0.5, textures.uranus, 18, 0.003);
    const neptune = createPlanet(0.5, textures.neptune, 21, 0.0025);

    // Lighting:
    const light = new THREE.PointLight(0xffffff, 2, 100);
    light.position.set(0, 0, 0);
    scene.add(light);

    // Set camera position and look at center:
    camera.position.set(0, 30, 50);
    camera.lookAt(0, 0, 0);

    // Animation loop:
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate each planet group around the y-axis to create an orbit effect:
      mercury.orbitGroup.rotation.y += mercury.orbitSpeed;
      venus.orbitGroup.rotation.y += venus.orbitSpeed;
      earth.orbitGroup.rotation.y += earth.orbitSpeed;
      mars.orbitGroup.rotation.y += mars.orbitSpeed;
      jupiter.orbitGroup.rotation.y += jupiter.orbitSpeed;
      saturn.orbitGroup.rotation.y += saturn.orbitSpeed;
      uranus.orbitGroup.rotation.y += uranus.orbitSpeed;
      neptune.orbitGroup.rotation.y += neptune.orbitSpeed;

      // Rotate each planet on its own axis:
      mercury.planet.rotation.y += 0.01;
      venus.planet.rotation.y += 0.01;
      earth.planet.rotation.y += 0.01;
      mars.planet.rotation.y += 0.01;
      jupiter.planet.rotation.y += 0.01;
      saturn.planet.rotation.y += 0.01;
      uranus.planet.rotation.y += 0.01;
      neptune.planet.rotation.y += 0.01;

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
      controls.dispose();
    };
  }, []);

  return (
    <div ref={mountRef} style={{ height: '100vh', backgroundColor: '#000' }}>
      <h1 style={{ color: '#ffcc00', textAlign: 'center', position: 'absolute', top: '20px', width: '100%' }}>
        Interactive Solar System
      </h1>
    </div>
  );
};

export default SolarSystem;
