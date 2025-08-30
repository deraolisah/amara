import React from 'react';

const Socials = () => {
  return (
    <div className='flex items-center gap-11 bg-transparent dark:bg-secondary-1 text-secondary-1 dark:text-tertiary-1 pt-4'>
      <ul className='flex w-full gap-4 md:items-end items-center md:justify-end justify-center font-display font-light text-sm flex-wrap'>
        <li><a href="#" target='_blank'>Facebook</a></li> | 
        <li><a href="#" target='_blank'>Skype</a></li> |
        <li><a href="#" target='_blank'>Twitter</a></li> |
        <li><a href="#" target='_blank'>Linkedin</a></li>
      </ul>
    </div>
  )
}

export default Socials;