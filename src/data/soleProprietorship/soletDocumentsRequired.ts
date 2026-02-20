import { serviceListTypes } from "@/types";

export const soletDocumentsRequired: serviceListTypes = {
  heading: "Documents Required",
  bulletPointsTitle: "Here’s what you’ll need for registration:",
  bulletPoints: [
    {
      text: "Identity Proof",
      subPoints: [
        "PAN Card (mandatory)",
        "Aadhaar Card",
        "Passport / Voter ID (optional)",
      ],
    },

    {
      text: "Address Proof for Business",
      subPoints: [
        "Rental Agreement + NOC (if rented)",
        "Electricity / Water Bill",
        "Property Tax Receipt (if owned)",
      ],
    },

    {
      text: "Business Registrations (As applicable)",
      subPoints: [
        "GST Registration",
        "Shops & Establishment License",
        "MSME (Udyam Registration)",
        "Professional Tax Certificate",
        "EPFO Registrations ( if More than 20 employees )",
        "FSSAI License (for food businesses)",
        "Trade License (from local municipal body)",
      ],
    },

    {
      text: "Bank Account Setup",
      subPoints: [
        "Passport-size photographs",
        "Business registration proofs",
        "Cancelled cheque or bank statement",
      ],
    },

    {
      text: "Industry-Specific Documents (if needed)",
      subPoints: [
        "Pollution Clearance",
        "Fire Safety Certificate",
        "Professional qualification certificates (e.g., CA, doctor, lawyer",
      ],
    },
  ],
};
