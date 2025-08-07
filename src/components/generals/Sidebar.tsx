'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC, useState } from 'react';
import { AiFillDashboard } from 'react-icons/ai';
import { IoChevronDown } from 'react-icons/io5';

import NextImage from '@/components/NextImage';

import LogoSMW from '~/images/logo-sm-white.png';
import FileCheck from '~/svg/FileCheck.svg';

const Sidebar: FC = () => {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const toggleMenu = (title: string) => {
    setOpenMenus((prevMenus) =>
      prevMenus.includes(title)
        ? prevMenus.filter((item) => item !== title)
        : [...prevMenus, title]
    );
  };

  const isActive = (link: string) => pathname === link;

  return (
    <div className='w-[300px] min-h-screen py-10 px-5 bg-sidebar relative'>
      <div className='fixed top-0 left-0 h-screen bg-sidebar overflow-y-auto pb-10 pt-7 w-[275px]'>
        <div className='pl-[35px] pb-[30px]'>
          <Link href='/admin' className='flex items-center '>
            <NextImage
              src={LogoSMW}
              alt='Logo Suro Marmer'
              width={0}
              height={0}
              className='w-[170px]'
            />
          </Link>
        </div>
        <div className='flex gap-6 flex-col'>
          {dataSideBar.map((item, i) => (
            <div className='flex flex-col ' key={i}>
              <p className='text-sm font-medium text-white pl-[35px] py-2 max-w-[190px]'>
                {item.title}
              </p>
              {item.children.map((child, index) => (
                <div className='relative' key={index}>
                  {child.children ? (
                    <div
                      className={`flex gap-[10px] pl-[35px] py-2 justify-between pr-[22px] cursor-pointer duration-300 ease-in-out group ${
                        openMenus.includes(child.title)
                          ? 'bg-primary bg-opacity-10 text-primary'
                          : 'hover:bg-primary hover:bg-opacity-5 hover:text-primary'
                      }`}
                      onClick={() => toggleMenu(child.title)}
                    >
                      <div className='flex gap-[10px]'>
                        {child.icon}
                        <p className='text-medium font-medium text-white group-hover:text-primary max-w-[170px]'>
                          {child.title}
                        </p>
                      </div>
                      <IoChevronDown
                        className={`w-6 h-6 text-white group-hover:text-primary ${
                          openMenus.includes(child.title)
                            ? 'transform rotate-180'
                            : ''
                        }`}
                      />
                    </div>
                  ) : (
                    <Link
                      href={child.link}
                      className={`duration-300 ease-in-out flex gap-[10px] py-2 pl-[35px] group ${
                        isActive(child.link)
                          ? 'bg-secondary bg-opacity-10 text-primary'
                          : 'hover:bg-primary hover:bg-opacity-5 hover:text-primary'
                      }`}
                    >
                      {child.icon}
                      <p className='text-medium font-medium text-white group-hover:text-primary max-w-[190px]'>
                        {child.title}
                      </p>
                    </Link>
                  )}
                  {openMenus.includes(child.title) && child.children && (
                    <div className='flex flex-col relative w-full overflow-hidden transition-all duration-300'>
                      {child.children.map((child2, index2) => (
                        <Link
                          href={child2.link}
                          key={index2}
                          className={`text-medium font-medium text-white py-2 pl-[70px] pr-[30px] duration-300 ease-in-out hover:bg-primary hover:bg-opacity-5 hover:text-primary ${
                            isActive(child2.link) ? 'bg-activeLink' : ''
                          }`}
                        >
                          {child2.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

const dataSideBar = [
  {
    title: 'UTAMA',
    children: [
      {
        title: 'Beranda',
        link: '/admin',
        icon: (
          <AiFillDashboard className='w-6 h-6 group-hover:text-primary text-white' />
        ),
      },
      {
        title: 'Artikel',
        link: '/admin/kelola-artikel',
        icon: (
          <AiFillDashboard className='w-6 h-6 group-hover:text-primary text-white' />
        ),
      },
      {
        title: 'Layanan',
        icon: <FileCheck className='w-6 h-6 group-hover:text-primary' />,
        children: [
          {
            title: 'Layanan 1',
            link: '/admin/layanan-1',
          },
          {
            title: 'Layanan 2',
            link: '/admin/layanan-2',
          },
          {
            title: 'Layanan 3',
            link: '/admin/layanan-3',
          },
        ],
      },
    ],
  },
];
