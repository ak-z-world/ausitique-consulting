"use client";
import React, { useEffect, useRef, useState } from "react";
import { Header } from "../layout";
import { IoSearchOutline } from "react-icons/io5";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShinnyText } from "../animations";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    pathName: "sole-proprietorship-registration-online",
    label: "Sole Proprietorship",
  },
  { pathName: "apply-udyam-registration-online", label: "Udayam Registration" },
  { pathName: "apply-gst-registration-online", label: "GST Registration" },
  { pathName: "apply-fssai-registration-online", label: "FSSAI Registration" },
  {
    pathName: "epfo-registration-online-for-employees",
    label: "EPFO Registration",
  },
  { pathName: "income-tax-efiling-in-india", label: "Income Tax e-Filing" },
  { pathName: "gst-return-filing-online", label: "GST Return Filing" },
  { pathName: "dir-3-kyc-filing-online", label: "DIN eKYC Filing" },
  {
    pathName: "income-tax-return-itr-4-filing-online",
    label: "ITR-2 Return Filing",
  },
  {
    pathName: "file-income-tax-return-itr-3-online",
    label: "ITR-3 Return Filing",
  },
  {
    pathName: "file-income-tax-return-itr-2-online",
    label: "ITR-2 Return Filing",
  },
  { pathName: "income-tax-return-itr-1-filing-online", label: "ITR-1 Filing" },
  { pathName: "file-tds-return-online", label: "TDS Return Filing" },
];

const HomeHero = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const line1Ref = useRef<HTMLParagraphElement | null>(null);
  const line2Ref = useRef<HTMLParagraphElement | null>(null);
  const searchBoxRef = useRef<HTMLDivElement | null>(null);
  const circularRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  // 1. 3D transform animation
  useEffect(() => {
    cardsRef.current.forEach((card) => {
      gsap.set(card, {
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      });
    });

    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          const { innerWidth, innerHeight } = window;
          const centerX = innerWidth / 2;
          const centerY = innerHeight / 2;
          const deltaX = e.clientX - centerX;
          const deltaY = e.clientY - centerY;

          cardsRef.current.forEach((card) => {
            const rect = card.getBoundingClientRect();
            const cardCenterX = rect.left + rect.width / 2;
            const directionX = cardCenterX < centerX ? 1 : -1;
            gsap.to(card, {
              rotateY: (deltaX / 17) * directionX,
              rotateX: -deltaY / 17,
              duration: 0.6,
              ease: "power2.out",
              overwrite: true,
            });
          });
          ticking = false;
        });
      }
    };

    const handleMouseLeave = () => {
      cardsRef.current.forEach((card) => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // 2. Text animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from([line1Ref.current, line2Ref.current], {
        yPercent: 200,
        opacity: 0,
        skewY: 10,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.2,
        clipPath: "inset(0 0 100% 0)",
      });

      tl.from(
        circularRef.current,
        {
          scale: 0.3,
          rotateY: 120,
          opacity: 0,
          transformOrigin: "center center",
          duration: 1.8,
          ease: "expo.out",
        },
        "-=1.2"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 3. Typing animation
  const [query, setQuery] = useState("");
  const [filteredServices, setFilteredServices] = useState(services);
  const [placeholder, setPlaceholder] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [serviceIndex, setServiceIndex] = useState(0);

  useEffect(() => {
    const currentServiceLabel = services[serviceIndex].label;
    const typingDelay = 100;
    const holdDelay = 2000;

    if (typingIndex < currentServiceLabel.length) {
      const timeout = setTimeout(() => {
        setPlaceholder(currentServiceLabel.slice(0, typingIndex + 1));
        setTypingIndex((prev) => prev + 1);
      }, typingDelay);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setTypingIndex(0);
        setServiceIndex((prev) => (prev + 1) % services.length);
      }, holdDelay);
      return () => clearTimeout(timeout);
    }
  }, [typingIndex, serviceIndex]);

  // 4. Search filter
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setQuery(input);
    if (input.trim() === "") {
      setFilteredServices([]);
      return;
    }
    const filtered = services.filter((service) =>
      service.label.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredServices(filtered);
  };

  return (
    <main>
      <div className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-yellow-50 text-[#0B2A5B]">

        {/* Ambient background */}
        <div className="absolute inset-0 -z-10">

          {/* Blue accent */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 blur-[120px] rounded-full opacity-60" />

          {/* Yellow accent */}
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-100 blur-[120px] rounded-full opacity-60" />

        </div>

        <div className="w-full relative z-50 md:w-[90vw] mx-auto">
          <Header />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-12 px-4 sm:px-6 lg:px-12 mt-6 lg:mt-10 w-full max-w-[1200px] mx-auto">

          {/* Center Text */}
          <div
            ref={sectionRef}
            className="flex flex-col items-start text-left gap-4 w-full max-w-[600px]"
          >
            <h1
  ref={line1Ref}
  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0B2A5B] leading-tight whitespace-nowrap"
>
  Tax and Business
</h1>
            <h1
              ref={line2Ref}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0B2A5B]"
            >
              Consultancy Services
            </h1>
            <div className="mt-4 text-gray-600 text-base leading-relaxed">
              <ShinnyText
                text="At Auditique Consulting, we provide expert Tax and Business Consultancy Services to minimize your taxes and grow."
                disabled={false}
                speed={2}
                className="custom-class"
              />
            </div>

            <div className="relative w-full max-w-md mt-5" ref={searchBoxRef}>
              <div className="group relative bg-white border border-gray-200 rounded-xl flex items-center px-4 py-3 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex gap-2 flex-grow items-center">
                  <IoSearchOutline className="text-black ms-5 text-2xl" />
                  <input
                    type="text"
                    className="bg-transparent outline-none text-gray-800 placeholder-gray-400 w-full text-sm"
                    placeholder={placeholder}
                    value={query}
                    onChange={handleSearch}
                  />
                </div>
                <button className="bg-[#FFC107] hover:bg-[#e6ac00] text-[#0B2A5B] font-semibold px-6 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                  Search <span className="hidden sm:inline-block">Service</span>
                </button>
              </div>

              <div
                className={`absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-10 overflow-hidden transition-all duration-500 ease-in-out
                  ${query
                    ? "opacity-100 scale-y-100 h-fit max-h-28 scrollbar-hide overflow-y-auto pointer-events-auto"
                    : "opacity-0 scale-y-0 pointer-events-none"
                  }
                `}
              >
                {filteredServices.length > 0 ? (
                  filteredServices.map((service, index) => (
                    <Link key={index} href={`/services/${service.pathName}`}>
                      <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black">
                        {service.label}
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="px-4 py-2 text-gray-500">
                    No service found
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex justify-center lg:justify-center w-full">

            <div
              ref={addToRefs}
              className="relative w-full max-w-[420px] aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white"
            >

              <video
                src="/videos/home-hero-video1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute w-full h-full object-cover"
              />

            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeHero;
