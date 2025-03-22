// LandingPage.tsx
import React from "react";
import NavigationHeader from "./components/NavigationHeader";
import HeroSection from "./components/HeroSection";
//import CommandSection from "./components/CommandSection";
import FeaturesSection from "./components/FeaturesSection";
import CharacterPreview from "./components/CharacterPreview";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationHeader />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <CharacterPreview />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
