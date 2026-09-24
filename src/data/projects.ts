import { theatreCapture, thgCom, thgIngenuity, verlataThimble } from '../assets'

interface Project {
  title: string
  description: string
  tech: string[]
  image: string
  link: string
}

const projects: Project[] = [
  {
    title: 'Thimble by Verlata',
    description:
      'Built security and governance tools for NetDocuments, helping firms monitor access, automate controls, and reduce manual compliance work.',
    tech: ['React', 'Node.js', 'NetDocuments', 'Security', 'Reporting', 'Azure'],
    image: verlataThimble,
    link: 'https://www.verlata.com/thimble',
  },
  {
    title: 'The Hut Group Corporate Websites',
    description:
      'Contributed to the development and ongoing maintenance of corporate websites for THG, including THG.com and thgingenuity.com, improving performance and shipping integrations for key business tools.',
    tech: ['Astro', 'Strapi', 'Tailwind CSS', 'Zoho', 'Greenhouse', 'AWS', 'TypeScript'],
    image: thgCom,
    link: 'https://www.thg.com',
  },
  {
    title: 'THG Ingenuity Ecommerce Platform',
    description:
      'Improved the React frontend and Node.js backend of an ecommerce platform, shipping fixes and features for a smoother customer experience.',
    tech: ['React', 'Node.js', 'TypeScript', 'AWS', 'MySQL', 'REST API'],
    image: thgIngenuity,
    link: 'https://www.thgingenuity.com',
  },
  {
    title: 'TheatreCapture',
    description:
      'Built a React Native app for NHS theatre data capture, helping teams improve efficiency and manage key operational metrics.',
    tech: ['React Native', 'TypeScript', 'Node.js', 'Expo', 'AWS', 'GraphQL'],
    image: theatreCapture,
    link: 'https://healthdatainsight.org.uk/project/theatrecapture',
  },
  /* {
    title: 'Password Manager Security Analysis',
    description:
      'Reviewed seven password managers and identified weaknesses in encryption, storage, and authentication practices.',
    tech: ['Security Analysis', 'Cryptography', 'Python', 'OWASP'],
    image: passwordManagers,
    link: 'https://github.com/JiaXiuSai/password-manager-analysis',
  }, */
]

export default projects
