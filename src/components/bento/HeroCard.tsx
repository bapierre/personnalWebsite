'use client'

export default function HeroCard() {
  return (
    <div className="h-full bg-gradient-to-br from-white/80 via-gray-50/75 to-gray-100/70 backdrop-blur-lg border border-white/50 rounded-3xl p-4 md:p-6 flex flex-col justify-between text-gray-900 shadow-2xl hover:shadow-white/20 hover:border-white/60 hover:bg-gradient-to-br hover:from-white/85 hover:via-gray-50/80 hover:to-gray-100/75 transition-all duration-500 overflow-hidden relative group">
      {/* Inner glass reflection */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-30 rounded-3xl pointer-events-none group-hover:opacity-40 transition-opacity duration-500"></div>
      <div className="relative z-10">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
          <span className="text-orange-600 font-semibold text-sm tracking-wide">Baptiste Pierre</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold mb-3 leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          Hey I'm Baptiste
        </h1>

        <p className="text-gray-700 text-base md:text-lg mb-4 font-medium">
          Jr. Software Engineer & Video Editor
        </p>

        <div className="flex items-center gap-2 text-gray-600 mb-6">
          <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
          <span className="text-sm font-medium">Based in France</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <a
          href="https://github.com/moderndaysamurai45"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-3 rounded-xl text-center transition-all duration-300 text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02]"
        >
          GitHub →
        </a>
        <a
          href="https://linkedin.com/in/baptistepierre"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl text-center transition-all duration-300 text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02]"
        >
          LinkedIn →
        </a>
      </div>

      <div className="pt-4 border-t border-gray-300/50">
        <h3 className="text-lg font-bold mb-2 text-gray-900">What I'm About?</h3>
        <p className="text-gray-700 text-xs leading-relaxed font-medium overflow-hidden">
          Software engineer by formation, video editor by passion and full-time creator by destiny.
          I build digital solutions that provide real, perfect, performant experiences.
        </p>
      </div>
      </div>
    </div>
  )
}