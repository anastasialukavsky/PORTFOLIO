import React from 'react';
import redirect from '../public/icons/redirect.svg';

export type ProjectBtnProps = {
  link: string;
};

export default function ProjectButton({ link }: ProjectBtnProps) {
  return (
    <div className='cursor-pointer flex  w-fit self-end h-fit items-center align-baseline pb-2 xl:pb-4 4xl:pb-8 5xl:pr-[8%] 6xl:pb-0 6xl:pr-[9%] portrait:pt-3 portrait:pb-5'>
      <a
        id={link}
        role='link'
        aria-label='external project link'
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        className={` 
                   group relative  inline-block  max-w-full  font-medium text-[#121212] focus:outline-none `}
      >
        <span className='absolute inset-0 border border-[#353939] bg-[#353939]  z-0 '></span>
        <span
          className={` 
   border border-[#121212]  px-2 4xl:px-3 relative  -translate-x-1 -translate-y-1  4xl:py-2 5xl:text-[.9rem]  flex py-1 z-20 bg-white gap-2 lg:text-[.7rem] text-[.6rem] 2xl:text-[.8rem] xl:text-[.8rem] font-mono portrait:text-[.9rem]`}
        >
          project link <img src={redirect} alt='' className='w-[10px] xl:w-[11px] 2xl:w-[12px] 5xl:w-[16px] portrait:w-[15px]' />
        </span>
      </a>
    </div>
  );
}
