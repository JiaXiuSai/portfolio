import { FaExternalLinkAlt } from 'react-icons/fa'

import { experiences } from '../data'

const Experience = () => {
  return (
    <section id="experience" className="w-full bg-gray-800 px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-3xl font-bold">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="rounded-lg bg-gray-700 p-6">
              <div className="mb-4 flex flex-col sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  {exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-400 transition-colors hover:text-blue-300"
                    >
                      {exp.company}
                      <FaExternalLinkAlt className="h-4 w-4" />
                    </a>
                  ) : (
                    <p className="text-blue-400">{exp.company}</p>
                  )}
                  <div className="mt-1 sm:hidden">
                    <p className="text-gray-300">{exp.period}</p>
                    <p className="text-gray-400">{exp.location}</p>
                  </div>
                </div>
                <div className="hidden text-right sm:block">
                  <p className="text-gray-300">{exp.period}</p>
                  <p className="text-gray-400">{exp.location}</p>
                </div>
              </div>
              {exp.description && <p className="text-gray-300">{exp.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
