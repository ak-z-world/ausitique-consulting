"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { ServiceTableTypes } from "@/types";

type ServiceSectionWhyProps = {
  tableData: ServiceTableTypes;
};

const ServiceSectionTables: React.FC<ServiceSectionWhyProps> = ({
  tableData,
}) => {
  const headingRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLTableElement>(null);
  const rowRefs = useRef<HTMLTableRowElement[]>([]);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     // Animate heading
  //     gsap.from(headingRef.current, {
  //       opacity: 0,
  //       y: 40,
  //       duration: 1,
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: headingRef.current,
  //         start: "top 85%",
  //       },
  //     });

  //     // Animate table
  //     gsap.from(tableRef.current, {
  //       opacity: 0,
  //       y: 50,
  //       duration: 1,
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: tableRef.current,
  //         start: "top 85%",
  //       },
  //     });

  //     // Animate rows stagger
  //     rowRefs.current.forEach((row, i) => {
  //       gsap.from(row, {
  //         opacity: 0,
  //         y: 30,
  //         duration: 0.8,
  //         ease: "power2.out",
  //         delay: i * 0.15, // stagger effect
  //         scrollTrigger: {
  //           trigger: row,
  //           start: "top 120%",
  //           toggleActions: "play none none none",
  //         },
  //       });
  //     });
  //   });

  //   return () => ctx.revert();
  // }, []);

  return (
    // <section className={`bg-gradient-to-b text-white from-[#212121] to-[#070707] general-sans   p-5 sm:p-8 md:p-10 lg:p-14 xl:p-16 ${tableData.tableStyle} bg-white`}>

    <section
      className={`${
        tableData.tableStyle === "gradient"
          ? "bg-gradient-to-b from-[#212121] to-[#070707] text-white"
          : "bg-white text-black"
      }  general-sans px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-12 lg:py-10 xl:px-16 xl:py-12`}
    >
      {/* Heading */}
      <div ref={headingRef} className="will-change-transform translate-z-0">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Bricolage_Grotesque font-semibold leading-snug">
          {tableData.tableTitle}
        </p>
        {/* <p className="text-4xl md:text-5xl">You May Need to File</p> */}
      </div>

      {/* Table */}

      <div className="overflow-x-auto">
        <table
          ref={tableRef}
          className={`border ${
            tableData.tableStyle === "gradient"
              ? "border-white"
              : "border-black"
          }  mt-10 w-full text-left rounded-lg overflow-hidden will-change-transform translate-z-0`}
        >
          <thead className="bg-white/10">
            {/* Dynamic Headers */}
            <tr>
              {tableData.tableHeadData.map((heading, i) => (
                <th
                  key={i}
                  className={`border ${
                    tableData.tableStyle === "gradient"
                      ? "border-white"
                      : "border-black"
                  } p-4 px-6 md:px-8`}
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {tableData.tableBodyData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                ref={(el) => {
                  if (el) rowRefs.current[rowIndex] = el;
                }}
                className="hover:bg-white/10 transition-colors duration-300 will-change-transform translate-z-0"
              >
                {Object.values(row).map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`border ${
                      tableData.tableStyle === "gradient"
                        ? "border-white"
                        : "border-black"
                    } p-4 px-6 md:px-8`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ServiceSectionTables;
