'use client'

import { useState } from 'react'
import { HoverTarget } from './useHoverState'

export function useTapToSelectHover() {
  const [currentTapHover, setCurrentTapHover] = useState<HoverTarget>(null)

  const selectCard = (hoverTarget: HoverTarget) => {
    setCurrentTapHover(hoverTarget)
  }

  const clearSelection = () => {
    setCurrentTapHover(null)
  }

  return {
    currentTapHover,
    selectCard,
    clearSelection
  }
}