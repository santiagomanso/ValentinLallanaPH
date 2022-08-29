import React from 'react'
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import profilePic1 from '../../img/profile1.png'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        'He really managed to capture how we warm-up and have a nice and chill training session with my teammate Marko. Valentin is an Easy to work with kinda guy!',
      name: 'Santiago',
    },
    {
      img: profilePic2,
      review: 'I',
    },
    {
      img: profilePic3,
      review:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.',
    },
    {
      img: profilePic4,
      review:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.',
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
