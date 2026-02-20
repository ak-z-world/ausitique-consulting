import { ServiceTableTypes } from "@/types";

export const incomeResidentIndividualsAgedMoreThan80Years: ServiceTableTypes = {
  tableHeadData: ["Income Slabs","Income Tax Returns"],
  tableBodyData: [
    {
      columnOne: "Up to Rs. 5 lakh" ,
      columnTwo: "NIl",
    },
    {
      columnOne: "Rs. 5 lakh - Rs. 10 lakh",
      columnTwo: "20%",
    },

    {
      columnOne: "Above Rs 10 lakh",
      columnTwo: "30%",
    },
    
  ],
};
