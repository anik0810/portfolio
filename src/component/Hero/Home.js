import React from "react"
import "./Home.css"
import hero from "../pic/anik-hero.png"
import shape from '../pic/shape.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Typewriter } from "react-simple-typewriter"
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  let myStyle = {
    color: "orange"
  }
  return (
    <>
      <section className='hero' id='home'>
        <div className='container'>
          <div data-aos="fade-right" className='left'>
            <h1>
              Hi, I'm <span>Anik</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Coder.", " Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>I'm Anik Dutta from West Bengal,India.Currently, I'm pursuing my B.Tech in Computer Science Engineering at Sister Nivedita University.
              I have keen interests on Web Development, Cloud Computing and Competitive Programming .
              In 2022 I've a goal to learn advance Data Structure Algorithm to polish my skills.
              </p>

            <div className="social">
              <a href="https://www.linkedin.com/in/anik-dutta-86526021b/" style={myStyle}><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="mailto:anikdutta0810@gmail.com" style={myStyle}><FontAwesomeIcon icon={faEnvelope} /></a>
              <a href="https://www.instagram.com/_.anik._08.07/" style={myStyle}><FontAwesomeIcon icon={faInstagram} /></a>
            </div>

          </div>
          <div className='right'>
            <img src={hero} alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
