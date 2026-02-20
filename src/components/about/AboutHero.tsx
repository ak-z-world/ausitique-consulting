/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Header } from "../layout";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RxDotsHorizontal } from "react-icons/rx";
import { CountUp, ShinnyText } from "../animations";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const AboutHero = () => {
  const leftContentRef = useRef(null);
  const rightBoxesRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef(null);
  const avatarRef = useRef(null);
  const wrapperRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const rightBoxesChildren = rightBoxesRef.current
        ? gsap.utils.toArray(rightBoxesRef.current.children)
        : [];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: leftContentRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.from(leftContentRef.current, {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power3.out",
        immediateRender: false,
      })
        .from(
          avatarRef.current,
          {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out",
            immediateRender: false,
          },
          "-=0.6"
        )
        .from(
          rightBoxesChildren,
          {
            opacity: 0,
            scale: 0.8,
            stagger: 0.2,
            duration: 1,
            ease: "back.out(1.7)",
            immediateRender: false,
          },
          "-=0.6"
        )
        .from(
          cardRef.current,
          {
            x: 100,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out",
            immediateRender: false,
          },
          "-=1"
        );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.fromTo(
      wrapperRef.current,
      { clipPath: "inset(0 100% 0 0)" },
      {
        clipPath: "inset(0 0% 0 0)",
        duration: 4,
        ease: "power2.out",
        delay: 2,
      }
    );
  }, []);

  return (
    <main>
      <div className="bg-black mt-2 general-sans text-white overflow-hidden">
      
        <div className="w-[90vw] mx-auto relative z-50">
          <Header />
        </div>

        <div className="flex  flex-grow md:flex-grow-0 gap-5 mt-28 md:mt-20 xl:mt-10 p-5 sm:p-8 md:p-10 lg:p-14 xl:p-16 justify-between items-center">
          {/* LEFT SIDE */}
          <div
            className="md:w-1/2"
            ref={leftContentRef}
            style={{ willChange: "transform, opacity" }}
          >
            <div className="text-3xl sm:text-4xl md:text-5xl  xl:text-6xl">
              <h1 className=" font-semibold md:leading-13 xl:leading-16">
                Smart Tax Solutions
              </h1>
              <div className=" font-semibold md:leading-13 xl:leading-16">
                for Every{" "}
                <ShinnyText
                  text=" Indian"
                  disabled={false}
                  speed={2}
                  className="custom-class"
                />
              </div>
            </div>

            <h2 className="text-sm mt-5 font-normal w-full lg:w-2/3">
              Expert accounting, tax planning, and financial consulting services
              to support and scale your business.
            </h2>

            <div
              className="flex gap-5 mt-10 flex-wrap"
              ref={avatarRef}
              style={{ willChange: "transform, opacity" }}
            >
              <Link href="/contact">
                <button className="bg-white px-10 py-2 cursor-pointer hover:text-white hover:bg-gray-700 transition-all duration-300 text-black rounded-4xl h-full text-sm font-medium">
                  Get Started
                </button>
              </Link>

              <div className="flex gap-3">
                <div className="flex -space-x-3">
                  <img src="/icons/about-hero-circleimage1.svg" alt="" />
                  <img src="/icons/about-hero-circleimage2.svg" alt="" />
                  <img src="/icons/about-hero-circleimage3.svg" alt="" />
                </div>

                <div className="flex flex-col">
                  <p className="font-medium text-lg">100k+</p>
                  <p className="text-sm">Customer Satisfied</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className="max-md:hidden flex-col gap-8 flex"
            ref={rightBoxesRef}
            style={{ willChange: "transform, opacity" }}
          >
            <div className="relative h-52 w-96 lg:right-40 xl:right-48 2xl:right-56">
              <img
                src="/images/about-hero-image1.svg"
                alt=""
                className="w-full h-full"
              />

              {/* <div className="absolute p-5 hidden md:block -left-32 -top-16 bg-white text-black rounded-2xl w-full h-fit z-10">
                <div className="flex gap-5 ">
                  <div className="w-10 h-10 flex-shrink-0 rounded-full bg-gray-200"></div>
                  <div>
                    <p className="text-lg font-medium">Andi Gunawan</p>
                    <p className="text-sm">
                      The tax report has been finalized and is now ready for
                      your review
                    </p>
                  </div>
                </div>
                <hr className="border-[#EBEBEB] mx-5 mt-2" />
                <div className="flex justify-between mt-2">
                  <p>Reply</p>
                  <p>19:00 PM</p>
                </div>
              </div> */}
            </div>

            <div className="relative h-96 w-72 xl:w-80">
              <div
                ref={cardRef}
                className="absolute bg-white rounded-xl p-3 w-3/4 h-1/5 z-50 left-28 top-1/3"
                style={{ willChange: "transform, opacity" }}
              >
                <div className="flex justify-between general-sans font-medium text-xs text-black">
                  <p>104 Reports</p>
                  <div>
                    <CountUp from={0} to={100} duration={5} /> <span>%</span>
                  </div>
                </div>

                <div ref={wrapperRef} className="w-full mt-1 relative h-1/2">
                  <Image
                    alt="a"
                    src="./images/reports.svg"
                    fill
                    className="object-contain absolute w-full h-full"
                  />
                </div>
              </div>

              <div className="absolute left-20 xl:left-0 bg-gradient-to-r from-[#191919] via-[#2f2f2f] to-[#191919] w-full h-full rounded-2xl z-10 px-7 pt-14 pb-7">
                <img
                  src="/images/about-hero-image2.svg"
                  alt=""
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              <div className="absolute max-lg:hidden block bottom-5 -left-20 xl:-left-64 p-5 bg-white text-black rounded-2xl lg:w-3/4 xl:w-full z-10">
                <div className="flex justify-between items-center">
                  <img src="/icons/aboutus-bluedollor-icon.svg" alt="" />
                  <RxDotsHorizontal className="text-black text-lg" />
                </div>
                <p className="mt-5 text-2xl font-medium">$500.00</p>
                <p className="text-sm">
                  A total of $500 has been successfully managed and allocated
                  for this week’s activities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutHero;
