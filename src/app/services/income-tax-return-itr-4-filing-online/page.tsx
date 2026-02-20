// import ServiceSectionBulletpoints from "@/components/common/ServiceSectionBulletpoints";
// import ServiceSectionFAQ from "@/components/common/ServiceSectionFAQ";
// import ServiceSectionHero from "@/components/common/ServiceSectionHero";
// import ServiceSectionWhy from "@/components/common/ServiceSectionWhy";
// import ServiceWhyChooseUs from "@/components/common/ServiceWhyChooseUs";
// import ITR4PenaltyForLateFiling from "@/components/services/ITR4/ITR4PenaltyForLateFiling";
// import ITR4StructureOfForm from "@/components/services/ITR4/ITR4StructureOfForm";
// import ITR4WhoCanFile from "@/components/services/ITR4/ITR4WhoCanFile";
// import {
//   ITR4DocumentsRequiredData,
//   ITR4FaqData,
//   ITR4FilingDueDateData,
//   ITR4ReturnFilingHeroData,
//   ITR4WhatHappensAfterFilingData,
//   ITR4WhoCannotFileData,
//   ITR4WhyChooseUs,
//   ITR4WhyFileData,
// } from "@/data";
// import React from "react";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Income Tax Return (ITR 4) Filing Online",
//   description:
//     "File ITR-4 under presumptive taxation (44AD, 44ADA, 44AE). Income Tax Return Filing Online made easy for small businesses and self-employed individuals.",
//   keywords: [
//     "income tax return filing online india",
//     "income tax return filing online	",
//     "file income tax return online",
//     "itr 4 filing online",
//     "file itr 4",
//   ],
// };

// const page = () => {
//   return (
//     <div className="overflow-hidden">
//       <ServiceSectionHero heroSectionData={ITR4ReturnFilingHeroData} />
//       <ServiceSectionWhy WhyData={ITR4WhyFileData} />
//       <ITR4WhoCanFile />
//       <ServiceSectionBulletpoints listData={ITR4WhoCannotFileData} />
//       <ServiceSectionBulletpoints listData={ITR4DocumentsRequiredData} />
//       <ServiceSectionBulletpoints listData={ITR4FilingDueDateData} />
//       <ServiceWhyChooseUs WhyChooseUsData={ITR4WhyChooseUs} />
//       <ServiceSectionBulletpoints listData={ITR4WhatHappensAfterFilingData} />
//       <ITR4StructureOfForm />
//       <ITR4PenaltyForLateFiling />
//       <ServiceSectionFAQ faqData={ITR4FaqData} />
//     </div>
//   );
// };

// export default page;

import dynamic from "next/dynamic";
import type { Metadata } from "next";
import {
  ITR4DocumentsRequiredData,
  ITR4FaqData,
  ITR4FilingDueDateData,
  ITR4ReturnFilingHeroData,
  ITR4WhatHappensAfterFilingData,
  ITR4WhoCanFileData,
  ITR4WhoCannotFileData,
  ITR4WhyChooseUs,
  ITR4WhyFileData,
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

const ITR4StructureOfForm = dynamic(
  () => import("@/components/services/ITR4/ITR4StructureOfForm")
);
const ITR4PenaltyForLateFiling = dynamic(
  () => import("@/components/services/ITR4/ITR4PenaltyForLateFiling")
);

export const metadata: Metadata = {
  title: "Income Tax Return (ITR 4) Filing Online",
  description:
    "File ITR-4 under presumptive taxation (44AD, 44ADA, 44AE). Income Tax Return Filing Online made easy for small businesses and self-employed individuals.",
  keywords: [
    "income tax return filing online india",
    "income tax return filing online",
    "file income tax return online",
    "itr 4 filing online",
    "file itr 4",
  ],
};

const page = () => {
  return (
    <div className="overflow-hidden">
      <ServiceSectionHero heroSectionData={ITR4ReturnFilingHeroData} />
      <ServiceSectionWhy WhyData={ITR4WhyFileData} />
      {/* <ITR4WhoCanFile /> */}
      <ServiceSectionBulletpoints listData={ITR4WhoCanFileData} />
      <ServiceSectionBulletpoints listData={ITR4WhoCannotFileData} />
      <ServiceSectionBulletpoints listData={ITR4DocumentsRequiredData} />
      <ServiceSectionBulletpoints listData={ITR4FilingDueDateData} />
      <ServiceWhyChooseUs WhyChooseUsData={ITR4WhyChooseUs} />
      <ServiceSectionBulletpoints listData={ITR4WhatHappensAfterFilingData} />
      <ITR4StructureOfForm />
      <ITR4PenaltyForLateFiling />
      <ServiceSectionFAQ faqData={ITR4FaqData} />
    </div>
  );
};

export default page;
