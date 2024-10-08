"use client";
import HomePageFooter from "@/components/shared/HomePageFooter";
import HomePageNavbar from "@/components/shared/HomePageNavbar";
import FeatureSection from "./FeatureSection";
import FeatureSectionTwo from "./FeatureSectionTwo";
import FirstSection from "@/components/shared/home/FirstSection";
import FourthSection from "@/components/shared/home/FourthSection";
import FifthSection from "@/components/shared/home/FifthSection";

export default function Home() {
  return (
    <main className="bg-gray-100">
      {/* Navbar */}
      <HomePageNavbar />

      <FirstSection />

      <FourthSection />

      <FeatureSection />

      <FeatureSectionTwo />

      {/* Footer */}
      <HomePageFooter />
    </main>
  );
}
