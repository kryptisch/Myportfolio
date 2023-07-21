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
  tailwind,
  nodejs,
  angular,
  gcp,
  terraform,
  java,
  python,
  git,
  docker,
  springml,
  cognizant,
  agri,
  alumini,
  payroll,
  threejs,

  gitIcon,
  hackerIcon,
  linkedinIcon
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "DevOps Engineer",
    icon: creator,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name:"Angular",
    icon:angular
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name:"Java",
    icon:java
  },
  {
    name:"Python",
    icon:python
  },
  {
    name: "git",
    icon: git,
  },
  {
    name:"Google Cloud",
    icon:gcp
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name:"Terraform",
    icon:terraform
  }
];

const experiences = [
  {
    title: "Associate Application Developer",
    company_name: "SpringML",
    icon: springml,
    iconBg: "#E6DEDD",
    date: "Jul 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Angular and other related technologies.",
      "Harnessing Google Cloud Platform's full potential to build secure, scalable, and efficient web applications, catering to diverse user demands in a dynamic cloud environment",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Programmer Analyst Trainee",
    company_name: "Cognizant",
    icon: cognizant,
    iconBg: "#383E56",
    date: "Feb 2022 - Jun 2022",
    points: [
      " Worked on both front-end and back-end.",
      "Worked on Spring concepts.",
      "Used Frameworks like Angular, React.",
    ],
  },
  {
    title: "Full-Stack Web Developer Intern",
    company_name: "Agrietern Technologies Private Limited",
    icon: agri,
    iconBg: "#E6DEDD",
    date: "May 2021 - Aug 2021",
    points: [
      "Worked on front-end widgets.",
      "Shadowed Senior Developers on large projects.",
      "Used tool SASS for CSS development.",
      "Build Some Responsive websites using Advanced CSS.",
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
    name: "Alumni Tracking System",
    description:
      "The website serves as a comprehensive platform that presents alumni data, including salary and workplace details, through graphical representations. This project promotes networking, mentorship, and knowledge sharing and connections between alumni and institutes.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: alumini,
    source_code_link: "https://github.com/kryptisch/AlumniTracingSystem",
  },
  {
    name: "Payroll",
    description:
      "This JavaScript-based expense tracking app efficiently stores and displays expense data. With its advanced features, it simplifies expense management and empowers users to make informed financial decisions.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: payroll,
    source_code_link: "https://github.com/",
  },
  
];

const social=[
  {
    name:"Github",
    Icon:gitIcon,
    url:"https://github.com/kryptisch/"
  },
  {
    name:"Hackerrank",
    Icon:hackerIcon,
    url:"https://www.hackerrank.com/kryptischfunk?hr_r=1"

  },
  {
    name:"Linkedin",
    Icon:linkedinIcon,
    url:"https://www.linkedin.com/in/rohith-digajerla-6aa9411a0/"

  }
]

export { services, technologies, experiences, testimonials, projects,social };
