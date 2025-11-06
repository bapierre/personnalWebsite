'use client'

interface GridBlockProps {
  coordinate: string
}

export default function GridBlock({ coordinate }: GridBlockProps) {
  return (
    <div className="w-full h-full min-h-[40px] bg-gradient-to-br from-white/80 to-gray-100/70 backdrop-blur-lg border border-white/50 rounded-lg flex items-center justify-center text-gray-900 shadow-lg hover:shadow-white/20 hover:border-white/60 transition-all duration-300 overflow-hidden relative group">
      {/* Glass reflection overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-30 rounded-xl pointer-events-none group-hover:opacity-40 transition-opacity duration-300"></div>

      <div className="relative z-10 text-center">
        <span className="text-sm font-bold text-gray-700">
          {coordinate}
        </span>
      </div>
    </div>
  )
}