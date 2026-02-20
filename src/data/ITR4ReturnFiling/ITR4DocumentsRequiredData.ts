import { serviceListTypes } from "@/types";

export const ITR4DocumentsRequiredData: serviceListTypes = {
  heading: "Documents Required for ITR-4 Filing",
  bulletPoints: [
    {
      text: "Personal Info:",
      subPoints: ["PAN & Aadhaar Card", "Bank Account Details"],
    },
    {
      text: "Income Proof:",
      subPoints: [
        "Bank Statements",
        "Details of business turnover or professional receipts",
        "Vehicle details (for 44AE cases)",
      ],
    },
    {
      text: "TDS & Tax Paid Info:",
      subPoints: ["Form 26AS", "Advance tax or self-assessment challans"],
    },
    {
      text: "Deductions (if applicable):",
      subPoints: ["Investment proofs for Sections 80C, 80D, etc."],
    },
  ],
};
