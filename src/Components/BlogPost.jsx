import React, { useEffect, useRef } from 'react';
import slider6 from '../assets/slider-6.jpg.webp';
import slider4 from '../assets/slider-4.jpg.webp';
import slider5 from '../assets/slider-5.jpg.webp';

const BlogPost = () => {
  const cardRefs = useRef([]);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-12');
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 } // Reduced threshold to trigger animations slightly earlier
    );

    // Observe cards
    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    // Observe h2 and p
    if (headingRef.current) observer.observe(headingRef.current);
    if (paragraphRef.current) observer.observe(paragraphRef.current);

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (paragraphRef.current) observer.unobserve(paragraphRef.current);
    };
  }, []);

  return (
    <div>
      {/* Recent Blog Post Section */}
      <section className="bg-[#36b5d1] py-16">
        <div className="text-center mb-12">
          <h2
            ref={headingRef}
            className="text-6xl font-bold opacity-0 transform translate-y-12 transition duration-700 ease-in-out"
          >
            Recent Blog Post
          </h2>
          <p
            ref={paragraphRef}
            className="mt-4 leading-8 text-xl text-gray-800 px-4 md:px-0 max-w-2xl mx-auto opacity-0 transform translate-y-12 transition duration-700 ease-in-out"
          >
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="flex justify-center flex-wrap mx-auto max-w-5xl">
          {/* Blog Card 1 */}
          <div
            ref={(el) => (cardRefs.current[0] = el)}
            className="bg-white rounded-lg shadow-lg overflow-hidden w-80 mx-2 mb-4 h-[500px] transform transition duration-700 ease-in-out opacity-0 translate-y-12"
          >
            <a href="#">
              <img className="w-full h-48 object-cover" src={slider6} alt="Beautiful Landscape" loading="lazy" />
            </a>
            <div className="p-4 flex flex-col h-[calc(500px-192px)]">
              <p className="mt-4 text-gray-500">February 26, 2018</p>
              <a href="#">
                <h3 className="text-3xl font-bold mt-2 hover:text-sky-500 transition duration-300">
                  45 Best Places <br /> To Unwind
                </h3>
              </a>
              <p className="mt-2 leading-8 text-gray-600 flex-grow">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                there live the blind texts.
              </p>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div
            ref={(el) => (cardRefs.current[1] = el)}
            className="bg-white rounded-lg shadow-lg overflow-hidden w-80 mx-2 mb-4 h-[500px] transform transition duration-700 ease-in-out opacity-0 translate-y-12"
          >
            <a href="#">
              <img className="w-full h-48 object-cover" src={slider5} alt="Cultural Heritage" loading="lazy" />
            </a>
            <div className="p-4 flex flex-col h-[calc(500px-192px)]">
              <p className="mt-4 text-gray-500">February 26, 2018</p>
              <a href="#">
                <h3 className="text-3xl font-bold mt-2 hover:text-sky-500 transition duration-300">
                  45 Best Places <br /> To Unwind
                </h3>
              </a>
              <p className="mt-2 leading-8 text-gray-600 flex-grow">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                there live the blind texts.
              </p>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div
            ref={(el) => (cardRefs.current[2] = el)}
            className="bg-white rounded-lg shadow-lg overflow-hidden w-80 mx-2 mb-4 h-[500px] transform transition duration-700 ease-in-out opacity-0 translate-y-12"
          >
            <a href="#">
              <img className="w-full h-48 object-cover" src={slider4} alt="Coastal Retreat" loading="lazy" />
            </a>
            <div className="p-4 flex flex-col h-[calc(500px-192px)]">
              <p className="mt-4 text-gray-500">February 26, 2018</p>
              <a href="#">
                <h3 className="text-3xl font-bold mt-2 hover:text-sky-500 transition duration-300">
                  45 Best Places <br /> To Unwind
                </h3>
              </a>
              <p className="mt-2 leading-8 text-gray-600 flex-grow">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                there live the blind texts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
