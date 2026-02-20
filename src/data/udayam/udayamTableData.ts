import { ServiceTableTypes } from "@/types";

export const udayamTableData: ServiceTableTypes = {

  tableTitle:' MSME Classification (Revised in Union Budget 2025)',
  tableHeadData: ["Category","Investment Limit","Turnover Limit"],
  tableBodyData: [
    {
      columnOne: "Micro",
      columnTwo: "Up to ₹2.5 crore",
      columnThree: "Up to ₹10 crore",
    },
    {
      columnOne: "Small",
      columnTwo: "Up to ₹25 crore",
      columnThree: "Up to ₹100 crore",
    },
    {
      columnOne: "Medium",
      columnTwo: "Up to ₹125 crore",
      columnThree: "Up to ₹500 crore",
    },
  ],
};
