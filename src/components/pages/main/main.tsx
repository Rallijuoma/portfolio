import React from 'react'
import styles from './main.module.scss'

type MainProps = {

}

const Main: React.FC<MainProps> = () => {
  return (
    <div className={styles.container}>
      <img src='https://i.pinimg.com/originals/31/88/35/318835b0a606b4d2d4cdaa3154ed5aa9.jpg' alt="stickman" className="container"></img>

      <h1><b>Juuso Huuskonen</b></h1>
    
      <p>
         Hi! This is my portfolio. Here you will find my cv and few of my projects. <br/> 
         I study information and communication technology at <br/> vocational college Varia: Myyrmäki office. 
     </p>

        <hr></hr>

      <h3>My Skills</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci quaerat enim quis fugit facere. Suscipit quas laboriosam nostrum rem sapiente perferendis inventore voluptatibus placeat vitae!</p>
      
      <hr></hr>
    
    </div>
  )
}

export default Main
