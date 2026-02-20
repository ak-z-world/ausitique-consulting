import React from "react";

const ITREligibilityFiling = () => {
  return (
    <section className=" general-sans bg-white px-5 py-4 sm:px-8 sm:py-7 md:px-10 md:py-8 lg:px-14  lg:py-10 xl:px-16 ">
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Bricolage_Grotesque font-semibold leading-snug">
        Eligibility for ITR Filing in India
      </p>

      <p className="mt-2 font-medium text-xl">
        If your gross income exceeds exemption limits, you’re required to file
        an ITR.
      </p>
      <p className="text-lg font-medium">Old Tax Regime – FY 2024–25</p>
      <p className="text-lg font-medium">Exemption Limits Based on Age</p>

      <ul className="list-disc list-inside mt-2 space-y-2  text-base sm:text-lg md:text-xl">
        <li> Below 60 years: ₹2,50,000</li>
        <li>60–80 years (Senior Citizens): ₹3,00,000</li>
        <li>80+ years (Super Senior Citizens): ₹5,00,000</li>
      </ul>
    </section>
  );
};

export default ITREligibilityFiling;
