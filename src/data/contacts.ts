import { IconType } from 'react-icons'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

interface Contact {
  href: string
  ariaLabel: string
  icon: IconType
  isEmail?: boolean
}

const contacts: Contact[] = [
  {
    href: 'mailto:jacobswebdevs@gmail.com',
    ariaLabel: 'Email',
    icon: MdEmail,
    isEmail: true,
  },
  {
    href: 'https://github.com/JiaXiuSai',
    ariaLabel: 'GitHub',
    icon: FaGithub,
  },
  {
    href: 'https://www.linkedin.com/in/jacob-sai',
    ariaLabel: 'LinkedIn',
    icon: FaLinkedin,
  },
]

export default contacts
