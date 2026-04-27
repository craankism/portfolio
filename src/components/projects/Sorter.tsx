import type { JSX } from "react";
import TopNav from "../nav/TopNav";

const Sorter = (): JSX.Element => {
  return (
    <>
      <head>
        <title>Sorter</title>
      </head>

      <body className="combine_containers">
        <TopNav />
        <main className="content">
          <h1 className="content-item">Sorter</h1>
          <a href="https://github.com/craankism/sorter">
            <img
              className="content-item logo"
              src="../src/assets/GitHub_Lockup_Black.svg"
              alt="GitHub Link to Repository"
            />
          </a>
          <p className="content-item">
            I used a bubble sort algorithm to sort a list of names
            alphabetically. I used Go as the language and GitHub Actions for the
            CI/CD workflow to automatically deploy new releases.
          </p>
          <ul className="content-item list-start">
            <h2>Text Input Example:</h2>
            <li>Wishek</li>
            <li>Davilla</li>
            <li>Vanalstyne</li>
            <li>Tiesiding</li>
            <li>Honaunau</li>
            <li>Volin</li>
            <li>Caledonia</li>
            <li>Monon</li>
            <li>Loraine</li>
            <li>Renville</li>
          </ul>
          <ul className="content-item list-start">
            <h2>Sorted Output Example:</h2>
            <li>Caledonia</li>
            <li>Davilla</li>
            <li>Honaunau</li>
            <li>Loraine</li>
            <li>Monon</li>
            <li>Renville</li>
            <li>Tiesiding</li>
            <li>Vanalstyne</li>
            <li>Volin</li>
            <li>Wishek</li>
          </ul>
        </main>
      </body>
    </>
  );
};

export default Sorter;
