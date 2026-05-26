import { Github, Linkedin, Mail } from "./SVG";

export default function Footer() {
  return (
    <footer>
      <h2>Ayush Semwal &bull; CS Major </h2>
      <ul>
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
          <a href="mailto:ayus43@outlook.com">
            <Mail />
          </a>
        </li>
      </ul>
      <p>
        <small>&copy; neoayus 2k24</small>
      </p>
    </footer>
  );
}
