import React from 'react';
import redirect from '../public/icons/redirect.svg';

export type ProjectBtnProps = {
  link: string;
};

export default function ProjectButton({ link }: ProjectBtnProps) {
  return (
    <div className='cursor-pointer flex  w-fit self-end h-fit items-center align-baseline pb-2'>
      <a
        id='project-link'
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        className={` 
                   group relative  inline-block  max-w-full  font-medium text-[#121212] focus:outline-none `}
      >
        <span className='absolute inset-0 border border-[#353939]] bg-[#353939]  z-0 '></span>
        <span
          className={` 
   border border-[#121212]  px-2  relative  -translate-x-1 -translate-y-1  4xl:py-4 5xl:text-[1.3vw] 6xl:text-[1.1vw] flex py-1 z-20 bg-white gap-2 lg:text-[.7rem] text-[.5rem]`}
        >
          project link <img src={redirect} alt='' className='w-[10px] lg:h-3' />
        </span>
      </a>
    </div>
  );
}
