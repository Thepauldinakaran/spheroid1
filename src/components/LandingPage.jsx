import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const SpheroidTextAnimation = () => {
  const textRefs = useRef([]);
  const boxRef = useRef(null);
  const paragraphRef = useRef(null);
  const [boxSize, setBoxSize] = useState({ width: 500, height: 200 });

  useEffect(() => {
    gsap.fromTo(
      textRefs.current,
      {
        strokeDasharray: "300",
        strokeDashoffset: "300",
        fill: "transparent",
        filter: "brightness(1.2)",
      },
      {
        strokeDashoffset: "0",
        fill: "#f0f9ff",
        duration: 2,
        stagger: 0.3,
        ease: "power2.out",
        filter: "drop-shadow(0 0 12px #7dd3fc)",
      }
    );

    gsap.fromTo(
      boxRef.current,
      { strokeDasharray: "1600", strokeDashoffset: "1600" },
      {
        strokeDashoffset: "0",
        duration: 2,
        ease: "power2.out",
        filter: "drop-shadow(0 0 15px #7dd3fc)",
      }
    );

    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 20, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, delay: 2, duration: 1, ease: "power2.out" }
    );

    const contentWidth = paragraphRef.current.scrollWidth;
    const contentHeight = paragraphRef.current.scrollHeight;
    setBoxSize({ width: contentWidth + 40, height: contentHeight + 40 });
  }, []);

  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center bg-gradient-to-br from-sky-600 to-blue-800 text-white  py-0 px-2"
    >
      <svg
        viewBox="0 0 500 150"
        className="w-full max-w-4xl mt-[50%] 2xl:py-0 2xl:mt-[15%]"
      >
        <text
          ref={(el) => (textRefs.current[0] = el)}
          x="50%"
          y="30%"
          textAnchor="middle"
          fontSize="60"
          stroke="#f0f9ff"
          strokeWidth="1.2"
          fill="#f0f9ff"
        >
          SPHEROID
        </text>
        <text
          ref={(el) => (textRefs.current[1] = el)}
          x="50%"
          y="60%"
          textAnchor="middle"
          fontSize="60"
          stroke="#f0f9ff"
          strokeWidth="1.2"
          fill="#f0f9ff"
        >
          DRAFT
        </text>
        <text
          ref={(el) => (textRefs.current[2] = el)}
          x="50%"
          y="90%"
          textAnchor="middle"
          fontSize="60"
          stroke="#f0f9ff"
          strokeWidth="1.2"
          fill="#f0f9ff"
        >
          TECHNOLOGIES
        </text>
      </svg>

      <svg
        className="w-full max-w-5xl mt-2"
        viewBox={`0 0 ${boxSize.width} ${boxSize.height}`}
      >
        <rect
          ref={boxRef}
          x="10"
          y="10"
          width={boxSize.width - 20}
          height={boxSize.height - 20}
          stroke="#f0f9ff"
          strokeWidth="1"
          fill="none"
        />
        <foreignObject
          x="20"
          y="20"
          width={boxSize.width - 40}
          height={boxSize.height - 40}
        >
          <div
            className="p-5 text-white text-center leading-relaxed text-lg font-light tracking-wide"
            ref={paragraphRef}
          >
            Spheroid Draft Technologies is a pioneering geospatial solutions
            company, specializing in cutting-edge technologies for comprehensive
            mapping and geospatial analysis. Our expertise lies in harnessing
            the power of geospatial data through innovative methods, including
            photogrammetry, Lidar, and GIS.
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};

export default SpheroidTextAnimation;
