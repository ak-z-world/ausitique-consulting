// import ServiceSectionFAQ from "@/components/common/ServiceSectionFAQ";
// import GSTDocumentRequiredForFiling from "@/components/services/GST return filing/GSTDocumentRequiredForFiling";
// import GSTPenaltyForLateGst from "@/components/services/GST return filing/GSTPenaltyForLateGst";
// import GSTWhatHappenIfIFileGstLate from "@/components/services/GST return filing/GSTWhatHappenIfIFileGstLate";
// import GSTWhatYouGet from "@/components/services/GST return filing/GSTWhatYouGet";
// import GSTWhoMustFileGSTReturns from "@/components/services/GST return filing/GSTWhoMustFileGSTReturns";
// import React from "react";
// import {
//   gstFaqData,
//   gstHeroData,
//   gstReturnFilingTableData,
//   gstWhyFile,
// } from "@/data";
// import ServiceSectionHero from "@/components/common/ServiceSectionHero";
// import ServiceSectionWhy from "@/components/common/ServiceSectionWhy";
// import ServiceSectionTables from "@/components/common/ServiceSectionTables";

// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "GST Return Filing Online – Expert GSTR Services in India",
//   description:
//     "GST return filing online made easy with expert support. Ensure accurate GSTR filing, stay compliant with GST laws, avoid penalties, and claim full ITC.",
//   keywords: [
//     "   gst return filing online",
//     "GSTR filing",
//     "file gst return online",
//     "gstr 1 filing",
//     "gstr 3b filing",
//   ],
// };

// const page = () => {
//   return (
//     <div className="overflow-hidden">
//       <ServiceSectionHero heroSectionData={gstHeroData} />
//       <ServiceSectionWhy WhyData={gstWhyFile} />
//       <GSTWhoMustFileGSTReturns />
//       <GSTDocumentRequiredForFiling />
//       <ServiceSectionTables tableData={gstReturnFilingTableData} />
//       <GSTWhatYouGet />
//       <GSTPenaltyForLateGst />
//       <GSTWhatHappenIfIFileGstLate />
//       <ServiceSectionFAQ faqData={gstFaqData} />
//     </div>
//   );
// };

// export default page;

import dynamic from "next/dynamic";
import type { Metadata } from "next";
import {
  gstFaqData,
  gstHeroData,
  gstReturnFilingTableData,
  gstWhyFile,
} from "@/data";

// Dynamic imports
const ServiceSectionHero = dynamic(
  () => import("@/components/common/ServiceSectionHero")
);
const ServiceSectionWhy = dynamic(
  () => import("@/components/common/ServiceSectionWhy")
);
const ServiceSectionTables = dynamic(
  () => import("@/components/common/ServiceSectionTables")
);
const ServiceSectionFAQ = dynamic(
  () => import("@/components/common/ServiceSectionFAQ")
);
const GSTWhoMustFileGSTReturns = dynamic(
  () =>
    import("@/components/services/GST return filing/GSTWhoMustFileGSTReturns")
);
const GSTDocumentRequiredForFiling = dynamic(
  () =>
    import(
      "@/components/services/GST return filing/GSTDocumentRequiredForFiling"
    )
);
const GSTWhatYouGet = dynamic(
  () => import("@/components/services/GST return filing/GSTWhatYouGet")
);
const GSTPenaltyForLateGst = dynamic(
  () => import("@/components/services/GST return filing/GSTPenaltyForLateGst")
);
const GSTWhatHappenIfIFileGstLate = dynamic(
  () =>
    import(
      "@/components/services/GST return filing/GSTWhatHappenIfIFileGstLate"
    )
);

export const metadata: Metadata = {
  title: "GST Return Filing Online",
  description:
    "GST return filing online made easy with expert support. Ensure accurate GSTR filing, stay compliant with GST laws, avoid penalties, and claim full ITC.",
  keywords: [
    "gst return filing online",
    "GSTR filing",
    "file gst return online",
  ],
};

const page = () => {
  return (
    <div className="overflow-hidden">
      <ServiceSectionHero heroSectionData={gstHeroData} />
      <ServiceSectionWhy WhyData={gstWhyFile} />
      <GSTWhoMustFileGSTReturns />
      <GSTDocumentRequiredForFiling />
      <ServiceSectionTables tableData={gstReturnFilingTableData} />
      <GSTWhatYouGet />
      <GSTPenaltyForLateGst />
      <GSTWhatHappenIfIFileGstLate />
      <ServiceSectionFAQ faqData={gstFaqData} />
    </div>
  );
};

export default page;
