'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticlesBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Reduced particle count for better performance
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 800;
    const posArray = new Float32Array(particlesCount * 3);
    const colorsArray = new Float32Array(particlesCount * 3);

    // Base color: #6b7db8 (107, 125, 184)
    const baseColor = new THREE.Color(0x6b7db8);
    
    for (let i = 0; i < particlesCount * 3; i += 3) {
      // More structured distribution
      posArray[i] = (Math.random() - 0.5) * 80;
      posArray[i + 1] = (Math.random() - 0.5) * 80;
      posArray[i + 2] = (Math.random() - 0.5) * 60;

      // Variations of the base color #6b7db8
      const colorVariation = Math.random();
      if (colorVariation < 0.4) {
        // Original color #6b7db8
        colorsArray[i] = 107/255;
        colorsArray[i + 1] = 125/255;
        colorsArray[i + 2] = 184/255;
      } else if (colorVariation < 0.7) {
        // Lighter variant #8a9fd9
        colorsArray[i] = 138/255;
        colorsArray[i + 1] = 159/255;
        colorsArray[i + 2] = 217/255;
      } else {
        // Darker variant #5a6ba3
        colorsArray[i] = 90/255;
        colorsArray[i + 1] = 107/255;
        colorsArray[i + 2] = 163/255;
      }
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 1.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    camera.position.z = 40;
    
    sceneRef.current = scene;
    rendererRef.current = renderer;
    particlesRef.current = particles;

    // Minimal animation - very subtle rotation only
    const animateParticles = () => {
      if (particlesRef.current) {
        // Very slow, subtle rotation
        particlesRef.current.rotation.y += 0.0005;
      }
      
      renderer.render(scene, camera);
      requestAnimationFrame(animateParticles);
    };

    animateParticles();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 pointer-events-none z-0" />;
};

export default ParticlesBackground;