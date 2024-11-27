import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import { BsDot } from "react-icons/bs";

function SlideItem({ slides }) {
  const [current, setCurrent] = useState(0);
  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  useEffect(() => {}, [current]);
  return (
    <>
      <div className="relative flex flex-col item-center py-4">
        <div className="overflow-x-auto">
          <motion.div
            className="flex"
            initial={{ x: 0 }}
            animate={{ x: -current * 200 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {slides.map((image, index) => (
              <motion.div
                className="p-2 min-w-[350px] h-[400px] md:min-w-[350px]"
                key={index}
              >
                <img
                  src={image}
                  alt={index + 1}
                  className="w-full h-full object-cover rounded"
                />
              </motion.div>
            ))}
          </motion.div>
          {/* <div className="overflow-hidden absolute top-[50%] z-100">
            <div className="flex justify-between">
              <button
                onClick={previousSlide}
                className="p-3 shadow-md text-white"
              >
                <IoIosArrowBack size={24} />
              </button>
              <button onClick={nextSlide} className="shadow-md text-white">
                <IoIosArrowForward size={24} />
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
export default SlideItem;
