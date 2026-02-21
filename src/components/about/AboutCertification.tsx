"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutCertification = () => {

  const titleRef = useRef<HTMLParagraphElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      // Title animation
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          {
            opacity: 0,
            scale: 0.8,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            clearProps: "all",
          }
        );
      }

      // Heading animation
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          {
            opacity: 0,
            y: 60,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            clearProps: "all",
          }
        );
      }

      // Description animation
      if (descRef.current) {
        gsap.fromTo(
          descRef.current,
          {
            opacity: 0,
            x: 40,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 0.2,
            ease: "power2.out",
            clearProps: "all",
          }
        );
      }

      // Cards animation FIXED
      ScrollTrigger.batch(cardsRef.current, {

        start: "top 90%",

        onEnter: (batch) => {

          gsap.fromTo(
            batch,
            {
              opacity: 0,
              y: 50,
              scale: 0.95,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              stagger: 0.15,
              duration: 0.8,
              ease: "power2.out",
              clearProps: "all",
            }
          );

        },

      });

    }, sectionRef);

    return () => ctx.revert();

  }, []);

  const values = [

    {
      title: "Integrity",
      desc:
        "We uphold the highest ethical standards, ensuring transparency, honesty, and trust in every financial and advisory service we provide.",
    },

    {
      title: "Excellence",
      desc:
        "We deliver precise, reliable, and high-quality financial solutions that empower confident business decisions.",
    },

    {
      title: "Client Commitment",
      desc:
        "We prioritize client success by understanding their needs and delivering personalized financial strategies that drive growth.",
    },

    {
      title: "Innovation",
      desc:
        "We embrace modern practices and innovative thinking to provide efficient and future-ready consulting solutions.",
    },

    {
      title: "Accountability",
      desc:
        "We take full responsibility for our work, ensuring compliance, accuracy, and dependable financial guidance.",
    },

    {
      title: "Timeliness",
      desc:
        "We ensure prompt execution of financial processes, helping clients stay compliant and confident.",
    },

  ];

  return (

    <section
      ref={sectionRef}
      className="bg-white general-sans"
    >

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-12 md:py-16">

        {/* Badge */}
        <p
          ref={titleRef}
          className="border border-blue-200 text-[#0B2A5B] px-5 py-2 rounded-full text-sm font-medium w-fit"
        >
          Our Core Values
        </p>


        {/* Heading and Description */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <h2
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-[#0B2A5B]"
          >
            Principles That Define
            <span className="text-yellow-500"> Auditique Consulting</span>
          </h2>


          <p
            ref={descRef}
            className="text-sm sm:text-base text-[#0B2A5B]/70 leading-relaxed"
          >
            Our core values guide how we serve clients, maintain excellence,
            and deliver trusted financial advisory services globally.
          </p>

        </div>


        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

          {values.map((value, index) => (

            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="
                bg-white
                border border-blue-100
                rounded-xl
                p-6
                opacity-100
                hover:shadow-lg
                hover:-translate-y-1
                transition-all duration-300
              "
            >

              <h3 className="text-xl font-semibold text-[#0B2A5B]">
                {value.title}
              </h3>

              <p className="text-sm text-[#0B2A5B]/70 mt-3 leading-relaxed">
                {value.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

};

export default AboutCertification;