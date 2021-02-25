import Git from "../assets/icons/Git";
import LinkedIn from "../assets/icons/LinkedIn";
import Mail from "../assets/icons/Mail";
import Tel from "../assets/icons/Tel";

export default {
  contacts: [
    { icon: Tel(), link: "tel:380683151013", text: " +38 068 315 10 13" },
    {
      icon: Mail(),
      link: "mailto:serrzik13manager@gmail.com",
      text: "serrzik13manager@gmail.com",
    },
    {
      icon: Git(),
      link: "https://github.com/SergeyVishnevskiy",
      text: "github.com/SergeyVishnevskiy",
    },
    {
      icon: LinkedIn(),
      link: "https://www.linkedin.com/in/sergiy-vishnevskiy",
      text: "linkedin.com/in/sergiy-vishnevskiy",
    },
  ],
  techSkills: [
    "HTML5",
    "CSS3",
    "GIT",
    "WebPack",
    "JavaScript",
    "React.js",
    "Redux",
    "Scrum",
    "Agile",
  ],
  // 'Node.js',
  softSkills: ["Responsibility", "Stress-resistant", "Teamwork"],
  languageSkills: ["English", "Ukrainian", "Russian"],
  projects: [
    {
      link: "https://ka2nq1.github.io/parcel-project-template/",
      techStack: "HTML, CSS",
      description:
        "The idea of this project is an adaptive web page for selling products and expanding the retail network, made using knowledge of HTML and CSS (SASS).",
    },
    {
      link: "https://mikelp13.github.io/js-project-v2/",
      techStack: "Javascript",
      description:
        "The idea of this project is an adaptive functioning callboard web-app made using knowledge of Javascript.",
    },
    {
      link: "https://team3-slimmom.netlify.app",
      techStack: "React.js",
      description:
        "The idea of this project is an adaptive functioning web-app for diet-planning and calories calculation made using knowledge of React and Redux.",
    },
  ],
  work: [
    {
      title: "Front-End Developer",
      company: "Student at GoIT",
      period: "September 2020 - up to now",
      country: "Ukraine",
      duties: ["Scrum Master on the project JS"],
    },
    {
      title: "Customer service manager",
      company: " “SVP-PLUS”/“Kyivstar”",
      period: "August 2016 – October 2020",
      country: "Ukraine",
      duties: [
        "Perfect knowledge of goods and services",
        "Solving customer problems with communication",
      ],
    },
    {
      title: "Barman",
      company: "“Manhattan”",
      period: "June 2014 – August 2016",
      country: "Ukraine",
      duties: [
        "Planning supply for the shops",
        "Keeping records of goods",
        "Cash discipline",
      ],
    },
  ],
  education: [
    {
      establishment: "GoIT",
      speciality: "Fullstack JS Developer",
      period: "September 2020 - April 2021",
      country: "Ukraine",
    },
    {
      establishment:
        "National University of Water Management and Environmental Sciences",
      speciality: "Manager-Economist",
      period: "September 2008 – January 2013",
      country: "Ukraine",
    },
  ],
};
