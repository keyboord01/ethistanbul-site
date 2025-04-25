"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import TextLogo from "@/assets/text-logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.7) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Schedule", href: "#" },
    { label: "HackerKit", href: "#" },
    { label: "Judges & Speakers", href: "#" },
    { label: "Partners", href: "#" },
    { label: "Venue", href: "#" },
    { label: "Prizes", href: "#" },
    { label: "FAQ", href: "#" },
  ];

  return (
    <>
      <nav
        className={`w-full flex justify-center px-4 transition-all duration-700 ease-in-out z-40 ${
          isScrolled
            ? "fixed top-0 py-2 transform translate-y-0"
            : "absolute bottom-6 transform translate-y-0"
        }`}
      >
        <div className="container max-w-7xl bg-white text-black rounded-full px-6 sm:px-8 md:px-12 py-3 flex items-center justify-between shadow-lg">
          <div className="flex items-center">
            <Image
              src={TextLogo}
              alt="Logo"
              width={120}
              height={40}
              className="w-24 sm:w-32 md:w-36 h-auto"
            />
          </div>

          <div className="hidden lg:flex space-x-3 xl:space-x-6 items-center">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm xl:text-base hover:text-purple-600 font-medium transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            className="lg:hidden p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-white text-black z-30 lg:hidden transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen
            ? "transform translate-y-0"
            : "transform translate-y-full"
        }`}
      >
        <div className="container mx-auto py-20 px-6">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-xl font-medium border-b border-gray-100 pb-3 hover:text-purple-600 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
