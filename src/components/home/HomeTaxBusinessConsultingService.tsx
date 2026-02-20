"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const HomeTaxBusinessConsultingService = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsWrapperRef = useRef<HTMLDivElement | null>(null);
  const whiteBoxRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLParagraphElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (!headingRef.current) return;

      // Split heading words
      const splitHeading = new SplitType(headingRef.current, {
        types: "words",
        tagName: "span",
      });
      gsap.set(splitHeading.words, { transformPerspective: 500, willChange: "transform, opacity" });

      // Animate heading
      gsap.from(splitHeading.words, {
        yPercent: 120,
        rotationX: -90,
        opacity: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
        stagger: 0.06,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      });

      // Animate description
      gsap.from(descRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
        },
      });

      // Cards animation
      if (cardsWrapperRef.current) {
        const cards = cardsWrapperRef.current.querySelectorAll(".card");
        cards.forEach((card) => {
          (card as HTMLElement).style.transformStyle = "preserve-3d";
          (card as HTMLElement).style.willChange = "transform, opacity";
        });

        ScrollTrigger.batch(cards, {
          interval: 0.15,
          batchMax: 3,
          onEnter: (batch) =>
            gsap.fromTo(
              batch,
              {
                y: 50,
                scale: 0.9,
                rotationX: 15,
                rotationY: -10,
                opacity: 0,
                transformOrigin: "center center",
              },
              {
                y: 0,
                scale: 1,
                rotationX: 0,
                rotationY: 0,
                opacity: 1,
                duration: 1.2,
                ease: "expo.out",
                stagger: 0.1,
              }
            ),
        });
      }

      // Right-side image parallax
      if (whiteBoxRef.current) {
        gsap.fromTo(
          whiteBoxRef.current,
          { y: 50, scale: 0.8, opacity: 0 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "elastic.out(1, 0.4)",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative p-5 sm:p-8 md:p-10 lg:p-14 xl:p-16 bg-gradient-to-br from-white via-blue-50 to-yellow-50">
      <div className="absolute inset-0 -z-10">

  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-100 blur-[120px] rounded-full opacity-60" />

  <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-100 blur-[120px] rounded-full opacity-60" />

</div>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 xl:gap-28 items-start lg:items-center min-h-[100vh] text-[#0B2A5B] relative z-10">
        {/* Left Side */}
        <div className="w-full lg:w-[60%]">
          <p
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-loose4 xl:leading-tight general-sans overflow-hidden"
            ref={headingRef}
          >
            Tax & Business Consulting Services
          </p>
          <p className="mt-5 text-sm sm:text-base text-gray-600" ref={descRef}>
            Comprehensive support for startups, MSMEs, and growing businesses—from registrations to regulatory compliance
          </p>

          <div className="flex flex-col gap-5 mt-10" ref={cardsWrapperRef}>
            {[
              { icon: "tax-business-consulting-icon1.svg", title: "Business Structuring & Registrations", subText: "Proprietorship, Partnership, LLP, Trust, Pvt Ltd & More" },
              { icon: "tax-business-consulting-icon2.svg", title: "Tax Filing & Advisory Services", subText: "GST Registrations, ITR Filing, TDS Returns, Advance Tax" },
              { icon: "tax-business-consulting-icon3.svg", title: "Legal & MCA Compliance", subText: "DIN eKYC, AOC-4, MGT-7, ADT-1 Filing, MOA/ AOA Amendments." },
              { icon: "tax-business-consulting-icon4.svg", title: "Payroll, Licensing & Other Services", subText: "PF / ESI / PT Registration & Returns, FSSAI & DSC, IEC." },
            ].map((item, i) => (
              <div key={i} className="card flex items-start bg-white border border-blue-100 hover:border-[#FFC107] hover:shadow-lg transition-all duration-300 rounded-xl px-4 sm:px-6 py-5 gap-4 sm:gap-5 shadow-sm">
                <Image alt={item.title} src={`./icons/${item.icon}`} width={40} height={20} loading="lazy" />
                <div className="border-r border-blue-100 h-14"></div>
                <div>
                  <p className="text-base sm:text-lg md:text-xl font-medium general-sans">{item.title}</p>
                  <p className="text-xs sm:text-sm mt-2 text-gray-500">{item.subText}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-[40%] me-0 lg:me-20 min-h-[300px] sm:min-h-[500px] flex items-center relative z-10">
          <Image
            src="/images/home-tax&businessconsultingservice-image1.jpg"
            alt="a"
            fill
            className="w-[80%] h-[60%] sm:w-2/3 sm:h-3/4 bg-white rounded-3xl absolute shadow-2xl object-cover"
            loading="lazy"
          />

          <div
            className="w-3/4 h-1/2 bg-white max-xl:hidden block rounded-3xl absolute z-40 bottom-[-60px] right-0 sm:bottom-[-100px] xl:right-[-110px] border-[10px] border-blue-100 shadow-xl"
            ref={whiteBoxRef}
          >
            <Image src="/images/home-tax-business-consulting-image1.jpg" alt="a" fill className="w-full h-full rounded-xl object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTaxBusinessConsultingService;
