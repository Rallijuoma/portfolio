import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.scss'
import { SocialIcon } from 'react-social-icons'
// import DarkMode from "../DarkMode/darkmode";

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className={styles.container}> 
        <ul>
            <li>
                 <Link to='/'>HOME</Link> 
            </li>
            <li>
                 <Link to='/cv'>CV</Link>
            </li>
            <li>
                 <Link to='/projects'>MY PROJECTS</Link>
            </li>

        </ul>
        <div className={styles.socialIcons}>
          <SocialIcon url='https://www.instagram.com/juuso_huuskonen/' target="_blank"rel="noreferrer"/>
          <SocialIcon url="https://twitter.com/juusohuuskonen" target="_blank" rel="noreferrer"/>
          <SocialIcon url='https://github.com/Rallijuoma' target="_blank"rel="noreferrer"/>
        </div>
        {/* <DarkMode/> */}
    </nav>
  )
}

export default Navbar
