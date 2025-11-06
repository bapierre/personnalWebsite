'use client'

interface StatsCardProps {
  number: string
  label: string
  color: 'orange' | 'purple' | 'green' | 'blue'
}

const colorClasses = {
  orange: 'from-orange-500/75 to-orange-600/85 shadow-orange-200/40',
  purple: 'from-purple-500/75 to-purple-600/85 shadow-purple-200/40',
  green: 'from-green-500/75 to-green-600/85 shadow-green-200/40',
  blue: 'from-blue-500/75 to-blue-600/85 shadow-blue-200/40',
}

export default function StatsCard({ number, label, color }: StatsCardProps) {
  return (
    <div className={`h-full bg-gradient-to-br ${colorClasses[color]} backdrop-blur-lg border border-white/60 rounded-3xl p-3 flex flex-col justify-center items-center text-white shadow-2xl shadow-black/20 hover:scale-105 hover:border-white/70 hover:shadow-white/30 transition-all duration-500 overflow-hidden relative group`}>
      {/* Glass reflection overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-30 rounded-3xl pointer-events-none group-hover:opacity-50 transition-opacity duration-500"></div>

      <div className="relative z-10 text-2xl md:text-3xl font-black mb-1 tracking-tight">
        {number}
      </div>
      <div className="relative z-10 text-xs text-center text-white/90 leading-tight font-semibold px-1">
        {label}
      </div>
    </div>
  )
}