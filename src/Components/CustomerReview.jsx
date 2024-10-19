import React from "react";
import person1 from "../assets/person_1.webp";
import person2 from "../assets/person_2.webp";
import person3 from "../assets/person_3.webp";

function CustomerReview() {
  const reviews = [
    {
      img: person1,
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      name: "-- Clare Gupta",
    },
    {
      img: person2,
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      name: "-- Rogie Slater",
    },
    {
      img: person3,
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      name: "-- John Doe",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Full height and background color */}
      <div className="container mx-auto mt-16 mb-16 p-8">
        <h2
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-center mb-4 md:mb-8 opacity-0 translate-y-4 transition-all duration-500 ease-in-out"
          style={{ animation: "fadeIn 0.5s forwards", animationDelay: "0ms" }}
        >
          Happy Customers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-4 mt-10 rounded-lg bg-white flex flex-col items-start opacity-0 translate-y-4 transition-all duration-500 ease-in-out"
              style={{ animation: "fadeIn 0.5s forwards", animationDelay: `${index * 100 + 200}ms` }}
            >
              <img
                src={review.img}
                alt="Customer"
                className="w-20 h-20 rounded-full mb-4"
              />
              <p className="text-gray-700 text-sm md:text-base">
                {review.text}
              </p>
              <p className="text-gray-500 mt-2 text-sm md:text-base">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default CustomerReview;
