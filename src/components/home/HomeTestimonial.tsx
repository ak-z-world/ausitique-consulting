"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HomeTestimonial = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const subheadingRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 45%",
      },
    });

    tl.fromTo(
      headingRef.current,
      {
        clipPath: "inset(0 100% 0 0)",
        autoAlpha: 0,
        willChange: "clip-path, opacity",
      },
      {
        clipPath: "inset(0 0% 0 0)",
        autoAlpha: 1,
        duration: 1,
        ease: "power2.out",
        clearProps: "clipPath, opacity",
      }
    )
      .fromTo(
        subheadingRef.current,
        {
          clipPath: "inset(0 100% 0 0)",
          autoAlpha: 0,
          willChange: "clip-path, opacity",
        },
        {
          clipPath: "inset(0 0% 0 0)",
          autoAlpha: 1,
          duration: 1,
          ease: "power2.out",
          clearProps: "clipPath, opacity",
        },
        "-=0.7"
      )
      .fromTo(
        textRef.current,
        {
          y: 20,
          autoAlpha: 0,
          willChange: "transform, opacity",
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          ease: "power2.out",
          clearProps: "transform, opacity",
        },
        "-=0.5"
      );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      {
        autoAlpha: 0,
        y: 60,
        rotate: 5,
        scale: 0.95,
        willChange: "transform, opacity",
      },
      {
        autoAlpha: 1,
        y: 0,
        rotate: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        force3D: true,
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 75%",
        },
        clearProps: "transform, opacity",
      }
    );
  }, []);

  //   let a=[1,2,1,3,5]
  // let b=a.filter((item,index,array) => array.indexOf(item)===index )
  // console.log(b);

  // let a = ['a', 'b', 'c', 'e', 'i', 'z', 'o', 'u', 'd'];
  // let b = ['a', 'e', 'i', 'o'];
  // let c = a.filter(element => b.indexOf(element) === -1);
  // console.log(c);

  return (
    <section
      className="bg-white   p-5 sm:p-8 md:p-10 lg:p-14 xl:p-16
 general-sans"
    >
      <p className="border rounded-2xl px-3 font-medium text-sm py-1 border-gray-300 w-fit mx-auto text-gray-700">
        Testimonials
      </p>

      <div
        ref={headingRef}
        className="font-medium text-2xl sm:text-4xl lg:text-5xl mt-5 mx-auto w-fit text-center opacity-0 will-change-auto"
      >
        Real Stories. True Trust.
      </div>

      <div
        ref={subheadingRef}
        className="font-medium text-2xl sm:text-4xl lg:text-5xl sm:mt-1 mx-auto w-fit text-center opacity-0 will-change-auto"
      >
        Proven Results.
      </div>

      <p
        ref={textRef}
        className="font-normal text-sm mt-2 mx-auto w-full max-w-[500px] text-[#000000] text-center opacity-0 will-change-auto"
      >
        Hear what our clients say about our service, support, and success
      </p>

      {/* <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="flex flex-wrap justify-center gap-8 mt-7 sm:mt-10 md:mt-16">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="rounded-3xl h-auto w-full sm:w-[calc(40%-1rem)] lg:w-72 flex-grow transform transition-all duration-300 hover:-translate-y-3 overflow-hidden border border-gray-200 shadow-lg bg-white will-change-transform"
            >
              <div className="relative w-full h-64">
                <Image
                  className="object-cover rounded-t-3xl"
                  alt="image"
                  fill
                  src="/images/dummy-image1.svg"
                />
              </div>
              <p className="p-4 font-inter font-semibold text-sm text-gray-800">
                Their team has been instrumental in keeping our finances
                organized and compliant. From tax planning to payroll,
                everything is handled with precision and professionalism.
              </p>
            </div>
          ))}
        </div>
      </Carousel> */}

      <Carousel
         responsive={responsive}
         swipeable
         draggable
         showDots={false}
         infinite
         autoPlay
         autoPlaySpeed={3000}
         keyBoardControl
         transitionDuration={500}
         containerClass="carousel-container"
         removeArrowOnDeviceType={["tablet", "mobile"]}
         itemClass="flex gap-5 justify-center pb-2 px-2 mt-8 md:mt-10 rounded-2xl"
      >
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className="rounded-3xl h-auto w-full lg:w-72 transform transition-all duration-300 hover:-translate-y-3 overflow-hidden border border-gray-200 shadow-lg bg-white"
          >
            <div className="relative w-full h-64">
              <Image
                className="object-cover rounded-t-3xl"
                alt="image"
                fill
                src="/images/dummy-image1.svg"
              />
            </div>
            <p className="p-4 text-sm font-semibold text-gray-800">
              Their team has been instrumental in keeping our finances organized
              and compliant.
            </p>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default HomeTestimonial;
