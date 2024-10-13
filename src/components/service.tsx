'use client';

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import AutoScrollingText from "./scrollanimation";

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <section className="bg-[#0f0f0f] py-10">
      {/* Container for responsiveness */}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20 px-4 lg:px-0">
        {/* Upper row */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 mb-8">
          <div className="flex space-x-3 mb-4 max-w-4xl mx-auto">
            <AutoScrollingText />
          </div>
          <h1 className="text-3xl md:text-4xl font-light text-start text-white leading-snug max-w-4xl mx-auto">
            We blend{" "}
            <span className="bg-[#FF7F50] text-black px-2">
              creativity with purpose
            </span>
            , creating visuals that are as functional as they are beautiful,
            ensuring that they contribute to the overall success of the brand.
          </h1>
        </div>

        {/* Lower row - Card 1 */}
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <Card className="h-[380px] md:h-[420px] bg-[#121212] border border-gray-700 rounded-xl flex flex-col justify-between transition-transform duration-300 ease-in-out transform hover:scale-105 relative overflow-hidden">
            <CardContent className="p-6 md:p-8 flex flex-col flex-grow">
              <div className="my-auto justify-center">
                <img
                  src="/assets/images/66c8e1cf22a613a1149d5627_Vector.svg"
                  alt="Branding Icon"
                  className="mx-auto w-[100px] h-[100px] md:w-[120px] md:h-[120px]"
                />
              </div>

              {/* Title and Description at the bottom */}
              <div className="mt-auto">
                <CardTitle className="text-xl md:text-2xl font-semibold text-white">
                  Branding
                </CardTitle>
                <CardDescription className="text-md mt-2 text-white">
                  Ensure your data is always safe and secure.
                </CardDescription>
              </div>
            </CardContent>

            {/* Hover Image */}
            <div
              className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
                hoveredCard === 1 ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src="/assets/images/image1.png"
                alt="Branding Hover"
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </Card>
        </div>

        {/* Lower row - Card 2 */}
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          <Card className="h-[380px] md:h-[420px] bg-[#121212] border border-gray-700 rounded-xl flex flex-col justify-between transition-transform duration-300 ease-in-out transform hover:scale-105 relative overflow-hidden">
            <CardContent className="p-6 md:p-8 flex flex-col flex-grow">
              <div className="my-auto justify-center">
                <img
                  src="/assets/images/66c8e1cfc61bfd4fcae4da74_Vector-1.svg"
                  alt="Web Design Icon"
                  className="mx-auto w-[100px] h-[100px] md:w-[120px] md:h-[120px]"
                />
              </div>

              {/* Title and Description at the bottom */}
              <div className="mt-auto">
                <CardTitle className="text-xl md:text-2xl font-semibold text-white">
                  Web Design
                </CardTitle>
                <CardDescription className="text-md mt-2 text-white">
                  Ensure your data is always safe and secure.
                </CardDescription>
              </div>
            </CardContent>

            {/* Hover Image */}
            <div
              className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
                hoveredCard === 2 ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src="/assets/images/image.png"
                alt="Web Design Hover"
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </Card>
        </div>

        {/* Lower row - Card 3 */}
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        >
          <Card className="h-[380px] md:h-[420px] bg-[#121212] border border-gray-700 rounded-xl flex flex-col justify-between transition-transform duration-300 ease-in-out transform hover:scale-105 relative overflow-hidden">
            <CardContent className="p-6 md:p-8 flex flex-col flex-grow">
              <div className="my-auto justify-center">
                <img
                  src="/assets/images/66c8e1d0d788bbb7ce727d69_Vector-2.svg"
                  alt="Development Icon"
                  className="mx-auto w-[100px] h-[100px] md:w-[120px] md:h-[120px]"
                />
              </div>

              {/* Title and Description at the bottom */}
              <div className="mt-auto">
                <CardTitle className="text-xl md:text-2xl font-semibold text-white">
                  Development
                </CardTitle>
                <CardDescription className="text-md mt-2 text-white">
                  Ensure your data is always safe and secure.
                </CardDescription>
              </div>
            </CardContent>

            {/* Hover Image */}
            <div
              className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
                hoveredCard === 3 ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src="/assets/images/image2.png"
                alt="Development Hover"
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
