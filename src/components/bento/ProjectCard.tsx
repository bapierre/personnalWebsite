'use client'

interface ProjectCardProps {
  title: string
  description: string
  link: string
  color: 'blue' | 'green' | 'indigo' | 'purple' | 'orange'
}

const colorClasses = {
  blue: 'from-blue-500/70 to-blue-600/80 hover:from-blue-600/75 hover:to-blue-700/85 shadow-blue-200/40',
  green: 'from-green-500/70 to-green-600/80 hover:from-green-600/75 hover:to-green-700/85 shadow-green-200/40',
  indigo: 'from-indigo-500/70 to-indigo-600/80 hover:from-indigo-600/75 hover:to-indigo-700/85 shadow-indigo-200/40',
  purple: 'from-purple-500/70 to-purple-600/80 hover:from-purple-600/75 hover:to-purple-700/85 shadow-purple-200/40',
  orange: 'from-orange-500/70 to-orange-600/80 hover:from-orange-600/75 hover:to-orange-700/85 shadow-orange-200/40',
}

export default function ProjectCard({ title, description, link, color }: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`h-full bg-gradient-to-br ${colorClasses[color]} backdrop-blur-lg border border-white/60 rounded-3xl p-4 flex flex-col justify-between text-white transition-all duration-500 hover:scale-[1.02] hover:shadow-white/30 hover:border-white/70 group cursor-pointer shadow-2xl shadow-black/20 overflow-hidden relative`}
    >
      {/* Glass reflection overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-40 rounded-3xl pointer-events-none group-hover:opacity-60 transition-opacity duration-500"></div>

      <div className="relative z-10">
        <h3 className="text-lg font-black mb-2 group-hover:scale-105 transition-transform duration-300 tracking-tight line-clamp-1">
          {title}
        </h3>
        <p className="text-white/90 text-xs leading-relaxed font-medium line-clamp-2">
          {description}
        </p>
      </div>

      <div className="relative z-10 flex items-center justify-between mt-4">
        <div className="text-xs text-white/80 font-semibold">
          Click to visit →
        </div>
        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:rotate-12">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </div>
    </a>
  )
}