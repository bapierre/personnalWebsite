'use client'

interface BigSquareCardProps {
  children: React.ReactNode
  className?: string
}

export default function BigSquareCard({ children, className = "" }: BigSquareCardProps) {
  return (
    <div className={`aspect-square h-full bg-gradient-to-br from-white/85 to-gray-100/80 backdrop-blur-lg border border-white/50 rounded-3xl p-4 shadow-2xl hover:shadow-white/20 hover:border-white/60 transition-all duration-500 overflow-hidden relative group ${className}`}>
      {/* Glass reflection overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-40 rounded-3xl pointer-events-none group-hover:opacity-60 transition-opacity duration-500"></div>

      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  )
}