import { Header, HeroSection } from "@/components/landing/HeroSection";
import StorySection from "@/components/landing/StorySection";
import VideoSection from "@/components/landing/VideoSection";
import InstagramSection from "@/components/landing/InstagramSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import CourseContentSection from "@/components/landing/CourseContentSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FAQSection from "@/components/landing/FAQSection";
import PurchaseSection from "@/components/landing/PurchaseSection";
import LeadFormSection from "@/components/landing/LeadFormSection";
import GallerySection from "@/components/landing/GallerySection";
import Footer from "@/components/landing/Footer";
import AccessibilityButton from "@/components/landing/AccessibilityButton";

const Index = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <StorySection />
      <VideoSection />
      <InstagramSection />
      <BenefitsSection />
      <CourseContentSection />
      <TestimonialsSection />
      <FAQSection />
      <PurchaseSection />
      <LeadFormSection />
      <GallerySection />
      <Footer />
      <AccessibilityButton />
    </main>
  );
};

export default Index;
