interface TextHeaderProps {
  text: string;
}

export const TextHeader: React.FC<TextHeaderProps> = ({ text }) => {
  return (
    <div className='justify-center flex mt-2 md:my-10'>
      <h1 className='text-teal-950 text-[25px] md:text-[40px] font-bold font-cormorant dark:text-secondary'>
        {text}
      </h1>
    </div>
  );
};
