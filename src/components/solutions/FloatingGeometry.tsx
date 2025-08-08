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

    const geometries = [
      new THREE.OctahedronGeometry(1, 0),
      new THREE.TetrahedronGeometry(1.2, 0),
      new THREE.IcosahedronGeometry(0.8, 0)
    ];

    const materials = [
      new THREE.MeshBasicMaterial({ 
        color: 0x6366f1, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.6 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x8b5cf6, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.4 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x3b82f6, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.5 
      })
    ];

    const meshes = geometries.map((geometry, index) => {
      const mesh = new THREE.Mesh(geometry, materials[index]);
      mesh.position.set(
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4
      );
      scene.add(mesh);
      return mesh;
    });

    camera.position.z = 5;

    const animate = () => {
      meshes.forEach((mesh, index) => {
        mesh.rotation.x += 0.01 * (index + 1);
        mesh.rotation.y += 0.01 * (index + 1);
        mesh.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
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
    };
  }, []);

  return <div ref={mountRef} className="absolute top-0 right-0 opacity-20 pointer-events-none" />;
};

export default FloatingGeometry;