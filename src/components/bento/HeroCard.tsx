'use client'

export default function HeroCard() {
  return (
    <div className="h-full bg-gradient-to-br from-white/80 via-gray-50/75 to-gray-100/70 backdrop-blur-lg border border-white/50 rounded-3xl p-2 flex items-center gap-6 text-gray-900 shadow-2xl hover:shadow-white/20 hover:border-white/60 hover:bg-gradient-to-br hover:from-white/85 hover:via-gray-50/80 hover:to-gray-100/75 transition-all duration-500 overflow-hidden relative group">
      {/* Inner glass reflection */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-30 rounded-3xl pointer-events-none group-hover:opacity-40 transition-opacity duration-500"></div>

      <div className="relative z-10 flex items-center gap-6 w-full">
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          <div className="relative">
            <img
              src="/assets/me.png?v=4"
              alt="Baptiste Pierre"
              className="w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-3xl shadow-xl ring-4 ring-white/30"
            />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-green-500 rounded-full border-3 border-white shadow-lg"></div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-4xl lg:text-4xl font-bold mb-4 leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Hey I'm Baptiste Pierre aka Vanpelt
          </h1>

          <p className="text-gray-700 text-xl md:text-xl lg:text-2xl mb-5 font-medium">
            Software engineer, starting entrepreneur and digital nomad in the making
          </p>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-lg md:text-xl text-gray-500">🇧🇪 Belgium</span>
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            <span className="text-lg md:text-xl text-gray-500 font-medium">Currently employed</span>
          </div>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
            I'm 28 and on a mission to turn my ideas into a life of freedom. After five years working in corporate IT, I decided to take the leap and become a full-time entrepreneur. I'm building projects that will allow me to live and work anywhere in the world — and I'd love to have you join me for the ride.
          </p>
        </div>
      </div>
    </div>
  )
}