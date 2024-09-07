import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <header className='shadow sticky z-50 top-0 border-b-2'>
        <nav className='px-4 lg:px-6 py-10 bg-blue-700'>
            <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
                <Link to='/' className='flex items-center'>
                    <img src="src\assets\logo.png"
                    className='mr-3 h-12'
                    alt="logo" />
                </Link>

                <div className="flex items-center lg:order-2">
                        <Link
                            to="/sign-in"
                            className="text-blue-700 hover:bg-blue-500 hover:text-white bg-white focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Sign In
                        </Link>
                        <NavLink
                                to="/contact-us"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-white" : "text-gray-800"}  font-medium border-b lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
                                    }
                                >
                                    Contact Us
                        </NavLink>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 text-xl font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-white" : "text-gray-800"} border-b lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/appointment"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-white" : "text-gray-800"} border-b lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
                                    }
                                >
                                    Book an Appointment
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/doctors"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-white" : "text-gray-800"} border-b lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
                                    }
                                >
                                    Doctors
                                </NavLink>
                            </li>    
                        </ul>
                    </div>
            </div>
            </nav>
        </header>
    )
}

export default Header