import dynamic from "next/dynamic";

const ContactUsHero = dynamic(
  () => import("@/components/contact/ContactUsHero")
);
const ContactUsForm = dynamic(
  () => import("@/components/contact/ContactUsForm")
);
// const ContactEmpowerYourBusiness = dynamic(() => import("@/components/contact/ContactEmpowerYourBusiness"));
// const ContactTrustedInsights = dynamic(() => import("@/components/contact/ContactTrustedInsights"));
const ContactFollowUs = dynamic(
  () => import("@/components/contact/ContactFollowUs")
);

import type { Metadata } from "next";
import ContactTrustedInsights from "@/components/contact/ContactTrustedInsights";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Get in touch with Auditique Consulting for expert tax, compliance, and business consulting services in India. We’re here to support your growth — contact us today!",
  keywords: [
    "Contact Auditique Consulting",
    "Tax Consulting Services",
    "Financial consulting services",
    "Tax Advisor online",
  ],
};

const contact = () => {
  return (
    <div className=" bg-gradient-to-br  from-[#212121] to-[#070707] overflow-hidden">
      <ContactUsHero />
      <ContactUsForm />
      {/* <ContactEmpowerYourBusiness/> */}
      <ContactFollowUs />
      {/* <ContactTrustedInsights/> */}
    </div>
  );
};

export default contact;
