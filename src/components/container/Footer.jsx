import ocqrcode from "../../assets/ocqrcode.png";
import {
  BsFacebook,
  // BsInstagram,
  // BsTwitter,
  // BsPinterest,
  BsLinkedin, // Import LinkedIn icon
} from "react-icons/bs";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: "auto" }}
      transition={{ duration: 1 }}
      className="bg-Teal p-10"
    >
      <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-white ">
        <div>
          <div className="font-bold mb-6">Location</div>
          <div className="flex flex-col items-start gap-4">
            <img src={ocqrcode} alt="Location QR Code" className="w-24" />
            <p className="text-sm">41 Dokki Street<br/>Office 803</p>
          </div>
        </div>

        <div>
          <div className="font-bold mb-6">Services</div>
          <div className="flex flex-col gap-4">
            <a href="/science" className="text-sm hover:underline">
              Tutors LMS
            </a>
            <a href="/math" className="text-sm hover:underline">
             Centers LMS
            </a>
            <a href="/english" className="text-sm hover:underline">
              Schools LMS
            </a>
            <a href="/computer-science" className="text-sm hover:underline">
              Tailored LMS
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Company</div>
          <div className="flex flex-col gap-4">
            <a href="" className="text-sm hover:underline">
              Privacy Policy
            </a>
            <a href="" className="text-sm hover:underline">
              Sitemap
            </a>
            <a href="" className="text-sm hover:underline">
              Careers
            </a>
            <a href="" className="text-sm hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Contact Us</div>
          <div className="text-sm mb-4">info@eduexcellence.education</div>
          <div className="text-sm">+20 1127727721</div>
          {/* <div className="text-sm">+20 1099966116</div> */}
          <div className="text-sm">+971 502414190</div>
          <div className="flex gap-4 mt-4">
            <a href="/" className="hover:scale-110 text-xl">
              <BsFacebook />
            </a>
            {/* <a href="" className="hover:scale-110 text-xl">
              <BsInstagram />
            </a> */}
            {/* <a href="" className="hover:scale-110 text-xl">
              <BsTwitter />
            </a> */}
            {/* <a href="" className="hover:scale-110 text-xl">
              <BsPinterest />
            </a> */}
            <a href="/" className="hover:scale-110 text-xl">
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-12 text-sm font-base text-white">
      <span className="font-bold">EduExcellence</span>, all rights reserved &copy; {new Date().getFullYear()}
      </div>
    </motion.div>
  );
};

export default Footer;
