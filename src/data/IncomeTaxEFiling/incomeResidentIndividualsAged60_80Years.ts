import { ServiceTableTypes } from "@/types";

export const incomeResidentIndividualsAged60_80Years: ServiceTableTypes = {
  tableHeadData: ["Income Slabs","Income Tax Returns"],
  tableBodyData: [
    {
      columnOne: "Up to Rs. 3  lakh",
      columnTwo: "Nil",
    },
    {
      columnOne: "Rs. 3 lakh - Rs. 5 lakh" ,
      columnTwo: "5%",
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
