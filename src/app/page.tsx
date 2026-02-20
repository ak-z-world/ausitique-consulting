import gsap from "gsap";
import dynamic from "next/dynamic";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HomeOurCoreServices = dynamic(
  () => import("@/components/home/HomeOurCoreServices")
);
const HomeWhatMakesUsDifferent = dynamic(
  () => import("@/components/home/HomeWhatMakesUsDifferent")
);
const HomeTaxBusinessConsultingService = dynamic(
  () => import("@/components/home/HomeTaxBusinessConsultingService")
);
const HomeSpecializedRegistrationFilings = dynamic(
  () => import("@/components/home/HomeSpecializedRegistrationFilings")
);
// const HomeTestimonial = dynamic(() => import('@/components/home/HomeTestimonial'));

import type { Metadata } from "next";
import HomeHero from "@/components/home/HomeHero";
import HomeWhyYouHaveToChooseUs from "@/components/home/HomeWhyYouHaveToChooseUs";
import HomeTestimonial from "@/components/home/HomeTestimonial";
// import HomeTestimonial from "@/components/home/HomeTestimonial";

export const metadata: Metadata = {
  title: "income tax consultancy services | Auditique Consulting",
  description:
    "Auditique Consulting offers expert Income Tax Consultancy Services for individuals & businesses. File ITR online, save tax legally, with professional financial support.",
  keywords: [
    "Tax consultancy services",
    "Best chartered accountant firms in india",
    "tax advisor in india",
    "tax auditor in india",
    "financial Consultancy services in India",
    "tax consultancy services in chennai income tax consultancy services",
  ],
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HomeHero />
      <HomeWhyYouHaveToChooseUs />
      <HomeOurCoreServices />
      <HomeWhatMakesUsDifferent />
      <HomeTaxBusinessConsultingService />
      <HomeSpecializedRegistrationFilings />
      {/* <HomeTestimonial /> */}
    </div>
  );
}
