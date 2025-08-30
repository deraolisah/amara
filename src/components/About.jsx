import React from 'react';
import { RiReactjsFill } from "react-icons/ri";
import { PiAperture, PiBasket, PiBasketball, PiBezierCurve, PiCode, PiFilmSlate, PiGameController } from "react-icons/pi";
import aboutImage from "../assets/me-about.jpg"
import Socials from './Socials';

const About = () => {
  return (
    <div className='bg-transparent dark:bg-secondary-1 text-secondary-1 dark:text-tertiary-1  max-w-screen-2xl relative mx-auto flex flex-col gap-4 text-center justify-center px-4 py-20'>
      {/* <h5 className='font-display text-sm font-light'> BIOGRAPHY </h5> */}
      {/* <h2 className='font-bold mb-2 text-2xl'> WHO AM I? </h2> */}

      <div className='flex md:flex-row flex-col gap-6 items-center'>
        <img className='hidden md:flex max-w-sm sm:mx-auto md:ml-auto md:mr-0' src={aboutImage}/>

        <div className='md:text-left basis-1/2 flex flex-col gap-2'>
          {/* <h4 className='font-bold font-display text-sm'> About Me </h4> */}
          {/* <h3 className='font-bold font-display text-lg'> Amara Reynold's Details </h3> */}
          <p className='text-secondary-1 dark:bg-secondary-1 dark:text-tertiary-1 text-sm leading-6 font-light font-display'>
            I cultivate a growth-driven mindset where intuitive vision, data-driven research, and impactful design converge to create products that truly resonate.
          </p>
          <div class="grid lg:grid-cols-3 grid-cols-2 mt-2 gap-2 flex-wrap text-secondary-2">
            <span className='flex flex-col gap-2 items-center border border-primary-1 bg-transparent text-center py-5 px-0'>
            <RiReactjsFill className='text-3xl' />
              {/* <PiCode className='text-3xl' /> */}
              <p> M.E.R.N Stack </p>
            </span>
            <span className='flex flex-col gap-2 items-center border border-primary-1 bg-transparent text-center py-5 px-0'>
              <PiBezierCurve className='text-3xl' />
              <p> Adobe Suite </p>
            </span>
            <span className='flex flex-col gap-2 items-center border border-primary-1 bg-transparent text-center py-5 px-0'>
                <PiGameController className='text-3xl' />
                <p> Gaming </p>
            </span>
            <span className='flex flex-col gap-2 items-center border border-primary-1 bg-transparent text-center py-5 px-0'>
                <PiAperture className='text-3xl' />
                <p> Photography </p>
            </span>
            <span className='flex flex-col gap-2 items-center border border-primary-1 bg-transparent text-center py-5 px-0'>
                <PiFilmSlate className='text-3xl' />
                <p> Video Editing </p>
            </span>
            <span className='flex flex-col gap-2 items-center border border-primary-1 bg-transparent text-center py-5 px-0'>
                <PiBasketball className='text-3xl' />
                <p> B-ball </p>
            </span>
          </div>

          <Socials />
        </div>
      </div>
    </div>
  )
}

export default About;