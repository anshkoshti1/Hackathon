import React from 'react';
import { NavLink } from 'react-router-dom';

const Signin = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Container */}
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>

        {/* Username Input */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-1 hover:border-blue-500 transition-all duration-500 ease-out focus:ring-blue-500"
            placeholder="Enter your username"
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
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-1 hover:border-blue-500 transition-all duration-500 ease-out focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>

        {/* Login Button */}
        <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-500 transition duration-300">
          Login
        </button>

        {/* Forgot Password Link */}
        <p className="text-center text-gray-500 mt-4">
          <NavLink to="#" className="hover:underline">
            Forgot Password?
          </NavLink>
        </p>

        <p className="text-center text-gray-500 mt-4">
          Don't have an account?{' '}
          <NavLink to='/sign-up' className="text-blue-600 hover:underline">
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signin;
