import styles from './Header.module.css'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>Bailey Hamersly</h1>
      <p>Frontend Developer crafting clean and interactive UIs.</p>
      <div className={styles.links}>
        <a href="#projects">Projects</a>
        <a href="mailto:baileyhamersly+portfolio@gmail.com">Contact</a>
        <a href="https://github.com/baileyhamersly" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </header>
  )
}

export default Header
