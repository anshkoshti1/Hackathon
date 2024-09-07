import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 overflow-hidden">
      {/* Container */}
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Sign Up</h2>

        {/* Username Input */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-1 hover:border-blue-500 focus:ring-blue-500"
            placeholder="Enter your username"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-1 hover:border-blue-500 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block text-gray-600 mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-1 hover:border-blue-500 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>

        {/* Signup Button */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 transition duration-300">
          Sign Up
        </button>

        {/* Already have an account Link */}
        <p className="text-center text-gray-500 mt-4">
          Already have an account?{' '}
          <Link to='/sign-in' className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
