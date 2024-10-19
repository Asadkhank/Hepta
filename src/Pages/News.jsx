import React from 'react';
import gallery3 from '../assets/slider-5.jpg.webp';
import gallery4 from '../assets/slider-6.jpg.webp';
import BG from '../assets/img_1.webp';

function News() {
  const galleryItems = [
    { id: 1, src: gallery3, date: 'February 26, 2018', title: 'Free Template by Colorlib', link: '#' },
    { id: 2, src: gallery4, date: 'February 26, 2018', title: 'Free Template by Colorlib', link: '#' },
    { id: 3, src: gallery3, date: 'February 26, 2018', title: 'Free Template by Colorlib', link: '#' },
    { id: 4, src: gallery4, date: 'February 26, 2018', title: 'Free Template by Colorlib', link: '#' },
    { id: 5, src: gallery3, date: 'February 26, 2018', title: 'Free Template by Colorlib', link: '#' },
    { id: 6, src: gallery4, date: 'February 26, 2018', title: 'Free Template by Colorlib', link: '#' },
  ];

  const popularPosts = [
    { id: 1, src: gallery3, date: 'February 27, 2018', title: 'Free Template by Colorlib', link: '#' },
    { id: 2, src: gallery4, date: 'February 27, 2018', title: 'Another Free Template', link: '#' },
    { id: 3, src: gallery3, date: 'February 27, 2018', title: 'Yet Another Template', link: '#' },
    { id: 4, src: gallery4, date: 'February 27, 2018', title: 'Awesome Free Template', link: '#' },
  ];

  const categories = [
    { name: 'Events', count: 12 },
    { name: 'Resto bar', count: 4 },
    { name: 'Celebration', count: 23 },
    { name: 'Promos', count: 8 },
  ];

  return (
    <div>
      {/* Header Section (News Component) */}
      <div
        style={{
          backgroundImage: `url(${BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <h1 className="text-5xl md:text-7xl font-bold">Blog</h1>
        <p className="mt-4 text-base md:text-xl text-center">
          A free template by{' '}
          <a
            href="https://colorlib.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 underline hover:text-white"
          >
            Colorlib
          </a>
          . Download and share!
        </p>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto p-4 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Main Gallery Section */}
          <div className="lg:col-span-2 ml-0 lg:ml-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {galleryItems.map((item) => (
                <div key={item.id} className="bg-white shadow-lg p-4 h-auto">
                  <a href={item.link} className="block">
                    <img src={item.src} alt={item.title} className="w-full h-64 object-cover" />
                    <div className="mt-2">
                      <p className="text-gray-500 text-sm">{item.date}</p>
                      <h3 className="font-bold text-xl hover:text-green-600 transition-colors duration-200">
                        {item.title}
                      </h3>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="w-full mt-8 lg:mt-0 lg:w-[70%] space-y-8 mx-auto lg:mx-0">
            {/* Search Bar */}
            <div className="bg-white p-4 shadow">
              <input
                type="text"
                placeholder="Search..."
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            {/* Popular Posts */}
            <div className="bg-white p-4 shadow">
              <h3 className="font-bold mb-4">Popular Posts</h3>
              <div className="space-y-4">
                {popularPosts.map((post) => (
                  <a key={post.id} href={post.link} className="flex space-x-2 hover:bg-gray-100 p-2 transition duration-200">
                    <img src={post.src} alt={post.title} className="w-16 h-16 object-cover" />
                    <div>
                      <p className="text-gray-500 text-sm">{post.date}</p>
                      <h4 className="font-bold text-sm hover:text-green-600 transition-colors duration-200">
                        {post.title}
                      </h4>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-4 shadow">
              <h3 className="font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index} className="flex justify-between">
                    <a href={`#${category.name.toLowerCase()}`} className="">
                      {category.name}
                    </a>
                    <span className="text-gray-500">({category.count})</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Pagination Section */}
        <div className="flex justify-center space-x-2 mt-8">
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`w-8 h-8 flex items-center justify-center border rounded-full ${
                page === 1 ? 'bg-green-200 text-green-700' : 'bg-white text-gray-700'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
