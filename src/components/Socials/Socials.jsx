import React from 'react';

const Socials = () => {
  return (
    <div className='flex max-w-screen-2xl mx-auto relative items-center gap-11 md:pr-20 bg-secondary-1 text-tertiary-1'>
      <ul className='flex w-full gap-4 md:items-end items-center md:justify-end justify-center py-1 font-display font-light text-sm'>
        <li><a href="#" target='_blank'>Facebook</a></li> | 
        <li><a href="#" target='_blank'>Skype</a></li> |
        <li><a href="#" target='_blank'>Twitter</a></li> |
        <li><a href="#" target='_blank'>Linkedin</a></li>
      </ul>
    </div>
  )
}

export default Socials;