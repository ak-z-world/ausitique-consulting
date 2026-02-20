/* eslint-disable @next/next/no-img-element */

"use client";
import React, {  useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Late Fee",
    image: "/images/itr1KeySerivces1.jpg",
    description:
      " ₹100/day per return for CGST + ₹100/day for SGST (max ₹5,000).",
  },
  {
    title: "Interest",
    image: "/images/itr1KeySerivces2.jpg",
    description:
      "18% per annum on late tax payment.",
  },
  {
    title: "Blocked ITC:",
    image: "/images/itr1KeySerivces2.jpg",
    description: " Late filing may lead to ineligibility for ITC for that tax period",
  },
  {
    title: "Ineligibility for Next Return",
    image: "/images/itr1KeySerivces2.jpg",
    description:
      "Can’t file the next return until the previous is submitted",
  },
];
const GSTPenaltyForLateGst = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="bg-white min-h-screen px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 font-Bricolage_Grotesque"
    >
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 lg:gap-5">
        {/* Text Section */}
        <div
          className="flex flex-col gap-4 w-full lg:w-2/5 will-change-transform"
          ref={textRef}
        >
          {/* <p className="text-xs sm:text-sm">Key Services</p> */}
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug lg:leading-tight">
            Penalty for Late GST Return Filing
          </p>
          {/* <p className="text-xs sm:text-sm md:text-base leading-5 sm:leading-6 text-gray-700">
           Explore our specialized internal audit services designed to manage
           risk, enhance control, and ensure operational and regulatory
           excellence
         </p> */}
          <button className="bg-[#070707] px-5 sm:px-8 py-2 sm:py-3 rounded-3xl text-white text-xs sm:text-sm w-fit">
            Book Consultation
          </button>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow w-full lg:w-3/5">
          {services.map((service, i) => (
            <div
              key={i}
              className={`relative h-64 sm:h-72 md:h-80 rounded-2xl transform transition-transform duration-500 hover:scale-[1.03] hover:-translate-y-2 will-change-transform ${
                i % 2 === 0 ? "sm:top-5" : ""
              }`}
              // ref={addToCardRefs}
            >
              <img
                loading="lazy"
                src={service.image}
                alt={service.title}
                className="absolute w-full z-10 h-full object-cover rounded-2xl"
              />
              <div className="bg-black/75 absolute w-full h-full z-20 rounded-2xl" />
              <div className="flex flex-col justify-between absolute w-full h-full z-30 text-white p-4 sm:p-5 rounded-2xl">
                <p className="text-xl sm:text-2xl md:text-3xl">0{i + 1}</p>
                <div className="flex flex-col gap-1 sm:gap-2">
                  <p className="text-lg sm:text-xl md:text-2xl">
                    {service.title}
                  </p>
                  <p className="text-[10px] sm:text-xs md:text-sm leading-4 sm:leading-5">
                    {service.description}
                  </p>
                </div>
                <div className="flex justify-end">
                  <img
                    src="/icons/ArrowUpRight.svg"
                    alt="Arrow Icon"
                    className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GSTPenaltyForLateGst;
