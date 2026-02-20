import React from "react";

const ITR1FilingDueDate = () => {
  return (
    <section className=" general-sans bg-white px-5 py-4 sm:px-8 sm:py-7 md:px-10 md:py-8 lg:px-14  lg:py-10 xl:px-16 ">
      <p className="text-2xl sm:text-3xl font-Bricolage_Grotesque md:text-4xl lg:text-5xl font-semibold">
        ITR-1 Filing Due Date
      </p>

      <ol className="list-disc list-inside mt-2 text-lg">
        <li>
          {" "}
          <span className="font-semibold"> Individuals (Non-Audit) </span>: 15 Sept 2025
        </li>
        <li>
          <span className="font-semibold"> Audit Cases </span>: 31 Oct 2025
        </li>
        <li>
          <span className="font-semibold"> Transfer Pricing </span>: 30 Nov 2025
        </li>
        <li>
          <span className="font-semibold"> Revised / Belated Returns </span>: 31 Dec 2025
        </li>
        <li>
          <span className="font-semibold"> Updated Return </span>: 12 months from the end of the relevant
          assessment year
        </li>
      </ol>
    </section>
  );
};

export default ITR1FilingDueDate;
