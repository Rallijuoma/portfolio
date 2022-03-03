import React from 'react'
import styles from './cv.module.scss'

type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
    <div className={styles.container}>
      
      <h1>Education</h1>

        <h3>Vocational qualification</h3>
        <h5>Vocational college Varia: Myyrmäki office</h5>
        <p> 6/08/2020      {'  >' }   </p>

        <hr></hr>
        
      <h1>Skills</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci quaerat enim quis fugit facere. Suscipit quas laboriosam nostrum rem sapiente perferendis inventore voluptatibus placeat vitae!</p>


    </div>
  )
}

export default Cv
