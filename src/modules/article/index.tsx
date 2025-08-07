'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';

import ArticleCard from '@/components/card/ArticleCard';
import { BaseLayout } from '@/components/layouts/BaseLayout';
import { SkeletonCard } from '@/components/skeleton/SkeletonCard';
import { Input } from '@/components/ui/input';

import { articlesGetRequest } from '@/hook/article/request';
import { TextHeader } from '@/components/TextHeader';

const ArticleModules = () => {
  const { ref, inView } = useInView();
  const pathname = usePathname();

  const query = useSearchParams();
  const [search, setSearch] = useState('');
  const searchQuery = query.get('search') || '';
  const [deb, setDeb] = useState(searchQuery);

  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    error,
  } = useInfiniteQuery({
    queryKey: ['get-articles', search],
    queryFn: articlesGetRequest
      ? async ({ pageParam = 1 }) => {
          return await articlesGetRequest({ pageParam, search });
        }
      : undefined,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.meta.has_next
        ? lastPage.meta.current_page + 1
        : undefined;
    },
  });

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setSearch(deb);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [deb]);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (status === 'error') {
    return <p>Error: {error.message}</p>;
  }

  const allArticles = data?.pages.flatMap((page) => page.data.articles) || [];

  const isAdmin = pathname.startsWith('/admin');

  return (
    <div className='w-full overflow-hidden'>
      <div className='min-h-[calc(100vh-200px)] w-full'>
        <BaseLayout>
          <div className='flex flex-col'>
            <TextHeader text={isAdmin ? 'Kelola Artikel' : 'Artikel Kami'} />
            <div className='w-full relative px-5 py-3 md:py-0'>
              <Input
                type='text'
                placeholder='Cari Artikel...'
                className='pl-10 shadow-sm w-full h-12 rounded-lg border border-gray-200 focus:border-teal-950 focus:ring-1 focus:ring-teal-950 focus:outline-none'
                value={deb}
                onChange={(e) => setDeb(e.target.value)}
              />
              <div className='absolute inset-y-0 left-0 flex items-center pl-7 pointer-events-none'>
                <AiOutlineSearch className='text-gray-400' size={20} />
              </div>
            </div>
            <div className='w-full p-5'>
              {isLoading ? (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className='animate-pulse'>
                      <SkeletonCard />
                    </div>
                  ))}
                </div>
              ) : allArticles.length > 0 ? (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                  {allArticles.map((item, index) => (
                    <ArticleCard
                      key={index}
                      thumbnail={item.thumbnail.replace('/uploads', '')}
                      titleName={item.title}
                      createdAt={item.created_at}
                      description={item.content.replace(
                        /<[^>]*>|(\n)|(<li>)/g,
                        ' '
                      )}
                      detailed={`/artikel/${item.slug}`}
                      views={item.views}
                      likes={item.likes}
                      idArticle={String(item.id)}
                    />
                  ))}
                  {isFetchingNextPage &&
                    Array.from({ length: 3 }).map((_, index) => (
                      <div key={index} className='animate-pulse'>
                        <SkeletonCard />
                      </div>
                    ))}
                </div>
              ) : (
                <div className='flex justify-center items-center w-full h-full'>
                  <p className='text-gray-400'>Artikel tidak ditemukan</p>
                </div>
              )}
            </div>
            <div ref={ref} className='h-10'></div>
          </div>
        </BaseLayout>
      </div>
    </div>
  );
};

export default ArticleModules;
