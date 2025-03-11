import React from "react";

const AboutPage = () => {
  return (
    <div
      id="about"
      className="min-h-screen bg-gradient-to-br from-sky-600 to-blue-800 text-white py-12 px-4 sm:px-6 flex flex-col items-center"
    >
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 border-b-4 border-sky-300 inline-block">
        About Spheroid Draft Technologies
      </h1>

      {/* Content Container */}
      <div className="max-w-4xl w-full bg-white text-gray-800 p-6 sm:p-8 rounded-lg shadow-2xl">
        {/* Introduction */}
        <p className="text-lg sm:text-xl leading-relaxed">
          Since 2018,{" "}
          <span className="font-semibold text-sky-600">
            Spheroid Draft Technologies
          </span>{" "}
          has been on a mission to be the leading GIS and Photogrammetry
          services provider. Our workspace is filled with energy, positivity,
          and camaraderie that makes working here an absolute delight.
        </p>

        {/* Team Section */}
        <div className="mt-8 p-6 bg-gradient-to-r from-sky-100 to-blue-200 rounded-lg shadow-md">
          <p className="text-gray-700 text-lg">
            Our team is comprised of dynamic and passionate professionals who
            are bubbling over with innovation and creativity.
          </p>
        </div>

        {/* Appreciation Section */}
        <p className="mt-8 text-lg sm:text-xl leading-relaxed">
          We understand that appreciation should be both intrinsic and
          extrinsic. That's why we ensure our team is recognized and compensated
          at par with industry standards.
        </p>

        {/* Culture & Principles Section */}
        <h2 className="text-2xl sm:text-3xl font-bold mt-12 text-sky-700">
          Culture & Principles
        </h2>

        <div className="mt-6 p-6 bg-gradient-to-r from-blue-100 to-sky-200 rounded-lg shadow-md">
          <p className="text-gray-700 text-lg">
            Spheroid Draft Technologies places a strong emphasis on maintaining
            sound policies for HR and project management.
          </p>
        </div>

        <p className="mt-8 text-lg sm:text-xl leading-relaxed">
          Our project managers oversee every aspect of our projects, ensuring
          that they are completed on time and within budget.
        </p>

        <p className="mt-8 text-lg sm:text-xl leading-relaxed">
          We prioritize{" "}
          <strong>attention to detail, accuracy, and quality</strong> in every
          project.
        </p>

        {/* Commitment Section */}
        <div className="mt-8 p-6 bg-gradient-to-r from-sky-100 to-blue-200 rounded-lg shadow-md">
          <p className="text-gray-700 text-lg font-semibold">
            Our commitment to excellence drives us to deliver outstanding
            results through{" "}
            <strong>
              rigorous project management and meticulous execution
            </strong>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
