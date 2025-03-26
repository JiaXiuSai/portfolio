import { FaExternalLinkAlt } from 'react-icons/fa'

import { projects } from '../data'

const Projects = () => {
  return (
    <section id="projects" className="w-full px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-3xl font-bold">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg bg-gray-700 transition-transform hover:scale-[1.02] hover:shadow-xl"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="bg-opacity-40 absolute inset-0 flex items-center justify-center bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="flex items-center gap-2 text-lg font-semibold text-white">
                      View Project
                      <FaExternalLinkAlt className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </a>
              <div className="flex flex-col p-6">
                <div className="flex items-center justify-between">
                  <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt className="h-4 w-4" />
                  </a>
                </div>
                <p className="mb-4 flex-grow text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="rounded bg-[#646cff] px-2 py-1 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
