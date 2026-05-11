import { Grid } from "@mui/material";
import type { JSX } from "react";
import { NavLink } from "react-router";

const Projects = (): JSX.Element => {
  return (
    <Grid
      container
      sx={{ 
        textAlign: "center", 
        alignItems: "center", 
        pt: { xs: 2, md: 3 },
        height: "90vh",
       }}
    >
      <title>Projects</title>
      <Grid size={12}>
        <NavLink to="watering_system" className="flex-item">
          Watering System
        </NavLink>
      </Grid>
      <Grid size={12}>
        <NavLink to="calc" className="flex-item">
          Calculator
        </NavLink>
      </Grid>

      <Grid size={12}>
        <NavLink to="sorter" className="flex-item">
          Sorter
        </NavLink>
      </Grid>

      <Grid size={12}>
        <NavLink to="todo" className="flex-item">
          To-Do List
        </NavLink>
      </Grid>
      <Grid size={12}>
        <NavLink to="discord_bot" className="flex-item">
          Discord Bot
        </NavLink>
      </Grid>
    </Grid>
  );
};

export default Projects;
