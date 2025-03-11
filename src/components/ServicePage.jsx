import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    name: "Aerial Triangulation",
    image: "/images/triangulation.jpg",
    description:
      "We  enhance  mapping  accuracy  by  aligning aerial images with ground control points, ensuring precise spatial data for your projects.",
  },
  {
    id: 2,
    name: "Planimetric Mapping",
    image: "/images/planimetric.jpg",
    description:
      "Our  expertise  in  extracting  2D features like roads, buildings, and utilities helps in creating detailed and reliable base maps.",
  },
  {
    id: 3,
    name: "Digital Terrain Modeling (DTM)",
    image: "/images/dtm.jpg",
    description:
      "We  generate  high- resolution terrain models from DSM data, providing crucial insights for engineering and planning.",
  },
  {
    id: 4,
    name: "3D City Modeling",
    image: "/images/citymodeling.jpg",
    description:
      "We build realistic and georeferenced 3D city models,supporting urban planning,infrastructure development,and visualization.",
  },
  {
    id: 5,
    name: "Topographic Survey",
    image: "/images/topographic.jpg",
    description:
      "Our advanced surveying techniques capture accurate land contours and features, delivering precise topographic maps for various applications.",
  },
  {
    id: 6,
    name: "GIS Processing",
    image: "/images/gis.jpg",
    description:
      "We offer spatial data management and analysis,empowering businesses with interactive maps and intelligent decision-making tools.",
  },
  {
    id: 7,
    name: "LiDAR Mapping",
    image: "/images/lidar.jpg",
    description:
      "Our LiDAR technology provides high-density 3D data,enabling accurate modeling of terrain,structures,and vegetation.",
  },
  {
    id: 8,
    name: "Mobile Mapping",
    image: "/images/mobilemapping.jpg",
    description:
      "We collect real-time geospatial data using vehicle-mounted sensors, delivering high-precision road and urban mapping solutions.",
  },
];

const ServicePage = () => {
  return (
    <div
      id="service"
      className="min-h-screen bg-gradient-to-br from-sky-600 to-blue-800 py-10 px-6 flex flex-col items-center"
    >
      <h1 className="text-4xl font-bold text-center text-white mb-8 border-b-4 border-sky-300 inline-block">
        Our Services
      </h1>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="bg-white rounded-lg border-2 border-sky-300 shadow-lg overflow-hidden transform hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.05 }}
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-48 object-cover border-b-2 border-sky-300"
            />

            {/* Service Name & Description Inside Card */}
            <div className="p-4">
              <h2 className="text-xl font-bold text-sky-800">{service.name}</h2>
              <p className="text-gray-600 text-sm mt-2">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
