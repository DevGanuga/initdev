# InitDev

Next.js website for InitDev - a dev agency focused on rapid MVP development for startups.

## Setup

```bash
# Install deps
npm install

# Run dev server
npm run dev

# Build for production
npm run build
npm run start
```

## Stack

- Next.js 15.4.6 with App Router
- TypeScript
- Tailwind CSS v4
- Framer Motion for animations
- React Hook Form + Zod for forms

## Project Structure

```
src/
├── app/            # Next.js app router pages
├── components/     # React components
│   ├── layout/     # Header, Footer, Nav
│   ├── sections/   # Page sections
│   └── ui/         # Reusable UI components
├── lib/            # Utils and helpers
├── hooks/          # Custom hooks
└── types/          # TypeScript types
```

## Development

### Branch Strategy
- `main` - production
- `develop` - staging
- `feature/*` - new features
- `hotfix/*` - urgent fixes

### Commits
Use conventional commits:
```
feat: add contact form
fix: mobile nav menu
docs: update readme
chore: update deps
```

### Environment Variables
Copy `.env.example` to `.env.local` and fill in your values. Never commit `.env.local`.

## Testing

```bash
npm run test        # Run tests
npm run lint        # Lint code
npm run type-check  # TypeScript check
```

## Deployment

The site auto-deploys via Vercel:
- Production: pushes to `main`
- Preview: all other branches

## API Routes

- `POST /api/contact` - Contact form submission
- `POST /api/newsletter` - Newsletter signup
- `POST /api/demo` - Demo request

## Performance

Target metrics:
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1

## Security

Basic security headers are configured in `next.config.ts`. Form inputs are validated with Zod schemas. Rate limiting should be configured at the edge (Vercel/Cloudflare).

## Documentation

Additional docs in `/docs`:
- `website_requirements_v2.md` - Current site requirements
- `technical_philosophy.md` - Engineering principles
- `startup_methodology.md` - How we work with startups
- `component_architecture.md` - Component design patterns

## Team

This is an internal repository. For questions, hit up the team on Slack.

## License

Proprietary. All rights reserved.