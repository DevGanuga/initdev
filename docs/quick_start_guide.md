# InitDev Website - Quick Start Guide for Agents

## Before You Start
1. Read `/docs/website_requirements.md` for full context
2. Read `/docs/parallel_execution_plan.md` for your specific package
3. Check which package you're assigned to (A through G)

## Package Assignments Summary

### 🔷 Package A: Core Layout & Navigation
**Priority: HIGH - Start First**
- Navigation.tsx - Sticky header with mobile menu
- Footer.tsx - Multi-column footer with all links
- CSS prefix: `nav-*` and `footer-*`

### 🔶 Package B: Hero & CTA Sections  
**Priority: HIGH**
- HeroSection.tsx - Main landing message
- CTASection.tsx - Final conversion section
- CSS prefix: `hero-*` and `cta-*`

### 🟢 Package C: Services & Technology
**Priority: MEDIUM**
- ServicesSection.tsx - Service cards grid
- TechnologySection.tsx - Tech stack display (NEW)
- CSS prefix: `services-*` and `tech-*`

### 🔵 Package D: Process & Pricing
**Priority: MEDIUM**
- ProcessSection.tsx - Timeline visualization  
- PricingSection.tsx - Engagement model cards
- CSS prefix: `process-*` and `pricing-*`

### 🟣 Package E: Results & Team
**Priority: MEDIUM**
- ResultsSection.tsx - Metrics and testimonials
- TeamSection.tsx - Team showcase (NEW)
- CSS prefix: `results-*` and `team-*`

### 🟡 Package F: Additional Pages
**Priority: LOW - Can be done later**
- /about/page.tsx - About page (NEW)
- /contact/page.tsx - Contact page (NEW)
- /blog/* - Blog infrastructure (NEW)

### ⚡ Package G: UI Components & Utilities
**Priority: HIGH - Start First**
- Enhanced Button component
- New Card, Input, AnimatedCounter components
- Animation and utility libraries

## Key Design Principles

### Visual Style
- **Colors**: Dark backgrounds, bright CTAs, professional feel
- **Typography**: Bold headings, clean body text
- **Spacing**: Generous whitespace, clear sections
- **Effects**: Subtle animations, smooth transitions

### Content Tone
- **Bold & Direct**: No corporate fluff
- **Confident**: We know what we're doing
- **Results-Focused**: Emphasize outcomes
- **Startup-Friendly**: Speak their language

### Technical Standards
- **TypeScript**: All components must be typed
- **Responsive**: Mobile-first approach
- **Accessible**: WCAG 2.1 AA compliance
- **Performance**: Optimize everything
- **Production-Ready**: No shortcuts or TODOs

## Component Template

```tsx
// Example component structure
import { FC } from 'react';

interface SectionProps {
  className?: string;
  id?: string;
}

export const YourSection: FC<SectionProps> = ({ className = '', id }) => {
  return (
    <section id={id} className={`your-prefix ${className}`}>
      {/* Your content here */}
    </section>
  );
};
```

## CSS Guidelines

```css
/* Use your assigned prefix */
.your-prefix-container {
  /* Mobile first */
  padding: 2rem 1rem;
}

@media (min-width: 768px) {
  .your-prefix-container {
    padding: 4rem 2rem;
  }
}

@media (min-width: 1024px) {
  .your-prefix-container {
    padding: 6rem 4rem;
  }
}
```

## Testing Checklist
- [ ] Component renders without errors
- [ ] Responsive on all breakpoints
- [ ] Keyboard navigable
- [ ] Screen reader compatible
- [ ] No console errors
- [ ] Loading states work
- [ ] Error states handled
- [ ] Animations are smooth
- [ ] Content is readable
- [ ] CTAs are clickable

## Common Pitfalls to Avoid
1. **Don't modify other packages' files**
2. **Don't use generic CSS classes** - use your prefix
3. **Don't skip error handling** in forms
4. **Don't forget loading states**
5. **Don't hardcode values** - use props
6. **Don't skip TypeScript types**
7. **Don't use placeholder content** - use real copy
8. **Don't forget mobile view**

## Resources
- **Copy**: Use `/docs/initdev_positioning.md` for content
- **Process**: Reference `/docs/process_methodology.md`
- **Philosophy**: Check `/docs/technical_philosophy.md`
- **Startup Context**: See `/docs/startup_methodology.md`

## Need Help?
- Check the requirements document first
- Look at existing components for patterns
- Keep components isolated and reusable
- When in doubt, make it beautiful and functional

## Remember: Ship Fast. Scale Smart. Win Markets. 🚀

---

**Your mission**: Build a section that converts visitors into clients. Make it beautiful, make it work, make it ship-ready. No excuses, no shortcuts, just excellent code.
