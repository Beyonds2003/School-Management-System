import HomePageFooter from "@/components/shared/HomePageFooter";
import HomePageNavbar from "@/components/shared/HomePageNavbar";
import FeatureSection from "../../components/shared/home/FeatureSection";
import FeatureSectionTwo from "../../components/shared/home/FeatureSectionTwo";
import FirstSection from "@/components/shared/home/FirstSection";
import FourthSection from "@/components/shared/home/FourthSection";

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

