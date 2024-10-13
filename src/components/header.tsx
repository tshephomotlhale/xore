"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`p-4 transition-colors duration-300 ${
        isMenuOpen ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side (Logo and Navigation) */}
        <div className="flex items-center space-x-4">
          <i
            className={`bi bi-square-fill ${
              isMenuOpen ? "text-white" : "text-black"
            } text-2xl`}
          ></i>

          {/* Navigation Menu */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="flex space-x-3">
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={`${
                    isMenuOpen ? "text-white" : "text-black"
                  } bg-transparent text-base`}
                >
                  Home
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4 bg-white shadow-md">
                    <ListItem href="/" title="Submenu 1">
                      Description 1
                    </ListItem>
                    <ListItem href="/" title="Submenu 2">
                      Description 2
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent text-base",
                      isMenuOpen ? "text-white" : "text-black"
                    )}
                  >
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={`${
                    isMenuOpen ? "text-white" : "text-black"
                  } bg-transparent text-base`}
                >
                  Works
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4 bg-white shadow-md">
                    <ListItem href="/" title="Project 1">
                      Details about project 1
                    </ListItem>
                    <ListItem href="/" title="Project 2">
                      Details about project 2
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={`${
                    isMenuOpen ? "text-white" : "text-black"
                  } bg-transparent text-base`}
                >
                  Other
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4 bg-white shadow-md">
                    <ListItem href="/" title="Option 1">
                      Description 1
                    </ListItem>
                    <ListItem href="/" title="Option 2">
                      Description 2
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Side (Other Links, Button, and Hamburger Menu) */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className={`${
                isMenuOpen ? "text-white" : "text-black"
              } hover:underline text-base`}
            >
              What's New
            </Link>
            <Link
              href="/"
              className={`${
                isMenuOpen ? "text-white" : "text-black"
              } hover:underline text-base`}
            >
              Pricing
            </Link>
            <Button className="bg-white text-black hover:bg-gray-100 text-base">
              Get Started
              <i className="bi bi-arrow-right ml-2 font-bold"></i>
            </Button>
          </div>
          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden text-black"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
          >
            <Menu
              size={24}
              className={isMenuOpen ? "text-white" : "text-black"}
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col space-y-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white bg-transparent w-full justify-start text-base">
                  Home
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-full gap-3 p-4 bg-white shadow-md">
                    <ListItem href="/" title="Submenu 1">
                      Description 1
                    </ListItem>
                    <ListItem href="/" title="Submenu 2">
                      Description 2
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent text-white w-full justify-start text-base"
                    )}
                  >
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white bg-transparent w-full justify-start text-base">
                  Works
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-full gap-3 p-4 bg-white shadow-md">
                    <ListItem href="/" title="Project 1">
                      Details about project 1
                    </ListItem>
                    <ListItem href="/" title="Project 2">
                      Details about project 2
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white bg-transparent w-full justify-start text-base">
                  Other
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-full gap-3 p-4 bg-white shadow-md">
                    <ListItem href="/" title="Option 1">
                      Description 1
                    </ListItem>
                    <ListItem href="/" title="Option 2">
                      Description 2
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="link" className="text-white text-base">
                  What's New
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="link" className="text-white text-base">
                  Pricing
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button className="bg-white text-black hover:bg-gray-100 w-full justify-start text-base">
                  Get Started
                  <i className="bi bi-arrow-right ml-2 font-bold"></i>
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 p-2 no-underline transition-colors hover:bg-gray-100 rounded-md text-base",
            className
          )}
          {...props}
        >
          <div className="font-medium text-black">{title}</div>
          <p className="text-gray-500">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
