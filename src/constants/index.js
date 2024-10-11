import {
  mobile,
  backend,
  frontend,
  typescript,
  reactjs,
  nodejs,
  next,
  postgre,
  python,
  cinema,
  tracker,
  twitter,
  angular,
  greendoors,
  portoaris
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Angular",
    icon: angular,
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
    title: "Full-stack Developer",
    company_name: "Greendoors",
    icon: greendoors,
    iconBg: "#fff",
    date: "May 2023 - Present",
    points: [
      "Designed and implemented two web applications, utilizing TypeScript and Angular for the frontend, and Node.js with Express for the backend. Focused on creating modular and maintainable code structures, while integrating strong authentication and authorization mechanisms;",
      "Integrated cloud-based services like Google Cloud Functions to automate workflows, manage notifications, and streamline business operations, significantly reducing manual tasks and improving overall efficiency;",
      "Developed and launched a mobile application for both the App Store and Google Play, using Dart and FlutterFlow, with integration to Google Cloud Platform and Firestore for managing data in real time;",
      "Involved in every stage of the development lifecycle, from gathering initial requirements and designing solutions to deployment, monitoring, and ongoing maintenance.",
    ],
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "gcp",
        color: "violet-text-gradient",
      },
    ],
  },
  {
    title: "Mobile Developer",
    company_name: "Portoaris",
    icon: portoaris,
    iconBg: "#fff",
    date: "April 2024 - Present",
    points: [
      "Led projects independently, managing everything from initial requirements gathering to design, development, testing, deployment, and maintenance;",
      "Built and deployed mobile applications using FlutterFlow with API integrations, focusing on financial services and leveraging the APIs of Banco Inter to enable functionalities such as payment processing, account management, and secure data transactions;",
      "Architected and developed back-end logic for API integrations, utilizing custom endpoints, webhooks and automating workflows to enhance application efficiency and reduce manual processes;",
      "Designed and implemented robust database architectures, handling both relational and NoSQL databases to accommodate diverse application requirements, ensuring data consistency, security, and performance."
    ],
    tags: [
      {
        name: "dart",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
      {
        name: "flutterflow",
        color: "violet-text-gradient",
      },
    ],
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
  },
];

export { services, technologies, experiences, projects };
