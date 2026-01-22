/**
 * Theme Constants
 * This file contains all theme-related constants used throughout the portfolio.
 * Modify these values to create different themed portfolios without touching components.
 */

// Color Palette
export const COLORS = {
  // Primary Colors
  primary: {
    main: "#118de6",
    dark: "#0099cc",
    light: "#33e0ff",
  },
  // Secondary Colors
  secondary: {
    main: "#ff006e",
    dark: "#c2185d",
    light: "#ff69b4",
  },
  // Neutral Colors
  neutral: {
    white: "#ffffff",
    black: "#000000",
    gray50: "#f9fafb",
    gray100: "#f3f4f6",
    gray200: "#e5e7eb",
    gray300: "#d1d5db",
    gray400: "#9ca3af",
    gray500: "#6b7280",
    gray600: "#4b5563",
    gray700: "#374151",
    gray800: "#1f2937",
    gray900: "#111827",
  },
  // Background Colors
  background: {
    primary: "#0a0e27",
    secondary: "#1a1f3a",
    tertiary: "#2d3561",
    card: "rgba(13, 16, 43, 0.8)",
  },
  // Accent Colors
  accent: {
    cyan: "#00d4ff",
    purple: "#a855f7",
    pink: "#ec4899",
    blue: "#3b82f6",
  },
  // Status Colors
  status: {
    success: "#10b981",
    warning: "#f59e0b",
    error: "#ef4444",
    info: "#06b6d4",
  },
};

// Typography
export const TYPOGRAPHY = {
  fontFamily: {
    primary: "'Inter', 'Helvetica Neue', sans-serif",
    secondary: "'Poppins', 'Helvetica Neue', sans-serif",
    mono: "'JetBrains Mono', 'Courier New', monospace",
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
};

// Spacing
export const SPACING = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "2.5rem",
  "3xl": "3rem",
  "4xl": "4rem",
  "5xl": "5rem",
};

// Border Radius
export const BORDER_RADIUS = {
  none: "0",
  sm: "0.375rem",
  md: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
  full: "9999px",
};

// Shadows
export const SHADOWS = {
  none: "none",
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
  glow: "0 0 20px rgba(0, 212, 255, 0.4)",
  glowLarge: "0 0 40px rgba(0, 212, 255, 0.6)",
  glowPurple: "0 0 20px rgba(168, 85, 247, 0.4)",
  glowPink: "0 0 20px rgba(236, 72, 153, 0.4)",
};

// Breakpoints (MUI)
export const BREAKPOINTS = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

// Transitions
export const TRANSITIONS = {
  fast: "150ms cubic-bezier(0.4, 0, 1, 1)",
  base: "200ms cubic-bezier(0.4, 0, 0.2, 1)",
  slow: "350ms cubic-bezier(0.4, 0, 0.2, 1)",
};

// Animation Names and Durations
export const ANIMATIONS = {
  glow: "glow 2s ease-in-out infinite",
  glowPulse: "glowPulse 3s ease-in-out infinite",
  float: "float 6s ease-in-out infinite",
  slideUp: "slideUp 0.6s ease-out",
  slideDown: "slideDown 0.6s ease-out",
  slideLeft: "slideLeft 0.6s ease-out",
  slideRight: "slideRight 0.6s ease-out",
  fadeIn: "fadeIn 0.6s ease-out",
  scaleIn: "scaleIn 0.6s ease-out",
  shimmer: "shimmer 2s infinite",
};

// Z-Index Scale
export const ZINDEX = {
  hide: -1,
  base: 0,
  dropdown: 100,
  sticky: 200,
  fixed: 300,
  backdrop: 400,
  offcanvas: 500,
  modal: 600,
  popover: 700,
  tooltip: 800,
};
