import React from "react";

const DinTypesOfDIR3KYCForms = () => {
  return (
    <section className="general-sans text-black bg-white px-5 py-4 sm:px-8 sm:py-7 md:px-10 md:py-8 lg:px-14 lg:py-10 xl:px-16">
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Bricolage_Grotesque font-semibold leading-snug">
        Types of DIR-3 KYC Forms
      </p>

      <p className="mt-8  text-lg sm:text-xl md:text-2xl font-medium">DIR-3 KYC eForm</p>
      <p className="mt-2  text-xl">
        {" "}
        For first-time filers or those who need to update mobile number, email,
        or other personal details.{" "}
      </p>

      <p className="mt-8  text-lg sm:text-xl md:text-2xl font-medium">      DIR-3 KYC Web Form      </p>
      <p className="mt-2  text-xl">
      For directors who have already filed DIR-3 KYC earlier and have no changes in personal details. A simplified version with auto-filled data via MCA portal.
      </p>
    </section>
  );
};

export default DinTypesOfDIR3KYCForms;
