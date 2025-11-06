'use client'

export default function EmptyCard() {
  return (
    <div className="h-full bg-gradient-to-br from-gray-200/60 to-gray-300/70 backdrop-blur-lg border border-white/40 rounded-3xl shadow-xl hover:shadow-white/10 hover:border-white/50 transition-all duration-500 overflow-hidden relative group">
      {/* Glass reflection overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-30 rounded-3xl pointer-events-none group-hover:opacity-50 transition-opacity duration-500"></div>

      {/* Subtle content hint */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-gray-400/60 text-2xl">⋯</div>
      </div>
    </div>
  )
}