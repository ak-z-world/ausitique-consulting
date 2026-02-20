import { ServiceTableTypes } from "@/types";

export const gstReturnFilingTableData: ServiceTableTypes = {
  tableTitle: "Types of GST Returns You May Need to File",
  tableHeadData: ["Return", "Purpose", "Due Date"],
  tableBodyData: [
    {
      columnOne: "GSTR-1",
      columnTwo: "Details of outward supplies (sales)",
      columnThree: "11th of next month (Monthly) / 13th after quarter (QRMP)",
    },
    {
      columnOne: "GSTR-3B",
      columnTwo: "tax liabilities, ITC claimed, and net tax payable",
      columnThree: "20th (Monthly)",
    },
    {
      columnOne: "GSTR-4",
      columnTwo: "Annual return for Composition Scheme",
      columnThree: "30th April after FY",
    },

    {
      columnOne: "GSTR-5",
      columnTwo: "Return for non-resident taxpayers",
      columnThree: "20th of next month",
    },

    {
     columnOne: "GSTR-5A",
     columnTwo: "Return for OIDAR services",
     columnThree: "20th of each month",
   },


   {
     columnOne: "GSTR-6",
     columnTwo: "Input Service Distributors",
     columnThree: "13th of each month",
   },

   {
     columnOne: "GSTR-7",
     columnTwo: "TDS deductors",
     columnThree: "10th of each month",
   },

   {
     columnOne: "GSTR-8",
     columnTwo: "E-commerce operators",
     columnThree: "10th of each month",
   },

   {
     columnOne: "GSTR-9",
     columnTwo: "Annual return for regular taxpayers",
     columnThree: "31st Dec after FY",
   },

   {
     columnOne: "CMP-08",
     columnTwo: "Composition taxpayers (quarterly tax)",
     columnThree: "18th of month after quarter",
   },

   {
     columnOne: "GSTR-2A / 2B",
     columnTwo: "Inward supply reconciliation (read-only)",
     columnThree: "Auto-generated",
   },

   {
     columnOne: "GSTR-9C",
     columnTwo: "Reconciliation statement with audit",
     columnThree: "31st Dec after FY",
   },

   
   {
     columnOne: "ITC-04",
     columnTwo: "Job work related returns",
     columnThree: "Periodically",
   },
  ],
  tableStyle:'gradient'
};
