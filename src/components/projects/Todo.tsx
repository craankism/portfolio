import type { JSX } from "react";
import githubLogo from "../../assets/GitHub_Invertocat_Black.svg";
import todoImage from "../../assets/todo.png";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import {
  githubLogoStyleMD,
  githubLogoStyleXS,
} from "../../constants/githubLogoStyle";

const Todo = (): JSX.Element => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Grid
      container
      spacing={2}
      sx={{
        alignItems: "center",
        textAlign: "center",
        pt: { xs: 2, md: 3 },
      }}
    >
      <Grid size={12}>
        <Typography variant="h1">To-Do List</Typography>
      </Grid>
      <Grid size={12}>
        <Box
          onClick={() => window.open("https://github.com/craankism/todo", "_blank")}
          sx={{ cursor: "pointer" }}
        >
          <img
            className="content-item logo"
            src={githubLogo}
            alt="GitLab Link to Repository"
            style={isMdUp ? githubLogoStyleMD : githubLogoStyleXS}
          />
        </Box>
      </Grid>
      <Grid size={12}>
        This is a simple To-Do List. It is coded with Java and JavaFX. I also
        added a version control with GitHub Actions (release-please). You have a
        checkbox and a textfield, when you check the box, you mark the task
        complete. If the task is completed it will cross out the task. You can
        save tasks, by clicking the save button in the top left corner. The
        tasks are saved to a txt file and when you reopen the application, it
        loads the tasks inside the file.
      </Grid>
      <Grid size={12}>
        <a href="https://calc.craankism.com">
          <img
            id="todo"
            className="content-item logo"
            src={todoImage}
            alt="To Do List Demo"
          />
        </a>
      </Grid>
    </Grid>
  );
};

export default Todo;
