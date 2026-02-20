// import React from "react";

// const ITR1TypesOfGstReturns = () => {
//   return (
//     <section className="bg-gradient-to-b general-sans text-white from-[#212121] to-[#070707] min-h-screen p-5 sm:p-8 md:p-10 lg:p-14 xl:p-16">
//       <p className="text-5xl font-semibold leading-14">Types of GST Returns</p>
//       <p className="text-5xl ">You May Need to File</p>

//       <table className="border border-white mt-8">
//         <thead>
//           <tr>
//             <th colSpan={3} className="border border-white p-2">
//               Types of GST Returns You May Need to File
//             </th>
//           </tr>
//           <tr>
//             <th className="border border-white p-4 px-8">Return</th>
//             <th className="border border-white p-4 px-8">Purpose</th>
//             <th className="border border-white p-4 px-8">Due Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Array(6)
//             .fill("")
//             .map((item) => (
//               <tr>
//                 <td className="border border-white p-4 px-12">GSTR-1</td>
//                 <td className="border border-white p-4 px-12">
//                   Lorem, ipsum dolor.
//                 </td>
//                 <td className="border border-white p-4 px-12">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 </td>
//               </tr>
//             ))}
//         </tbody>
//       </table>
//     </section>
//   );
// };

// export default ITR1TypesOfGstReturns;














"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ITR1TypesOfGstReturns = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLTableElement>(null);
  const rowRefs = useRef<HTMLTableRowElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
      });

      // Animate table
      gsap.from(tableRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: tableRef.current,
          start: "top 85%",
        },
      });

      // Animate rows stagger
      rowRefs.current.forEach((row, i) => {
        gsap.from(row, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out",
          delay: i * 0.15, // stagger effect
          scrollTrigger: {
            trigger: row,
            start: "top 120%",
            toggleActions: "play none none none",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-gradient-to-b general-sans text-white from-[#212121] to-[#070707] min-h-screen p-5 sm:p-8 md:p-10 lg:p-14 xl:p-16">
      {/* Heading */}
      <div ref={headingRef} className="will-change-transform translate-z-0">
        <p className="text-4xl md:text-5xl font-semibold leading-tight">
          Types of GST Returns
        </p>
        <p className="text-4xl md:text-5xl">You May Need to File</p>
      </div>

      {/* Table */}

      <div className="overflow-x-auto">

      <table
        ref={tableRef}
        className="border border-white  mt-10 w-full text-left rounded-lg overflow-hidden will-change-transform translate-z-0"
      >
        <thead className="bg-white/10">
          <tr>
            <th colSpan={3} className="border border-white p-4 text-center text-lg md:text-xl font-semibold">
              Types of GST Returns You May Need to File
            </th>
          </tr>
          <tr>
            <th className="border border-white p-4 px-6 md:px-8">Return</th>
            <th className="border border-white p-4 px-6 md:px-8">Purpose</th>
            <th className="border border-white p-4 px-6 md:px-8">Due Date</th>
          </tr>
        </thead>
        <tbody>
          {Array(6)
            .fill("")
            .map((_, i) => (
              <tr
                key={i}
                ref={(el) => {
                  if (el) rowRefs.current[i] = el;
                }}
                className="hover:bg-white/10 transition-colors duration-300 will-change-transform translate-z-0"
              >
                <td className="border border-white p-4 px-6 md:px-12">GSTR-{i + 1}</td>
                <td className="border border-white p-4 px-6 md:px-12">
                  Lorem, ipsum dolor.
                </td>
                <td className="border border-white p-4 px-6 md:px-12">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      </div>

    </section>
  );
};

export default ITR1TypesOfGstReturns;
