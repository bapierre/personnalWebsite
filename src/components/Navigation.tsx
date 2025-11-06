'use client'

export default function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-gray-700 py-3">
      <ul className="flex justify-center space-x-8">
        <li>
          <button
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-hover-cyan transition-colors duration-300 px-4 py-2"
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('products')}
            className="text-white hover:text-hover-cyan transition-colors duration-300 px-4 py-2"
          >
            Products
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="text-white hover:text-hover-cyan transition-colors duration-300 px-4 py-2"
          >
            Portfolio
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('socials')}
            className="text-white hover:text-hover-cyan transition-colors duration-300 px-4 py-2"
          >
            Socials
          </button>
        </li>
      </ul>
    </nav>
  )
}