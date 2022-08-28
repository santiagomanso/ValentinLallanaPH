import { MdOutlineClose } from 'react-icons/md'
import './modal.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { imgsUrban, imgsNature, imgsSports } from '../../data'

// import required modules
import { Pagination, Navigation } from 'swiper'
import { useState } from 'react'

const Modal = ({ open, children, close, albumType }) => {
  console.log(imgsUrban.length)

  if (!open) return null
  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <MdOutlineClose className='modal-x' onClick={close} />
        <div className='fotos'>
          <Swiper
            pagination={{
              type: 'fraction',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className='mySwiper'
          >
            {imgsUrban.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt='image1' className='modal-img' />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Modal
