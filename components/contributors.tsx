"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Abdullah from "@/assets/contributors/abdullah.png";

type ContributorType = "Judges" | "Speakers" | "Mentors";

interface Contributor {
  name: string;
  company: string;
  image: string | StaticImageData;
  type: ContributorType;
}

const Contributors = () => {
  const [activeType, setActiveType] = useState<ContributorType>("Mentors");

  const contributorTypes: ContributorType[] = ["Judges", "Speakers", "Mentors"];

  const contributors: Contributor[] = [
    {
      name: "Abdullah Eryuzlu",
      company: "UNION",
      image: Abdullah,
      type: "Mentors",
    },
    {
      name: "PhD Student at EPFL",
      company: "UNION",
      image: Abdullah,
      type: "Mentors",
    },
    {
      name: "Adnan Deniz Corlu",
      company: "UNION",
      image: Abdullah,
      type: "Mentors",
    },
    {
      name: "A. Ramazan Agirtas",
      company: "UNION",
      image: Abdullah,
      type: "Judges",
    },
    {
      name: "Alican Abgik",
      company: "UNION",
      image: Abdullah,
      type: "Speakers",
    },
    {
      name: "Abdullah Eryuzlu",
      company: "UNION",
      image: Abdullah,
      type: "Mentors",
    },
    {
      name: "PhD Student at EPFL",
      company: "UNION",
      image: Abdullah,
      type: "Mentors",
    },
    {
      name: "Adnan Deniz Corlu",
      company: "UNION",
      image: Abdullah,
      type: "Mentors",
    },
    {
      name: "A. Ramazan Agirtas",
      company: "UNION",
      image: Abdullah,
      type: "Judges",
    },
    {
      name: "Alican Abgik",
      company: "UNION",
      image: Abdullah,
      type: "Speakers",
    },
    {
      name: "Abdullah Eryuzlu",
      company: "UNION",
      image: Abdullah,
      type: "Mentors",
    },
    {
      name: "PhD Student at EPFL",
      company: "UNION",
      image: Abdullah,
      type: "Mentors",
    },
    {
      name: "Adnan Deniz Corlu",
      company: "UNION",
      image: Abdullah,
      type: "Mentors",
    },
    {
      name: "A. Ramazan Agirtas",
      company: "UNION",
      image: Abdullah,
      type: "Judges",
    },
    {
      name: "Alican Abgik",
      company: "UNION",
      image: Abdullah,
      type: "Speakers",
    },
    {
      name: "A. Ramazan Agirtas",
      company: "UNION",
      image: Abdullah,
      type: "Judges",
    },
    {
      name: "Alican Abgik",
      company: "UNION",
      image: Abdullah,
      type: "Speakers",
    },
    {
      name: "A. Ramazan Agirtas",
      company: "UNION",
      image: Abdullah,
      type: "Judges",
    },
    {
      name: "Alican Abgik",
      company: "UNION",
      image: Abdullah,
      type: "Speakers",
    },
    {
      name: "A. Ramazan Agirtas",
      company: "UNION",
      image: Abdullah,
      type: "Judges",
    },
    {
      name: "Alican Abgik",
      company: "UNION",
      image: Abdullah,
      type: "Speakers",
    },
    {
      name: "A. Ramazan Agirtas",
      company: "UNION",
      image: Abdullah,
      type: "Judges",
    },
    {
      name: "Alican Abgik",
      company: "UNION",
      image: Abdullah,
      type: "Speakers",
    },
  ];

  return (
    <section
      id="contributors"
      className="min-h-screen pt-24 pb-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div>
          <h2 className="text-8xl sm:text-9xl font-bold mb-10 text-[#1a1a2e]">
            Contributors
          </h2>
        </div>

        <div className="flex flex-wrap gap-4 mb-12">
          {contributorTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-8 py-2 rounded-full border transition-colors duration-300 ${
                activeType === type
                  ? "bg-purple-200 border-purple-300"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-end mb-12 gap-2">
          <div className="flex items-center">
            <span className="text-lg">Do you want to be mentors?</span>
          </div>
          <a
            href="#"
            className="flex items-center text-purple-600 font-medium"
          >
            Form
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeType}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {contributors
              .filter((contributor) => contributor.type === activeType)
              .map((contributor, index) => (
                <ContributorCard
                  key={index}
                  contributor={contributor}
                />
              ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const ContributorCard = ({ contributor }: { contributor: Contributor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="rounded-3xl overflow-hidden shadow-md cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={contributor.image}
          alt={contributor.name}
          fill
          className="object-cover"
        />
        <div className="absolute bottom-4 left-6 right-6 pb-1 bg-white border-1 border-black rounded-full bg-opacity-90 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={isHovered ? "company" : "name"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="text-black font-medium"
            >
              {isHovered ? contributor.company : contributor.name}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default Contributors;
