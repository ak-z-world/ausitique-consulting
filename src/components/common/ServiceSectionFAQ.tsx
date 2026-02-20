"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PiArrowCircleUpRightFill } from "react-icons/pi";
gsap.registerPlugin(ScrollTrigger);
import { serviceFaqTypes } from "@/types";

type ServiceSectionFAQProps = {
  faqData: serviceFaqTypes[];
};

const ServiceSectionFAQ: React.FC<ServiceSectionFAQProps> = ({ faqData }) => {
  const faqRefs = useRef<HTMLDivElement[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(faqRefs.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: faqRefs.current[0],
          start: "top 90%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    // <section className="bg-gradient-to-b  text-white from-[#212121] to-[#070707] general-sans p-5 sm:p-8 md:p-10 lg:p-14 xl:p-16 ">
    <section className="bg-gradient-to-b  text-white from-[#212121] to-[#070707] general-sans px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-12 lg:py-10 xl:px-16 xl:py-12">
      {/* Header */}
      <div className="flex justify-center">
        <p className="px-10 py-2 border rounded-full w-fit font-medium text-sm">
          FAQ
        </p>
      </div>

      <div className="flex justify-center mt-5">
        <p className="font-medium text-3xl md:text-5xl w-full md:w-2/3 lg:w-1/2 text-center will-change-transform">
          Got Questions? We’ve Got Clear Answers
        </p>
      </div>

      <p className="text-center mt-5 text-sm opacity-80">
        Find quick, reliable answers to your most common questions here
      </p>

      {/* FAQ Items */}
      <div className="flex flex-col gap-5 md:gap-6 mt-10 w-full md:w-[70vw] mx-auto">
        {faqData.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) faqRefs.current[index] = el;
            }}
            onClick={() => toggleFAQ(index)}
            className="border cursor-pointer  border-white/20 rounded-2xl bg-gradient-to-r from-[#373737]/15 via-[#FFFFFF]/0 to-[#3D3D3D]/15 p-5 md:p-6 will-change-transform transition-all duration-300"
          >
            <button className="flex justify-between items-center gap-8 w-full text-left">
              <p className="text-lg md:text-xl  cursor-pointer">{item.label}</p>
              <PiArrowCircleUpRightFill
                className={` transition-transform text-xl md:text-2xl flex-shrink-0 duration-300 ${
                  openIndex === index ? "rotate-45 text-green-400" : "rotate-0"
                }`}
              />
            </button>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index
                  ? "max-h-40 opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm md:text-base text-gray-400">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSectionFAQ;
