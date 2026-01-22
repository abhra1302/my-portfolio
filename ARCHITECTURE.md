# Architecture & Development Guide

## System Overview

This portfolio template follows **industry-standard React architecture** with a clear separation of concerns:

```
┌─────────────────────────────────────────┐
│          Theme System (Centralized)      │
│  - theme.constants.ts (Colors, Spacing) │
│  - theme.config.ts (MUI Theme)          │
│  - globalStyles.tsx (Animations)        │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│       Configuration Layer                │
│  - portfolio.config.ts (All data)       │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│      Presentational Components           │
│  - All styling from theme only          │
│  - Data from config only                │
│  - No hardcoded styles or data          │
└─────────────────────────────────────────┘
```

## Design Principles

### 1. Single Responsibility Principle
Each component does one thing well:
- `Navbar.tsx` - Only handles navigation
- `Hero.tsx` - Only displays hero section
- `Projects.tsx` - Only shows projects

### 2. Separation of Concerns
- **Data** → `portfolio.config.ts`
- **Styling** → `theme.constants.ts` + `theme.config.ts`
- **UI** → Components
- **Animations** → `globalStyles.tsx`

### 3. DRY (Don't Repeat Yourself)
- Colors used once (in theme)
- Spacing values centralized
- Animations defined once
- No duplicate styling

### 4. Configuration Over Code
- Modify config, not components
- Easy to swap data
- Reusable across projects

## File-by-File Architecture

### `src/config/portfolio.config.ts`
**Purpose:** Single source of truth for all content

```typescript
export const portfolioConfig = {
  personal: { ... },      // Personal info
  social: [ ... ],        // Social links
  navigation: [ ... ],    // Menu items
  hero: { ... },          // Hero section data
  about: { ... },         // About section data
  projects: [ ... ],      // Projects array
  skills: [ ... ],        // Skills array
  contact: { ... },       // Contact info
  footer: { ... },        // Footer info
}
```

**Why?** 
- Easy to update all content without touching components
- Can be easily swapped with different config
- Type-safe with TypeScript

### `src/constants/theme.constants.ts`
**Purpose:** All design tokens (colors, spacing, typography)

```typescript
export const COLORS = { ... }        // 50+ colors
export const TYPOGRAPHY = { ... }    // Fonts, sizes
export const SPACING = { ... }       // 10 spacing values
export const SHADOWS = { ... }       // 10 shadow styles
export const TRANSITIONS = { ... }   // Animation timings
export const ANIMATIONS = { ... }    // Animation names
export const ZINDEX = { ... }        // Z-index scale
```

**Why?**
- Consistent design across entire app
- Easy to change theme (change one file)
- Type-safe access to design tokens

### `src/theme/theme.config.ts`
**Purpose:** Material-UI theme configuration

```typescript
createTheme({
  palette: { ... },        // Colors
  typography: { ... },     // Font styles
  spacing: ...,            // Spacing function
  components: { ... },     // Component overrides
})
```

**Why?**
- MUI component styling
- Global component styles
- Dark mode setup

### `src/styles/globalStyles.tsx`
**Purpose:** Global CSS and animations

```typescript
// Global styles
body { ... }
#root { ... }
main { ... }

// Animations
@keyframes slideUp { ... }
@keyframes fadeIn { ... }
@keyframes glow { ... }
```

**Why?**
- Animations can't be defined in MUI theme
- Global element styles
- Reusable CSS classes

### Components (`src/components/`)
**Purpose:** Render UI using theme and config

Pattern for every component:

```typescript
import { Box, Typography, Container } from "@mui/material";
import { portfolioConfig } from "../../config/portfolio.config";
import { COLORS, SPACING, ANIMATIONS } from "../../constants/theme.constants";

function Component(): ReactElement {
  const { section } = portfolioConfig;  // Get data
  
  return (
    <Box sx={{                           // Use theme
      background: `linear-gradient(
        135deg,
        ${COLORS.primary.main},
        ${COLORS.accent.purple}
      )`,
      p: SPACING.lg,
      animation: ANIMATIONS.slideUp,
    }}>
      {section.content}                  // Render data
    </Box>
  );
}
```

**Rules:**
- ❌ No hardcoded colors
- ❌ No hardcoded spacing
- ❌ No hardcoded animations
- ✅ Import from constants
- ✅ Use sx prop for styling
- ✅ Read data from config

## Data Flow

```
portfolio.config.ts
        ↓
    Component
        ↓
    Render with theme styling
        ↓
    User sees styled content
```

**Example: Displaying a Project**

```typescript
// 1. Data comes from config
const { projects } = portfolioConfig;

// 2. Component reads it
projects.map(project => (
  // 3. Styled with theme constants
  <Card sx={{
    background: COLORS.background.card,
    border: `1px solid ${COLORS.primary.main}40`,
  }}>
    {/* 4. Content from data */}
    <Typography>{project.title}</Typography>
    <Typography>{project.description}</Typography>
  </Card>
))
```

## Adding a New Feature

### Step 1: Add Data to Config
```typescript
// portfolio.config.ts
export const portfolioConfig = {
  // ... existing config
  myNewFeature: {
    title: "Feature Title",
    items: [ ... ],
  }
}
```

