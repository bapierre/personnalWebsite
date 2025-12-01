'use client'

interface TravelCardProps {
  link: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export default function TravelCard({ link, onMouseEnter, onMouseLeave }: TravelCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="h-full bg-gradient-to-br from-purple-500/75 to-indigo-500/80 backdrop-blur-lg border border-white/50 rounded-3xl p-3 sm:p-4 md:p-3 lg:p-6 flex flex-col justify-center text-white shadow-2xl hover:shadow-purple-200/30 hover:border-white/60 transition-all duration-500 relative group overflow-hidden cursor-pointer hover:scale-[1.02]"
    >
      {/* Glass reflection overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-40 rounded-3xl pointer-events-none group-hover:opacity-60 transition-opacity duration-500"></div>

      <div className="relative z-10 h-full flex flex-col">
        <h3 className="font-bold text-base sm:text-base md:text-sm lg:text-lg mb-2 sm:mb-2 md:mb-1 lg:mb-4 text-center">✈️ Catch me here</h3>

        <div className="space-y-1 sm:space-y-1 md:space-y-0.5 lg:space-y-2 text-sm sm:text-xs md:text-xs lg:text-sm mb-3 sm:mb-3 md:mb-2 lg:mb-4 flex-1 overflow-y-auto py-2 sm:py-3 md:py-2 lg:py-4">
          <div className="flex justify-between items-center">
            <span className="font-medium">Brussels</span>
            <span className="opacity-90 text-right">1st Nov → 6th Jun</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Ho Chi Minh City</span>
            <span className="opacity-90 text-right">7th Jun → 21th Jun</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Da Nang</span>
            <span className="opacity-90 text-right">21st Jun → 21st Aug</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Ha Noi</span>
            <span className="opacity-90 text-right">22nd Aug → 4th Sep</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Chiang Mai</span>
            <span className="opacity-90 text-right">5th Sep → 4th Oct</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Bangkok</span>
            <span className="opacity-90 text-right">5th Oct → 4th Nov</span>
          </div>
          <div className="text-center italic opacity-80 pt-1 sm:pt-1 md:pt-0.5 lg:pt-2 text-sm sm:text-xs md:text-xs lg:text-xs">
            More destinations to come
          </div>
        </div>

        <div className="text-center text-sm sm:text-xs md:text-xs lg:text-sm font-medium bg-white/20 rounded-lg p-2 sm:p-1.5 md:p-1 lg:p-2 mt-auto">
          DM me on X to schedule a meetup
        </div>
      </div>
    </a>
  )
}