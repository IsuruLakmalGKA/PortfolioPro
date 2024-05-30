import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  springboot,
  mysql,
  graphql,
  CarRentalApp,
  MLModelSearch,
  GameJavaScript,
  ProPort,
  MApp,
  RansomeWare,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Mysql',
    icon: mysql,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'springboot',
    icon: springboot,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Cover Hunt',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2021 - Feb 2022',
  },
  {
    title: 'Mentor (Volunteer)',
    company_name: 'Microverse',
    icon: microverse,
    iconBg: '#333333',
    date: 'Mar 2022 - May 2022',
  },
  {
    title: 'Junior Software Engineer',
    company_name: 'Kelhel',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2022 - Oct 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Diversity Cyber Council',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2022 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Car Rental App',
    description: 'A web app to rent cars.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'springmvc',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: CarRentalApp,
    repo: 'https://github.com/IsuruLakmalGKA/ITS_1114-Car-Rental-System-',
    demo: 'https://github.com/IsuruLakmalGKA/ITS_1114-Car-Rental-System-',
  },
  {
    id: 'project-2',
    name: 'Phamarcy Web App',
    description:
      'A ML model for pharmacy search option.',
    tags: [
      {
        name: 'JavaScript',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: MLModelSearch,
    repo: 'https://github.com/IsuruLakmalGKA/Hackthon_project',
    demo: 'https://github.com/IsuruLakmalGKA/Hackthon_project',
  },
  {
    id: 'project-3',
    name: 'Samurai Game',
    description: 'Intense samurai fighting game featuring epic duels, skillful swordplay, and stunning Japanese landscapes',
    tags: [
      {
        name: 'JavaScript',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: GameJavaScript,
    repo: 'https://github.com/IsuruLakmalGKA/Game_Assignment',
    demo: 'https://isurulakmalgka.github.io/Game_Assignment/',
  },
  {
    id: 'project-4',
    name: 'My PortFolio',
    description: `Professional portfolio showcasing my skills, projects, and experiences in web development, design, and digital innovation. Let's create together!`,
    tags: [
      {
        name: 'ReactJs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwind css',
        color: 'pink-text-gradient',
      },
    ],
    image: ProPort,
    repo: 'https://github.com/IsuruLakmalGKA/portfoliopro',
    demo: 'https://isurulakmalgka.github.io/portfoliopro/',
  },
  // {
  //   id: 'project-5',
  //   name: 'Mobile Music App Android',
  //   description:'Discover new music, create custom playlists, and stream your favorite songs with our intuitive mobile app. Enjoy high-quality audio and personalized recommendations anytime, anywhere. Your soundtrack to life.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: MApp,
  //   repo: 'https://github.com/IsuruLakmalGKA/Android_MusicPlayer-v1.0',
  //   demo: 'https://github.com/IsuruLakmalGKA/Android_MusicPlayer-v1.0',
  // },
  {
    id: 'project-5',
    name: 'Ransomeware',
    description:'Ransomware encrypts and can delete all files on a computer, demanding payment for decryption. It poses a severe threat to data security and requires urgent protective measures.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image:RansomeWare,
    repo: 'https://github.com/IsuruLakmalGKA/Android_MusicPlayer-v1.0',
    demo: 'https://github.com/IsuruLakmalGKA/Android_MusicPlayer-v1.0',
  },
];

export { services, technologies, experiences, projects };
