import { Box, Typography, Container } from "@mui/material";
import type { ReactElement } from "react";
import { portfolioConfig } from "../../config/portfolio.config";
import { COLORS, SPACING, SHADOWS, TRANSITIONS, ANIMATIONS } from "../../constants/theme.constants";

function About(): ReactElement {
  const { about } = portfolioConfig;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: SPACING["4xl"],
        background: `linear-gradient(135deg, ${COLORS.background.primary}, ${COLORS.background.secondary})`,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            mb: SPACING["3xl"],
            textAlign: "center",
            background: `linear-gradient(135deg, ${COLORS.primary.main}, ${COLORS.accent.purple})`,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {about.title}
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            gap: SPACING["3xl"],
            mb: SPACING["4xl"],
          }}
        >
          <Box sx={{ animation: ANIMATIONS.slideLeft }}>
            {about.content.map((paragraph, index) => (
              <Typography
                key={index}
                variant="body1"
                sx={{
                  mb: SPACING.lg,
                  color: COLORS.neutral.gray300,
                  lineHeight: 1.8,
                  fontSize: "1.1rem",
                }}
              >
                {paragraph}
              </Typography>
            ))}
          </Box>

          <Box sx={{ animation: ANIMATIONS.slideRight }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: SPACING.md,
              }}
            >
              {about.highlights.map((highlight, index) => (
                <Box
                  key={index}
                  sx={{
                    p: SPACING.lg,
                    background: COLORS.background.card,
                    border: `1px solid ${COLORS.primary.main}40`,
                    borderLeft: `4px solid ${COLORS.primary.main}`,
                    borderRadius: "8px",
                    transition: `all ${TRANSITIONS.base}`,
                    "&:hover": {
                      borderColor: COLORS.primary.main,
                      boxShadow: SHADOWS.glow,
                      transform: "translateX(8px)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: COLORS.primary.main,
                      fontWeight: 600,
                      fontSize: "1.1rem",
                    }}
                  >
                    {highlight}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default About;
