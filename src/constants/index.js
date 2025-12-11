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
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
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
    title: "Profil",
  },
  {
    id: "work",
    title: "Expériences",
  },
  {
    id: "projects",
    title: "Projets",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Développeur fullstack Laravel & Angular",
    icon: backend,
  },
  {
    title: "Front-end SPA & UX réactive",
    icon: web,
  },
  {
    title: "APIs REST, bases de données & intégrations",
    icon: mobile,
  },
  {
    title: "CI/CD, qualité et performance",
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
    name: "Laravel / PHP",
    icon: backend,
  },
  {
    name: "Angular / SPA",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "MySQL / PostgreSQL",
    icon: threejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Git & CI/CD",
    icon: git,
  },
];

const experiences = [
  {
    title: "Développeur Fullstack",
    company_name: "OLEA Côte d'Ivoire",
    company_link: "https://www.olea.africa",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Mai 2024 - Présent",
    points: [
      "Conception et développement de modules métiers complexes pour Extranet-Ops, automatisant les flux internes (-40% temps de traitement).",
      "Création d’interfaces réactives et ergonomiques (Angular) pour les pages métier.",
      "CI/CD et suivi des mises en production avec Git pour réduire les incidents de 50%.",
      "Intégration d’APIs, gestion des données et optimisation des performances front.",
    ],
  },
  {
    title: "Développeur Web",
    company_name: "Asma Boutique",
    company_link: "https://www.asmaboutik.com",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2024 - 2025",
    points: [
      "Développement de sites e-commerce sur mesure, responsive et performants.",
      "Recueil des besoins, prototypage rapide et ajustements continus pour 95% de satisfaction client.",
      "Intégration HTML, CSS, JavaScript/jQuery et optimisation SEO de base.",
    ],
  },
  {
    title: "Stagiaire Développement Web (PFE)",
    company_name: "OLEA Côte d'Ivoire",
    company_link: "https://www.olea.africa",
    icon: shopify,
    iconBg: "#383E56",
    date: "2024 - 2025",
    points: [
      "Participation au lancement d’Extranet-Ops et mise en place des premières interfaces Laravel/Bootstrap.",
      "Collaboration sur les modules métiers et correction de bugs critiques avant production.",
      "Optimisation des temps d’accès (+25%) via amélioration ergonomique et performance front.",
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
    image:
      "https://media.licdn.com/dms/image/D4D03AQEkxTKX9IH4LA/profile-displayphoto-shrink_800_800/0/1681407522164?e=1726099200&v=beta&t=_ARwdO7VYUcgYuhILOcPmdnXze10O_1yuHEc3RaHGgw",
  },
  {
    testimonial:
      "He effectively led our academic project group with strong organizational skills and insightful guidance. Their leadership ensured smooth coordination among team members, leading to a successful and cohesive project outcome.",
    name: "Sumit kumar",
    designation: "Student",
    company: "VIT Bhopal 25",
    image:
      "https://media.licdn.com/dms/image/D4D03AQG6R0B0CEc1_w/profile-displayphoto-shrink_400_400/0/1701462307033?e=1726099200&v=beta&t=Y8Yb5JbUojKwPUtuYlNMpYVabLRstgQIGYFCyiGBiDM",
  },
  {
    testimonial:
      "Rajan bhaiya is a senior mentor who has provided invaluable guidance and support throughout my studies, helping me navigate challenges with patience and expertise.",
    name: "Atharv vyas",
    designation: "student",
    company: "VIT Bhopal 26",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2GFiDgIWIO4yh00U6hw6p9g9ZcPUWznSl9g&s",
  },
];

const projects = [
  {
    name: "Asma Boutik",
    description:
      "Boutique en ligne sur WordPress avec intégrations e-commerce et parcours d’achat optimisé.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "ecommerce",
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
    name: "Bazar Paris Abidjan",
    description:
      "Application e-commerce WordPress avec catalogue et paiement en ligne pour le marché ivoirien.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "woocommerce",
        color: "green-text-gradient",
      },
      {
        name: "responsive",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://bazarparisabidjan.com",
  },
  {
    name: "Poterie Mangoro",
    description:
      "Site de vente de poteries ivoiriennes avec Laravel et front responsive.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://poteriemangorociv.bazarparisabidjan.com/",
  },
  {
    name: "EMK Shops",
    description:
      "Plateforme e-commerce personnalisée avec intégration paiement et gestion de panier.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "woocommerce",
        color: "green-text-gradient",
      },
      {
        name: "ux",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://emkshops.com",
  },
  {
    name: "Cour Commune",
    description:
      "Application web vitrine et blog pour mettre en avant les services et contenus communautaires.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "netlify",
        color: "green-text-gradient",
      },
      {
        name: "responsive",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://courcommune.netlify.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
