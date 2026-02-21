"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <footer className="bg-[#0B2A5B] text-white general-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-10">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-yellow-400 font-semibold text-lg">
              Contact
            </h3>

            <div className="flex justify-between text-sm">
              <span className="text-white/70">Mobile</span>
              <a
                href="tel:+916381002179"
                className="hover:text-yellow-400 transition"
              >
                +91 63810 02179
              </a>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-white/70">Email</span>
              <a
                href="mailto:auditiqueconsulting@gmail.com"
                className="hover:text-yellow-400 transition break-all"
              >
                auditiqueconsulting@gmail.com
              </a>
            </div>

            {/* Social */}
            <div className="pt-2">
              <p className="text-yellow-400 text-sm mb-2">Follow Us</p>

              <div className="flex gap-3">
                <Link
                  target="_blank"
                  href="https://www.facebook.com/share/1EkhGhedjN/"
                >
                  <Image
                    alt="facebook"
                    src="/icons/facebook-icon.svg"
                    width={20}
                    height={20}
                    className="hover:scale-110 transition"
                  />
                </Link>

                <Link
                  target="_blank"
                  href="https://www.instagram.com/auditiqueconsulting"
                >
                  <Image
                    alt="instagram"
                    src="/icons/instagram-icon.svg"
                    width={20}
                    height={20}
                    className="hover:scale-110 transition"
                  />
                </Link>

                <Link
                  target="_blank"
                  href="https://www.linkedin.com/company/auditiqueconsulting/"
                >
                  <Image
                    alt="linkedin"
                    src="/icons/linkedin-icon.svg"
                    width={20}
                    height={20}
                    className="hover:scale-110 transition"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h3 className="text-yellow-400 font-semibold text-lg">
              Office Address
            </h3>

            <p className="text-sm text-white/80 leading-relaxed">
              No 33/14, Ground floor, West Mambalam, Chennai,
              Tamil Nadu 600029
            </p>

            <a
              href="https://maps.app.goo.GHZW7G1gj7"
              target="_blank"
              className="text-sm text-yellow-400 underline hover:text-yellow-300"
            >
              View Map
            </a>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-yellow-400 font-semibold text-lg">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2 text-sm">

              <Link href="/" className="hover:text-yellow-400 transition">
                Home
              </Link>

              <Link href="/about-us" className="hover:text-yellow-400 transition">
                About Us
              </Link>

              <Link href="/services" className="hover:text-yellow-400 transition">
                Services
              </Link>

              <Link href="/contact-us" className="hover:text-yellow-400 transition">
                Contact
              </Link>

            </div>
          </div>

          {/* AK Technologies */}
          <div className="space-y-4">
            <h3 className="text-yellow-400 font-semibold text-lg">
              Technology Partner
            </h3>

            <a
              href="https://aktechnologies.com/"
              target="_blank"
              className="text-white hover:text-yellow-400 transition"
            >
              AK Technologies
            </a>

            <div className="flex gap-3 pt-2">

              <a href="https://www.instagram.com/ak_z_world/" target="_blank">
                <RiInstagramFill className="bg-yellow-400 text-[#0B2A5B] rounded-full p-1 text-2xl hover:scale-110 transition" />
              </a>

              <a href="https://www.linkedin.com/" target="_blank">
                <FaLinkedin className="bg-yellow-400 text-[#0B2A5B] rounded-full p-1 text-2xl hover:scale-110 transition" />
              </a>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-8 pt-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm">

          <p className="text-white/70 text-center md:text-left">
            © 2022–2025 Auditique Consulting. All rights reserved.
          </p>

          <a
            href="https://aktechnologies.com/"
            target="_blank"
            className="text-yellow-400 hover:text-yellow-300 transition"
          >
            Powered by AK Technologies
          </a>

        </div>

      </div>
    </footer>
  );
};