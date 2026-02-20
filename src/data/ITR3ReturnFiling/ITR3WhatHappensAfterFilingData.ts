import { serviceListTypes } from "@/types";

export const ITR3WhatHappensAfterFilingData: serviceListTypes = {
  heading: "What Happens After Filing?",
  bulletPoints: [
    {
      text: "E-Verify Return:",
      subPoints: [
        "Use Aadhaar OTP or EVC. If that fails, send signed ITR-V to CPC Bengaluru for completion.",
      ],
    },
    {
      text: "Track Status",
      subPoints: [
        " Monitor return processing, notice issuance, and refund status.",
      ],
    },
    {
      text: "Revise If Needed:",
      subPoints: [
        " File a revised return under Section 139(5) in case of errors.",
      ],
    },
    {
      text: "Respond to Notices:",
      subPoints: [
        "Get expert support from Auditique Consulting if you receive IT department queries or notices.",
      ],
    },
  ],
};
