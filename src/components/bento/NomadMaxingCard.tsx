'use client'

interface NomadMaxingCardProps{
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export default function NomadMaxingCard({ onMouseEnter, onMouseLeave }: NomadMaxingCardProps) {
  return (
    <div
      className="h-full bg-gradient-to-br from-orange-500/70 to-orange-600/80 backdrop-blur-lg border border-white/60 rounded-3xl flex items-center justify-center text-white transition-all duration-500 hover:scale-[1.02] hover:shadow-white/30 hover:border-white/70 group cursor-pointer shadow-2xl shadow-black/20 overflow-hidden relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        backgroundImage: `url('/assets/comingsoon.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Glass reflection overlay for better hover effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-20 rounded-3xl pointer-events-none group-hover:opacity-30 transition-opacity duration-500"></div>
    </div>
  )
}