/* eslint-disable @next/next/no-img-element */

"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

 const ITR1FinanceHelpsTax = () => {
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const descRef = useRef(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        skewY: 5,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(subTitleRef.current, {
        opacity: 0,
        y: 40,
        skewY: 5,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(descRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
      });

      // Animate each card on scroll
      cardRefs.current.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 50,
          scale: 0.95,
          duration: 1,
          delay: i * 0.1,
          ease: "power3.out",
        });
      });
    });

    return () => ctx.revert(); // Clean up
  }, []);

  return (
    <section className="min-h-screen general-sans bg-gradient-to-b p-6 sm:p-10 lg:p-16 from-[#212121] to-[#070707] text-white">
      {/* Title */}
      <div className="flex flex-col items-center">
        <p
          ref={titleRef}
          className="text-xs w-fit will-change-transform translate-z-0"
        >
          Finance Helps Tax
        </p>
        <img src="/icons/right-arrow.svg" alt="" />
      </div>

      {/* Subtitle + Desc */}
      <div className="flex flex-col gap-7 items-center justify-center">
        <p
          ref={subTitleRef}
          className="text-center mt-8 font-medium text-2xl sm:text-3xl lg:text-4xl will-change-transform translate-z-0"
        >
          Tax <span className="font-extrabold">Players</span> Encompass
        </p>

        <p
          ref={descRef}
          className="w-full sm:w-4/5 lg:w-2/5 text-center text-sm sm:text-base will-change-transform translate-z-0"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              cardRefs.current[i] = el!;
            }}
            className="flex flex-col gap-6 hover:bg-gradient-to-r from-[#37373726] via-[#FFFFFF26] to-[#3D3D3D26] rounded-2xl p-5 transition-all duration-500 will-change-transform translate-z-0"
          >
            <img src="/icons/itr1Icon1.svg" alt="" className="w-10 h-10 sm:w-12 sm:h-12" />
            <hr />
            <p className="text-lg sm:text-xl lg:text-2xl font-medium">
              Tax Preparation and Filing
            </p>
            <p className="text-sm sm:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className="text-sm underline">Learn More</p>
          </div>
        ))}
      </div>
    </section>
  );
};


export default ITR1FinanceHelpsTax;