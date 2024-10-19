import React, { useEffect, useState } from "react";
import BG from "../assets/homebg.avif";
import img_1 from "../assets/img_1.webp";
import Slider from "../Components/slider.jsx";
import Experience from "../Components/Experience";
import BlogPost from "../Components/BlogPost.jsx";
import CustomerReview from "../Components/CustomerReview.jsx";
import Destination from "../Components/TopDestination.jsx";
// import Footer from "../Components/Footer.jsx";

const Home = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url(${BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          position: "relative",
          color: "white",
        }}
      >
        <h1
          className={`text-5xl md:text-8xl text-center font-bold pt-48 transition-transform duration-500 ${
            showContent ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
          }`}
        >
          Travel & Tours
        </h1>
        <p
          className={`mt-4 text-center text-lg md:text-2xl transition-opacity duration-500 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          A free template by{" "}
          <a
            href="https://colorlib.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white underline transition-colors duration-300"
          >
            Colorlib
          </a>
          . Download and share!
        </p>

        <a
          className="flex justify-center"
          href="https://colorlib.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-6 text-center bg-transparent border border-white text-white text-lg py-3 px-6 rounded transition duration-300 hover:bg-white hover:text-black">
            Visit Colorlib
          </button>
        </a>
      </div>

      {/* Content Section */}
      <div className="flex flex-wrap w-full mt-16 md:mt-28 mb-16 px-4 md:px-8 pt-10">
        {/* Left side: Image */}
        <div
          className={`w-full md:w-1/2 flex justify-center md:justify-end pr-0 md:pr-8 transition-transform duration-500 ${
            showContent ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
          }`}
        >
          <img
            src={img_1}
            alt="Mountain View"
            className="w-full md:w-3/4 h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Right side: Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center pl-0 md:pl-8 mt-10 md:mt-0">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">
            Welcome To Our Website
          </h1>
          <p className="text-lg text-center md:text-left">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p className="text-lg mt-4 text-center md:text-left">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <a
            href="#"
            className="flex items-center justify-center md:justify-start mt-10 text-teal-500 font-semibold text-xl transition duration-300 hover:text-black"
          >
            <span className="border border-gray-300 rounded-full p-1 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 5v10l5-5-5-5z" />
              </svg>
            </span>
            WATCH THE VIDEO
          </a>
        </div>
      </div>

      {/* Other Sections */}
      <Experience />
      <Slider />
      <BlogPost />
      <CustomerReview />
      <Destination />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
