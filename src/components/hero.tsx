"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./header";
import Navbar from "./navbar";
import { Button } from "@/components/ui/button";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate content
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      // Animate background image
      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 1.1,
        duration: 2.5,
        ease: "power3.out",
      });

      // Parallax effect on scroll
      gsap.to(imageRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Header />
      </div>

      {/* Background Image */}
      <div
        ref={imageRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/images/66c6873eb89c4fbac3e22cf9_Features20Image-p-1600.jpg')",
        }}
        aria-hidden="true"
      ></div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 text-white text-center px-4 sm:px-6 lg:px-8 max-w-3xl mt-16 md:mt-32"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in">
          Designs that Elevate Your Brand
        </h1>
        <p className="text-lg md:text-xl mb-8 animate-fade-in animation-delay-200">
          We focus on delivering impactful designs for designers, artists, and
          brands to elevate their visual communication.
        </p>
      </div>

      {/* Navigation Bar */}
      <div className="absolute bottom-5 left-0 w-full z-20">
        <Navbar />
      </div>
    </section>
  );
}