import React, { useEffect, useRef } from "react";

const Features: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset || document.documentElement.scrollTop;
      if (containerRef.current) {
        containerRef.current.style.backgroundPositionY = -scrolled + "px";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-[400px] relative bg-[url('/bgdeb.jpeg')] bg-cover">
      <div className="absolute h-full w-full top-0 bg-gradient-to-r to-off from-[#eddaa7] opacity-40"></div>
      <div className="absolute top-0 bg-[rgba(0,0,0,0.3)] h-full w-full">
        <p>Key Features</p>
        <div>
          <div className="flex">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
