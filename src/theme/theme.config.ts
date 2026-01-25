/**
 * Theme Configuration
 * This file creates the Material-UI theme object using theme constants.
 * All styling decisions come from the theme to maintain consistency.
 */

import { createTheme } from "@mui/material/styles";
import { TYPOGRAPHY, SPACING, BORDER_RADIUS, SHADOWS, TRANSITIONS } from "../constants/theme.constants";
import { LIGHT_COLORS, DARK_COLORS } from "../constants/colors";

export function createThemeConfig(mode: "light" | "dark") {
  const COLORS = mode === "light" ? LIGHT_COLORS : DARK_COLORS;

  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: COLORS.primary.main,
        dark: COLORS.primary.dark,
        light: COLORS.primary.light,
        contrastText: mode === "light" ? COLORS.neutral.black : COLORS.neutral.white,
      },
      secondary: {
        main: COLORS.secondary.main,
        dark: COLORS.secondary.dark,
        light: COLORS.secondary.light,
        contrastText: mode === "light" ? COLORS.neutral.black : COLORS.neutral.white,
      },
      background: {
        default: COLORS.background.primary,
        paper: COLORS.background.secondary,
      },
      text: {
        primary: mode === "light" ? COLORS.neutral.black : COLORS.neutral.white,
        secondary: mode === "light" ? COLORS.neutral.gray600 : COLORS.neutral.gray300,
      },
      divider: mode === "light" ? COLORS.neutral.gray300 : COLORS.neutral.gray700,
      success: {
        main: COLORS.status.success,
      },
      warning: {
        main: COLORS.status.warning,
      },
      error: {
        main: COLORS.status.error,
      },
      info: {
        main: COLORS.status.info,
      },
    },

  typography: {
    fontFamily: TYPOGRAPHY.fontFamily.primary,
    fontSize: parseInt(TYPOGRAPHY.fontSize.base),
    fontWeightLight: TYPOGRAPHY.fontWeight.light,
    fontWeightRegular: TYPOGRAPHY.fontWeight.normal,
    fontWeightMedium: TYPOGRAPHY.fontWeight.medium,
    fontWeightBold: TYPOGRAPHY.fontWeight.bold,
    h1: {
      fontSize: TYPOGRAPHY.fontSize["5xl"],
      fontWeight: TYPOGRAPHY.fontWeight.extrabold,
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontSize: TYPOGRAPHY.fontSize["4xl"],
      fontWeight: TYPOGRAPHY.fontWeight.extrabold,
      lineHeight: 1.3,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontSize: TYPOGRAPHY.fontSize["3xl"],
      fontWeight: TYPOGRAPHY.fontWeight.bold,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: TYPOGRAPHY.fontSize["2xl"],
      fontWeight: TYPOGRAPHY.fontWeight.bold,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: TYPOGRAPHY.fontSize.xl,
      fontWeight: TYPOGRAPHY.fontWeight.semibold,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: TYPOGRAPHY.fontSize.lg,
      fontWeight: TYPOGRAPHY.fontWeight.semibold,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: TYPOGRAPHY.fontSize.base,
      lineHeight: 1.6,
    },
    body2: {
      fontSize: TYPOGRAPHY.fontSize.sm,
      lineHeight: 1.6,
    },
  },

  spacing: (factor: number) => `${0.25 * factor}rem`,

  shape: {
    borderRadius: parseInt(BORDER_RADIUS.lg),
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.background.secondary,
          backgroundImage: `linear-gradient(135deg, ${COLORS.background.secondary}, ${COLORS.background.tertiary})`,
          borderBottom: `1px solid ${COLORS.primary.main}40`,
          boxShadow: `0 4px 20px ${COLORS.primary.main}20`,
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: TYPOGRAPHY.fontWeight.semibold,
          transition: `all ${TRANSITIONS.base}`,
          borderRadius: BORDER_RADIUS.lg,
          padding: `${SPACING.md} ${SPACING.lg}`,
        },
        contained: {
          background: `linear-gradient(135deg, ${COLORS.primary.main}, ${COLORS.accent.purple})`,
          boxShadow: SHADOWS.glow,
          "&:hover": {
            boxShadow: SHADOWS.glowLarge,
            transform: "translateY(-2px)",
            background: `linear-gradient(135deg, ${COLORS.primary.light}, ${COLORS.accent.purple})`,
          },
          "&:active": {
            transform: "translateY(0)",
          },
        },
        outlined: {
          borderColor: COLORS.primary.main,
          color: COLORS.primary.main,
          "&:hover": {
            backgroundColor: `${COLORS.primary.main}10`,
            borderColor: COLORS.primary.light,
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.background.card,
          borderRadius: BORDER_RADIUS.xl,
          border: `1px solid ${COLORS.primary.main}30`,
          boxShadow: SHADOWS.md,
          backdropFilter: "blur(10px)",
          transition: `all ${TRANSITIONS.base}`,
          "&:hover": {
            borderColor: COLORS.primary.main,
            boxShadow: SHADOWS.glow,
            transform: "translateY(-4px)",
          },
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            backgroundColor: `${COLORS.background.tertiary}40`,
            borderRadius: BORDER_RADIUS.lg,
            transition: `all ${TRANSITIONS.base}`,
            "& fieldset": {
              borderColor: `${COLORS.primary.main}40`,
            },
            "&:hover fieldset": {
              borderColor: `${COLORS.primary.main}60`,
            },
            "&.Mui-focused fieldset": {
              borderColor: COLORS.primary.main,
              boxShadow: SHADOWS.glow,
            },
          },
          "& .MuiOutlinedInput-input": {
            color: COLORS.neutral.white,
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.background.card,
          borderRadius: BORDER_RADIUS.lg,
          border: `1px solid ${COLORS.primary.main}20`,
          backdropFilter: "blur(10px)",
        },
      },
    },
  },
  });

  return theme;
}

export default createThemeConfig("dark");
