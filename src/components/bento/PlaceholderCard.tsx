'use client'

interface PlaceholderCardProps {
  title?: string
  subtitle?: string
  icon?: string
  color?: 'gray' | 'blue' | 'green' | 'purple' | 'orange' | 'pink'
}

export default function PlaceholderCard({
  title = "Coming Soon",
  subtitle = "Exciting things ahead",
  icon = "✨",
  color = 'gray'
}: PlaceholderCardProps) {
  const colorClasses = {
    gray: 'from-gray-500/75 to-slate-500/80 shadow-gray-200/30',
    blue: 'from-blue-500/75 to-indigo-500/80 shadow-blue-200/30',
    green: 'from-green-500/75 to-emerald-500/80 shadow-green-200/30',
    purple: 'from-purple-500/75 to-violet-500/80 shadow-purple-200/30',
    orange: 'from-orange-500/75 to-amber-500/80 shadow-orange-200/30',
    pink: 'from-pink-500/75 to-rose-500/80 shadow-pink-200/30',
  }

  return (
    <div className={`h-full bg-gradient-to-br ${colorClasses[color]} backdrop-blur-lg border border-white/50 rounded-3xl p-4 flex flex-col justify-center items-center text-white shadow-2xl hover:shadow-white/20 hover:border-white/60 transition-all duration-500 overflow-hidden relative group`}>
      {/* Glass reflection overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-40 rounded-3xl pointer-events-none group-hover:opacity-60 transition-opacity duration-500"></div>

      <div className="relative z-10 text-center">
        <div className="text-2xl mb-2">{icon}</div>
        <h3 className="font-bold text-sm mb-1">{title}</h3>
        <p className="text-xs opacity-80">{subtitle}</p>
      </div>
    </div>
  )
}