import React from 'react'
import './project.css';
import adve from '../pic/adve.png'
import saathi from '../pic/saathi.png'
import pdf from '../pic/pdf.png'
export default function Projects() {
  return (
    <>
      <div className='projects' id='projects'>
        <h1 data-aos="fade-up">Some of My Recent <span>Projects</span></h1>
        <div data-aos="fade-up" className='works'>
          
            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div class="front" >
                  <div className='project'>
                    <div className='heads'><img src={adve} alt='project' /></div>
                    <div className='body'>
                      <p1><span>E</span>-Commerce <span>W</span>ebsite</p1>
                    </div>
                  </div>
                </div>

                <div class="back">
                  <p><span>Adventurous Essence</span><br/> Tour package operator website with online booking system and many more.</p>
                  <button className='live' onClick={() => { window.open('https://adventurous-essence.in/') }}>See Live</button>
                </div>
              </div>
            </div>
            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div class="front" >
                  <div className='project'>
                    <div className='heads'><img src={saathi} alt='project' /></div>
                    <div className='body'>
                      <p1><span>S</span>aathi </p1>
                    </div>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p><span>Saathi</span><br/> A single platform, where anyone can call their nearest police station,fire breagde,blood bank,hospital with a single click from any geo location.</p>
                    <button className='live' onClick={() => { window.open('https://github.com/anik0810/Saathi-react') }}>Source Code</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div class="front" >
                  <div className='project'>
                    <div className='heads'><img src={pdf} alt='project' /></div>
                    <div className='body'>
                      <p1><span>O</span>nline PDF <span>C</span>onverter</p1>
                    </div>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p><span>Just Click</span><br/>Users can convert their documents and merge pdf files with just a single click securely. Files will be deleted from server after downloading the converted file. </p>
                    <button className='live' onClick={() => { window.open('https://github.com/anik0810/Pdf-Converter') }}>Source Code</button>
                  </div>
                </div>
              </div>
            </div>


          
        </div>
      </div>
    </>
  )
}
