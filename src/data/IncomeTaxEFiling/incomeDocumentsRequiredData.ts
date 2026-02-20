import { serviceListTypes } from "@/types";

export const incomeDocumentsRequiredData: serviceListTypes = {
  heading: "Documents Required for ITR e-Filing",

  bulletPoints: [
    {
      text: "Personal Details",
      subPoints: [
        "PAN Card",
        "Aadhaar Card (linked)",
        "Bank Account Details (for refund)",
      ],
    },
    {
      text: "Income Proofs",
      subPoints: [
        "Salary Slips",
        "Form 16 (Salary TDS)",
        "Form 16A/16B (Other TDS)",
        "Capital gains reports",
        "Rent receipts (for HRA)",
        "Form 26AS / AIS Statement",
      ],
    },
    {
      text: "Deduction Proofs (80C / 80D / 80G etc.)",
      subPoints: [
        "Life/Health Insurance Receipts",
        "Home Loan Interest Statement",
        "Investment Proofs (ELSS, PPF, NSC, LIC)",
        "Donations Receipts",
      ],
    },
  ],
};
