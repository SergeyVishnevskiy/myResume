import Git from '../assets/icons/Git'
import LinkedIn from '../assets/icons/LinkedIn'
import Mail from '../assets/icons/Mail'
import Tel from '../assets/icons/Tel'
import Telegram from '../assets/icons/Telegram'

export default {
  contacts: [
    { icon: Tel(), link: 'tel:380683151013', text: ' +38 068 315 10 13' },
    {
      icon: Mail(),
      link: 'mailto:serrzik13manager@gmail.com',
      text: 'serrzik13manager@gmail.com',
    },
    {
      icon: Git(),
      link: 'https://github.com/SergeyVishnevskiy',
      text: 'github.com/SergeyVishnevskiy',
    },
    {
      icon: LinkedIn(),
      link: 'https://www.linkedin.com/in/sergiy-vishnevskiy',
      text: 'linkedin.com/in/sergiy-vishnevskiy',
    },
    {
      icon: Telegram(),
      link: 'https://t.me/SerhiiVyshnevskyi',
      text: '@SerhiiVyshnevskyi',
    },
  ],
  techSkills: [
    'HTML5',
    'CSS3',
    'GIT',
    'WebPack',
    'Julp',
    'JavaScript',
    'React.js',
    'Redux',
    'Scrum',
    'Agile',
    'Node.js',
  ],
  softSkills: [
    'Responsibility',
    'Self-study',
    'Focus on results',
    'The ability to listen',
    'Teamwork',
  ],
  languageSkills: [
    'English - Intermediate',
    'Ukrainian - Native',
    'Russian - Proficiency ',
  ],
  projects: [
    {
      link: 'https://ka2nq1.github.io/parcel-project-template/',
      techStack: 'HTML, CSS',
      description:
        'The idea of this project is an adaptive web page for selling products and expanding the retail network, made using knowledge of HTML and CSS (SASS).',
    },
    {
      link: 'https://mikelp13.github.io/js-project-v2/',
      techStack: 'JavaScript',
      description:
        'The idea of this project is an adaptive functioning callboard web-app made using knowledge of Javascript.',
    },
    {
      link: 'https://team3-slimmom.netlify.app',
      techStack: 'React.js',
      description:
        'The idea of this project is an adaptive functioning web-app for diet-planning and calories calculation made using knowledge of React and Redux.',
    },
    {
      link: 'https://bookreading-team2.netlify.app',
      techStack: 'React.js, Node.js',
      description:
        'The idea of this project is an adaptive functioning web-app for planning reading books made using knowledge of React and Node.',
    },
  ],
  work: [
    {
      title: 'Front-end web development',
      company: 'Graphic Design Studio "Tribe"',
      period: 'June 2021 – present time',
      country: 'Ukraine',
      duties: ['layout of pages of varying complexity'],
    },
    {
      title: 'Full Stack Developer',
      company: 'Student at GoIT',
      period: 'September 2020 - May 2021',
      country: 'Ukraine',
      duties: ['Scrum Master on the project JS'],
    },
    {
      title: 'Customer service manager',
      company: ' “SVP-PLUS”/“Kyivstar”',
      period: 'August 2016 – October 2020',
      country: 'Ukraine',
      duties: [
        'Perfect knowledge of goods and services',
        'Solving customer problems with communication',
      ],
    },
  ],
  education: [
    {
      establishment: 'GoIT',
      speciality: 'Full Stack JS Developer',
      period: 'September 2020 - May 2021',
      country: 'Ukraine',
    },
    {
      establishment:
        'National University of Water Management and Environmental Sciences',
      speciality: 'Manager-Economist',
      period: 'September 2008 – January 2013',
      country: 'Ukraine',
    },
  ],
}
