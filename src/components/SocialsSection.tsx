'use client'

import Image from 'next/image'

export default function SocialsSection() {
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/moderndaysamurai45/',
      icon: '/assets/instagram.png',
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@moderndaysamurai45',
      icon: '/assets/tiktok.png',
    },
    {
      name: 'Youtube',
      url: 'https://www.youtube.com/@ModernDaySamurai-bh8zk',
      icon: '/assets/youtube.png',
    },
    {
      name: 'Mail',
      url: 'mailto:moderndaysamurai45@outlook.com',
      icon: '/assets/mail.png',
    },
  ]

  return (
    <section
      id="socials"
      className="bg-white p-8 md:p-12 lg:p-16 mx-4 md:mx-8 lg:mx-16 my-8 rounded-lg shadow-lg opacity-30 transition-opacity duration-500"
    >
      <h1 className="text-3xl md:text-4xl font-titles mb-8 text-center">Find me</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {socialLinks.map((social) => (
          <li key={social.name}>
            <a
              href={social.url}
              target={social.name !== 'Mail' ? '_blank' : undefined}
              rel={social.name !== 'Mail' ? 'noopener noreferrer' : undefined}
              className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 group"
            >
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src={social.icon}
                  alt={`${social.name} icon`}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-lg group-hover:text-hover-cyan transition-colors duration-300">
                {social.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}