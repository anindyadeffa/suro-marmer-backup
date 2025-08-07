'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

import NextImage from '@/components/NextImage';
import ThemeToggle from '@/components/ThemeToggle';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import { useGetAllServices } from '@/hook/services/hook';

import LogoSM from '~/images/logo-sm.png';
import LogoSMW from '~/images/logo-sm-white.png';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { theme, systemTheme } = useTheme();
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  const [scroll, setScroll] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScroll(position);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsThemeLoaded(true);
  }, [theme, systemTheme]);

  const getLogoSrc = () => {
    if (!isThemeLoaded) {
      return LogoSM;
    }
    return scroll > 0 || theme === 'dark' ? LogoSMW : LogoSM;
  };

  const { data } = useGetAllServices();

  const services = data?.data.galleries || [];

  return (
    <div className='h-[74px] w-full relative z-10'>
      <div
        className={`${
          scroll > 0 ? 'bg-primary text-white' : 'dark:text-slate-400'
        } w-full px-4 sm:px-8 md:px-12 lg:px-16 py-5 fixed top-0`}
      >
        <div className='md:mx-[70px] mx-auto transition-all ease-in-out'>
          <div className='flex justify-between items-center'>
            <Link href='/' className='flex items-center '>
              <NextImage
                src={getLogoSrc()}
                alt='Logo Suro Marmer'
                width={0}
                height={0}
                className='w-[170px]'
              />
            </Link>
            <div className='md:flex sm:gap-4 md:gap-6 lg:gap-8 font-semibold hidden'>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href='/' legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Home
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href='/galeri' legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Galeri
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Layanan</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className='flex flex-col gap-1 p-2 md:w-[300px] text-center'>
                        {services.map((service, index) => (
                          <li
                            className='flex flex-col hover:bg-primary hover:text-secondary cursor-pointer rounded-md'
                            key={index}
                          >
                            <NavigationMenuLink asChild>
                              <Link
                                className='gap-1 flex h-full w-full select-none flex-col justify-end rounded-md from-muted/50 to-muted p-3 no-underline outline-none focus:shadow-md'
                                href={`/layanan/${service.type}`}
                              >
                                <h3 className='text-md font-semibold'>
                                  {service.title}
                                </h3>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href='/artikel' legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Artikel
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <div
                className={`${
                  scroll > 0 ? 'text-white' : ' dark:text-slate-400'
                } flex justify-center w-full gap-3 items-center`}
              >
                <ThemeToggle />
                <Link href='mailto:suromarmer@gmail.com' target='_blank'>
                  <IoIosMail size={24} className='dark:hover:text-slate-100' />
                </Link>
                <Link href='' target='_blank'>
                  <FaFacebookSquare
                    size={24}
                    className='dark:hover:text-slate-100'
                  />
                </Link>
                <Link
                  href='https://www.instagram.com/suromarmer.id/'
                  target='_blank'
                >
                  <FaInstagram
                    size={24}
                    className='dark:hover:text-slate-100'
                  />
                </Link>
                <Link
                  href='https://api.whatsapp.com/send/?phone=6282199067509&text=Halo+Admin%2CSaya+lihat+di+website+dan+tertarik+untuk+Konsultasi+tentang+jasa+yang+ada+di+website.+Terima+Kasih&type=phone_number&app_absent=0'
                  target='_blank'
                >
                  <FaWhatsapp size={24} className='dark:hover:text-slate-100' />
                </Link>
              </div>
            </div>

            <div
              className='flex items-center md:hidden cursor-pointer'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <ThemeToggle />
              <BiMenu
                className={`${
                  scroll > 0 ? 'text-white' : 'text-slate-400'
                } text-4xl`}
              />
            </div>
          </div>
          <div
            className={`w-full md:hidden  ${
              navbarOpen
                ? 'visible max-h-[1000px] transition-all duration-500 opacity-100 ease-in-out z-50'
                : 'invisible max-h-0 transition-all duration-300 ease-out  opacity-0 -z-10'
            } bg-primary absolute top-16 left-0 mt-3 shadow-md `}
          >
            <div className='flex flex-col py-3'>
              <Link
                className='text-white text-lg uppercase py-3 px-6 hover:bg-slate-200'
                href='/'
                onClick={closeNavbar}
              >
                Home
              </Link>
              <Link
                className='text-white text-lg uppercase py-3 px-6 hover:bg-slate-200'
                href='/galeri'
                onClick={closeNavbar}
              >
                Galeri
              </Link>
              <Accordion type='single' collapsible>
                <AccordionItem value='item-1'>
                  <AccordionTrigger className='text-white text-lg uppercase py-3 px-6'>
                    Layanan
                  </AccordionTrigger>
                  <AccordionContent className='text-white text-base py-3 px-6'>
                    <ul className='flex flex-col gap-1 p-2 md:w-[300px] text-center'>
                      {services.map((service, index) => (
                        <li
                          className='flex flex-col hover:bg-primary hover:text-secondary cursor-pointer rounded-md'
                          key={index}
                        >
                          <Link
                            className='gap-1 flex h-full w-full select-none flex-col justify-end rounded-md from-muted/50 to-muted p-3 no-underline outline-none focus:shadow-md'
                            href={`/layanan/${service.type}`}
                            onClick={closeNavbar}
                          >
                            <h3 className='text-base font-medium'>
                              {service.title}
                            </h3>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Link
                className='text-white text-lg uppercase py-3 px-6 hover:bg-slate-200'
                href='/artikel'
                onClick={closeNavbar}
              >
                Artikel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
