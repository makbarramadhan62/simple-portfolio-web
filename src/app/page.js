"use client";
import { useState } from "react";
import HeaderSection from "@/app/sections/HeaderSection";
import InterestSection from "@/app/sections/InterestSection";
import PortfolioSection from "@/app/sections/PortfolioSection";
import FooterSection from "@/app/sections/FooterSection";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="dark:bg-slate-900">
        <main className="container mx-auto px-10 ">
          <HeaderSection onDarkMode={handleDarkMode} />

          <InterestSection />

          <PortfolioSection />

          <FooterSection />
        </main>
      </div>
    </div>
  );
}
