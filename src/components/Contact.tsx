import { contacts } from '../data'

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-gray-800 px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-8 text-3xl font-bold">Contact Me</h2>
        <p className="mb-8 text-gray-300">
          If you'd like to work together or have any questions, feel free to reach out!
        </p>
        <ul className="flex justify-center space-x-6" aria-label="Social media">
          {contacts.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                aria-label={link.ariaLabel}
                className="block text-3xl text-gray-300 transition-colors hover:text-blue-400"
                {...(!link.isEmail && {
                  target: '_blank',
                  rel: 'noreferrer noopener',
                })}
              >
                <link.icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Contact
