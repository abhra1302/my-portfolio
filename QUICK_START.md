# Quick Customization Cheatsheet

## Change Your Name & Title (5 minutes)

Edit `src/config/portfolio.config.ts`:

```typescript
personal: {
  name: "Your Name",           // Your name
  title: "Your Job Title",     // Your profession
  description: "About you",    // Brief description
  email: "you@email.com",      // Your email
},
```

## Add Your Projects (10 minutes)

In the same file, update the `projects` array:

```typescript
projects: [
  {
    id: 1,
    title: "Project Name",
    description: "What it does",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/yourname/project",
    image: undefined,
    featured: true,  // Show on homepage
  },
  // Add more projects
],
```

## Add Your Skills (5 minutes)

```typescript
skills: [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "CSS", "Material UI"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "AWS", "Firebase"],
  },
],
```

## Update About Section (10 minutes)

```typescript
about: {
  title: "About Me",
  content: [
    "Paragraph 1 about yourself",
    "Paragraph 2 about your experience",
    "Paragraph 3 about your goals",
  ],
  highlights: [
    "10+ years experience",
    "Expert in React & Node.js",
    "Passionate about clean code",
    "Always learning",
  ],
},
```

## Change Theme Colors (5 minutes)

Edit `src/constants/theme.constants.ts`:

```typescript
export const COLORS = {
  primary: {
    main: "#your-color",    // Main color
    dark: "#darker-shade",
    light: "#lighter-shade",
  },
  accent: {
    cyan: "#color1",
    purple: "#color2",
    pink: "#color3",
    blue: "#color4",
  },
};
```

## Change Fonts (2 minutes)

In `theme.constants.ts`:

```typescript
fontFamily: {
  primary: "'Your Font', sans-serif",
  secondary: "'Another Font', sans-serif",
  mono: "'Monospace Font', monospace",
},
```

## Use Different Font Sizes (3 minutes)

```typescript
fontSize: {
  xs: "0.75rem",
  sm: "0.875rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  // ... customize more
},
```

## Add Navigation Links (5 minutes)

```typescript
navigation: [
  { label: "Home", path: "/", icon: "home" },
  { label: "About", path: "/about", icon: "person" },
  { label: "Projects", path: "/projects", icon: "work" },
  { label: "Skills", path: "/skills", icon: "code" },
  { label: "Contact", path: "/contact", icon: "email" },
  // Add your custom links
],
```

## Customize Hero Section (5 minutes)

```typescript
hero: {
  headline: "Your Headline Here",
  subheadline: "Your subheadline description",
  ctaText: "Button Text",  // Call to action
  ctaAction: "/about",     // Where button links to
},
```

## Edit Contact Form Fields (3 minutes)

```typescript
contact: {
  title: "Get In Touch",
  description: "How to contact message",
  fields: [
    { name: "name", label: "Your Name", type: "text", required: true },
    { name: "email", label: "Your Email", type: "email", required: true },
    { name: "subject", label: "Subject", type: "text", required: false },
    { name: "message", label: "Message", type: "textarea", required: true },
  ],
},
```

## Edit Social Links (5 minutes)

```typescript
social: [
  {
    name: "GitHub",
    url: "https://github.com/yourname",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourname",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourname",
    icon: "twitter",
  },
],
```

## Change Spacing (3 minutes)

```typescript
export const SPACING = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "2.5rem",
  // Use in sx: p: SPACING.lg
};
```

## Common Customizations Quick Links

| Want to change | File | Location |
|---|---|---|
| Your name/info | portfolio.config.ts | `personal` object |
| Projects shown | portfolio.config.ts | `projects` array |
| Skills displayed | portfolio.config.ts | `skills` array |
| Colors/theme | theme.constants.ts | `COLORS` object |
| Fonts | theme.constants.ts | `TYPOGRAPHY.fontFamily` |
| Spacing | theme.constants.ts | `SPACING` object |
| Animations | theme.constants.ts | `ANIMATIONS` object |
| Material-UI theme | theme.config.ts | Full theme object |

## Copy Existing Styles Pattern

All components use the same pattern:

```typescript
sx={{
  // From constants
  background: `linear-gradient(135deg, ${COLORS.primary.main}, ${COLORS.accent.purple})`,
  mb: SPACING["3xl"],
  color: COLORS.neutral.white,
  boxShadow: SHADOWS.glow,
  transition: `all ${TRANSITIONS.base}`,
  animation: ANIMATIONS.slideUp,
}}
```

Always import from theme constants, never hardcode values.

## Run Locally

```bash
npm install      # Install dependencies
npm run dev      # Start dev server (localhost:5173)
npm run build    # Create production build
npm run lint     # Check for errors
```

## Create a New Theme Variant

1. Create a backup of `theme.constants.ts`
2. Change colors in `COLORS` object
3. Adjust fonts in `TYPOGRAPHY`
4. Change spacing if needed
5. Run `npm run dev` to see changes instantly

## File You'll Edit Most

**`src/config/portfolio.config.ts`** - This is where 90% of customization happens!

- Personal information
- Projects
- Skills
- About section
- Contact info
- Social links
- Navigation

Everything else is styling and can be left as-is for a great-looking portfolio.

---

**Total customization time: 30-45 minutes from zero to complete portfolio!** ⚡
