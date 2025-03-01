"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    { question: "What is Synthi AI ?", answer: "Synthi AI is an advanced AI platform specializing in innovative solutions for businesses and industries." },
    { question: "What are Synthi AI services ?", answer: "We offer AI-driven solutions, including automation, data analysis, and smart decision-making tools." },
    { question: "Which solutions do Synthi AI offer ?", answer: "Our solutions span healthcare, finance, logistics, and environmental sustainability, leveraging AI for impactful change." },
    { 
    question: "Why choose Synthi AI as trust tech partner ?", 
    answer: "We’re Africa’s AI leader, specializing in ethical, impactful AI solutions. With strong partnerships and cutting-edge technology, we’re transforming key sectors and improving lives across the continent." 
},
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
};

return (
    <section className="py-16  text-white max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10">
    
      {/* Texte à gauche */}
        <div className="w-full md:w-1/3">
        <h2 className="text-3xl font-semibold">
            <span className="text-white">FAQs</span>
        </h2>
        <p className="text-gray-400 mt-2">
            We understand that you may have some questions before making a decision, and we are here to provide you with all the answers you need.
        </p>
</div>

      {/* Liste des FAQs à droite */}
    <div className="w-full md:w-2/3 space-y-4">
        {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-700">
            <button
                className="w-full text-left flex justify-between items-center py-6 text-lg"
                onClick={() => toggleFAQ(index)}
            >
                {faq.question}
                <ChevronDown className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
            </button>

            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden text-gray-400"
            >
            <p className="pb-4">{faq.answer}</p>
            </motion.div>
        </div>
        ))}
    </div>

    </section>
);
}
