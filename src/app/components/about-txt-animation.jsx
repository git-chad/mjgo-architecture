import React, { useEffect, useRef } from "react";
import { Montserrat } from "next/font/google";
import { useSpring, animated, config } from "react-spring";
const montserrat = Montserrat({ subsets: ["latin"] });

const WaveText = () => {
  const svgRef = useRef(null);
  const [{ offset }, set] = useSpring(() => ({
    offset: 30,
    config: {
      tension: 180,
      friction: 36,
    },
  }));
  const AnimatedTextPath = animated('textPath');

  const interpolatedOffset = offset.to((o) => `${o}%`);

  useEffect(() => {
    const handleMouseMovement = (e) => {
      const svgWidth = e.currentTarget.clientWidth;
      const ratio = e.clientX / svgWidth;
      set({ offset: (0.5 - ratio) * 50 }); // Remove the % here
    };

    const svgElement = svgRef.current;
    if (svgElement) {
      svgElement.addEventListener("mousemove", handleMouseMovement);
    }

    return () => {
      if (svgElement) {
        svgElement.removeEventListener("mousemove", handleMouseMovement);
      }
    };
  }, [set]);

  return (
    <svg
      ref={svgRef}
      id="svgwave"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1920 1080"
      style={{ enableBackground: "new 0 0 1920 1080" }}
      xmlSpace="preserve"
      className={`${montserrat.className} w-screen h-auto overflow-visible text-9xl font-black`}
    >
      <path
        d="M0.399,467.117c125.561-51.875,251.752-103.803,383.797-137.018c132.351-33.292,272.144-47.744,407.383-23.936
        c126.521,22.273,239.503,82.986,352.795,140.481c54.452,27.634,109.514,54.365,166.933,75.333
        c60.087,21.943,122.387,37.76,185.561,47.729c124.85,19.703,253.506,16.888,377.187-9.392c15.536-3.301,30.98-7.004,46.343-11.034
        c1.866-0.49,1.075-3.384-0.798-2.893c-125.224,32.85-256.574,41.087-385.052,25.563c-64.647-7.811-128.618-21.704-190.547-41.862
        c-60.224-19.604-117.837-45.861-174.435-74.109C1058.608,400.603,949.339,338.25,827.35,310.337
        c-129.539-29.64-265.424-21.872-394.644,5.435C299.441,343.934,171.995,393.394,46.335,444.96
        c-15.588,6.397-31.161,12.83-46.734,19.264C-2.158,464.951-1.387,467.855,0.399,467.117L0.399,467.117z"
        id="wavepath"
        className="fill-transparent"
      />

      <text textAnchor="middle" className="fill-[#f3f3f3] opacity-50">
        <AnimatedTextPath
          id="my-text"
          href="#wavepath"
          startOffset={interpolatedOffset}
        >
          TE AMO CULOSUCIO
        </AnimatedTextPath>
      </text>
    </svg>
  );
};

export default WaveText;