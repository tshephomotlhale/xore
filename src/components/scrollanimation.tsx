import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AutoScrollingText: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const textElement = textRef.current;

    if (!scrollContainer || !textElement) return;

    const startAnimation = () => {
      const scrollWidth = textElement.offsetWidth / 2; // Half width for duplicated content

      gsap.to(textElement, {
        x: -scrollWidth,
        duration: scrollWidth / 50, // Adjust speed
        ease: "linear",
        repeat: -1, // Infinite loop
        onRepeat: () => { gsap.set(textElement, { x: 0 }); }, // Reset position after each loop
      });
    };

    // Initialize animation and handle resizing
    startAnimation();
    window.addEventListener("resize", startAnimation);

    // Clean up on unmount
    return () => {
      window.removeEventListener("resize", startAnimation);
      gsap.killTweensOf(textElement);
    };
  }, []);

  const scrollingText = (
    <>
      <p className="px-3 text-sm text-slate-200">AVAILABLE FOR WORK</p>
      <span className="text-lg text-red-500">•</span>
    </>
  );

  return (
    <div ref={scrollRef} className="w-[250px] overflow-hidden">
      <div
        ref={textRef}
        className="flex items-center whitespace-nowrap"
        style={{ willChange: "transform" }}
      >
        {Array(3)
          .fill(scrollingText)
          .map((item, idx) => (
            <React.Fragment key={idx}>{item}</React.Fragment>
          ))}
        {/* Duplicate content for seamless loop */}
        {Array(3)
          .fill(scrollingText)
          .map((item, idx) => (
            <React.Fragment key={idx + 3}>{item}</React.Fragment>
          ))}
      </div>
    </div>
  );
};

export default AutoScrollingText;
