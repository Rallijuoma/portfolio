import React from 'react'
import styles from './projects.module.scss'

type ProjectsProps = {

}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className={styles.container}>
          <a href='https://github.com/varia-ict/varia-agile-20C-ryhma-2' target="_blank" rel="noreferrer" > Unity group project github page</a>
          <a href='https://play.unity.com/mg/other/wall-hopper-mac-build' target="_blank" rel="noreferrer" >Playable link to the unity group project</a>
          <a href='https://github.com/Rallijuoma/portfolio'  target="_blank" rel="noreferrer" >Github page for portfolio</a>
          <a href='https://play.unity.com/u/JuusoHuuskonen'  target="_blank" rel="noreferrer" >My unity play profile</a>
      </div>
      
  )
}

export default Projects
