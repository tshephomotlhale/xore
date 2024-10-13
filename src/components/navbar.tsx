import React from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="p-3 bg-black text-white bg-opacity-75 w-[90%] mx-auto rounded-lg shadow-lg backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: Logo and Icon Buttons */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <i className="bi bi-square-fill text-2xl"></i>
          <div className="h-8 border-l border-white"></div>

          {/* Icon Buttons */}
          <i className="bi bi-globe text-xs hover:bg-red-600 transition-colors p-2 rounded-md"></i>
          <i className="bi bi-tablet text-xs hover:bg-red-600 transition-colors p-2 rounded-md"></i>
          <i className="bi bi-box text-xs hover:bg-red-600 transition-colors p-2 rounded-md"></i>
          <i className="bi bi-megaphone text-xs hover:bg-red-600 transition-colors p-2 rounded-md"></i>
        </div>

        {/* Right side: Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-sm hover:text-gray-400 transition-colors">
            Home
          </a>
          <a href="#" className="text-sm hover:text-gray-400 transition-colors">
            About
          </a>
          <a href="#" className="text-sm hover:text-gray-400 transition-colors">
            Portfolio
          </a>
          <a href="#" className="text-sm hover:text-gray-400 transition-colors">
            Blog
          </a>
          <Button className="bg-red-500 text-white hover:bg-red-600 transition-colors px-4 py-2 rounded-lg">
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu (optional) */}
        {/* If you'd like to show a mobile menu for small screens, uncomment the code below */}
        <div className="md:hidden">
          <button className="bg-red-500 text-white hover:bg-red-600 transition-all transform hover:scale-105 px-4 py-2 rounded-lg shadow-lg">
            <i className="bi bi-telephone text-xl"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
