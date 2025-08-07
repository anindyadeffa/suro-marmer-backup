/* eslint-disable @typescript-eslint/no-explicit-any */
import { format, parseISO } from 'date-fns';
import { id } from 'date-fns/locale';
import Image from 'next/image';
import Link from 'next/link';
import { FC, ReactElement } from 'react';
import { BiSolidLike } from 'react-icons/bi';
import { IoEyeSharp } from 'react-icons/io5';

export const SideSecArticle: FC<any> = ({ data }): ReactElement => {
  return (
    <Link href={`/artikel/${data.slug}`}>
      <section className='py-2'>
        <section className='flex gap-3 pe-2'>
          <Image
            width={20}
            height={20}
            sizes='30vw'
            src={
              data?.thumbnail.replace('/uploads', '') || '/images/Slide 1.png'
            }
            alt={data?.slug || 'Slide 1'}
            className='flex-shrink-0 w-24 h-24 bg-blue-200 rounded-md object-cover'
          />
          <main className='flex flex-col justify-start'>
            <h1 className='pr-10 text-sm font-bold line-clamp-2 hover:line-clamp-none mb-1 dark:text-secondary'>
              {data?.title}
            </h1>
            <h1 className='text-xs line-clamp-3 mb-1'>
              {data?.content.replace(/<[^>]*>|(\n)|(<li>)/g, ' ')}
            </h1>
            <section className='flex items-center gap-2 flex-wrap text-xs text-neutral-600 justify-between'>
              <div className='flex items-center gap-2 dark:text-secondary'>
                <h1>Rizki Pratama</h1>
                <span>|</span>{' '}
                <h1>
                  {data?.created_at ? (
                    <>
                      {format(parseISO(data?.created_at), 'dd MMMM yyyy', {
                        locale: id,
                      })}
                    </>
                  ) : (
                    <p>Invalid Date</p>
                  )}
                </h1>
              </div>
              <div className='flex gap-2'>
                <div className='text-sm font-normal leading-[18px] text-neutral-500 flex gap-1'>
                  <IoEyeSharp />
                  <p>{data?.views}</p>
                </div>
                <div className='text-sm font-normal leading-[18px] text-neutral-500 flex gap-1'>
                  <BiSolidLike />
                  <p>{data?.likes}</p>
                </div>
              </div>
            </section>
          </main>
        </section>
      </section>
    </Link>
  );
};
