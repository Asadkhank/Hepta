import React from 'react';
import BG from '../assets/slider-3.jpg.webp'; // Check if this path is correct
import CustomerReview from '../Components/CustomerReview';

const Contact = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', { name, email, phone, message });
    // You can add more logic here, like sending the data to an API
  };

  return (
    <>
      {/* Background Section */}
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
        <h1 className="text-4xl md:text-7xl font-bold">Contact</h1>
        <p className="mt-4 text-sm md:text-xl">
          A free template by{' '}
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

      <div className="flex flex-col md:flex-row justify-center mt-8 md:mt-24 min-h-screen bg-white">
        {/* Contact Form Section */}
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white p-6 shadow-2xl h-auto flex flex-col justify-between">
            <form className="space-y-4 flex-grow flex flex-col" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="w-full md:w-1/2">
                  <label className="block text-gray-600 text-lg mb-2" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-gray-300 rounded p-3 text-base focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label className="block text-gray-600 text-lg mb-2" htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border border-gray-300 rounded p-3 text-base focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-600 text-lg mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded p-3 text-base focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-gray-600 text-lg" htmlFor="message">Write Message</label>
                <textarea
                  id="message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border border-gray-300 rounded p-3 text-base focus:outline-none focus:ring-2 focus:ring-teal-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-4 py-3 w-full border border-teal-600 text-teal-600 text-base rounded hover:bg-teal-600 hover:text-white transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="w-full md:w-1/3 p-4">
          <div>
            <h3 className="text-teal-600 font-bold">ADDRESS:</h3>
            <p className="text-lg md:text-2xl font-semibold">98 West 21st Street, Suite 721, New York, NY 10016</p>
          </div>

          <div className="mt-6">
            <h3 className="text-teal-600 font-bold">PHONE:</h3>
            <p className="font-semibold text-lg md:text-2xl">(+1) 435 3533</p>
          </div>

          <div className="mt-6">
            <h3 className="text-teal-600 font-bold">EMAIL:</h3>
            <p className="font-semibold text-lg md:text-2xl">info@yourdomain.com</p>
          </div>
        </div>
      </div>

      <CustomerReview />
    </>
  );
};

export default Contact;
