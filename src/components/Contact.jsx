import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-screen bg-gradient-to-br from-sky-600 to-blue-800 py-12 px-4 sm:px-6 flex flex-col items-center"
    >
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-white mb-8 border-b-4 border-sky-300 inline-block">
        Contact Us
      </h1>

      {/* Contact Box */}
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 max-w-3xl w-full text-center">
        {/* Address */}
        <div className="mb-6 flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
          <FaMapMarkerAlt className="text-sky-600 text-3xl" />
          <p className="text-gray-700 font-semibold">
            Plot No.- 3422 TNHB Colony, Villapuram Pudhunagar,
            <br />
            Madurai, Tamil Nadu, India - 625011.
          </p>
        </div>

        {/* Mobile Numbers */}
        <div className="mb-6 flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
          <FaPhoneAlt className="text-sky-600 text-2xl" />
          <div className="text-gray-700 font-semibold">
            <a
              href="tel:+919514370445"
              className="hover:text-sky-600 transition-colors duration-300"
              aria-label="Call +91 95143 70445"
            >
              +91 95143 70445
            </a>{" "}
            |
            <a
              href="tel:+918072293384"
              className="hover:text-sky-600 transition-colors duration-300"
              aria-label="Call +91 80722 93384"
            >
              +91 80722 93384
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="mb-6 flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
          <FaEnvelope className="text-sky-600 text-2xl" />
          <div className="text-gray-700 font-semibold">
            <a
              href="mailto:mansoor@spheroiddraft.com"
              className="hover:text-sky-600 transition-colors duration-300 block"
              aria-label="Email mansoor@spheroiddraft.com"
            >
              mansoor@spheroiddraft.com
            </a>
            <a
              href="mailto:halik@spheroiddraft.com"
              className="hover:text-sky-600 transition-colors duration-300 block"
              aria-label="Email halik@spheroiddraft.com"
            >
              halik@spheroiddraft.com
            </a>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-6">
          <iframe
            title="Google Maps Location"
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.1234567890123!2d78.12345678901234!3d9.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDcnMjQuNCJOIDc4wrAwNyczNy42IkU!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
