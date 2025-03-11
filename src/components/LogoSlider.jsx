import React from "react";
import { motion } from "framer-motion";

// Sample logo images (Replace with actual logo paths)
const logos = [
  "/images/logo1.png",
  "/images/logo2.png",
  "/images/logo3.png",
  "/images/logo4.png",
  "/images/logo5.png",
  "/images/logo6.png",
  "/images/logo7.png",
  "/images/logo8.png",
  "/images/logo9.png",
  "/images/logo10.png",
];

const LogoSlider = () => {
  return (
    <div className="bg-gradient-to-br from-sky-600 to-blue-800 py-10">
      <h1 className="text-4xl font-bold text-center text-white mb-8 border-b-4 border-sky-300 inline-block">
        Our Partners
      </h1>

      {/* Scrolling Container */}
      <div className="overflow-hidden whitespace-nowrap relative">
        <motion.div
          className="flex space-x-10"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {/* Duplicating logos for infinite effect */}
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-20 mx-4"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoSlider;
