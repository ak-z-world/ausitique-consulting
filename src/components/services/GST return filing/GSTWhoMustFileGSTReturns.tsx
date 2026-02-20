/* eslint-disable @next/next/no-img-element */

"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    title: "Regular Taxpayers",
    description:
      "Monthly/quarterly filing of GSTR-1, GSTR-3B, and GSTR-9 (if their annual turnover limit exceeds 2Crore) is required.",
  },
  {
    title: "Composition Scheme Taxpayers",
    description: "Must file CMP-08 quarterly and GSTR-4 annually.",
  },
  {
    title: "E-Commerce Sellers/Operators",
    description:
      "Need to file GSTR-8 (for operators) and other applicable returns.",
  },
  {
    title: "TDS/TCS Deductors",
    description:
      " Entities that deduct tax under GST must file GSTR-7 or GSTR-8.",
  },

  {
    title: "Input Service Distributors (ISD)",
    description: "Must file GSTR-6 monthly.",
  },

  {
    title: "Non-Resident Foreign Taxpayers",
    description: " Required to file GSTR-5 monthly.",
  },

  {
    title: "Online Service Providers (OIDAR)",
    description: "Must file GSTR-5A monthly.",
  },

  {
    title: "Businesses With Turnover Exceeding Threshold",
    description:
      "  As per GST laws (₹40 lakhs for goods, ₹20 lakhs for services, ₹10 lakhs for special states).",
  },
];

const GSTWhoMustFileGSTReturns = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      if (titleRef.current) {
        gsap.from(titleRef.current.children, {
          opacity: 0,
          y: -40,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          },
        });
      }

      // Card Animations
      cardRefs.current.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          scale: 0.95,
          duration: 0.9,
          ease: "power3.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        });
      });
    });

    return () => ctx.revert(); // cleanup
  }, []);
  return (
    <section className="bg-white general-sans p-5 sm:p-8 md:p-10 lg:p-14 xl:p-16">
      {/* Title */}
      <div
        ref={titleRef}
        className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold will-change-transform translate-z-0"
      >
        <p>Who Must File</p>
        <p className="text-[#394149]">GST Returns?</p>
      </div>

      {/* Cards */}
      <div className="flex gap-5 gap-y-8 md:gap-y-20 mt-16 flex-wrap justify-center">
        {data
          .map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardRefs.current[index] = el;
              }}
              className="flex gap-4 flex-grow  md:gap-7 w-full sm:w-[45%] lg:w-[30%] xl:w-[22%] will-change-transform translate-z-0"
            >
              {/* Divider */}
              <div className="border border-r h-full border-black/80"></div>

              {/* Card Content */}
              <div className="flex flex-col gap-5 flex-grow">
                {/* <div className="h-9 w-9 rounded bg-gray-500"></div> */}
                <img src="/icons/who-must-file-gst-returns-icon.svg" alt=""  className="w-9 h-9"/>

                <div className="flex justify-between w-full items-center">
                  <p className="font-medium text-[17px] w-full  md:w-2/3">{item.title}</p>
                  <p className="text-gray-600 font-semibold">0{index + 1}.</p>
                </div>

                <p className="bg-gradient-to-b from-[#212121] to-[#070707] text-transparent bg-clip-text text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default GSTWhoMustFileGSTReturns;
