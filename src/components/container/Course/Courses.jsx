// import { categories } from '../../../Data'
import { courses } from '../../../Data'
// import Categories from './Categories'
import Course from './Course'
// import { motion } from "framer-motion"

const Courses = () => {

  // const container = {
  //   hidden: {
  //     opacity: 0,
  //     scale: 0,
  //   },
  //   visible: {
  //     opacity: 1,
  //     scale: 1,
  //     transition: {
  //       delayChildren: 0.3,
  //       staggerChildren: 0.2,
  //     },
  //   },
  // };

  return (
    <div  id='courses'>
      {/* <div className='text-center'>
      <div className='sm:text-3xl text-2xl font-bold mb-5'>Explore Platform Features for <span className='text-Teal'>Efficient School Management</span></div>
<p className='text-sm text-gray leading-7 max-w-[700px] mx-auto line-clamp-2 hover:line-clamp-none text-justify'>Explore our platform&apos;s comprehensive features designed to streamline school management processes. From HR and admission management to parent communication and learning tools, our tailored resources cover a wide range of functionalities to support educational institutions. Discover how our platform can simplify administrative tasks, foster effective communication, and enhance overall school operations.</p>

      </div>

      <motion.div
      variants = {container}
      initial = "hidden"
      whileInView="visible"
      className='grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-6 text-sm text-center'>
        { categories.map(category => {
          return <Categories key={category.id} {...category} />
        })}
      </motion.div> */}

      <div className='text-xl text-center font-bold'>
        Most Popular Courses
      </div>
      <div className='mt-12 overflow-x-hidden w-full relative'>
        <div className='flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide '>
          {courses.map(course => {
            return <Course key={course.id} {...course} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Courses
