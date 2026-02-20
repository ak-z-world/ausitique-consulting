/* eslint-disable @next/next/no-img-element */

"use client";
import React, { useEffect, useRef } from "react";
import { GiCheckMark } from "react-icons/gi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const data = [
  " Reconciliation of sales/purchase invoices with GSTR-1, 2A, and 2B",
  "Support for monthly, quarterly, and annual GST return filing",
  "Reminders to avoid missed deadlines",
  " Guidance for claiming accurate Input Tax Credit (ITC)",
  "Support with notices, audits, or rectifications from the GST Department",
  " Access to expert consultation and transparent pricing",
];

const GSTWhatYouGet = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subTitleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const listRefs = useRef<HTMLParagraphElement[]>([]);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      });

      // Subtitle animation
      gsap.from(subTitleRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      // Description animation
      gsap.from(descRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
      });

      // List items stagger animation
      gsap.from(listRefs.current, {
        opacity: 0,
        x: -30,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: listRefs.current[0],
          start: "top 90%",
        },
        ease: "power3.out",
      });

      // Image animation
      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        delay: 0.6,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
        },
        ease: "power3.out",
      });
    });

    return () => ctx.revert(); // cleanup animations
  }, []);
  return (
    <section className="bg-white general-sans p-5 sm:p-8 md:p-10 lg:p-14 xl:p-16">
      {/* Titles */}
      <p
        ref={titleRef}
        className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center will-change-transform"
      >
        What You Get With Auditique Consulting
      </p>
      <p
        ref={subTitleRef}
        className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center will-change-transform"
      >
        GST Return <span className="text-[#394149]"> Filing Services</span>
      </p>

      {/* Description */}
      <div className="flex justify-center">
        <p
          ref={descRef}
          className="w-full md:w-2/3 lg:w-1/2 text-center mt-5 will-change-transform"
        >
          Explore our specialized internal audit services designed to manage
          risk, enhance control, and ensure operational and regulatory
          excellence
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-20 mt-20">
        <div className="w-full flex-grow lg:w-1/2">
          <p className="font-semibold text-xl will-change-transform">
            Timely preparation and filing of applicable GST returns
          </p>

          <div className="flex flex-col gap-3 mt-5 font-medium text-lg">
            {data.map((item, i) => (
              <p
                key={i}
                ref={(el) => {
                  if (el) listRefs.current[i] = el;
                }}
                className="will-change-transform"
              >
                <GiCheckMark className="inline me-2 text-green-600" />
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* Right side image */}
        <div
          ref={imageRef}
          className="h-64 md:h-80 w-full lg:w-[400px] rounded-3xl bg-gray-400 flex-shrink-0 will-change-transform flex-grow "
        >
          <img src="/images/gst-what-you-get.png" alt="" className="w-full h-full object-cover rounded-3xl "/>
        </div>
      </div>
    </section>
  );
};

export default GSTWhatYouGet;
