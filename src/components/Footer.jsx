import { Github, Linkedin, Mail } from "./SVG";

export default function Footer() {
  return (
    <footer>
      <h2>sush semwal &bull; cs major @ gehu</h2>
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
        <small>&copy; memphis 2k24. All Right Reserved.</small>
      </p>
    </footer>
  );
}
