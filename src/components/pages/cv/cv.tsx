import React from 'react'
import styles from './cv.module.scss'

type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
    <div className={styles.container}>
      <h1>About Me</h1>
      <h5> I study information and communication technology at <br/> vocational college Varia: Myyrmäki office.</h5> 
        <hr/>

      <h1>Education</h1>
        <h3>Primary School</h3>
        <h5><br/>Studied at Harjulan ala-aste</h5>
        <p><br/>2011 {' > '} 2017</p>
        <h3><br/><br/>Junior High School</h3>
        <h5><br/>Studied at Isoniitun koulu</h5>
        <p><br/> 2017 {' > '} 2020</p>
        <h3><br/><br/>Vocational Qualification</h3>
        <h5><br/>Vocational college Varia: Myyrmäki office</h5>
        <p> <br/>6/08/2020      {'  >' }   </p>
        <hr/>
        
        <br/>
      <h1>Skills</h1>
        <h5>I have programming skills in HTML, CSS, SQL, C# and JS <br/> And basic knowledge on TS, JAVA and 
        </h5>
        <hr/>

      <h1>Work Experience</h1>
        <h6>At Klaukkala office</h6>
        <h5><br/>Postman in on-the-job learning</h5>
        <p><br/>12.2.2018  { '  >  ' } 16.2.2018 <br/>11.2.2019 { ' > ' } 22.2.2019</p>
        <hr/>
      
      <h1>Information</h1>
        <h2>GMAIL:huuskonen39@gmail.com</h2>
        


    </div>
  )
}

export default Cv
