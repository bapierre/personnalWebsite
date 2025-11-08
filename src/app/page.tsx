'use client'

import SocialCard from '@/components/bento/SocialCard'
import DynamicHeroCard from '@/components/bento/DynamicHeroCard'
import MailCard from '@/components/bento/MailCard'
import TravelCard from '@/components/bento/TravelCard'
import MRRCard from '@/components/bento/MRRCard'
import CurifyCard from '@/components/bento/CurifyCard'
import RefinedwareCard from '@/components/bento/RefinedwareCard'
import NomadMaxingCard from '@/components/bento/NomadMaxingCard'
import VanpeltVenturesCard from '@/components/bento/VanpeltVenturesCard'
import { useHoverState } from '@/hooks/useHoverState'

export default function Home() {
  const { currentHover, handleMouseEnter, handleMouseLeave } = useHoverState()

  return (
    <div className="min-h-screen relative lg:overflow-hidden">
      {/* Optimized Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-silver/10 via-transparent to-zinc-600/20"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-silver/5 to-zinc-700/25"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-silver/15 via-zinc-600/10 to-transparent rounded-full blur-3xl animate-pulse opacity-70"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-zinc-500/20 via-silver/8 to-transparent rounded-full blur-2xl animate-pulse delay-1000 opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-radial from-silver/12 via-zinc-400/6 to-transparent rounded-full blur-3xl animate-pulse delay-500 opacity-50"></div>
      </div>

      {/* Desktop Layout (1024px+) */}
      <div
        className="relative z-10 h-screen hidden lg:grid gap-2 p-4"
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
          <NomadMaxingCard
            onMouseEnter={() => handleMouseEnter('nomadmaxing')}
            onMouseLeave={() => handleMouseLeave()}/>
        </div>

        {/* G1-H2 Merged: Instagram (2x2) */}
        <div className="col-span-2 row-span-2">
          <SocialCard
            platform="instagram"
            link="https://instagram.com/vanpeltventures"
          />
        </div>

        {/* I1-M2 Merged: VanpeltVentures.org (5x2) */}
        <div className="col-span-5 row-span-2">
          <VanpeltVenturesCard
           link="https://vanpeltventures.org"
            onMouseEnter={() => handleMouseEnter('vanpeltventures')}
            onMouseLeave={() => handleMouseLeave()} />
        </div>

        {/* N1-P3 Merged: Contact for Projects (3x3) */}
        <div className="col-span-3 row-span-3">
          <MailCard
            email="baptiste@refinedware.com"
            onMouseEnter={() => handleMouseEnter('mail')}
            onMouseLeave={() => handleMouseLeave()} />
        </div>

        {/* Row 2 continues (A2, B2 are part of merged block above) */}
        {/* C2-F2 are part of the Nomad Maxing block above */}
        {/* G2-H2 are part of the Instagram block above */}
        {/* I2-M2 are part of the VanpeltVentures block above */}
        {/* N2-P2 are part of the placeholder block above */}

        {/* Row 3 */}

        {/* A3-C5 Merged: MRR Tracker (3x3) */}
        <div className="col-span-3 row-span-3">
          <MRRCard
            onMouseEnter={() => handleMouseEnter('mrr')}
            onMouseLeave={() => handleMouseLeave()}/>
        </div>

        {/* D3-M7 Merged: Hero Section (10x5) */}
        <div className="col-span-10 row-span-5">
          <DynamicHeroCard currentHover={currentHover} />
        </div>

        {/* N3-P3 are part of the placeholder block above */}

        {/* Row 4 */}
        {/* A4-C4 are part of the A3-C5 placeholder above */}

        {/* D4-M4 are now part of the hero section above */}

        {/* N4-P9 Merged: Travel Itinerary (3x6) */}
        <div className="col-span-3 row-span-6">
          <TravelCard
            link="https://x.com/VanpeltVentures"
            onMouseEnter={() => handleMouseEnter('travel')}
            onMouseLeave={() => handleMouseLeave()}/>
        </div>

        {/* Row 5 - (A5-C5 part of A3-C5 placeholder, D5-M5 are part of merged hero, N5-P5 part of placeholder) */}
        {/* A5-C5 are part of the A3-C5 placeholder above */}
        {/* D5-M5 are part of the hero block above */}
        {/* N5-P5 are part of the placeholder block above */}

        {/* Row 6 - (A6-C7 YouTube, D6-M6 are part of merged hero, N6-P6 part of placeholder) */}

        {/* A6-C7 Merged: YouTube (3x2) */}
        <div className="col-span-3 row-span-2">
          <SocialCard
            platform="youtube"
            link="https://youtube.com/@vanpeltventures"
          />
        </div>

        {/* D6-M6 are part of the hero block above */}
        {/* N6-P6 are part of the placeholder block above */}

        {/* Row 7 - (A7-C7 part of YouTube, D7-M7 are part of merged hero, N7-P7 part of placeholder) */}
        {/* A7-C7 are part of the YouTube block above */}
        {/* D7-M7 are part of the hero block above */}
        {/* N7-P7 are part of the placeholder block above */}

        {/* Row 8 */}
        {/* A8-D9 Merged: Refinedware.com (4x2) */}
        <div className="col-span-4 row-span-2">
          <RefinedwareCard
            link="https://refinedware.com"
            onMouseEnter={() => handleMouseEnter('refinedware')}
            onMouseLeave={() => handleMouseLeave()} />
        </div>

        {/* E8-F9 Merged: GitHub (2x2) */}
        <div className="col-span-2 row-span-2">
          <SocialCard
            platform="github"
            link="https://github.com/bapierre"
          />
        </div>

        {/* G8-K9 Merged: Curify (5x2) */}
        <div className="col-span-5 row-span-2">
          <CurifyCard
            link="https://curify.app"
            onMouseEnter={() => handleMouseEnter('curify')}
            onMouseLeave={() => handleMouseLeave()}
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

        {/* Row 9 - (A9-D9 part of Refinedware, E9-F9 part of GitHub, G9-K9 part of Curify, L9-M9 part of LinkedIn, N9-P9 part of placeholder) */}
        {/* A9-D9 are part of the Refinedware block above */}
        {/* E9-F9 are part of the GitHub block above */}
        {/* G9-K9 are part of the Curify block above */}
        {/* L9-M9 are part of the LinkedIn block above */}
        {/* N9-P9 are part of the placeholder block above */}

      </div>

      {/* Tablet Layout (768px - 1023px) - Grid System for Positioning */}
      <div
        className="relative z-10 min-h-screen hidden md:grid lg:hidden gap-2 p-4 pb-8"
        style={{
          gridTemplateColumns: 'repeat(8, 1fr)',
          gridTemplateRows: 'repeat(6, 140px)'
        }}
      >
        {/* Grid squares - you can specify coordinates for each component */}

        {/* PLACEHOLDER SQUARES - Remove these and add components with coordinates */}
        {/* Row 1 */}
        {/* X Social Card - A1 to B1 (2 wide × 1 tall) */}
        <div className="col-span-2 row-span-1">
          <SocialCard platform="x" link="https://x.com/VanpeltVentures" />
        </div>

        {/* Curify Card - C1 to F1 (4 wide × 1 tall) */}
        <div className="col-span-4 row-span-1">
          <CurifyCard
            link="https://curify.app"
            onMouseEnter={() => handleMouseEnter('curify')}
            onMouseLeave={() => handleMouseLeave()}
          />
        </div>

        {/* Mail Card - G1 to H2 (2 wide × 2 tall) - RESTORED */}
        <div className="col-span-2 row-span-2">
          <MailCard
            email="baptiste@refinedware.com"
            onMouseEnter={() => handleMouseEnter('mail')}
            onMouseLeave={() => handleMouseLeave()} />
        </div>

        {/* Row 2 - Mail card continues, so only A2-F2 are available */}
        {/* NomadMaxing Card - A2 to D2 (4 wide × 1 tall) */}
        <div className="col-span-4 row-span-1">
          <NomadMaxingCard
            onMouseEnter={() => handleMouseEnter('nomadmaxing')}
            onMouseLeave={() => handleMouseLeave()}/>
        </div>

        {/* YouTube Social Card - E2 to F2 (2 wide × 1 tall) */}
        <div className="col-span-2 row-span-1">
          <SocialCard platform="youtube" link="https://youtube.com/@vanpeltventures" />
        </div>
        {/* G2-H2 occupied by Mail card above */}

        {/* Row 3 */}
        {/* LinkedIn Social Card - A3 to B3 (2 wide × 1 tall) */}
        <div className="col-span-2 row-span-1">
          <SocialCard platform="linkedin" link="https://linkedin.com/in/baptistepierre" />
        </div>

        {/* Hero Section - C3 to F4 (4 wide × 2 tall) */}
        <div className="col-span-4 row-span-2">
          <DynamicHeroCard currentHover={currentHover} />
        </div>

        {/* Instagram Social Card - G3 to H3 (2 wide × 1 tall) - MOVED HERE */}
        <div className="col-span-2 row-span-1">
          <SocialCard platform="instagram" link="https://instagram.com/vanpeltventures" />
        </div>

        {/* Row 4-5 - MRR Card A4 to B5 (2 wide × 2 tall) */}
        <div className="col-span-2 row-span-2">
          <MRRCard onMouseEnter={() => handleMouseEnter('mrr')} onMouseLeave={() => handleMouseLeave()}/>
        </div>
        {/* C4-F4 occupied by Hero section above */}

        {/* Travel Card - G4 to H6 (2 wide × 3 tall) - REDUCED */}
        <div className="col-span-2 row-span-3">
          <TravelCard
            link="https://x.com/VanpeltVentures"
            onMouseEnter={() => handleMouseEnter('travel')}
            onMouseLeave={() => handleMouseLeave()}/>
        </div>

        {/* Row 5 - MRR card continues, Travel card continues */}
        {/* A5-B5 occupied by MRR card above */}

        {/* Refinedware Card - C5 to F5 (4 wide × 1 tall) */}
        <div className="col-span-4 row-span-1">
          <RefinedwareCard
            link="https://refinedware.com"
            onMouseEnter={() => handleMouseEnter('refinedware')}
            onMouseLeave={() => handleMouseLeave()} />
        </div>
        {/* G5-H5 occupied by Travel card above */}

        {/* Row 6 - Travel card continues, so only A6-F6 available */}
        {/* VanpeltVentures Card - A6 to D6 (4 wide × 1 tall) */}
        <div className="col-span-4 row-span-1">
          <VanpeltVenturesCard
            link="https://vanpeltventures.org"
            onMouseEnter={() => handleMouseEnter('vanpeltventures')}
            onMouseLeave={() => handleMouseLeave()} />
        </div>

        {/* GitHub Social Card - E6 to F6 (2 wide × 1 tall) */}
        <div className="col-span-2 row-span-1">
          <SocialCard platform="github" link="https://github.com/bapierre" />
        </div>
        {/* G6-H6 occupied by Travel card above */}
      </div>

      {/* Mobile Layout (< 768px) */}
      <div className="relative z-10 md:hidden flex flex-col gap-2 p-4 pb-16" style={{ WebkitOverflowScrolling: 'touch' }}>
        {/* DynamicHero - Main focus */}
        <div className="h-80">
          <DynamicHeroCard currentHover={currentHover} />
        </div>

        {/* Mail CTA */}
        <div className="h-40">
          <MailCard
            email="baptiste@refinedware.com"
            onMouseEnter={() => handleMouseEnter('mail')}
            onMouseLeave={() => handleMouseLeave()} />
        </div>

        {/* Top Social Row */}
        <div className="flex gap-2">
          <div className="flex-1 h-24">
            <SocialCard platform="x" link="https://x.com/VanpeltVentures" />
          </div>
          <div className="flex-1 h-24">
            <SocialCard platform="instagram" link="https://instagram.com/vanpeltventures" />
          </div>
        </div>

        {/* MRR */}
        <div className="h-48">
          <MRRCard onMouseEnter={() => handleMouseEnter('mrr')} onMouseLeave={() => handleMouseLeave()}/>
        </div>

        {/* Travel */}
        <div className="h-72">
          <TravelCard
            link="https://x.com/VanpeltVentures"
            onMouseEnter={() => handleMouseEnter('travel')}
            onMouseLeave={() => handleMouseLeave()}/>
        </div>

        {/* Work Projects Stack */}
        <div className="h-32">
          <NomadMaxingCard onMouseEnter={() => handleMouseEnter('nomadmaxing')} onMouseLeave={() => handleMouseLeave()}/>
        </div>

        <div className="h-32">
          <VanpeltVenturesCard link="https://vanpeltventures.org" onMouseEnter={() => handleMouseEnter('vanpeltventures')} onMouseLeave={() => handleMouseLeave()} />
        </div>

        <div className="h-32">
          <RefinedwareCard link="https://refinedware.com" onMouseEnter={() => handleMouseEnter('refinedware')} onMouseLeave={() => handleMouseLeave()} />
        </div>

        <div className="h-32">
          <CurifyCard link="https://curify.app" onMouseEnter={() => handleMouseEnter('curify')} onMouseLeave={() => handleMouseLeave()} />
        </div>

        {/* Bottom Social Row */}
        <div className="flex gap-2">
          <div className="flex-1 h-24">
            <SocialCard platform="youtube" link="https://youtube.com/@vanpeltventures" />
          </div>
          <div className="flex-1 h-24">
            <SocialCard platform="github" link="https://github.com/bapierre" />
          </div>
        </div>

        {/* Final Social */}
        <div className="h-24">
          <SocialCard platform="linkedin" link="https://linkedin.com/in/baptistepierre" />
        </div>
      </div>
    </div>
  )
}