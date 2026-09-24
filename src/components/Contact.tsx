import { contacts } from '../data'

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-slate-950 px-4 py-20">
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-800 bg-slate-900/80 p-8 text-center shadow-2xl shadow-slate-950/20 sm:p-10">
        <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-blue-300 uppercase">
          Let’s connect
        </p>
        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
          Open to product and engineering work
        </h2>
        <p className="mx-auto max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
          Whether you’re building a new product, improving an existing experience, or need support
          on a technical challenge, I’d be happy to hear about it.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {contacts.map((link, index) => (
            <a
              key={index}
              href={link.href}
              aria-label={link.ariaLabel}
              className="inline-flex items-center gap-3 rounded-full border border-slate-700 bg-slate-950 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-blue-400 hover:text-blue-300"
              {...(!link.isEmail && {
                target: '_blank',
                rel: 'noreferrer noopener',
              })}
            >
              <link.icon className="text-lg" />
              {link.isEmail ? 'Email me' : link.ariaLabel}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
