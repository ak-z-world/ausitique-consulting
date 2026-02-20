// import ServiceSectionBulletpoints from "@/components/common/ServiceSectionBulletpoints";
// import ServiceSectionFAQ from "@/components/common/ServiceSectionFAQ";
// import ServiceSectionHero from "@/components/common/ServiceSectionHero";
// import ServiceSectionWhy from "@/components/common/ServiceSectionWhy";
// import ServiceWhyChooseUs from "@/components/common/ServiceWhyChooseUs";
// import ITR3PenaltyForLateFiling from "@/components/services/ITR3/ITR3PenaltyForLateFiling";
// import ITR3StructureOfTheForm from "@/components/services/ITR3/ITR3StructureOfTheForm";
// import {
//   ITR3DocumentsRequiredData,
//   ITR3FaqData,
//   ITR3FilingDueDatesData,
//   ITR3IncomeNotAllowedData,
//   ITR3ReturnFilingHeroData,
//   ITR3WhatHappensAfterFilingData,
//   ITR3WhoCanFileData,
//   ITR3WhoCannotFileData,
//   ITR3WhyFileData,
// } from "@/data";
// import { ITR3WhyChooseUsData } from "@/data/ITR3ReturnFiling/ITR3WhyChooseUsData";
// import React from "react";

// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "File Income Tax Return (ITR 3) Online",
//   description:
//     "File Income Tax Return Online with expert help. ITR-3 filing made easy for business owners, professionals & HUFs with capital gains or foreign income.",
//   keywords: [
//     "income tax return filing online india",
//     "income tax return filing online	",
//     "file income tax return online",
//     "itr 3 filing online",
//     "file itr 3",
//   ],  
// };

// const page = () => {
//   return (
//     <div className="overflow-hidden">
//       <ServiceSectionHero heroSectionData={ITR3ReturnFilingHeroData} />
//       <ServiceSectionWhy WhyData={ITR3WhyFileData} />
//       <ServiceSectionBulletpoints listData={ITR3WhoCanFileData} />
//       <ServiceSectionBulletpoints listData={ITR3WhoCannotFileData} />
//       <ServiceSectionBulletpoints listData={ITR3DocumentsRequiredData} />
//       <ServiceSectionBulletpoints listData={ITR3FilingDueDatesData} />

//       <ServiceSectionBulletpoints listData={ITR3IncomeNotAllowedData} />
//       <ServiceWhyChooseUs WhyChooseUsData={ITR3WhyChooseUsData} />
//       <ServiceSectionBulletpoints listData={ITR3WhatHappensAfterFilingData} />

//       <ITR3StructureOfTheForm />
//       <ITR3PenaltyForLateFiling />
//       <ServiceSectionFAQ faqData={ITR3FaqData} />
//     </div>
//   );
// };

// export default page;










import dynamic from "next/dynamic";
import type { Metadata } from "next";
import {
  ITR3DocumentsRequiredData,
  ITR3FaqData,
  ITR3FilingDueDatesData,
  ITR3IncomeNotAllowedData,
  ITR3ReturnFilingHeroData,
  ITR3WhatHappensAfterFilingData,
  ITR3WhoCanFileData,
  ITR3WhoCannotFileData,
  ITR3WhyFileData,
} from "@/data";
import { ITR3WhyChooseUsData } from "@/data/ITR3ReturnFiling/ITR3WhyChooseUsData";

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
const ITR3StructureOfTheForm = dynamic(
  () => import("@/components/services/ITR3/ITR3StructureOfTheForm")
);
const ITR3PenaltyForLateFiling = dynamic(
  () => import("@/components/services/ITR3/ITR3PenaltyForLateFiling")
);

export const metadata: Metadata = {
  title: "File Income Tax Return (ITR 3) Online",
  description:
    "File Income Tax Return Online with expert help. ITR-3 filing made easy for business owners, professionals & HUFs with capital gains or foreign income.",
  keywords: [
    "income tax return filing online india",
    "income tax return filing online",
    "file income tax return online",
    "itr 3 filing online",
    "file itr 3",
  ],
};

const page = () => {
  return (
    <div className="overflow-hidden">
      <ServiceSectionHero heroSectionData={ITR3ReturnFilingHeroData} />
      <ServiceSectionWhy WhyData={ITR3WhyFileData} />
      <ServiceSectionBulletpoints listData={ITR3WhoCanFileData} />
      <ServiceSectionBulletpoints listData={ITR3WhoCannotFileData} />
      <ServiceSectionBulletpoints listData={ITR3DocumentsRequiredData} />
      <ServiceSectionBulletpoints listData={ITR3FilingDueDatesData} />
      <ServiceSectionBulletpoints listData={ITR3IncomeNotAllowedData} />
      <ServiceWhyChooseUs WhyChooseUsData={ITR3WhyChooseUsData} />
      <ServiceSectionBulletpoints listData={ITR3WhatHappensAfterFilingData} />
      <ITR3StructureOfTheForm />
      <ITR3PenaltyForLateFiling />
      <ServiceSectionFAQ faqData={ITR3FaqData} />
    </div>
  );
};

export default page;
