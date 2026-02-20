import { serviceListTypes } from "@/types";

export const ITR3DocumentsRequiredData: serviceListTypes = {
  heading: "Documents Required for ITR-3 Filing",
  bulletPointsTitle:
    "While ITR-3 is annexure-less, the following documents are essential:",
  bulletPoints: [
    {
      text: "Personal Details",
      subPoints: ["PAN Card", "Aadhaar Card", "Bank account details"],
    },
    {
      text: "Income Documents",
      subPoints: [
        "Form 16 / Salary slips",
        "Profit & loss account and balance sheet (if applicable)",
        "Capital gains statements",
        "Interest income statements",
      ],
    },
    {
      text: "Business/Profession Related",
      subPoints: ["Books of accounts", "Audit reports (if applicable)"],
    },
    {
      text: "Foreign Income/Asset (if any)",
      subPoints: ["Details of foreign bank accounts, investments, or properties"],
    },
    {
      text: "Deduction Proofs",
      subPoints: ["80C, 80D, 80G, etc. (LIC, health insurance, donations)"],
    },
  ],
};
