import dynamic from "next/dynamic";
import type { Metadata } from "next";
import {
  udayamDocumentsRequiredData,
  udayamFaqData,
  udayamHeroData,
  udayamPenaltyForNotRegisteringData,
  udayamTableData,
  udayamWhoCanApplyData,
  udayamWhyChooseAuditiqueConsultingData,
  udayamWhyRegisterData,
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
const ServiceSectionTables = dynamic(
  () => import("@/components/common/ServiceSectionTables")
);
const ServiceWhyChooseUs = dynamic(
  () => import("@/components/common/ServiceWhyChooseUs")
);
const ServiceSectionFAQ = dynamic(
  () => import("@/components/common/ServiceSectionFAQ")
);

export const metadata: Metadata = {
  title: "Apply Udyam Registration Online",
  description:
    "Apply for Udyam Registration online for your MSME. Get expert support and finish the process fast to access government loans, subsidies, and schemes.",
  keywords: [
    "Apply Udyam registration online",
    "MSME registration India",
    "Udyam certificate online",
    "Online MSME registration",
    "Udyam registration for small business",
    "udyam registration msme",
  ],
};

const page = () => {
  return (
    <div className="overflow-hidden">
      <ServiceSectionHero heroSectionData={udayamHeroData} />
      <ServiceSectionWhy WhyData={udayamWhyRegisterData} />
      <ServiceSectionBulletpoints listData={udayamWhoCanApplyData} />
      <ServiceSectionTables tableData={udayamTableData} />
      <ServiceWhyChooseUs WhyChooseUsData={udayamWhyChooseAuditiqueConsultingData} />
      <ServiceSectionBulletpoints listData={udayamDocumentsRequiredData} />
      <ServiceSectionBulletpoints
        listData={udayamPenaltyForNotRegisteringData}
      />
      <ServiceSectionFAQ faqData={udayamFaqData} />
    </div>
  );
};

export default page;
