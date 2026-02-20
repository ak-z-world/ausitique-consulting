/* eslint-disable @next/next/no-img-element */

"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

const data = [
  {
    id: "01",
    title: "Nationwide-Expertise",
    image: "/images/home-whatmakesus-differnet-image1.png",
  },
  {
    id: "02",
    title: "Personalized Financial-Solutions",
    image: "/images/home-whatmakesus-differnet-image2.png",
  },
  {
    id: "03",
    title: "Multi Sector-Proficiency",
    image: "/images/home-whatmakesus-differnet-image3.png",
  },
  {
    id: "04",
    title: "Tech Enabled-Delivery",
    image: "/images/home-whatmakesus-differnet-image4.png",
  },
];

const HomeWhatMakesUsDifferent = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const headingTextRef = useRef<HTMLDivElement>(null);
  const subHeadingTextRef = useRef<HTMLDivElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);
  const pulseRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingTextRef.current) {
        gsap.from(Array.from(headingTextRef.current.children), {
          opacity: 0,
          y: 50,
          duration: 1.2,
          stagger: 0.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: headingTextRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
            markers: false,
            scroller: undefined,
            fastScrollEnd: true,
            anticipatePin: 1,
          },
        });
      }

      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { y: -200, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power4.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.to(imageRef.current, {
          rotate: 360,
          duration: 6,
          repeat: -1,
          ease: "linear",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      }

      if (subHeadingTextRef.current) {
        gsap.from(Array.from(subHeadingTextRef.current.children), {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: subHeadingTextRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      }

      if (cardsWrapperRef.current) {
        const cards = gsap.utils.toArray<HTMLDivElement>(".service-card");
        cards.forEach((card, i) => {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 20,
              scale: 0.8,
              rotateY: 15,
              transformOrigin: "center",
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotateY: 0,
              duration: 1.2,
              ease: "back.out(1.7)",
              delay: i * 0.15,
              scrollTrigger: {
                trigger: card,
                start: "top 95%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (pulseRef.current) {
      gsap.to(pulseRef.current, {
        scale: 1.2,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="general-sans xxx bg-white text-black"
    >
      {/* Heading Section */}
      <div className="flex flex-col p-5 sm:p-8 md:p-10 lg:p-14 xl:p-16 gap-2 sm:gap-5 items-center justify-center text-center">
        <div
          // ref={headingTextRef}
          className="flex flex-wrap  items-center justify-center gap-2 sm:gap-5 font-medium text-2xl sm:text-4xl md:text-5xl"
        >
          <p>What</p>
          <video
            src="/videos/home-what-makeus-different-video1.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-20 sm:w-28 h-9 md:h-13 rounded-3xl hover:w-50 transition-all duration-2000 ease-in object-cover"
          />
          <p>Makes Us Different</p>
          <div
            className="w-10 sm:w-14 h-auto overflow-hidden will-change-transform"
            ref={imageRef}
          >
            <Image
              alt="tax-business-consulting"
              src="/icons/home-cirlce-icon.svg"
              width={50}
              height={40}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Subheading */}
        <div
          ref={subHeadingTextRef}
          className="flex flex-wrap justify-center items-center gap-4 sm:gap-5 font-medium text-2xl sm:text-4xl md:text-5xl"
        >
          <p>For</p>
          <div ref={pulseRef} className="w-10 sm:w-14 h-auto">
            <Image
              alt="tax-business-consulting"
              src="/icons/home-play-icon.svg"
              width={50}
              height={40}
            />
          </div>
          <p>Our Clients</p>
          <div className="w-14 sm:w-20 h-auto hidden sm:inline-block">
            <Image
              src="/icons/home-our-clients-icon.svg"
              alt="Client Icon"
              width={70}
              height={80}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div
        ref={cardsWrapperRef}
        className="max-md:hidden p-5 sm:p-8 md:p-10 lg:p-14 xl:p-16 grid grid-cols-2 lg:grid-cols-4 pt-12 lg:pt-16 gap-5 sm:gap-7 md:gap-12"
      >
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`service-card bg-[#E8E8E8] lg:saturate-0 relative rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer h-[300px] md:h-[26rem] transition-all duration-700 ${
              index === 0 ? "hover:saturate-500" : "hover:saturate-100"
            } will-change-transform`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="absolute z-10 object-cover w-full h-full"
            />
            <div className="absolute w-full h-full bg-gradient-to-b from-transparent from-70% to-black z-20"></div>
            <div className="absolute z-30 bottom-0 p-4 sm:p-6">
              <p className="text-white text-sm sm:text-xs font-medium">
                {item.id}
              </p>
              <p className="text-white text-xl sm:text-2xl font-medium md:font-semibold leading-snug">
                {item.title.split('-')[0]}
              </p>
              <p className="text-white text-xl sm:text-2xl font-medium md:font-semibold leading-snug">
                {item.title.split('-')[1]}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Swiper */}
      <div className="md:hidden py-5 h-80 overflow-hidden relative w-full flex">
        <Swiper
          effect="cards"
          grabCursor={true}
          loop={true}
          modules={[EffectCards]}
          className="w-[70vw]"
        >
          {data.map((item, index) => (
            <SwiperSlide
              key={index}
              className="relative flex items-center justify-center rounded-3xl shadow-sm shadow-black/10 hover:shadow-xl"
            >
              <div className="absolute -z-20 bg-gradient-to-b from-transparent from-60% to-black h-full w-full"></div>
              <img
                src={item.image}
                alt=""
                className="w-full rounded-3xl h-full -z-40 bg-gradient shadow-black object-cover absolute inset-0"
              />
              <div className="absolute bottom-5 z-10 w-full h-fit justify-start items-end text-white left-4">
                <p className="font-medium text-xl">{item.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeWhatMakesUsDifferent;
