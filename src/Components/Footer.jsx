import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto py-12 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-gray-400">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gray-400">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gray-400">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gray-400">Help</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gray-400">Rooms</a></li>
            </ul>
          </div>
          
          {/* Support Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-gray-400">Our Location</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gray-400">The Hosts</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gray-400">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gray-400">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gray-400">Restaurant</a></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <p className="mb-2 text-gray-300">Address:</p>
            <p className="mb-2 text-gray-300">
              98 West 21st Street, Suite 721 <br /> New York, NY 10016
            </p>
            <p className="mb-2 text-gray-300">Phone:</p>
            <p className="mb-2 text-gray-300">(+1) 435 3533</p>
            <p className="mb-2 text-gray-300">Email:</p>
            <p className="text-gray-300">info@yourdomain.com</p>
          </div>

          {/* Subscribe Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe</h3>
            <p className="mb-4 text-gray-300">Sign up for our newsletter</p>
            <form className="flex flex-col sm:flex-row items-center">
              <input
                type="email"
                className="bg-gray-800 border border-gray-700 py-2 px-4 rounded-l-md focus:outline-none focus:border-gray-600 w-full sm:w-auto"
                placeholder="Your email..."
                aria-label="Email"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-md mt-2 sm:mt-0 sm:ml-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="my-8 border-gray-700" />
      </div>

      {/* Social Media & Copyright */}
      <div className="bg-black py-4">
        <div className="container mx-auto px-4 md:px-0 text-center">
          <p className="text-gray-300">
            Copyright 2022 All rights reserved. | This template is made with ❤️ by 
            <a href="https://colorlib.com" className="text-blue-500 hover:text-blue-400" target="_blank" rel="noopener noreferrer"> Colorlib</a>
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-gray-200"><FaFacebook /></a>
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-gray-200"><FaTwitter /></a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-gray-200"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-gray-200"><FaLinkedin /></a>
            <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-gray-200"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
