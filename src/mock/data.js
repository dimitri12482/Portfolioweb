import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Dimitri Dwyer',
  subtitle: 'Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: '',
  paragraphOne: 'and I’m passionate about all things  JavaScript. I work  hard , I care about writing clean  code and  I genuinely love  to learn. I’m currently looking for the right opportunity to work in an environment that  will help me progress into  a fullstack role.',
  resume: 'https://bit.ly/37WL3sB', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Food Menu Website',
    info: 'I build a responsive website from start to finish. I also learn how to use keyframes and hover effect animations',
    info2: 'Technologies Use: HTML5, CSS3, JavaScript',
    url: 'https://cranky-borg-92fcc0.netlify.app/',
    repo: 'https://github.com/dimitri12482/Responsive-Website', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Expense Tracking App',
    info: 'I build a complex expense budget tracker. I even added voice capablities to command applications using Speechly.',
    info2: 'Technologies Use: React, Context API, Material UI',
    url: 'https://ecstatic-beaver-49c4a1.netlify.app/',
    repo: 'https://github.com/dimitri12482/Expense-Tracking-App', // if no repo, the button will not show up
  },
    {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Ecommerce Store',
    info: 'I build a fully functional eCommerce application using React and Node.js for backend API',
    info2: 'Technologies Use: React, Node, Context API',
    url: 'https://ecstatic-beaver-49c4a1.netlify.app/',
    repo: 'https://github.com/dimitri12482/Expense-Tracking-App', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Tesla Clone',
    info: 'This is user login and registeration app using Backend languages.',
    info2: 'Technologies Use: Node.js, Express, MongoDB',
    url: 'https://tesla-clone12.netlify.app',
    repo: 'https://github.com/dimitri12482/tesla-clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.jpg',
    title: 'Netflix Clone',
    info: 'I build a netflix clone using HTML, CSS and JavaScript to build navbar and animations on the websites',
    info2: 'Technologies Use: HTML, CSS, JavaScript',
    url: 'netflix-clone26.netlify.app',
    repo: 'https://github.com/dimitri12482/Netflix-clone', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'dimitridwyer@hotmail.co.uk',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/dimitri-dwyer-720ab914b',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/dimitri12482/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
