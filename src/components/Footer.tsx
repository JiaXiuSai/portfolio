const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 px-4 py-8">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Jacob Sai. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
