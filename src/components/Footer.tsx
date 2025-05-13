import styles from './Footer.module.css'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Bailey Hamersly</p>
    </footer>
  )
}

export default Footer
