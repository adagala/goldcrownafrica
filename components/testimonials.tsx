"use client";

import Image from "next/image";
import React from "react";
import Container from "./container";
import { motion } from "framer-motion";

const Testimonials = () => {
  const highlights = [
    {
      title: "Gold Trading",
      content:
        "All our operations are licensed for mining, purchase, and export for the countries of origin by the local legal and governmental authorities. We mine and source high-purity gold across Western and Eastern Africa in various forms including bars, nuggets, and ingots.",
      icon: "✨",
    },
    {
      title: "Diamonds Trading",
      content:
        "We source ethically mined rough diamonds from premier Sub-Saharan regions. Our gemologists ensure every stone meets the highest standards for clarity and quality, delivered strictly under Kimberly Process protocols for our global clientele.",
      icon: "💎",
    },
    {
      title: "Critical Minerals",
      content:
        "Specializing in the strategic supply of Copper Cathodes and industrial minerals from DRC and Zambia. We provide a full-spectrum logistics service, ensuring seamless door-to-door delivery for refined production and mineral ores.",
      icon: "⚒️",
    },
  ];

  return (
    <Container>
      <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col justify-between w-full h-full bg-white dark:bg-trueGray-800/50 border border-gray-100 dark:border-white/5 px-10 rounded-3xl py-12 shadow-sm hover:shadow-xl hover:shadow-gold-500/5 transition-all duration-300 group"
          >
            <div>
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-800 dark:text-white mb-4">
                {item.title}
              </h3>
              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400 font-sans">
                {item.content}
              </p>
            </div>
            <div className="mt-8">
              <span className="text-sm font-bold text-gold-600 uppercase tracking-widest cursor-pointer hover:text-gold-500 transition-colors">
                Learn More &rarr;
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default Testimonials;
