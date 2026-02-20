import { ServiceTableTypes } from "@/types";

export const tdsReturnFilingDueDatesData: ServiceTableTypes = {
  tableTitle: "TDS Return Filing Due Dates",
  tableHeadData: ["Quarter", "Period", "Due Date"],
  tableBodyData: [
    {
      columnOne: "Quarter 1",
      columnTwo: "Apr - Jun",
      columnThree: "31st July",
    },
    {
      columnOne: "Quarter 2",
      columnTwo: "Jul - Sep",
      columnThree: "31st October",
    },
    {
      columnOne: "Quarter 3",
      columnTwo: "Oct - Dec",
      columnThree: "31st January",
    },
    {
      columnOne: "Quarter 4",
      columnTwo: "Jan - Mar",
      columnThree: "31st May",
    },
  ],
};
