import React, { useEffect, useRef } from "react";

const Fixed: React.FC = () => {
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
    <div className="hero w-full h-[500px] mt-[100px]" ref={containerRef}>
      {/* Your content goes here */}
      <p>hello</p>
    </div>
  );
};

export default Fixed;
