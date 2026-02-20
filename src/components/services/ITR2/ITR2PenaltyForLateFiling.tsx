import React from "react";

const ITR2PenaltyForLateFiling = () => {
  return (
    <section className="general-sans bg-white px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-12 lg:py-10 xl:px-16 xl:py-12">
      <p className="text-2xl sm:text-3xl font-Bricolage_Grotesque md:text-4xl lg:text-5xl font-semibold">
        Penalty for Late Filing ITR-2
      </p>

      <table className="mt-8">
        <thead>
          <tr>
            <th className="p-4 px-6 md:px-8 border">Total Income</th>
            <th className="p-4 px-6 md:px-8 border">Late Fee</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="p-4 px-6 md:px-8 border">Below ₹5 lakh</td>
            <td className="p-4 px-6 md:px-8 border">₹1,000</td>
          </tr>
          <tr>
            <td className="p-4 px-6 md:px-8 border">above ₹5 lakh</td>
            <td className="p-4 px-6 md:px-8 border">₹5,000</td>
          </tr>
        </tbody>
      </table>

      <p className="mt-5 font-medium text-xl">
        Unpaid taxes also incur 1% monthly interest. Late filing may:
      </p>

      <ul className="list-disc list-inside mt-2 space-y-2 text-lg">
        <li className="text-base sm:text-lg md:text-xl mb-2">Lead to notices or prosecution</li>
        <li className="text-base sm:text-lg md:text-xl mb-2">Result in loss of refund eligibility</li>
        <li className="text-base sm:text-lg md:text-xl mb-2">Prevent carry forward of losses</li>
      </ul>
    </section>
  );
};

export default ITR2PenaltyForLateFiling;
