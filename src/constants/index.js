import {
  mobile,
  backend,
  frontend,
  web,
  flutter,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  c,
  next,
  postgre,
  python,
  vue,
  cinema,
  vitech,
  tracker,
  twitter,
  greendoors,
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
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
];

const technologies = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "PostgreSQL",
    icon: postgre,
  },
];

const experiences = [
  {
    title: "Researcher",
    company_name: "ViTech",
    icon: vitech,
    iconBg: "#383E56",
    date: "August 2021 - August 2022",
    points: [
      "Encode omnidirectional videos using state-of-the-art video encoding.",
      "Develop and update python scripts.",
      "Collaborate with researchers and doctors.",
      "Develop presentations, graphics and statistics on the information obtained.",
    ],
  },
  {
    title: "Flutter Developer",
    company_name: "Greendoors",
    icon: greendoors,
    iconBg: "#E6DEDD",
    date: "May 2023 - Present",
    points: ["...", "...", "...", "..."],
  },
];

const projects = [
  {
    name: "Twitter Clone",
    description:
      "Twitter clone that allows you to create account, post, like and reply to tweets, follow other people and access profiles.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: twitter,
    source_code_link: "https://github.com/OtavioFSantos/Twitter-Clone",
  },
  {
    name: "Task Tracker",
    description:
      "Task tracker, being able to create projects, which have sets of tasks that can be timed and assigned to projects.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: tracker,
    source_code_link: "https://github.com/OtavioFSantos/alura-tracker",
  },
  {
    name: "Cinema",
    description:
      "Cinema application that allows you to choose movies, favorite them and watch their trailers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: cinema,
    source_code_link: "https://github.com/OtavioFSantos/cinema-react",
  },
];

export { services, technologies, experiences, projects };
