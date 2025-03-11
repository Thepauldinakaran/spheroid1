import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll"; // Import Link from react-scroll

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-cyan-600 to-sky-400 text-white p-5 fixed w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold tracking-widest text-white">
          Spheroid
        </h1>

        {/* Hamburger Menu */}
        <div className="md:hidden cursor-pointer z-50" onClick={toggleMenu}>
          <motion.div
            className="w-7 h-1 bg-white mb-1 rounded"
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
          />
          <motion.div
            className="w-7 h-1 bg-white mb-1 rounded"
            animate={{ opacity: isOpen ? 0 : 1 }}
          />
          <motion.div
            className="w-7 h-1 bg-white rounded"
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          {["Home", "About", "Service", "Contact"].map((item, index) => (
            <li
              key={index}
              className="hover:text-cyan-200 transition font-medium"
            >
              <Link
                to={item.toLowerCase()} // ID of the section
                smooth={true} // Enables smooth scrolling
                duration={600} // Duration of scroll in ms
                spy={true} // Highlights the active link
                offset={-80} // Adjust for fixed navbar
                className="cursor-pointer"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Drop-down Menu */}
      <motion.div
        initial={{ y: "-2%", opacity: 0 }}
        animate={{ y: isOpen ? 0 : "-2%", opacity: isOpen ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        className="absolute left-0 w-full bg-gradient-to-r from-sky-500 to-cyan-700 text-white mt-4 p-8 shadow-lg md:hidden flex flex-col items-center space-y-8 rounded-b-lg"
      >
        {["Home", "About", "Service", "Contact"].map((item, index) => (
          <motion.div key={index} onClick={toggleMenu}>
            <Link
              to={item.toLowerCase()} // ID of the section
              smooth={true} // Enables smooth scrolling
              duration={600} // Duration of scroll in ms
              spy={true} // Highlights the active link
              offset={-80} // Adjust for fixed navbar
              className="text-xl hover:text-cyan-200 transition font-semibold cursor-pointer"
            >
              {item}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </nav>
  );
};

export default Navbar;
