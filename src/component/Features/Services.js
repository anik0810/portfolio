import React from 'react'
import './about.css'
import { Swiper, SwiperSlide } from "swiper/react";
import emoji from '../pic/emoji.png'
import heart from '../pic/heartemoji.png'
import humble from '../pic/humble.png'
import glass from '../pic/glasses.png'
import crown from '../pic/crown.png'
import { HashLink as Link } from 'react-router-hash-link';

import { EffectCards, Pagination, Navigation, Autoplay } from "swiper";

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import { faL } from '@fortawesome/free-solid-svg-icons';

export default function Services() {
  return (
    <div className='services' id='services'>
      <div data-aos="fade-right" className='left-services' >
        <h1>My Awesome <span>Services</span></h1>
        <br />
        <p>The fox in the tophat whispered into the ear of the rabbit.
        </p>
        <br />
       <Link smooth to='#contact'><button className='hire'>Hire Me</button></Link>
      </div>
      <div className='right-services'>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[EffectCards, Pagination, Navigation, Autoplay]}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className='service'>
              <div className='head'>
                <img src={heart} alt="emoji"/>
              </div>
              <h><span>W</span>eb <span>D</span>evelopment</h>
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className='service'>
              <div className='head'>
                <img src={emoji} alt="emoji"/>
              <h><span>B</span>est <span>D</span>esign</h>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className='service'>
              <div className='head'>
                <img src={glass} alt="emoji"/>
              </div>
              <h><span>B</span>est <span> S</span>EO</h>
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className='service'>
              <div className='head'>
                <img src={crown} alt="emoji"/>
              </div>
              <h><span>R</span>esponsive <span>D</span>esign</h>
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className='service'>
              <div className='head'>
                <img src={humble} alt="emoji"/>
              </div>
              <h><span>24</span>X<span>7</span> <span>S</span>upport</h>
            </div>

          </SwiperSlide>


        </Swiper>

      </div>
    </div>
  )
}
