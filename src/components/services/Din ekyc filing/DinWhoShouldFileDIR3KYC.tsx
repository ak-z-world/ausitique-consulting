import React from "react";

const DinWhoShouldFileDIR3KYC = () => {
  return (
    <section className="general-sans text-black bg-white px-5 py-4 sm:px-8 sm:py-7 md:px-10 md:py-8 lg:px-14 lg:py-10 xl:px-16">
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Bricolage_Grotesque font-semibold leading-snug">
        Who Should File DIR-3 KYC?
      </p>

      <p className=" mt-2 text-lg sm:text-xl md:text-2xl font-medium
">
        Any person who has been allotted a DIN on or before March 31 of the
        financial year and whose DIN status is ‘Approved’ must file Form DIR-3
        KYC every year.
      </p>

      <p className="mt-8 text-lg font-medium">This Include:</p>

      <ul className=" list-inside list-disc ml-6 space-y-1 text-base sm:text-lg md:text-xl mb-2
">
        <li>Existing directors of companies</li>
        <li>Disqualified directors</li>
        <li>Directors of LLPs or other registered entities</li>
      </ul>
    </section>
  );
};

export default DinWhoShouldFileDIR3KYC;
