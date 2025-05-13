import styles from './App.module.css'
import Header from './components/Header'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.content}>
        <Projects />
        <Footer />
      </div>
    </div>
  )
}

export default App
