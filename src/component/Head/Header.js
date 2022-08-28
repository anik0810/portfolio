import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './header.css';
import logo from '../pic/anik.png'
import music from "./on-my-way.mp3";

export default class Header extends Component {
  state = {
    audio: new Audio(music),
    isPlaying: false,
  };
  playPause = () => {
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {

      this.state.audio.pause();
    } else {


      this.state.audio.play();
      this.state.audio.currentTime = 10;
      this.state.audio.volume = 0.1;
    }

    // Change the state of song
    this.setState({ isPlaying: !isPlaying });
  };

  render() {
    return (
      <nav>
        <img src={logo} className="logo" />
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link smooth to="#projects" style={{ color: "red" }}>PORTFOLIO</Link></li>
          <li>
            <Link smooth to='#services'>SERVICES</Link>
            </li>
          <li><Link smooth to="#resume" style={{ color: "red" }}>RESUME</Link></li>
          <li><Link smooth to="#contact">CONTACT</Link></li>
        </ul>
        <label class="switch">
          <input type="checkbox" onClick={this.playPause} />
          <span class="slider round"></span>
        </label>
        <audio className="audio-element">
          <source src={music}></source>
        </audio>
      </nav>
    )
  }
}
