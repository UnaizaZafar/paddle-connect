import CoreFeatures from "./components/Home/CoreFeatures";
import CTASection from "./components/Home/CTASection";
import HeroSection from "./components/Home/HeroSection";
import PaddlePlatform from "./components/Home/PaddlePlatform";
import PaddleWorkflow from "./components/Home/PaddleWorkflow";
import Pricing from "./components/Home/Pricing";
import WhyChoosePaddleConnect from "./components/Home/WhyChoosePaddleConnect";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PaddleWorkflow />
      <PaddlePlatform />
      <CoreFeatures />
      <WhyChoosePaddleConnect />
      <Pricing/>
      <CTASection/>
    </>
  );
}
