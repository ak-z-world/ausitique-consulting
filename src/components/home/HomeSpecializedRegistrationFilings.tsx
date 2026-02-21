"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import { CircularText } from "../animations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
type MarqueeItem = {
  title: string;
  subTitle: string;
  image: string;
};

const HomeSpecializedRegistrationFilings = () => {
  const sectionRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const circularRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reset",
        },
      });

      tl.from([line1Ref.current, line2Ref.current], {
        yPercent: 100,
        opacity: 0,
        skewY: 8,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.15,
        clipPath: "inset(0 0 100% 0)",
      });

      gsap.from(circularRef.current, {
        scale: 0.4,
        rotateY: 90,
        opacity: 0,
        transformOrigin: "center center",
        duration: 1.6,
        ease: "expo.out",
        delay: 0.4,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reset",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const marqueeData1 = [
    {
      title: "Trademark Registration",
      subTitle: "Protect Your Brand Identity",
      image: "/images/home-specializedRegistration-image1.jpg",
    },
    {
      title: "Income Tax Filing (ITR)",
      subTitle: "Individuals & Businesses – ITR-1 to ITR-7",
      image: "/images/home-specializedRegistration-image2.jpg",
    },
    {
      title: "Logo & Design Registration",
      subTitle: "Safeguard Creative Assets",
      image: "/images/home-specializedRegistration-image3.jpg",
    },
    {
      title: "FSSAI Registration & License",
      subTitle: "Food Business Compliance",
      image: "/images/home-specializedRegistration-image4.jpg",
    },
    {
      title: "MCA Annual Filings",
      subTitle: "Corporate Compliance – AOC-4, MGT-7, ADT-1, etc.",
      image: "/images/home-specializedRegistration-image5.jpg",
    },
    {
      title: "HR & Payroll Services",
      subTitle: "Employee Compliance Solutions",
      image: "/images/home-specializedRegistration-image6.jpg",
    },
    {
      title: "E-Way Bill & E-Invoice",
      subTitle: "Digital Tax Documents",
      image: "/images/home-specializedRegistration-image7.jpg",
    },
    {
      title: "Professional Tax Registration",
      subTitle: "State Tax Compliance",
      image: "/images/home-specializedRegistration-image8.jpg",
    },
  ];

  const marqueeData2 = [
    {
      title: "TDS & TCS Compliance",
      subTitle: "Timely Tax Deductions – 24Q, 26Q, 27Q, 27EQ Returns",
      image: "/images/home-specializedRegistration-image9.jpg",
    },
    {
      title: "Business Registration",
      subTitle: "Startup & Entity Formation",
      image: "/images/home-specializedRegistration-image10.jpg",
    },
    {
      title: "MSME Udyam Registration",
      subTitle: "Small Business Recognition",
      image: "/images/home-specializedRegistration-image11.jpg",
    },
    {
      title: "Startup India Registration",
      subTitle: "Government Benefits",
      image: "/images/home-specializedRegistration-image12.jpg",
    },
    {
      title: "GST Registration",
      subTitle: "Tax Compliance for Businesses",
      image: "/images/home-specializedRegistration-image13.jpg",
    },
    {
      title: "GST Returns Filing",
      subTitle: "Monthly & Annual",
      image: "/images/home-specializedRegistration-image14.jpg",
    },
  ];

  const renderCard = (item: MarqueeItem, i: number, marquee: string) => (
    <div
      key={`${marquee}-${i}`}
      className={`group h-64 sm:h-72 ${i % 2 === 0
          ? "w-72 sm:w-80"
          : marquee === "marquee-1"
            ? "w-[320px] sm:w-[450px]"
            : "w-[300px] sm:w-[550px]"
        } flex-shrink-0 rounded-3xl bg-black relative`}
    >
      <div className="absolute w-full h-full group-hover:bg-black/40 transition-all duration-1000 bg-black/75 z-20 rounded-3xl"></div>
      <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black from-70% transition-all duration-1000 opacity-0 group-hover:opacity-100 z-30 rounded-3xl"></div>
      <div className="absolute z-10 w-full h-full rounded-3xl">
        <Image
          alt="card"
          src={item.image}
          fill
          className="rounded-2xl object-cover"
        />
      </div>
      <div className="flex flex-col gap-1 sm:gap-2 z-50 absolute bottom-3 left-3 sm:bottom-4 sm:left-4 general-sans text-white">
        <p className="text-lg sm:text-2xl font-medium">{item.title}</p>
        <p className="text-sm sm:text-base font-normal">({item.subTitle})</p>
      </div>
    </div>
  );

  return (
    <section className="bg-white overflow-x-hidden">
      <div
        className="flex flex-wrap justify-between items-center p-5 sm:p-8 md:p-10 lg:p-14 xl:p-16 gap-5 md:gap-8"
        ref={sectionRef}
      >
        <div className="font-medium text-2xl sm:text-3xl md:text-4xl space-y-2 md:text-left">
          <p ref={line1Ref} className="general-sans overflow-hidden">
            Specialized
          </p>
          <p ref={line2Ref} className="general-sans overflow-hidden">
            Registration & Filings
          </p>
        </div>

        <div className="luxury-badge max-md:hidden text-xl">
          <span className="luxury-dot"></span>
          Auditique Consulting
        </div>
      </div>

      {/* === Marquee Section 1 === */}
      <Marquee autoFill={true}>
        <div className="flex gap-5 md:gap-7 px-3 py-4">
          {marqueeData1.map((item, i) => renderCard(item, i, "marquee-1"))}
        </div>
      </Marquee>

      {/* === Marquee Section 2 === */}
      <Marquee autoFill={true} direction="right">
        <div className="flex gap-5 md:gap-7 px-3 py-4">
          {marqueeData2.map((item, i) => renderCard(item, i, "marquee-2"))}
        </div>
      </Marquee>
    </section>
  );
};

export default HomeSpecializedRegistrationFilings;
