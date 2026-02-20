// import ServiceSectionBulletpoints from "@/components/common/ServiceSectionBulletpoints";
// import ServiceSectionFAQ from "@/components/common/ServiceSectionFAQ";
// import ServiceSectionHero from "@/components/common/ServiceSectionHero";
// import ServiceSectionWhy from "@/components/common/ServiceSectionWhy";
// import ServiceWhyChooseUs from "@/components/common/ServiceWhyChooseUs";
// import {
//   soleEligibilityForSoleProprietorshipData,
//   soleOngoingComplianceAfterRegistrationData,
//   soleProprietorshipFaqData,
//   soleProprietorshipHeroData,
//   soleProprietorshipWhyRegisterData,
//   soleRulesAndRegulationsData,
//   soletDocumentsRequired,
//   soleTypesOfSoleProprietorshipData,
//   soleWhyChooseUs,
// } from "@/data";
// import React from "react";

// import type { Metadata } from "next";
// export const metadata: Metadata = {
//   title: "Sole Proprietorship Registration Online",
//   description:
//     "Sole proprietorship registration online with expert support, quick processing, and full legal compliance. Start your business hassle-free across India.",
//   keywords: [
//     "Sole proprietorship registration online",
//     "Sole proprietorship firm registration online",
//     "Online business registration",
//     "Sole proprietorship registration in India",
//     "MSME registration support",
//     "GST registration for proprietorship",
//   ],
// };

// const page = () => {
//   return (
//     <div className="overflow-hidden">
//       <ServiceSectionHero heroSectionData={soleProprietorshipHeroData} />
//       <ServiceSectionWhy WhyData={soleProprietorshipWhyRegisterData} />
//       <ServiceSectionBulletpoints listData={soleRulesAndRegulationsData} />
//       <ServiceSectionBulletpoints
//         listData={soleTypesOfSoleProprietorshipData}
//       />
//       <ServiceSectionBulletpoints
//         listData={soleEligibilityForSoleProprietorshipData}
//       />
//       <ServiceWhyChooseUs WhyChooseUsData={soleWhyChooseUs} />
//       <ServiceSectionBulletpoints listData={soletDocumentsRequired} />
//       <ServiceSectionBulletpoints
//         listData={soleOngoingComplianceAfterRegistrationData}
//       />
//       <ServiceSectionFAQ faqData={soleProprietorshipFaqData} />
//     </div>
//   );
// };

// export default page;

import dynamic from "next/dynamic";
import type { Metadata } from "next";
import {
  soleEligibilityForSoleProprietorshipData,
  soleOngoingComplianceAfterRegistrationData,
  soleProprietorshipFaqData,
  soleProprietorshipHeroData,
  soleProprietorshipWhyRegisterData,
  soleRulesAndRegulationsData,
  soletDocumentsRequired,
  soleTypesOfSoleProprietorshipData,
  soleWhyChooseUs,
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

export const metadata: Metadata = {
  title: "Sole Proprietorship Registration Online",
  description:
    "Register your sole proprietorship online with Auditique Consulting. Get expert support, quick processing, and complete legal compliance to start your business in India.",
  keywords: [
    "Sole proprietorship registration online",
    "Sole proprietorship firm registration online",
    "Online business registration",
    "Sole proprietorship registration in India",
    "MSME registration support",
    "GST registration for proprietorship",
  ],
};

const page = () => {
  return (
    <div className="overflow-hidden">
      <ServiceSectionHero heroSectionData={soleProprietorshipHeroData} />
      <ServiceSectionWhy WhyData={soleProprietorshipWhyRegisterData} />
      <ServiceSectionBulletpoints listData={soleRulesAndRegulationsData} />
      <ServiceSectionBulletpoints
        listData={soleTypesOfSoleProprietorshipData}
      />
      <ServiceSectionBulletpoints
        listData={soleEligibilityForSoleProprietorshipData}
      />
      <ServiceWhyChooseUs WhyChooseUsData={soleWhyChooseUs} />
      <ServiceSectionBulletpoints listData={soletDocumentsRequired} />
      <ServiceSectionBulletpoints
        listData={soleOngoingComplianceAfterRegistrationData}
      />
      <ServiceSectionFAQ faqData={soleProprietorshipFaqData} />
    </div>
  );
};

export default page;
