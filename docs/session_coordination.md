# Session Coordination Guide

## Current Session Task Distribution

This document tracks which packages are being worked on in the current session to prevent conflicts.

## Work Package Status

| Package | Description | Agent | Status | Branch | Last Updated |
|---------|-------------|-------|--------|--------|--------------|
| A | Core Layout & Navigation | Available | Pending | feature/package-a-layout | - |
| B | Hero & CTA Sections | Available | Pending | feature/package-b-hero-cta | - |
| C | Services & Technology | Available | Pending | feature/package-c-services | - |
| D | Process & Pricing | Available | Pending | feature/package-d-process | - |
| E | Results & Team | Available | Pending | feature/package-e-results | - |
| F | Additional Pages | Available | Pending | feature/package-f-pages | - |
| G | UI Components & Utilities | Available | Pending | feature/package-g-ui | - |

## How to Claim a Package

1. **Check Availability**: Ensure package shows "Available"
2. **Update Status**: Change to "In Progress" with your agent ID
3. **Create Branch**: Use the designated branch name
4. **Start Work**: Follow the package guidelines
5. **Update on Completion**: Mark as "Complete" when done

## Recommended Work Order

### Session 1 (Foundations)
Start these packages first as others depend on them:
- **Package G**: UI Components (Button, Card, etc.)
- **Package A**: Navigation & Footer

### Session 2 (Core Sections)
These can be worked on in parallel:
- **Package B**: Hero & CTA
- **Package C**: Services & Technology
- **Package D**: Process & Pricing
- **Package E**: Results & Team

### Session 3 (Extensions)
After core is complete:
- **Package F**: Additional Pages
- Integration tasks
- Performance optimization
- Testing & QA

## Communication Protocol

### Starting Work
```markdown
CLAIMING: Package [X] - [Description]
Branch: feature/package-[x]-[name]
Estimated Time: [X] hours
Dependencies: None / Package [Y]
```

### Completing Work
```markdown
COMPLETED: Package [X] - [Description]
Branch: feature/package-[x]-[name]
Files Modified: [List files]
Ready for: Review / Integration
Notes: [Any important notes]
```

### Requesting Help
```markdown
BLOCKED: Package [X] - [Description]
Issue: [Describe the blocker]
Need: [What you need to continue]
```

## Integration Checklist

When a package is complete, verify:

- [ ] All TypeScript types are defined
- [ ] No linting errors
- [ ] Component exports are correct
- [ ] CSS uses correct prefixes
- [ ] Mobile responsive tested
- [ ] No console errors
- [ ] Documentation comments added
- [ ] Props are well-defined
- [ ] Error states handled
- [ ] Loading states implemented

## Merge Strategy

1. **Individual Testing**: Test package in isolation
2. **Integration Branch**: Merge to `develop` branch first
3. **Full Testing**: Test with all other packages
4. **Production Ready**: Merge to `main` when stable

## Quick Commands

```bash
# Start work on a package
git checkout -b feature/package-[x]-[description]

# Check current status
git status

# Stage and commit changes
git add .
git commit -m "Package [X]: [Description of changes]"

# Push to remote
git push origin feature/package-[x]-[description]

# Create pull request
# Use GitHub/GitLab UI to create PR to develop branch
```

## File Ownership Map

```
/src/components/
├── layout/
│   ├── Navigation.tsx    [Package A]
│   └── Footer.tsx        [Package A]
├── sections/
│   ├── HeroSection.tsx   [Package B]
│   ├── CTASection.tsx    [Package B]
│   ├── ServicesSection.tsx [Package C]
│   ├── TechnologySection.tsx [Package C - NEW]
│   ├── ProcessSection.tsx [Package D]
│   ├── PricingSection.tsx [Package D]
│   ├── ResultsSection.tsx [Package E]
│   └── TeamSection.tsx    [Package E - NEW]
├── ui/
│   ├── Button.tsx        [Package G]
│   ├── Card.tsx          [Package G - NEW]
│   ├── Input.tsx         [Package G - NEW]
│   └── AnimatedCounter.tsx [Package G - NEW]
└── lib/
    ├── utils.ts          [Package G - NEW]
    └── animations.ts     [Package G - NEW]

/src/app/
├── about/page.tsx        [Package F - NEW]
├── contact/page.tsx      [Package F - NEW]
├── blog/
│   ├── page.tsx          [Package F - NEW]
│   └── [slug]/page.tsx   [Package F - NEW]
└── globals.css           [Shared - use prefixes]
```

## Conflict Resolution

If two agents need to modify the same file:
1. **Check if it can be split**: Can you create separate components?
2. **Use CSS prefixes**: Ensure no style conflicts
3. **Coordinate timing**: One completes before other starts
4. **Create interfaces**: Define clear component boundaries

## Notes

- **DO NOT** modify `.env` files - User will handle
- **DO NOT** commit `node_modules` or build files
- **DO** write production-ready code from the start
- **DO** follow the InitDev philosophy: Ship Fast, Scale Smart
- **DO** make it beautiful - this represents our capabilities

## Session Goals

By the end of this session, we should have:
1. ✅ All UI components created and typed
2. ✅ Navigation and Footer complete
3. ✅ At least 3 main sections implemented
4. ✅ Responsive design working
5. ✅ Basic animations in place
6. ✅ No linting errors
7. ✅ Production-ready code

---

**Remember**: We're building InitDev's face to the world. Make it exceptional. 🚀
