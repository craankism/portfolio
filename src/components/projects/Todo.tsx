import type { JSX } from "react";
import TopNav from "../nav/TopNav";

const Todo = (): JSX.Element => {
  return (
    <>
      <head>
        <title>To-Do List</title>
      </head>

      <body className="combine_containers">
        <TopNav />
        <main className="content">
          <h1 className="content-item">To-Do List</h1>
          <a href="https://github.com/craankism/todo">
            <img
              className="content-item logo"
              src="../src/assets/GitHub_Lockup_Black.svg"
              alt="GitHub Link to Repository"
            />
          </a>
          <p className="content-item">
            This is a simple To-Do List. It is coded with Java and JavaFX. I
            also added a version control with GitHub Actions (release-please).
            You have a checkbox and a textfield, when you check the box, you
            mark the task complete. If the task is completed it will cross out
            the task. You can save tasks, by clicking the save button in the top
            left corner. The tasks are saved to a txt file and when you reopen
            the application, it loads the tasks inside the file.
          </p>
          <a href="https://calc.craankism.com">
            <img
              id="todo"
              className="content-item logo"
              src="../static/img/todo.png"
              alt="To Do List Demo"
            />
          </a>
        </main>
      </body>
    </>
  );
};

export default Todo;
