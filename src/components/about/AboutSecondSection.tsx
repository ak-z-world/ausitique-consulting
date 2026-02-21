"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CountUp } from "../animations";

gsap.registerPlugin(ScrollTrigger);

const AboutSecondSection = () => {

  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const aboutRef = useRef(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const globeRef = useRef(null);
  const globalTextRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(badgeRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.8,
      });

      gsap.from(aboutRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
      });

      gsap.from(statsRef.current, {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
      });

      gsap.from(missionRef.current, {
        opacity: 0,
        x: -60,
        duration: 1,
      });

      gsap.from(visionRef.current, {
        opacity: 0,
        x: 60,
        duration: 1,
      });

      gsap.from(globalTextRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
      });

      // Globe rotation animation
      gsap.to(globeRef.current, {
        rotate: 360,
        duration: 40,
        repeat: -1,
        ease: "linear",
      });

      // Globe floating effect
      gsap.to(globeRef.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

    }, sectionRef);

    return () => ctx.revert();

  }, []);

  return (

    <section
      ref={sectionRef}
      className="bg-white general-sans text-[#0B2A5B]"
    >

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-12 md:py-16">

        {/* Badge */}
        <div ref={badgeRef} className="mb-6">

          <span className="border border-blue-200 px-5 py-2 rounded-full text-sm font-medium">
            About Auditique Consulting
          </span>

        </div>


        {/* About */}
        <div ref={aboutRef} className="max-w-4xl">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">

            Delivering Financial Clarity with

            <span className="text-yellow-500"> Global Expertise</span>

          </h2>

          <p className="mt-5 text-sm sm:text-base text-[#0B2A5B]/70 leading-relaxed">

            Auditique Consulting is a progressive Chartered Accountancy and financial advisory firm co-founded by CA Varsha and CA Shwetha. We provide expert financial, taxation, compliance, and consulting services to businesses, professionals, and individuals.

            Our commitment extends beyond compliance. We partner with our clients to deliver strategic financial insights that enable confident decision-making, sustainable growth, and long-term success in both domestic and international markets.

          </p>

        </div>


        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-10">

          {[
            { value: 1200, label: "Clients Served Globally", suffix: "+" },
            { value: 98, label: "Client Satisfaction Rate", suffix: "%" },
            { value: 10, label: "Years of Expertise", suffix: "+" },
          ].map((item, index) => (

            <div
              key={index}
              ref={(el) => { statsRef.current[index] = el }}
            >

              <p className="text-3xl md:text-4xl font-semibold text-yellow-500">

                <CountUp from={0} to={item.value} duration={2} />

                {item.suffix}

              </p>

              <p className="text-sm text-[#0B2A5B]/70 mt-2">
                {item.label}
              </p>

            </div>

          ))}

        </div>


        {/* Mission Vision */}
        <div className="grid md:grid-cols-2 gap-8 mt-14">

          <div
            ref={missionRef}
            className="border border-blue-100 rounded-xl p-6 hover:shadow-md transition"
          >

            <h3 className="text-xl font-semibold mb-3 text-yellow-500">
              Our Mission
            </h3>

            <p className="text-sm text-[#0B2A5B]/70 leading-relaxed">

              To provide comprehensive, client-focused Chartered Accountancy and financial consulting services through professional integrity, innovation, and deep domain expertise, empowering clients globally.

            </p>

          </div>


          <div
            ref={visionRef}
            className="border border-blue-100 rounded-xl p-6 hover:shadow-md transition"
          >

            <h3 className="text-xl font-semibold mb-3 text-yellow-500">
              Our Vision
            </h3>

            <p className="text-sm text-[#0B2A5B]/70 leading-relaxed">

              To become a globally trusted financial advisory firm recognized for excellence, innovation, and delivering ethical, value-driven financial solutions worldwide.

            </p>

          </div>

        </div>


        {/* Global Reach Section */}
        <div className="grid md:grid-cols-2 gap-5 items-center mt-15">

          {/* Left */}
          <div ref={globalTextRef}>

            <h3 className="text-2xl md:text-3xl font-semibold">

              Serving Clients Across the

              <span className="text-yellow-500"> Globe</span>

            </h3>

            <p className="text-sm md:text-base text-[#0B2A5B]/70 mt-4 leading-relaxed">

              Auditique Consulting proudly serves clients not only across India but also internationally. Our global approach enables us to support startups, entrepreneurs, and enterprises operating across borders.

              We provide expert financial consulting, compliance management, and strategic advisory tailored to international business environments, ensuring seamless financial operations worldwide.

            </p>


            <div className="grid grid-cols-2 gap-6 mt-6">

              <div>
                <p className="text-2xl font-semibold text-yellow-500">15+</p>
                <p className="text-sm text-[#0B2A5B]/70">Countries Served</p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-yellow-500">Global</p>
                <p className="text-sm text-[#0B2A5B]/70">Client Support</p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-yellow-500">Remote</p>
                <p className="text-sm text-[#0B2A5B]/70">Service Capability</p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-yellow-500">24/7</p>
                <p className="text-sm text-[#0B2A5B]/70">Consultation Support</p>
              </div>

            </div>

          </div>


          {/* Right Globe */}
          <div className="flex justify-center relative">

            {/* Glow background */}
            <div
              className="
      globe-glow
      absolute
      w-[260px] md:w-[340px] lg:w-[420px]
      h-[260px] md:h-[340px] lg:h-[420px]
      rounded-full blur-[90px]
      pointer-events-none
    "
              style={{
                background:
                  "radial-gradient(circle, rgba(255,193,7,0.5) 0%, rgba(11,42,91,0.5) 60%, transparent 80%)",
              }}
            />

            {/* Globe */}
            <div
  ref={globeRef}
  className="globe-float w-[250px] md:w-[320px] lg:w-[380px]"
  style={{
    filter:
      "drop-shadow(0px 25px 50px rgba(11,42,91,0.25)) saturate(120%) contrast(105%)",
  }}
>

              <Image
                src="/images/globe.svg"
                alt="Global Presence"
                width={400}
                height={400}
                className="w-full h-auto globe-pulse"
              />

            </div>

          </div>

        </div>

      </div>

    </section>

  );

};

export default AboutSecondSection;