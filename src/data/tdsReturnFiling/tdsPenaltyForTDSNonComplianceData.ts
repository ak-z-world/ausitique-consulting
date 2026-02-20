import { ServiceTableTypes } from "@/types";

export const tdsPenaltyForTDSNonComplianceData: ServiceTableTypes = {
  tableTitle: "Penalty for TDS Non-Compliance",
  tableHeadData: ["Type of Default", "Penalty",],
  tableBodyData: [
    {
      columnOne: "Late Deduction",
      columnTwo: "1% interest per month",

    },
    {
      columnOne: "Late Deposit",
      columnTwo: "1.5% interest per month",
      
    },
    {
      columnOne: "Late Filing",
      columnTwo: "₹200/day up to TDS amount",
      
    },
    {
      columnOne: "Non-Filing/Remittance",
      columnTwo: "Penalty equal to TDS amount",
    },
  ],
};
