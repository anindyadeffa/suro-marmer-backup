'use client';

import { ChevronUp } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { RiWhatsappFill } from 'react-icons/ri';

const FloatingButton = () => {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='fixed bottom-5 right-5 flex flex-col space-y-4 justify-between sm:px-8 md:px-12 lg:px-16 w-full items-end z-10'>
      <Link
        href='https://api.whatsapp.com/send/?phone=6282199067509&text=Halo+Admin%2CSaya+lihat+di+website+dan+tertarik+untuk+Konsultasi+tentang+jasa+yang+ada+di+website.+Terima+Kasih&type=phone_number&app_absent=0'
        target='_blank'
        className='rounded-full bg-green-600 p-3 shadow-lg transition-transform transform hover:scale-105'
      >
        <RiWhatsappFill className='text-white text-2xl' />
      </Link>
      <button
        onClick={scrollToTop}
        className='rounded-full bg-slate-600 text-white p-3 shadow-lg transition-transform transform hover:scale-105 hover:bg-slate-700'
      >
        <ChevronUp className='text-white text-2xl' />
      </button>
    </div>
  );
};

export default FloatingButton;
