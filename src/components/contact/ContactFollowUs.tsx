
"use client";
import React, { useRef, useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { GoArrowUpRight } from "react-icons/go";
import gsap from "gsap";
import Link from "next/link";

// const socials = ["Instagram", "Facebook", "LinkedIn"];
const socials = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/auditiqueconsulting?igsh=MTkzdWY3YmtpdGUwNQ==",
  },
  { name: "Facebook", link: "https://www.facebook.com/share/1EafaffhGhedjN/" },
  { name: "LinkedIn", link: "https://www.linkedin.com/company/auditiqueconsulting/" },
];
const repeatedTextMap: Record<string, string> = {};
socials.forEach((item) => {
  repeatedTextMap[item.name] = new Array(20)
    .fill(item.name)
    .join(" \u00A0\u00A0\u00A0 ");
});

const ContactFollowUs = () => {
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [hovered, setHovered] = useState<string | null>(null);
  const tweenRefs = useRef<gsap.core.Tween[]>([]); // Track tweens

  const handleMouseEnter = (item: string, index: number) => {
    setHovered(item);
    const el = textRefs.current[index];

    if (el) {
      // Kill any existing tween before starting a new one
      gsap.killTweensOf(el);

      const tween = gsap.fromTo(
        el,
        { x: 0 },
        {
          x: "-100%",
          duration: 80,
          ease: "linear",
          repeat: -1,
          overwrite: "auto",
          force3D: true,
        }
      );

      tweenRefs.current[index] = tween;
    }
  };

  const handleMouseLeave = (index: number) => {
    setHovered(null);
    const el = textRefs.current[index];
    if (el) {
      gsap.killTweensOf(el);
      gsap.set(el, { x: 0 });
    }
    tweenRefs.current[index] = null!;
  };

  // Clean up animations on unmount
  useEffect(() => {
    return () => {
      tweenRefs.current.forEach((tween) => {
        if (tween) tween.kill();
      });
    };
  }, []);

  return (
    <section>
      
    </section>
  );
};

export default ContactFollowUs;
