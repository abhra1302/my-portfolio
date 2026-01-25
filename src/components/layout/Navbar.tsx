import { AppBar, Toolbar, Typography, Button, Box, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import type { ReactElement } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { portfolioConfig } from "../../config/portfolio.config";
import { COLORS, TRANSITIONS } from "../../constants/theme.constants";
import BurgerMenu from "../../assets/burger-menu-svgrepo-com.svg";

function Navbar(): ReactElement {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (path: string) => {
    navigate(path);
    setMobileOpen(false);
  };

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
            fontSize: { xs: "1rem", sm: "1.25rem" },
            "&:hover": {
              color: COLORS.primary.light,
            },
          }}
          onClick={() => handleNavClick("/")}
        >
          {portfolioConfig.personal.name}
        </Typography>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
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
              onClick={() => handleNavClick(item.path)}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {/* Mobile Menu Button */}
        <Box
          component="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          sx={{
            display: { xs: "flex", md: "none" },
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            position: "relative",
            width: "32px",
            height: "32px",
            alignItems: "center",
            justifyContent: "center",
            transition: `all ${TRANSITIONS.base}`,
            "&:hover": {
              transform: "scale(1.15)",
              filter: `drop-shadow(0 0 8px ${COLORS.primary.main}) drop-shadow(0 0 16px ${COLORS.accent.cyan})`,
            },
            "&::before": {
              content: '""',
              position: "absolute",
              inset: "-8px",
              borderRadius: "50%",
              background: `radial-gradient(circle, ${COLORS.primary.main}20, transparent)`,
              opacity: mobileOpen ? 1 : 0,
              transition: `opacity ${TRANSITIONS.base}`,
              pointerEvents: "none",
            },
          }}
        >
          <Box
            component="img"
            src={BurgerMenu}
            alt="Menu"
            sx={{
              width: "24px",
              height: "24px",
              filter: `invert(1) drop-shadow(0 0 4px ${COLORS.primary.main})`,
            }}
          />
        </Box>
      </Toolbar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="top"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Box
          sx={{
            bgcolor: COLORS.background.secondary,
            pt: 2,
            pb: 2,
          }}
        >
          <List>
            {portfolioConfig.navigation.map((item) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton
                  onClick={() => handleNavClick(item.path)}
                  sx={{
                    color: COLORS.neutral.white,
                    transition: `all ${TRANSITIONS.base}`,
                    "&:hover": {
                      backgroundColor: `${COLORS.primary.main}20`,
                      color: COLORS.primary.main,
                    },
                  }}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;