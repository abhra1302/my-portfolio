import { Box, Typography, Button } from "@mui/material";
import type { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { portfolioConfig } from "../../config/portfolio.config";
import { ANIMATIONS, SPACING, SHADOWS, TRANSITIONS } from "../../constants/theme.constants";
import { useThemeColors } from "../../hooks/useThemeColors";

function Hero(): ReactElement {
  const navigate = useNavigate();
  const { hero, footer } = portfolioConfig;
  const COLORS = useThemeColors();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: SPACING.lg,
        background: `linear-gradient(135deg, ${COLORS.background.primary}, ${COLORS.background.secondary})`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Decorative Elements */}
      <Box
        sx={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${COLORS.accent.cyan}20, transparent)`,
          top: "-100px",
          right: "-100px",
          pointerEvents: "none",
          animation: ANIMATIONS.float,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${COLORS.accent.purple}20, transparent)`,
          bottom: "-50px",
          left: "-100px",
          pointerEvents: "none",
          animation: `${ANIMATIONS.float} 8s ease-in-out infinite`,
        }}
      />

      {/* Content */}
      <Box sx={{ position: "relative", zIndex: 1, maxWidth: "900px" }}>
        <Typography
          variant="h1"
          sx={{
            mb: SPACING.lg,
            background: `linear-gradient(135deg, ${COLORS.primary.main}, ${COLORS.accent.purple})`,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: ANIMATIONS.slideUp,
            fontSize: { xs: "2.5rem", sm: "3.5rem", md: "5rem" },
          }}
        >
          {hero.headline}
        </Typography>

        <Typography
          variant="h5"
          sx={{
            mb: SPACING["3xl"],
            color: COLORS.neutral.gray300,
            animation: `${ANIMATIONS.slideUp} 0.6s ease-out 0.2s backwards`,
            fontSize: { xs: "1rem", md: "1.25rem" },
          }}
        >
          {hero.subheadline}
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: SPACING.lg,
            justifyContent: "center",
            flexWrap: "wrap",
            animation: `${ANIMATIONS.slideUp} 0.6s ease-out 0.4s backwards`,
          }}
        >
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate(hero.ctaAction)}
            sx={{
              px: SPACING["2xl"],
              py: SPACING.lg,
              fontSize: "1.1rem",
              background: `linear-gradient(135deg, ${COLORS.primary.main}, ${COLORS.accent.cyan})`,
              boxShadow: SHADOWS.glow,
              transition: `all ${TRANSITIONS.base}`,
              "&:hover": {
                boxShadow: SHADOWS.glowLarge,
                transform: "translateY(-4px)",
              },
            }}
          >
            {hero.ctaText}
          </Button>
        </Box>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          py: SPACING.md,
          textAlign: "center",
          color: COLORS.neutral.gray300,
        }}
      >
        {/* Social Links */}
        <Box sx={{ display: "flex", gap: SPACING.lg, justifyContent: "center", mb: SPACING.md }}>
          {portfolioConfig.social.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: COLORS.primary.main,
                textDecoration: "none",
                transition: `color ${TRANSITIONS.base}`,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.primary.light)}
              onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.primary.main)}
            >
              {link.name}
            </a>
          ))}
        </Box>
        <Typography variant="body2">
          {footer.copyright}
        </Typography>
      </Box>
    </Box>
  );
}

export default Hero;
