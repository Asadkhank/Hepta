import React from 'react';
import BG from '../assets/img_1.webp';
import gallery1 from '../assets/img_5.webp';
import gallery2 from '../assets/img_4.webp';
import gallery3 from '../assets/slider-5.jpg.webp';
import gallery4 from '../assets/slider-6.jpg.webp';

const Gallery = () => {
  return (
    <>
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
        <h1 className="text-4xl md:text-7xl font-bold">Our Hotel</h1>
        <p className="mt-4 text-sm md:text-xl">
          A free template by{" "}
          <a
            href="https://colorlib.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 underline hover:text-white"
          >
            Colorlib
          </a>
          . Download and share!
        </p>
      </div>

      {/* Image Section */}
      <div className="flex flex-col lg:flex-row justify-center mt-12 lg:mt-24 gap-4 px-4">
        {/* First div with 2x2 grid of images */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <a href="https://example.com/gallery4" target="_blank" rel="noopener noreferrer">
            <img src={gallery4} className="h-32 w-full md:h-48 md:w-68" alt="Gallery 4" />
          </a>
          <a href="https://example.com/gallery3" target="_blank" rel="noopener noreferrer">
            <img src={gallery3} className="h-32 w-full md:h-48 md:w-68" alt="Gallery 3" />
          </a>
          <a href="https://example.com/gallery2" target="_blank" rel="noopener noreferrer">
            <img src={gallery2} className="h-32 w-full md:h-48 md:w-68" alt="Gallery 2" />
          </a>
          <a href="https://example.com/gallery1" target="_blank" rel="noopener noreferrer">
            <img src={gallery1} className="h-32 w-full md:h-48 md:w-68" alt="Gallery 1" />
          </a>
        </div>

        {/* Second div with 2x2 grid of images */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <a href="https://example.com/gallery2" target="_blank" rel="noopener noreferrer">
            <img src={gallery2} className="h-32 w-full md:h-48 md:w-68" alt="Gallery 2" />
          </a>
          <a href="https://example.com/gallery1" target="_blank" rel="noopener noreferrer">
            <img src={gallery1} className="h-32 w-full md:h-48 md:w-68" alt="Gallery 1" />
          </a>
          <a href="https://example.com/gallery4" target="_blank" rel="noopener noreferrer">
            <img src={gallery4} className="h-32 w-full md:h-48 md:w-68" alt="Gallery 4" />
          </a>
          <a href="https://example.com/gallery3" target="_blank" rel="noopener noreferrer">
            <img src={gallery3} className="h-32 w-full md:h-48 md:w-68" alt="Gallery 3" />
          </a>
        </div>
      </div>

      {/* New div with two images occupying the same space as 2x2 images */}
      <div className="flex flex-col md:flex-row justify-center gap-4 mt-4 px-4">
        <a href="https://example.com/gallery4" target="_blank" rel="noopener noreferrer">
          <img src={gallery4} className="h-48 w-full md:h-96 md:w-[590px]" alt="Gallery 4" />
        </a>
        <a href="https://example.com/gallery3" target="_blank" rel="noopener noreferrer">
          <img src={gallery3} className="h-48 w-full md:h-96 md:w-[590px]" alt="Gallery 3" />
        </a>
      </div>

      {/* New section with four images in a single row */}
      <div className="flex flex-wrap justify-center gap-4 mb-32 mt-4 px-4">
        <a href="https://example.com/gallery2" target="_blank" rel="noopener noreferrer">
          <img src={gallery2} className="h-32 w-full md:h-48 md:w-68" alt="Gallery 2" />
        </a>
        <a href="https://example.com/gallery1" target="_blank" rel="noopener noreferrer">
          <img src={gallery1} className="h-32 w-full md:h-48 md:w-68" alt="Gallery 1" />
        </a>
        <a href="https://example.com/gallery4" target="_blank" rel="noopener noreferrer">
          <img src={gallery4} className="h-32 w-full md:h-48 md:w-68" alt="Gallery 4" />
        </a>
        <a href="https://example.com/gallery3" target="_blank" rel="noopener noreferrer">
          <img src={gallery3} className="h-32 w-full md:h-48 md:w-68" alt="Gallery 3" />
        </a>
      </div>
    </>
  );
};

export default Gallery;
