import React, { useState } from "react";
import homebg from "../assets/homebg.jpg";
import img_1 from "../assets/img_1.webp";
import slider from '../assets/slider-1.webp';
import slider3 from '../assets/slider-3.jpg.webp';
import slider4 from '../assets/slider-4.jpg.webp';
import slider5 from '../assets/slider-5.jpg.webp';
import slider6 from '../assets/slider-6.jpg.webp';

function Slider() {
  const images = [homebg, img_1, slider, slider3, slider4, slider5, slider6];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-white">
      <header className="text-center py-16 bg-white">
        <h1 className="text-4xl md:text-6xl font-bold">
          International Tour <br /> Management
        </h1>
        <p className="mt-7 text-lg md:text-xl text-gray-600 px-4 md:px-0 max-w-2xl mx-auto">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <br />
          there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean.
        </p>
      </header>

      <div className="relative">
        {/* Image Slider Section */}
        <div className="flex justify-center items-center py-16 relative">
          <div className="w-full md:w-3/4 lg:w-2/3 relative">
            {/* Image with z-index adjusted */}
            <img
              className="w-full h-[300px] md:h-[500px] lg:h-[700px] object-cover rounded-lg relative z-10"
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
            />

            {/* Left Arrow */}
            <button
              className="absolute top-1/2 left-4 md:left-6 lg:left-10 transform -translate-y-1/2 bg-white p-2 md:p-3 rounded-full shadow-md hover:bg-gray-200 text-lg z-20"
              onClick={prevSlide}
            >
              &#10094;
            </button>

            {/* Right Arrow */}
            <button
              className="absolute top-1/2 right-4 md:right-6 lg:right-10 transform -translate-y-1/2 bg-white p-2 md:p-3 rounded-full shadow-md hover:bg-gray-200 text-lg z-20"
              onClick={nextSlide}
            >
              &#10095;
            </button>

            {/* Dots for navigation */}
            <div className="flex justify-center mt-4 space-x-2 z-20">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full cursor-pointer ${
                    currentIndex === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Slanted Background Color Div */}
        <div
          className="absolute bottom-0 left-0 w-full h-1/2 bg-[#36b5d1] z-0"
          style={{ clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0% 100%)" }}
        ></div>
      </div>
    </div>
  );
}

export default Slider;
