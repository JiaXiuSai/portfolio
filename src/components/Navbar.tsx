import { useState } from 'react'

const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((current) => !current)
  }

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <a
            href="#top"
            className="flex items-center gap-3 text-lg font-semibold tracking-tight text-white"
          >
            Jacob Sai
          </a>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-200 transition hover:bg-slate-800 focus:ring-2 focus:ring-blue-400 focus:outline-none md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="space-y-2">
              <span
                className={`block h-0.5 w-7 rounded-full bg-white transition ${
                  isMenuOpen ? 'translate-y-2.5 rotate-45' : ''
                }`}
              ></span>
              <span
                className={`block h-0.5 w-7 rounded-full bg-white transition ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`block h-0.5 w-7 rounded-full bg-white transition ${
                  isMenuOpen ? '-translate-y-2.5 -rotate-45' : ''
                }`}
              ></span>
            </div>
          </button>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition hover:text-blue-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div
          className={`${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden transition-all duration-300 ease-in-out md:hidden`}
        >
          <div className="flex flex-col gap-3 border-t border-slate-800 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition hover:text-blue-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
