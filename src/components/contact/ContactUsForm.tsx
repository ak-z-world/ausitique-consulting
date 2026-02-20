/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);

const ContactUsForm = () => {
  const formRef = useRef(null);
  const inputGroupsRef = useRef<(HTMLDivElement | null)[]>([]);
  const circlesRef = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRef = useRef(null);
  const rocketRef = useRef(null);
  const headingRef = useRef<HTMLParagraphElement | null>(null);
  const subtextRef = useRef<HTMLParagraphElement | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  useEffect(() => {
    const inputEls = inputGroupsRef.current.filter(Boolean);
    const circleEls = circlesRef.current.filter(Boolean);

    const ctx = gsap.context(() => {
      // Heading animation
      if (headingRef.current) {
        gsap.from(headingRef.current, {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        });
      }

      // Subtext animation
      if (subtextRef.current) {
        gsap.from(subtextRef.current, {
          y: 30,
          opacity: 0,
          duration: 1,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: subtextRef.current,
            start: "top 85%",
          },
        });
      }

      // Input group animation
      if (inputEls.length > 0 && formRef.current) {
        gsap.from(inputEls, {
          opacity: 0,
          y: 30,
          stagger: 0.2,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 70%",
          },
        });
      }

      // Button and rocket animation
      if (buttonRef.current || rocketRef.current) {
        gsap.from([buttonRef.current, rocketRef.current], {
          scale: 0,
          opacity: 0,
          duration: 0.6,
          delay: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 120%",
          },
        });
      }

      // Floating animated circles
      circleEls.forEach((circle) => {
        const animate = () => {
          gsap.to(circle, {
            x: gsap.utils.random(-100, 100),
            y: gsap.utils.random(-50, 50),
            duration: gsap.utils.random(2, 4),
            ease: "sine.inOut",
            onComplete: animate,
          });
        };
        animate();
      });
    }, formRef);

    ScrollTrigger.refresh(); // Refresh after layout changes

    return () => ctx.revert(); // Clean-up
  }, []);

  // State for form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    message: "",
  });

  // State for errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Handle change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validation logic
  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";

    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus("loading");

    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      city: formData.city,
      state: formData.state,
      message: formData.message,
    };

    try {
      // 🔹 SEND EMAIL VIA EMAILJS
      await emailjs.send(
        "service_krbaa7s",
        "template_bhc9wbc",
        {
          firstname: formData.firstName,
          lastname: formData.lastName,
          email: formData.email,
          phonenumber: formData.phone,
          city: formData.city,
          state: formData.state,
          message: formData.message,
        },
        "7ihUlmNH72tVXsg9Y"
      );

      // 🔹 SUCCESS UI
      toast.success("Form submitted successfully 🎉", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        city: "",
        state: "",
        message: "",
      });

      setErrors({});
      setStatus("idle");
    } catch (error: any) {
      console.error("Submission failed:", error?.response || error);

      toast.error(
        error?.response?.data?.message || "Failed to submit form ❌",
        {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        }
      );

      setStatus("idle");
    }
  };

  return (
    <section className="min-h-screen overflow-hidden">
      <div className="px-6 md:p-16 text-white general-sans z-20">
        <p
          ref={headingRef}
          className="text-center font-semibold text-3xl md:text-5xl mt-5 will-change-transform"
        >
          Contact Us
        </p>
        <p
          ref={subtextRef}
          className="font-inter text-[#F1F1F1] font-normal text-base md:text-xl text-center mt-5 will-change-transform"
        >
          Any question or remarks? Just write us a message!
        </p>
      </div>

      <div className="relative">
        {/* Background Circles */}
        {[
          "h-[250px] w-[250px] md:h-[350px] md:w-[350px] bg-gradient-to-bl from-[#DFE9F3] via-[#838FFF] to-[#60B2FF] rounded-full right-0 md:right-10 top-40",
          "h-[200px] w-[200px] md:h-[307px] md:w-[307px] bg-[linear-gradient(to_top_right,_#98FFCE,_#5F9FFF,_#8571FF,_#3F2FA5)] rounded-full bottom-10 left-5",
          "h-[130px] w-[130px] md:h-[185px] md:w-[185px] bg-[linear-gradient(to_bottom_right,_#5F9FFF,_#7E69FF,_#FE3D41)] rounded-full top-10 left-20 md:left-48",
          "h-[100px] w-[100px] md:h-[128px] md:w-[128px] bg-gradient-to-br from-[#5F9FFF] via-[#A06CFF] to-[#1E00FF] rounded-full bottom-32 left-[40%]",
          "h-[100px] w-[100px] md:h-[119px] md:w-[119px] bg-[linear-gradient(to_bottom_right,_#FF3BDE,_#7E69FF,_#828FF1,#8DFFC9)] rounded-full bottom-5 right-10 md:right-36",
        ].map((cls, i) => (
          <div
            key={i}
            ref={(el) => {
              circlesRef.current[i] = el;
            }}
            className={`absolute z-0 will-change-transform ${cls}`}
          />
        ))}

        {/* Form Container */}
        <div
          ref={formRef}
          className="z-20 flex justify-center mt-10 md:mt-16 pb-20 px-5"
        >
          <div className="flex flex-col lg:flex-row w-full lg:w-[85%] border border-white/30 rounded-4xl backdrop-blur-xl text-white">
            {/* Left */}
            <div className="p-3 sm:p-6 md:p-10 bg-black/50 rounded-t-4xl lg:rounded-s-4xl lg:rounded-tr-none basis-full lg:basis-[70%]">
              <p className="font-inter font-bold text-2xl md:text-4xl">
                Contact <span className="text-[#989FFF]">Information</span>
              </p>
              <p className="h-1 md:h-2 w-2/5 mt-3 bg-white/30" />
              <div className="flex gap-3 items-center mt-10 md:mt-20">
                <img
                  src="./icons/contact-form-email.svg"
                  alt="email"
                  className="will-change-transform"
                />
                <a href="mailto:auditiqueconsulting@gmail.com">
                  <p className="font-inter font-medium text-sm md:text-base">
                    {/* auditiqueconsulting@gmail.com */}
                    auditiqueconsulting@gmail.com
                  </p>
                </a>
              </div>
              <div className="flex gap-3 items-center mt-5 md:mt-7">
                <img
                  src="./icons/contact-form-phone.svg"
                  alt="phone"
                  className="will-change-transform"
                />
                <a href="tel:+91 6379920255">
                  <p className="font-inter font-medium text-sm md:text-base">
                    +91 6379920255
                  </p>
                </a>
              </div>
              <div className="flex gap-3 items-start mt-5 md:mt-7">
                <img
                  src="./icons/contact-form-location.svg"
                  alt="location"
                  className="will-change-transform"
                />
                <div className="font-inter text-xs md:text-[15px] font-semibold flex flex-col">
                  <p>No 33/14, Ground floor, Jayammal St,</p>
                  <p>G Ayyavoo Colony, Aminjikarai,</p>
                  <p>Chennai, Tamil Nadu 600029</p>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3517.013816674507!2d80.21449647454808!3d13.072116712667583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52670077092479%3A0xd6cc547553aeed1f!2sYes%20To%20Boss!5e1!3m2!1sen!2sin!4v1757512027958!5m2!1sen!2sin"
                loading="lazy"
                className="w-full rounded-2xl h-40 md:h-52 mt-10 md:mt-20 will-change-transform"
              ></iframe>


            </div>
            <form
              onSubmit={handleSubmit}
              className="px-3 sm:px-6 md:px-10 pt-8 md:pt-10 pb-10 basis-full rounded-b-4xl lg:rounded-e-4xl lg:rounded-bl-none bg-black/50 flex flex-col gap-6 md:gap-10"
            >
              {/* Input Groups */}
              {[
                {
                  key: "row1",
                  labels: ["First Name", "Last Name"],
                  names: ["firstName", "lastName"],
                  refs: [0],
                },
                {
                  key: "row2",
                  labels: ["Email", "Phone Number"],
                  names: ["email", "phone"],
                  refs: [1],
                },
                {
                  key: "row3",
                  labels: ["City", "State"],
                  names: ["city", "state"],
                  refs: [2],
                },
              ].map((row) => (
                <div
                  key={row.key}
                  ref={(el) => {
                    if (el) inputGroupsRef.current[row.refs[0]] = el;
                  }}
                  className="flex flex-col md:flex-row justify-between gap-6 md:gap-10 font-inter font-medium"
                >
                  {row.labels.map((label, i) => (
                    <div
                      className="flex flex-col gap-1 w-full md:w-1/2"
                      key={i}
                    >
                      <label>{label}</label>
                      <input
                        type="text"
                        name={row.names[i]}
                        value={formData[row.names[i] as keyof typeof formData]}
                        onChange={handleChange}
                        className="border-b border-white outline-none pb-2 bg-transparent text-sm md:text-base"
                      />
                      {errors[row.names[i]] && (
                        <p className="text-red-400 text-xs">
                          {errors[row.names[i]]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ))}

              {/* Message */}
              <div
                ref={(el) => {
                  if (el) inputGroupsRef.current[3] = el;
                }}
                className="flex flex-col gap-1 font-inter font-medium"
              >
                <label>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="border-b border-white outline-none pb-2 placeholder-white text-sm bg-transparent resize-none"
                  rows={2}
                  placeholder="Write your message..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-400 text-xs">{errors.message}</p>
                )}
              </div>

              {/* Button + Rocket */}
              <div className="flex flex-col gap-1 items-end">
                {/* <button
                  type="submit"
                  className="bg-white px-6 md:px-8 py-2 md:py-3 w-fit text-black rounded-md font-inter font-medium text-base md:text-lg"
                  ref={buttonRef}
                >
                  Send Message
                </button> */}
                <button
                  ref={buttonRef}
                  type="submit"
                  disabled={status === "loading"}
                  className={`px-8 py-3 w-fit rounded cursor-pointer font-inter font-medium text-base md:text-lg transition flex items-center gap-2
          ${
            status === "loading"
              ? "bg-gray-400 cursor-not-allowed text-white"
              : "bg-white text-black hover:bg-gray-200"
          }`}
                >
                  {status === "idle" && "Send Message"}

                  {status === "loading" && (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  )}
                  {status === "success" && "Submitted"}
                </button>

                <Image
                  ref={rocketRef}
                  src={"/icons/paper-rocket-icon.svg"}
                  alt="rocket"
                  width={160}
                  height={60}
                  priority
                  className="mt-2 hidden sm:block"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </section>
  );
};

export default ContactUsForm;
