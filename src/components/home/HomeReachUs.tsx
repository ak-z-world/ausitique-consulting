"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";

gsap.registerPlugin(ScrollTrigger);

const HomeReachUs = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const mapRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const defaults = {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          start: "top 60%",
          toggleActions: "play none none none",
          once: true,
          lazy: true,
        },
      };

      gsap.from(headingRef.current, {
        ...defaults,
        y: 40,
        scrollTrigger: {
          ...defaults.scrollTrigger,
          trigger: headingRef.current,
        },
      });

      gsap.from(textRef.current, {
        ...defaults,
        y: 40,
        delay: 0.1,
        scrollTrigger: {
          ...defaults.scrollTrigger,
          trigger: textRef.current,
        },
      });

      gsap.from(mapRef.current, {
        ...defaults,
        scale: 0.95,
        delay: 0.2,
        scrollTrigger: {
          ...defaults.scrollTrigger,
          trigger: mapRef.current,
        },
      });

      gsap.from(formRef.current, {
        ...defaults,
        x: 100,
        delay: 0.3,
        scrollTrigger: {
          ...defaults.scrollTrigger,
          trigger: formRef.current,
        },
      });
    }, sectionRef);

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
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error on typing
  };

  // Validation logic
  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      setStatus("loading"); // show spinner

      emailjs
        .send(
          "service_krbaa7s", // replace with EmailJS service ID
          "template_bhc9wbc", // replace with EmailJS template ID
          {
            firstname: formData.firstName,
            lastname: formData.lastName,
            email: formData.email,
            phonenumber: formData.phone,
            city: formData.city,
            state: formData.state,
            message: formData.message,
          },
          "7ihUlmNH72tVXsg9Y" // replace with your EmailJS public key
        )
        .then(
          () => {
            setStatus("success"); // show success

            toast.success("Form submitted successfully", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: false,
              draggable: false,
              progress: undefined,
              theme: "dark",
            });

            console.log("Email sent successfully:", formData);
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              city: "",
              state: "",
              message: "",
            });
            setStatus("idle"); // reset to normal
          },
          (error) => {
            console.error("EmailJS Error:", error);
            alert("❌ Failed to send. Please try again.");
            setStatus("idle"); // reset to normal
          }
        );
    }
  };

  return (
    <section
      ref={sectionRef}
      className="p-5 sm:p-8 md:p-10 lg:p-14 xl:p-16 bg-black text-white overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Section */}
        <div className="w-full lg:w-[50%] flex-grow">
          <p
            ref={headingRef}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold general-sans leading-tight"
          >
            Get in Touch with Auditique Consulting
          </p>

          <p ref={textRef} className="mt-8 md:mt-12 text-white/60 general-sans">
            
            Looking to start or grow your business the right way? Auditique Consulting is your trusted partner for business registration, compliance, and management solutions. Whether you’re an entrepreneur launching your first venture or a company looking to streamline operations, our team provides end-to-end business consultancy services tailored to your goals.
          </p>

          <div className="mt-12 md:mt-20 rounded-2xl" ref={mapRef}>
            <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3517.013816674507!2d80.21449647454808!3d13.072116712667583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52670077092479%3A0xd6cc547553aeed1f!2sYes%20To%20Boss!5e1!3m2!1sen!2sin!4v1757512027958!5m2!1sen!2sin"
                loading="lazy"
              className="w-full rounded-2xl h-52 border-none"
            ></iframe>
          </div>
        </div>

        {/* Right Section - Form */}

        {/* <div
          ref={formRef}
          className="flex flex-col gap-5 md:gap-8 border border-[#424242] p-3 sm:p-5 md:p-10 lg:p-14 rounded-xl md:rounded-2xl bg-[#1b1b1b] w-full lg:w-[50%] flex-grow"
        >
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex flex-col gap-3 flex-grow md:w-2/5 xl:w-1/2">
              <label className="text-sm font-medium">First Name</label>
              <input
                type="text"
                className="border border-[#FFFFFF]/30 rounded-lg p-3"
                placeholder="Steve"
              />
            </div>

            <div className="flex flex-col gap-3 flex-grow md:w-2/5 xl:w-1/2">
              <label className="text-sm font-medium">Last Name</label>
              <input
                type="text"
                className="border border-[#FFFFFF]/30 rounded-lg p-3"
                placeholder="Rogers"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              className="border border-[#FFFFFF]/30 rounded-lg p-3"
              placeholder="steve@avengers.com"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium">Phone</label>
            <input
              type="tel"
              className="border border-[#FFFFFF]/30 rounded-lg p-3"
              placeholder="+91 9876543210"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium">Message</label>
            <input
              type="text"
              className="border border-[#FFFFFF]/30 rounded-lg p-3"
              placeholder="Your message..."
            />
          </div>

          <button className="bg-white px-8 py-3 w-fit text-black rounded font-semibold">
            Submit
          </button>
        </div> */}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 md:gap-8 border border-[#424242] p-3 sm:p-5 md:p-10 lg:p-14 rounded-xl md:rounded-2xl bg-[#1b1b1b] w-full lg:w-[50%] flex-grow"
        >
          {/* First & Last Name */}
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex flex-col gap-2 flex-grow">
              <label className="text-sm font-medium">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`border ${
                  errors.firstName ? "border-red-500" : "border-[#FFFFFF]/30"
                } rounded-lg p-3`}
              />
              {errors.firstName && (
                <span className="text-red-500 text-sm">{errors.firstName}</span>
              )}
            </div>

            <div className="flex flex-col gap-2 flex-grow">
              <label className="text-sm font-medium">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`border ${
                  errors.lastName ? "border-red-500" : "border-[#FFFFFF]/30"
                } rounded-lg p-3`}
              />
              {errors.lastName && (
                <span className="text-red-500 text-sm">{errors.lastName}</span>
              )}
            </div>
          </div>

          {/* Email & Phone */}
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex flex-col gap-2 flex-grow">
              <label className="text-sm font-medium">Email</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`border ${
                  errors.email ? "border-red-500" : "border-[#FFFFFF]/30"
                } rounded-lg p-3`}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>

            <div className="flex flex-col gap-2 flex-grow">
              <label className="text-sm font-medium">Phone Number</label>
              <input
                type="text"
                name="phone" // ✅ fixed
                value={formData.phone}
                onChange={handleChange}
                className={`border ${
                  errors.phone ? "border-red-500" : "border-[#FFFFFF]/30"
                } rounded-lg p-3`}
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">{errors.phone}</span>
              )}
            </div>
          </div>

          {/* City & State */}
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex flex-col gap-2 flex-grow">
              <label className="text-sm font-medium">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`border ${
                  errors.city ? "border-red-500" : "border-[#FFFFFF]/30"
                } rounded-lg p-3`}
              />
              {errors.city && (
                <span className="text-red-500 text-sm">{errors.city}</span>
              )}
            </div>

            <div className="flex flex-col gap-2 flex-grow">
              <label className="text-sm font-medium">State</label>
              <input
                type="text"
                name="state" // ✅ fixed
                value={formData.state}
                onChange={handleChange}
                className={`border ${
                  errors.state ? "border-red-500" : "border-[#FFFFFF]/30"
                } rounded-lg p-3`}
              />
              {errors.state && (
                <span className="text-red-500 text-sm">{errors.state}</span>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`border ${
                errors.message ? "border-red-500" : "border-[#FFFFFF]/30"
              } rounded-lg p-3`}
              rows={4}
            />
            {errors.message && (
              <span className="text-red-500 text-sm">{errors.message}</span>
            )}
          </div>

          {/* Submit */}
          {/* <button
            type="submit"
            className="bg-white px-8 py-3 w-fit cursor-pointer text-black rounded font-semibold hover:bg-gray-200 transition"
          >
            Submit            
          </button> */}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "loading"}
            className={`px-8 py-3 w-fit rounded font-semibold cursor-pointer transition duration-300 flex items-center gap-2
          ${
            status === "loading"
              ? "bg-gray-400 cursor-not-allowed text-white"
              : "bg-white hover:text-white text-black hover:bg-gray-500"
          }`}
          >
            {status === "idle" && "Submit"}

            {status === "loading" && (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </>
            )}
            {status === "success" && "Submitted"}
          </button>
        </form>
      </div>

      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </section>
  );
};

export default HomeReachUs;
