import { serviceListTypes } from "@/types";

export const incomeTaxWhoNeedsToFile: serviceListTypes = {
  heading: "Who Needs to File ITR in India?",

  bulletPoints: [
    {
      text: "Salaried Individuals"      ,
      subPoints: [" If your annual income exceeds the basic exemption limit (₹2.5L–₹5L based on age), you must file."],
    },
    {
      text: "Self-Employed Professionals",
      subPoints: [
       " Freelancers, consultants, doctors, and others with taxable income must e-file ITR."
      ],
    },
    {
      text: "Business Owners (SMEs, Startups, LLPs, Companies)",
      subPoints: [" All businesses—profit or loss—must file annual returns."],
    },
    {
      text: "NRIs & RNORs",
      subPoints: ["Required to file if earning in India or holding foreign assets/income."],
    },
    {
      text: "Capital Gains / Dividend / Interest Earners",
      subPoints: ["Income from crypto, stocks, mutual funds, FDs, or bonds must be reported."],
    },
    {
     text: "Foreign Asset Holders",
     subPoints: ["Even if income is below threshold, ITR is mandatory for overseas assets."],
   },
   {
     text: "High-Value Transactions",
     subPoints: ["High-Value Transactions must be filed if you have deposited ₹1 crore or more in current accounts, spent ₹2 lakh or more on foreign travel, or paid ₹1 lakh or more in annual electricity bills."],
   },
   {
     text: "Refund Claimants",
     subPoints: [" Claiming TDS refund? Filing ITR is a must."],
   },
   {
     text: "Charitable & Religious Trusts",
     subPoints: ["Must file returns for accountability and tax compliance."],
   },
  ],
};
