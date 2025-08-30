import React, { useEffect, useState } from 'react';
import { PiSunDim } from "react-icons/pi";
import { IoMdMoon } from "react-icons/io";
// import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  return (
    <nav className='w-full flex items-center justify-between gap-4 bg-transparent dark:bg-secondary text-secondary dark:text-tertiary'>
      <a className='font-medium font-body text-xs flex flex-col items-start gap-0.5' href='/'> 
        Hello, I'm Amara Reynolds. 
        <span className='font-light text-gray-500'> A designer with a focus on User Interfaces. </span>
      </a>

      <ul className='md:flex flex-1 hidden items-center justify-end gap-4.5 text-sm'>
        <li><a className='hover:underline hover:text-gray-500' href='/about'> About </a></li>
        <li><a className='hover:underline hover:text-gray-500' href='/blog'> Blog </a></li>
        <li><a className='hover:underline hover:text-gray-500' href='/portfolio'> Portfolio </a></li>
        <li><a className='hover:underline hover:text-gray-500' href='/resume'> Resume </a></li>
        <li><a className='btn-primary' href='/contact'> Contact </a></li>
      </ul>

      <div className='flex items-center gap-2'>
        <button onClick={toggleDarkMode} className="p-1 cursor-pointer text-2xl dark:text-black rounded">
          {darkMode ? <PiSunDim /> : <IoMdMoon />}
        </button>

        <span className='md:hidden cursor-pointer text-2xl hover:text-secondary'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </span>
      </div>
    </nav>
  )
}

export default Navbar;