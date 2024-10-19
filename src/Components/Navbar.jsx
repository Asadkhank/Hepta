import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setNavbarVisible(false); // Scrolling down
      } else {
        setNavbarVisible(true); // Scrolling up
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <>
      {/* Navbar with Hepta logo and hamburger menu button */}
      <nav
        className={`absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-transparent z-50 transition-transform duration-300 ${
          navbarVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ zIndex: 100 }} // Ensure it's above the image
      >
        {/* Hepta Logo */}
        <div className="text-white font-bold text-5xl mr-4">
          <Link to="/">Hepta</Link>
        </div>

        {/* Hamburger Icon (Increased space on small and medium screens) */}
        <div className="text-white mr-4 sm:mr-8 md:mr-12">
          <button onClick={handleMenuToggle} className="focus:outline-none">
            <div className="space-y-2">
              <span className="block w-6 h-1 bg-white"></span>
              <span className="block w-6 h-1 bg-white"></span>
              <span className="block w-6 h-1 bg-white"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Full-screen overlay menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col justify-center text-center items-center text-black">
          {/* Close button */}
          <button
            onClick={handleCloseMenu}
            className="absolute top-10 right-10 text-3xl font-bold hover:text-gray-400"
          >
            &times; {/* Close button */}
          </button>

          <ul className="space-y-8 text-4xl font-bold">
            <li>
              <Link to="/" onClick={handleCloseMenu} className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/hotels" onClick={handleCloseMenu} className="hover:text-gray-300">
                Hotels
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleCloseMenu} className="hover:text-gray-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={handleCloseMenu} className="hover:text-gray-300">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/news" onClick={handleCloseMenu} className="hover:text-gray-300">
                News
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleCloseMenu} className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
