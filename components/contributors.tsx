"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import mentors from "@/lib/contributors/mentors";
import LiquidButton from "./ui/liquid-button";
import Arrow from "@/assets/ui/arrow.svg";

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
      className="min-h-screen pt-16 pb-20 md:pt-24 md:pb-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div>
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 md:mb-10 text-[#1a1a2e]">
            Contributors
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-4 mb-8 md:mb-12">
          {contributorTypes.map((type) => (
            <LiquidButton
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-4 sm:px-8 py-2 text-sm sm:text-base rounded-full border transition-colors duration-300 ${
                activeType === type
                  ? "!bg-purple-200 !border-purple-300"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
            >
              {type}
            </LiquidButton>
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

  return (
    <motion.div
      className="rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsTouched(!isTouched)}
      initial={{ scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 w-full overflow-hidden">
        <Image
          src={contributor.image}
          alt={contributor.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-cover -translate-y-[2px]"
          loading="lazy"
        />
        <div
          className={`absolute inset-0 bg-[#D1BAFF66] transition-color duration-300 ${
            isHovered ? "opacity-80" : "opacity-0"
          } `}
        />
        {isHovered && (
          <>
            <motion.div
              initial={{ opacity: 0, x: 10, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 10, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-2 right-2 sm:top-4 sm:right-4"
            >
              <Image
                src={Arrow}
                alt="Arrow"
                width={32}
                height={32}
                className="object-contain"
              />
            </motion.div>
          </>
        )}
        <div className="absolute bottom-2 sm:bottom-4 left-2 right-2 sm:left-4 sm:right-4 md:left-6 md:right-6 pb-1 bg-white border border-black rounded-full bg-opacity-90 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={isHovered || isTouched ? "company" : "name"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="text-xs sm:text-sm md:text-base text-black font-medium px-2 py-1"
            >
              {isHovered || isTouched ? contributor.company : contributor.name}{" "}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};
export default Contributors;
