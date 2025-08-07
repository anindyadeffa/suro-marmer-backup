import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
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
import { Card, CardContent } from '@/components/ui/card';

// JSON data for the cards
const cardData = [
  {
    title: 'Keramik / Quadra',
    description:
      'Pemasangan dan Poles Keramik Biasa / Keramik Besar (Quadra) menjadi rapih dengan tangan profesional.',
    icon: '/images/business.svg',
  },
  {
    title: 'Terrazzo (Teraso)',
    description:
      'Poles untuk proses pembersihan, penghilangan noda, dan memberikan lapisan pelindung untuk memperbarui penampilan lantai.',
    icon: '/images/tile.svg',
  },
  {
    title: 'Marmer / Granit',
    description:
      'Pasang dan Poles untuk perawatan Marmer / Granit mengkilap memancarkan kemewahan.',
    icon: '/images/polish.svg',
  },
  {
    title: 'Tangga',
    description:
      'Setiap set tangga dapat disesuaikan, memungkinkan pilihan lebar, tinggi, dan desain anak tangga sesuai keinginan Anda.',
    icon: '/images/steps.svg',
  },
  {
    title: 'Furniture',
    description:
      'Pembuatan dan perawatan (poles) produk berbahan marmer untuk furniture seperti westafel dan meja makan.',
    icon: '/images/table.svg',
  },
];

export default function CarouselLayanan() {
  return (
    <>
      <Swiper
        effect='coverflow'
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView='auto'
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 80,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className='swiper_container'
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={index}>
            <div className='p-1'>
              <Card className='w-80 h-72 flex'>
                <CardContent className='flex items-center justify-center p-6 flex-col gap-2 text-center'>
                  <NextImage
                    className='object-center mx-auto'
                    src={card.icon}
                    width={60}
                    height={60}
                    alt={card.title}
                  />
                  <p className='text-[12px] xl:text-lg font-semibold'>
                    {card.title}
                  </p>
                  <div className='text-[10px] xl:text-[12px]'>
                    {card.description}
                  </div>
                </CardContent>
              </Card>
            </div>
          </SwiperSlide>
        ))}

        <div className='hidden 2xl:flex'>
          <div className='slider-controler '>
            <div className='swiper-button-prev slider-arrow'>
              <IoIosArrowBack name='arrow-back-outline' color='white' />
            </div>
            <div className='swiper-button-next slider-arrow'>
              <IoIosArrowForward name='arrow-forward-outline' color='white' />
            </div>
          </div>
        </div>
      </Swiper>
    </>
  );
}
