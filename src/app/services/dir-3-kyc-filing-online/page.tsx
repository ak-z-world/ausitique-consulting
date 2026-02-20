// import ServiceSectionBulletpoints from "@/components/common/ServiceSectionBulletpoints";
// import ServiceSectionFAQ from "@/components/common/ServiceSectionFAQ";
// import ServiceSectionHero from "@/components/common/ServiceSectionHero";
// import ServiceSectionWhy from "@/components/common/ServiceSectionWhy";
// import ServiceWhyChooseUs from "@/components/common/ServiceWhyChooseUs";
// import DinTypesOfDIR3KYCForms from "@/components/services/Din ekyc filing/DinTypesOfDIR3KYCForms";
// import DinWhoShouldFileDIR3KYC from "@/components/services/Din ekyc filing/DinWhoShouldFileDIR3KYC";
// import { dinDocumentsRequiredForFilingData } from "@/data/dinEkycFiling/dinDocumentsRequiredForFilingData";
// import { dinEKycDueDateData } from "@/data/dinEkycFiling/dinEKycDueDateData";
// import { dinEKycPenaltyForNonFiling } from "@/data/dinEkycFiling/dinEKycPenaltyForNonFiling";
// import {
//   dinEKycFilingHeroData,
//   dinWhyFileDirKyc,
//   dinFaqData,
//   dinWhyChooseUsData,
// } from "@/data";

// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: " DIR-3 KYC Filing Online – File DIN eKYC ",
//   description:
//     "DIR-3 KYC filing online made easy. Stay MCA compliant with expert DIN eKYC services, fast processing, error-free submission, and timely DIN reactivation.",
//   keywords: [
//     "dir-3 kyc filing online",
//     "file dir-3 kyc ",
//     "din ekyc filing",
//     "director identification number application",
//     "dir-3 kyc form",
//   ],
// };

// const page = () => {
//   return (
//     <div className="overflow-hidden">
//       <ServiceSectionHero heroSectionData={dinEKycFilingHeroData} />
//       <ServiceSectionWhy WhyData={dinWhyFileDirKyc} />
//       <DinWhoShouldFileDIR3KYC />
//       <DinTypesOfDIR3KYCForms />
//       <ServiceSectionBulletpoints
//         listData={dinDocumentsRequiredForFilingData}
//       />
//       <ServiceWhyChooseUs WhyChooseUsData={dinWhyChooseUsData} />
//       <ServiceSectionBulletpoints listData={dinEKycDueDateData} />
//       <ServiceSectionBulletpoints listData={dinEKycPenaltyForNonFiling} />
//       <ServiceSectionFAQ faqData={dinFaqData} />
//     </div>
//   );
// };

// export default page;

import dynamic from "next/dynamic";
import type { Metadata } from "next";
import {
  dinEKycFilingHeroData,
  dinWhyFileDirKyc,
  dinFaqData,
  dinWhyChooseUsData,
} from "@/data";
import { dinDocumentsRequiredForFilingData } from "@/data/dinEkycFiling/dinDocumentsRequiredForFilingData";
import { dinEKycDueDateData } from "@/data/dinEkycFiling/dinEKycDueDateData";
import { dinEKycPenaltyForNonFiling } from "@/data/dinEkycFiling/dinEKycPenaltyForNonFiling";

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
const DinTypesOfDIR3KYCForms = dynamic(
  () => import("@/components/services/Din ekyc filing/DinTypesOfDIR3KYCForms")
);
const DinWhoShouldFileDIR3KYC = dynamic(
  () => import("@/components/services/Din ekyc filing/DinWhoShouldFileDIR3KYC")
);

export const metadata: Metadata = {
  title: "DIR-3 KYC Filing Online",
  description:
    "DIR-3 KYC filing online made easy. Stay MCA compliant with expert DIN eKYC services, fast processing, error-free submission, and timely DIN reactivation.",
  keywords: [
    "dir-3 kyc filing online",
    "file dir-3 kyc",
    "din ekyc filing",
    "director identification number application",
    "dir-3 kyc form",
  ],
};

const page = () => {
  return (
    <div className="overflow-hidden">
      <ServiceSectionHero heroSectionData={dinEKycFilingHeroData} />
      <ServiceSectionWhy WhyData={dinWhyFileDirKyc} />
      <DinWhoShouldFileDIR3KYC />
      <DinTypesOfDIR3KYCForms />
      <ServiceSectionBulletpoints
        listData={dinDocumentsRequiredForFilingData}
      />
      <ServiceWhyChooseUs WhyChooseUsData={dinWhyChooseUsData} />
      <ServiceSectionBulletpoints listData={dinEKycDueDateData} />
      <ServiceSectionBulletpoints listData={dinEKycPenaltyForNonFiling} />
      <ServiceSectionFAQ faqData={dinFaqData} />
    </div>
  );
};

export default page;
