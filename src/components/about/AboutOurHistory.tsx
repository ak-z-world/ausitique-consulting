/* eslint-disable @next/next/no-img-element */

"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutOurHistory = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    // Only run on large screens
    if (window.innerWidth < 768) return;
  
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
  
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 95%",
            toggleActions: "play none none reset",
          },
          autoAlpha: 0,
          y: 50,
          duration: 0.8,
          ease: "power2.out",
          delay: i * 0.1,
          force3D: true,
          clearProps: "all",
        });
      });
    }, sectionRef);
  
    return () => ctx.revert();
  }, []);
  

  return (
    <section className="" ref={sectionRef}>
      <div className="grid grid-cols-1 md:grid-cols-3 general-sans p-5 sm:p-8 md:p-10 lg:p-14 xl:p-16 gap-5">
        {/* Left Column */}
        <div className="grid gap-5 grid-cols-1 flex-grow md:grid-rows-3 rounded-2xl">
          <div
            ref={(el) => {
              cardsRef.current[0] = el;
            }}
            className="bg-white rounded-2xl flex flex-col md:row-span-2"
          >
            <div className="relative flex-grow min-h-[150px] md:h-[220px] lg:h-[50%]">
              <img
                src="/images/about-ourHistory-image1.png"
                alt=""
                className="w-full h-full z-10 absolute object-cover flex-grow rounded-t-2xl"
              />
              <div className="bg-gradient-to-b z-20 from-transparent from-70% to-white w-full h-full absolute"></div>
            </div>
            <div className="p-3">
              <p className="font-medium text-xl"> Document Collection</p>
              <p className="font-normal text-sm">
                We carefully gather all the essential documents required for
                your application. This ensures that the process starts smoothly
                without any delays caused by missing paperwork.
              </p>
            </div>
          </div>

          <div
            ref={(el) => {
              cardsRef.current[1] = el;
            }}
            className="bg-white flex-grow rounded-2xl"
          >
            <div className="w-full relative min-h-[150px] md:h-[200px] lg:h-[65%] flex-grow rounded-2xl">
              <img
                src="/images/about-ourHistory-image1.png"
                alt=""
                className="absolute w-full h-full flex-grow z-10  object-cover rounded-t-2xl"
              />
              <div className="bg-gradient-to-b z-20 from-transparent from-70% to-white w-full h-full absolute"></div>
            </div>
            <p className="font-medium text-xl mt-3 px-3">
              Accurate Application Filing
            </p>
            <p className="font-normal text-sm px-3 pb-4">
              We prepare and submit application forms accurately to prevent
              costly errors and speed up approvals.
            </p>
          </div>
        </div>

        {/* Middle Column */}
        <div className="grid gap-5 grid-cols-1 md:grid-rows-3">
          <div
            ref={(el) => {
              cardsRef.current[2] = el;
            }}
            className="bg-white flex flex-col rounded-2xl row-span-4"
          >
            <div className="w-full flex-grow h-[200px] md:h-[240px] lg:h-[65%] relative rounded-2xl">
              <img
                src="/images/about-ourHistory-image3.png"
                alt=""
                className="w-full h-full z-10 absolute object-cover rounded-t-2xl"
              />
              <div className="bg-gradient-to-b z-20 from-transparent from-90% to-white w-full h-full absolute"></div>
            </div>
            <div className="p-3">
              <p className="font-medium text-xl">Regulatory Approval Support</p>
              <p className="font-normal text-sm">
                We actively assist in communicating with regulatory authorities
                to secure prompt and timely approvals.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="grid gap-5 grid-cols-1 md:grid-rows-3 rounded-2xl">
          <div
            ref={(el) => {
              cardsRef.current[3] = el;
            }}
            className="bg-white rounded-2xl flex flex-col md:row-span-2"
          >
            <div className="w-full h-[160px] flex-grow md:h-[200px] lg:h-[50%] relative rounded-2xl">
              <img
                src="/images/about-ourHistory-image4.png"
                alt=""
                className="w-full h-full z-10 absolute object-cover rounded-t-2xl"
              />
              <div className="bg-gradient-to-b z-20 from-transparent from-90% to-white w-full h-full absolute"></div>
            </div>
            <div className="p-3">
              <p className="font-medium text-xl">Eligibility Verification</p>
              <p className="font-normal text-sm">
                We thoroughly review your information to confirm that you meet
                all the eligibility criteria set by regulatory authorities. This
                step helps avoid unnecessary rejections and speeds up approval.
              </p>
            </div>
          </div>

          <div
            ref={(el) => {
              cardsRef.current[4] = el;
            }}
            className="bg-white rounded-2xl"
          >
            <div className="w-full flex-grow h-[200px] md:h-[240px] lg:h-[65%] relative rounded-2xl">
              <img
                src="/images/about-ourHistory-image5.png"
                alt=""
                className="w-full h-full z-10 absolute object-cover rounded-t-2xl"
              />
              <div className="bg-gradient-to-b z-20 from-transparent from-90% to-white w-full h-full absolute"></div>
            </div>
            <p className="font-medium text-xl mt-3 px-3">
              Application Tracking and Updates
            </p>
            <p className="font-normal text-sm px-3 pb-4">
              We consistently track your application status and provide regular
              updates to keep you fully informed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOurHistory;
