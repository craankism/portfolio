import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";
import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";
import Calc from "./components/projects/Calc.tsx";
import DiscordBot from "./components/projects/DiscordBot.tsx";
import Sorter from "./components/projects/Sorter.tsx";
import Todo from "./components/projects/Todo.tsx";
import WateringSystem from "./components/projects/WateringSystem.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<App />} />
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
    </BrowserRouter>
  </StrictMode>,
);
