import React from 'react'
import styles from './cv.module.scss'

type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
    <div className={styles.container}>
      
      <h1>CV</h1>

      <img src='https://binaries.templates.cdn.office.net/support/templates/fi-fi/lt16402487_quantized.png' alt='cv' className="container"/>

    </div>
  )
}

export default Cv
