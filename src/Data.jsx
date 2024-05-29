import { FiUsers, FiBook, FiMessageCircle, FiSettings, FiMonitor, FiSmartphone, FiLayers, FiGlobe } from "react-icons/fi";

import courses1 from "./assets/courses1.jpg";
import courses2 from "./assets/courses2.jpg";
import courses3 from "./assets/courses3.jpg";
import courses4 from "./assets/courses4.jpg";
import courses5 from "./assets/courses5.jpg";
import courses6 from "./assets/courses6.jpg";
import courses7 from "./assets/courses7.jpg";
import courses8 from "./assets/courses8.jpg";

import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import logo4 from "./assets/logo4.png";
import logo5 from "./assets/logo5.png";
import logo6 from "./assets/logo6.png";

export const navLinks = [
    {
        id: 1,
        href: "home",
        link: "Home",
    },
    {
        id: 2,
        href: "about",
        link: "About",
    },
    // {
    //     id: 3,
    //     href: "courses",
    //     link: "Courses",
    // },
    {
        id: 4,
        href: "teacher",
        link: "Teachers",
    },
    // {
    //     id: 5,
    //     href: "contact",
    //     link: "Contact",
    // },
];

export const categories = [
    {
        id: 1,
        icon: <FiUsers />,
        category: "HR Management",
    },
    {
        id: 2,
        icon: <FiBook />,
        category: "Admission Management",
    },
    {
        id: 3,
        icon: <FiMessageCircle />,
        category: "Parent Communication",
    },
    {
        id: 4,
        icon: <FiSettings />,
        category: "Learning Management",
    },
    {
        id: 5,
        icon: <FiMonitor />,
        category: "Finance Management",
    },
    {
        id: 6,
        icon: <FiSmartphone />,
        category: "Website & Mobile App",
    },
    {
        id: 7,
        icon: <FiLayers />,
        category: "Add-on Management",
    },
    {
        id: 8,
        icon: <FiGlobe />,
        category: "Multi Language",
    },
];

export const courses = [
    {
        id: 1,
        image: courses1,
        category: "English Language",
        title: "IGCSE English Language",
        rating: 4.9,
        participants: 500,
        price: 75,
    },
    {
        id: 2,
        image: courses2,
        category: "Mathematics",
        title: "IGCSE Mathematics",
        rating: 4.8,
        participants: 700,
        price: 75,
    },
    {
        id: 3,
        image: courses3,
        category: "Biology",
        title: "IGCSE Biology",
        rating: 4.9,
        participants: 300,
        price: 99,
    },
    {
        id: 4,
        image: courses4,
        category: "Computer Science",
        title: "IGCSE Computer Science",
        rating: 4.7,
        participants: 600,
        price: 85,
    },
    {
        id: 5,
        image: courses5,
        category: "English Literature",
        title: "IGCSE English Literature",
        rating: 4.9,
        participants: 500,
        price: 105,
    },
    {
        id: 6,
        image: courses6,
        category: "Mathematics",
        title: "IGCSE Additional Mathematics",
        rating: 4.9,
        participants: 500,
        price: 105,
    },
    {
        id: 7,
        image: courses7,
        category: "Chemistry",
        title: "IGCSE Chemistry",
        rating: 4.9,
        participants: 500,
        price: 105,
    },
    {
        id: 8,
        image: courses8,
        category: "Physics",
        title: "IGCSE Physics",
        rating: 4.9,
        participants: 500,
        price: 105,
    },
];

export const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

export const accordions = [
    {
        id: 1,
        title: "What is EduExcellence?",
        answer: "EduExcellence is a state-of-the-art Learning Management System (LMS) that revolutionizes the way we learn by integrating advanced technology with user-friendly interfaces. It provides a comprehensive solution for educational institutions, offering features like course management, content delivery, interactive learning activities, real-time progress tracking, collaborative tools, and personalized assessments. EduExcellence aims to empower educators and enhance the learning journey of students, making education accessible, interactive, and tailored to individual needs."
    },
    {
        id: 2,
        title: "Who can benefit from EduExcellence?",
        answer: "EduExcellence caters to a wide range of users including tutors, educational centers, and schools. It is designed to support educators in creating dynamic and engaging online courses while providing students with a flexible and intuitive learning platform. Additionally, the EduExcellence Academy offers specialized home schooling solutions focused on the IGCSE curriculum and bespoke courses to meet diverse educational needs."
    },
    {
        id: 3,
        title: "What are the main features of EduExcellence?",
        answer: "EduExcellence boasts a variety of features aimed at enhancing the educational experience, including: \n- Enhanced Learning Experience with cutting-edge technology\n- Comprehensive Course Management for centralized course handling\n- Real-time Progress Tracking for timely student support\n- Collaborative Tools to foster dynamic learning environments\n- Personalized Assessments to cater to individual learner needs\n- State-of-the-Art Technology integration\n- Real-time Monitoring and Feedback\n- Interactive and Collaborative Learning Tools\n- Customized Learning Pathways."
    },
    {
        id: 4,
        title: "What is EduExcellence Academy?",
        answer: "EduExcellence Academy is a specialized branch of EduExcellence that focuses on home schooling solutions with an emphasis on the IGCSE curriculum. The academy offers a structured and flexible option for home schooling, catering to diverse student needs. It also provides national student bridging courses to help students transition into the IGCSE curriculum smoothly, along with bespoke courses tailored to provide unique educational experiences."
    },
    {
        id: 5,
        title: "How does EduExcellence support home schooling?",
        answer: "EduExcellence Academy supports home schooling by offering a structured yet flexible approach to education, specifically designed for the IGCSE curriculum. It provides comprehensive resources and tools for parents and students to manage their educational journey effectively. The academy also offers national student bridging courses to ensure students are well-prepared for the IGCSE curriculum, as well as bespoke courses to cater to individual learning needs."
    },
    {
        id: 6,
        title: "How can EduExcellence benefit my institution?",
        answer: "EduExcellence offers numerous benefits to educational institutions, including streamlined administrative processes, enhanced communication with stakeholders, and improved student engagement. By using EduExcellence, institutions can save time and resources on tasks such as HR management, admissions, and course delivery. Additionally, the platform provides valuable insights through analytics and reporting tools, enabling institutions to make data-driven decisions to improve performance and outcomes."
    },
    {
        id: 7,
        title: "How does EduExcellence enhance the learning experience?",
        answer: "EduExcellence enhances the learning experience by incorporating advanced technology and user-friendly interfaces to deliver an enriched educational environment. The platform offers interactive learning activities, real-time progress tracking, collaborative tools, and personalized assessments, which help create a dynamic and engaging learning experience for both educators and students. This approach ensures that learning is accessible, interactive, and tailored to the needs of each individual student."
    }
];
