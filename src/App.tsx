import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import type { ReactElement } from "react";

import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { createThemeConfig } from "./theme/theme.config";
import { createGlobalStyles } from "./styles/globalStyles";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Skills from "./components/sections/Skills";

function AppContent(): ReactElement {
  const { mode } = useTheme();
  const theme = createThemeConfig(mode);
  const globalStyles = createGlobalStyles(mode);

  return (
    <MuiThemeProvider theme={theme}>
      {globalStyles}
      <Router basename="/my-portfolio">
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          minHeight: "100vh",
        }}>
          <Navbar />
          <Box component="main" sx={{
            flex: 1,
            width: "100%",
          }}>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </MuiThemeProvider>
  );
}

function App(): ReactElement {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
