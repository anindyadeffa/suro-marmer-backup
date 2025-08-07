import { FC, ReactElement } from 'react';

type TBaseLayout = {
  children: ReactElement;
};

export const BaseLayout: FC<TBaseLayout> = ({ children }): ReactElement => {
  return (
    <div className='w-full px-4 sm:px-8 md:px-12 lg:px-16'>
      <div className='md:mx-[70px] mx-auto'>
        <>{children}</>
      </div>
    </div>
  );
};
