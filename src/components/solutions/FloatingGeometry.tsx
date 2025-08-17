'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const FloatingGeometry = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 400 / 400, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(400, 400);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Geometries with more variety
    const geometries = [
      new THREE.OctahedronGeometry(1, 0),
      new THREE.TetrahedronGeometry(1.2, 0),
      new THREE.IcosahedronGeometry(0.8, 0),
      new THREE.DodecahedronGeometry(0.9, 0)
    ];

    // Materials using #6b7db8 color scheme
    const baseColor = 0x6b7db8; // Main color
    const lightVariant = 0x8a9fd9; // Lighter variant
    const darkVariant = 0x5a6ba3; // Darker variant

    const materials = [
      new THREE.MeshBasicMaterial({
        color: baseColor,
        wireframe: true,
        transparent: true,
        opacity: 0.6
      }),
      new THREE.MeshBasicMaterial({
        color: lightVariant,
        wireframe: true,
        transparent: true,
        opacity: 0.4
      }),
      new THREE.MeshBasicMaterial({
        color: darkVariant,
        wireframe: true,
        transparent: true,
        opacity: 0.5
      }),
      new THREE.MeshBasicMaterial({
        color: baseColor,
        wireframe: true,
        transparent: true,
        opacity: 0.3
      })
    ];

    const meshes = geometries.map((geometry, index) => {
      const mesh = new THREE.Mesh(geometry, materials[index % materials.length]);
      
      // More structured positioning
      const angle = (index / geometries.length) * Math.PI * 2;
      const radius = 2.5;
      mesh.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius * 0.5,
        (Math.random() - 0.5) * 3
      );
      
      scene.add(mesh);
      return mesh;
    });

    camera.position.z = 6;

    // Minimal animation
    const animate = () => {
      meshes.forEach((mesh, index) => {
        // Very slow rotation
        mesh.rotation.x += 0.005 * (index + 1);
        mesh.rotation.y += 0.003 * (index + 1);
        
        // Subtle floating motion
        mesh.position.y += Math.sin(Date.now() * 0.0008 + index) * 0.001;
      });

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometries.forEach(geo => geo.dispose());
      materials.forEach(mat => mat.dispose());
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="absolute top-8 right-8 opacity-20 pointer-events-none z-10"
      style={{ width: '400px', height: '400px' }}
    />
  );
};

export default FloatingGeometry;