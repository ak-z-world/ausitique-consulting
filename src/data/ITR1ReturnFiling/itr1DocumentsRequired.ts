import { serviceListTypes } from "@/types";

export const itr1DocumentsRequired: serviceListTypes = {
  heading: "Documents Required for ITR-1 Filing",
  bulletPointsTitle:
    "While ITR-1 is annexure-less, keep these ready for accuracy and future reference",
  bulletPoints: [
    {
      text: "Personal Details:",
      subPoints: [
        "PAN Card",
        "Aadhaar Card (linked)",
        "Bank Account Details (for refunds)",
      ],
    },
    {
      text: "Income Proofs:",
      subPoints: [
        "Form 16 (from all employers)",
        "Form 26AS & AIS Statement",
        "Salary Slips & Rent Receipts (for HRA claims)",
        "Interest Certificates (FDs, savings accounts)",
      ],
    },
    {
      text: "Personal Details:",
      subPoints: [
        "LIC, ELSS, PPF investment receipts (Section 80C)",
        "Health insurance receipts (Section 80D)",
        "Home Loan Interest Certificate",
        "Donations (Section 80G)",
      ],
    },
    {
      text: "Personal Details:",
      subPoints: [
        "PAN Card",
        "Aadhaar Card (linked)",
        "Bank Account Details (for refunds)",
      ],
    },
    {
      text: "Others",
      subPoints: [
        "Bank passbooks or fixed deposit statements",
        "Education Loan Interest Certificates",
      ],
    },
  ],
};
