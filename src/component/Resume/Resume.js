import React from "react"
import "./Resume.css"
import ResumeApi from "./ResumeApi"
import Card from "./Card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const Resume = () => {
  return (
    <>
      <section className='Resume' id='resume'>
        <div className='container top'>
          <div className='top text-center'>
            <h1 data-aos="fade-up">My <span>Resume</span></h1>
          </div>

          <div data-aos="fade-up" className='content-section mtop d_flex'>
            <div className='left'>
              <div className='heading'>
                <h1>Achievements</h1>
              </div>

              <div className='content'>
                {ResumeApi.map((val, id) => {
                  if (val.category === "achievment") {
                    return <Card key={id} title={val.title} year={val.year} desc={val.desc} />
                  }
                })}

              </div>
            </div>
            <div className='left'>
              <div className='heading'>
                <h1>Skills</h1>
              </div>

              <div className='content'>
                {ResumeApi.map((val, index) => {
                  if (val.category === "skill") {
                    return <Card key={index} title={val.title} year={val.year} desc={val.desc} />
                  }
                })}
              </div>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center"}}>
          <a href="./main-cv.pdf" download><button className="cv">Download CV <FontAwesomeIcon icon={faDownload} style={{color:"white",marginLeft:"10px"}}/></button></a>
        </div>
      </section>
    </>
  )
}

export default Resume
