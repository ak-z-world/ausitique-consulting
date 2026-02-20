import dynamic from "next/dynamic";
const AboutHero = dynamic(() => import("@/components/about/AboutHero"));
const AboutSecondSection = dynamic(
  () => import("@/components/about/AboutSecondSection")
);
const AboutOurHistory = dynamic(
  () => import("@/components/about/AboutOurHistory")
);
const AboutCertification = dynamic(
  () => import("@/components/about/AboutCertification")
);

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About us",
  description:
    "Trusted by clients across India, Auditique Consulting provides professional tax, GST, and business consultancy services for stress-free financial growth.",
  keywords: [
    "About Auditique Consulting",
    "Tax Consulting Services",
    "Financial consulting services",
    "Tax Advisor online",
  ],
};

export default function About() {
  return (
    <div className="overflow-hidden">
      <AboutHero />
      <AboutSecondSection />
      <AboutOurHistory />
      <AboutCertification />
    </div>
  );
}
