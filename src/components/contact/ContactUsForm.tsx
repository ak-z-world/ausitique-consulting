/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";

gsap.registerPlugin(ScrollTrigger);

const ContactUsForm = () => {

  const formRef = useRef(null);
  const inputGroupsRef = useRef<(HTMLDivElement | null)[]>([]);
  const circlesRef = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const rocketRef = useRef(null);
  const headingRef = useRef<HTMLParagraphElement | null>(null);
  const subtextRef = useRef<HTMLParagraphElement | null>(null);

  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1 }
      );
      gsap.fromTo(
        formRef.current,
        {
          opacity: 0,
          y: 80,
          scale: 0.96
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out"
        }
      );
      gsap.to(rocketRef.current, {
  y: -200,
  scale: 1.3,
  duration: 1.2,
  ease: "power3.out"
});
      gsap.fromTo(
        subtextRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2 }
      );

      gsap.fromTo(
        inputGroupsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.8 }
      );

      gsap.fromTo(
        buttonRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, delay: 0.8 }
      );

      gsap.fromTo(
        rocketRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 1 }
      );

      // floating glow circles
      circlesRef.current.forEach((circle) => {

        if (!circle) return;

        gsap.to(circle, {
          y: -30,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });

      });

    }, formRef);

    return () => ctx.revert();

  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {

    const newErrors: any = {};

    if (!formData.firstName) newErrors.firstName = "Required";
    if (!formData.lastName) newErrors.lastName = "Required";
    if (!formData.email) newErrors.email = "Required";
    if (!formData.phone) newErrors.phone = "Required";
    if (!formData.message) newErrors.message = "Required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;

  };

  const animateButtonClick = () => {

    if (!buttonRef.current) return;

    gsap.timeline()
      .to(buttonRef.current, {
        scale: 0.92,
        duration: 0.1,
      })
      .to(buttonRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "elastic.out(1, 0.5)",
      });

  };

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    if (!validate()) return;

    animateButtonClick();

    setStatus("loading");

    try {

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

      setStatus("success");

      toast.success("Appointment booked successfully");

      gsap.fromTo(
        rocketRef.current,
        { y: 0 },
        {
          y: -80,
          duration: 1,
          ease: "power2.out",
        }
      );

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        city: "",
        state: "",
        message: "",
      });

      setTimeout(() => setStatus("idle"), 2000);

    } catch {

      toast.error("Failed to book appointment");
      setStatus("idle");

    }

  };

  return (

    <section className="min-h-screen bg-white relative overflow-hidden">

      {/* Glow Background */}
      {/* Glow Background */}

      <div
        ref={(el) => {
          circlesRef.current[0] = el;
        }}
        className="absolute top-0 left-0 w-[350px] h-[350px] auditique-glow-yellow"
      />

      <div
        ref={(el) => {
          circlesRef.current[1] = el;
        }}
        className="absolute bottom-0 right-0 w-[350px] h-[350px] auditique-glow-blue"
      />

      <div className="px-6 md:p-16 text-center">

        <p
          ref={headingRef}
          className="text-[#0B2A5B] font-semibold text-4xl md:text-5xl"
        >
          Book Your Appointment
        </p>

        <p
          ref={subtextRef}
          className="text-[#0B2A5B]/70 mt-4"
        >
          Connect with Auditique Consulting for expert financial and tax advisory services.
        </p>

      </div>

      <div
        ref={formRef}
        className="flex justify-center px-6 pb-20"
      >

        <form
          onSubmit={handleSubmit}
          className="
auditique-glass
rounded-2xl
p-8
w-full
max-w-xl
shadow-xl
flex
flex-col
gap-6
transition-all
duration-500
hover:shadow-2xl
"
        >

          {[
            ["firstName", "First Name"],
            ["lastName", "Last Name"],
            ["email", "Email"],
            ["phone", "Phone"],
            ["city", "City"],
            ["state", "State"],
          ].map(([name, label], index) => (

            <div
              key={name}
              ref={(el) => {
                inputGroupsRef.current[index] = el;
              }}
              className="flex flex-col"
            >

              <label className="text-[#0B2A5B] font-medium">
                {label}
              </label>

              <input
                name={name}
                value={(formData as any)[name]}
                onChange={handleChange}
                className="
auditique-input
outline-none
py-3
text-[#0B2A5B]
bg-transparent
"
              />

            </div>

          ))}

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="border-b border-blue-200 focus:border-yellow-400 outline-none py-2"
          />

          {/* Button */}
          <div className="flex flex-col items-center gap-4 mt-4">

  {/* Button */}
  <button
    ref={buttonRef}
    type="submit"
    disabled={status === "loading" || status === "success"}
    className={`
      auditique-button
      text-white
      py-3
      px-8
      rounded-full
      font-medium
      flex items-center justify-center gap-3
      relative overflow-hidden
      min-w-[200px]
    `}
  >

    {status === "idle" && (
      <span className="flex items-center gap-2">
        Book Appointment
      </span>
    )}

    {status === "loading" && (
      <>
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        Booking...
      </>
    )}

    {status === "success" && (
      <span className="flex items-center gap-2 success-text">
        ✓ Appointment Booked
      </span>
    )}

  </button>


  {/* Success Animation */}
  {status === "success" && (
    <div className="success-container flex flex-col items-center gap-3">

      {/* Animated Checkmark */}
      <div className="success-circle">
        <svg viewBox="0 0 52 52" className="success-check">
          <circle cx="26" cy="26" r="25" fill="none"/>
          <path fill="none" d="M14 27l7 7 16-16"/>
        </svg>
      </div>

      {/* Success Text */}
      <p className="success-message">
        Your appointment has been successfully booked
      </p>

    </div>
  )}


  {/* Rocket */}
  <Image
    ref={rocketRef}
    src="/icons/rocket.svg"
    width={120}
    height={50}
    alt="rocket"
    className="mx-auto rocket-success"
  />

</div>
        </form>

      </div>

      <ToastContainer />

    </section>

  );

};

export default ContactUsForm;