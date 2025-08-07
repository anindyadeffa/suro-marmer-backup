'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';

import GalleryCard from '@/components/card/GalleryCard';
import { BaseLayout } from '@/components/layouts/BaseLayout';
import ServicesSection from '@/components/services/ServiceSec';

import { useGetServicBySlug } from '@/hook/services/hook';

const ServiceModules = () => {
  const params = useParams();

  const { slug: type } = params;

  const { data } = useGetServicBySlug(type as string);

  const services = data?.data?.gallery;

  return (
    <div className='w-full overflow-hidden'>
      <div className='min-h-[calc(100vh-200px)] w-full'>
        <div className='w-full lg:h-[450px] md:h-[400px] h-[450px] bg-cover bg-center bg-no-repeat relative items-center flex justify-center'>
          <div className='absolute inset-0 bg-white bg-opacity-40 items-center flex justify-center'>
            <BaseLayout>
              <div className='flex flex-col md:gap-2 gap-1 items-center md:items-start text-primary w-50 h-50'>
                <h1 className='font-bold font-cormorant text-left md:text-start lg:text-[40px] text-3xl dark:text-secondary'>
                  {services?.title}
                </h1>
                <p className='text-sm lg:text-lg mb-4 text-justify md:text-start dark:text-white'>
                  {services?.description}
                </p>
                <Link
                  href='https://api.whatsapp.com/send/?phone=6282199067509&text=Halo+Admin%2CSaya+lihat+di+website+dan+tertarik+untuk+Konsultasi+tentang+jasa+yang+ada+di+website.+Terima+Kasih&type=phone_number&app_absent=0'
                  target='_blank'
                  className='bg-primary text-secondary flex gap-1 items-center py-2 px-4 w-fit rounded-md hover:scale-110 transition-all duration-300 ease-in-out'
                >
                  <p className='font-medium md:text-lg text-sm'>Hubungi Kami</p>
                </Link>
              </div>
            </BaseLayout>
          </div>
        </div>
        <div className='bg-primary w-full h-[40rem] md:h-[48rem] lg:h-[37rem] xl:h-[27rem]'>
          <BaseLayout>
            <ServicesSection
              title='Kami Menyediakan Jasa Layanan'
              description='Dengan keahlian profesional terbaik. Jangan ragu untuk menghubungi kami hari ini untuk mendapatkan penawaran dan konsultasi gratis!'
              services={services?.services || []}
            />
          </BaseLayout>
        </div>

        {/* Start section portofolio Galeri card */}
        <div className='pt-10 flex flex-col gap-5'>
          <BaseLayout>
            <div className='flex flex-col lg:flex-row justify-between items-center lg:items-start'>
              <div className='font-bold lg:text-[30px] text-[25px] font-cormorant text-center lg:text-left mb-4 lg:mb-0'>
                {`Hasil Proyek ${services?.title} Kami`}
              </div>
              <div className=''>
                <Link
                  href='/galeri'
                  className='bg-secondary text-white flex gap-2 items-center lg:py-2 lg:px-4 lg:mb-0 py-2 px-4 mb-5 w-fit rounded-md hover:scale-110 transition-all duration-300 ease-in-out'
                >
                  <p className='font-medium lg:text-lg text-sm text-center lg:text-left dark:text-primary'>
                    Lihat Galeri Lainnya
                  </p>
                </Link>
              </div>
            </div>
          </BaseLayout>

          <BaseLayout>
            <GalleryCard gallery={services?.images || []} />
          </BaseLayout>
        </div>
        {/* End section portofolio galeri card */}
      </div>
    </div>
  );
};

export default ServiceModules;
