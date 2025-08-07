'use client';

import { usePathname } from 'next/navigation';
import React, { FC, ReactNode } from 'react';

import FloatingButton from '@/components/floating-button';
import Footer from '@/components/generals/Footer';
import Navbar from '@/components/generals/Navbar';
import Sidebar from '@/components/generals/Sidebar';

const Layouting: FC<{ children: ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  if (pathname.startsWith('/admin')) {
    return (
      <div className='flex'>
        <Sidebar />
        <div className='w-[calc(100%-300px)]'>
          <div className='bg-background py-10 min-w-[calc(100%-280px)] min-h-[calc(100%-65px)]'>
            {children}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <Navbar />
        <FloatingButton />
        {children}
        <Footer />
      </>
    );
  }
};

export default Layouting;
