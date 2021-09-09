import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Tingting | Python Developer', // e.g: 'Tingting | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Tingting',
  subtitle: 'I am a data scientist and a python full-stack web developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I enjoy having a cup of good coffee and coding all day.',
  paragraphTwo: 'I am most passionate about data analytics and building helpful websites.',
  paragraphThree:
    "I do web scraping sometimes to help acquire additional insights (ethically and honoring target websites' robot.txt).",
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
    img: 'object_s.png',
    title: 'Image Recognition and Object Detection',
    info: 'The goal of this project is to train the computer to recognize objects on an image.',
    info2: '[Python, YOLO]',
    url: '',
    repo: 'https://github.com/Tingting0618/Object_Detection_Image_Recognition', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'earningscall.png',
    title: 'Earnings Call Database and Text Analysis',
    info: 'Earnings call transcripts provide invaluable insights. However, it is quite challenging to extract valuable information from these transcripts, conduct analysis, compare transcripts from multiple companies and multiple years, and observe future trends. The goal of this project is to make earnings call analysis easy and save time for our users.',
    info2: '[Python, Natural Language Toolkit]',
    url: '',
    repo: 'https://github.com/Tingting0618/Earnings_Call_Transcript_Database_Analysis_NLTK', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'demand.png',
    title: 'Demand Forecast - Machine Learning',
    info: "In the project, we are going to forecast hotel occupancy 4 days out (e.g., Today is Monday, and we will be forecasting this Friday's occupancy.) On average, the model is off by 4.9% (MAE) in hotel occupancy. For example: Forecasted Occupancy: 90%; Actual Occupancy: 85.1%",
    info2: '[Python, SQL, scikit-learn]',
    url: '',
    repo: 'https://github.com/Tingting0618/Demand_Forecast_Machine_Learning', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: ' ',
  btn: 'GitHub Page',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/tingting-duan/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Tingting0618',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
