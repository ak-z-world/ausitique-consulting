"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BlurText, CountUp } from "../animations";

gsap.registerPlugin(ScrollTrigger);

const AboutSecondSection = () => {
  const sectionRef = useRef(null);
  const paragraphRef = useRef(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);
  const imageRef = useRef(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const baseTrigger = {
        start: "top 80%",
        toggleActions: "play none none none",
        lazy: true,
      };

      // Badge animation
      gsap.from(badgeRef.current, {
        scrollTrigger: {
          trigger: badgeRef.current,
          ...baseTrigger,
        },
        autoAlpha: 0,
        y: -20,
        duration: 0.8,
        ease: "power2.out",
        immediateRender: false,
        clearProps: "transform, opacity",
      });

      // Paragraph animation
      gsap.from(paragraphRef.current, {
        scrollTrigger: {
          trigger: paragraphRef.current,
          ...baseTrigger,
        },
        autoAlpha: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        immediateRender: false,
        clearProps: "transform, opacity",
      });

      // Stats animation
      gsap.from(statsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        autoAlpha: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        immediateRender: false,
        clearProps: "transform, opacity",
      });

      // Image animation
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          ...baseTrigger,
        },
        autoAlpha: 0,
        x: 100,
        duration: 1.2,
        ease: "power3.out",
        immediateRender: false,
        clearProps: "transform, opacity",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white general-sans overflow-hidden">
      {/* About Section */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-32 p-5 sm:p-8 md:p-10 lg:p-14 xl:p-16">
        {/* Badge */}
        <div className="flex justify-center lg:justify-start" ref={badgeRef}>
          <p className="px-8 h-fit font-medium text-sm text-center rounded-full py-2.5 border-[#EBEBEB] border-2">
            About Us
          </p>
        </div>

        {/* Text Section */}
        <div className="w-full flex-grow lg:w-2/3">
          <BlurText
            text="At Auditique Consulting, our mission is to help Indians master their money, simplify finances, and create smart solutions that save time and money for both businesses and individuals."
            delay={50}
            animateBy="words"
            direction="top"
            className="font-medium text-3xl md:text-4xl lg:text-5xl leading-tight"
          />

          <p
            ref={paragraphRef}
            className="font-normal text-xs mt-5"
          >
            With a team of experienced consultants, we empower entrepreneurs,
            startups, and established businesses by streamlining essential
            operations and eliminating complexity from business processes.
          </p>

          {/* CountUp Section */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-24 justify-between mt-10 lg:mt-14">
            {[1200, 98, 24].map((value, i) => (
              <div
                key={i}
                ref={(el) => { statsRef.current[i] = el }}
              >
                <p className="font-medium text-4xl md:text-5xl lg:text-6xl">
                  <CountUp
                    from={0}
                    to={value}
                    separator=","
                    direction="up"
                    duration={value === 24 ? 2 : value === 98 ? 0.5 : 0.2}
                    className="count-up-text"
                  />
                  {value === 24 ? "/7" : value === 98 ? "%" : "+"}
                </p>
                <p className="font-normal text-sm mt-3">
                  {i === 0 &&
                    "Businesses are supported through reliable, end-to-end assistance."}
                  {i === 1 &&
                    "Success rate is built on trust and accuracy"}
                  {i === 2 &&
                    "Expert support is available anytime—no waiting required."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* India Reach Section */}
      <div className="bg-gradient-to-b gap-10 text-white from-[#212121] to-[#070707] h-auto lg:h-[90vh] flex flex-col lg:flex-row justify-between p-5 sm:p-8 md:p-10 lg:p-14 xl:p-16">
        {/* Left */}
        <div className="flex flex-col gap-6 lg:gap-8 w-full lg:w-1/2">
          <p className="font-medium text-3xl md:text-4xl lg:text-5xl leading-tight">
            We Serve Across India
          </p>

          <p className="font-normal text-sm leading-6">

At Auditique Consulting, our core mission is to empower Indians—both individuals and businesses—to master their finances and simplify money management through smart, tailored solutions. Our dedicated team of experienced consultants streamlines essential operations, delivering reliable, seamless, end-to-end assistance. Whether you&apos;re a startup, entrepreneur, or established business in metro or emerging cities, our nationwide presence ensures fast, precise, and region-specific service that adapts to local needs. With a commitment to trust, accuracy, and round-the-clock expert support, we&apos;re proud to serve across more than 30 major cities and 5 regional zones, consistently earning high satisfaction and a strong 4.8-star rating. From meticulous document collection and eligibility verification to accurate filing, regulatory liaison, and real-time application tracking, our systematic approach ensures your financial and regulatory processes are smooth, compliant, and stress-free—empowering your growth with clarity and confidence.
          </p>

          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full sm:w-fit">
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-3xl md:text-4xl lg:text-5xl">30+</p>
              <p className="text-sm">Major Cities Covered</p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-semibold text-3xl md:text-4xl lg:text-5xl">5</p>
              <p className="text-sm">Regional Service Zones</p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-semibold text-3xl md:text-4xl lg:text-5xl">100%</p>
              <p className="text-sm">Commitment to Local Relevance</p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-semibold text-3xl md:text-4xl lg:text-5xl">4.8</p>
              <p className="text-sm">Star Service Rating</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div
          className="relative h-[300px] sm:h-[400px] md:h-full w-full lg:w-[50%] mt-10 lg:mt-0"
          ref={imageRef}
        >
          <Image
            alt="Map of India"
            src="/images/india-map-gif.gif"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Footer Spacer */}
      {/* <div className="h-40 md:h-60 lg:h-80 w-full bg-gray-300"></div> */}
    </section>
  );
};

export default AboutSecondSection;
