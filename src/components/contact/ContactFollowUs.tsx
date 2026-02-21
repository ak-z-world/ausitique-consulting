// "use client";
// import React, { useRef, useState } from "react";
// import Marquee from "react-fast-marquee";
// import { GoArrowUpRight } from "react-icons/go";
// import gsap from "gsap";

// const socials = ["Instagram", "Facebook", "LinkedIn"];

// export const ContactFollowUs = () => {
//   const textRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const [hovered, setHovered] = useState<string | null>(null);

//   const handleMouseEnter = (item: string, index: number) => {
//     setHovered(item);
//     const el = textRefs.current[index];
//     if (el) {
//       gsap.fromTo(
//         el,
//         { x: 0 },
//         {
//           x: "-100%",
//           duration: 80,
//           ease: "linear",
//           repeat: -1,
//           overwrite: "auto",
//           force3D: true,

//         }
//       );
//     }
//   };

//   const handleMouseLeave = (index: number) => {
//     setHovered(null);
//     const el = textRefs.current[index];
//     if (el) {
//       gsap.killTweensOf(el);
//       gsap.set(el, { x: 0 });
//     }
//   };

//   return (
//     <section>
//       <div className="bg-black general-sans pt-16 pb-16 text-white">
//         <Marquee autoFill={true} className="mt-7" direction="right">
//           <div className="flex gap-5 items-center">
//             <p className="text-white font-extralight text-[150px]">Follow Us</p>
//             <img
//               src="./icons/yes-to-boss-circle-logo.svg"
//               alt=""
//               style={{ animation: "spin 15s linear infinite" }}
//               className=" w-[150px] h-[150px]"
//             />
//           </div>
//         </Marquee>

//         {/* <div className="flex flex-col gap-8">
//           <div className="flex justify-between px-16 mt-5">
//             <p className="font-medium text-3xl">Instagram</p>
//             <GoArrowUpRight className="text-4xl" />
//           </div>

//           <hr className="border-[#2F2F2F]" />

//           <div className="flex justify-between px-16 mt-5">
//             <p className="font-medium text-3xl">Facebook</p>
//             <GoArrowUpRight className="text-4xl" />
//           </div>

//           <hr className="border-[#2F2F2F]" />

//           <div className="flex justify-between px-16 mt-5">
//             <p className="font-medium text-3xl">LinkedIn</p>
//             <GoArrowUpRight className="text-4xl" />
//           </div>

//           <hr className="border-[#2F2F2F]" />

//           <div className="flex justify-between px-16 mt-5">
//             <p className="font-medium text-3xl">X</p>
//             <GoArrowUpRight className="text-4xl" />
//           </div>

//           <hr className="border-[#2F2F2F]" />
//         </div> */}

//         {/* <div className="flex flex-col gap-4">
//           {socials.map((item, index) => (
//             <div key={item}>
//               <div
//                 className={`flex justify-between items-center px-16 py-6 rounded-md overflow-hidden transition-all duration-300 ${
//                   hovered === item ? "bg-white " : "bg-transparent"
//                 }`}
//                 onMouseEnter={() => handleMouseEnter(item, index)}
//                 onMouseLeave={() => handleMouseLeave(index)}
//               >
//                 <div className="relative w-full overflow-hidden whitespace-nowrap">
//                   <div
//                     className={`inline-block transition-all font-medium text-3xl ${
//                       hovered === item ? "text-black" : "text-white"
//                     }`}
//                     ref={(el) => {
//                       textRefs.current[index] = el;
//                     }}
//                   >
//                     {hovered === item
//                       ? new Array(200).fill(item).join(" \u00A0\u00A0\u00A0 ")
//                       : item}
//                   </div>
//                 </div>

//                 <GoArrowUpRight
//                   className={`text-4xl transition-all duration-300 ${
//                     hovered === item ? "text-black" : "text-white"
//                   }`}
//                 />
//               </div>
//               <hr className="border-[#2F2F2F]" />
//             </div>
//           ))}
//         </div> */}

//         <div className="flex flex-col gap-4">
//           {socials.map((item, index) => (
//             <div key={item}>
//               <div
//                 className={`flex justify-between items-center px-16 py-8 rounded-md overflow-hidden
//               transition-colors duration-500 ease-in-out ${
//                 hovered === item ? "bg-white" : "bg-transparent"
//               }`}
//                 onMouseEnter={() => handleMouseEnter(item, index)}
//                 onMouseLeave={() => handleMouseLeave(index)}
//               >
//                 <div className="relative w-full overflow-hidden whitespace-nowrap">
//                   <div
//                     className={`inline-block font-medium text-3xl will-change-transform ${
//                       hovered === item ? "text-black font-poppins" : "text-white"
//                     }`}
//                     ref={(el) => {
//                       textRefs.current[index] = el;
//                     }}
//                   >
//                     {hovered === item
//                       ? new Array(20).fill(item).join(" \u00A0\u00A0\u00A0 ")
//                       : item}
//                   </div>
//                 </div>

//                 <GoArrowUpRight
//                   className={`text-4xl transition-colors duration-500 ease-in-out ${
//                     hovered === item ? "text-black" : "text-white"
//                   }`}
//                 />
//               </div>

//               <hr className="border-[#2F2F2F]" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

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
