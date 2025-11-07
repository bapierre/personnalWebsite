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
      className="h-full bg-gradient-to-br from-purple-500/75 to-indigo-500/80 backdrop-blur-lg border border-white/50 rounded-3xl p-6 flex flex-col justify-center text-white shadow-2xl hover:shadow-purple-200/30 hover:border-white/60 transition-all duration-500 relative group overflow-hidden cursor-pointer hover:scale-[1.02]"
    >
      {/* Glass reflection overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-40 rounded-3xl pointer-events-none group-hover:opacity-60 transition-opacity duration-500"></div>

      <div className="relative z-10">
        <h3 className="font-bold text-lg mb-4 text-center">✈️ Catch me here</h3>

        <div className="space-y-2 text-sm mb-4">
          <div className="flex justify-between">
            <span className="font-medium">Brussels</span>
            <span className="opacity-90">1st Nov → 5th Jun</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Ho Chi Minh</span>
            <span className="opacity-90">6th Jun → 20th Jun</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Da Nang</span>
            <span className="opacity-90">21st Jun → 21st Aug</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Ha Noi</span>
            <span className="opacity-90">22nd Aug → 4th Sep</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Bangkok</span>
            <span className="opacity-90">5th Sep → 4th Oct</span>
          </div>
          <div className="text-center italic opacity-80 pt-2">
            More destinations to come
          </div>
        </div>

        <div className="text-center text-sm font-medium bg-white/20 rounded-lg p-2">
          DM me on X to schedule a meetup
        </div>
      </div>
    </a>
  )
}