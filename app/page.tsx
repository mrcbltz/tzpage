
import ContentSection from "@/components/home/content";
import FAQsFour from "@/components/home/faqs";
import Features from "@/components/home/features";
import FooterSection from "@/components/home/footer";
import HeroSection from "@/components/home/hero-section";
import LogoCloud from "@/components/home/logo-cloud";
import Zdjecie from "@/components/home/zdjecie";
import Image from "next/image";

export default function Home() {
  return (
    <div> 
      <h1>elo</h1>
      <HeroSection />
      <LogoCloud />
      <ContentSection />
      <Features />
      <FAQsFour />
      <FooterSection />
      
    </div>
  );
}
