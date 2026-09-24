import { FaDatabase, FaGithub, FaNode, FaPython, FaReact } from 'react-icons/fa'
import { SiAstro, SiFigma, SiMongodb, SiNextdotjs, SiPostgresql, SiTailwindcss, SiTypescript } from 'react-icons/si'

interface Skill {
  name: string
  icon: React.ElementType
}

const skills: Skill[] = [
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: FaReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Node.js', icon: FaNode },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Astro', icon: SiAstro },
  { name: 'Python', icon: FaPython },
  { name: 'SQL', icon: FaDatabase },
  { name: 'Figma', icon: SiFigma },
  { name: 'GitHub', icon: FaGithub },
]

export default skills
