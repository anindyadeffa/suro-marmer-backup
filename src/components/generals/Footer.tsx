'use client';

import Link from 'next/link';
import React from 'react';
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

import { __MENU } from '@/lib/constants';

import { BaseLayout } from '@/components/layouts/BaseLayout';
import NextImage from '@/components/NextImage';

import { useGetAllServices } from '@/hook/services/hook';

import LogoSM from '~/images/Logo_Footer.png';

const Footer = () => {
  const { data } = useGetAllServices();

  const services = data?.data.galleries || [];

  return (
    <div className='w-full pt-10 bg-primary mt-10'>
      <BaseLayout>
        <div className='w-full text-white flex flex-col border-t-2'>
          <div className='z-40 py-6 gap-x-10 gap-y-6 lg:gap-x-14 xl:gap-y-20 flex flex-col md:flex-row w-full mx-auto md:justify-between'>
            <section className='pr-0 mb-4 col-span-3 lg:col-span-2 md:w-[700px] justify-center'>
              <Link href='/' className='flex items-center '>
                <NextImage
                  src={LogoSM}
                  alt='Logo Suro Marmer'
                  width={0}
                  height={0}
                  className='w-[170px]'
                />
              </Link>
              <div className='pt-5'>
                <div className='items-center text-sm md:text-[15px] transition-colors ease-in-out duration-300 text-justify leading-8'>
                  <p>
                    Kami menyediakan jasa pasang poles marmer, granit, dan
                    keramik dengan hasil terbaik, cepat, murah, bergaransi, dan
                    berpengalaman.
                  </p>
                </div>
              </div>
            </section>
            <section className='flex gap-x-20 gap-y-10 flex-wrap xl:flex-nowrap'>
              <div className='lg:gap-20 gap-8 grid grid-cols-2 md:flex md:flex-row text-sm md:text-md'>
                <div className=''>
                  <h1 className=' mb-3 lg:mb-6 font-bold text-base text-secondary'>
                    Halaman
                  </h1>
                  <ul className='flex flex-col gap-1 lg:gap-3 xl:gap-4'>
                    {__MENU.map((menu, index) => (
                      <li
                        className='hover:underline hover:underline-offset-2 transition-colors ease-in-out duration-300 cursor-pointer truncate'
                        key={index}
                      >
                        <Link href={menu.link}>{menu.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className=' '>
                  <h1 className='mb-3 lg:mb-6 font-bold text-base text-secondary'>
                    Layanan
                  </h1>
                  <ul className='flex flex-col gap-1 lg:gap-3 xl:gap-4'>
                    {services.map((service, index) => (
                      <li
                        className='hover:underline hover:underline-offset-2 transition-colors ease-in-out duration-300 cursor-pointer truncate'
                        key={index}
                      >
                        <Link href={`/layanan/${service.type}`}>
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='flex flex-col'>
                  <h1 className='mb-3 lg:mb-6 font-bold text-base text-secondary'>
                    Kontak
                  </h1>
                  <div className='flex flex-col gap-1 lg:gap-3 xl:gap-4'>
                    <div className='flex justify-start w-full gap-3 items-center text-white'>
                      <Link href='mailto:suromarmer@gmail.com' target='_blank'>
                        <IoIosMail size={24} />
                      </Link>
                      <Link href='' target='_blank'>
                        <FaFacebookSquare size={24} />
                      </Link>
                      <Link href='' target='_blank'>
                        <FaInstagram size={24} />
                      </Link>
                      <Link
                        href='https://api.whatsapp.com/send/?phone=6282199067509&text=Halo+Admin%2CSaya+lihat+di+website+dan+tertarik+untuk+Konsultasi+tentang+jasa+yang+ada+di+website.+Terima+Kasih&type=phone_number&app_absent=0'
                        target='_blank'
                      >
                        <FaWhatsapp size={24} />
                      </Link>
                    </div>
                    <div className='flex flex-col gap-1 lg:gap-3 xl:gap-4'>
                      <Link href='mailto:suromarmer@gmail.com'>
                        suromarmer@gmail.com
                      </Link>
                      <Link href='https://api.whatsapp.com/send/?phone=6282199067509&text=Halo+Admin%2CSaya+lihat+di+website+dan+tertarik+untuk+Konsultasi+tentang+jasa+yang+ada+di+website.+Terima+Kasih&type=phone_number&app_absent=0'>
                        (+62) 821 - 9906 - 7509
                      </Link>
                      <p>Kapuk, Jakarta Utara</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className='w-full py-6'>
            <section className='w-full mx-auto text-center md:px-14 lg:px-16 text-white flex justify-center '>
              <div className='w-full md:w-1/2'>
                <h1 className='text-sm'>
                  Copyright 2024 • All rights reserved • Suromarmer.
                </h1>
              </div>
            </section>
          </div>
        </div>
      </BaseLayout>
    </div>
  );
};

export default Footer;
