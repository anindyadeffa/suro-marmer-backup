export function SkeletonCard() {
  return (
    <div className='flex flex-col rounded-md'>
      <div className='w-full p-4 h-64 relative'>
        <div className='h-full w-full bg-gray-300 rounded-md'></div>
      </div>
      <div className='pr-6 ps-6 pb-6 pt-3'>
        <section className='flex gap-1'>
          <div className='rounded-md py-1 text-xs font-normal leading-[18px] text-neutral-500 w-24 h-4 bg-gray-300'></div>
        </section>
        <section className='flex flex-col gap-3 mt-2'>
          <div className='line-clamp-2 hover:line-clamp-none text-teal-950 text-lg font-semibold h-5 bg-gray-300 w-full rounded-md'></div>
          <div className='line-clamp-2 hover:line-clamp-none text-teal-950 text-lg font-semibold h-5 bg-gray-300 w-full rounded-md'></div>
        </section>
        <section className='flex flex-col gap-3 mt-3'>
          <div className='line-clamp-2 hover:line-clamp-none text-teal-950 text-lg font-semibold h-4 bg-gray-300 w-full rounded-md'></div>
          <div className='line-clamp-2 hover:line-clamp-none text-teal-950 text-lg font-semibold h-4 bg-gray-300 w-full rounded-md'></div>
          <div className='line-clamp-2 hover:line-clamp-none text-teal-950 text-lg font-semibold h-4 bg-gray-300 w-full rounded-md'></div>
        </section>
      </div>
      <div className='flex gap-2 justify-between pr-6 ps-6 pb-6 pt-3'>
        <div className='flex gap-2 tracking-wide text-teal-950 text-sm font-medium w-24 h-4 bg-gray-300 rounded-md'></div>
        <div className='flex gap-2'>
          <div className='text-base font-normal leading-[18px] text-neutral-500 flex gap-1 w-12 h-4 bg-gray-300 rounded-md'></div>
          <div className='w-6 h-6 bg-gray-300 rounded-full'></div>
        </div>
      </div>
    </div>
  );
}
