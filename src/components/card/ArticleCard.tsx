import { format, parseISO } from 'date-fns';
import { id } from 'date-fns/locale';
import Link from 'next/link';
import React from 'react';
import { IoEyeSharp } from 'react-icons/io5';

import NextImage from '@/components/NextImage';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import LikeButton from '@/modules/article/like-article';
import { usePathname, useRouter } from 'next/navigation';
import { PopoverAction } from '@/components/PopOverAction';
import { useQueryClient } from '@tanstack/react-query';
import { useDeleteArticle } from '@/hook/article/hook';
import { useToast } from '@/components/ui/use-toast';

export type TArticleProps = {
  key: unknown;
  thumbnail: string;
  titleName: string;
  createdAt: string;
  description: string;
  detailed: string;
  views: number;
  likes: number;
  idArticle: string;
};

const ArticleCard = ({
  thumbnail,
  titleName,
  createdAt,
  description,
  detailed,
  views,
  likes,
  idArticle,
}: TArticleProps) => {
  const cleanDescription = (html: string) => {
    return html.replace(/<[^>]*>?/gm, '');
  };

  const pathname = usePathname();
  const router = useRouter();

  const isAdmin = pathname.startsWith('/admin');

  const queryClient = useQueryClient();

  const { mutate } = useDeleteArticle(idArticle);

  const { toast } = useToast();

  const handleSubmitDelete = async () => {
    await mutate(idArticle, {
      onSuccess: () => {
        toast({
          variant: 'default',
          title: 'Artikel Berhasil Dihapus',
          description: 'Artikel yang Anda pilih telah berhasil dihapus.',
        });
        queryClient.invalidateQueries(['get-articles'] as any);
      },
      onError: (error: any) => {
        if (error.response?.status === 401) {
          toast({
            variant: 'destructive',
            title: 'Sesi Anda Telah Berakhir!',
            description: 'Sesi Anda telah berakhir. Silakan login kembali.',
          });
          router.push(
            `/auth/login?callbackUrl=${encodeURIComponent(
              window.location.pathname
            )}`
          );
        }
      },
    });
  };

  return (
    <Card className='flex flex-col rounded-md'>
      <CardHeader className='w-full p-4 h-64 relative'>
        {' '}
        <NextImage
          useSkeleton
          src={thumbnail}
          alt={titleName}
          layout='fill'
          className='object-cover w-full rounded-md'
          style={{ objectFit: 'cover', borderRadius: 'inherit' }}
          sizes='100vw'
        />
      </CardHeader>

      <CardContent className='p-6'>
        <section className='flex gap-1'>
          <span className='rounded-md py-1 text-xs font-normal leading-[18px] text-neutral-500 dark:text-white'>
            {createdAt ? (
              <div>
                {format(parseISO(createdAt), 'dd MMMM yyyy', {
                  locale: id,
                })}
              </div>
            ) : (
              <p>Invalid Date</p>
            )}
          </span>
          {isAdmin && (
            <div className=''>
              <PopoverAction
                typeText='artikel'
                onDeleted={handleSubmitDelete}
                link={`/admin/artikel/edit/${idArticle}`}
              />
            </div>
          )}
        </section>
        <Link href={detailed}>
          <section className='flex flex-col gap-3 mt-1'>
            <CardTitle className='line-clamp-2 hover:line-clamp-none text-teal-950 text-lg font-semibold h-14 dark:text-secondary'>
              {titleName}
            </CardTitle>
            <CardDescription className='line-clamp-3 text-teal-950 text-[15px] font-normal leading-[23px] dark:text-white'>
              {cleanDescription(description)}
            </CardDescription>
          </section>
        </Link>
      </CardContent>

      <CardFooter className='flex gap-2 justify-between'>
        <div className='flex gap-2 tracking-wide text-teal-950 text-sm font-medium dark:text-secondary'>
          <Link href={detailed}>Lihat Lebih Banyak</Link>
        </div>
        <div className='flex gap-2'>
          <div className='text-base font-normal leading-[18px] text-neutral-500 flex gap-1 dark:text-white'>
            <IoEyeSharp />
            <p>{views}</p>
          </div>
          <LikeButton id={idArticle} likes={likes} />
        </div>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
