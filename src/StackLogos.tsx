import React from 'react'


type StackLogosProps = {
  item: string;
  logoIcon:string;
}


export default function StackLogos({item, logoIcon}: StackLogosProps) {
  return (
  <>
      <img
        src={logoIcon}
        alt=''
        className='h-6 w-6 lg:h-8 lg:w-8 xl:h-10 xl:w-11 2xl:w-16 short:w-10 short:h-8 xshort:h-4 xshort:w-8 portrait:w-10 portrait:h-10'
        />
      <p className='text-center  text-[.5rem] lg:text-[.7rem] xl:text-[.9rem] 5xl:text-[.9rem] 6xl:text-[1rem] portrait:text-[.9rem]'>
        {item}
      </p>
        </>
    
  );
}
