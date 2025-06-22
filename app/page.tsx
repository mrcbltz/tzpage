
import ContentSection from "@/components/home/content";
import FAQsFour from "@/components/home/faqs";
import Features from "@/components/home/features";
import FooterSection from "@/components/home/footer";
import HeroSection from "@/components/home/hero-section";
import LogoCloud from "@/components/home/logo-cloud";


export default function Home() {
  return (
    <div> 
      
      <HeroSection />
      <LogoCloud />
      <ContentSection />
      <Features />
      <FAQsFour />
      <FooterSection />
      
    </div>
  );
}
