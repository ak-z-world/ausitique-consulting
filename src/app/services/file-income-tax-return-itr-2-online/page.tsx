import dynamic from "next/dynamic";
import type { Metadata } from "next";
import {
  ITR2DocumentsRequiredData,
  ITR2FaqData,
  ITR2FilingDueDatesData,
  ITR2ReturnFilingHeroData,
  ITR2WhatHappensAfterFilingData,
  ITR2WhoCanFileData,
  ITR2WhoCannotFileData,
  ITR2WhyChooseAuditiqueConsultingData,
  ITR2WhyFileData,
} from "@/data";

// Dynamic imports
const ServiceSectionHero = dynamic(
  () => import("@/components/common/ServiceSectionHero")
);
const ServiceSectionWhy = dynamic(
  () => import("@/components/common/ServiceSectionWhy")
);
const ServiceSectionBulletpoints = dynamic(
  () => import("@/components/common/ServiceSectionBulletpoints")
);
const ServiceWhyChooseUs = dynamic(
  () => import("@/components/common/ServiceWhyChooseUs")
);
const ServiceSectionFAQ = dynamic(
  () => import("@/components/common/ServiceSectionFAQ")
);
const ITR2StructureOfTheITR2Data = dynamic(
  () => import("@/components/services/ITR2/ITR2StructureOfTheITR2Data")
);
const ITR2PenaltyForLateFiling = dynamic(
  () => import("@/components/services/ITR2/ITR2PenaltyForLateFiling")
);

export const metadata: Metadata = {
  title: "File Income Tax Return (ITR 2) Online",
  description:
    "File Income Tax Return online with expert help. Fast, secure, and easy ITR 2 Filing in India for those with capital gains, multiple incomes, or property.",
  keywords: [
    "income tax return filing online india",
    "income tax return filing online",
    "file income tax return online",
    "itr 2 filing online",
    "file itr 2","itr 2 online tax filing"
  ],
};

const page = () => {
  return (
    <div className="overflow-hidden">
      <ServiceSectionHero heroSectionData={ITR2ReturnFilingHeroData} />
      <ServiceSectionWhy WhyData={ITR2WhyFileData} />
      <ServiceSectionBulletpoints listData={ITR2WhoCanFileData} />
      <ServiceSectionBulletpoints listData={ITR2WhoCannotFileData} />
      <ServiceSectionBulletpoints listData={ITR2DocumentsRequiredData} />
      <ServiceSectionBulletpoints listData={ITR2FilingDueDatesData} />
      <ServiceSectionBulletpoints listData={ITR2WhatHappensAfterFilingData} />
      <ServiceWhyChooseUs WhyChooseUsData={ITR2WhyChooseAuditiqueConsultingData} />
      <ServiceSectionBulletpoints listData={ITR2WhatHappensAfterFilingData} />
      <ITR2StructureOfTheITR2Data />
      <ITR2PenaltyForLateFiling />
      <ServiceSectionFAQ faqData={ITR2FaqData} />
    </div>
  );
};

export default page;
