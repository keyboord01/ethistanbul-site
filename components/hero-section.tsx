import React from "react";
import Image from "next/image";
import Navbar from "./ui/nav-bar";
import IstanbulBackground from "@/assets/istanbul-background.png";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={IstanbulBackground}
          alt="Istanbul Skyline"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 to-purple-500/30 mix-blend-multiply" />
      </div>

      <div className="absolute top-6 right-6 z-20">
        <button className="bg-white text-gray-800 border-1 border-black hover:bg-gray-100 px-5 py-2 rounded-full font-medium text-sm">
          Interested in partnering?
        </button>
      </div>

      <div className="relative z-10 flex flex-col h-full justify-center items-center text-white px-4 mt-[-8vh]">
        <p className="text-xl mb-2">September 5-6-7, 2025</p>
        <h1 className="text-6xl md:text-8xl font-bold mb-8">ETHISTANBUL</h1>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-white text-gray-800 hover:bg-gray-200 px-8 py-3 rounded-full font-medium transition-all">
            Get Your Tickets
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white/20 px-8 py-3 rounded-full font-medium transition-all">
            Apply To Hack
          </button>
        </div>
      </div>

      <Navbar />
    </section>
  );
};

export default HeroSection;
