'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import React from 'react';

export default function ParticleNetwork() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Initialize scene
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;
    
    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x0a0a1a, 1);
    containerRef.current.appendChild(renderer.domElement);
    
    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 3000;
    
    const posArray = new Float32Array(particlesCount * 3);
    
    // Create positions for particles
    for (let i = 0; i < particlesCount * 3; i++) {
      // Creates a spherical distribution
      posArray[i] = (Math.random() - 0.5) * 50;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    // Point material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      color: 0x3a96ff,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    
    // Mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Lines between particles
    const linesMaterial = new THREE.LineBasicMaterial({
      color: 0x3a96ff,
      transparent: true,
      opacity: 0.2,
    });
    
    // Create connections between particles that are close to each other
    let linesGeometry = new THREE.BufferGeometry();
    let positions: number[] = [];
    let connections: number = 0;
    
    const maxConnections = 3000; // Limit for performance
    const connectionDistance = 5; // Maximum distance for connection
    
    for (let i = 0; i < particlesCount; i++) {
      const iX = posArray[i * 3];
      const iY = posArray[i * 3 + 1];
      const iZ = posArray[i * 3 + 2];
      
      for (let j = i + 1; j < particlesCount && connections < maxConnections; j++) {
        const jX = posArray[j * 3];
        const jY = posArray[j * 3 + 1];
        const jZ = posArray[j * 3 + 2];
        
        const distance = Math.sqrt(
          (iX - jX) ** 2 + (iY - jY) ** 2 + (iZ - jZ) ** 2
        );
        
        if (distance < connectionDistance) {
          positions.push(iX, iY, iZ, jX, jY, jZ);
          connections++;
        }
      }
    }
    
    linesGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(positions, 3)
    );
    
    const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(linesMesh);
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      particlesMesh.rotation.x += 0.0003;
      particlesMesh.rotation.y += 0.0003;
      linesMesh.rotation.x += 0.0003;
      linesMesh.rotation.y += 0.0003;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Initial animation with GSAP
    gsap.to(particlesMesh.rotation, {
      duration: 2,
      y: Math.PI * 0.5,
      ease: 'power2.out'
    });
    
    // Mouse move effect
    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      
      gsap.to(particlesMesh.rotation, {
        duration: 2,
        x: mouseY * 0.3,
        y: mouseX * 0.3,
        ease: 'power1.out'
      });
      
      gsap.to(linesMesh.rotation, {
        duration: 2,
        x: mouseY * 0.3,
        y: mouseX * 0.3,
        ease: 'power1.out'
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return <div ref={containerRef} className="absolute inset-0 z-0" />;
}