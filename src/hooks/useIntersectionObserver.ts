'use client'

import { useEffect, useRef } from 'react'

export function useIntersectionObserver() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in')
            entry.target.classList.remove('fade-out')
          } else {
            entry.target.classList.remove('fade-in')
            entry.target.classList.add('fade-out')
          }
        })
      },
      { threshold: 0.5 }
    )

    const sections = sectionsRef.current.filter(Boolean) as HTMLElement[]
    sections.forEach((section) => {
      if (section) {
        observer.observe(section)
      }
    })

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section)
        }
      })
    }
  }, [])

  const addSection = (element: HTMLElement | null, index: number) => {
    sectionsRef.current[index] = element
  }

  return addSection
}