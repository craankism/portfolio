import type { JSX } from "react";
import "./App.css";
import Home from "./components/Home";
import { Route, Routes, useLocation } from "react-router";
import WateringSystem from "./components/projects/WateringSystem";
import About from "./components/About";
import Projects from "./components/Projects";
import Calc from "./components/projects/Calc";
import DiscordBot from "./components/projects/DiscordBot";
import Sorter from "./components/projects/Sorter";
import Todo from "./components/projects/Todo";
import { ThemeProvider } from "@emotion/react";
import { Container, createTheme, CssBaseline } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import TopNav from "./components/nav/TopNav";

const theme = createTheme({
  palette: {
    background: { default: "#FFEEDC" },
  },
  typography: {
    h1: { fontSize: "2.5rem", textDecoration: "underline" },
    h2: { fontSize: "2rem" },
    body1: { fontSize: "1rem" },
  },
});

const App = (): JSX.Element => {
  const { pathname } = useLocation();
  const showTopNav = pathname !== "/";

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ pt: showTopNav ? "var(--top-nav-height)" : 0 }}>
        {showTopNav && <TopNav />}
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/calc" element={<Calc />} />
            <Route path="/projects/discord_bot" element={<DiscordBot />} />
            <Route path="/projects/sorter" element={<Sorter />} />
            <Route path="/projects/todo" element={<Todo />} />
            <Route
              path="/projects/watering_system"
              element={<WateringSystem />}
            />
          </Route>
        </Routes>
      </Container>
    </ThemeProvider>
  );
};

export default App;
