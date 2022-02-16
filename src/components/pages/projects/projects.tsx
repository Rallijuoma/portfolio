import React from 'react'
import styles from './projects.module.scss'

type ProjectsProps = {

}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className={styles.container}>
      <a href='https://github.com/varia-ict/varia-agile-20C-ryhma-2'>Unity group project</a>
    </div>
  )
}

export default Projects
