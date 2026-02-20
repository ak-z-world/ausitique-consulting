import { serviceListTypes } from "@/types";

export const ITR4WhatHappensAfterFilingData: serviceListTypes = {
  heading: "What Happens After Filing?",
  bulletPoints: [
    {
      text: "E-Verify Online:",
      subPoints: [
        "Use Aadhaar OTP or EVC. If that fails, send signed ITR-V to CPC Bengaluru for completion.",
      ],
    },


    {
     text: "Track Status:",
     subPoints: [
       "Monitor your ITR and refund status via the income tax portal.",
     ],
   },
   {
     text: "Need a Correction?",
     subPoints: [
       " File a Revised Return under Section 139(5).",
     ],
   },
   {
     text: " Got a Notice?",
     subPoints: [
       " Get expert help from Auditique Consulting to respond correctly.",
     ],
   },
  ],
};
