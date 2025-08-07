import { FC, ReactElement } from 'react';

export const Loading: FC = (): ReactElement => {
  return (
    <div className='flex h-screen w-full justify-center items-center'>
      <div className='flex gap-2'>
        <div className='w-5 h-5 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]'></div>
        <div className='w-5 h-5 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]'></div>
        <div className='w-5 h-5 rounded-full bg-primary animate-bounce'></div>
      </div>
    </div>
  );
};
