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
    title: 'Full Stack Developer',
    company: 'MoneyMax',
    companyUrl: 'https://moneymax.com.sg/',
    period: 'October 2024 - Present',
    location: 'Singapore',
    description:
      'As a Full Stack Developer at MoneyMax, I work on the PMSE system, a mission-critical platform servicing 200 stores across Malaysia and Singapore. My role involves both product and development responsibilities, collaborating with stakeholders to gather requirements, propose solutions, and deliver features that improve operational efficiency. On the frontend, I develop and maintain a scalable and user-friendly interface using React and Next.js, ensuring a smooth experience for end users. On the backend, I work with NestJS, PostgreSQL, and MikroORM, optimizing database performance, implementing business logic, and integrating third-party services.',
  },
  {
    title: 'Software Engineer',
    company: 'The Hut Group',
    companyUrl: 'https://www.thg.com/',
    period: 'July 2022 - July 2024',
    location: 'Manchester, United Kingdom',
    description:
      'As a Software Engineer at THG, I developed and maintained corporate and ecommerce websites, including THG.com, Ingenuity, and others. I focused on building features, optimizing performance, and ensuring scalability using technologies like Astro, Strapi, React, Tailwind CSS, and Node.js. I integrated custom plugins like Zoho and Greenhouse and collaborated on new feature implementations to support business growth.',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Health Data Insight CIC',
    companyUrl: 'https://healthdatainsight.org.uk/',
    period: 'July 2021 - September 2021',
    location: 'Cambridge, United Kingdom',
    description:
      "At Health Data Insight CIC, I developed a cross-platform React Native app for the National Theatre Dataset project, improving data capture and operational efficiency in NHS theatres. I designed the app's user interface and data capture features, ensuring smooth performance across devices. Additionally, I contributed to the TheatreCapture project, working on data analytics and enhancing healthcare resource management.",
  },
]

export default experiences
