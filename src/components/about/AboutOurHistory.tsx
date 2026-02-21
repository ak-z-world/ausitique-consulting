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
    <div>
      
    </div>
  );
};

export default AboutOurHistory;
