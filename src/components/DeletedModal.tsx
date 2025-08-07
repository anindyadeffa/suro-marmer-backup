import { IoWarningOutline } from 'react-icons/io5';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface modalTriggerProps {
  typeText: string;
  modalTrigger: React.ReactNode;
  onDeleted: () => void;
}

export const DeleteModal = ({
  modalTrigger,
  typeText,
  onDeleted,
}: modalTriggerProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{modalTrigger}</DialogTrigger>
      <DialogContent className='sm:max-w-[425px] text-center p-12'>
        <DialogHeader>
          <div className='flex justify-center items-center'>
            <div className='p-3 rounded-full bg-red-200'>
              <IoWarningOutline className='text-red-800' size={24} />
            </div>
          </div>
          <DialogTitle>
            <h6 className='text-center leading-5'>
              {`Apakah Anda ingin menghapus ${typeText} ini?`}
            </h6>
          </DialogTitle>

          <DialogDescription className='text-center'>
            {`${typeText} yang telah dihapus tidak dapat dikembalikan.`}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className='flex w-full justify-between'>
          <DialogClose asChild>
            <Button variant='outline' className='w-full'>
              Tinjau Ulang
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              type='submit'
              className='bg-red-800 hover:bg-red-900 w-full'
              onClick={onDeleted}
            >
              Hapus
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
