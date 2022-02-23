import React from 'react'
import styles from './main.module.scss'

type MainProps = {

}

const Main: React.FC<MainProps> = () => {
  return (
    <div className={styles.container}>
      <img src='https://eduvantaa-my.sharepoint.com/personal/juuso_huuskonen_opp_eduvantaa_fi/Documents/Juuso_Huuskonen.jpg' alt="stickman" className="container"></img>

      <h1><b>Juuso Huuskonen</b></h1>
    
      <p>
         Hi! This is my portfolio. Here you will find my cv and few of my projects. 
         I study information and communication technology at vocational college Varia: Myyrmäki office. 
     </p>

        <hr></hr>

      <h3>My Skills</h3>
      <p> 
          I have programming skills on C#, HTML, CSS and SQL.
          I also have basic knowledge on Java, JS and TS.
        </p>
      
      <hr></hr>
    
    </div>
  )
}

export default Main
