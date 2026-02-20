/* eslint-disable @next/next/no-img-element */
"use client";
import React, { use, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { serviceListTypes } from "@/types";
import { useRouter } from "next/navigation";

type ServiceSectionWhyChooseUsProps = {
  WhyChooseUsData: serviceListTypes;
};

const ServiceWhyChooseUs: React.FC<ServiceSectionWhyChooseUsProps> = ({
  WhyChooseUsData,
}) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const reasonRefs = useRef<HTMLDivElement[]>([]);
  const router = useRouter();

  // Clear refs before each render
  reasonRefs.current = [];

  // Function to collect card refs
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !reasonRefs.current.includes(el)) {
      reasonRefs.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      });

      // Cards animation
      reasonRefs.current.forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 1,
          delay: i * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 100%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current) {
      gsap.to(imgRef.current, {
        y: 100, // move down while scrolling
        ease: "none",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top bottom", // when image enters viewport
          end: "bottom top", // until it leaves
          scrub: true, // smooth scrubbing
        },
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      // className=" text-white px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 general-sans bg-gradient-to-b from-[#212121] to-[#070707]"

      className="general-sans g-gradient-to-b from-[#212121] to-[#070707] text-white px-4 py-4 sm:px-8 sm:py-7 md:px-10 md:py-8 lg:px-14 lg:py-10 xl:px-16"
    >
      {/* Top label */}
      <div className="w-fit mb-4 flex items-center gap-2">
        <p className="text-xs sm:text-sm w-fit">{WhyChooseUsData.heading}</p>
        <img src="/icons/right-arrow.svg" alt="Arrow" className="w-3 sm:w-4" />
      </div>

      {/* Title & Description */}
      <div
        ref={titleRef}
        className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-16 mt-5"
      >
        <p className="w-full lg:w-2/5 font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug lg:leading-tight">
          Compelling Reasons Why You Might Choose
        </p>
        <p className="w-full lg:w-2/5 text-xs sm:text-sm md:text-base leading-5 sm:leading-6 text-gray-300">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

      {/* Reasons + Image */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-32 mt-8 md:mt-12">
        {/* Left side: reasons */}
        <div className="flex flex-col gap-5 w-full lg:w-2/5">
          {WhyChooseUsData.bulletPoints?.map((title, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="flex gap-3 group   rounded-xl transition duration-300 ease-in-out"
            >
              <img
                src="/icons/tick-white-icon.svg"
                alt="Tick Icon"
                className="w-4 sm:w-5"
              />
              <p className="text-sm sm:text-base md:text-lg">
                {/* {title} */}
                {typeof title === "string" ? title : title.text}
              </p>
            </div>
          ))}

          <div
            ref={addToRefs}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 py-4 sm:py-5"
          >
            <button
              onClick={() => router.push("/contact-us")}
              className="text-base cursor-pointer  bg-white hover:bg-gray-600 hover:text-white rounded-4xl text-black px-4 py-2 trnsition duration-300 "
            >
              Let’s Connect
            </button>
          </div>
        </div>

        {/* Right side: image */}
        <div className="w-full lg:w-96 h-52 sm:h-64 md:h-80 lg:h-[400px] flex-grow rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
          <img
            ref={imgRef}
            src="/images/gst-what-you-get.png"
            alt="GST Parallax"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceWhyChooseUs;
