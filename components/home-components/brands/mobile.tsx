'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css'
import Image from 'next/image'
import { brands } from '@/public/constants/home/brands'

const MobileBrands = () => {
  return (
    <div className='sm:hidden'>
      <Swiper
        className="brandSwiper h-28"
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {brands.map(brand => (
          <SwiperSlide key={brand.alt}>
            <div className='w-full h-full flex items-center'>
              <Image key={brand.alt} src={brand.image} alt={brand.alt} className='mix-blend-luminosity mx-auto' style={{ width: brand.width }} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MobileBrands