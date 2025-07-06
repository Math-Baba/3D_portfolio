import js from "@eslint/js";
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
  github,
  gmail,
  phone,
  linkedin,
  software,
  IA,
  robot,
  ACENSI,
  C,
  Cplus,
  python,
  java,
  SQL,
  threejs,
  portfolio,
  PHP,
  webcup,
  NAO,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "A propos",
  },
  {
    id: "work",
    title: "Experiences",
  },
  {
    id: "project",
    title: "Projets",
  },
  {
    id: "contact",
    title: "Contacts",
  },
];

const services = [
  {
    title: "Développement logiciel",
    icon: software,
  },
  {
    title: "Intelligence Artificielle",
    icon: IA,
  },
  {
    title: "Robotique",
    icon: robot,
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
    name: "C",
    icon: C,
  },
  {
    name: "C++",
    icon: Cplus,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "SQL",
    icon: SQL,
  },
];

const experiences = [
  {
    title: "Stagiaire en Développement FullStack",
    company_name: "ACENSI Mauritius Ltd",
    icon: ACENSI,
    iconBg: "#16263b",
    date: "Juin 2025 - Juillet 2025",
    points: [
      "Collaboration avec une équipe composé de 7 stagiaires, un tech lead et une cheffe de projet",
      "Participation dans la conception d'un logiciel CRM ( Customer Relationship Manager) sur la partie Campaign",
      "Développement en Spring boot pour la partie Back-end (CRUD, API Rest, Search & Filter) + test avec Postman",
      "Développement en Angular, sur un template établi, pour la partie front-end (Intégration du CRUD, Search, Filter & Ajout de Export as PDF/Excel)",
      "Contribution et gestion de version avec Git/Github"
    ],
  },
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
    name: "Portefolio 3D",
    description:
      "Ce projet est un portfolio 3D réalisé avec React et Three.js. Je l’ai développé en suivant des tutoriels YouTube, pour approfondir mes connaissances de React tout en créant un site web moderne intégrant des objets 3D interactifs.",
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: reactjs,
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: tailwind,
      },
      {
        id: 3,
        name: 'Three Fiber',
        path: threejs,
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Math-Baba/3D_portfolio",
  },
  {
    name: "TheEnd.Page",
    description:
      "TheEnd.Page est un site web développé en équipe lors du hackathon de la 24h By Webcup et qui nous a valu la 2e place du concous régional.",
    tags: [
      {
        id: 1,
        name: 'HTML',
        path: html,
      },
      {
        id: 2,
        name: 'CSS',
        path: css,
      },
      {
        id: 3,
        name: 'JavaScript',
        path: javascript,
      },
      {
        id: 4,
        name: 'PHP',
        path: PHP,
      },
      {
        id: 5,
        name: 'SQL',
        path: SQL,
      },
    ],
    image: webcup,
    source_code_link: "https://github.com/Math-Baba/The_End_WebCup2025_Website",
  },
  {
    name: "Qui suis-je ?",
    description:
      "Ce projet est un prototype visant intégrer un robot humanoïde, Nao, dans un cadre éducatif pour sensibiliser les enfants de 5 à 10 ans à la biodiversité marine de l’île Maurice. ",
    tags: [
      {
        id: 1,
        name: 'python',
        path: python,
      },
      {
        id: 2,
        name: 'SQL',
        path: SQL,
      },
    ],
    image: NAO,
    source_code_link: "https://github.com/Math-Baba/Projet_Robotique_Nao",
  },
];

const links = [
  {
    logo: github,
    name: "github.com/Math-Baba",
  },
  {
    logo: gmail,
    name: "mathieu.rl.baba@gmail.com",
  },
  {
    logo: phone,
    name: "+230 5771 3641",
  },
  {
    logo: linkedin,
    name: "linkedin.com/in/mathieubaba",
  },
];

export { services, technologies, experiences, testimonials, projects, links };