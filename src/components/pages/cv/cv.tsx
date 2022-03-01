import React from 'react'
import styles from './cv.module.scss'

type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
    <div className={styles.container}>
      
      <h1>EDUCATION</h1>

        <h3>Vocational qualification</h3>
        <h6>Vocational college Varia: Myyrmäki office</h6>
        <p>6/08/2020  {'  >'}</p>
          
       

    </div>
  )
}

export default Cv
