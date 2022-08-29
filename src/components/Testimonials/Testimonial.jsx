import React from 'react'
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import profilePic1 from '../../img/profile1.png'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.png'

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        'He really managed to capture how we warm-up and have a nice and chill training session with my teammate Marko at proSport 24 Berlin club. Valentin is an easy to work with kinda guy!',
      name: 'Santiago, tennis player',
    },
    {
      img: profilePic2,
      review: `We hired Valentin for our wedding and we don't regret it! He has a great eye and many ideas for taking photos. Always willing to work, open with schedules, never a problem! Gracias Val 😄, we really love your shots!`,
      name: 'Steph',
    },
    {
      img: profilePic3,
      review: `Valentin is a great photographer! Every time I've worked with him we've had amazing sessions. It shows that he likes it! I definitely recommend it.`,
      name: 'Nachos, DJ.',
    },
    {
      img: profilePic4,
      review:
        'Good to see you again, mate! With Valentín we studied photography together in the year 202. He is a great person, super friendly, and very passionate about photography. I also remember that you really liked being a Community Manager, I hope you continue with that! Hope to see you soon, friend!',
      name: 'Esteban',
    },
  ]

  return (
    <div className='t-wrapper' id='testimonial'>
      <div className='t-heading'>
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div
          className='blur t-blur1'
          style={{ background: 'var(--purple)' }}
        ></div>
        <div className='blur t-blur2' style={{ background: 'skyblue' }}></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='testimonial'>
                <div className='testimonial-img-container'>
                  <img src={client.img} alt='' className='testimonial-img' />
                </div>
                <span>{client.review}</span>
                <span>- {client.name}</span>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Testimonial
