import React from 'react';
import hero from '../../assets/hero.png'; 


const Hero = () => {
  return (
    <div className='h-screen w-full max-w-screen-2xl mx-auto flex flex-col md:items-start items-center justify-center gap-3 text-left px-8 md:px-20 text-tertiary-1 font-display font-light' 
    style={{
       background: `linear-gradient(to top, #101010 20%, rgba(0,0,0,0.48)), url(${hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top right',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100%'
      }}>
      <h1 className='font-bold font-body md:text-8xl text-6xl md:ml-20'>
        Hello<b className='font-bolder text-primary-1'>.</b>
      </h1>
      <small className='font-bold font-body text-3xl md:ml-20'> I'm Amara Reynolds </small>
      <p className='text-sm md:ml-20'> A Professional Graphics Designer & Certified Web Developer. </p>
      <span className='md:ml-20 mt-4'>
        <a className='py-2 px-5 bg-transparent border border-primary-1 text-sm font-light' href=''>View My Works</a>
        <a className='py-2 px-5 border border-primary-1 bg-primary-1 text-sm font-light hover:bg-primary-2' href=''>Download CV</a>
      </span>
    </div>
  )
}

export default Hero;