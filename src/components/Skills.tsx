import { skills } from '../data'

const Skills = () => {
  return (
    <section id="skills" className="w-full px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-3xl font-bold">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <div
                key={index}
                className="flex items-center gap-2 rounded-full bg-gray-700 px-4 py-2 transition-colors hover:bg-gray-600"
              >
                <Icon className="text-xl" />
                <span>{skill.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
