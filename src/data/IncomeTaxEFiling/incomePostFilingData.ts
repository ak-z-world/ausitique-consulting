import { serviceListTypes } from "@/types";

export const incomePostFilingData: serviceListTypes = {
  heading: "Post-Filing: What to Do Next?",

  bulletPoints: [
    {
      text: "E-Verify Your ITR",
      subPoints: [
        "Use Aadhaar OTP or EVC. If that fails, send signed ITR-V to CPC Bengaluru for completion.",
      ],
    },
    {
      text: "Track Return Status",
      subPoints: [
        " Log in to the Income Tax portal to monitor filing, processing, or refund status.",
      ],
    },
    {
      text: "Respond to IT Notices (if any)",
      subPoints: [" Get expert help for replies or rectifications."],
    },
    {
      text: "Ensure Refund Credit",
      subPoints: [" Pre-validate your bank account to receive refunds."],
    },
  ],
};
