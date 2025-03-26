import { passwordManagers, theatreCapture, thgCom, thgIngenuity } from '../assets'

interface Project {
  title: string
  description: string
  tech: string[]
  image: string
  link: string
}

const projects: Project[] = [
  {
    title: 'The Hut Group Corporate Websites',
    description:
      'Contributed to the development and ongoing maintenance of corporate websites for THG, including THG.com, thgingenuity.com, etc. Leveraging Astro, Strapi, and Tailwind CSS, I focused on optimizing performance, implementing custom plugins, and ensuring seamless integrations.',
    tech: ['Astro', 'Strapi', 'Tailwind CSS', 'Zoho', 'Greenhouse', 'AWS', 'JavaScript', 'Node.js'],
    image: thgCom,
    link: 'https://www.thg.com',
  },
  {
    title: 'THG Ingenuity Eccommerce Platform',
    description:
      'As part of the THG Ingenuity team, I maintained and enhanced the React frontend and Node.js backend of the Imagination e-commerce platform. I contributed to improving the user experience, resolving critical bugs, and adding new features.',
    tech: ['React', 'Node.js', 'JavaScript', 'AWS', 'MySQL', 'REST API'],
    image: thgIngenuity,
    link: 'https://www.thgingenuity.com',
  },
  {
    title: 'TheatreCapture',
    description:
      'Developed the TheatreCapture app from scratch at Health Data Insight CIC using React Native. This app, built for the National Theatre Dataset project, helps improve NHS theatre efficiency by collecting and managing key data.',
    tech: ['React Native', 'JavaScript', 'Node.js', 'Expo', 'AWS', 'GraphQL'],
    image: theatreCapture,
    link: 'https://healthdatainsight.org.uk/project/theatrecapture',
  },
  {
    title: 'Password Manager Security Analysis',
    description:
      'Conducted an in-depth security analysis of seven popular password managers under the supervision of Dr. Ehsan Toreini. Identified vulnerabilities related to encryption, data storage, and user authentication.',
    tech: ['Security Analysis', 'Cryptography', 'Python', 'OWASP'],
    image: passwordManagers,
    link: 'https://github.com/JiaXiuSai/password-manager-analysis',
  },
]

export default projects
