import React from 'react'
import styles from './projects.module.scss'
import logo from '../media/logo.png'

type ProjectsProps = {

}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className={styles.container}>
      <a href='https://github.com/varia-ict/varia-agile-20C-ryhma-2'>Unity group project github page</a>
      <a href='https://play.unity.com/mg/other/wall-hopper-mac-build'>
          <img src='.../media/unitypewi.png' alt=''/>
          Playable link to the unity group project
      </a>

      <a href='https://github.com/Rallijuoma/portfolio'>Github page for portfolio</a>
      <a href='https://play.unity.com/u/JuusoHuuskonen'>My unity play profile</a>
    </div>
  )
}

export default Projects
