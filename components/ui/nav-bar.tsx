"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import TextLogo from "@/assets/text-logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.7);

      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const style = window.getComputedStyle(section);
        const paddingTop = parseFloat(style.paddingTop);

        const top = section.offsetTop - paddingTop;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute("id");

        if (scrollPosition >= top && scrollPosition <= bottom) {
          setActiveSection(`#${id}`);
        }
      });

      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        const lastSection = sections[sections.length - 1];
        setActiveSection(`#${lastSection.getAttribute("id")}`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Schedule", href: "#schedule" },
    { label: "HackerKit", href: "#hacker-kit" },
    { label: "Judges & Speakers", href: "#judges" },
    { label: "Partners", href: "#partners" },
    { label: "Venue", href: "#venue" },
    { label: "Prizes", href: "#prizes" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <nav
        className={`w-full flex justify-center px-4 transition-all duration-700 ease-in-out z-40 ${
          isScrolled ? "fixed top-0 py-2" : "absolute bottom-6"
        }`}
      >
        <div className="container max-w-7xl bg-white text-black rounded-full px-6 sm:px-8 md:px-12 py-3 flex items-center justify-between shadow-lg">
          <Image
            src={TextLogo}
            alt="Logo"
            width={120}
            height={40}
            className="w-24 sm:w-32 md:w-36 h-auto"
          />
          <div className="hidden lg:flex space-x-3 xl:space-x-6 items-center">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`px-4 py-2 rounded-full transition-all duration-300 hover:cursor-pointer ${
                  activeSection === link.href
                    ? "bg-[#D1BAFF] shadow-lg"
                    : "hover:bg-purple-100"
                }`}
              >
                {link.label}
              </button>
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
