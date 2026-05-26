import { Github, Linkedin } from "./SVG";
export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <h1>
            <span class="fa-solid fa-code"></span>
            <span>memphis</span>
          </h1>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="./about.html">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>{" "}
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ayush-semwal-602183285/">
            <Linkedin />
          </a>{" "}
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
