import type { JSX } from "react";
import TopNav from "../nav/TopNav";

const Calc = (): JSX.Element => {
  return (
    <>
      <head>
        <title>Calculator</title>
      </head>

      <body className="combine_containers">
        <TopNav />
        <main className="content">
          <h1 className="content-item">Calculator</h1>
          <a href="https://github.com/craankism/calc">
            <img
              className="content-item logo"
              src="../src/assets/GitHub_Lockup_Black.svg"
              alt="GitHub Link to Repository"
            />
          </a>
          <p className="content-item">
            I build a simple calculator application on a webserver using HTML,
            CSS, and JavaScript for the Frontend, Go for the Backend and GitHub
            Actions for the CI/CD workflow. The application is currently
            displayed on a <a href="https://calc.craankism.com">website</a>. It
            uses a parser to transform the terms into RPN (Reverse Polish
            Notation). After that, the RPN is calculated using the Shunting Yard
            algorithm.
          </p>
          <a href="https://calc.craankism.com">
            <img
              className="content-item logo"
              src="../src/assets/calc.png"
              alt="Calculator Demo"
            />
          </a>
        </main>
      </body>
    </>
  );
};

export default Calc;
