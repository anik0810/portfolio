import React from "react"
import logo1 from "../pic/anik-logo.png"
import './footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
  let myStyle={
    color:"orange"
  }
  return (
    <>
      <footer>
        <div className='footer'>
          <div className='img'>
            <img src={logo1} alt='' />
            <h>ANIK</h>
          </div>
          <div className="social">
            <a href="https://www.facebook.com/profile.php?id=100049449395575" style={myStyle}><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://www.instagram.com/_.anik._08.07/" style={myStyle}><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://github.com/anik0810" style={myStyle}><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/anik-dutta-86526021b/" style={myStyle}><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="mailto:anikdutta0810@gmail.com" style={myStyle}><FontAwesomeIcon icon={faEnvelope} /></a>
          </div>
        </div>
      </footer>
      <hr/>
      <p style={{textAlign:"center",padding:"1rem"}}>© Anik Dutta - 2022 .</p>
    </>
  )
}

export default Footer
