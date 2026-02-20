import { incomeResidentIndividualsAged60_80Years } from "@/data";
import React from "react";

const ITRResidentIndividualsAged60_80Years = () => {
  return (
    <section className=" general-sans bg-white px-5 py-4 sm:px-8 sm:py-7 md:px-10 md:py-8 lg:px-14  lg:py-10 xl:px-16 ">
      <p className="text-2xl sm:text-3xl font-Bricolage_Grotesque md:text-4xl lg:text-5xl font-semibold">
        Resident Individuals Aged 60-80 Years
      </p>
      <p className="text-lg font-medium mt-2">
        Taxpayers above 60 years of age and below 80 years enjoy a basic
        exemption limit of Rs.3 lakhs, making income up to Rs.3 lakh exempt from
        tax.
      </p>

      <section className="bg-white text-black general-sans">
        {/* Heading */}
        <div className="will-change-transform translate-z-0">
          <p className="text-4xl md:text-5xl font-semibold leading-tight">
            {incomeResidentIndividualsAged60_80Years.tableTitle}
          </p>
          {/* <p className="text-4xl md:text-5xl">You May Need to File</p> */}
        </div>

        {/* Table */}

        <div className="overflow-x-auto">
          <table className="border border-black  mt-10 w-full text-left rounded-lg overflow-hidden will-change-transform translate-z-0">
            <thead className="bg-white/10">
              {/* Dynamic Headers */}
              <tr>
                {incomeResidentIndividualsAged60_80Years.tableHeadData.map(
                  (heading, i) => (
                    <th
                      key={i}
                      className="border border-black p-4 px-6 md:px-8"
                    >
                      {heading}
                    </th>
                  )
                )}
              </tr>
            </thead>

            <tbody>
              {incomeResidentIndividualsAged60_80Years.tableBodyData.map(
                (row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="hover:bg-white/10 transition-colors duration-300 will-change-transform translate-z-0"
                  >
                    {Object.values(row).map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="border border-black p-4 px-6 md:px-12"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
};

export default ITRResidentIndividualsAged60_80Years;
