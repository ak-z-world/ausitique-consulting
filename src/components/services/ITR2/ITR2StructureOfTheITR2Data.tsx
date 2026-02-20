import React from "react";

const ITR2StructureOfTheITR2Data = () => {
  return (
    <section className="general-sans bg-white px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-12 lg:py-10 xl:px-16 xl:py-12">
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Bricolage_Grotesque font-semibold leading-snug">
        Structure of the ITR-2 Form
      </p>

      <p className="mt-5 text-lg sm:text-xl md:text-2xl font-medium">
        ITR-2 is divided into major parts and multiple schedules:
      </p>

      <ol className="list-disc list-inside mt-2">
        <li className="text-base sm:text-lg md:text-xl mb-2">Part A: Personal details like Name, PAN, Aadhaar, etc.</li>
        <li className="text-base sm:text-lg md:text-xl mb-2">
          Part B-TI: Computation of Total Income (salary, capital gains, etc.)
        </li>
        <li className="text-base sm:text-lg md:text-xl mb-2">Part B-TTI: Computation of Tax Liability</li>
      </ol>

      <p className="mt-5 text-lg sm:text-xl md:text-2xl font-medium">Verification Section </p>
      <p className=" text-lg sm:text-xl md:text-2xl font-medium">Schedules Include: </p>

      <ol className="list-disc list-inside mt-2  space-y-2 text-lg">
        <li className="text-base sm:text-lg md:text-xl mb-2"> Capital Gains (Schedule CG)</li>
        <li className="text-base sm:text-lg md:text-xl mb-2">Foreign Assets (Schedule FA)</li>
        <li className="text-base sm:text-lg md:text-xl mb-2">Deductions (80C to 80U)</li>
        <li className="text-base sm:text-lg md:text-xl mb-2">TDS/TCS, Advance Tax, and Relief Claims</li>
      </ol>
    </section>
  );
};

export default ITR2StructureOfTheITR2Data;
