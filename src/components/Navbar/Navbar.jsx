import React from 'react';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

const Navbar = () => {
  return (
    <nav className='absolute left-1/2 -translate-x-1/2 w-full max-w-screen-2xl py-10 px-8 md:px-20 flex items-center justify-between bg-transparent dark:bg-secondary-1 text-secondary-1 dark:text-tertiary-1'>
      <a className='font-bold font-body text-xl text-primary-1' href='./index.html'> Amara </a>

      <ul className='md:flex hidden items-center gap-0 font-display font-light ml-auto'>
        <li><a className='hover:underline text-sm mx-5' href='./About'>About</a></li>
        <li><a className='hover:underline text-sm mx-5' href='./Blog'>Blog</a></li>
        <li><a className='hover:underline text-sm mx-5' href='./Portfolio'>Portfolio</a></li>
        <li><a className='hover:underline text-sm mx-5' href='./Resume'>Resume</a></li>
        <li><a className='hover:bg-green-400 text-sm bg-primary-1 hover:bg-primary-2 hover:border-primary-2 hover:text-tertiary-1 py-2 px-5' href='./Contact'>Contact Me</a></li>
      </ul>
      <span className='cursor-pointer text-2xl ml-5 hover:text-secondary-2'><DarkModeToggle /></span>
    </nav>
  )
}

export default Navbar;