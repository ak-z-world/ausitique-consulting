"use client";
import gsap from "gsap";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { id: "01", title: "Sole Proprietorship" },
  { id: "02", title: "GST Registration" },
  { id: "03", title: "Income Tax Return (ITR) Filing" },
  { id: "04", title: "EPFO Registration" },
  { id: "05", title: "TDS Returns Filing" },
];

const HomeOurCoreServices = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const orbRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const pulseRef = useRef<HTMLParagraphElement | null>(null);

  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  /* Mouse follow orb */
  useEffect(() => {
    const move = (e: MouseEvent) => {
      target.current = {
        x: e.clientX - 100,
        y: e.clientY - 100,
      };
    };

    window.addEventListener("mousemove", move);

    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

    const animate = () => {
      current.current.x = lerp(current.current.x, target.current.x, 0.08);
      current.current.y = lerp(current.current.y, target.current.y, 0.08);

      if (orbRef.current) {
        orbRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`;
      }

      raf.current = requestAnimationFrame(animate);
    };

    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", move);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  /* pulse animation */
  useEffect(() => {
    if (!pulseRef.current) return;

    gsap.to(pulseRef.current, {
      scale: 1.08,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  /* stagger reveal animation */
  useLayoutEffect(() => {
    if (!listRef.current) return;

    gsap.fromTo(
      listRef.current.children,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: listRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="relative p-6 sm:p-10 md:p-14 bg-gradient-to-br from-white via-blue-50 to-yellow-50 overflow-hidden">

      {/* floating animated orb */}
      <div
        ref={orbRef}
        className="pointer-events-none fixed top-0 left-0 w-[200px] h-[200px] rounded-full blur-3xl opacity-30 z-50"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.6), rgba(234,179,8,0.4))",
        }}
      />

      {/* background glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-200 opacity-30 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-200 opacity-30 blur-[120px] rounded-full animate-pulse" />

      {/* heading */}
      <div className="flex justify-center">
        <p
          ref={pulseRef}
          className="text-[#0B2A5B] border border-blue-200 bg-white shadow-md font-semibold rounded-full px-6 py-2"
        >
          Our Core Services
        </p>
      </div>

      {/* services list */}
      <div className="flex justify-center mt-14">
        <div
          ref={listRef}
          className="flex flex-col items-center gap-10 w-full max-w-3xl"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* animated underline glow */}
              <div
                className="absolute -inset-4 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(37,99,235,0.4), rgba(234,179,8,0.4))",
                }}
              />

              {/* text */}
              <p
                className="relative text-[#0B2A5B] text-2xl md:text-3xl font-semibold transition-all duration-500"
                style={{
                  transform:
                    hovered === index ? "scale(1.08)" : "scale(1)",
                  background:
                    hovered === index
                      ? "linear-gradient(90deg,#2563eb,#eab308)"
                      : "none",
                  WebkitBackgroundClip:
                    hovered === index ? "text" : "initial",
                  WebkitTextFillColor:
                    hovered === index ? "transparent" : "#0B2A5B",
                }}
              >
                {service.id}. {service.title}
              </p>

              {/* animated underline */}
              <div
                className="h-[2px] mt-2 transition-all duration-500"
                style={{
                  width: hovered === index ? "100%" : "0%",
                  background:
                    "linear-gradient(90deg,#2563eb,#eab308)",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full opacity-30"
            style={{
              background:
                i % 2 === 0 ? "#2563eb" : "#eab308",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s infinite ease-in-out alternate`,
            }}
          />
        ))}
      </div>

      {/* local animation */}
      <style jsx>{`
        @keyframes float {
          from {
            transform: translateY(0px);
          }
          to {
            transform: translateY(-20px);
          }
        }
      `}</style>

    </section>
  );
};

export default HomeOurCoreServices;