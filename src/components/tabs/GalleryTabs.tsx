import React, { useState } from 'react';

import GalleryCard from '@/components/card/GalleryCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { useGetAllServices, useGetServicBySlug } from '@/hook/services/hook';

const GalleryTabs = () => {
  const { data: serviceData } = useGetAllServices();
  const [selectedType, setSelectedType] = useState('marmer-granit');

  const typeGallery =
    serviceData?.data?.galleries.map((gallery) => gallery.type) || [];
  const { data } = useGetServicBySlug(selectedType);
  const galleryImages = data?.data?.gallery?.images || [];

  return (
    <Tabs
      defaultValue={selectedType}
      className='my-5'
      onValueChange={(value) => setSelectedType(value)}
    >
      <TabsList className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full lg:w-auto overflow-x-auto lg:overflow-x-visible h-40 lg:h-9 items-center text-muted-foreground justify-start rounded-none border-b bg-transparent p-0'>
        {typeGallery.map((type) => (
          <TabsTrigger
            key={type}
            value={type}
            className='flex-shrink-0 items-center justify-center whitespace-nowrap py-1 text-md sm:text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background h-full lg:h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-2 sm:px-4 pb-2 sm:pb-3 pt-1 sm:pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none'
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </TabsTrigger>
        ))}
      </TabsList>

      {typeGallery.map((type) => (
        <TabsContent key={type} value={type}>
          {galleryImages.length > 0 ? (
            <GalleryCard gallery={galleryImages} />
          ) : (
            <div className='text-center text-muted-foreground items-center mt-10'>
              {`Tidak ada gambar untuk ${type}`}
            </div>
          )}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default GalleryTabs;
