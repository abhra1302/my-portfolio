import { Box, Typography, Container } from "@mui/material";
import type { ReactElement } from "react";
import { portfolioConfig } from "../../config/portfolio.config";
import { COLORS, SPACING, SHADOWS } from "../../constants/theme.constants";

function Projects(): ReactElement {
  const { projects } = portfolioConfig;
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: SPACING["4xl"],
        px: SPACING.lg,
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
          Projects
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
          }}
        >
          {featuredProjects.map((project, index) => (
            <Box
              key={project.id}
              sx={{
                background: COLORS.background.card,
                border: `1px solid ${COLORS.primary.main}40`,
                borderRadius: "12px",
                p: SPACING.lg,
                display: "flex",
                flexDirection: "column",
                transition: `all 200ms cubic-bezier(0.4, 0, 0.2, 1)`,
                cursor: "pointer",
                animation: `slideUp 0.6s ease-out ${index * 0.1}s backwards`,
                "&:hover": {
                  transform: "translateY(-8px)",
                  borderColor: COLORS.primary.main,
                  boxShadow: SHADOWS.glowLarge,
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: COLORS.primary.main,
                  mb: SPACING.md,
                  fontWeight: 600,
                }}
              >
                {project.title}
              </Typography>
              <Typography
                sx={{
                  color: COLORS.neutral.gray300,
                  mb: SPACING.lg,
                  flex: 1,
                  lineHeight: 1.6,
                }}
              >
                {project.description}
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: SPACING.sm }}>
                {project.technologies.map((tech) => (
                  <Box
                    key={tech}
                    sx={{
                      px: SPACING.md,
                      py: SPACING.sm,
                      backgroundColor: `${COLORS.primary.main}20`,
                      borderRadius: "20px",
                      fontSize: "0.85rem",
                      color: COLORS.primary.main,
                      border: `1px solid ${COLORS.primary.main}40`,
                    }}
                  >
                    {tech}
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        {projects.length > 0 && (
          <Box sx={{ textAlign: "center", mt: SPACING["4xl"] }}>
            <Typography sx={{ color: COLORS.neutral.gray400 }}>
              {projects.length} total projects · {featuredProjects.length} featured
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default Projects;
