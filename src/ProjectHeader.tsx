import React from 'react'

export type ProjectHeaderProps = {
  projectName: string
}
export default function ProjectHeader({projectName}: ProjectHeaderProps) {
  return (
    <div>
      <p className='text-center md:text-[1rem] lg:text-[1.2rem] xl:text-[1.4rem] 2xl:text-[2rem] text-[5vw] pt-5 md:pt-0 short:text-[1.6rem] text-[#121212] font-mono font-bold portrait:text-[1.5rem] portrait:pt-0 portrait:md:pt-5 portrait:md:text-[1.8rem]'>
        {projectName}
      </p>
    </div>
  );
}
