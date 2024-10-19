import React, { useState } from "react";
import BG from "../assets/img_1.webp";
import Slider1 from "../assets/slider-1.webp";
import slider3 from "../assets/slider-3.jpg.webp";
import slider4 from "../assets/slider-4.jpg.webp";
import slider5 from "../assets/slider-5.jpg.webp";
import slider6 from "../assets/slider-6.jpg.webp";
import TeamSection from "../Components/TeamSection";

const About = () => {
  // State for the current index of the slider
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of images for the slider
  const images = [Slider1, BG, slider3, slider4, slider5, slider6];

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <h1 className="text-7xl font-bold">About Us</h1>
        <p style={{ marginTop: "20px", fontSize: "1.5rem" }}>
          A free template by{" "}
          <a
            href="https://colorlib.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "gray",
              textDecoration: "underline",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "white")}
            onMouseOut={(e) => (e.currentTarget.style.color = "gray")}
          >
            Colorlib
          </a>
          . Download and share!
        </p>
      </div>

      {/* Card Section */}
<div className="container mx-auto px-4 py-16">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Room images and descriptions */}

    {/* Image Section */}
    <div
      className="bg-cover bg-center h-[400px] sm:h-[500px] md:h-[600px]"
      style={{ backgroundImage: `url(${Slider1})` }}
    ></div>

    {/* Text Section with Slide-in Effect */}
    <div className="flex flex-col justify-center items-center sm:items-start text-center sm:text-left px-4 sm:px-6 md:px-8 lg:px-28 transition duration-1000 transform slide-in">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Family Room</h2>
      <p className="text-gray-700 text-sm sm:text-base lg:text-lg">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts. Separated they live in
        Bookmarksgrove right at the coast of the Semantics, a large language
        ocean.
      </p>
      <a
        href="https://colorlib.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="mt-8 bg-transparent border border-black text-black text-sm sm:text-lg py-2 sm:py-3 px-4 sm:px-6 rounded transition duration-300 hover:bg-emerald-600 hover:text-black">
          Visit Colorlib
        </button>
      </a>
    </div>
  </div>
</div>


      <style>
        {`
          /* Slide-in effect */
          .slide-in {
            animation: slideIn 1s ease-out forwards;
          }

          /* Keyframes for sliding */
          @keyframes slideIn {
            0% {
              transform: translateX(-30%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}
      </style>

      {/* Hotel Gallery */}
<div className="bg-white">
  <header className="text-center py-10 sm:py-16 bg-white">
    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">Hotel Gallery</h1>
    <p className="mt-5 sm:mt-7 text-base sm:text-lg md:text-xl text-gray-600 px-4 md:px-0 max-w-2xl mx-auto">
      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <br />
      there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
    </p>
  </header>

  {/* Image Slider Section */}
  <div className="flex justify-center items-center py-10 sm:py-16 relative">
    <div className="w-11/12 md:w-3/4 lg:w-2/3 relative">
      {/* Responsive Image */}
      <img
        className="w-full h-[300px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover rounded-lg"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
      />

      {/* Left Arrow */}
      <button
        className="absolute top-1/2 left-2 sm:left-[-1rem] md:left-[-4rem] transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-200 text-lg"
        onClick={prevSlide}
      >
        &#10094;
      </button>

      {/* Right Arrow */}
      <button
        className="absolute top-1/2 right-2 sm:right-[-1rem] md:right-[-4rem] transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-200 text-lg"
        onClick={nextSlide}
      >
        &#10095;
      </button>

      {/* Dots for navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  </div>
</div>


<TeamSection/>


    </>
  );
};

export default About;
