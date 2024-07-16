import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Frontend & Backend Developer",
    icon: web,
  },
  {
    title: "Certified ethical hacker",
    icon: mobile,
  },
  {
    title: "Php Developer",
    icon: backend,
  },
  {
    title: "Algorithmic Problem Solver",
    icon: creator,
  },
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Java",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Python",
    icon: mongodb,
  },
  {
    name: "Mysql",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "aws",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "TRAINEE IN OLEA CÔTE D'IVOIRE",
    company_name: "OLEA AFRICA (link)",
    company_link: "https://www.olea.africa",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 13, 2024 - present",
    points: [
      "Extranet-ops, Abidjan, Ivory Coast",
      "Design, development of complex Reassurance management web applications using Laravel.",
      "Use of front-end technologies such as HTML, CSS, Tailwind CSS, BootStrap, JavaScript/jQuery.",
    ],
  },
  {
    title: "Developer Full-Stack Junior",
    company_name: "Asma boutik (link)",
    company_link: "https://www.asmaboutik.com",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Abidjan, Côte d’Ivoire | 2023 - 2024",
    points: [
      "Asma boutik, Devoo.",
      "Development of web applications and websites adapted to a varied clientele.",
      "Use of front-end technologies such as HTML, CSS, JavaScript/jQuery.",
      "Work closely with customers to understand their needs and provide customized solutions.",
    ],
  },
  {
    title: "Developer Web junior",
    company_name: "Devoo (link)",
    company_link: "https://www.devoo.site",
    icon: shopify,
    iconBg: "#383E56",
    date: "Yamoussoukro, Côte d’Ivoire| 2022 - 2023",
    points: [
      "Asma boutik, Devoo.",
      "Development of web applications and websites tailored for a varied clientele.",
      "Use of front-end technologies such as HTML, CSS, JavaScript/jQuery.",
      "Working closely with customers to understand their needs and provide tailored solutions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Rajan is a quick learner and hardworking individual who excels in adapting to new challenges and consistently delivers outstanding results.",
    name: "Akriti Karn",
    designation: "International Sales Executive",
    company: "B2b Exports LLC",
    image: "https://media.licdn.com/dms/image/D4D03AQEkxTKX9IH4LA/profile-displayphoto-shrink_800_800/0/1681407522164?e=1726099200&v=beta&t=_ARwdO7VYUcgYuhILOcPmdnXze10O_1yuHEc3RaHGgw",
  },
  {
    testimonial:
      "He effectively led our academic project group with strong organizational skills and insightful guidance. Their leadership ensured smooth coordination among team members, leading to a successful and cohesive project outcome.",
    name: "Sumit kumar",
    designation: "Student",
    company: "VIT Bhopal 25",
    image: "https://media.licdn.com/dms/image/D4D03AQG6R0B0CEc1_w/profile-displayphoto-shrink_400_400/0/1701462307033?e=1726099200&v=beta&t=Y8Yb5JbUojKwPUtuYlNMpYVabLRstgQIGYFCyiGBiDM",
  },
  {
    testimonial:
      "Rajan bhaiya is a senior mentor who has provided invaluable guidance and support throughout my studies, helping me navigate challenges with patience and expertise.",
    name: "Atharv vyas",
    designation: "student",
    company: "VIT Bhopal 26",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2GFiDgIWIO4yh00U6hw6p9g9ZcPUWznSl9g&s",
  },
];

const projects = [
  {
    name: "Asma boutik",
    description:
      "Asma boutik an E-commerce site developed using the CMS WORDPRESS.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://asmaboutik.com",
  },
  {
    name: "Bazar paris abidjan",
    description:
      "An E-commerce application developed using the CMS WORDPRESS.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://bazarparisabidjan.com",
  },
  {
    name: "Poterie mangoro de Côte d'Ivoire",
    description:
      "A web application for selling Ivorian pottery developed in Laravel with front push with tailwind and bootstrap.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://poteriemangorociv.bazarparisabidjan.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
