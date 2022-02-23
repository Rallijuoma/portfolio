import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.scss'
import { SocialIcon } from 'react-social-icons'

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

            <SocialIcon url="https://twitter.com/juusohuuskonen" target="_blank" />
            <SocialIcon url='https://www.instagram.com/juuso_huuskonen/' target="_blank"/>
            <SocialIcon url='https://github.com/Rallijuoma' target="_blank"/>
            <SocialIcon url='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWsLSCxPzfGzhrdFKfmXrVVPCtVRqvFVKWnLjZTfRHMhqZmqLNZkSJBbCzCbJwxKpWcbLDSLl' target="_blank<"/>
        </ul>
    </nav>
  )
}

export default Navbar
