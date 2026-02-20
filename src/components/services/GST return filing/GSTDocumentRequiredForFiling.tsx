/* eslint-disable @next/next/no-img-element */

import React from "react";

const data = [
  "GSTIN and login credentials",
  "Sales invoices (B2B, B2C & exports)",
  "Purchase invoices",
  "Expense records",
  "Credit/debit notes",
  "GSTR-2B / GSTR-2A reconciliation",
  "Bank statements (for matching turnover)",
  "E-Way bills (if applicable)",
  "Input tax credit (ITC) detail",
];
const GSTDocumentRequiredForFiling = () => {
  return (
    <section className="bg-white general-sans p-5 sm:p-8 md:p-10 lg:p-14 xl:p-16">
      <div className="flex gap-10">
        <div className="w-1/2">
          <p className="text-2xl sm:text-3xl font-Bricolage_Grotesque md:text-4xl lg:text-5xl font-semibold">
            Documents Required for GST Return Filing
          </p>

          <ol className="mt-5 list-disc list-inside flex flex-col gap-2">
            {/* <li></li> */}
            {data.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>

        <div>
          <img src="/images/dcoument-required-for-gst-return.svg" alt="" className="h-[80%]" />
        </div>
      </div>
    </section>
  );
};

export default GSTDocumentRequiredForFiling;
