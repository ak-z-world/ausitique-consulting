import { incomeNewTaxRegimeFY2024_25 } from "@/data";

const ITRNewTaxRegimeFY2024_25 = () => {
  return (
    <section className=" general-sans bg-white px-5 py-4 sm:px-8 sm:py-7 md:px-10 md:py-8 lg:px-14  lg:py-10 xl:px-16 ">
      <p className="text-2xl sm:text-3xl font-Bricolage_Grotesque md:text-4xl lg:text-5xl font-semibold">
        New Tax Regime – FY 2024–25
      </p>
      <p className="text-lg font-medium mt-2">
        Exemption Limit for All Individuals (irrespective of age): ₹3,00,000
      </p>
      <p className="text-lg font-medium">Slab Rates (FY 2024–25):</p>
      <p className="text-lg font-medium">Income Tax Slab for New Regime - FY 2024-25</p>

      <p className="text-base sm:text-lg md:text-xl mt-3">
        If you&apos;re filing your income tax return for FY 2024-25, these are the
        tax slabs that apply to the income earned between 1st April 2024 and
        31st March 2025.The Duw date for filing your return is 15th September
        for non-audit cases and 31st October for audit cases.
      </p>

      <section className="bg-white text-black general-sans">
        {/* Heading */}
        <div className="will-change-transform translate-z-0">
          <p className="text-4xl md:text-5xl font-semibold leading-tight">
            {incomeNewTaxRegimeFY2024_25.tableTitle}
          </p>
          {/* <p className="text-4xl md:text-5xl">You May Need to File</p> */}
        </div>

        {/* Table */}

        <div className="overflow-x-auto">
          <table className="border border-black  mt-10 w-full text-left rounded-lg overflow-hidden will-change-transform translate-z-0">
            <thead className="bg-white/10">
              {/* Dynamic Headers */}
              <tr>
                {incomeNewTaxRegimeFY2024_25.tableHeadData.map((heading, i) => (
                  <th key={i} className="border border-black p-4 px-6 md:px-8">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {incomeNewTaxRegimeFY2024_25.tableBodyData.map(
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

      <p className="text-base sm:text-lg md:text-xl mt-5">
        Section 87A provides a rebate for individual taxpayers whose income is
        below a specified threshold. Under the new tax regime, the limit is Rs.
        7 lakh
      </p>
    </section>
  );
};

export default ITRNewTaxRegimeFY2024_25;