### Step 2: Create Component
```typescript
// components/sections/MyFeature.tsx
import { portfolioConfig } from "../../config/portfolio.config";
import { COLORS, SPACING } from "../../constants/theme.constants";

function MyFeature() {
  const { myNewFeature } = portfolioConfig;
  
  return (
    <Box sx={{ p: SPACING.lg }}>
      <Typography>{myNewFeature.title}</Typography>
      {/* Render myNewFeature.items */}
    </Box>
  );
}
```

### Step 3: Add Route
```typescript
// App.tsx
<Route path="/myfeature" element={<MyFeature />} />
```

### Step 4: Add Navigation
```typescript
// portfolio.config.ts
navigation: [
  { label: "My Feature", path: "/myfeature", icon: "star" },
]
```

Done! No styling needed.

## Theme Switching

To create multiple themes:

### Option 1: Create Theme Variants
```typescript
// theme.constants.ts
export const THEMES = {
  light: {
    COLORS: { primary: { main: "#007bff" } },
  },
  dark: {
    COLORS: { primary: { main: "#00d4ff" } },
  },
}
```

### Option 2: Environment-based Themes
```typescript
// Different theme files for different environments
import theme from process.env.THEME_NAME;
```

### Option 3: Runtime Theme Switch
```typescript
// Add theme selector to navbar
const [theme, setTheme] = useState('default');
```

## Component Best Practices

### ✅ Good Component
```typescript
function About(): ReactElement {
  const { about } = portfolioConfig;
  
  return (
    <Container maxWidth="lg">
      <Typography variant="h2" sx={{
        mb: SPACING.lg,
        color: COLORS.primary.main,
      }}>
        {about.title}
      </Typography>
      {about.content.map((p) => (
        <Typography key={p}>{p}</Typography>
      ))}
    </Container>
  );
}
```

### ❌ Bad Component
```typescript
function About(): ReactElement {
  return (
    <div style={{ padding: "20px", color: "#00d4ff" }}>
      <h2 style={{ marginBottom: "20px" }}>About</h2>
      <p>Hardcoded content</p>
    </div>
  );
}
```

## Performance Optimization

### Current Optimizations
- ✅ CSS Grid for efficient layouts
- ✅ Minimal animations (GPU accelerated)
- ✅ Tree-shaking enabled
- ✅ Code splitting with React Router
- ✅ Lazy component loading possible

### Add More Optimizations
```typescript
// Lazy load components
const Projects = lazy(() => import('./components/sections/Projects'));
const Skills = lazy(() => import('./components/sections/Skills'));

// In routing
<Suspense fallback={<Box>Loading...</Box>}>
  <Route path="/projects" element={<Projects />} />
</Suspense>
```

## TypeScript Best Practices

### Define Config Types
```typescript
interface PersonalInfo {
  name: string;
  title: string;
  email: string;
}

interface Project {
  id: number;
  title: string;
  technologies: string[];
  featured: boolean;
}
```

### Use in Config
```typescript
export const portfolioConfig = {
  personal: { ... } as PersonalInfo,
  projects: [ ... ] as Project[],
}
```

## Testing (Future Enhancement)

```typescript
// Example test structure
describe('About Component', () => {
  it('renders about title', () => {
    render(<About />);
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });
  
  it('renders all content paragraphs', () => {
    render(<About />);
    expect(screen.getAllByRole('paragraph')).toHaveLength(3);
  });
});
```

## Responsive Design Patterns

### Pattern 1: Responsive Grid
```typescript
sx={{
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",           // Mobile
    sm: "1fr 1fr",       // Tablet
    md: "repeat(3, 1fr)", // Desktop
  },
}}
```

### Pattern 2: Responsive Typography
```typescript
sx={{
  fontSize: {
    xs: "1.5rem",  // Mobile
    md: "2.5rem",  // Desktop
  },
}}
```

### Pattern 3: Responsive Spacing
```typescript
sx={{
  p: {
    xs: SPACING.md,  // Mobile
    md: SPACING.lg,  // Desktop
  },
}}
```

## Deployment Checklist

- [ ] Update portfolio.config.ts with your info
- [ ] Update COLORS in theme.constants.ts
- [ ] Update social links
- [ ] Add all projects
- [ ] Add skills
- [ ] Test on mobile (npm run dev)
- [ ] Run linter (npm run lint)
- [ ] Build (npm run build)
- [ ] Deploy dist folder
- [ ] Test deployed site

## Troubleshooting

### Issue: Colors not changing
**Solution:** Check if you imported from `COLORS` constant

### Issue: Spacing inconsistent
**Solution:** Use `SPACING` constant, not hardcoded px

### Issue: Component not visible
**Solution:** Check z-index in `ZINDEX` scale

### Issue: Animation stuttering
**Solution:** Use GPU-accelerated properties (transform, opacity)

## Contributing to This Template

If improving the template:

1. Keep theme-based approach
2. No hardcoded colors/spacing
3. Update tests if modifying
4. Update documentation
5. Follow TypeScript strict mode
6. Follow ESLint rules

---

**This architecture ensures:**
- ✅ Maintainability
- ✅ Reusability
- ✅ Scalability
- ✅ Consistency
- ✅ Type Safety
- ✅ Easy Customization
