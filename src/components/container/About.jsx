import aboutVideo1 from "../../assets/vid2.mp4"; 
import aboutVideo2 from "../../assets/vid3.mp4"; 

const About = () => {
  return (
    <div className='section' id='features'>
      <div className='grid md:grid-cols-2 gap-8 place-items-center'>
        <div className='flex flex-col gap-8'>
          <div className='border-[3px] border-solid border-Teal rounded-lg'>
            <video autoPlay loop muted className='p-4'>
              <source src={aboutVideo1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className='border-[3px] border-solid border-Teal rounded-lg'>
            <video autoPlay loop muted className='p-4'>
              <source src={aboutVideo2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div>
          <div className='font-bold sm:text-[1.875rem] text-[1.5rem] mb-5'>
            Empowering Minds with
            <br />Cutting-Edge <span className='text-Teal'>Educational Solutions</span>
          </div>
          <p className='text-sm text-gray leading-7 mb-4'>
            Revolutionizing the way we learn, our state-of-the-art platform offers unparalleled opportunities for growth and innovation. Say goodbye to traditional learning methods and embrace a future of limitless possibilities.
          </p>
          <ul className='list-disc list-inside text-sm text-gray leading-7'>
            <li>
              <span className='font-semibold'>Enhanced Learning Experience:</span> Experience learning like never before with our cutting-edge technology and user-friendly interfaces.
            </li>
            <li>
              <span className='font-semibold'>Comprehensive Course Management:</span> Easily manage your courses with centralized handling, content delivery, and interactive activities.
            </li>
            <li>
              <span className='font-semibold'>Real-time Progress Tracking:</span> Monitor student progress in real-time to provide timely support and feedback.
            </li>
            <li>
              <span className='font-semibold'>Collaborative Tools:</span> Foster dynamic learning environments with our collaborative tools that make education interactive and engaging.
            </li>
            <li>
              <span className='font-semibold'>Personalized Assessments:</span> Tailor assessments to individual learner needs, ensuring a customized learning pathway for every student.
            </li>
            <li>
              <span className='font-semibold'>AI Integration:</span> Leverage AI to assist tutors with question generation, personalized feedback, and much more.
            </li>
          </ul>
          {/* <button className='py-3 px-6 border border-solid border-gray rounded-lg font-bold hover:scale-110'>Learn More</button> */}
        </div>
      </div>
    </div>
  );
}

export default About;
