import js from "@eslint/js";
import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
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
  garage,
  PHP,
  webcup,
  postman,
  n8n,
  NAO,
  choregraphe,
  arduino,
  ROS2,
  springboot,
  MySQL,
  Postgre,
  staruml,
  prix_ai4good,
  prix_ai4good2,
  atelier,
  prix_webcup,
  prix_webcup2,
  jobpilot,
  AI4GOOD_LOGO
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
    id: "galerie",
    title: "Galerie",
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
    name: "PHP",
    icon: PHP,
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
  {
    name: "Reactjs",
    icon: reactjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "arduino",
    icon: arduino,
  },
  {
    name: "ROS2",
    icon: ROS2,
  },
  {
    name: "spring boot",
    icon: springboot,
  },
  {
    name: "MySQL",
    icon: MySQL,
  },
  {
    name: "Postgre",
    icon: Postgre,
  },
  {
    name: "postman",
    icon: postman,
  },
  {
    name: "star UML",
    icon: staruml,
  },
  {
    name: "Choregraphe",
    icon: choregraphe,
  }
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
      "Développement en Spring boot pour la partie Back-end (CRUD, API Rest, Search & Filter) + test d'intégration",
      "Développement en Angular, sur un template établi, pour la partie front-end (Intégration du CRUD, Search, Filter & Ajout de Export as PDF/Excel)",
      "Contribution et gestion de version avec Git/Github"
    ],
  },
  // {
  //   title: "Mentor - AI4GOOD",
  //   company_name: "AI4GOOD Maurice",
  //   icon: AI4GOOD_LOGO,
  //   iconBg: "#16263b",
  //   date: "Août 2025 - Novembre 2025",
  //   points: [
  //     "Animation d’ateliers créatifs mêlant outils d’intelligence artificielle et techniques manuelles",
  //     "Sensibilisation et formation du jeune public aux outils d’IA appliqués à la création visuelle et narrative.",
  //     "Mise en place d’actions visant à engager et fidéliser la communauté (challenges, partage de prompts IA, portraits des participants, diffusion d’actualités).",
  //     "Élaboration et mise en œuvre de stratégies de promotion pour les ateliers (affiches, vidéos courtes, publications sur les réseaux sociaux, diffusion sur WhatsApp, gestion des formulaires d’inscription).",
  //   ],
  // },
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
    name: "Portfolio 3D",
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
  {
    name: "JobPilot",
    description:
      "Ce projet est un prototype d'une application web FullStack permettant aux étudiants et chercheurs d’emploi de gérer leurs candidatures (CRUD, recherche, filtres). Intégration d'un chatbot IA avec n8n.",
    tags: [
      {
        id: 1,
        name: 'react',
        path: reactjs,
      },
      {
        id: 2,
        name: 'typescript',
        path: typescript,
      },
      {
        id: 3,
        name: 'spring boot',
        path: springboot,
      },
      {
        id: 4,
        name: 'n8n',
        path: n8n,
      },
    ],
    image: jobpilot,
    source_code_link: "https://github.com/Math-Baba/Front-end_JobPilot_App.git",
  },
  {
    name: "Garage automatique",
    description:
      "Ce projet, développé en groupe d'étudiants et en C++ avec l'Arduino IDE, permet de contrôler automatiquement une porte de garage à l’aide d’un capteur d’empreinte digitale et de capteur infrarouge pour plus de sécurité.",
    tags: [
      {
        id: 1,
        name: 'Arduino',
        path: arduino,
      },
      {
        id: 2,
        name: 'C++',
        path: Cplus,
      },
    ],
    image: garage,
    source_code_link: "https://github.com/Math-Baba/Projet-garage-automatique.git",
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

const images = [
  {
    src: prix_ai4good,
    description: "Concours AI4GOOD 2025",
  },
  {
    src: prix_ai4good2,
    description: "Concours AI4GOOD - 3e prix catégorie Game Master",
  },
  {
    src: prix_webcup,
    description: "Hackathon de la 24h By Webcup - 2e prix régional",
  },
  {
    src: prix_webcup2,
    description: "Hackathon de la 24h By Webcup 2025",
  },
  {
    src: atelier,
    description: "Animation d'un Atelier Créatif IA - AI4GOOD",
  },
];

export { services, technologies, experiences, testimonials, projects, links, images };