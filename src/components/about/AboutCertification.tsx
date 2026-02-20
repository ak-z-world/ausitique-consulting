"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AboutCertification = () => {
  const titleRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.from(headingRef.current, {
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            once: true,
          },
          y: 100,
          skewY: 10,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      }

      if (descRef.current) {
        gsap.from(descRef.current, {
          scrollTrigger: {
            trigger: descRef.current,
            start: "top 85%",
            once: true,
          },
          x: 50,
          opacity: 0,
          duration: 1,
          delay: 0.3,
          ease: "power2.out",
        });
      }

      if (titleRef.current) {
        gsap.from(titleRef.current, {
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%",
            once: true,
          },
          opacity: 0,
          scale: 0.8,
          duration: 0.8,
          ease: "back.out(1.7)",
        });
      }

      ScrollTrigger.batch(cardsRef.current, {
        onEnter: (batch) => {
          gsap.from(batch, {
            opacity: 0,
            y: 40,
            scale: 0.95,
            stagger: 0.2,
            duration: 1,
            ease: "power2.out",
          });
        },
        start: "top 85%",
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white p-5 sm:p-8 md:p-10 lg:p-14 xl:p-16 general-sans overflow-hidden"
    >
      <p
        ref={titleRef}
        className="border rounded-3xl px-4 py-2 w-fit border-[#EBEBEB] font-medium text-sm will-change-transform will-change-opacity"
      >
        Our Values
      </p>

      <div className="flex flex-wrap justify-between gap-5 md:gap-10 mt-5">
        <p
          ref={headingRef}
          className="font-medium text-3xl sm:text-4xl md:text-5xl w-full md:w-1/2 leading-tight will-change-transform will-change-opacity"
        >
          A Commitment to Delivering Trusted Tax Solutions
        </p>

        <p
          ref={descRef}
          className="font-normal text-sm w-full md:w-1/4 text-gray-600 mt-4 md:mt-0 will-change-transform will-change-opacity"
        >
          At Auditique Consulting, our values guide how we work and serve our clients
          daily.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 md:gap-6 mt-14">
     
        <div
          ref={(el) => {
            cardsRef.current[0] = el;
          }}
          className="bg-gradient-to-b from-[#FFFFFF] to-[#E0F1F9] rounded-3xl p-6 text-black flex-grow min-w-[250px] md:w-[22%] w-full will-change-transform will-change-opacity"
        >
          <p className="font-medium text-2xl  md:mt-12">Honesty</p>
          <p className="font-normal text-sm mt-2 text-black">
            We maintain transparency and ethical practices in every tax matter,
            fostering strong and dependable relationships with clients.
          </p>
        </div>

        <div
          ref={(el) => {
            cardsRef.current[1] = el;
          }}
          className="bg-gradient-to-b from-[#FFFFFF] to-[#E0F1F9] rounded-3xl p-6 text-black flex-grow min-w-[250px] md:w-[22%] w-full will-change-transform will-change-opacity"
        >
          <p className="font-medium text-2xl md:mt-12">Customer Focus</p>
          <p className="font-normal text-sm mt-2">
            We take time to understand your tax requirements and deliver
            solutions designed to meet your objectives effectively.
          </p>
        </div>

        <div
          ref={(el) => {
            cardsRef.current[2] = el;
          }}
          className="bg-gradient-to-b from-[#FFFFFF] to-[#E0F1F9] rounded-3xl p-6 text-black flex-grow min-w-[250px] md:w-[22%] w-full will-change-transform will-change-opacity"
        >
          <p className="font-medium text-2xl md:mt-12">Superior Quality</p>
          <p className="font-normal text-sm mt-2">
            We ensure accuracy, compliance, and service excellence, continually
            improving to provide the highest professional standards.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutCertification;
