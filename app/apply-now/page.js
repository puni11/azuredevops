
import AwardsSection from "@/components/AwardsSection";
import CareerStats from "@/components/CareerStats";
import Certifications from "@/components/Certifications";
import CourseBanner from "@/components/CourseBanner";
import CourseFeatures from "@/components/CourseFeatures";
import CTA from "@/components/CTA";
import CurriculumOverview from "@/components/CurriculumOverview";
import FAQSection from "@/components/FAQSection";
import HeroComponent from "@/components/Hero";
import HiringPartners from "@/components/HiringPartners";
import PersonaSection from "@/components/PersonaSection";
import PowerSkillsSection from "@/components/PowerSkillsSection";
import PricingAndBatch from "@/components/PricingAndBatch";
import ProjectsSection from "@/components/ProjectSection";
import Testimonials from "@/components/Testimonials";
import { ToolsSection } from "@/components/Tools";
import TrainerProfile from "@/components/TrainerProfile";
import USPGrid from "@/components/USPGrid";
import WhyAzureNow from "@/components/WhyAzureNow";
import { DownloadIcon } from "@animateicons/react/huge";
import { SquareArrowDownRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HeroComponent isHomepage={false} />
    <ToolsSection/>
    <PersonaSection isHomepage={false} />
    <WhyAzureNow isHomepage={false} />
    <CurriculumOverview isHomepage={false} />
    <ProjectsSection isHomepage={false}/>
   <HiringPartners/>
    <CTA isHomepage={false}/>
    <Certifications/>
    
     <CourseFeatures/>
    <CareerStats/>
    <PricingAndBatch isHomepage={false} />
    <TrainerProfile />
    <USPGrid isHomepage={false} />
    <AwardsSection />
    <Testimonials/>
   <FAQSection/>
   <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-gray-200">
  <div className="grid grid-cols-2 max-w-md mx-auto">
    <a id="enroll_btn_mobile" href="https://rzp.io/rzp/sM9Ufce" target="_blank" className="h-12 bg-gray-800 text-white text-sm flex items-center justify-center gap-1">
      <SquareArrowDownRight size={14} />Enroll now
    </a>

    <a id="download_broucher_btn_mobile" href="#formSub" className="h-12 bg-sky-600 text-white text-sm flex items-center justify-center gap-1">
      <DownloadIcon size={14} />Download Broucher
    </a>
  </div>
</div>
 <a
      id="whatsapp_chat_btn"
      href="https://wa.me/919145840133"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-16 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition-transform"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-8 h-8 fill-white"
      >
        <path d="M16.004 3C8.832 3 3 8.732 3 15.783c0 2.478.739 4.89 2.138 6.973L3 29l6.452-2.098a13.11 13.11 0 0 0 6.552 1.764C23.176 28.666 29 22.934 29 15.883 29 8.732 23.176 3 16.004 3zm0 23.38a10.86 10.86 0 0 1-5.536-1.512l-.397-.235-3.83 1.245 1.247-3.722-.258-.386a10.57 10.57 0 0 1-1.64-5.687c0-5.89 4.693-10.683 10.414-10.683 5.743 0 10.414 4.793 10.414 10.683S21.747 26.38 16.004 26.38zm5.714-7.884c-.312-.156-1.846-.91-2.133-1.012-.287-.102-.496-.156-.705.156-.209.312-.808 1.012-.992 1.22-.183.21-.365.234-.678.078-.312-.156-1.318-.48-2.51-1.53-.928-.82-1.555-1.832-1.738-2.144-.183-.312-.02-.48.137-.635.141-.14.312-.365.469-.547.156-.183.209-.312.312-.521.102-.21.051-.39-.026-.547-.078-.156-.705-1.687-.966-2.31-.255-.612-.514-.53-.705-.54h-.6c-.21 0-.547.078-.834.39-.287.312-1.095 1.067-1.095 2.598 0 1.53 1.121 3.008 1.277 3.216.156.21 2.206 3.344 5.345 4.688.747.321 1.33.513 1.785.656.75.238 1.433.204 1.973.124.602-.09 1.846-.754 2.107-1.48.261-.727.261-1.35.183-1.48-.078-.13-.287-.208-.6-.364z" />
      </svg>
    </a>
    </>
  );
}
