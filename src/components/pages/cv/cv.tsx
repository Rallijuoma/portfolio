import React from 'react'
import styles from './cv.module.scss'

type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
    <div className={styles.container}>
      
      <h1>CV</h1>

      <img alt="CV"></img>

    </div>
  )
}

export default Cv
