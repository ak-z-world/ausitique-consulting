"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ITR1KeyServices = () => {
  const textRef = useRef<HTMLDivElement>(null);
  // const cardRefs = useRef<HTMLDivElement[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  // const addToCardRefs = (el: HTMLDivElement | null) => {
  //   if (el && !cardRefs.current.includes(el)) {
  //     cardRefs.current.push(el);
  //   }
  // };

  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     // Animate text
  //     gsap.from(textRef.current, {
  //       opacity: 0,
  //       y: 80,
  //       duration: 1.2,
  //       ease: "power4.out",
  //       scrollTrigger: {
  //         trigger: textRef.current,
  //         start: "top 80%",
  //         once: true,
  //       },
  //     });

  //     // Animate cards with smooth stagger
  //     ScrollTrigger.batch(cardRefs.current, {
  //       interval: 0.2,
  //       batchMax: 3,
  //       onEnter: (batch) =>
  //         gsap.fromTo(
  //           batch,
  //           { opacity: 0, y: 80, scale: 0.95 },
  //           {
  //             opacity: 1,
  //             y: 0,
  //             scale: 1,
  //             duration: 1.2,
  //             ease: "power4.out",
  //             stagger: { each: 0.25, from: "start" },
  //           }
  //         ),
  //       once: true,
  //     });

  //     // Refresh after images load
  //     window.addEventListener("load", () => ScrollTrigger.refresh());
  //   }, sectionRef);

  //   return () => ctx.revert();
  // }, []);

  const services = [
    { title: "E-Verify Return", image: "/images/itr1KeySerivces1.jpg", description: "Use Aadhaar OTP or EVC. If that fails, send signed ITR-V to CPC Bengaluru for completion." },
    { title: "Track ITR Status", image: "/images/itr1KeySerivces2.jpg", description:'Monitor your return and refund status on the income tax portal.' },
    { title: "Revise if Needed:", image: "/images/itr1KeySerivces2.jpg", description:' Made a mistake? File a Revised Return under Section 139(5).' },
    { title: "Stay Alert", image: "/images/itr1KeySerivces2.jpg", description:' Respond to any notices from the department with expert help.' },
   
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-white min-h-screen px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 font-Bricolage_Grotesque"
    >
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 lg:gap-5">
        {/* Text Section */}
        <div
          className="flex flex-col gap-4 w-full lg:w-2/5 will-change-transform"
          ref={textRef}
        >
          {/* <p className="text-xs sm:text-sm">Key Services</p> */}
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug lg:leading-tight">
          What Happens After Filing?
          </p>
          {/* <p className="text-xs sm:text-sm md:text-base leading-5 sm:leading-6 text-gray-700">
            Explore our specialized internal audit services designed to manage
            risk, enhance control, and ensure operational and regulatory
            excellence
          </p> */}
          <button className="bg-[#070707] px-5 sm:px-8 py-2 sm:py-3 rounded-3xl text-white text-xs sm:text-sm w-fit">
            Book Consultation
          </button>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow w-full lg:w-3/5">
          {services.map((service, i) => (
            <div
              key={i}
              className={`relative h-64 sm:h-72 md:h-80 rounded-2xl transform transition-transform duration-500 hover:scale-[1.03] hover:-translate-y-2 will-change-transform ${
                i % 2 === 0 ? "sm:top-5" : ""
              }`}
              // ref={addToCardRefs}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                loading="lazy"
                src={service.image}
                alt={service.title}
                className="absolute w-full z-10 h-full object-cover rounded-2xl"
              />
              <div className="bg-black/75 absolute w-full h-full z-20 rounded-2xl" />
              <div className="flex flex-col justify-between absolute w-full h-full z-30 text-white p-4 sm:p-5 rounded-2xl">
                <p className="text-xl sm:text-2xl md:text-3xl">0{i+1}</p>
                <div className="flex flex-col gap-1 sm:gap-2">
                  <p className="text-lg sm:text-xl md:text-2xl">{service.title}</p>
                  <p className="text-[10px] sm:text-xs md:text-sm leading-4 sm:leading-5">
                   {service.description}
                  </p>
                </div>
                <div className="flex justify-end">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/icons/ArrowUpRight.svg"
                    alt="Arrow Icon"
                    className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITR1KeyServices;
