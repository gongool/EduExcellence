import aboutVideo from "../../assets/vid1.mp4"; // Update the path to your video file

const About = () => {
  return (
    <div className='section' id='about'>
      <div className='grid md:grid-cols-2 gap-8 place-items-center'>
        <div className='border-[3px] border-solid border-Teal rounded-lg'>
          <video autoPlay loop muted className='p-4'>
            <source src={aboutVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <div className='font-bold sm:text-[1.875rem] text-[1.5] mb-5'>
            Empowering Minds with
            <br />Cutting-Edge <span className='text-Teal'>Educational Solutions</span>
          </div>
          <p className='text-sm text-gray leading-7 mb-4'>Revolutionizing the way we learn, our state-of-the-art platform offers unparalleled opportunities for growth and innovation. Say goodbye to traditional learning methods and embrace a future of limitless possibilities.</p>
          {/* <button className='py-3 px-6 border border-solid border-gray rounded-lg font-bold hover:scale-110'>Learn More</button> */}
        </div>
      </div>
    </div>
  )
}

export default About;
