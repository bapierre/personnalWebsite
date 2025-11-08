'use client'

import { useState } from 'react'

export type HoverTarget = 'curify' | 'refinedware' | 'nomadmaxing' | 'vanpeltventures' | 'social' | 'mrr' | 'travel' | 'mail' | 'x' | 'instagram' | 'youtube' | 'linkedin' | 'github' | null

export function useHoverState() {
  const [currentHover, setCurrentHover] = useState<HoverTarget>(null)

  const handleMouseEnter = (target: HoverTarget) => {
    setCurrentHover(target)
  }

  const handleMouseLeave = () => {
    setCurrentHover(null)
  }

  return {
    currentHover,
    handleMouseEnter,
    handleMouseLeave
  }
}