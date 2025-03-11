import React from "react";
import { motion } from "framer-motion";

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
];

const LogoSlider = () => {
  return (
    <div className="bg-gradient-to-br from-sky-600 to-blue-800 py-16 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white mb-12 border-b-4 border-sky-300 text-center">
        Our Partners
      </h1>

      <div className="overflow-hidden w-full max-w-5xl flex justify-center">
        <motion.div
          className="flex space-x-10 items-center"
          animate={{
            x: ["100%", "-100%"], // Move logos from right to left
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...logos].map((logo, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 flex justify-center items-center"
              initial={{ opacity: 0, x: 50 }} // Start slightly off-screen to the right
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: (index % logos.length) * 0.3, // Stagger effect
              }}
            >
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-20 md:h-24"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoSlider;
