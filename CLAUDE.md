# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

InitDev is a Next.js 15.5.2 website for a development agency specializing in rapid MVP development for startups. The site uses the App Router, TypeScript, Tailwind CSS, and Framer Motion for a modern, performant web experience.

## Essential Commands

```bash
# Development
npm run dev          # Start dev server with Turbopack (http://localhost:3000)

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## Architecture

### Tech Stack
- **Framework**: Next.js 15.5.2 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS v3 with custom animations
- **Animations**: Framer Motion for complex interactions
- **Forms**: React Hook Form + Zod validation
- **UI Components**: Custom component library with CVA

### Project Structure
```
src/
├── app/              # Next.js app router pages
│   ├── (routes)/     # Public routes
│   └── api/          # API endpoints
├── components/       
│   ├── layout/       # Header, Footer, Navigation
│   ├── sections/     # Page-specific sections
│   └── ui/           # Reusable UI components
├── lib/              
│   ├── constants/    # App constants
│   ├── data/         # Static data
│   ├── types/        # TypeScript types
│   └── utils.ts      # Utility functions
└── hooks/            # Custom React hooks
```

### Key Architectural Decisions

1. **Component Organization**: Components are organized by type (layout/sections/ui) with co-located styles and logic. Each component is self-contained and follows single responsibility principle.

2. **Animation Strategy**: Uses Framer Motion for all animations with scroll-triggered effects and optimized performance through `useTransform` and `useScroll` hooks.

3. **Form Handling**: All forms use React Hook Form with Zod schemas for validation. Contact forms submit to `/api/contact` endpoint.

4. **Performance Optimizations**:
   - Images use Next.js Image component with optimization
   - Fonts are loaded with `next/font` for optimal performance
   - Components use dynamic imports where appropriate
   - Turbopack enabled for faster development builds

5. **TypeScript Configuration**: Strict mode enabled with path aliases (@/* for src/*)

## API Routes

- `POST /api/contact` - Contact form submission
- `POST /api/newsletter` - Newsletter signup  
- `POST /api/demo` - Demo request

## Component Patterns

### Page Components
Pages use a consistent structure with PageTransition wrapper and section components:
```tsx
<PageTransition>
  <HeroSection />
  <MainContent />
  <CTASection />
</PageTransition>
```

### UI Components
All UI components accept standard props and use CVA for variant management:
```tsx
interface ComponentProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}
```

### Animation Hooks
Custom hooks handle scroll-based animations and interactions:
- `useScrollDirection()` - Detect scroll direction
- `useScrollAnimation()` - Trigger animations on scroll
- `useMousePosition()` - Track cursor for interactive effects

## Development Workflow

1. **Feature Development**: Create components in appropriate directory, implement with TypeScript, add Framer Motion animations as needed
2. **Styling**: Use Tailwind classes, extend in `tailwind.config.ts` for custom values
3. **Forms**: Create Zod schema, implement with React Hook Form, handle submission to API routes
4. **Testing**: Verify responsive design, test form validations, check animation performance

## Important Notes

- The site emphasizes performance and uses aggressive caching strategies
- All new components should follow the existing animation patterns
- Form submissions require proper error handling and loading states
- Security headers are configured in `next.config.ts`
- The site auto-deploys to Vercel (main branch = production)