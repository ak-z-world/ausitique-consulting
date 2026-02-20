/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import TextPressure from "../animations/TextPressure";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";
import { FaFacebook, FaLinkedin, FaPlay } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  const router = useRouter();
  const textRef = useRef<HTMLParagraphElement>(null);
  const sunRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sunRef.current || !textRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const sunAnim = gsap.fromTo(
      sunRef.current,
      {
        y: 150,
        scale: 0.8,
        opacity: 0.5,
      },
      {
        y: -40,
        scale: 1.2,
        opacity: 1,
        ease: "power2.out",
        force3D: true,
        scrollTrigger: {
          trigger: sunRef.current,
          start: "top 95%",
          end: "bottom center",
          scrub: true,
          invalidateOnRefresh: false,
        },
      }
    );

    const textAnim = gsap.fromTo(
      textRef.current,
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sunRef.current,
          start: "top 90%",
          end: "bottom center",
          scrub: true,
          invalidateOnRefresh: false,
        },
      }
    );

    ScrollTrigger.refresh();

    return () => {
      sunAnim.kill();
      textAnim.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <footer className="bg-white text-[#0B2A5B] general-sans">
      <div className="p-5 md:p-2 lg:p-16">

        {/* Footer Grid */}
        <div className="flex flex-wrap  gap-10 mt-0">
          {/* Contact */}
          <div className=" xl:w-1/4">
            <div className="flex flex-col gap-5">
              <div className="flex justify-between text-sm">
                <p>Mobile</p>
                <a href="tel:+91 63810 02179">
                  <p>+91 63810 02179</p>
                </a>
              </div>
              <hr className="border border-yellow w-full " />
              <div className="flex justify-between text-sm">
                <p>Email</p>
                <a href="mailto:auditiqueconsulting@gmail.com">
                  <p>auditiqueconsulting@gmail.com</p>
                </a>
              </div>
              <hr className="border border-yellow w-full " />
            </div>

            <p className="mt-8">Follow Us</p>
            <div className="mt-2 flex gap-2">
              <Link
                target="_blank"
                href="https://www.facebook.com/share/1EkhGhedjN/"
              >
                <Image
                  alt="facebook-icon"
                  src={"/icons/facebook-icon.svg"}
                  width={20}
                  height={20}
                />
              </Link>
              {/* <Image
                alt="x-icon"
                src={"/icons/x-icon.svg"}
                width={20}
                height={20}
              /> */}

              <Link
                target="_blank"
                href="https://www.instagram.com/auditiqueconsulting"
              >
                <Image
                  alt="threads-icon"
                  src={"/icons/instagram-icon.svg"}
                  width={20}
                  height={20}
                />
              </Link>

              <Link
                target="_blank"
                href="https://www.linkedin.com/company/auditiqueconsulting/"
              >
                <Image
                  alt="threads-icon"
                  src={"/icons/linkedin-icon.svg"}
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>

          {/* address */}
          <div className="md:w-1/3 xl:w-1/4">
            <p className="font-semibold text-xl">Office Address</p>
            <div className="mt-6 flex flex-col gap-5">
              <div className="flex gap-2">
                {/* <IoLocationOutline className="text-2xl " /> */}
                <img
                  src="/icons/footer-location-icon.svg"
                  alt=""
                  className="h-fit"
                />
                <p className="text-sm">
                  No 33/14, Ground floor, West Mambalam, Chennai, Tamil Nadu 600029
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  src="/icons/footer-mail-icon.svg"
                  alt=""
                  className="h-fit"
                />
                {/* <LuMailOpen className="text-md" /> */}
                {/* <p className="text-sm">auditiqueconsulting@gmail.com</p> */}
                <a href="mailto:auditiqueconsulting@gmail.com">
                  <p className="text-sm">auditiqueconsulting@gmail.com</p>
                </a>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  src="/icons/footer-phone-icon.svg"
                  alt=""
                  className="h-fit"
                />
                {/* <FiPhoneCall className="text-md" /> */}
                <a href="tel:+91 63810 02179">
                  <p className="text-sm">Phone : +91 63810 02179</p>
                </a>
              </div>

              <a
                target="_blank"
                href="https://maps.app.goo.g6GHZW7G1gj7"
                className="underline text-sm underline-offset-4"
              >
                View Map
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="font-semibold text-xl text-[#0B2A5B]">
              Link
            </p>

            <div className="mt-6 flex flex-col gap-3">

              <Link
                href="/"
                className="text-sm text-[#0B2A5B] hover:text-[#FFC107] transition-all duration-300"
              >
                Home
              </Link>

              <Link
                href="/about-us"
                className="text-sm text-[#0B2A5B] hover:text-[#FFC107] transition-all duration-300"
              >
                About Us
              </Link>

              <Link
                href="/contact-us"
                className="text-sm text-[#0B2A5B] hover:text-[#FFC107] transition-all duration-300"
              >
                Contact
              </Link>

              <Link
                href="/services"
                className="text-sm text-[#0B2A5B] hover:text-[#FFC107] transition-all duration-300"
              >
                Services
              </Link>

            </div>
          </div>

          {/* Ak's tech */}
          <div className="xl:w-1/4 flex flex-col lg:items-center  flex-wrap gap-y-3">
            <p className="text-black  font-medium">Crafting Excellence With</p>

            <a href="https://aktechnologies.com/" target="_blank">
              {/* <Image
                src="/icons/.svg"
                height={16}
                width={26}
                alt="a"
                className="w-20 h-16 md:w-28 md:h-20 hover:saturate-150 transition-all duration-500"
              /> */}
            </a>

            <a
              href="https://aktechnologies.com/"
              target="_blank"
              className="text-black hover:text-black/70 transition-all duration-500 font-medium"
            >
              AK Technologies
            </a>

            <div className="flex flex-wrap gap-x-3">
              <a
                href="https://www.instagram.com/ak_z_world/"
                target="_blank"
              >
                <RiInstagramFill className="text-white  rounded-full bg-blue-600 p-1 text-2xl md:text-3xl cursor-pointer" />
              </a>

              <a
                href="https://www.linkedin.com/arun kumar"
                target="_blank"
              >
                <FaLinkedin className="text-white rounded-full bg-blue-600 p-1 text-2xl md:text-3xl cursor-pointer " />
              </a>
            </div>
          </div>
        </div>

        <hr className="border border-white/10 w-full mt-7" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-5 gap-5 text-center md:text-left">
          <div>
            <p className="text-sm">
              &copy; 2022-2025 | Alrights Reserved by Auditique Consulting
            </p>
          </div>

          <a href="https://aktechnologies.com/" target="_blank">
            <div className="flex gap-2 ">
              <p className="hover:text-yellow/80 text-sm text-black transition-all duration-500">
                Powered by AK Technologies
              </p>
              {/* <Image
                src="/icons/.svg"
                height={16}
                width={26}
                alt="AK Z World"
              /> */}
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};
