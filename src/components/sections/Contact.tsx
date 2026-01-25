
import { Box, Button, TextField, Typography, Container } from "@mui/material";
import type { ReactElement } from "react";
import { SPACING, SHADOWS, TRANSITIONS } from "../../constants/theme.constants";
import { useThemeColors } from "../../hooks/useThemeColors";

const Contact = (): ReactElement => {
  const COLORS = useThemeColors();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: SPACING["4xl"],
        px: SPACING.lg,
        background: `linear-gradient(135deg, ${COLORS.background.primary}, ${COLORS.background.secondary})`,
      }}
    >
      <Container maxWidth="md">
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
          Contact Me
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            background: COLORS.background.card,
            border: `1px solid ${COLORS.primary.main}40`,
            borderRadius: "12px",
            p: SPACING["3xl"],
            display: "flex",
            flexDirection: "column",
            gap: SPACING.lg,
            boxShadow: SHADOWS.glow,
          }}
        >
          <TextField
            fullWidth
            label="Your Name"
            variant="outlined"
            type="text"
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                color: COLORS.neutral.gray300,
                "& fieldset": {
                  borderColor: `${COLORS.primary.main}40`,
                },
                "&:hover fieldset": {
                  borderColor: COLORS.primary.main,
                },
                "&.Mui-focused fieldset": {
                  borderColor: COLORS.primary.main,
                },
              },
              "& .MuiOutlinedInput-input": {
                color: COLORS.neutral.gray300,
              },
              "& .MuiInputBase-input::placeholder": {
                color: COLORS.neutral.gray500,
                opacity: 1,
              },
              "& .MuiInputLabel-root": {
                color: COLORS.neutral.gray400,
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: COLORS.primary.main,
              },
            }}
          />
          <TextField
            fullWidth
            label="Your Email"
            variant="outlined"
            type="email"
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                color: COLORS.neutral.gray300,
                "& fieldset": {
                  borderColor: `${COLORS.primary.main}40`,
                },
                "&:hover fieldset": {
                  borderColor: COLORS.primary.main,
                },
                "&.Mui-focused fieldset": {
                  borderColor: COLORS.primary.main,
                },
              },
              "& .MuiOutlinedInput-input": {
                color: COLORS.neutral.gray300,
              },
              "& .MuiInputBase-input::placeholder": {
                color: COLORS.neutral.gray500,
                opacity: 1,
              },
              "& .MuiInputLabel-root": {
                color: COLORS.neutral.gray400,
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: COLORS.primary.main,
              },
            }}
          />
          <TextField
            fullWidth
            label="Your Message"
            variant="outlined"
            multiline
            rows={5}
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                color: COLORS.neutral.gray300,
                "& fieldset": {
                  borderColor: `${COLORS.primary.main}40`,
                },
                "&:hover fieldset": {
                  borderColor: COLORS.primary.main,
                },
                "&.Mui-focused fieldset": {
                  borderColor: COLORS.primary.main,
                },
              },
              "& .MuiOutlinedInput-input": {
                color: COLORS.neutral.gray300,
              },
              "& .MuiInputBase-input::placeholder": {
                color: COLORS.neutral.gray500,
                opacity: 1,
              },
              "& .MuiInputLabel-root": {
                color: COLORS.neutral.gray400,
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: COLORS.primary.main,
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              background: `linear-gradient(90deg, ${COLORS.primary.main}, ${COLORS.accent.purple})`,
              color: COLORS.neutral.white,
              py: SPACING.md,
              fontWeight: 600,
              fontSize: "1rem",
              boxShadow: SHADOWS.glow,
              transition: `all ${TRANSITIONS.base}`,
              "&:hover": {
                background: `linear-gradient(90deg, ${COLORS.accent.purple}, ${COLORS.primary.main})`,
                boxShadow: SHADOWS.glowLarge,
                transform: "translateY(-2px)",
              },
            }}
          >
            Send Message
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
