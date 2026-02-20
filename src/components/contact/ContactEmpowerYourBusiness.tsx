"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";

gsap.registerPlugin(ScrollTrigger);

const ContactEmpowerYourBusiness = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLParagraphElement | null>(null);
  const subHeadingRef = useRef<HTMLParagraphElement | null>(null);
  const marqueeWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const triggerEl = containerRef.current;

      const animationConfig = (target: Element | null, delay = 0) => {
        if (!target || !triggerEl) return;

        gsap.fromTo(
          target,
          {
            clipPath: "inset(100% 0 0 0)",
            opacity: 0,
          },
          {
            clipPath: "inset(0% 0 0 0)",
            opacity: 1,
            duration: 1.5,
            delay,
            ease: "power4.out",
            scrollTrigger: {
              trigger: triggerEl,
              start: "top 60%",
              toggleActions: "play none none none",
              scrub: true,
            },
          }
        );
      };

      animationConfig(headingRef.current, 0);
      animationConfig(subHeadingRef.current, 0.3);
      animationConfig(marqueeWrapperRef.current, 0.6);

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-white py-8 md:py-10 lg:py-14 xl:py-16"
    >
      <div className="general-sans rounded-t-[30px] sm:rounded-t-[40px] md:rounded-t-[50px] px-4 sm:px-8 md:px-16">
        <p
          ref={headingRef}
          className="font-semibold text-2xl sm:text-4xl md:text-5xl text-center will-change-transform will-change-clip-path will-change-opacity"
        >
          Empower Your Business With Auditique Consulting
        </p>
        <p
          ref={subHeadingRef}
          className="font-normal text-base sm:text-lg md:text-xl text-[#212121] text-center mt-3 will-change-transform will-change-clip-path will-change-opacity"
        >
          Any question or remarks? Just write us a message!
        </p>
      </div>

      <div
        ref={marqueeWrapperRef}
        className="overflow-hidden mt-10 will-change-transform will-change-clip-path will-change-opacity"
      >
        <Marquee autoFill={true}>
          <div className="flex gap-3 sm:gap-4 md:gap-5 shrink-0">
            {Array(6)
              .fill(0)
              .map((_, idx) => (
                <div
                  key={idx}
                  className="bg-gray-300 h-40 w-60 sm:h-48 sm:w-72 md:h-64 md:w-80"
                />
              ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default ContactEmpowerYourBusiness;


