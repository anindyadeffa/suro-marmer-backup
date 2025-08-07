'use client';

import Link from 'next/link';
import React from 'react';

import { BaseLayout } from '@/components/layouts/BaseLayout';
import GalleryTabs from '@/components/tabs/GalleryTabs';

const GaleryModules = () => {
  return (
    <div className='w-full overflow-hidden'>
      <div className='min-h-[calc(100vh-200px)] w-full'>
        <div
          className='w-full lg:h-[350px] md:h-[400px] h-[515px] bg-cover bg-center bg-no-repeat relative items-center flex justify-center'
          style={{ backgroundImage: "url('/images/banner-galery.png')" }}
        >
          <div className='absolute inset-0 bg-white bg-opacity-40 items-center flex justify-center'>
            <BaseLayout>
              <div className='flex justify-center items-center flex-col text-center gap-3 text-primary'>
                <h1 className='md:text-3xl lg:text-4xl text-2xl font-semibold font-cormorant'>
                  Galeri Proyek Kami
                </h1>
                <p className='md:text-base text-sm'>
                  Di setiap gambar merupakan bukti dari dedikasi dan ketelitian
                  tim kami dalam menghasilkan lantai yang rapih dan mengkilap.
                  Di sini, ada berbagai contoh hasil kerja kami dengan beragam
                  jenis material, serta teknik pemasangan dan poles yang
                  berbeda. Tujuan kami adalah untuk memberikan inspirasi tentang
                  lantai marmer, granit, atau keramik yang dipasang dan dipoles
                  dengan benar dapat meningkatkan estetika dan keindahan rumah.
                  Jangan ragu untuk menghubungi kami hari ini untuk mendapatkan
                  penawaran dan konsultasi gratis!
                </p>
                <p className='md:text-base text-sm'>
                  Jangan ragu untuk menghubungi kami hari ini untuk mendapatkan
                  penawaran dan{' '}
                  <span className='text-base md:text-lg font-semibold'>
                    konsultasi gratis!
                  </span>
                </p>
                <Link
                  href='https://api.whatsapp.com/send/?phone=6282199067509&text=Halo+Admin%2CSaya+lihat+di+website+dan+tertarik+untuk+Konsultasi+tentang+jasa+yang+ada+di+website.+Terima+Kasih&type=phone_number&app_absent=0'
                  target='_blank'
                  className='bg-white border-2 border-stone-400 shadow-lg flex gap-2 items-center py-1 px-4 w-fit rounded-md hover:scale-110 transition-all duration-300 ease-in-out'
                >
                  <p className='font-medium text-primary leading-loose'>
                    Hubungi Kami
                  </p>
                </Link>
              </div>
            </BaseLayout>
          </div>
        </div>
        <BaseLayout>
          <div className='relative'>
            <GalleryTabs />
          </div>
        </BaseLayout>
      </div>
    </div>
  );
};

export default GaleryModules;
