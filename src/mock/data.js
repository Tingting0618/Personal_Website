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
  name: 'Tingting',
  subtitle: 'I am a data scientist and a full-stack web developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I enjoy having a cup of good coffee and coding all day.',
  paragraphTwo: 'I am most passionate about data analytics and building helpful websites.',
  paragraphThree:
    "I do web scraping sometimes to help acquire additional insights (ethically and honoring target website's robot.txt).",
  paragraphFour:
    'When I am not working or coding, I like to travel to new places and try local foods. And then post a lot of reviews on TripAdvisor.',
  resume: 'https://github.com/Tingting0618', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'A Hotel Search and Recommendation Engine Using R and Web Scraping',
    info: 'In the project, we are going to find an ideal hotel for our next trip using web scraping and present recommendations via R Shiny Web App.',
    info2: '[R Shiny, Python, R]',
    url: 'https://hotelsearchnow-tingting.shinyapps.io/Hotel_Search_Now/',
    repo: 'https://github.com/Tingting0618/Recommendation_Engine_R_Web_Scraping', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
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
      name: 'codepen',
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
