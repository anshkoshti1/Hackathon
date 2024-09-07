import React from 'react';

const Learnmore = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12 px-4">
      {/* Header */}
      <header className="w-full max-w-5xl text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Our Hospital</h1>
        <p className="text-lg text-gray-700">
          We are dedicated to providing the best healthcare services with compassion and excellence.
        </p>
      </header>

      {/* Services Section */}
      <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Services</h2>
          <p className="text-gray-700 mb-6">
            We offer a wide range of services including general medicine, emergency care, surgery, pediatrics, and more.
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            Learn More
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Facilities</h2>
          <p className="text-gray-700 mb-6">
            Our hospital is equipped with state-of-the-art facilities to ensure the best possible care for our patients.
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            Learn More
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="w-full max-w-5xl bg-white rounded-lg shadow-md p-6 text-center">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">About Us</h2>
        <p className="text-gray-700 mb-6">
          Our hospital has been serving the community for over 30 years with a commitment to excellence in healthcare. We strive to
          provide a compassionate and caring environment for all our patients.
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
          Learn More About Us
        </button>
      </section>
    </div>
  );
};

export default Learnmore;
