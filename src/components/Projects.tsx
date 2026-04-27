import type { JSX } from "react";
import TopNav from "./nav/TopNav";
import { NavLink } from "react-router";

const Projects = (): JSX.Element => {
  return (
    <>
      <head>
        <title>Projects</title>
      </head>

      <body className="combine_containers">
        <TopNav />
        <main className="flex-container-big">
          <nav className="navigation">
            <NavLink to="watering_system" className="flex-item">
              Watering System
            </NavLink>
            <NavLink to="calc" className="flex-item">
              Calculator
            </NavLink>
            <NavLink to="sorter" className="flex-item">
              Sorter
            </NavLink>
            <NavLink to="todo" className="flex-item">
              To-Do List
            </NavLink>
            <NavLink to="discord_bot" className="flex-item">
              Discord Bot
            </NavLink>
          </nav>
        </main>
      </body>
    </>
  );
};

export default Projects;
