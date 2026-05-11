import type { JSX } from "react";
import { NavLink } from "react-router";
import cv from "../../assets/cv.pdf";

const TopNav = (): JSX.Element => {
  return (
    <div className="flex-container-small">
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
        <a
          href={cv}
          className="flex-item-top"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </nav>
    </div>
  );
};

export default TopNav;
