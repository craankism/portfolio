import type { JSX } from "react";
import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router";
import WateringSystem from "./components/projects/WateringSystem";
import About from "./components/About";
import Projects from "./components/Projects";
import Calc from "./components/projects/Calc";
import DiscordBot from "./components/projects/DiscordBot";
import Sorter from "./components/projects/Sorter";
import Todo from "./components/projects/Todo";

const App = (): JSX.Element => {
  return (
    <>
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
    </>
  );
};

export default App;
