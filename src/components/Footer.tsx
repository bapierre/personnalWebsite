'use client'

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <nav className="mb-4">
        <ul className="flex justify-center space-x-8">
          <li>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-hover-cyan transition-colors duration-300"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('products')}
              className="hover:text-hover-cyan transition-colors duration-300"
            >
              Products
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="hover:text-hover-cyan transition-colors duration-300"
            >
              Portfolio
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('socials')}
              className="hover:text-hover-cyan transition-colors duration-300"
            >
              Socials
            </button>
          </li>
        </ul>
      </nav>
      <p className="text-center text-gray-400">&copy; All rights reserved.</p>
    </footer>
  )
}