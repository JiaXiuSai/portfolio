const Hero = () => {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden bg-slate-950 px-4 pt-28 pb-16 sm:pt-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.22),_rgba(59,130,246,0.09)_35%,_transparent_75%)]" />

      <div className="relative mx-auto max-w-7xl text-center">
        <h1 className="mx-auto max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
          I design and build digital products
        </h1>

        <p className="mx-auto mt-10 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
          Hi, I’m Jacob, a software engineer helping teams turn complex ideas into simple, scalable
          experiences across web and product platforms.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-blue-400 hover:text-blue-300"
          >
            Let’s Talk
          </a>
        </div>

        <div className="mt-12 grid gap-4 text-left sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg shadow-slate-950/30">
            <p className="text-3xl font-bold text-white">5+ years</p>
            <p className="mt-2 text-sm text-slate-400">Experience building digital products</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg shadow-slate-950/30">
            <p className="text-3xl font-bold text-white">10+</p>
            <p className="mt-2 text-sm text-slate-400">
              Projects spanning web, commerce, and mobile
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg shadow-slate-950/30">
            <p className="text-3xl font-bold text-white">Product</p>
            <p className="mt-2 text-sm text-slate-400">
              Engineering mindset from idea to deployment
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
