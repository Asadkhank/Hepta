import React from 'react';
import breakfast from "../assets/breakfast1.svg";
import pearth from "../assets/planet-earth2.svg"; 
import beach from "../assets/004-beach.svg"; 
import mountains from "../assets/005-mountains.svg"; 
import hotair from "../assets/006-hot-air-balloon.svg"; 
import airplane from "../assets/003-airplane.svg"; 

const Experience = () => {
  return (
    <div className="custom-container mx-auto py-12 px-6 sm:px-8 md:px-12 lg:px-16 w-full bg-gray-100 text-center">
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Experience Once in Your Lifetime
        </h2>
        <p className="mt-4 text-sm sm:text-base text-gray-600">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, <br className="hidden md:block" />
          there live the blind texts. Separated they live in Bookmarksgrove
          right at the coast of the <br className="hidden md:block" /> Semantics, a large language ocean.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0 mb-16">
        {/* Good Foods */}
        <div className="flex flex-col items-center mb-4">
          <img src={breakfast} alt="Good Foods" className="w-12 h-12 sm:w-16 sm:h-16 mb-2" />
          <h3 className="text-lg sm:text-xl font-bold">Good Foods</h3>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Far far away, behind the word mountains, far <br /> from the countries
            Vokalia and Consonantia, <br /> there live the blind texts.
          </p>
        </div>
        {/* Travel Anywhere */}
        <div className="flex flex-col items-center mb-4">
          <img src={pearth} alt="Travel Anywhere" className="w-12 h-12 sm:w-16 sm:h-16 mb-2" />
          <h3 className="text-lg sm:text-xl font-bold">Travel Anywhere</h3>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Far far away, behind the word mountains, far <br /> from the countries
            Vokalia and Consonantia, <br /> there live the blind texts.
          </p>
        </div>
        {/* Airplane */}
        <div className="flex flex-col items-center mb-4">
          <img src={airplane} alt="Airplane" className="w-12 h-12 sm:w-16 sm:h-16 mb-2" />
          <h3 className="text-lg sm:text-xl font-bold">Airplane</h3>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Far far away, behind the word mountains, far <br /> from the countries
            Vokalia and Consonantia, <br /> there live the blind texts.
          </p>
        </div>
        {/* Beach Resort */}
        <div className="flex flex-col items-center mb-4">
          <img src={beach} alt="Beach Resort" className="w-12 h-12 sm:w-16 sm:h-16 mb-2" />
          <h3 className="text-lg sm:text-xl font-bold">Beach Resort</h3>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Far far away, behind the word mountains, far <br /> from the countries
            Vokalia and Consonantia, <br /> there live the blind texts.
          </p>
        </div>
        {/* Mountain Climbing */}
        <div className="flex flex-col items-center mb-4">
          <img src={mountains} alt="Mountain Climbing" className="w-12 h-12 sm:w-16 sm:h-16 mb-2" />
          <h3 className="text-lg sm:text-xl font-bold">Mountain Climbing</h3>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Far far away, behind the word mountains, far <br /> from the countries
            Vokalia and Consonantia, <br /> there live the blind texts.
          </p>
        </div>
        {/* Hot Air Balloon */}
        <div className="flex flex-col items-center mb-4">
          <img src={hotair} alt="Hot Air Balloon" className="w-12 h-12 sm:w-16 sm:h-16 mb-2" />
          <h3 className="text-lg sm:text-xl font-bold">Hot Air Balloon</h3>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Far far away, behind the word mountains, far <br /> from the countries
            Vokalia and Consonantia, <br /> there live the blind texts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
