// import ServiceSectionBulletpoints from "@/components/common/ServiceSectionBulletpoints";
// import ServiceSectionFAQ from "@/components/common/ServiceSectionFAQ";
// import ServiceSectionHero from "@/components/common/ServiceSectionHero";
// import ServiceSectionWhy from "@/components/common/ServiceSectionWhy";
// import ServiceWhyChooseUs from "@/components/common/ServiceWhyChooseUs";
// import ITREligibilityFiling from "@/components/services/Income tax e-filing/ITREligibilityFiling";
// import ITRNewTaxRegimeFY2024_25 from "@/components/services/Income tax e-filing/ITRNewTaxRegimeFY2024_25";
// import ITRResidentIndividualsAged60_80Years from "@/components/services/Income tax e-filing/ITRResidentIndividualsAged60_80Years";
// import ITRResidentIndividualsAgedMoreThan80 from "@/components/services/Income tax e-filing/ITRResidentIndividualsAgedMoreThan80";
// import {
//   incomeDocumentsRequiredData,
//   incomeDueDatesForITRFilingData,
//   incomeFaqData,
//   incomeMandatoryITRFilingData,
//   incomePenaltiesForNotFilingData,
//   incomePostFilingData,
//   incomeTaxEFilingHeroData,
//   incomeTaxWhoNeedsToFile,
//   incomeTaxWhyFile,
//   incomeTypesOfITRFilingsData,
//   incomeWhyChooseUs,
// } from "@/data";
// import React from "react";

// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Income Tax e-Filing in India – File Your ITR Online",
//   description:
//     "Income tax e-filing in India made simple. File ITR online with expert help for salaried, freelancers & businesses. Fast, accurate & refund-focused e-filing.",
//   keywords: [
//   "income tax efiling in india",
// "file itr online",
// "income tax return filing online",
// "e filing income tax return online",
// "income tax e filing services"
//   ],
// };

// const page = () => {
//   return (
//     <div className="overflow-hidden">
//       <ServiceSectionHero heroSectionData={incomeTaxEFilingHeroData} />
//       <ServiceSectionWhy WhyData={incomeTaxWhyFile} />
//       <ServiceSectionBulletpoints listData={incomeTaxWhoNeedsToFile} />
//       <ServiceSectionBulletpoints listData={incomeMandatoryITRFilingData} />
//       <ServiceSectionBulletpoints listData={incomeDocumentsRequiredData} />
//       <ServiceSectionBulletpoints listData={incomeTypesOfITRFilingsData} />
//       <ServiceSectionBulletpoints listData={incomeDueDatesForITRFilingData} />
//       <ServiceSectionBulletpoints listData={incomeTypesOfITRFilingsData} />
//       <ServiceSectionBulletpoints listData={incomePostFilingData} />
//       <ServiceSectionBulletpoints listData={incomePenaltiesForNotFilingData} />
//       <ServiceWhyChooseUs WhyChooseUsData={incomeWhyChooseUs} />
//       <ITREligibilityFiling />
//       <ITRResidentIndividualsAged60_80Years/>
//       <ITRResidentIndividualsAgedMoreThan80/>
//       <ITRNewTaxRegimeFY2024_25/>
//       <ServiceSectionFAQ faqData={incomeFaqData} />
//     </div>
//   );
// };

// export default page;

import dynamic from "next/dynamic";
import type { Metadata } from "next";
import {
  incomeDocumentsRequiredData,
  incomeDueDatesForITRFilingData,
  incomeFaqData,
  incomeMandatoryITRFilingData,
  incomePenaltiesForNotFilingData,
  incomePostFilingData,
  incomeTaxEFilingHeroData,
  incomeTaxWhoNeedsToFile,
  incomeTaxWhyFile,
  incomeTypesOfITRFilingsData,
  incomeWhyChooseUs,
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
const ITREligibilityFiling = dynamic(
  () => import("@/components/services/Income tax e-filing/ITREligibilityFiling")
);
const ITRResidentIndividualsAged60_80Years = dynamic(
  () =>
    import(
      "@/components/services/Income tax e-filing/ITRResidentIndividualsAged60_80Years"
    )
);
const ITRResidentIndividualsAgedMoreThan80 = dynamic(
  () =>
    import(
      "@/components/services/Income tax e-filing/ITRResidentIndividualsAgedMoreThan80"
    )
);
const ITRNewTaxRegimeFY2024_25 = dynamic(
  () =>
    import("@/components/services/Income tax e-filing/ITRNewTaxRegimeFY2024_25")
);

export const metadata: Metadata = {
  title: "Income Tax e-Filing online",
  description:
    "Income tax e-filing in India made simple. File ITR online with expert help for salaried, freelancers & businesses. Fast, accurate & refund-focused e-filing.",
  keywords: [
    "income tax efiling in india",
    "file itr online",
    "income tax return filing online",
    "e filing income tax return online",
    "income tax e filing services",
  ],
};

const page = () => {
  return (
    <div className="overflow-hidden">
      <ServiceSectionHero heroSectionData={incomeTaxEFilingHeroData} />
      <ServiceSectionWhy WhyData={incomeTaxWhyFile} />
      <ServiceSectionBulletpoints listData={incomeTaxWhoNeedsToFile} />
      <ServiceSectionBulletpoints listData={incomeMandatoryITRFilingData} />
      <ServiceSectionBulletpoints listData={incomeDocumentsRequiredData} />
      <ServiceSectionBulletpoints listData={incomeTypesOfITRFilingsData} />
      <ServiceSectionBulletpoints listData={incomeDueDatesForITRFilingData} />
      <ServiceSectionBulletpoints listData={incomeTypesOfITRFilingsData} />
      <ServiceSectionBulletpoints listData={incomePostFilingData} />
      <ServiceSectionBulletpoints listData={incomePenaltiesForNotFilingData} />
      <ServiceWhyChooseUs WhyChooseUsData={incomeWhyChooseUs} />
      <ITREligibilityFiling />
      <ITRResidentIndividualsAged60_80Years />
      <ITRResidentIndividualsAgedMoreThan80 />
      <ITRNewTaxRegimeFY2024_25 />
      <ServiceSectionFAQ faqData={incomeFaqData} />
    </div>
  );
};

export default page;
