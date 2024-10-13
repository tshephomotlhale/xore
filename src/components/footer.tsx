import React from "react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Container added here */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Left Side: Company Description */}
          <div className="col-span-2 space-y-4">
            {/* Logo */}
            <div className="text-2xl font-bold">
              <i className="bi bi-square-fill"></i>
            </div>

            {/* Company Description */}
            <p className="text-white max-w-md">
              We place great emphasis on providing designers, artists, and
              brands with designs that elevates their visual communication.
            </p>

            {/* Buttons */}
            <div className="flex space-x-4">
              <Button className="bg-white text-black">
                Get started <i className="bi bi-arrow-right ml-2 font-bold"></i>
              </Button>
              <Button variant="link" className="text-white">
                Our Portfolio
              </Button>
            </div>
          </div>

          {/* Navigation Sections */}
          <div>
            <h3 className="text-gray-400 font-semibold mb-4">EXPLORE</h3>
            <ul className="space-y-2 text-white">
              <li>Home</li>
              <li>Home 2</li>
              <li>Home 3</li>
              <li>Team</li>
              <li>Pricing</li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-400 font-semibold mb-4">MORE PAGES</h3>
            <ul className="space-y-2 text-white">
              <li>Work</li>
              <li>Work 2</li>
              <li>Work 3</li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-400 font-semibold mb-4">ABOUT</h3>
            <ul className="space-y-2 text-white">
              <li>About</li>
              <li>About 2</li>
              <li>About 3</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-400 font-semibold mb-4">OTHER</h3>
            <ul className="space-y-2 text-white">
              <li>Style Guide</li>
              <li>License</li>
              <li>Changelog</li>
            </ul>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">
            Copyright © Design & Developed by{" "}
            <span className="text-white">Mpho Motlhale</span> Powered by{" "}
            <span className="text-white">Next js 14</span>
          </p>
          <div className="flex space-x-5 text-gray-500 mt-4 md:mt-0">
            <i className="bi bi-youtube text-xl"></i>
            <i className="bi bi-instagram text-xl"></i>
            <i className="bi bi-tiktok text-xl"></i>
            <i className="bi bi-facebook text-xl"></i>
            <i className="bi bi-twitter-x text-xl"></i>
            <i className="bi bi-linkedin text-xl"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}
