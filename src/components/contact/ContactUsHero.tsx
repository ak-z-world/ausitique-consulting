"use client";
import React, { useLayoutEffect, useRef } from "react";
import { Header } from "../layout";
import Image from "next/image";
import gsap from "gsap";

const ContactUsHero = () => {
  const titleRef = useRef(null);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const buttonRef = useRef(null);
  const heroImgRef = useRef(null);
  const icon1Ref = useRef(null);
  const icon2Ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(titleRef.current, {
        autoAlpha: 0,
        y: 60,
        skewY: 10,
        duration: 1.2,
        ease: "power3.out",
      });

      tl.from(
        textRefs.current,
        {
          autoAlpha: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.6"
      );

      tl.from(
        buttonRef.current,
        {
          x: -40,
          autoAlpha: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      );

      tl.from(
        heroImgRef.current,
        {
          scale: 0.9,
          autoAlpha: 0,
          duration: 1,
          ease: "back.out(1.7)",
        },
        "-=1"
      );

      tl.from(
        [icon1Ref.current, icon2Ref.current],
        {
          autoAlpha: 0,
          y: 10,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=1"
      );

      // Float animation for icons (heartbeat effect)
      gsap.to(icon1Ref.current, {
        y: -15,
        scale: 1.05,
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: "sine.inOut",
      });

      gsap.to(icon2Ref.current, {
        y: 15,
        scale: 1.05,
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <main className="rounded-b-[40px] bg-white">
      <div className="pt-2 rounded-b-[40px]">
        
        <div className="w-[90vw] mx-auto relative z-50">
          <Header bgColor="black" textColor="white" />
        </div>

        <div className="flex flex-col-reverse mt-28 sm:mt-20 md:mt-0 md:flex-row gap-3 md:gap-10 general-sans px-5 md:px-14 lg:px-32 xl:px-40 justify-between pt-7 md:pt-12 lg:pt-16 h-full items-center">
          {/* Left Section */}
          <div className="flex flex-col pb-5 md:pb-20 gap-6 w-full lg:w-2/3 text-center lg:text-left">
            <p
              ref={titleRef}
              className="text-3xl md:text-4xl lg:text-5xl font-medium will-change-transform"
            >
              Get Your Queries Answered Instantly on{" "}
              <span className="font-semibold bg-gradient-to-r from-[#047D00] to-[#0DC707] text-transparent bg-clip-text">
                WhatsApp
              </span>
            </p>
            <p
              ref={(el) => {
                textRefs.current[0] = el;
              }}
              className="text-base md:text-lg will-change-transform"
            >
              Whether you need help with services, pricing, or general
              inquiries, our team is just a message away
            </p>
            <p
              ref={(el) => {
                textRefs.current[1] = el;
              }}
              className="text-base md:text-lg will-change-transform"
            >
              Connect With Our Support Team!
            </p>
            <a href="https://wa.me/6379920255" target="_blank">
              <div className="flex justify-center lg:justify-start">
                <button
                  ref={buttonRef}
                  className="bg-gradient-to-r from-[#212121] to-[#070707] hover:from-gray-500 hover:to-gray-700 
             px-8 py-3 rounded-4xl text-white cursor-pointer will-change-transform"
                >
                  Chat now
                </button>
              </div>
            </a>
          </div>

          {/* Right Image + Icons */}
          <div className="relative w-full h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] will-change-transform">
            <Image
              alt="contact-hero"
              className="absolute w-full h-full object-contain sm:object-cover "
              src={"/images/contact-us-hero2.png"}
              width={400}
              height={500}
              ref={heroImgRef}
            />
            <Image
              alt="whatsapp-icon"
              className="absolute top-1/3 left-0 will-change-transform"
              src={"/icons/whatsapp-icon.svg"}
              width={80}
              height={80}
              ref={icon1Ref}
            />
            <Image
              alt="whatsapp-icon"
              className="absolute right-0 top-1/2 will-change-transform"
              src={"/icons/whatsapp-icon.svg"}
              width={60}
              height={60}
              ref={icon2Ref}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUsHero;
