import React from 'react';
import portfolio1 from '/portfolio1.jpg';
import portfolio2 from '/portfolio2.jpg';
import portfolio3 from '/portfolio3.jpg';
import portfolio4 from '/portfolio4.jpg';
import portfolio5 from '/portfolio5.png';
import portfolio6 from '/portfolio6.jpg';

const Portfolio = () => {
  return (
    <div className='max-w-screen-2xl mx-auto flex flex-col items-center bg-transparent-1 text-secondary-1 dark:text-tertiary-1 dark:bg-secondary-1  p-6 px-8'>
      <h1 className='text-4xl uppercase'> Portfolio </h1>
      <div className='w-full grid grid-cols-2 md:grid-cols-3 mt-10 gap-1 md:gap-5'>
        <img className="hover:scale-105 hover:opacity-50 transition-all transition-250" src={portfolio1}/>
        <img className="hover:scale-105 hover:opacity-50 transition-all transition-250" src={portfolio2}/>
        <img className="hover:scale-105 hover:opacity-50 transition-all transition-250" src={portfolio3}/>
        <img className="hover:scale-105 hover:opacity-50 transition-all transition-250" src={portfolio4}/>
        <img className="hover:scale-105 hover:opacity-50 transition-all transition-250" src={portfolio5}/>
        <img className="hover:scale-105 hover:opacity-50 transition-all transition-250" src={portfolio6}/>
      </div>
    </div>
  )
}


export default Portfolio;