import HeroSection from "@/components/hero-section";
import Overview from "@/components/overview";
import React from "react";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <Overview />
    </main>
  );
}
