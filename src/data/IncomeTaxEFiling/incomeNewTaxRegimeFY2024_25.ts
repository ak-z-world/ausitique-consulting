import { ServiceTableTypes } from "@/types";

export const incomeNewTaxRegimeFY2024_25: ServiceTableTypes = {
  tableHeadData: [
    "New Income tax slabs for FY 2024-25 (AY 2025-26)",
    "New Income tax rate for FY 2024-25 (AY 2025-26)",
  ],
  tableBodyData: [
    {
      columnOne: "Up to Rs. 3 lakh",
      columnTwo: "Nil",
    },
    {
      columnOne: "Rs. 3 lakh - Rs. 7 lakh",
      columnTwo: "5%",
    },
    {
      columnOne: "Rs. 7 lakh - Rs. 10 lakh",
      columnTwo: "10%",
    },

    {
      columnOne: "Rs. 10 lakh - Rs. 12 lakh",
      columnTwo: "15%",
    },
    
    {
     columnOne: "Rs. 12 lakh - Rs. 15 lakh",
     columnTwo: "20%",
   },
   {
     columnOne: "Above Rs. 15 lakh",
     columnTwo: "30%",
   },
  ],
};
