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
    {
        id: 3,
        href: "courses",
        link: "Courses",
    },
    {
        id: 4,
        href: "teacher",
        link: "Teachers",
    },
    {
        id: 5,
        href: "contact",
        link: "Contact",
    },
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
        title: "Advanced English Composition",
        rating: 4.9,
        participants: 500,
        price: 75,
    },
    {
        id: 2,
        image: courses2,
        category: "Mathematics",
        title: "Algebra Fundamentals",
        rating: 4.8,
        participants: 700,
        price: 75,
    },
    {
        id: 3,
        image: courses3,
        category: "Science",
        title: "Introduction to Biology",
        rating: 4.9,
        participants: 300,
        price: 99,
    },
    {
        id: 4,
        image: courses4,
        category: "Computer Science",
        title: "Web Development Basics",
        rating: 4.7,
        participants: 600,
        price: 85,
    },
    {
        id: 5,
        image: courses5,
        category: "English Language",
        title: "Effective Communication Skills",
        rating: 4.9,
        participants: 500,
        price: 105,
    },
    {
        id: 6,
        image: courses6,
        category: "Mathematics",
        title: "Geometry Essentials",
        rating: 4.9,
        participants: 500,
        price: 105,
    },
    {
        id: 7,
        image: courses7,
        category: "Science",
        title: "Chemistry Fundamentals",
        rating: 4.9,
        participants: 500,
        price: 105,
    },
    {
        id: 8,
        image: courses8,
        category: "Computer Science",
        title: "Introduction to Programming",
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
        answer: "EduExcellence is an innovative Learning Management System (LMS) website designed to elevate the educational experience. This platform seamlessly integrates advanced technology with user-friendly interfaces, offering a comprehensive solution for educational institutions and learners alike. EduExcellence provides a centralized hub for course management, content delivery, and interactive learning activities. With robust features such as real-time progress tracking, collaborative tools, and personalized assessments, EduExcellence empowers educators to create engaging and dynamic online courses. Students benefit from a flexible and intuitive platform that enhances their learning journey, fostering academic success. EduExcellence is committed to shaping the future of education by embracing cutting-edge technology to make learning accessible, interactive, and tailored to individual needs.",
    },
    {
        id: 2,
        title: "What are EduExcellence Features?",
        answer: "Explore our platform's comprehensive features designed to streamline school management processes. From HR and admission management to parent communication and learning tools, our tailored resources cover a wide range of functionalities to support educational institutions. Discover how our platform can simplify administrative tasks, foster effective communication, and enhance overall school operations.",
    },
    {
        id: 3,
        title: "How can EduExcellence benefit my institution?",
        answer: "EduExcellence offers a range of benefits for educational institutions, including streamlined administrative processes, enhanced communication with stakeholders, and improved student engagement. By leveraging our platform, institutions can save time and resources on tasks such as HR management, admissions, and course delivery. Additionally, EduExcellence provides valuable insights through analytics and reporting tools, enabling institutions to make data-driven decisions to improve performance and outcomes."
    },

];