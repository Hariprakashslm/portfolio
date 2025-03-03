import { describe } from "node:test";
import { IUserProfile } from "../interface/index";
const headerData: IUserProfile = {
  title: "Hari Prakash",
  menu: [
    {
      name: "Home",
      linkTo: "home",
    },
    {
      name: "About",
      linkTo: "about",
    },
    {
      name: "Skills",
      linkTo: "skills",
    },
    {
      name: "Education",
      linkTo: "education",
    },
    {
      name: "Experience",
      linkTo: "experiance",
    },
    {
      name: "Projects",
      linkTo: "projects",
    },

    {
      name: "Contact",
      linkTo: "contact",
    },
  ],
};

const about = [
  {
    title: "",
    content:
      "Currently working as a Software Engineer at Advanced Millennium Technologies Pvt Ltd, I bring over 5 years of professional experience in full stack development, focusing on creating dynamic and scalable web applications. My expertise lies in both frontend and backend technologies, making me a versatile developer capable of handling complex projects across multiple domains.",
  },
  {
    content:
      "I have good work experience with various startups where I was core part of developer team and work on major features.",
  },
  {
    content:
      "I love working on new and exciting technologies. I have a keen interest in Web Development and I am always looking for new opportunities to learn and grow.",
  },
];

const skills = [
  {
    title: "Frontend: ",
    content:
      " Proficient in JavaScript, TypeScript, React.js, Angular, and building reusable components using tools like Storybook. Strong design knowledge in CSS and Tailwind CSS, ensuring that UI/UX designs are brought to life with a focus on responsiveness and maintainability.",
  },
  {
    title: "Backend & Frameworks:",
    content:
      " Extensive experience with Node.js, NestJS, and building RESTful APIs and microservices architectures. Knowledge of Next.js for server-side rendering and building highly performant web applications.",
  },
  {
    title: "Authentication & Authorization:",
    content:
      " Expertise in implementing secure authentication and authorization mechanisms, including integrating Sign-in with Google and Facebook to provide seamless user authentication experiences.",
  },
  {
    title: "Serverless Deployment:",
    content:
      " Experienced with serverless deployment using Getsbee on platforms such as Netlify and Vercel, ensuring efficient and seamless deployment of applications.",
  },
  {
    title: "Databases & Queues:",
    content:
      " I integrate MongoDB and SQL databases for efficient data management, along with Redis Queues for high-performance applications.",
  },
  {
    title: "DevOps & Tooling:",
    content:
      " Skilled in using Docker for containerization. I manage codebases using Git and optimize the development workflow with tools like NX Generator for monorepos and micro-frontend structures.",
  },
  {
    title: "APIs & Integrations: ",
    content:
      "Expertise in integrating and developing services using Google APIs (e.g., Maps and Location Search), as well as publishing NPM packages for reusable modules.",
  },
  {
    title: "Microservices & Distributed Systems:",
    content:
      " My background in microservices architecture allows me to design and implement modular, maintainable systems that scale efficiently.",
  },
];

const techSkils = [
  {
    title: "HTML5",
    describe: "",
  },
  {
    title: "CSS3",
    describe: "",
  },
  {
    title: "JavaScript",
    describe: "",
  },
  {
    title: "TypeScript",
    describe: "",
  },
  ,
  {
    title: "ReactJS",
    describe: "",
  },
  {
    title: "Redux",
    describe: "",
  },
  {
    title: "Angular",
    describe: "",
  },
  {
    title: "Jest",
    describe: "",
  },
  {
    title: "jQuery",
    describe: "",
  },
  {
    title: "NodeJS",
    describe: "",
  },
  {
    title: "Express.js",
    describe: "",
  },
  {
    title: "NestJS",
    describe: "",
  },
  {
    title: "MongoDB",
    describe: "",
  },
  {
    title: "MySql",
    describe: "",
  },
  {
    title: "GIT",
    describe: "",
  },
  {
    title: "TailwindCSS",
    describe: "",
  },
  {
    title: "Redis",
    describe: "",
  },
  {
    title: "Storybook (With ReactJS)",
    describe: "",
  },
  {
    title: "Docker",
    describe: "",
  },
  {
    title: "MicroService",
    describe: "",
  },
  {
    title: "NX Generator",
    describe: "",
  },
];

techSkils.forEach((data) => {
  if (data?.describe !== undefined) data.describe = "demo";
});
export default { headerData, about, skills, techSkils };
