import React from 'react'
import styles from './main.module.scss'

type MainProps = {

}

const Main: React.FC<MainProps> = () => {
  return (
    <div className={styles.container}>
      <h1><b>Juuso Huuskonen</b></h1>

    <p>Hi! This is my portfolio. Here you will find my cv and few of my projects.</p>

    <h3>My Skills</h3>

    </div>
  )
}

export default Main
