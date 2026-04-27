import type { JSX } from "react";
import { NavLink } from "react-router";

const TopNav = (): JSX.Element => {
  return (
    <header className="flex-container-small">
      <nav className="navigation-top">
        <NavLink to="/" className="flex-item-top">
          Home
        </NavLink>
        <NavLink to="/about" className="flex-item-top">
          About me
        </NavLink>
        <NavLink to="/projects" className="flex-item-top">
          Projects
        </NavLink>
        <a href="https://github.com/craankism/" className="flex-item-top">
          GitHub
        </a>
        <a href="/src/assets/cv.pdf" className="flex-item-top">
          Resume
        </a>
      </nav>
    </header>
  );
};

export default TopNav;
