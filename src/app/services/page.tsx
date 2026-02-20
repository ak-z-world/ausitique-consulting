"use client";
import gsap from "gsap";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "@/components/layout";
gsap.registerPlugin(ScrollTrigger);
import Link from "next/link";

const dropdownData = [
  {
    pathName: "sole-proprietorship-registration-online",
    label: "Sole Proprietorship",
  },
  {
    pathName: "apply-udyam-registration-online",
    label: "Udayam Registration",
  },
  {
    pathName: "apply-gst-registration-online",
    label: "GST Registration",
  },
  {
    pathName: "apply-fssai-registration-online",
    label: "FSSAI Registration",
  },
  {
    pathName: "epfo-registration-online-for-employees",
    label: "EPFO Registration",
  },
  {
    pathName: "income-tax-efiling-in-india",
    label: "Income Tax e-Filing",
  },
  {
    pathName: "gst-return-filing-online",
    label: "GST Return Filing",
  },
  {
    pathName: "dir-3-kyc-filing-online",
    label: " DIN eKYC Filing",
  },
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
  {
    pathName: "income-tax-return-itr-1-filing-online",
    label: "ITR-1 Filing",
  },
  {
    pathName: "file-tds-return-online",
    label: "TDS Return Filing",
  },
];
const Page = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const targetPosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);
  const pulseRef = useRef(null);
  const lastMove = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastMove.current > 10) {
        // throttle to ~60fps
        targetPosition.current = { x: e.clientX + 20, y: e.clientY - 20 };
        lastMove.current = now;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const animate = () => {
      currentPosition.current.x = lerp(
        currentPosition.current.x,
        targetPosition.current.x,
        0.15
      );
      currentPosition.current.y = lerp(
        currentPosition.current.y,
        targetPosition.current.y,
        0.15
      );

      if (imageRef.current) {
        imageRef.current.style.transform = `translate3d(${currentPosition.current.x}px, ${currentPosition.current.y}px, 0)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (pulseRef.current) {
      gsap.to(pulseRef.current, {
        scale: 1.1,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, []);

  useLayoutEffect(() => {
    if (hovered !== null && imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        {
          scale: 0.2,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
        }
      );
    }
  }, [hovered]);

  return (
    <main className="overflow-hidden">
      <div className="py-2 pb-10 bg-gradient-to-br from-white via-blue-50 to-yellow-50 min-h-screen bg-cover bg-center text-[#0B2A5B]">
        
        <div className="w-full md:w-[90vw] mx-auto relative z-50">
          <Header />
        </div>

        <div className="flex justify-center mt-16">
          <p
            ref={pulseRef}
            className="text-[#0B2A5B] border border-blue-200 bg-white shadow-md font-semibold rounded-full px-4 py-1"
          >
            Our Core Services
          </p>
        </div>

        <div className="relative flex flex-col md:flex-row pb-10 justify-center mt-10 md:mt-16 gap-10 md:gap-20 items-start general-sans font-medium text-xl md:text-4xl overflow-hidden">
          {/* Services List */}
          <div className="flex flex-col w-full text-center">
            {dropdownData.map((service, index,array) => (
              <div
                key={index}
                className="pt-10 md:pt-14"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                onTouchStart={() => setHovered(index)}
                onTouchEnd={() => setHovered(null)}
              >
                <Link
                  href={`/services/${service.pathName}`}
                >
                  <p className="text-[#0B2A5B] md:text-2xl lg:text-3xl font-semibold hover:text-[#FFC107] hover:scale-105 md:hover:scale-110 transition-all duration-300">
                   {index <9 ? '0' :''}{index+1}. {service.label}
                  </p>
                </Link>

                {index !== array.length - 1 && (
                  <hr className="border border-blue-100 w-full md:w-2/3 mx-auto mt-8 md:mt-14" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
