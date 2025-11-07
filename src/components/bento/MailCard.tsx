'use client'

interface MailCardProps {
  email: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export default function MailCard({ email, onMouseEnter, onMouseLeave }: MailCardProps) {
  const subject = encodeURIComponent("IT Project Inquiry")
  const body = encodeURIComponent("Hi Baptiste,\n\nI have an IT project and would like to discuss working with you.\n\n")

  return (
    <a
      href={`mailto:${email}?subject=${subject}&body=${body}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="h-full bg-gradient-to-br from-blue-500/75 to-indigo-500/80 backdrop-blur-lg border border-white/50 rounded-3xl p-6 flex flex-col justify-center items-center text-white shadow-2xl hover:shadow-blue-200/30 hover:border-white/60 transition-all duration-500 overflow-hidden relative group cursor-pointer hover:scale-[1.02]"
    >
      {/* Glass reflection overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-40 rounded-3xl pointer-events-none group-hover:opacity-60 transition-opacity duration-500"></div>

      <div className="relative z-10 text-center">
        <div className="text-4xl mb-4">📧</div>

        <h3 className="font-bold text-xl mb-3">Need developers for a project?</h3>

        <p className="text-sm mb-4 opacity-90 leading-relaxed">
          Send me an email and we'll make you an offer!
        </p>

        <div className="bg-white/20 rounded-lg px-4 py-2 text-sm font-medium">
          Click to email me
        </div>
      </div>
    </a>
  )
}