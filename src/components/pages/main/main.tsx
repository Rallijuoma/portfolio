import React from 'react'
import styles from './main.module.scss'

type MainProps = {

}

const Main: React.FC<MainProps> = () => {
  return (
    <div className={styles.container}>
      <img src='https://i.pinimg.com/originals/31/88/35/318835b0a606b4d2d4cdaa3154ed5aa9.jpg' alt="stickman" className="container"></img>

      <h1><b>Juuso Huuskonen</b></h1>
      <p>Hi! This is my portfolio. Here you will find my cv and few of my projects.</p>

    
      {/* <p>
         Hi! This is my portfolio. Here you will find my cv and few of my projects. <br/> 
         I study information and communication technology at <br/> vocational college Varia: Myyrmäki office. 
        </p> */}
      
      <hr></hr>
    
      <a href="mailto:huuskonen39@gmail.com"><p>Contact Me</p></a>
    </div>
  )
}

export default Main
