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
  subtitle: 'Software Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'A highly motivated and proactive individual who gain a strong knowledge of different programming languages, from both frontend and backend.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Food Menu Website',
    info: 'I build a responsive website from start to finish. I also learn how to use keyframes and hover effect animations',
    info2: 'Technologies Use: HTML5, CSS3, JavaScript',
    url: '',
    repo: 'https://github.com/dimitri12482/Responsive-Website', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Expense Tracking App',
    info: 'I build a complex expense budget tracker. I even added voice capablities to command applications using Speechly.',
    info2: 'Technologies Use: React, Context API, Material UI',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Passport Authentication',
    info: 'This is user login and registeration app using Backend languages.',
    info2: 'Technologies Use: Node.js, Express, MongoDB',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.jpg',
    title: 'Netflix Clone',
    info: 'I build a netflix clone using TMDB API Key to get all movies & build the Netflix movie rows. I also build navbar and password login on the website.',
    info2: 'Technologies Use: React, Firebase',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
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
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};