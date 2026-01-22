import { Box, Typography, Button } from "@mui/material";
import type { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { portfolioConfig } from "../../config/portfolio.config";
import { COLORS, ANIMATIONS, SPACING, SHADOWS, TRANSITIONS } from "../../constants/theme.constants";

function Hero(): ReactElement {
  const navigate = useNavigate();
  const { hero } = portfolioConfig;

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
          <Button
            variant="outlined"
            size="large"
            sx={{
              px: SPACING["2xl"],
              py: SPACING.lg,
              fontSize: "1.1rem",
              borderColor: COLORS.primary.main,
              color: COLORS.primary.main,
              transition: `all ${TRANSITIONS.base}`,
              "&:hover": {
                borderColor: COLORS.primary.light,
                backgroundColor: `${COLORS.primary.main}15`,
                transform: "translateY(-4px)",
              },
            }}
          >
            View My Work
          </Button>
        </Box>
      </Box>

      {/* Scroll Indicator */}
      <Box
        sx={{
          position: "absolute",
          bottom: SPACING["2xl"],
          left: "50%",
          transform: "translateX(-50%)",
          animation: `${ANIMATIONS.float} 2s ease-in-out infinite`,
        }}
      >
        <Typography sx={{ color: COLORS.primary.main, mb: SPACING.sm }}>Scroll to explore</Typography>
        <Box
          sx={{
            width: "24px",
            height: "40px",
            border: `2px solid ${COLORS.primary.main}`,
            borderRadius: "12px",
            mx: "auto",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              top: "8px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "4px",
              height: "8px",
              backgroundColor: COLORS.primary.main,
              borderRadius: "2px",
              animation: `${ANIMATIONS.float} 1.5s ease-in-out infinite`,
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default Hero;
