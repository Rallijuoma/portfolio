import React from 'react'
import styles from './cv.module.scss'
import { educationData, workData } from './cvData'
import Education from './educard/education'
import Work from './workcard/work'
import gmail from '../media/gm.png'
import { SocialIcon } from 'react-social-icons'

type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
    <div className={styles.container}>
      <h1>About Me</h1>
      <h5> I study information and communication technology at <br/> vocational college Varia: Myyrmäki office.</h5> 
      <hr/>

      <h1>Education</h1>
      {
        educationData.map(eduItem => <Education eduItem={eduItem} key={eduItem.key}/>)
      } 
      <hr/>

      <h1>Skills</h1>
        <h5>I have programming skills in HTML, CSS, SQL, C# and JS <br/> And basic knowledge on TS, JAVA and </h5>
      <hr/>

      <h1>Work Experience</h1>
      {
        workData.map(workItem => <Work workItem={workItem} key={workItem.key}/>)
      }
      <hr/>
      
      <h1>Contact Me</h1>
        {/* <h2>GMAIL:huuskonen39@gmail.com</h2> */}
        <a href="mailto:huuskonen39@gmail.com"><img src={ gmail } alt="" /></a>
        <div className={styles.socialIcons}>
          <SocialIcon url='https://www.instagram.com/juuso_huuskonen/' target="_blank"rel="noreferrer"/>
          <SocialIcon url="https://twitter.com/juusohuuskonen" target="_blank" rel="noreferrer"/>
      </div>



    </div>
  )
}

export default Cv
