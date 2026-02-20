/* eslint-disable @next/next/no-img-element */
"use client";
import { BlurText } from "@/components/animations";
import { Header } from "@/components/layout";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);
import { serviceHeroTypes } from "@/types";

type ServiceSectionFAQProps = {
  heroSectionData: serviceHeroTypes;
};

const ServiceSectionHero: React.FC<ServiceSectionFAQProps> = ({
  heroSectionData,
}) => {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);
  const userStatsRef = useRef(null);
  const sectionTextRef = useRef(null);
  const imageBoxRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          duration: 1,
        },
      });

      tl.from(headingRef.current, {
        opacity: 0,
        skewY: 10,
        y: 40,
      })
        .from(
          subheadingRef.current,
          {
            opacity: 0,
            skewY: 10,
            y: 40,
          },
          "-=0.8"
        )
        .from(
          descRef.current,
          {
            opacity: 0,
            skewY: 8,
            y: 30,
          },
          "-=0.7"
        )
        .from(
          btnRef.current,
          {
            opacity: 0,
            skewX: -10,
            y: 20,
            scale: 0.95,
          },
          "-=0.6"
        )
        .from(
          userStatsRef.current,
          {
            opacity: 0,
            skewX: -8,
            x: 20,
          },
          "-=0.7"
        );

      gsap.from(sectionTextRef.current, {
        scrollTrigger: {
          trigger: sectionTextRef.current,
          start: "top 85%",
          once: true,
        },
        opacity: 0,
        y: 50,
        skewY: 12,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(imageBoxRef.current, {
        scrollTrigger: {
          trigger: imageBoxRef.current,
          start: "top 90%",
          once: true,
        },
        scale: 0.9,
        skewX: 5,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-white  pt-2 pb-5 md:pb-0 general-sans px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="w-full md:w-[90vw] mx-auto relative z-50">
        <Header bgColor="black" textColor="white" />
      </div>

      {/* Hero Texts */}
      <div className="flex justify-center items-center py-16 md:py-28 flex-col gap-2 text-center">
        <p
          ref={headingRef}
          className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl will-change-transform translate-z-0"
        >
          {heroSectionData.heading}
        </p>

        <p
          ref={subheadingRef}
          className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl will-change-transform translate-z-0"
        >
          in <span className="text-[#6A6A6A]">India</span>
        </p>

        <p
          ref={descRef}
          className="font-normal text-sm sm:text-base md:text-lg lg:text-sm w-full sm:w-4/5 md:w-3/5 lg:w-2/5 text-center will-change-transform translate-z-0"
        >
          {heroSectionData.subHeading}
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 mt-5 items-center will-change-transform translate-z-0"
          ref={btnRef}
        >
          <Link href="/contact">
            <button className="bg-black hover:bg-gray-600 cursor-pointer transition-all duration-500 text-white rounded-full px-8 sm:px-12 md:px-16 py-3 font-medium text-sm">
              Get Started
            </button>
          </Link>

          <div
            className="flex items-center gap-3 will-change-transform translate-z-0"
            ref={userStatsRef}
          >
            {/* <div className="flex items-center">
                   <p className="w-8 h-8 rounded-full bg-gray-500"></p>
                   <p className="w-8 h-8 -ms-3 rounded-full bg-gray-500"></p>
                   <p className="w-8 h-8 -ms-3 rounded-full bg-gray-500"></p>
                 </div> */}
            <img src="/icons/three-persons-image.svg" alt="" />

            <div className="text-center sm:text-left">
              <p className="font-medium text-sm sm:text-base">100k+</p>
              <p className="font-normal text-xs sm:text-sm">Customer</p>
              <p className="font-normal text-xs sm:text-sm">Satisfied</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Services Section */}
      <div className="flex flex-col lg:flex-row flex-grow gap-12 lg:gap-28 justify-between items-center lg:items-start">
        <div
          className="flex flex-col gap-3 w-full lg:w-[60%] will-change-transform translate-z-0"
          ref={sectionTextRef}
        >
          {/* <p className="font-medium text-sm font-Bricolage_Grotesque">
           Key Services
         </p> */}

          <BlurText
            text={heroSectionData.question}
            delay={50}
            animateBy="words"
            direction="top"
            className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
          />

          <p className="text-[#292833] mt-2 md:mt-8 md:text-justify font-medium font-Bricolage_Grotesque leading-7 md:leading-8">
            {heroSectionData.answer}
          </p>

          {heroSectionData.bulletPointsTitle && (
            <div>
              <p className="text-sm sm:text-base md:text-lg lg:text-sm leading-5 font-medium font-Bricolage_Grotesque">
                {heroSectionData.bulletPointsTitle}
              </p>
              <ol className="list-disc leading-7 list-inside text-sm sm:text-base md:text-lg lg:text-sm  font-medium font-Bricolage_Grotesque">
                {heroSectionData.bulletPoints?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
          )}
        </div>

        <div
          className="h-80 md:h-full w-full sm:w-80 md:w-96 flex-grow overflow-hidden  will-change-transform translate-z-0"
          ref={imageBoxRef}
        >
          <img
            src={heroSectionData.image}
            alt=""
            className="object-contain md:object-cover w-full h-full object-top"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceSectionHero;
