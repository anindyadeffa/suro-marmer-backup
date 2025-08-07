import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { BiLogoWhatsapp } from 'react-icons/bi';

import { __CHOOSE_US } from '@/lib/constants';

import { FlipWords } from '@/components/animation/FlipWord';
import { TypewriterEffectSmooth } from '@/components/animation/TypeWriter';
import Button from '@/components/buttons/Button';
import ArticleCard from '@/components/card/ArticleCard';
import CarouselLayanan from '@/components/carousels/CarouselLayanan';
import PosterSlider from '@/components/carousels/PosterSlider';
import { BaseLayout } from '@/components/layouts/BaseLayout';
import NextImage from '@/components/NextImage';
import ServicesSection from '@/components/services/ServiceSec';

import { useGetArticles } from '@/hook/article/hook';

const LandingPageModule = () => {
  const { data: article } = useGetArticles(1, '');

  const articleData = article ? article.data.articles : [];

  const words = [
    'Marmer',
    'Granit',
    'Keramik',
    'Quadra',
    'Teraso',
    'Furnitur',
    'Tangga',
  ];

  const typeWriterWord = [
    {
      text: 'Mewah',
    },
    {
      text: 'Dan',
    },
    {
      text: 'Elegan',
    },
    {
      text: 'Bersama',
    },
    {
      text: 'Suromarmer.id',
      className: 'text-secondary dark:text-secondary',
    },
  ];

  return (
    <div className='w-full overflow-hidden'>
      <div className='min-h-[calc(100vh-200px)] w-full'>
        <BaseLayout>
          <div className='min-h-[calc(100vh-200px)] flex flex-col'>
            <motion.div
              initial={{
                y: '50vh',
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 2.5,
                ease: 'easeInOut',
                type: 'spring',
              }}
            >
              <div className='flex flex-col md:flex-row justify-between w-full gap-4 md:items-center md:mt-5'>
                <div className='flex flex-col gap-2 lg:text-[42px] sm:text-[38px] text-[34px] items-center md:items-start max-w-[850px] text-primary dark:text-secondary'>
                  <h1 className='font-bold text-center md:text-start font-cormorant text-[40px]'>
                    Kemewahan Lantai :{' '}
                  </h1>
                  <h1 className='font-bold font-cormorant text-center md:text-start text-[40px] '>
                    Pasang & Poles <FlipWords words={words} />
                  </h1>
                  <p className='text-base md:text-lg mb-4 text-center md:text-start dark:text-white'>
                    Kami menyediakan jasa pasang poles marmer, granit, dan
                    keramik dengan hasil terbaik dan tahan lama. Dapatkan
                    penampilan mewah dan elegan untuk rumah Anda sekarang.
                  </p>
                  <Link
                    href='https://api.whatsapp.com/send/?phone=6282199067509&text=Halo+Admin%2CSaya+lihat+di+website+dan+tertarik+untuk+Konsultasi+tentang+jasa+yang+ada+di+website.+Terima+Kasih&type=phone_number&app_absent=0'
                    target='_blank'
                    className='bg-secondary text-white flex gap-2 items-center py-2 px-4 w-fit rounded-md hover:scale-110 transition-all duration-300 ease-in-out'
                  >
                    <BiLogoWhatsapp className='text-2xl dark:text-primary' />
                    <p className='font-medium text-lg dark:text-primary'>
                      HUBUNGI KAMI SEKARANG
                    </p>
                  </Link>
                </div>
                <div className='relative p-2 bg-white rounded-lg border border-primary dark:bg-primary mb-11'>
                  <NextImage
                    src='/images/banner.png'
                    width='600'
                    height='600'
                    alt='Banner outlet'
                    className='object-cover rounded-md w-full md:w-[350px] md:[350px] lg:w-[600px] '
                    style={{ objectFit: 'cover', borderRadius: 'inherit' }}
                    sizes='100vw'
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </BaseLayout>

        {/* Start section Layanan kami */}
        <div className='bg-primary m-auto w-full py-10'>
          <BaseLayout>
            <div className=''>
              <p className='text-center font-cormorant font-bold text-[30px] text-white dark:text-secondary'>
                Layanan Kami
              </p>
              <p className='text-center text-white mb-6 text-base'>
                Suromarmer hadir menjadi solusi bagi anda!
              </p>
              <div className='w-full m-auto justify-center items-center flex'>
                <CarouselLayanan />
              </div>
            </div>
          </BaseLayout>
        </div>
        {/* End section Layanan kami */}

        {/* Start Section Poster slider */}
        <BaseLayout>
          <div className='flex justify-center items-center my-9'>
            <div className='lg:w-full md:w-[135%] w-full px-4 md:px-0'>
              <div className='flex flex-col md:flex-row gap-4'>
                <div className='flex justify-center items-center md:w-[350px] w-full sm:h-full'>
                  <PosterSlider />
                </div>
                <div className='flex flex-col'>
                  <div className='font-cormorant font-bold text-[20px] sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[30px] text-black dark:text-secondary mb-5'>
                    Kami Memberikan Layanan dan Pengalaman Terbaik
                  </div>
                  <div className='font-semibold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-lg md:mb-2'>
                    Cepat, Rapih, Murah, Ramah, Bergaransi dan Berpengalaman 25
                    Tahun.
                  </div>
                  <div className='text-black dark:text-white text-[11px] sm:text-[13px] md:text-[15px] lg:text-[17px] xl:text-base'>
                    Kami adalah tim profesional yang memberikan pelayanan
                    terbaik dalam pasang dan poles lantai marmer, keramik, dan
                    granit. Dengan pengalaman puluhan tahun, kami menawarkan
                    layanan terbaik dengan fokus pada keahlian, kualitas, dan
                    kepuasan pelanggan. Kami siap membantu mewujudkan lantai
                    impian Anda dengan hasil yang memuaskan. Dengan layanan yang
                    ramah, harga yang kompetitif, dan keahlian profesional
                    terbaik. Jangan ragu untuk menghubungi kami hari ini untuk
                    mendapatkan penawaran dan konsultasi gratis!
                  </div>
                  <div>
                    <div className='flex flex-col xl:flex-row xl:mt-10 xl:mb-16'>
                      <div className='flex gap-6 md:gap-10'>
                        <div className='flex flex-col '>
                          <p className='font-bold text-[24px] lg:text-[25px] xl:text-[32px]'>
                            25
                          </p>
                          <p className='font-medium text-[12px] lg:text-[14px] xl:text-base'>
                            Tahun
                          </p>
                          <p className='font-medium text-[12px] lg:text-[14px] xl:text-base'>
                            Berpengalaman
                          </p>
                        </div>
                        <div className='flex flex-col '>
                          <p className='font-bold text-[24px] lg:text-[25px] xl:text-[32px]'>
                            20.000+
                          </p>
                          <p className='font-medium text-[12px] lg:text-[14px] xl:text-base'>
                            Penanganan
                          </p>
                          <p className='font-medium text-[12px] lg:text-[14px] xl:text-base'>
                            Projects
                          </p>
                        </div>
                        <div className='flex flex-col '>
                          <p className='font-bold text-[24px] lg:text-[25px] xl:text-[32px]'>
                            34+
                          </p>
                          <p className='font-medium text-[12px] lg:text-[14px] xl:text-base'>
                            Kota di
                          </p>
                          <p className='font-medium text-[12px] lg:text-[14px] xl:text-base'>
                            Seluruh Pulau Jawa
                          </p>
                        </div>
                      </div>
                    </div>
                    <Link href='/galeri'>
                      <Button
                        type='button'
                        className='bg-secondary text-white dark:text-primary flex gap-2 items-center py-2 px-4 w-fit rounded-md hover:scale-110 transition-all duration-300 ease-in-out mt-4'
                      >
                        Lihat Galeri
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BaseLayout>

        {/* End Section Poster slider *</div>/}

        {/* Start Section Kenapa Harus pilih kami */}
        <div className='bg-primary w-full h-[40rem] md:h-[48rem] lg:h-[37rem] xl:h-[27rem]'>
          <BaseLayout>
            <ServicesSection
              title='Kenapa Harus Pilih Kami?'
              description='Kami profesional yang berpengalaman dengan komitmen dan kepuasan pelanggan adalah prioritas kami!'
              services={__CHOOSE_US}
            />
          </BaseLayout>
        </div>
        {/* End Section Kenapa Harus pilih kami */}

        {/* Start Section Artikel Kami */}
        <BaseLayout>
          <div>
            <div className='m-auto w-full'>
              <p className='text-center font-cormorant font-bold text-[30px] pt-10 dark:text-secondary'>
                Artikel Kami
              </p>
              <p className='text-center  mb-10 text-base'>
                Kami menyuguhkan artikel harian membahas topik yang informatif
                seputar berbagai jenis keramik dan tips praktis untuk memilih,
                merawat, dan mengaplikasikan keramik
              </p>
            </div>
            <div className='w-full'>
              <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-x-8 gap-y-10 p-5 relative h-[700px] overflow-hidden'>
                {articleData.map((item) => (
                  <ArticleCard
                    key={item.id}
                    thumbnail={
                      item.thumbnail
                        ? item?.thumbnail.replace('/uploads', '')
                        : '/images/artikel.png'
                    }
                    titleName={item.title}
                    createdAt={item.created_at}
                    description={item.content.replace(/<[^>]*>?/gm, '')}
                    detailed={`/artikel/${item.slug}`}
                    views={item.views}
                    likes={item.likes}
                    idArticle={String(item.id)}
                  />
                ))}
                <div className='bg-gradient-to-t absolute w-full h-52 bottom-0 from-white dark:from-primary'></div>
              </div>
            </div>
            <div className='flex justify-center items-center mt-8'>
              <Link href='/artikel'>
                <Button
                  type='button'
                  className='bg-primary text-white font-semibold p-3 rounded-lg px-8 hover:bg-primary/90'
                >
                  Lihat Artikel Lainnya
                </Button>
              </Link>
            </div>
          </div>
        </BaseLayout>
        {/* End Section artikel Kami */}

        <div className='bg-primary w-full my-5 hidden md:block'>
          <BaseLayout>
            <div className='flex flex-col items-center justify-center py-28'>
              <p className='text-white dark:text-neutral-200 text-xs sm:text-base'>
                Dapatkan penawaran terbaik untuk proyek Anda
              </p>
              <TypewriterEffectSmooth words={typeWriterWord} />
              <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4'>
                <Link
                  href='https://api.whatsapp.com/send/?phone=6282199067509&text=Halo+Admin%2CSaya+lihat+di+website+dan+tertarik+untuk+Konsultasi+tentang+jasa+yang+ada+di+website.+Terima+Kasih&type=phone_number&app_absent=0'
                  target='_blank'
                  className='bg-secondary text-white flex gap-2 items-center py-2 px-4 w-fit rounded-md hover:scale-110 transition-all duration-300 ease-in-out'
                >
                  <BiLogoWhatsapp className='text-2xl dark:text-primary' />
                  <p className='font-medium text-lg dark:text-primary'>
                    HUBUNGI KAMI SEKARANG
                  </p>
                </Link>
              </div>
            </div>
          </BaseLayout>
        </div>
      </div>
    </div>
  );
};

export default LandingPageModule;
