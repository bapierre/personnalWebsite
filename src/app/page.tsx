'use client'

import HeroCard from '@/components/bento/HeroCard'
import ProjectCard from '@/components/bento/ProjectCard'
import SocialCard from '@/components/bento/SocialCard'
import StatsCard from '@/components/bento/StatsCard'

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Optimized Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-silver/10 via-transparent to-zinc-600/20"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-silver/5 to-zinc-700/25"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-silver/15 via-zinc-600/10 to-transparent rounded-full blur-3xl animate-pulse opacity-70"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-zinc-500/20 via-silver/8 to-transparent rounded-full blur-2xl animate-pulse delay-1000 opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-radial from-silver/12 via-zinc-400/6 to-transparent rounded-full blur-3xl animate-pulse delay-500 opacity-50"></div>
      </div>

      <div className="relative z-10 h-screen grid grid-cols-6 grid-rows-4 gap-4 p-4">

        {/* Hero Card - Top Left */}
        <div className="col-span-3 row-span-2">
          <HeroCard />
        </div>

        {/* Profile Image - Top Right */}
        <div className="col-span-2 row-span-2">
          <div className="h-full bg-gradient-to-br from-white/85 to-gray-100/80 backdrop-blur-lg border border-white/50 rounded-3xl p-3 flex items-center justify-center overflow-hidden shadow-2xl hover:shadow-white/20 hover:border-white/60 transition-all duration-500 relative group">
            {/* Glass reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-40 rounded-3xl pointer-events-none group-hover:opacity-60 transition-opacity duration-500"></div>
            <img
              src="/assets/me.jpg"
              alt="Baptiste Pierre"
              className="relative z-10 w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Stats Card 1 */}
        <div className="col-span-1 row-span-1">
          <StatsCard
            number="3+"
            label="Years Experience"
            color="orange"
          />
        </div>

        {/* Stats Card 2 */}
        <div className="col-span-1 row-span-1">
          <StatsCard
            number="5+"
            label="Projects"
            color="purple"
          />
        </div>

        {/* Project Card 1 - Curify */}
        <div className="col-span-2 row-span-1">
          <ProjectCard
            title="Curify.be"
            description="Healthcare platform revolutionizing patient care"
            link="https://curify.be"
            color="blue"
          />
        </div>

        {/* Social Cards Row */}
        <div className="col-span-1 row-span-1">
          <SocialCard
            platform="github"
            link="https://github.com/moderndaysamurai45"
          />
        </div>

        <div className="col-span-1 row-span-1">
          <SocialCard
            platform="linkedin"
            link="https://linkedin.com/in/baptistepierre"
          />
        </div>

        <div className="col-span-1 row-span-1">
          <SocialCard
            platform="x"
            link="https://x.com/moderndaysamurai45"
          />
        </div>

        <div className="col-span-1 row-span-1">
          <SocialCard
            platform="instagram"
            link="https://instagram.com/moderndaysamurai45"
          />
        </div>

        <div className="col-span-1 row-span-1">
          <SocialCard
            platform="youtube"
            link="https://youtube.com/@ModernDaySamurai-bh8zk"
          />
        </div>

        {/* Project Card 2 - Refinedware */}
        <div className="col-span-2 row-span-1">
          <ProjectCard
            title="Refinedware.com"
            description="Software solutions for modern businesses"
            link="https://refinedware.com"
            color="green"
          />
        </div>

        {/* Contact Card */}
        <div className="col-span-3 row-span-1">
          <div className="h-full bg-gradient-to-r from-orange-500/75 to-red-500/80 backdrop-blur-lg border border-white/50 rounded-3xl p-4 flex flex-col justify-center items-center text-white shadow-2xl shadow-orange-200/30 hover:shadow-white/20 hover:border-white/60 transition-all duration-500 overflow-hidden relative group">
            {/* Glass reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-40 rounded-3xl pointer-events-none group-hover:opacity-60 transition-opacity duration-500"></div>
            <div className="relative z-10 text-center">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-black mb-2 tracking-tight">Have a project in mind?</h3>
              <a
                href="mailto:moderndaysamurai45@outlook.com"
                className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl font-bold hover:bg-white/30 transition-all duration-300 hover:scale-105 text-sm shadow-lg inline-block truncate max-w-full"
              >
                moderndaysamurai45@outlook.com
              </a>
            </div>
          </div>
        </div>

        {/* Project Card 3 - VanpeltVentures */}
        <div className="col-span-2 row-span-1">
          <ProjectCard
            title="VanpeltVentures.org"
            description="Investment and venture capital platform"
            link="https://vanpeltventures.org"
            color="indigo"
          />
        </div>

        {/* Future Stats Card */}
        <div className="col-span-1 row-span-1">
          <StatsCard
            number="100%"
            label="Client Satisfaction"
            color="green"
          />
        </div>

      </div>
    </div>
  )
}