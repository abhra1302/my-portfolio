import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import type { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { portfolioConfig } from "../../config/portfolio.config";
import { COLORS, TRANSITIONS } from "../../constants/theme.constants";

function Navbar(): ReactElement {
  const navigate = useNavigate();

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", py: 2 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            cursor: "pointer",
            transition: `color ${TRANSITIONS.base}`,
            color: COLORS.primary.main,
            "&:hover": {
              color: COLORS.primary.light,
            },
          }}
          onClick={() => navigate("/")}
        >
          {portfolioConfig.personal.name}
        </Typography>

        <Box sx={{ display: "flex", gap: 1 }}>
          {portfolioConfig.navigation.map((item) => (
            <Button
              key={item.path}
              color="inherit"
              sx={{
                textTransform: "none",
                fontSize: "0.95rem",
                transition: `all ${TRANSITIONS.base}`,
                borderBottom: "2px solid transparent",
                "&:hover": {
                  borderBottomColor: COLORS.primary.main,
                  color: COLORS.primary.main,
                },
              }}
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
