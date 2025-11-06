'use client'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-white p-8 md:p-12 lg:p-16 mx-4 md:mx-8 lg:mx-16 my-8 rounded-lg shadow-lg opacity-30 transition-opacity duration-500"
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-titles mb-6 text-center leading-tight">
        Software engineer by formation, video editor by passion and full-time creator by destiny
      </h1>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700">
        Starting my career in IT has always been what I seeked for because as a creative mind the only limit to creativity is the ability to express it. Becoming an engineer allowed me to understand everything I needed to in order to create websites, apps and basically anything digital related. The next step after that in order to fulfill my creative skillset was to learn video editing which in today's world is a must have to expand the audience that anyone's creativity was designed to reach.
      </p>
    </section>
  )
}