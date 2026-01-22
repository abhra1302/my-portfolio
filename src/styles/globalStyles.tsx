/**
 * Global Styles
 * This file contains global CSS animations and styles that are used throughout the application.
 * All theme-dependent styles come from the theme system.
 */

import { GlobalStyles as MuiGlobalStyles } from "@mui/material";
import { COLORS, ANIMATIONS, SHADOWS } from "../constants/theme.constants";

const globalStyles = (
  <MuiGlobalStyles
    styles={{
      // Reset and base styles
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },

      html: {
        scrollBehavior: "smooth",
      },

      body: {
        backgroundColor: COLORS.background.primary,
        color: COLORS.neutral.white,
        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
      },

      "#root": {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      },

      // Main content area
      main: {
        flex: 1,
        overflowY: "auto",
      },

      // Scrollbar Styling
      "::-webkit-scrollbar": {
        width: "8px",
        height: "8px",
      },

      "::-webkit-scrollbar-track": {
        background: COLORS.background.secondary,
      },

      "::-webkit-scrollbar-thumb": {
        background: COLORS.primary.main,
        borderRadius: "4px",
        "&:hover": {
          background: COLORS.primary.light,
        },
      },

      // Selection
      "::selection": {
        backgroundColor: COLORS.primary.main,
        color: COLORS.background.primary,
      },

      // Animations
      "@keyframes glow": {
        "0%": {
          textShadow: `0 0 10px ${COLORS.primary.main}, 0 0 20px ${COLORS.primary.main}`,
        },
        "100%": {
          textShadow: `0 0 20px ${COLORS.primary.main}, 0 0 40px ${COLORS.primary.main}`,
        },
      },

      "@keyframes glowPulse": {
        "0%, 100%": {
          opacity: 0.5,
          boxShadow: SHADOWS.glow,
        },
        "50%": {
          opacity: 1,
          boxShadow: SHADOWS.glowLarge,
        },
      },

      "@keyframes float": {
        "0%, 100%": {
          transform: "translateY(0px)",
        },
        "50%": {
          transform: "translateY(-20px)",
        },
      },

      "@keyframes slideUp": {
        "0%": {
          opacity: 0,
          transform: "translateY(20px)",
        },
        "100%": {
          opacity: 1,
          transform: "translateY(0)",
        },
      },

      "@keyframes slideDown": {
        "0%": {
          opacity: 0,
          transform: "translateY(-20px)",
        },
        "100%": {
          opacity: 1,
          transform: "translateY(0)",
        },
      },

      "@keyframes slideLeft": {
        "0%": {
          opacity: 0,
          transform: "translateX(20px)",
        },
        "100%": {
          opacity: 1,
          transform: "translateX(0)",
        },
      },

      "@keyframes slideRight": {
        "0%": {
          opacity: 0,
          transform: "translateX(-20px)",
        },
        "100%": {
          opacity: 1,
          transform: "translateX(0)",
        },
      },

      "@keyframes fadeIn": {
        "0%": {
          opacity: 0,
        },
        "100%": {
          opacity: 1,
        },
      },

      "@keyframes scaleIn": {
        "0%": {
          opacity: 0,
          transform: "scale(0.95)",
        },
        "100%": {
          opacity: 1,
          transform: "scale(1)",
        },
      },

      "@keyframes shimmer": {
        "0%": {
          backgroundPosition: "-1000px 0",
        },
        "100%": {
          backgroundPosition: "1000px 0",
        },
      },

      // Utility animations
      ".animate-glow": {
        animation: ANIMATIONS.glow,
      },

      ".animate-glow-pulse": {
        animation: ANIMATIONS.glowPulse,
      },

      ".animate-float": {
        animation: ANIMATIONS.float,
      },

      ".animate-slide-up": {
        animation: ANIMATIONS.slideUp,
      },

      ".animate-slide-down": {
        animation: ANIMATIONS.slideDown,
      },

      ".animate-slide-left": {
        animation: ANIMATIONS.slideLeft,
      },

      ".animate-slide-right": {
        animation: ANIMATIONS.slideRight,
      },

      ".animate-fade-in": {
        animation: ANIMATIONS.fadeIn,
      },

      ".animate-scale-in": {
        animation: ANIMATIONS.scaleIn,
      },
    }}
  />
);

export default globalStyles;
