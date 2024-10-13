"use client";
import AutoScrollingText from "./scrollanimation";

export default function WorkSection() {
  return (
    <section className="py-20">
      <div className="container">
        {/* Upper row */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 mb-8">
          <div className="flex space-x-3 mb-4 max-w-4xl mx-auto">
            <AutoScrollingText />
          </div>
          <h1 className="text-5xl md:text-4xl font-light text-start text-black leading-snug max-w-4xl mx-auto">
            Unlock new{" "}
            <span className="bg-[#FF7F50] text-white px-2">
              opportunities and drive innovation
            </span>
            , with our expert solutions. Whether you're looking to enhance your
            digital presence.
          </h1>
        </div>
      </div>
    </section>
  );
}
