"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { StaggerMenu } from "../animations";

interface HeaderProps {
  bgColor?: "white" | "black";
  textColor?: string;
}

const dropdownData = [
  { pathName: "income-tax-efiling-in-india", label: "Income Tax e-Filing" },
  { pathName: "income-tax-return-itr-1-filing-online", label: "ITR-1 Filing" },

  {
    pathName: "file-income-tax-return-itr-2-online",
    label: "ITR-2 Return Filing",
  },

  {
    pathName: "file-income-tax-return-itr-3-online",
    label: "ITR-3 Return Filing",
  },
  {
    pathName: "income-tax-return-itr-4-filing-online",
    label: "ITR-4 Return Filing",
  },
  {
    pathName: "sole-proprietorship-registration-online",
    label: "Sole Proprietorship",
  },
  { pathName: "apply-udyam-registration-online", label: "Udayam Registration" },

  { pathName: "apply-gst-registration-online", label: "GST Registration" },
  { pathName: "apply-fssai-registration-online", label: "FSSAI Registration" },
  {
    pathName: "epfo-registration-for-employer",
    label: "EPFO Registration",
  },
  { pathName: "dir-3-kyc-filing-online", label: " DIN eKYC Filing" },

  { pathName: "file-tds-return-online", label: "TDS Return Filing" },
];

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Learn about us", link: "/about-us" },
  { label: "Services", ariaLabel: "View our services", link: "/services" },
  { label: "Contact", ariaLabel: "Get in touch", link: "/contact-us" },
];

const socialItems = [
  { label: "LinkedIn", link: "https://www.linkedin.com/company/auditiqueconsulting/" },
  { label: "Facebook", link: "https://www.facebook.com/share/AuditiqueConsulting/" },
  {
    label: "Instagram",
    link: "https://www.instagram.com/auditiqueconsulting",
  },
];
export const Header: React.FC<HeaderProps> = ({
  bgColor = "white",
  textColor = "white",
}) => {
  const headerRef = useRef<HTMLElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  // const navLinksRef = useRef<(HTMLAnchorElement | HTMLDivElement | null)[]>([]);
  const navLinksRef = useRef<
    (HTMLAnchorElement | HTMLDivElement | HTMLButtonElement | null)[]
  >([]);

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef<number | null>(null);
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleMouseEnter = () => {
    if (dropdownTimeout.current) {
      window.clearTimeout(dropdownTimeout.current);
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = window.setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      const ctx = gsap.context(() => {
        gsap.set(headerRef.current, { y: -80, opacity: 0 });
        gsap.set(logoRef.current, { scale: 0.5, opacity: 0 });
        gsap.set(navLinksRef.current, { opacity: 0, scale: 0.8, y: -20 });

        const tl = gsap.timeline();
        tl.to(headerRef.current, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          onStart: () => {
            headerRef.current?.classList.remove("invisible");
          },
        })
          .to(
            logoRef.current,
            { scale: 1, opacity: 1, duration: 1, ease: "bounce.out" },
            "-=0.6"
          )
          .to(
            navLinksRef.current.filter(Boolean),
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.5,
              ease: "back.out(1.7)",
              stagger: 0.1,
            },
            "-=0.7"
          );
      }, headerRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <>
      <header ref={headerRef}>
        {/* Desktop Navbar */}
        <div
  className="max-md:hidden flex justify-between items-center bg-[#0B2A5B] text-white px-5 py-2 lg:mx-16 rounded-4xl shadow-md relative z-10"
>
          {/* Logo */}
          <div className="relative w-32 h-[40px]" ref={logoRef}>
            <Link href="/">
              <Image
                src={
                  bgColor === "white"
                    ? "/icons/auditique-consulting.png"
                    : "/icons/auditique-consulting.png"
                }
                alt="Auditique Consulting"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex font-medium gap-5 xl:gap-8 ">
            {[
              { name: "Home", path: "/" },
              // { name: "Services", path: "/services" },
              { name: "About Us", path: "/about-us" },
              { name: "Contact Us", path: "/contact-us" },
            ].map((item, index) => (
              <Link
                key={item.name}
                href={item.path}
                ref={(el) => {
                  if (el) navLinksRef.current[index] = el;
                }}
                style={{ color: textColor }}
                className="general-sans rounded-3xl lg:px-3 py-1 transition-colors duration-200"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = textColor;
                  e.currentTarget.style.color = bgColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = textColor;
                }}
              >
                {item.name}
              </Link>
            ))}

            <div
              className=" inline-block"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Trigger Button */}
              <button
                ref={(el) => {
                  if (el) navLinksRef.current[3] = el; // fixed index
                }}
                style={{ color: textColor }}
                className="general-sans rounded-3xl lg:px-4 py-1.5 transition-colors duration-200 cursor-pointer hover:opacity-80"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = textColor;
                  e.currentTarget.style.color = bgColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = textColor;
                }}
              >
                Services
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-15 z-50  w-full mx-auto  grid grid-cols-4 xl:grid-cols-5 gap-2 shadow-2xl rounded-xl p-4 border transition-all duration-300 ease-in-out ${isDropdownOpen
                  ? "opacity-100 translate-y-0 visible pointer-events-auto"
                  : "opacity-0 -translate-y-4 invisible pointer-events-none"
                  } ${bgColor === "white"
                    ? "bg-white text-black border-gray-200"
                    : "bg-gradient-to-r from-[#1e1e1e] to-[#0c0c0c] text-white border-neutral-700"
                  }`}
              >
                {dropdownData.map((service) => (
                  <Link
                    key={service.pathName}
                    href={`/services/${service.pathName}`}
                    className={`px-3 py-2 rounded-lg text-sm font-medium  transition-all duration-200 ${bgColor === "white"
                      ? "hover:bg-black hover:text-white"
                      : "hover:bg-white hover:text-black"
                      }`}
                    role="menuitem"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="w-1/12" />
        </div>

        {/* <div style={{ height: "100vh", background: "#1a1a1a" }} className=" md:h-0 md:hidden"> */}
        <StaggerMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#fff"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={true}
          colors={["black", "1d1d1d"]}
         
          logoUrl="/icons/auditique-white-logo.svg"
          accentColor="#ff6b6b"
        />
        {/* </div> */}
      </header>
    </>
  );
};
