'use client'

import GridBlock from '@/components/bento/GridBlock'
import SocialCard from '@/components/bento/SocialCard'
import HeroCard from '@/components/bento/HeroCard'
import ProjectCard from '@/components/bento/ProjectCard'
import EmptyCard from '@/components/bento/EmptyCard'
import SeparatorCard from '@/components/bento/SeparatorCard'
import PlaceholderCard from '@/components/bento/PlaceholderCard'
import TravelCard from '@/components/bento/TravelCard'
import MRRCard from '@/components/bento/MRRCard'

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

      <div
        className="relative z-10 h-screen grid gap-2 p-4"
        style={{
          gridTemplateColumns: 'repeat(16, 1fr)',
          gridTemplateRows: 'repeat(9, 1fr)'
        }}
      >
        {/* A1-B2 Merged: X Account (2x2) */}
        <div className="col-span-2 row-span-2">
          <SocialCard
            platform="x"
            link="https://x.com/VanpeltVentures"
          />
        </div>

        {/* Row 1 continues */}

        {/* C1-F2 Merged: Nomad Maxing (4x2) */}
        <div className="col-span-4 row-span-2">
          <ProjectCard
            title="Nomad Maxing"
            description="Coming soon - Digital nomad lifestyle platform"
            link=""
            color="orange"
          />
        </div>

        {/* G1-H2 Merged: Instagram (2x2) */}
        <div className="col-span-2 row-span-2">
          <SocialCard
            platform="instagram"
            link="https://instagram.com/vanpeltventures"
          />
        </div>

        {/* I1-I2 Merged: Separator (1x2) */}
        <div className="col-span-1 row-span-2">
          <SeparatorCard />
        </div>

        {/* J1-M2 Merged: VanpeltVentures.org (4x2) */}
        <div className="col-span-4 row-span-2">
          <ProjectCard
            title="VanpeltVentures.org"
            description="Personal blog and entrepreneurial journey"
            link="https://vanpeltventures.org"
            color="purple"
          />
        </div>

        {/* N1-P3 Merged: Contact for Projects (3x3) */}
        <div className="col-span-3 row-span-3">
          <PlaceholderCard
            title="Need Help?"
            subtitle="Send me an email for your project"
            icon="📧"
            color="blue"
          />
        </div>

        {/* Row 2 continues (A2, B2 are part of merged block above) */}
        {/* C2-F2 are part of the Nomad Maxing block above */}
        {/* G2-H2 are part of the Instagram block above */}
        {/* I2 is part of the I1-I2 separator above */}
        {/* J2-M2 are part of the VanpeltVentures block above */}
        {/* N2-P2 are part of the placeholder block above */}

        {/* Row 3 */}

        {/* A3-C5 Merged: MRR Tracker (3x3) */}
        <div className="col-span-3 row-span-3">
          <MRRCard />
        </div>

        {/* D3-M7 Merged: Hero Section (10x5) */}
        <div className="col-span-10 row-span-5">
          <HeroCard />
        </div>

        {/* N3-P3 are part of the placeholder block above */}

        {/* Row 4 */}
        {/* A4-C4 are part of the A3-C5 placeholder above */}

        {/* D4-M4 are now part of the hero section above */}

        {/* N4-P9 Merged: Travel Itinerary (3x6) */}
        <div className="col-span-3 row-span-6">
          <TravelCard link="https://x.com/VanpeltVentures" />
        </div>

        {/* Row 5 - (A5-C5 part of A3-C5 placeholder, D5-M5 are part of merged hero, N5-P5 part of placeholder) */}
        {/* A5-C5 are part of the A3-C5 placeholder above */}
        {/* D5-M5 are part of the hero block above */}
        {/* N5-P5 are part of the placeholder block above */}

        {/* Row 6 - (A6-A7 separator, B6-C6 part of YouTube, D6-M6 are part of merged hero, N6-P6 part of placeholder) */}

        {/* A6-A7 Merged: Separator (1x2) */}
        <div className="col-span-1 row-span-2">
          <SeparatorCard />
        </div>

        {/* B6-C7 Merged: YouTube (2x2) */}
        <div className="col-span-2 row-span-2">
          <SocialCard
            platform="youtube"
            link="https://youtube.com/@vanpeltventures"
          />
        </div>

        {/* D6-M6 are part of the hero block above */}
        {/* N6-P6 are part of the placeholder block above */}

        {/* Row 7 - (A7 part of A6-A7 separator, B7-C7 part of YouTube, D7-M7 are part of merged hero, N7-P7 part of placeholder) */}
        {/* A7 is part of the A6-A7 separator above */}
        {/* B7-C7 are part of the YouTube block above */}
        {/* D7-M7 are part of the hero block above */}
        {/* N7-P7 are part of the placeholder block above */}

        {/* Row 8 */}
        {/* A8-D9 Merged: Refinedware.com (4x2) */}
        <div className="col-span-4 row-span-2">
          <ProjectCard
            title="Refinedware.com"
            description="Software solutions for modern businesses"
            link="https://refinedware.com"
            color="green"
          />
        </div>

        {/* E8-F9 Merged: GitHub (2x2) */}
        <div className="col-span-2 row-span-2">
          <SocialCard
            platform="github"
            link="https://github.com/bapierre"
          />
        </div>

        {/* G8-G9 Merged: Separator (1x2) */}
        <div className="col-span-1 row-span-2">
          <SeparatorCard />
        </div>

        {/* H8-K9 Merged: Curify (4x2) */}
        <div className="col-span-4 row-span-2">
          <ProjectCard
            title="Curify"
            description="AI-powered content curation platform"
            link="https://curify.app"
            color="blue"
          />
        </div>

        {/* L8-M9 Merged: LinkedIn (2x2) */}
        <div className="col-span-2 row-span-2">
          <SocialCard
            platform="linkedin"
            link="https://linkedin.com/in/baptistepierre"
          />
        </div>
        {/* N8-P8 are part of the placeholder block above */}

        {/* Row 9 - (A9-D9 part of Refinedware, E9-F9 part of GitHub, G9 part of G8-G9 separator, H9-K9 part of Curify, L9-M9 part of LinkedIn, N9-P9 part of placeholder) */}
        {/* A9-D9 are part of the Refinedware block above */}
        {/* E9-F9 are part of the GitHub block above */}
        {/* G9 is part of the G8-G9 separator above */}
        {/* H9-K9 are part of the Curify block above */}
        {/* L9-M9 are part of the LinkedIn block above */}
        {/* N9-P9 are part of the placeholder block above */}

      </div>
    </div>
  )
}