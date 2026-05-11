import type { JSX } from "react";
import { NavLink } from "react-router";
import turtleDuck from "../assets/turtle_duck.jpg";
import { Grid } from "@mui/material";

const Home = (): JSX.Element => {
  return (
    <Grid
      container
      sx={{
        textAlign: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <title>Portfolio</title>
      <Grid size={6}>
        <Grid size={12}>
          <NavLink to="/about" className="flex-item">
            About me
          </NavLink>
        </Grid>
        <Grid size={12}>
          <NavLink to="/projects" className="flex-item">
            Projects
          </NavLink>
        </Grid>

        <Grid size={12}>
          <a
            href="https://github.com/craankism/"
            className="flex-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </Grid>
      </Grid>
            <Grid size={6}>
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
      </Grid>
    </Grid>
  );
};

export default Home;
