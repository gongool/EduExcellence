// import teacher1 from "../../assets/teacher1.png";
// import teacher2 from "../../assets/teacher2.png";
import { accordions } from "../../Data";
import Accordion from "./Accordion";

const Teacher = () => {
  return (
    <div className="section" id="about">
      {/* <div className="grid sm:grid-cols-2 place-items-center justify-between gap-8">
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Become <span className="text-Teal">An Instructor</span> <br /> of
            Our Platform
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
            Are you passionate about teaching and sharing your knowledge with
            others? Join our platform as an instructor and become part of a
            vibrant community of educators. Whether you&apos;re an expert in a
            specific subject or have valuable skills to offer, our platform
            provides you with the tools and resources to create engaging and
            interactive courses. Start making a difference in the lives of
            learners around the world today.
          </p>
          <a href="https://wa.me/201111106448">
            <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold ">
              Start Teaching
            </button>
          </a>
        </div>
        <div className="p-4 md:w-3/4 sm:row-start-1">
          <img src={teacher1} alt="Teacher 1" />
        </div>
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Become <span className="text-Teal">An Instructor</span> <br /> of
            Our Platform
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
            Are you ready to share your expertise and inspire learners
            worldwide? Join our platform as an instructor and unlock endless
            opportunities to showcase your skills. Whether you&apos;re an
            experienced educator or a passionate professional, our platform
            empowers you to create impactful courses that engage and motivate
            learners. Start your journey as an instructor today and make a
            positive impact on the future of education.
          </p>
          <a href="https://wa.me/201111106448">
            <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold ">
              Get Started
            </button>
          </a>
        </div>
        <div className="p-4 md:w-3/4">
          <img src={teacher2} alt="Teacher 2" />
        </div>
      </div>
      <div className="text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem]">
        Frequently <span className="text-Teal">Asked Questions</span>
      </div> */}
      <div className="mt-12 max-w-[700px] mx-auto">
        {accordions.map((accordion) => {
          return <Accordion key={accordion.id} {...accordion} />;
        })}
      </div>
    </div>
  );
};

export default Teacher;
