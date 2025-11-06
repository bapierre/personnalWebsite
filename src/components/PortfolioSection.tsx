'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

export default function PortfolioSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [mouseDownAt, setMouseDownAt] = useState(0)
  const [prevPercentage, setPrevPercentage] = useState(0)
  const [percentage, setPercentage] = useState(0)

  const portfolioImages = [
    '/assets/banner.jpg',
    '/assets/bowling.jpg',
    '/assets/bowling.jpg',
    '/assets/bowling.jpg',
    '/assets/bowling.jpg',
    '/assets/bowling.jpg',
  ]

  const handleOnDown = (clientX: number) => {
    setMouseDownAt(clientX)
  }

  const handleOnUp = () => {
    setMouseDownAt(0)
    setPrevPercentage(percentage)
  }

  const handleOnMove = (clientX: number) => {
    if (mouseDownAt === 0) return

    const mouseDelta = mouseDownAt - clientX
    const maxDelta = window.innerWidth / 2

    const newPercentage = (mouseDelta / maxDelta) * -100
    const nextPercentageUnconstrained = prevPercentage + newPercentage
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100)

    setPercentage(nextPercentage)

    if (trackRef.current) {
      trackRef.current.style.transform = `translate(${nextPercentage}%, -50%)`

      const images = trackRef.current.getElementsByTagName('img')
      for (const image of images) {
        image.style.objectPosition = `${100 + nextPercentage}% center`
      }
    }
  }

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => handleOnDown(e.clientX)
    const handleMouseUp = () => handleOnUp()
    const handleMouseMove = (e: MouseEvent) => handleOnMove(e.clientX)

    const handleTouchStart = (e: TouchEvent) => handleOnDown(e.touches[0].clientX)
    const handleTouchEnd = () => handleOnUp()
    const handleTouchMove = (e: TouchEvent) => handleOnMove(e.touches[0].clientX)

    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchend', handleTouchEnd)
    window.addEventListener('touchmove', handleTouchMove)

    return () => {
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [mouseDownAt, prevPercentage, percentage])

  return (
    <section
      id="portfolio"
      className="h-screen flex items-center justify-center overflow-hidden opacity-30 transition-opacity duration-500"
    >
      <div
        ref={trackRef}
        className="flex gap-4 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none"
        style={{
          transform: `translate(${percentage}%, -50%)`,
          transition: mouseDownAt === 0 ? 'transform 1.2s ease-out' : 'none',
        }}
      >
        {portfolioImages.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Portfolio item ${index + 1}`}
            width={400}
            height={600}
            className="h-96 w-64 object-cover select-none pointer-events-none"
            style={{
              objectPosition: `${100 + percentage}% center`,
              transition: mouseDownAt === 0 ? 'object-position 1.2s ease-out' : 'none',
            }}
            draggable={false}
          />
        ))}
      </div>
    </section>
  )
}