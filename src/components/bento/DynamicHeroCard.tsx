'use client'

import { HoverTarget } from '@/hooks/useHoverState'

interface DynamicHeroCardProps {
  currentHover: HoverTarget
}

export default function DynamicHeroCard({ currentHover }: DynamicHeroCardProps) {
  // Default hero content (when no hover)
  const defaultContent = {
    title: "Hey I'm Baptiste Pierre aka Vanpelt",
    subtitle: "Software engineer, starting entrepreneur and digital nomad in the making",
    location: "🇧🇪 Belgium",
    status: "Currently employed",
    description: "I'm 28 and on a mission to turn my ideas into a life of freedom. After five years working in corporate IT, I decided to take the leap and become a full-time entrepreneur. I'm building projects that will allow me to live and work anywhere in the world — and I'd love to have you join me for the ride.",
    backgroundImage: undefined,
    backgroundColor: "from-white/80 via-gray-50/75 to-gray-100/70"
  }

  // Curify-specific content
  const curifyContent = {
    title: "Curify - The 1st IT recruitment platform that doesn't scam",
    subtitle: "100% paycheck. 0% bullsh*t",
    location: "🇧🇪 Belgium",
    status: "Live",
    description: "Curify is a platform made by freelancers to revolutionize the way IT recruitment happens in Belgium and make freelancers and compamies lose billions every year for close to no added value",
    backgroundImage: "url('/assets/curify.png')",
    backgroundColor: "from-blue-500/70 to-blue-600/80"
  }
  // Refinedware-specific content
  const refinedwareContent = {
    title: "Refinedware - A small sized IT consulting with high software standards",
    subtitle: "The art of digital simplicity",
    location: "🌍 Worlwide",
    status: "Live",
    description: "Refinedware is the mother company with which a couple of friends and I aim to deliver qualitative IT solutions whether it comes from market research ideas or ordered projects fot a client",
    backgroundImage: "url('/assets/refinedware.png')",
    backgroundColor: "from-blue-500/70 to-blue-600/80"
  }

  // VanpeltVentures.org-specific content
  const vanpeltVenturesContent = {
    title: "VanpeltVenture.org - A Saas starter fundation for display which once perfected might become open sourced",
    subtitle: "Spare 3 months of boilerplate code, get started now",
    location: "🌍 Worlwide",
    status: "Currently building",
    description: "There is a common base to every startup : this is it. If every launch could spare the time lost in the creation of that base people would have more time to build qualitative Saas",
    backgroundImage: "url('/assets/vanpeltVentures.png')",
    backgroundColor: "from-blue-500/70 to-blue-600/80"
  }

  // Coming soon-specific content
  const comingSoonContent = {
    title: "Coming soon - A Saas to maximize travel returns",
    subtitle: "Organized trips shouldn't be that expensive",
    location: "🌍 Worlwide",
    status: "Currently building",
    description: "Travel agencies cost a fortune to travelers so you plan yourself ! But planning yourself isn't easy and big mistakes can be made while planning. Don't worry I got you ! Wait and see !",
    backgroundImage: "url('/assets/comingsoon.jpg')",
    backgroundColor: "from-blue-500/70 to-blue-600/80"
  }

  // Coming soon-specific content
  const MRRContent = {
    title: "Currently employed and looking to grow other income streams",
    subtitle: "The beginning of a freedom driven tale",
    location: "🌍 Worlwide",
    status: "Currently building",
    description: "As a starter entrepreneur my sole source of income is my current salary and my investments which I won't count. I'm currently looking to grow other income streams to quit my 9-5 once and for all !",
    backgroundImage: undefined,
    backgroundColor: "bg-gradient-to-br from-emerald-500/80 to-green-400/85 backdrop-blur-lg"
  }

  // Coming soon-specific content
  const travelContent = {
    title: "Let's meetup !",
    subtitle: "I'd love to meet other builders and film content for our socials !",
    location: "🌍 Worlwide",
    status: "Always available",
    description: "I've set the goal for myself to meet as many entrepreneurs as possible during my escape to Asia so if you're around let's meet ! And if you're cool with it let's make it into videos for our social medias !",
    backgroundImage: undefined,
    backgroundColor: "bg-gradient-to-br from-purple-500/75 to-indigo-500/80 backdrop-blur-lg"
  }

  // Coming soon-specific content
  const mailContent = {
    title: "Have a project in mind ? Mail me !",
    subtitle: "With the Refinedware team we'd love to make you an offer !",
    location: "🌍 Worlwide",
    status: "Currently accepting projects",
    description: "With our team at Refinedware we turn projects into code for a living ! With our team of senior IT freelancers we transform your ideas into reality. Send me an email if you want to know more about our service !",
    backgroundImage: undefined,
    backgroundColor: "bg-gradient-to-br from-blue-500/75 to-indigo-500/80 backdrop-blur-lg"
  }

  // Select content based on hover state
  const content = (() => {switch(currentHover){
    case 'curify':
      return curifyContent;
    case 'refinedware':
      return refinedwareContent;
    case 'vanpeltventures':
      return vanpeltVenturesContent;
    case 'nomadmaxing':
      return comingSoonContent;
    case 'mrr':
      return MRRContent;
    case 'mail':
      return mailContent;
    case 'travel':
      return travelContent;
    default:
      return defaultContent;
  }
  })();
   

  // Determine if picture should be visible
  const showPicture = currentHover === null

  return (
    <div
      className={`h-full bg-gradient-to-br ${content.backgroundColor} backdrop-blur-lg border border-white/50 rounded-3xl p-2 sm:p-4 flex items-center gap-3 sm:gap-6 text-gray-900 shadow-2xl hover:shadow-white/20 hover:border-white/60 transition-all duration-1000 ease-in-out overflow-hidden relative group`}
      style={{
        backgroundImage: content.backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'background-color 1000ms ease-in-out, background-image 800ms ease-in-out'
      }}
    >
      {/* Background blur overlay when showing background image */}
      {content.backgroundImage && (
        <div className="absolute inset-0 backdrop-blur-md bg-black/20 rounded-3xl transition-all duration-1000 ease-in-out"></div>
      )}

      {/* Inner glass reflection */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-30 rounded-3xl pointer-events-none group-hover:opacity-40 transition-opacity duration-700 ease-in-out"></div>

      <div className="relative z-10 flex items-center gap-3 sm:gap-6 w-full">
        {/* Profile Picture - conditionally rendered */}
        {showPicture && (
          <div className={`flex-shrink-0 transition-all duration-500 ${showPicture ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative">
              <img
                src="/assets/me.png?v=4"
                alt="Baptiste Pierre"
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-36 md:h-36 lg:w-60 lg:h-60 xl:w-72 xl:h-72 object-cover rounded-2xl sm:rounded-3xl shadow-xl ring-2 sm:ring-4 ring-white/30"
              />
              <div className="absolute -bottom-1.5 -right-1.5 sm:-bottom-2 sm:-right-2 md:-bottom-2.5 md:-right-2.5 lg:-bottom-3 lg:-right-3 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-green-500 rounded-full border-2 sm:border-2 md:border-3 border-white shadow-lg"></div>
            </div>
          </div>
        )}

        {/* Dynamic Profile Info */}
        <div className={`flex-1 transition-all duration-500 ${showPicture ? 'text-left' : 'text-center'} ${currentHover ? 'text-white' : 'text-gray-900'}`}>
          <h1 className={`text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold mb-2 sm:mb-3 md:mb-2 lg:mb-4 leading-tight transition-all duration-500 ${currentHover ? 'text-white' : 'bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent'}`}>
            {content.title}
          </h1>

          <p className={`text-sm sm:text-sm md:text-sm lg:text-base xl:text-lg mb-1 sm:mb-2 md:mb-2 lg:mb-3 font-medium transition-all duration-500 ${currentHover ? 'text-white/90' : 'text-gray-700'}`}>
            {content.subtitle}
          </p>

          <div className={`flex items-center gap-2 sm:gap-3 md:gap-2 lg:gap-4 mb-2 sm:mb-3 md:mb-2 lg:mb-4 transition-all duration-500 ${showPicture ? 'justify-start' : 'justify-center'}`}>
            <span className={`text-xs sm:text-xs md:text-xs lg:text-sm transition-all duration-500 ${currentHover ? 'text-white/80' : 'text-gray-500'}`}>{content.location}</span>
            <span className={`w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 md:w-1.5 md:h-1.5 lg:w-2 lg:h-2 rounded-full transition-all duration-500 ${currentHover ? 'bg-white/60' : 'bg-gray-400'}`}></span>
            <span className={`text-xs sm:text-xs md:text-xs lg:text-sm font-medium transition-all duration-500 ${currentHover ? 'text-white/80' : 'text-gray-500'}`}>{content.status}</span>
          </div>

          <p className={`text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base leading-relaxed transition-all duration-500 ${currentHover ? 'text-white/80' : 'text-gray-600'}`}>
            {content.description}
          </p>
        </div>
      </div>
    </div>
  )
}