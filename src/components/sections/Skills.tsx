
import { Box, Typography } from "@mui/material";
import type { ReactElement } from "react";
import { COLORS, SPACING, SHADOWS, TRANSITIONS } from "../../constants/theme.constants";

const skills = ["Java", "Spring Boot", "JavaScript", "TypeScript", "Node.js", "NestJS", "React", "Docker", "Kubernetes", "AWS"];

const Skills = (): ReactElement => {
  return (
    <Box
      sx={{
        py: SPACING["4xl"],
        px: SPACING.lg,
        background: `linear-gradient(135deg, ${COLORS.background.primary}, ${COLORS.background.secondary})`,
        minHeight: "100vh",
      }}
    >
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
        My Skills
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: SPACING.lg,
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        {skills.map((skill, index) => (
          <Box
            key={index}
            sx={{
              p: SPACING.lg,
              textAlign: "center",
              background: COLORS.background.card,
              border: `1px solid ${COLORS.primary.main}40`,
              borderRadius: "12px",
              boxShadow: SHADOWS.glow,
              transition: `all ${TRANSITIONS.base}`,
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: SHADOWS.glowLarge,
                borderColor: COLORS.primary.main,
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: COLORS.primary.main,
                fontWeight: 600,
              }}
            >
              {skill}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
