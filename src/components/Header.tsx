import styles from "./Header.module.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>Bailey Hamersly</h1>
      <p>Frontend Developer crafting clean and interactive UIs.</p>
      <div className={styles.links}>
        <a href="#projects">Projects</a>
        <a target="_blank" href="/Bailey_Hamersly_Resume_2025.pdf">
          Downloadable Resume
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/bailey-hamersly-17b711b0/"
        >
          <FaLinkedin
            style={{ width: "24px", height: "24px", color: "white"
             }}
          />
        </a>
        <a
          target="_blank"
          href="https://github.com/baileyhamersly"
          rel="noopener noreferrer"
        >
          <FaGithub
            style={{ width: "24px", height: "24px", color: "white" }}/>
        </a>
      </div>
    </header>
  );
};

export default Header;
