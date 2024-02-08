import hero from "../../assets/hero.webp"
import { logos } from '../../Data'
import { motion } from "framer-motion"

const Home = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className='section' id='home'>
      <div className='md:flex items-center justify-center'>
        <div >
          <div className=" text-lg text-Teal mb-4 ">
            {" "}
            Revolutionizing online education
          </div>
          <div className='sm:text-[2.5rem] text-[1.825rem] font-bold ' >
            Unlock The Power of <br /> Innovative Online Learning <br />
          </div>
          <p className=' leading-7 text-gray  max-w-sm mt-4 line-clamp-2 hover:line-clamp-none'>
            Experience the future of education. Dive into a world of limitless possibilities and transformative learning experiences
          </p>
          <div className='mt-6'>
            <button className='px-6 py-3 font-bold bg-Teal rounded-lg text-white mr-4 text-sm hover:scale-110 ' >Get Started</button>
            <button className='px-6 py-3  font-bold border border-solid border-gray rounded-lg text-sm hover:scale-110'>Discover</button>
          </div>
        </div>
        <div className='md:w-[60%]'>
          <img src={hero} />
        </div>
      </div>
      <div className='mt-4'>
        <p className='mt-4 text-center text-xl  '>
          We Collaborate With <span className='text-Teal'> an extensive network of pioneering schools, educators, and training centers at the forefront of education.</span>
        </p>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="visible"
        className=' mt-8 flex items-center justify-center flex-wrap gap-8 p-2'>

          {logos.map((logo, index) => (
            <motion.div variants={item} className='w-28 ' key={index}>
              <img src={logo} alt="Logos" className='w-full object-cover' />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Home