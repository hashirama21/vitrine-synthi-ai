'use client';

import {useState} from "react"
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";


export default function Missions() {


return (
<section className="relative min-h-[50vh] flex flex-col lg:flex-row items-center py-5 justify-between px-4 sm:px-6 md:px-12 lg:px-24 mt-6 sm:mt-10">

{/* Section Droite : Visuel Interactif */}
<div className="lg:w-1/2 w-full flex justify-center max-w-sm mx-auto">
    <div className="relative w-full max-w-md">
      <motion.div
        animate={{
          rotateX: [0, 10, -10, 0],
          rotateY: [0, -10, 10, 0],
          transition: { duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
        }}
        className="bg-[#10172a] rounded-lg p-6 shadow-lg relative overflow-hidden"
      >
        <div className="text-blue-400 absolute -top-4 left-4 bg-[#1a2335] px-3 py-1 rounded-md text-xs">Emre</div>
        <div className="text-orange-400 absolute top-4 right-4 bg-[#1a2335] px-3 py-1 rounded-md text-xs">Chris</div>
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: { duration: 1, delay: 0.5 } }}
          className="h-32 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-md flex items-center justify-center"
        >
          <span className="text-white text-lg font-semibold">3D Cube</span>
        </motion.div>
      </motion.div>
      <div className="mt-4 flex gap-4">
        <div className="bg-[#10172a] p-3 rounded-md text-white">Flex the</div>
        <div className="bg-[#10172a] p-3 rounded-md flex-1">
          <input type="range" className="w-full cursor-pointer" />
        </div>
      </div>
    </div>
  </div>

{/* Section Texte */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="w-full lg:w-1/2 mt-8 text-center lg:text-left"
>
  <h4 className="text-blue-400 uppercase text-sm font-semibold tracking-widest">
    SYNTHI AI COMMITMENTS
  </h4>
  <h2 className="text-3xl font-bold mt-2">
    OUR MISSIONS
  </h2>
  <ul className="mt-6 space-y-3">
    {[
      "Develop advanced AI solutions tailored to economic and social challenges.",
      "Train the talents of tomorrow and strengthen the african technological ecosystem.",
      "Facilitate the adoption of AI in businesses, institutions and strategic industries.",
      "Ensure responsible and ethical AI for sustainable inclusive development.",
    ].map((text, index) => (
      <li key={index} className="flex items-center gap-3">
        <CheckCircle className="text-blue-500" />
        {text}
      </li>
    ))}
  </ul>
</motion.div>

</section>

);
}