import React from 'react'
import './contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
  return (
    <>
      <div className='main-contact' id='contact'>
        <h1><span>Contact </span>Me</h1>
        <div data-aos="fade-up" className='contact'>
          <div className='inner-contact'>
            <p>Name</p>
            <input type="text" required></input>
            <p>email</p>
            <input type="email" required></input>
            <p>Message</p>
            <textarea type="text"></textarea>
            <div className='send1'>
              <button className='send '><FontAwesomeIcon icon={faPaperPlane} style={{ fontSize: "2.1rem", color: "white" }} /></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
