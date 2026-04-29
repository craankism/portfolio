import type { JSX } from "react";
import { NavLink } from "react-router";
import turtleDuck from "../assets/turtle_duck.jpg";

const Home = (): JSX.Element => {
  return (
    <>
      <head>
        <title>Portfolio</title>
      </head>

      <body>
        <main className="flex-container-big">
          <a
            href="https://github.com/craankism/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="flex-item"
              id="icon"
              src={turtleDuck}
              alt="Turtle Duck from Avatar"
            />
          </a>
          <nav className="navigation">
            <NavLink to="/about" className="flex-item">
              About me
            </NavLink>
            <NavLink to="/projects" className="flex-item">
              Projects
            </NavLink>
            <a
              href="https://github.com/craankism/"
              className="flex-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </nav>
        </main>
      </body>
    </>
  );
};

export default Home;
