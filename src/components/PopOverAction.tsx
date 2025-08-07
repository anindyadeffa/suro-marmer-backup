'use client';

import Link from 'next/link';
import { BiEdit } from 'react-icons/bi';
import { FaTrash } from 'react-icons/fa';
import { IoMdMore } from 'react-icons/io';

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { DeleteModal } from '@/components/DeletedModal';

interface PopOverProps {
  typeText: string;
  onDeleted: () => void;
  link: string;
}

export const PopoverAction: React.FC<PopOverProps> = ({
  typeText,
  onDeleted,
  link,
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className='bg-transparent text-gray-900 hover:bg-transparent hover:text-gray-900 px-2'>
          <IoMdMore size={25} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-48'>
        <div className='rounded-md flex flex-col gap-3'>
          <Link href={link}>
            <div className='flex items-center gap-5 text-white hover:text-neutral-300 cursor-pointer'>
              <BiEdit />
              <p className='text-start'>Edit</p>
            </div>
          </Link>
          <hr />
          <DeleteModal
            modalTrigger={
              <div className='flex items-center text-red-900 hover:text-red-700 gap-5 cursor-pointer'>
                <FaTrash />
                <p className='text-start'>Hapus</p>
              </div>
            }
            typeText={typeText}
            onDeleted={onDeleted}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};
