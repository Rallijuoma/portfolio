import React from 'react'
import styles from './projects.module.scss'
import logo from '../media/logo.png'
import pogo from '../media/logo.jpg'
import sogo from '../media/gt.jpg'

type ProjectsProps = {

}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className={styles.container}>
          <a href='https://play.unity.com/mg/other/wall-hopper-mac-build' target="_blank" rel="noreferrer" ><img src= { logo } alt = ''></img></a>
          <p>Playable link to unity group game <br/>This is a 2D platform game. <br/>You have to get trough 5 different levels with<br/> each having a different theme.</p>
          <hr/>
          <a href='https://github.com/varia-ict/varia-agile-20C-ryhma-2' target="_blank" rel="noreferrer" ><img src= { sogo } alt = ''></img> </a>
          <p>This is github page for the game that i have linked.</p>
          <hr/>
          <a href='https://play.unity.com/u/JuusoHuuskonen'  target="_blank" rel="noreferrer" ><img src={ pogo } alt = ''></img></a>
          <p>This is my unity play profile here you will find my unity games and exercises. </p>
          <hr />
          <a href='https://github.com/Rallijuoma/portfolio'><img src={ sogo } alt=''></img></a>
          <p>This is github link to this project.</p>
      
        
      </div>
      
  )
}

export default Projects
