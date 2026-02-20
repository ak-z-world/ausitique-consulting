const ITR1DocumentsRequired = () => {
  return (
    <section className=" general-sans bg-white px-5 py-4 sm:px-8 sm:py-7 md:px-10 md:py-8 lg:px-14  lg:py-10 xl:px-16 ">
      <p className="text-2xl sm:text-3xl font-Bricolage_Grotesque md:text-4xl lg:text-5xl font-semibold">
        Documents Required for ITR-1 Filing
      </p>

      <p className="mt-2 font-medium text-xl">
        While ITR-1 is annexure-less, keep these ready for accuracy and future
        reference
      </p>

      <ol className="list-decimal flex flex-col gap-3 list-inside mt-5 text-lg">
        <li className="font-semibold">
          Personal Details:
          <ul className="list-disc list-inside font-normal">
            <li>PAN Card</li>
            <li>Aadhaar Card (linked)</li>
            <li>Bank Account Details (for refunds)</li>
          </ul>
        </li>

        <li  className="font-semibold">
          Income Proofs:
          <ul className="list-disc list-inside font-normal">
            <li>Form 16 (from all employers)</li>
            <li>Form 26AS & AIS Statement</li>
            <li>Salary Slips & Rent Receipts (for HRA claims)</li>
            <li>Interest Certificates (FDs, savings accounts)</li>
          </ul>
        </li>

        <li className="font-semibold">
          Personal Details:
          <ul className="list-disc list-inside font-normal">
            <li>LIC, ELSS, PPF investment receipts (Section 80C)</li>
            <li>Health insurance receipts (Section 80D)</li>
            <li>Home Loan Interest Certificate</li>
            <li>Donations (Section 80G)</li>
          </ul>
        </li>

        <li className="font-semibold">
          Personal Details:
          <ul className="list-disc list-inside font-normal">
            <li>PAN Card</li>
            <li>Aadhaar Card (linked)</li>
            <li>Bank Account Details (for refunds)</li>
          </ul>
        </li>

        <li className="font-semibold">
          Others:
          <ul className="list-disc list-inside font-normal">
            <li>Bank passbooks or fixed deposit statements</li>
            <li>Education Loan Interest Certificates</li>
          </ul>
        </li>
      </ol>
    </section>
  );
};

export default ITR1DocumentsRequired;
