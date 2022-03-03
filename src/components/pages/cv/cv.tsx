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
      <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/> Adipisci quaerat enim quis fugit facere. Suscipit quas <br/>laboriosam nostrum rem sapiente perferendis inventore voluptatibus <br/> placeat vitae!</h5>
        <hr></hr>

    </div>
  )
}

export default Cv
