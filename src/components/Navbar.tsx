import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed z-50 w-full bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-bold">
            Jacob Sai
          </a>

          {/* Hamburger button */}
          <button
            className="border-none bg-transparent p-2 hover:bg-transparent focus:outline-none active:bg-transparent md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            style={{ backgroundColor: 'transparent' }}
          >
            <div className="space-y-2">
              <span
                className={`block h-0.5 w-8 bg-white transition ${isMenuOpen ? 'translate-y-2.5 rotate-45' : ''}`}
              ></span>
              <span
                className={`block h-0.5 w-8 bg-white transition ${isMenuOpen ? 'opacity-0' : ''}`}
              ></span>
              <span
                className={`block h-0.5 w-8 bg-white transition ${isMenuOpen ? '-translate-y-2.5 -rotate-45' : ''}`}
              ></span>
            </div>
          </button>

          {/* Desktop menu */}
          <div className="hidden space-x-8 md:flex">
            <a href="#experience" className="transition hover:text-blue-400">
              Experience
            </a>
            <a href="#projects" className="transition hover:text-blue-400">
              Projects
            </a>
            <a href="#skills" className="transition hover:text-blue-400">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-blue-400">
              Contact
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden transition-all duration-300 ease-in-out md:hidden`}
        >
          <div className="flex flex-col space-y-4 py-4">
            <a
              href="#experience"
              className="transition hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </a>
            <a
              href="#projects"
              className="transition hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#skills"
              className="transition hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#contact"
              className="transition hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
