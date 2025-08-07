/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { format, parseISO } from 'date-fns';
import { id } from 'date-fns/locale';
import { useParams } from 'next/navigation';
import React, { Fragment } from 'react';
import { IoEyeSharp } from 'react-icons/io5';

import './index.css';

import { BreadCrumb } from '@/components/BreadCrumb';
import { BaseLayout } from '@/components/layouts/BaseLayout';
import NextImage from '@/components/NextImage';

import { useGetArticleBySlug } from '@/hook/article/hook';
import { SideSecArticle } from '@/modules/article/detail/sidesec-article';
import LikeButton from '@/modules/article/like-article';

const ArticleDetailsModule = () => {
  const params = useParams();

  const { slug: articleSlug } = params;

  const __ARTICLEBREADCRUMB = [
    {
      name: 'Home',
      link: '/',
    },
    { name: 'Artikel', link: '/artikel' },
    {
      name: 'Detail',
      link: `/article/${articleSlug}`,
    },
  ];

  const { data } = useGetArticleBySlug(String(articleSlug));

  const article = data?.data.article;
  const relatedArticle = data ? data.data.relateds : [];

  return (
    <div className='w-full overflow-hidden'>
      <div className='min-h-[calc(110vh-200px)] w-full'>
        <BaseLayout>
          <section className='min-h-[100vh] mt-3 '>
            <div className=''>
              <BreadCrumb items={__ARTICLEBREADCRUMB} className='md:mb-2' />
            </div>
            <div className=''>
              <div className='max-w-[1440px] mx-auto'>
                <main className='grid grid-cols-3 gap-x-10'>
                  <section className='col-span-3 lg:col-span-2'>
                    <h1 className='font-bold text-xl md:text-3xl md:mb-2'>
                      {article?.title}
                    </h1>

                    <div>
                      <div className='flex justify-between text-neutral-500 text-sm md:text-base'>
                        <p>
                          Rizki Pratama -{' '}
                          {article?.created_at ? (
                            <>
                              {format(
                                parseISO(article?.created_at),
                                'dd MMMM yyyy',
                                {
                                  locale: id,
                                }
                              )}
                            </>
                          ) : (
                            <div>Invalid Date</div>
                          )}
                        </p>
                        <div className='flex gap-2'>
                          <div className='text-base font-normal leading-[18px] text-neutral-500 flex gap-1 dark:text-white'>
                            <IoEyeSharp />
                            <p>{article?.views}</p>
                          </div>
                          <LikeButton
                            id={String(article?.id)}
                            likes={article?.likes ?? 0}
                          />
                        </div>
                      </div>
                      <div className='w-full rounded-lg flex justify-center my-6'>
                        <NextImage
                          useSkeleton
                          src={
                            article?.thumbnail
                              ? article?.thumbnail.replace('/uploads', '')
                              : '/images/artikel.png'
                          }
                          width={600}
                          height={400}
                          alt={article?.slug as string}
                          className='object-fill'
                        />
                      </div>
                      <div className='py-4 md:text-base text-justify '>
                        <p
                          className='article-detail dark:text-white'
                          dangerouslySetInnerHTML={{
                            __html: article
                              ? article?.content
                              : 'Belum Ada Artikel',
                          }}
                        ></p>
                      </div>
                    </div>
                  </section>
                  <section className='col-span-3 lg:col-span-1 mt-6'>
                    <h1 className='font-bold text-xl flex justify-center dark:text-secondary'>
                      Artikel Terkait
                    </h1>
                    <span className='h-[4px] w-24 bg-blue-base block rounded-md mb-2'></span>
                    <div className='h-[550px] overflow-auto scrollbar-thin scrollbar-thumb-blue-base scrollbar-thumb-rounded-lg'>
                      <div className='flex flex-col gap-3'>
                        {relatedArticle.length > 0 ? (
                          relatedArticle.map((article: any) => {
                            return (
                              <Fragment key={article.id}>
                                <SideSecArticle data={...article} />
                              </Fragment>
                            );
                          })
                        ) : (
                          <div className='flex justify-center items-center h-full'>
                            <p className='text-center dark:text-slate-400'>
                              Belum Ada Artikel Terkait
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </section>
                </main>
              </div>
            </div>
          </section>
        </BaseLayout>
      </div>
    </div>
  );
};

export default ArticleDetailsModule;
