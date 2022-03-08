import React from 'react'
import styles from './projects.module.scss'

type ProjectsProps = {

}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className={styles.container}>
          <a href='https://github.com/varia-ict/varia-agile-20C-ryhma-2' target="_blank" rel="noreferrer" > Unity group project github page</a>
          <a href='https://play.unity.com/mg/other/wall-hopper-mac-build' target="_blank" rel="noreferrer" >Playable link to the unity group project</a>
          <p>This is a 2D platform game. You have to get trough 5 different levels with each having a different theme.
          </p>
          <a href='https://play.unity.com/u/JuusoHuuskonen'  target="_blank" rel="noreferrer" >My unity play profile</a>
          <p>This is my unity play profile here you will find my unity games and exercises. </p>
      </div>
      
  )
}

export default Projects
