import { FaDatabase, FaGithub, FaJs, FaNode, FaPython, FaReact } from 'react-icons/fa'
import {
  SiAstro,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiStrapi,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

interface Skill {
  name: string
  icon: React.ElementType
}

const skills: Skill[] = [
  { name: 'JavaScript', icon: FaJs },
  { name: 'React', icon: FaReact },
  { name: 'Node.js', icon: FaNode },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Python', icon: FaPython },
  { name: 'GitHub', icon: FaGithub },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'SQL', icon: FaDatabase },
  { name: 'Nest.js', icon: SiNestjs },
  { name: 'Astro', icon: SiAstro },
  { name: 'Strapi CMS', icon: SiStrapi },
]

export default skills
