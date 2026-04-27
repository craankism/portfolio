import type { JSX } from "react";
import { NavLink } from "react-router";

const Home = (): JSX.Element => {
  return (
    <>
      <head>
        <title>Portfolio</title>
      </head>

      <body>
        <main className="flex-container-big">
          <NavLink to="https://github.com/craankism/">
            <img
              className="flex-item"
              id="icon"
              src="../src/assets/turtle_duck.jpg"
              alt="Turtle Duck from Avatar"
            />
          </NavLink>
          <nav className="navigation">
            <NavLink to="/about" className="flex-item">
              About me
            </NavLink>
            <NavLink to="/projects" className="flex-item">
              Projects
            </NavLink>
            <NavLink to="https://github.com/craankism/" className="flex-item">
              GitHub
            </NavLink>
          </nav>
        </main>
      </body>
    </>
  );
};

export default Home;
