'use client'

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="bg-white p-8 md:p-12 lg:p-16 mx-4 md:mx-8 lg:mx-16 my-8 rounded-lg shadow-lg opacity-30 transition-opacity duration-500"
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-titles mb-6 text-center">
        You need me you just don't know it yet
      </h1>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700">
        Being able to make decisions and take initiatives for the benefit of my employer has given me the prestigious position of project leader only 6 months after starting my first ever IT job but no matter what your desires are my priority.
        <br /><br />
        My ability to work independently allows you to focus on the tasks that really matters like developing your business or creating content.
      </p>
    </section>
  )
}