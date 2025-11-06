# Baptiste Pierre's Personal Website - Next.js

This is the Next.js version of Baptiste Pierre's personal portfolio website. The site showcases his work as a software engineer and video editor.

## Features

- ✨ Modern React components with TypeScript
- 🎨 Tailwind CSS for responsive styling
- 📱 Mobile-friendly design with touch support
- 🖼️ Interactive portfolio carousel
- 🎯 Smooth scroll animations
- 🔍 SEO optimized
- ⚡ Fast performance with Next.js optimization

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Deployment

This project is configured for static export, making it suitable for deployment on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- **AWS S3**
- Any static hosting service

## Project Structure

```
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   ├── components/          # React components
│   │   ├── Header.tsx
│   │   ├── Navigation.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProfileSection.tsx
│   │   ├── ProductsSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── SocialsSection.tsx
│   │   └── Footer.tsx
│   └── hooks/               # Custom React hooks
│       └── useIntersectionObserver.ts
├── public/
│   └── assets/              # Static assets (images, fonts)
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Technologies Used

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **React 19** - UI library

## Features Implemented

### Interactive Portfolio Carousel
- Drag/swipe functionality for desktop and mobile
- Smooth animations and transitions
- Touch event support

### Intersection Observer Animations
- Fade-in effects when sections come into view
- Smooth transitions between content sections

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly navigation

## License

All rights reserved.