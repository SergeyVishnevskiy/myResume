import Git from '../assets/icons/Git'
import LinkedIn from '../assets/icons/LinkedIn'
import Mail from '../assets/icons/Mail'
import Tel from '../assets/icons/Tel'
import Telegram from '../assets/icons/Telegram'

export default {
  contacts: [
    { icon: Tel(), link: 'tel:19072506026', text: ' +1 907 250 6026' },
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
    'Angular',
  ],
  softSkills: [
    'Responsible',
    'Self Study',
    'Focus on results',
    'The ability to listen',
    'Teamwork',
    'Attention to Detail',
    'Fast Learner',
    'Problem Solving',
  ],
  languageSkills: [
  ],
  projects: [
    {
      link: 'https://ka2nq1.github.io/parcel-project-template/',
      techStack: 'HTML, CSS',
      description:
        'The idea of this project is an adaptive web page for selling products and expanding the retail network, made using knowledge of HTML and CSS (SASS).',
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
      title: 'HTML - coder',
      company: 'Lizard Soft',
      period: 'March 2022 – October 2022',
      country: 'Ukraine',
      duties: ['development of new sites, stylization of components', 'Multi-tasked across multiple functions and roles to generate project results and meet deadlines and organizational expectations'],
    },
    {
      title: 'Front-end web development',
      company: 'Graphic Design Studio "Tribe"',
      period: 'June 2021 – February 2022',
      country: 'Ukraine',
      duties: ['layout of pages of varying complexity', 'Reviewed and tested customer-facing prototypes before deployment, applying best practice diagnostic techniques to verify usability'],
    },
    {
      title: 'Full Stack Developer',
      company: 'Student at GoIT',
      period: 'September 2020 - May 2021',
      country: 'Ukraine',
      duties: ['Scrum Master on Project JS', 'Developed, coded, modified and debugged application programs of varying degree of complexity with full independence'],
    },
    {
      title: 'Customer service manager',
      company: ' “SVP-PLUS”/“Kyivstar”',
      period: 'August 2016 – October 2020',
      country: 'Ukraine',
      duties: [
        'Perfect knowledge of goods and services',
        'Answered customer questions regarding sizing, accessories and proper care for merchandise, engaged customers to promote specific merchandise',
      ],
    },
  ],
  education: [
    {
      establishment: 'GoIT',
      speciality: 'Associate of Science Full Stack JS Developer',
      period: 'September 2020 - May 2021',
      country: 'Ukraine',
    },
    {
      establishment:
        'National University of Water Management and Environmental Sciences',
      speciality: 'Bachelor of Science Managerial Economics',
      period: 'September 2008 – January 2013',
      country: 'Ukraine',
    },
  ],
}
