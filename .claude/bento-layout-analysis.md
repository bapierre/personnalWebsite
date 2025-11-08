# Bento Layout Analysis & Structure

## Overview
Personal website using a **CSS Grid-based bento layout** with:
- **16 columns × 9 rows** structure
- **13 cards** of varying sizes (2×2 to 10×5)
- **Glassmorphism design** with backdrop blur effects
- **Interactive hover states** that trigger dynamic content changes

## Main Grid Container
Location: `src/app/page.tsx` (lines 28-35)

```jsx
<div
  className="relative z-10 h-screen grid gap-2 p-4"
  style={{
    gridTemplateColumns: 'repeat(16, 1fr)',
    gridTemplateRows: 'repeat(9, 1fr)'
  }}
>
```

## Card Layout Map

| Card | Position | Size | Type | Component |
|------|----------|------|------|-----------|
| X Account | Cols 1-2, Rows 1-2 | 2×2 | Social | SocialCard |
| Nomad Maxing | Cols 3-6, Rows 1-2 | 4×2 | Feature | NomadMaxingCard |
| Instagram | Cols 7-8, Rows 1-2 | 2×2 | Social | SocialCard |
| VanpeltVentures | Cols 9-13, Rows 1-2 | 5×2 | Feature | VanpeltVenturesCard |
| Mail | Cols 14-16, Rows 1-3 | 3×3 | CTA | MailCard |
| **MRR Tracker** | **Cols 1-3, Rows 3-5** | **3×3** | **Feature** | MRRCard |
| **DynamicHero** | **Cols 4-13, Rows 3-7** | **10×5** | **HERO** | DynamicHeroCard |
| YouTube | Cols 1-3, Rows 6-7 | 3×2 | Social | SocialCard |
| Travel | Cols 14-16, Rows 4-9 | 3×6 | CTA | TravelCard |
| Refinedware | Cols 1-4, Rows 8-9 | 4×2 | Feature | RefinedwareCard |
| GitHub | Cols 5-6, Rows 8-9 | 2×2 | Social | SocialCard |
| Curify | Cols 7-11, Rows 8-9 | 5×2 | Feature | CurifyCard |
| LinkedIn | Cols 12-13, Rows 8-9 | 2×2 | Social | SocialCard |

## Interactive Features

The `DynamicHeroCard` (center large card) responds to hover states:
- **MRR hover** → Shows MRR income breakdown
- **Mail hover** → Shows project inquiry content
- **Travel hover** → Shows meetup information
- **Feature cards hover** → Shows project descriptions
- Animation duration: 1000ms for smooth transitions

## Styling Pattern

All cards use consistent glassmorphism:
```jsx
className="h-full bg-gradient-to-br from-COLOR/70 to-COLOR/80 backdrop-blur-lg border border-white/50 rounded-3xl p-6 shadow-2xl hover:scale-[1.02] transition-all duration-500 overflow-hidden relative group"
```

## Responsive Strategy (Option 1: Adaptive Grid)

### Mobile (< 768px) - 2×N Stack
- DynamicHero: 2×4 (main focus)
- Mail CTA: 2×2
- Social cards: 1×1 pairs (X+Insta, GitHub+LinkedIn)
- Travel: 2×3
- Work cards: 2×1 each (stacked)

### Tablet (768px-1024px) - 6×N Grid
- Simplified 6-column layout
- DynamicHero remains prominent
- Cards reorganized for better tablet experience

### Desktop (1024px+) - Current 16×9 Grid
- Preserve existing layout
- Optimal for 16:9 displays

## File Locations

- **Main Layout**: `src/app/page.tsx`
- **Components**: `src/components/bento/`
- **Styling**: Uses Tailwind CSS + custom styles
- **Fonts**: 'bulgatti', 'titles' (custom)

## Key Implementation Notes

- Uses pure CSS Grid (not Flexbox)
- 16-column grid uses inline styles (Tailwind max is 12)
- All cards are reusable components
- Hover interactions managed via React state
- Glass reflection overlays for visual depth

## Color Coding by Type

- **Social**: Blue/cyan gradients
- **Feature/Work**: Purple/pink gradients
- **CTA**: Green/emerald gradients
- **Hero**: Multi-colored dynamic content

---

*Last updated: November 8, 2025*
*Status: Ready for responsive implementation*