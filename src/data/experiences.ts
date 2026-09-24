interface Experience {
  title: string
  company: string
  companyUrl?: string
  period: string
  location: string
  description: string
}

const experiences: Experience[] = [
  {
    title: 'Software Engineer',
    company: 'Verlata Consulting',
    companyUrl: 'https://www.verlata.com/',
    period: 'September 2025 - Current',
    location: 'Malaysia',
    description:
      'Worked across product and engineering on legal technology solutions, building tools for security, governance, reporting, and workflow automation.',
  },
  {
    title: 'Software Engineer',
    company: 'MoneyMax',
    companyUrl: 'https://moneymax.com.sg/',
    period: 'October 2024 - September 2025',
    location: 'Malaysia',
    description:
      'Worked across product and engineering on a mission-critical system serving 200+ stores, delivering features and improving both frontend and backend performance.',
  },
  {
    title: 'Software Engineer',
    company: 'THG (The Hut Group)',
    companyUrl: 'https://www.thg.com/',
    period: 'July 2022 - July 2024',
    location: 'Manchester, United Kingdom',
    description:
      'Developed and maintained ecommerce and corporate websites, focusing on performance, scalability, and feature delivery across multiple platforms.',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Health Data Insight',
    companyUrl: 'https://healthdatainsight.org.uk/',
    period: 'July 2021 - September 2021',
    location: 'Cambridge, United Kingdom',
    description:
      'Built a React Native app for theatre data capture, improving operational efficiency and supporting healthcare resource management.',
  },
]

export default experiences
