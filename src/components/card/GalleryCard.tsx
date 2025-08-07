import React, { useState } from 'react';

import NextImage from '@/components/NextImage';
import { Card, CardHeader } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

import { TServiceImage } from '@/modules/layanan/type';

export interface GalleryCardProps {
  gallery: TServiceImage[];
}

const GalleryCard = ({ gallery }: GalleryCardProps) => {
  const [currentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState<TServiceImage | null>(null);
  const itemsPerPage = 8;
  const handleItemClick = (item: TServiceImage) => {
    setSelectedItem(item);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = gallery.slice(startIndex, endIndex);

  return (
    <>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full'>
        {currentItems.map((item, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <Card
                onClick={() => handleItemClick(item)}
                className='w-full h-auto border-none shadow-none cursor-pointer'
              >
                <CardHeader className='p-0'>
                  <div className='flex flex-col items-center justify-between h-full'>
                    <div className='flex items-center justify-center relative w-[90%] m-2 h-60 overflow-hidden rounded-md shadow-md'>
                      <NextImage
                        src={item.image}
                        alt={item.title}
                        className='rounded-full'
                        layout='fill'
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className='flex items-center justify-center h-8'>
                      <p className='text-base text-center'>{item.title}</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </DialogTrigger>
            <DialogContent className='lg:max-w-[50rem] md:max-w-[40rem] max-w-[25rem] p-0'>
              <div className='flex md:flex-row flex-col'>
                <div className='flex items-center justify-center text-center'>
                  <div className='w-full md:w-[30rem] lg:mr-6'>
                    <NextImage
                      useSkeleton
                      src={selectedItem?.image || '/images/Slide-1.png'}
                      alt={selectedItem?.title || 'Slide 1'}
                      className='rounded w-full h-auto items-center justify-center'
                      width={350}
                      height={350}
                      layout='responsive'
                      style={{
                        objectFit: 'contain',
                        width: '80vw',
                        height: 'auto',
                        maxHeight: '60vh',
                      }}
                    />
                  </div>
                </div>
                <div className='w-full lg:w-1/2 md:w-2/4 px-2 py-3'>
                  <div className='flex flex-col items-start'>
                    <h3 className='font-bold text-lg dark:text-white'>
                      {selectedItem?.title}
                    </h3>
                    <p className='text-sm dark:text-white'>
                      {selectedItem?.description}
                    </p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </>
  );
};

export default GalleryCard;
