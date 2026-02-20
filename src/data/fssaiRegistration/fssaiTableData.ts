import { ServiceTableTypes } from "@/types";

export const fssaiTableData: ServiceTableTypes = {

  tableTitle:' Types of FSSAI Registration',
  tableHeadData: ["Type of Registration", "Turnover Range", "Ideal For"],
  tableBodyData: [
    {
      columnOne: "Basic",
      columnTwo: "Up to ₹12 lakh",
      columnThree: "Home kitchens, petty vendors, small food units",
    },
    {
      columnOne: "State License",
      columnTwo: "₹12 lakh–₹20 crore",
      columnThree: "Mid-sized restaurants, caterers, local manufacturers",
    },
    {
      columnOne: "Central License",
      columnTwo: "Above ₹20 crore or multi-state operations",
      columnThree: "Large manufacturers, import/export businesses",
    },
  ],
  tableStyle:'gradient'
  
};
