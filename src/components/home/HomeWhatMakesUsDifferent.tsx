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
      <div className="relative flex flex-col py-6 sm:py-8 md:py-10 gap-4 items-center justify-center text-center overflow-hidden">

        {/* Blue-Yellow glow orb */}
        <div className="absolute w-[300px] h-[300px] bg-gradient-to-r from-blue-500/20 to-yellow-400/20 blur-[120px] rounded-full animate-float pointer-events-none"></div>

        {/* Heading */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 font-semibold text-3xl sm:text-5xl md:text-6xl leading-tight">

          {/* WHAT with gradient effect */}
          <span className="relative gradient-text animate-fadeUp delay-100">
            What
            <span className="animated-underline"></span>
          </span>

          {/* Makes Us Different */}
          <span className="relative gradient-text animate-fadeUp delay-300">
            Makes Us Different
            <span className="animated-underline"></span>
          </span>

        </div>

        {/* Subheading */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-5 font-medium text-2xl sm:text-4xl md:text-5xl leading-tight">

          <span className="text-blue-500 animate-fadeUp delay-500 glow-blue">
            For
          </span>

          <span className="text-yellow-500 animate-fadeUp delay-700 glow-yellow">
            Our Clients
          </span>

        </div>

      </div>

      {/* Cards Section */}
      <div
  ref={cardsWrapperRef}
  className="relative py-16 flex flex-wrap justify-center gap-16 overflow-hidden bg-gradient-to-r from-blue-50 via-white to-yellow-50"
>

  {/* background blobs */}
  <div className="blob-bg blob-blue"></div>
  <div className="blob-bg blob-yellow"></div>

  {data.map((item, index) => (
    <div
      key={item.id}
      className="feature-item flex flex-col items-center text-center"
      style={{ animationDelay: `${index * 0.2}s` }}
    >

      {/* animated line */}
      <div className="feature-line"></div>

      {/* number */}
      <span className="feature-number">
        {item.id}
      </span>

      {/* title */}
      <span className="feature-text">
        {item.title.replace("-", " ")}
      </span>

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
