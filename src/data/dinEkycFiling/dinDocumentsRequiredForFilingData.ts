import { serviceListTypes } from "@/types";

export const dinDocumentsRequiredForFilingData: serviceListTypes = {
  heading: "Documents Required for DIN eKYC Filing",
  bulletPoints: [
    {
      text: "Digital Signature Certificate (DSC)",
      subPoints: [" Linked to the individual’s PAN"],
    },
    {
      text: "PAN Card",
      subPoints: ["Self-attested copy"],
    },
    {
      text: "Proof of Address",
      subPoints: [" Self-attested Aadhaar Card / Voter ID / Driving License"],
    },

    {
      text: "Passport Size Photograph",
      subPoints: [" Self-attested (mandatory for foreign nationals)"],
    },

    {
      text: "Mobile Number and Email ID",
      subPoints: ["Personal mobile and email for OTP verification"],
    },

    {
      text: "Other Personal Details",
      subPoints: ["Including nationality, citizenship, and residential status"],
    },
  ],
};
