import React from "react";

const ITR4StructureOfForm = () => {
  return (
    <section className="general-sans bg-white px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-12 lg:py-10 xl:px-16 xl:py-12">
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Bricolage_Grotesque font-semibold leading-snug">
        Structure of ITR-4 Form
      </p>

      <ol className="list-disc list-inside mt-5 space-y-2 text-base sm:text-lg md:text-xl">
        <li>Part A: General Information (PAN, address, contact)</li>
        <li>
          Part B: Gross Total Income (salary, business, house property, others)
        </li>
        <li>Part C: Deductions (80C, 80D, 80E, etc.) & Taxable Income</li>
        <li>
          Part D: Tax Computation (tax, surcharge, cess, advance tax, refunds)
        </li>
      </ol>

      <p className="mt-5 text-lg sm:text-xl md:text-2xl font-medium">
        Schedules:
      </p>

      <ol className="list-disc list-inside  space-y-2 text-base sm:text-lg md:text-xl">
        <li>Schedule IT: Advance/self-assessment tax</li>
        <li>Schedule TDS/TCS: TDS on salary & other income</li>
        <li>Schedule 44AD/44ADA/44AE: Details under presumptive schemes</li>
      </ol>

      <p className="mt-5 text-lg sm:text-xl md:text-2xl font-medium">
        Annexure-less Filing
      </p>

      <p className="text-base sm:text-lg md:text-xl">No documents required to be attached. Keep all proofs handy</p>
    </section>
  );
};

export default ITR4StructureOfForm;
