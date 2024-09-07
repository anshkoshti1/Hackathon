import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="h-screen text-white flex items-center bg-blue-700">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
        <div className="flex flex-col justify-center items-start pt-20 md:pt-0">
          <h1 className="text-6xl font-light mb-4 text-left">
            Your Most trusted <br />
            <span className="font-semibold uppercase">health partner</span>
          </h1>
          <p className="text-3xl font-medium capitalize text-left">The best match services for you</p>
          <p className="opacity-90 my-12 max-w-md text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, nulla odit esse necessitatibus corporis voluptatem?
          </p>
          <div className="flex flex-col md:flex-row justify-start items-start gap-4">
            <NavLink 
              to="/learn-more" 
              className="btn-white px-10 py-3 rounded-full shadow-md text-blue-600 bg-white hover:shadow-lg hover:bg-slate-300
              hover:text-blue-700 font-semibold transition"
            >
              Learn More
            </NavLink>
            <NavLink 
              to="/sign-up" 
              className="btn-light-blue px-10 py-3 rounded-full shadow-md text-white bg-blue-600 hover:shadow-lg hover:bg-blue-500 font-semibold transition"
            >
              Sign Up
            </NavLink>
          </div>
        </div>
        <div className="flex justify-center items-center mt-12 md:mt-0">
          <img src="src/assets/header.png" alt="Health Partner" className="max-w-md mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Header;
