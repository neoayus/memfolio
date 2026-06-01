import { Link } from "react-router-dom";
import { Github, Linkedin, Code } from "./SVG";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/#intro">
            <h1>
              <Code />
              <span> portfolio</span>
            </h1>
          </Link>
        </li>
        <li>
          <Link to="/#projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/#contact">Contact</Link>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ayush-semwal-602183285/">
            <Linkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/neoayus">
            <Github />
          </a>
        </li>
        <li>
          <a href="#resume" class="button">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
