import React from "react";

const data = [
  "Expert CA Assistance",
  "Accurate Form Selection & Filing",
  "Deductions Maximized for Savings",
  "Compare Old vs New Tax Regimes",
  "Quick Filing & Acknowledgement",
  " Real-Time Tracking of ITR Status",
];

const ITR1FinanceServices = () => {
  return (
    <section className="bg-white p-5 sm:p-8 md:p-10  xl:p-16 general-sans">
      {/* <p className="text-xs">Finance Services</p> */}

      <div className="flex  justify-between gap-8 mt-2">
        <div className="font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl lg:w-[70%]">
          {/* <p>Financial Management,</p>
          <p>
            <span className="text-[#616161]">Analysis</span> , And Operations
          </p> */}
          <p>Why Choose Yes to Boss for ITR-1 Filing?</p>
        </div>

        {/* <p className="text-xs ">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. It is a long
          established fact that a reader will be distracted
        </p> */}
      </div>

      <div className="flex flex-col md:flex-row flex-wrap justify-between mt-16 gap-5 md:gap-8">
        <div className="flex  flex-col gap-5 md:gap-8 ">
          {data.slice(0, 3).map((item, index) => (
            <div key={index} className="flex flex-col">
              <div
                
                className="flex flex-grow  items-start gap-5 text-[#292833] sm:items-center"
              >
                <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[76px] font-medium h-fit">
                  0{index + 1}
                </p>

                
                  <p className="text-xl md:text-2xl font-medium xl:font-semibold">
                    {item}
                  </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border hidden lg:block border-b border-black/40"></div>

        <div className="flex  flex-col gap-5 md:gap-8 ">
          {data.slice(3).map((item, index) => (
            <div key={index}
            className="flex flex-col">
              <div
                className="flex flex-grow items-start  gap-5 text-[#292833] sm:items-center"
              >
                <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[76px] font-medium h-fit">
                  0{index+4}
                </p>

                  <p className="text-xl md:text-2xl font-medium xl:font-semibold">
                    {item}
                  </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITR1FinanceServices;
