// import ServiceSectionBulletpoints from "@/components/common/ServiceSectionBulletpoints";
// import ServiceSectionFAQ from "@/components/common/ServiceSectionFAQ";
// import ServiceSectionHero from "@/components/common/ServiceSectionHero";
// import ServiceSectionWhy from "@/components/common/ServiceSectionWhy";
// import ServiceWhyChooseUs from "@/components/common/ServiceWhyChooseUs";
// import {
//   GSTAfterGSTRegistrationData,
//   GSTCertificateData,
//   GSTDocumentsRequiredData,
//   GSTPenaltyForNotRegisteringData,
//   gstRegistrationFaqData,
//   gstRegistrationHeroData,
//   gstRegistrationWhyRegisterData,
//   GSTTypesOfGSTData,
//   GSTWhoNeedsToRegisterData,
//   GSTWhyChooseUs,
// } from "@/data";
// import React from "react";

// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Apply GST Registration Online",
//   description:
//     "Apply for GST registration online quickly and securely. Get expert guidance to register your business and stay GST compliant across India.",
//   keywords: [
//     "Apply GST registration online",
//     "GST registration services",
//     "GSTIN registration online",
//     "Goods and Services Tax registration",
//     "Register GST number",
//   ],
// };

// const page = () => {
//   return (
//     <div className="overflow-hidden">
//       <ServiceSectionHero heroSectionData={gstRegistrationHeroData} />
//       <ServiceSectionWhy WhyData={gstRegistrationWhyRegisterData} />
//       <ServiceSectionBulletpoints listData={GSTWhoNeedsToRegisterData} />
//       <ServiceSectionBulletpoints listData={GSTDocumentsRequiredData} />
//       <ServiceSectionBulletpoints listData={GSTTypesOfGSTData} />
//       <ServiceWhyChooseUs WhyChooseUsData={GSTWhyChooseUs} />
//       <ServiceSectionBulletpoints listData={GSTAfterGSTRegistrationData} />
//       <ServiceSectionBulletpoints listData={GSTPenaltyForNotRegisteringData} />
//       <ServiceSectionBulletpoints listData={GSTCertificateData} />
//       <ServiceSectionBulletpoints listData={GSTWhyChooseUs} />
//       <ServiceSectionFAQ faqData={gstRegistrationFaqData} />
//     </div>
//   );
// };

// export default page;

import dynamic from "next/dynamic";
import type { Metadata } from "next";
import {
  GSTAfterGSTRegistrationData,
  GSTCertificateData,
  GSTDocumentsRequiredData,
  GSTPenaltyForNotRegisteringData,
  gstRegistrationFaqData,
  gstRegistrationHeroData,
  gstRegistrationWhyRegisterData,
  GSTTypesOfGSTData,
  GSTWhoNeedsToRegisterData,
  GSTWhyChooseUs,
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
  title: "gst registration online apply",
  description:
    " Apply for GST registration online quickly and securely. Get expert guidance to register your business and stay GST compliant across India.",
  keywords: [
    "Apply GST registration online",
    "GST registration services",
    "GSTIN registration online",
    "Goods and Services Tax registration",
    "Register GST number",
    "gst registration online apply"
  ],
};

const page = () => {
  return (
    <div className="overflow-hidden">
      <ServiceSectionHero heroSectionData={gstRegistrationHeroData} />
      <ServiceSectionWhy WhyData={gstRegistrationWhyRegisterData} />
      <ServiceSectionBulletpoints listData={GSTWhoNeedsToRegisterData} />
      <ServiceSectionBulletpoints listData={GSTDocumentsRequiredData} />
      <ServiceSectionBulletpoints listData={GSTTypesOfGSTData} />
      <ServiceWhyChooseUs WhyChooseUsData={GSTWhyChooseUs} />
      <ServiceSectionBulletpoints listData={GSTAfterGSTRegistrationData} />
      <ServiceSectionBulletpoints listData={GSTPenaltyForNotRegisteringData} />
      <ServiceSectionBulletpoints listData={GSTCertificateData} />
      <ServiceSectionBulletpoints listData={GSTWhyChooseUs} />
      <ServiceSectionFAQ faqData={gstRegistrationFaqData} />
    </div>
  );
};

export default page;
