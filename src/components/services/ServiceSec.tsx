import React from 'react';

import NextImage from '@/components/NextImage';

type TService = {
  icon: string;
  title: string;
  description: string;
};

export type TServicesSecProps = {
  title: string;
  description: string;
  services: TService[];
};

const ServicesSection = ({
  title,
  description,
  services,
}: TServicesSecProps) => {
  return (
    <>
      <div className='m-auto w-full'>
        <h3 className='text-center font-cormorant font-bold text-[20px] sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[30px] text-white dark:text-secondary pt-10'>
          {title}
        </h3>
        <p className='text-center text-white mb-10 text-[11px] sm:text-[13px] md:text-[15px] lg:text-[17px] xl:text-base'>
          {description}
        </p>
      </div>
      <div className='flex flex-wrap justify-center text-white text-center text-wrap xl:py-6 px-1 py-1 gap-6'>
        {services.map((item, index) => (
          <div
            className='flex flex-col items-center gap-1 w-[128px] sm:w-[120px] md:w-[250px] lg:w-[362px] xl:w-[250px]'
            key={index}
          >
            <NextImage
              className='object-center mx-auto'
              src={item.icon}
              width={60}
              height={60}
              alt={item.title}
            />
            <p className='font-medium text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-lg dark:text-secondary'>
              {item.title}
            </p>
            <div className='text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-sm'>
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServicesSection;
