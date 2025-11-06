'use client'

import Image from 'next/image'

export default function ProfileSection() {
  return (
    <section
      id="me"
      className="flex justify-center p-8 md:p-12 lg:p-16 mx-4 md:mx-8 lg:mx-16 my-8 opacity-30 transition-opacity duration-500"
    >
      <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl">
        <Image
          src="/assets/me.jpg"
          alt="Baptiste Pierre"
          width={600}
          height={800}
          className="rounded-lg shadow-lg object-cover w-full h-auto"
          priority
        />
      </div>
    </section>
  )
}