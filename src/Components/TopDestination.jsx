import { useState } from 'react';
import slider6 from '../assets/slider-6.jpg.webp';
import slider5 from '../assets/slider-5.jpg.webp';
import img3 from '../assets/img_4.webp';
import img4 from '../assets/img_4.webp';

function Destination() {
  const [destinations] = useState([
    {
      title: 'Food & Wines',
      image: slider6,
      rating: 4.5,
      reviews: 3239,
    },
    {
      title: 'Resort & Spa',
      image: slider5,
      rating: 4,
      reviews: 4921,
    },
    {
      title: 'Hotel Rooms',
      image: img3,
      rating: 4.7,
      reviews: 2112,
    },
    {
      title: 'Mountain Climbing',
      image: img4,
      rating: 4.8,
      reviews: 6421,
    },
  ]);

  const formatReviews = (reviews) => {
    return reviews >= 1000 ? `${(reviews / 1000).toFixed(1)}K` : reviews;
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0 ? 1 : 0;

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927a1 1 0 011.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.175.588 1.756l-2.8 2.036a1 1 0 00-.364 1.118l1.07 3.292c.302.93-.755 1.696-1.54 1.118L10 12.347l-2.84 2.064c-.785.578-1.842-.188-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L3.526 8.665c-.782-.581-.38-1.756.588-1.756h3.462a1 1 0 00.95-.69l1.07-3.292z" />
          </svg>
        ))}
        {halfStar === 1 && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927a1 1 0 011.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.175.588 1.756l-2.8 2.036a1 1 0 00-.364 1.118l1.07 3.292c.302.93-.755 1.696-1.54 1.118L10 12.347l-2.84 2.064c-.785.578-1.842-.188-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L3.526 8.665c-.782-.581-.38-1.756.588-1.756h3.462a1 1 0 00.95-.69l1.07-3.292z" />
          </svg>
        )}
      </>
    );
  };

  return (
    <div className="container mx-auto mt-24 px-8 md:px-16 lg:px-32 py-16 max-w-7xl">
      <h1 className="text-4xl font-bold text-center mb-8">Top Destinations</h1>
      <p className="text-center leading-7 text-lg md:text-xl text-gray-600 mb-12">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto
        doloremque quo <br className="hidden md:inline-block" /> odio repudiandae sunt eveniet? Enim facilis laborum
        voluptate id porro, culpa maiores <br className="hidden md:inline-block" /> quis, blanditiis laboriosam alias. Sed.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {destinations.map((destination) => (
          <div key={destination.title} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105">
            <img
              src={destination.image}
              alt={`${destination.title} Image`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{destination.title}</h2>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  {renderStars(destination.rating)}
                </div>
                <div className="text-gray-500">{formatReviews(destination.reviews)} reviews</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destination;
