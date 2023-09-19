import {
  mobile,
  backend,
  web,
  javascript,
  html,

  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  bootstrap,
  brototype,
 stayspot,
 bolt,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React  Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "MERN Stack developr",
    company_name: "Brototype",
    icon: brototype,
    iconBg: "#383E56",
    date: " 2022 - Present",
    points: [
      "Designing and developing web applications using the MERN (MongoDB, Express.js, React.js, Node.js) stack.",
  "Collaborating closely with cross-functional teams, including designers, product managers, and fellow developers, to deliver high-quality and scalable products.",
  "Implementing responsive web design principles and ensuring seamless cross-browser compatibility for enhanced user experiences.",
  "Contributing to code reviews and providing valuable feedback to improve code quality and maintain best practices in MERN stack development."
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Property rental market place",
    description:
      "I successfully developed and deployed a robust Property Rental Marketplace using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This project aimed to provide a user-friendly platform for property owners to list their properties and prospective tenants to search for and rent them.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image:stayspot,
    source_code_link: "https://github.com/Jamshadj/stayspot",
  },
  {
    name: "Bolt",
    description:
      "I spearheaded the development of an innovative e-commerce platform, Bolt, specializing in the sale of premium watches. This project was built using a modern tech stack, including Node.js, Express.js, MongoDB, HTML, and CSS, to create a seamless and visually appealing online shopping experience.",
    tags: [
      // {
      //   name: "react",
      //   color: "blue-text-gradient",
      // },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: bolt,
    source_code_link: "https://github.com/Jamshadj/bolt",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
