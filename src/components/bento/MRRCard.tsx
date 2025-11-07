'use client'

interface MRRCardProps{
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export default function MRRCard({onMouseEnter, onMouseLeave}:MRRCardProps) {
  return (
    <div className="h-full bg-gradient-to-br from-emerald-500/80 to-green-400/85 backdrop-blur-lg border border-white/50 rounded-3xl p-6 flex flex-col justify-center text-white shadow-2xl hover:shadow-green-200/30 hover:border-white/60 transition-all duration-500 relative group overflow-hidden hover:scale-[1.02]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      {/* Glass reflection overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-40 rounded-3xl pointer-events-none group-hover:opacity-60 transition-opacity duration-500"></div>

      <div className="relative z-10 text-center">
        <div className="text-2xl mb-4">💰</div>
        <h3 className="font-bold text-lg mb-6">MRR Tracker</h3>

        <div className="space-y-4 text-sm">
          <div className="flex justify-between items-center">
            <span className="font-medium">Job:</span>
            <span className="font-bold text-lg">€4,200</span>
          </div>

          <div className="w-full h-px bg-white/30"></div>

          <div className="flex justify-between items-center">
            <span className="font-medium">Business:</span>
            <span className="font-bold text-lg">€0</span>
          </div>

          <div className="w-full h-px bg-white/30"></div>

          <div className="flex justify-between items-center pt-2">
            <span className="font-bold">Total:</span>
            <span className="font-bold text-xl">€4,200</span>
          </div>
        </div>
      </div>
    </div>
  )
}