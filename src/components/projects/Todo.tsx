import type { JSX } from "react";
import githubLogo from "../../assets/GitHub_Lockup_Black.svg";
import todoImage from "../../assets/todo.png";
import { Grid, Typography } from "@mui/material";

const Todo = (): JSX.Element => {
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
      <title>To-Do List</title>
      <Grid size={6}>
        <Typography variant="h1">To-Do List</Typography>
      </Grid>
      <Grid size={6}>
        <a href={githubLogo}>
          <img
            className="content-item logo"
            src={githubLogo}
            alt="GitHub Link to Repository"
          />
        </a>
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
