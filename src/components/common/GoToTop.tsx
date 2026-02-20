"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="
            cursor-pointer
            fixed bottom-3 right-3 md:bottom-6 md:right-6 
            bg-gray-600 text-white 

            p-2.5 sm:p-3 md:p-4    

            rounded-full shadow-lg 
            hover:bg-gray-700
             
            transition-all duration-300
            hover:scale-110
            animate-fadeIn
            flex items-center justify-center z-999
          "
        >
          <FaArrowUp
            className="
              text-white
              size-3 sm:size-4 md:size-[13px]   
            "
          />
        </button>
      )}
    </>
  );
};

export default GoToTop;
