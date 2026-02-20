import { serviceListTypes } from "@/types";

export const GSTDocumentsRequiredData: serviceListTypes = {
  heading: "Documents Required for GST Registration",
  bulletPoints: [
    {
      text: "For Individuals / Sole Proprietors",
      subPoints: [
        "PAN Card",
        "Aadhaar Card",
        "Passport-size Photograph",
        "Business Address Proof (Rent Agreement + NOC / Utility Bill / Property Tax)",
        "Bank Account Details (Cancelled Cheque or Statement)",
      ],
    },

    {
      text: "For Partnerships / LLPs",
      subPoints: [
        "PAN & Aadhaar of all Partners",
        "Partnership Deed",
        "Aadhaar of Authorized Signatory",
        "Proof of Appointment",
        "Business Address Proof (Rent Agreement + NOC / Utility Bill / Property Tax)",
        "Bank Account Details (Cancelled Cheque or Statement)",
      ],
    },

    {
      text: "For Companies",
      subPoints: [
        "PAN of Company",
        "Certificate of Incorporation",
        "PAN & Aadhaar of Directors and Signatories",
        "Board Resolution for Authorized Signatory",
        "Business Address Proof (Rent Agreement + NOC / Utility Bill / Property Tax)",
        "Bank Account Details (Cancelled Cheque or Statement)",
      ],
    },
    {
      text: "Exempted Goods/Services Dealers",
      subPoints: [
        " If you exclusively deal in GST-exempt goods or services, you’re not required to register — unless you cross other legal thresholds.",
      ],
    },
  ],
};
