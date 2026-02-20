import { serviceListTypes } from "@/types";

export const tdsDocumentsRequiredData: serviceListTypes = {
  heading: "Documents Required for TDS Return Filing",

  bulletPoints: [
    {
      text: "Identification Details",
      subPoints: [
        "TAN & PAN of deductor",
        "PAN of all deductees",
        "Incorporation details (for businesses)",
      ],
    },

    {
      text: "Financial Information",
      subPoints: [
        "Challan details for TDS deposit",
        "Payment records (salary, rent, interest, etc.)",
        "Previous TDS returns (if any)",
      ],
    },

    {
      text: "Transaction Summary",
      subPoints: [
        "Total number of transactions for the quarter",
        "Nature of payments made",
        "Applicable TDS section (192, 194A, 194C, etc.)",
      ],
    },
  ],
};
