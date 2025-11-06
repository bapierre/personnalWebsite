'use client'

export default function ServicesSection() {
  return (
    <section className="bg-white p-8 md:p-12 lg:p-16 mx-4 md:mx-8 lg:mx-16 my-8 rounded-lg shadow-lg opacity-30 transition-opacity duration-500">
      <h1 className="text-3xl md:text-4xl font-titles mb-6 text-center">
        Video editing for social medias
      </h1>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700">
        The commissions I'm currently accepting revolve around video editing ranging from TikToks to Youtube videos no matter the format you'd like.
        <br /><br />
        The price depending on the amount of work that has to be done I'll ask you to contact me via{' '}
        <a
          href="mailto:moderndaysamurai45@outlook.com"
          className="text-blue-600 hover:text-blue-800 underline transition-colors duration-300"
        >
          mail
        </a>{' '}
        to further discuss your project.
      </p>
    </section>
  )
}