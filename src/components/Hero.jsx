import React from 'react';
// import hero from '../../assets/hero.png'; 


const Hero = () => {
  return (
    <div className='w-full max-w-screen-2xl mx-auto flex flex-col items-center justify-center gap-3 px-8 pt-16 pb-8 text-secondary-1 text-center font-display font-light dark:bg-secondary-1 dark:text-tertiary-1' 
    style={{
      //  background: `linear-gradient(to top, #101010 20%, rgba(0,0,0,0.48)), url(${hero})`,
      //  background: 'red',
      // background: "transparent",
        backgroundSize: 'cover',
        backgroundPosition: 'top right',
        backgroundRepeat: 'no-repeat',
        // height: '100vh',
        width: '100%'
      }}>
      {/* <h1 className='font-bold font-body md:text-8xl text-6xl md:ml-20 md:pt-40 bg-primary-1 md:bg-transparent-1 '>
        Hello<b className='font-bolder md:text-primary-1'>.</b>
      </h1> */}
      {/* <small className='font-bold font-body text-3xl md:ml-20'> I'm Amara Reynolds </small> */}
      <p className='text-sm text-center max-w-screen-sm mx-auto'> 
        Welcome to my space on the internet, where I showcase my work, creative process, animations, and a variety of other things I'm currently exploring.
      </p>

      <span className='mt-4'>
        <a className='py-2 px-5 bg-transparent border border-primary-1 text-sm font-light hover:bg-secondary-2 hover:border-secondary-2 hover:text-tertiary-1' href=''>View My Works</a>
        <a className='py-2 px-5 text-tertiary-1 border border-primary-1 bg-primary-1 text-sm font-light hover:bg-primary-2 hover:border-primary-2 hover:text-tertiary-1' href=''>Download CV</a>
      </span>
    </div>
  )
}

export default Hero;