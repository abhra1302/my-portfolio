import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import type { ReactElement } from "react";

import theme from "./theme/theme.config";
import globalStyles from "./styles/globalStyles";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Skills from "./components/sections/Skills";

function App(): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      {globalStyles}
      <Router>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100vh",
        }}>
          <Navbar />
          <Box component="main" sx={{
            flex: 1,
            overflow: "auto",
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
    </ThemeProvider>
  );
}

export default App;
