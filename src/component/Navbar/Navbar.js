import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between px-10 bg-slate-800 h-14'>
            <div className='text-white font-bold text-lg'>
                Logo
            </div>
            <div className=''>
            <NavLink className='mx-4 font-semibold text-gray-300 hover:text-teal-500 transition-colors' to='/'>Home</NavLink>
            <NavLink className='mx-4 font-semibold text-gray-300 hover:text-teal-500 transition-colors ' to='/blog'>Blog</NavLink>
            <NavLink className='mx-4 font-semibold text-gray-300 hover:text-teal-500 transition-colors ' to='/about'>About</NavLink>
            <NavLink className='mx-4 font-semibold text-gray-300 hover:text-teal-500 transition-colors ' to='/contact'>Contact</NavLink>
            </div>
            <div>
                <NavLink to='/login'>
                    <button className='bg-teal-500 py-2 px-4 text-white font-semibold rounded'>Login</button>
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;