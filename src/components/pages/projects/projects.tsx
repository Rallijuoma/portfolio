import React from 'react'
import styles from './projects.module.scss'

type ProjectsProps = {

}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className={styles.container}>
      <a href='https://github.com/varia-ict/varia-agile-20C-ryhma-2'>Unity group project github page</a>
      <a href='https://play.unity.com/mg/other/wall-hopper-mac-build'>Playable link to the unity group project</a>
      <a href='https://github.com/Rallijuoma/portfolio'>Github page for portfolio</a>
    </div>
  )
}

export default Projects
