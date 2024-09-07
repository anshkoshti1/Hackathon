import React from 'react';

const Contactus = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12 px-4">
      {/* Header */}
      <header className="w-full max-w-2xl text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-700">
          Have questions or need more information? Reach out to us using the form below.
        </p>
      </header>

      {/* Contact Form */}
      <section className="w-full max-w-2xl bg-white rounded-lg shadow-md p-8 mb-12">
        <form className="flex flex-col">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none hover:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none hover:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none hover:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your message"
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none hover:border-blue-500 focus:ring-1 focus:ring-blue-500 h-32"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500 transition duration-300 font-semibold"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* General Contact Information */}
      <section className="w-full max-w-2xl bg-white rounded-lg shadow-md p-8 text-center">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Get in Touch</h2>
        <p className="text-gray-700 mb-2">
          <strong>Phone:</strong> (123) 456-7890
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Email:</strong> contact@hospital.com
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Address:</strong> 123 Health St, Wellness City, HC 56789
        </p>
      </section>
    </div>
  );
};

export default Contactus;
