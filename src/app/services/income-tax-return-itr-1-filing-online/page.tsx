import dynamic from "next/dynamic";
import React from "react";
import {
  itr1DocumentsRequired,
  itr1FaqData,
  itr1FilingDueDateData,
  itr1HeroData,
  itr1IncomeNotAllowedData,
  itr1WhatHappensAfterFilingData,
  itr1WhoCanFileData,
  itr1WhoCannotFileData,
  itr1WhyChooseUs,
  itr1WhyFileData,
} from "@/data";
// import ServiceContactUs from "@/components/common/ServiceContactUs";

// ✅ Dynamic imports
const ServiceSectionHero = dynamic(
  () => import("@/components/common/ServiceSectionHero")
  // { ssr: false, loading: () => <p>Loading Hero...</p> }
);

const ServiceSectionWhy = dynamic(
  () => import("@/components/common/ServiceSectionWhy")
  // { ssr: false, loading: () => <p>Loading Why Section...</p> }
);

const ServiceSectionBulletpoints = dynamic(
  () => import("@/components/common/ServiceSectionBulletpoints")
  // { ssr: false, loading: () => <p>Loading Bulletpoints...</p> }
);

const ServiceWhyChooseUs = dynamic(
  () => import("@/components/common/ServiceWhyChooseUs")
  // { ssr: false, loading: () => <p>Loading Why Choose Us...</p> }/\
);

const ServiceSectionFAQ = dynamic(
  () => import("@/components/common/ServiceSectionFAQ")
  // { ssr: false, loading: () => <p>Loading FAQ...</p> }
);


const ITR1StructureOfITR1 = dynamic(
  () => import("@/components/services/ITR1/ITR1StructureOfITR1")
  // { ssr: false, loading: () => <p>Loading ITR1 Structure...</p> }
);

const ITR1PenaltyForLateFiling = dynamic(
  () => import("@/components/services/ITR1/ITR1PenaltyForLateFiling")
  // { ssr: false, loading: () => <p>Loading Penalty Info...</p> }\
);

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: " Income Tax Return (ITR 1) Filing Online",
  description:
    "File ITR 1 with expert support. Fast and secure Income Tax Return Filing Online India for salaried individuals earning up to ₹50L from salary or pension",
  keywords: [
    "income tax return filing online india",
    "income tax return filing online	",
    "file income tax return online",
    "itr 1 filing online",
    "file itr 1",
  ],
};

const Page = () => {
  return (
    <div className="overflow-hidden">
      {/* <ServiceContactUs/> */}

      <ServiceSectionHero heroSectionData={itr1HeroData} />
      <ServiceSectionWhy WhyData={itr1WhyFileData} />
      <ServiceSectionBulletpoints listData={itr1WhoCanFileData} />
      <ServiceSectionBulletpoints listData={itr1WhoCannotFileData} />
      <ServiceSectionBulletpoints listData={itr1FilingDueDateData} />
      <ServiceSectionBulletpoints listData={itr1IncomeNotAllowedData} />
      <ServiceSectionBulletpoints listData={itr1WhatHappensAfterFilingData} />
      <ServiceWhyChooseUs WhyChooseUsData={itr1WhyChooseUs} />
      <ServiceSectionBulletpoints listData={itr1DocumentsRequired} />
      <ITR1StructureOfITR1 />
      <ITR1PenaltyForLateFiling />
      <ServiceSectionFAQ faqData={itr1FaqData} />
    </div>
  );
};

export default Page;
