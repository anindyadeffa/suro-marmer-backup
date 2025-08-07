import { useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { BiLike, BiSolidLike } from 'react-icons/bi';

import { useLikeArticle } from '@/hook/article/hook';

interface LikeArticleProps {
  id: string;
  likes: number;
}

const LikeButton = ({ id, likes }: LikeArticleProps) => {
  const queryClient = useQueryClient();

  const { mutate: updateSwitch } = useLikeArticle(id);

  const handleLikeArticle = async () => {
    await updateSwitch(id, {
      onSuccess: () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        queryClient.invalidateQueries(['like-article'] as any);
      },
    });
  };

  const liked = likes > 0;

  return (
    <button
      onClick={handleLikeArticle}
      className='text-base font-normal leading-[18px] text-neutral-500 flex gap-1 hover:text-primary dark:text-white dark:hover:text-white'
    >
      {liked ? (
        <BiSolidLike size={18} className='dark:text-white' />
      ) : (
        <BiLike />
      )}
      {liked && <span> {likes} </span>}
    </button>
  );
};

export default LikeButton;
