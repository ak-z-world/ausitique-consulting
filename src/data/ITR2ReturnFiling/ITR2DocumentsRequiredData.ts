import { serviceListTypes } from "@/types";

export const ITR2DocumentsRequiredData: serviceListTypes = {
  heading: "Documents Required for ITR-2 Filing",
  bulletPointsTitle:
    " ITR-2 is annexure-less, but these documents are essential for correct filing:",
  bulletPoints: [
    {
      text: " Personal Details:",
      subPoints: [" PAN Card", "Aadhaar Card", "Bank Account Details"],
    },
    {
      text: "Income Documents:",
      subPoints: [
        "Form 16 / 16A (for salary & TDS)",
        "Form 26AS, AIS, and TIS",
        "Capital Gains Statements (shares/property)",
        "Interest Income Statements",
      ],
    },
    {
      text: "Foreign Income or Asset Documents (if applicable):",
      subPoints: [" Bank and investment records abroad"],
    },
    {
      text: "Deduction Proofs:",
      subPoints: [
        "LIC, ELSS, PPF (Section 80C)",
        "Health Insurance (80D)",
        "Education Loan, Home Loan, Donations",
      ],
    },
  ],
};
