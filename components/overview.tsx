"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ConferenceImage from "@/assets/conference_image.png";
import HackathonImage from "@/assets/hackathon_image.png";
import CountUp from "react-countup";

const Overview = () => {
  const [selectedSection, setSelectedSection] = useState("Conference");

  const techKeywords = [
    "Edge Proofs",
    "DeFi",
    "Crypto Consumer UX",
    "L2s",
    "Interoperability",
    "Public Goods",
    "Privacy & Security",
    "TEEs",
    "Data Availability",
    "Self Sovereign Identity",
    "DevTooling",
    "AI Agents",
    "Zero Knowledge Proofs",
  ];

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="pt-10 sm:pt-16 md:pt-20 overflow-hidden ">
      <div className="absolute bottom-12 right-6 z-20">
        <button className="bg-white text-gray-800 border-1 border-black hover:bg-gray-100 px-5 py-2 rounded-full font-medium text-sm">
          Interested in partnering?
        </button>
      </div>
      <div className="max-w-7xl container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-[110px] mb-4 font-bold">
            BUILD YOUR OWN <br />
            <span className="text-[#9F62FF]">{` "NEW ROME"`}</span> IN TECH
          </h2>
          <p className="text-sm sm:text-base max-w-2xl mx-auto">
            Lorem Ipsum has been the industrys standard dummy text ever since
            the 1500s.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-8 sm:mb-12 md:mb-16">
          <button
            className={`px-6 pb-2 pt-1 rounded-full transition-all text-base sm:text-lg md:text-xl lg:text-2xl w-full sm:w-auto border border-black ${
              selectedSection === "Conference"
                ? "bg-purple-500 text-white"
                : "bg-white text-gray-800 hover:bg-[#D1BAFF]"
            }`}
            onClick={() => setSelectedSection("Conference")}
          >
            Conference
          </button>
          <button
            className={`px-6 pb-2 pt-1 rounded-full transition-all text-base sm:text-lg md:text-xl lg:text-2xl w-full sm:w-auto border border-black ${
              selectedSection === "Hackathon"
                ? "bg-purple-500 text-white"
                : "bg-white text-gray-800 hover:bg-[#D1BAFF]"
            }`}
            onClick={() => setSelectedSection("Hackathon")}
          >
            Hackathon
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSection}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={contentVariants}
              className="rounded-2xl overflow-hidden h-full"
            >
              <Image
                src={
                  selectedSection === "Conference"
                    ? ConferenceImage
                    : HackathonImage
                }
                alt={selectedSection}
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSection}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={contentVariants}
              className="flex flex-col justify-start pt-2 md:pt-4"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl mb-3 md:mb-4">
                {selectedSection === "Conference"
                  ? "ETHistanbul is a conference connecting you with global talents, industry professionals, and web3 companies advancing technology."
                  : "ETHistanbul is a hackathon where you can turn your blockchain product ideas into reality alongside like-minded builders."}
              </h3>

              <div className="mb-4 sm:mb-6 text-lg sm:text-xl md:text-2xl lg:text-3xl">
                {selectedSection === "Conference" ? (
                  <p className="mb-4 sm:mb-6">Friday, September 5</p>
                ) : (
                  <p className="mb-4 sm:mb-6">
                    Saturday & Sunday, September 6-7
                  </p>
                )}
              </div>

              {selectedSection === "Conference" ? (
                <div className="grid grid-cols-3 text-sm sm:text-base md:text-lg lg:text-2xl gap-2 sm:gap-4 text-start">
                  <div>
                    <p>Attendees</p>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-purple-600">
                      +<CountUp end={800} />
                    </p>
                  </div>
                  <div>
                    <p>Protocols</p>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-purple-600">
                      +<CountUp end={101} />
                    </p>
                  </div>
                  <div>
                    <p>Workshops</p>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-purple-600">
                      +<CountUp end={10} />
                    </p>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="text-base sm:text-lg">Available in prizes</p>
                  <p className="text-xl sm:text-2xl md:text-3xl text-purple-600">
                    $XXX,XXX
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="w-full mt-10 sm:mt-16 md:mt-20 py-2 overflow-hidden bg-[#c0fab2]">
        <div className="ticker-container relative overflow-hidden">
          <div className="ticker-wrapper whitespace-nowrap">
            {[...Array(2)].map((_, containerIndex) => (
              <div
                key={containerIndex}
                className="ticker-content inline-block"
              >
                {techKeywords.map((keyword, index) => (
                  <span
                    key={`${containerIndex}-${index}`}
                    className="inline-block mx-2 text-lg sm:text-xl md:text-base text-gray-700"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
