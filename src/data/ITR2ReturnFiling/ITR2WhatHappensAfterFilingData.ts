import { serviceListTypes } from "@/types";

export const ITR2WhatHappensAfterFilingData: serviceListTypes = {
  heading: "What Happens After Filing?",
  bulletPointsTitle:
    "ITR-2 is applicable to individuals and HUFs with income from:",
  bulletPoints: [
    {
      text: " E-Verify Return:",
      subPoints: [
        "Use Aadhaar OTP or EVC. If that fails, send signed ITR-V to CPC Bengaluru for completion.",
      ],
    },
    {
     text: "Track Status:",
     subPoints: [
       "Monitor ITR processing and refund status online.",
     ],
   },
   {
     text: "Revise If Needed:",
     subPoints: [
       "Made an error? File a revised return under Section 139(5).",
     ],
   },
   {
     text: "Respond to Notices:",
     subPoints: [
       "Get professional help to address any IT department queries.",
     ],
   },
  ],
};
