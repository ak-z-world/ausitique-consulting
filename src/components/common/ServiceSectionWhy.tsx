/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { serviceWhyTypes } from "@/types";

type ServiceSectionWhyProps = {
  WhyData: serviceWhyTypes;
};

const ServiceSectionWhy: React.FC<ServiceSectionWhyProps> = ({ WhyData }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ✅ Scroll-triggered heading animation
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // ✅ Cards animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.fromTo(
        cardsRef.current,
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "power2.out",
          duration: 0.8,
          stagger: 0.15,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-white" ref={sectionRef}>
      <div className="bg-gradient-to-b from-[#212121] to-[#070707] rounded-b-[40px] sm:rounded-b-[60px] min-h-screen px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16">
        {/* Heading Section */}
        <div
          className="flex flex-col font-Bricolage_Grotesque text-white gap-4 sm:gap-5 justify-center items-center text-center px-2"
          ref={headingRef}
        >
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            {WhyData.title}
          </p>
          {WhyData.subTitle && (
            <p className="text-xs sm:text-sm md:text-base max-w-md sm:max-w-xl md:max-w-2xl">
              {WhyData.subTitle}
            </p>
          )}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mt-10 sm:mt-14">
          {WhyData.details.map((card, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el!;
              }}
              className="bg-[#1f1f21] text-white p-5 sm:p-6 rounded-xl general-sans shadow-lg transform transition duration-300 hover:scale-[1.03] will-change-transform"
            >
              <div className="h-10 w-10 sm:h-12 sm:w-12  rounded mb-4 sm:mb-6">
                <img src="/icons/why-file-gst-returns-icon.svg" alt="" />
              </div>
              <p className="text-lg sm:text-xl md:text-2xl font-medium">
                {card.detailsHeading}
              </p>
              {/* <p className="text-xs sm:text-sm md:text-base font-extralight mt-3 sm:mt-4"> */}
              <p className="text-xs sm:text-sm md:text-base text-gray-400 font-light mt-3 sm:mt-4">
                {card.detailsDescription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSectionWhy;
