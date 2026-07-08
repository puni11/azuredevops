
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
  <div className="grid grid-cols-1 max-w-md mx-auto">
   

    <a id="download_broucher_btn_mobile" href="#formSub" className="h-12 bg-sky-600 text-white text-sm flex items-center justify-center gap-1">
      <DownloadIcon size={14} />Download Broucher
    </a>
  </div>
</div>
    </>
  );
}
