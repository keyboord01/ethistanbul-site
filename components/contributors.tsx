"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import mentors from "@/lib/contributors/mentors";
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
  return (
    <section
      id="contributors"
      className="min-h-screen pt-16 pb-20 md:pt-24 md:pb-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div>
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 md:mb-10 text-[#1a1a2e]">
            Contributors
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-4 mb-8 md:mb-12">
          {contributorTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-4 sm:px-8 py-2 text-sm sm:text-base rounded-full border transition-colors duration-300 ${
                activeType === type
                  ? "bg-purple-200 border-purple-300"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="flex flex-col items-start sm:items-end justify-between mb-4 md:mb-6 gap-2">
          <div className="flex items-center">
            <span className="text-base sm:text-lg">
              Do you want to be mentors?
            </span>
          </div>
          <a
            href="#"
            className="flex items-center text-purple-600 font-medium"
          >
            Form
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5 ml-1"
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
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6"
          >
            {mentors
              .filter((mentors) => mentors.type === activeType)
              .map((mentors, index) => (
                <ContributorCard
                  key={index}
                  contributor={mentors}
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
  const [isTouched, setIsTouched] = useState(false);

  const isActive = isHovered || isTouched;

  return (
    <div
      className="rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsTouched(!isTouched)}
    >
      <div
        className={`relative h-40 sm:h-48 md:h-56 lg:h-64 w-full overflow-hidden transition-all duration-500 ${
          isActive ? "scale-105" : ""
        }`}
      >
        <Image
          src={contributor.image}
          alt={contributor.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-cover -translate-y-[2px]"
          loading="lazy"
        />

        <motion.div
          className={`absolute bottom-0 left-0 border-black right-0 bg-white bg-opacity-90 overflow-hidden ${
            isActive ? "border-t" : "border"
          }`}
          initial={{
            height: "auto",
            borderRadius: "9999px",
            bottom: "8px",
            left: "8px",
            right: "8px",
            padding: "4px 0",
          }}
          animate={{
            height: isActive ? "auto" : "auto",
            borderRadius: isActive ? "16px" : "50px",
            bottom: isActive ? "-4px" : "8px",
            left: isActive ? 0 : "8px",
            right: isActive ? 0 : "8px",
            padding: isActive ? "12px 0" : "4px 0",
          }}
        >
          <div className="text-center px-3">
            <div className="text-xs sm:text-sm md:text-base text-black font-bold mb-1">
              {contributor.name}
            </div>

            <motion.div
              className="text-xs sm:text-sm text-black"
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isActive ? 1 : 0,
                height: isActive ? "auto" : 0,
              }}
              transition={{ duration: 0.3, delay: isActive ? 0.1 : 0 }}
            >
              {contributor.company}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Contributors;
