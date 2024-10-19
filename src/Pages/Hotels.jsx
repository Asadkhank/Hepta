import React, { useState } from "react";
import BG from "../assets/slider-4.jpg.webp"; // Background image for the header
import breakfast from "../assets/breakfast1.svg";
import pearth from "../assets/planet-earth2.svg";
import beach from "../assets/004-beach.svg";
import mountains from "../assets/005-mountains.svg";
import hotair from "../assets/006-hot-air-balloon.svg";
import airplane from "../assets/003-airplane.svg";
import Slider1 from "../assets/slider-1.webp";
import img1 from "../assets/img_1.webp";
import slider3 from "../assets/slider-3.jpg.webp";
import slider4 from "../assets/slider-4.jpg.webp";
import slider5 from "../assets/slider-5.jpg.webp";
import slider6 from "../assets/slider-6.jpg.webp";

// Main component for Hotels
const Hotels = () => {
  // State for the current index of the slider
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of images for the slider
  const images = [Slider1, img1, slider3, slider4, slider5, slider6];

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
      {/* Header Section */}
      <div
        style={{
          backgroundImage: `url(${BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <h1 className="text-7xl font-bold">Our Hotel</h1>
        <p style={{ marginTop: "20px", textAlign:"center", fontSize: "1.5rem" }}>
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

      {/* Services Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-24 mb-28 px-4">
        {/* Individual service cards */}
        {[
          { img: breakfast, title: "Good Foods" },
          { img: pearth, title: "Travel Anywhere" },
          { img: airplane, title: "Airplane" },
          { img: beach, title: "Beach Resort" },
          { img: mountains, title: "Mountain Climbing" },
          { img: hotair, title: "Hot Air Balloon" },
        ].map(({ img, title }) => (
          <div className="flex flex-col items-center mb-2" key={title}>
            <img src={img} alt={title} className="w-16 h-16 mb-2" />
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-600 mt-1">
              Far far away, behind the word mountains, far <br /> from the
              countries Vokalia and Consonantia, <br /> there live the blind
              texts.
            </p>
          </div>
        ))}
      </div>

     {/* Rooms Section */}
<div className="container mx-auto px-4 py-16">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Room images and descriptions */}

    {/* Image 1 */}
    <div
      className="bg-cover bg-center h-[600px] sm:mt-8 lg:mt-0"
      style={{ backgroundImage: `url(${Slider1})` }}
    ></div>

    {/* Description 1 */}
    <div className="flex flex-col justify-center items-start px-4 sm:px-6 md:px-8 lg:px-28">
      <h2 className="text-3xl font-bold mb-4">Family Room</h2>
      <p className="text-gray-700">
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
        <button className="mt-[35px] bg-transparent border border-black text-black text-lg py-3 px-6 rounded transition duration-300 hover:bg-emerald-600 hover:text-black">
          Visit Colorlib
        </button>
      </a>
    </div>

    {/* Description 2 */}
    <div className="flex flex-col justify-center items-start px-4 sm:px-6 md:px-8 lg:px-28 sm:mt-8 lg:mt-0">
      <h2 className="text-3xl font-bold mb-4">Presidential Room</h2>
      <p className="text-gray-700">
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
        <button className="mt-[35px] bg-transparent border border-black text-black text-lg py-3 px-6 rounded transition duration-300 hover:bg-emerald-600 hover:text-black">
          Visit Colorlib
        </button>
      </a>
    </div>

    {/* Image 2 */}
    <div
      className="bg-cover bg-center h-[600px] sm:mt-8 lg:mt-0"
      style={{ backgroundImage: `url(${img1})` }}
    ></div>
  </div>
</div>


      {/* Image Slider Section */}
      <div className="relative">
        {/* Image Slider Section */}
        <div className="flex justify-center items-center py-16 relative">
          <div className="w-11/12 md:w-3/4 lg:w-2/3 relative">
            {/* Image with z-index adjusted */}
            <img
              className="w-full h-[700px] object-cover rounded-lg relative z-10"
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
            />

            {/* Left Arrow */}
            <button
              className="absolute top-1/2 left-[-4rem] transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-200 text-lg z-20"
              onClick={prevSlide}
            >
              &#10094;
            </button>

            {/* Right Arrow */}
            <button
              className="absolute top-1/2 right-[-4rem] transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-200 text-lg z-20"
              onClick={nextSlide}
            >
              &#10095;
            </button>

            {/* Dots for navigation */}
            <div className="flex justify-center -mt-7 space-x-2 z-20">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full cursor-pointer ${
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
 
     {/* Blog Cards Section */}
<div className=" py-16 bg-[#36b5d1]">
  {/* Title and Description */}
  <div className="text-center mb-12">
    <h1 className="text-6xl font-bold">More Hotel Features</h1>
    <p className="text-lg mt-4 max-w-2xl mx-auto text-gray-600">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo
      odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores
      quis, blanditiis laboriosam alias. Sed.
    </p>
  </div>

  {/* Blog Cards */}
  <div className="flex justify-center flex-wrap mx-auto max-w-5xl">
    {/* Blog Card 1 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-80 mx-2 mb-4">
      <a href="#">
        <img
          className="w-full h-48 object-cover"
          src={slider6}
          alt="Blog 1"
        />
      </a>
      <div className="p-4 flex flex-col">
        <a href="#">
          <h3 className="text-3xl font-bold mt-2 hover:text-sky-500 transition duration-300">
            45 Best Places <br /> To Unwind
          </h3>
        </a>
      </div>
    </div>

    {/* Blog Card 2 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-80 mx-2 mb-4">
      <a href="#">
        <img
          className="w-full h-48 object-cover"
          src={slider5}
          alt="Blog 2"
        />
      </a>
      <div className="p-4 flex flex-col">
        <a href="#">
          <h3 className="text-3xl font-bold mt-2 hover:text-sky-500 transition duration-300">
            45 Best Places <br /> To Unwind
          </h3>
        </a>
      </div>
    </div>

    {/* Blog Card 3 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-80 mx-2 mb-4">
      <a href="#">
        <img
          className="w-full h-48 object-cover"
          src={slider4}
          alt="Blog 3"
        />
      </a>
      <div className="p-4 flex flex-col">
        <a href="#">
          <h3 className="text-3xl font-bold mt-2 hover:text-sky-500 transition duration-300">
            45 Best Places <br /> To Unwind
          </h3>
        </a>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Hotels;
