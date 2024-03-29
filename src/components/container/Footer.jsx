import ocqrcode from "../../assets/ocqrcode.png";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
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
            <p className="text-sm">41, Dokki Street, Office 803</p>
          </div>
        </div>

        <div>
          <div className="font-bold mb-6">Courses</div>
          <div className="flex flex-col gap-4">
            <a href="/science" className="text-sm hover:underline">
              Science
            </a>
            <a href="/math" className="text-sm hover:underline">
              Math
            </a>
            <a href="/english" className="text-sm hover:underline">
              English
            </a>
            <a href="/computer-science" className="text-sm hover:underline">
              Computer Science
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
          <div className="font-bold mb-6">Follow us</div>
          <div className="text-sm mb-4">info@eduexcellence.education</div>
          <div className="text-sm">+20 1117776813</div>
          <div className="text-sm">+20 1099966116</div>
          <div className="text-sm">+20 1111106448</div>
          <div className="flex gap-4 mt-4">
            <a href="" className="hover:scale-110 text-xl">
              <BsFacebook />
            </a>
            <a href="" className="hover:scale-110 text-xl">
              <BsInstagram />
            </a>
            <a href="" className="hover:scale-110 text-xl">
              <BsTwitter />
            </a>
            <a href="" className="hover:scale-110 text-xl">
              <BsPinterest />
            </a>
            <a href="" className="hover:scale-110 text-xl">
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-12 text-sm font-base text-white">
        All rights reserved &copy; {new Date().getFullYear()}
      </div>
    </motion.div>
  );
};

export default Footer;
