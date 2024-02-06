import React from 'react'
import hero from "../../assets/hero.png"
import { logos } from '../../Data'

const Home = () => {
  return (
    <div className='section' id='home'>
      <div className='md:flex items-center justify-center'>
        <div>
          <div className="font-bold text-x text-Teal mb-4 ">
            {" "}
            Revolutionizing Online Education
          </div>
          <div className='sm:text-[2.5rem] text-[1.825rem] font-bold' >
            Unlock The Power of <br /> Innovative Online Learning <br />
          </div>
          <p className='text-sm leading-7 text-gray  max-w-sm'>
            Experience the future of education. Dive into a world of limitless possibilities and transformative learning experiences
          </p>
          <div className='mt-6'>
            <button className='px-6 py-3 font-bold bg-Teal rounded-lg text-white mr-4 text-sm' >Get Started</button>
            <button className='px-6 py-3  font-bold border border-solid border-gray rounded-lg text-sm'>Discover</button>
          </div>
        </div>
        <div className='md:w-[60%]'>
          <img src={hero} />
        </div>
      </div>
      <div>
        <p className='text-center text-xl '>
          We Collaborate With <span className='text-Teal'> 100+ innovative schools, educators, and training centers at the forefront of education.</span>
        </p>
        <div className='flex itesm-center justify-center flex-wrap gap-8 p-2'>
          {logos.map((logo, index) => (
            <div className='w-28' key={index}>
              <img src={logo} alt="Logos" className='w-full object-cover' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home