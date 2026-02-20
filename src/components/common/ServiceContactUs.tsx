import Image from "next/image";
import React from "react";

const ServiceContactUs = () => {
  return (
    <section className="relative min-h-[20vh] w-full bg-white overflow-hidden rounded-2xl m-5">
      {/* Background image */}
      <Image
        src="/images/cta-bg-image.png"
        alt="CTA background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-20 flex  justify-between items-center  h-full  text-white sm:px-10">
        
        <div className="p-6">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Ready To File Your DIN EKYC?
          </h2>
          <p className="mt-3 max-w-2xl text-sm font-medium sm:text-base md:text-lg">
            Let us handle your DIR-3 KYC process smoothly. Stay compliant, avoid
            penalties, and keep your DIN active without delays.
          </p>
          <button className="mt-5 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black shadow-lg transition hover:bg-gray-200">
            CONTACT US NOW
          </button>
        </div>

        {/* <Image 
  src="/images/yuvaraj-image.svg" 
  alt="Yuvaraj" 
  width={250} 
  height={900} 
  className="object-contain"
/> */}

{/* Image above everything */}

<div className="absolute inset-y-0 right-0 w-[250px]  z-[9999]">
  <Image 
    src="/images/yuvaraj-image.svg" 
    alt="Yuvaraj" 
    fill 
    className="object-contain object-top"
  />
</div>





      </div>
    </section>
  );
};

export default ServiceContactUs;
