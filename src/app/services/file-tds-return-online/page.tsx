import dynamic from "next/dynamic";
import type { Metadata } from "next";
import {
  tdsFaqData,
  tdsReturnFilingHeroData,
  tdsWhyFileTDSReturnsData,
  tdsPaymentDueDatesData,
  tdsReturnFilingDueDatesData,
  tdsReturnFormsAndUsage,
  tdsPenaltyForTDSNonComplianceData,
  tdsWhoMustFileTDSReturnsData,
  tdsDocumentsRequiredData,
  tdsWhyChooseAuditiqueConsulting,
  tdsThresholdsToRemember,
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
const ServiceSectionTables = dynamic(
  () => import("@/components/common/ServiceSectionTables")
);
const ServiceSectionFAQ = dynamic(
  () => import("@/components/common/ServiceSectionFAQ")
);

export const metadata: Metadata = {
  title: "File TDS Return Online",
  description:
    "File TDS Return Online with our expert assistance. Ensure accurate, secure, and timely filing while staying fully compliant with Indian tax regulations.",
  keywords: [
    "File TDS Return Online",
    "TDS return filing Online",
    "Tax deducted at source",
    "Tax deducted at source certificate",
    "Tax deducted at source form",
  ],
};

const page = () => {
  return (
    <div className="overflow-hidden">
      <ServiceSectionHero heroSectionData={tdsReturnFilingHeroData} />
      <ServiceSectionWhy WhyData={tdsWhyFileTDSReturnsData} />
      <ServiceSectionBulletpoints listData={tdsWhoMustFileTDSReturnsData} />
      <ServiceSectionBulletpoints listData={tdsDocumentsRequiredData} />
      <ServiceWhyChooseUs WhyChooseUsData={tdsWhyChooseAuditiqueConsulting} />
      <ServiceSectionTables tableData={tdsPaymentDueDatesData} />
      <ServiceSectionTables tableData={tdsReturnFilingDueDatesData} />
      <ServiceSectionTables tableData={tdsReturnFormsAndUsage} />
      <ServiceSectionTables tableData={tdsPenaltyForTDSNonComplianceData} />
      <ServiceSectionBulletpoints listData={tdsThresholdsToRemember} />
      <ServiceSectionFAQ faqData={tdsFaqData} />
    </div>
  );
};

export default page;
