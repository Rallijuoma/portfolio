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
        <p> <br/>6/08/2020      {'  >' }   </p>

        <hr></hr>
        
      <h1>Skills</h1>
      <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/> Adipisci quaerat enim quis fugit facere. Suscipit quas <br/>laboriosam nostrum rem sapiente perferendis inventore voluptatibus <br/> placeat vitae!</h5>
        <hr></hr>

      <h1>Work Experience</h1>
      <h6>At Klaukkala office</h6>
      <h5><br/>Postman in on-the-job learning</h5>
      <p><br/>12.2.2018  { '  >  ' } 16.2.2018 <br/>11.2.2019 { ' > ' } 22.2.2019</p>

    </div>
  )
}

export default Cv
