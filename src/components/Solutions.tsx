'use client';


import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";


export default function Solutions() {


return (
    <section className="relative h-[50vh] flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24">

  {/* Section Droite : Visuel Interactif */}
<div className="lg:w-1/2 flex justify-center ">
    <div className="relative w-full max-w-md mx-auto">
      {/* Boîte 3D */}
        <div className="bg-[#10172a] rounded-lg p-6 shadow-lg relative">
        <div className="text-blue-400 absolute -top-4 left-4 bg-[#1a2335] px-3 py-1 rounded-md text-xs">
            Emre
        </div>
        <div className="text-orange-400 absolute top-4 right-4 bg-[#1a2335] px-3 py-1 rounded-md text-xs">
            Chris
        </div>
        <div className="h-32 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-md flex items-center justify-center">
            <span className="text-white text-lg font-semibold">3D Cube</span>
        </div>
    </div>

      {/* Options de Personnalisation */}
        <div className="mt-4 flex gap-4">
        <div className="bg-[#10172a] p-3 rounded-md text-white">Flex the</div>
        <div className="bg-[#10172a] p-3 rounded-md flex-1">
            <input type="range" className="w-full cursor-pointer" />
        </div>
    </div>
    </div>
</div>
    <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2"
        >
        <h4 className="text-blue-400 uppercase text-sm font-semibold tracking-widest">
            Powerful Solutions
        </h4>
        <h2 className="text-3xl font-bold mt-2">
            AI solutions driving <br /> growth and efficiency
        </h2>
        <ul className="mt-6 space-y-3">
            {[
                "Designing and implementing state-of-the-art robotics solutions",
                "Developing cutting-edge AI algorithms and models",
                "Offering personalized AI solutions",
                "Providing consultation services",
                "Offering training programs",
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