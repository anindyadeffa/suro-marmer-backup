import React from 'react';
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import NextImage from '@/components/NextImage';

export default function App() {
  const slides = [
    {
      id: 1,
      image: '/images/furniture/furnitur-7.jpeg',
      caption: 'Slide 1',
    },
    {
      id: 2,
      image: '/images/homepage/Astra-3.jpg',
      caption: 'Slide 2',
    },
    {
      id: 3,
      image: '/images/keramik-quadra/keramik-1.jpeg',
      caption: 'Slide 3',
    },
    {
      id: 4,
      image: '/images/marmer-granit/marmer-2.jpeg',
      caption: 'Slide 4',
    },
    {
      id: 5,
      image: '/images/tangga/Tangga-2.jpg',
      caption: 'Slide 5',
    },
    {
      id: 6,
      image: '/images/terrazzo/Terazzo-5.jpeg',
      caption: 'Slide 6',
    },
  ];

  return (
    <>
      <Swiper
        effect='coverflow'
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        slidesPerView='auto'
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className='swiper_container swiper-poster'
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className='relative w-[21.9rem] h-[31rem]'>
              <NextImage
                src={slide.image}
                alt={slide.caption}
                layout='fill'
                objectFit='cover'
                style={{ objectFit: 'cover' }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
