import styles from './Projects.module.css'

interface Project {
  title: string
  description: string
  link: string
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A personal site built with React and Vite.",
    link: "https://github.com/baileyhamersly"
  },
  {
    title: "UI Component Library",
    description: "Reusable React components styled with Tailwind.",
    link: "https://github.com/baileyhamersly"
  }
]

const Projects: React.FC = () => {
  return (
    <section className={styles.projects} id="projects">
      <h2>Projects</h2>
      <div className={styles.grid}>
        {projects.map((project, idx) => (
          <div key={idx} className={styles.card}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project →</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
