import React, {
  useRef,
  useEffect,
  useState,
  useLayoutEffect,
  useImperativeHandle,
} from 'react';
import { gsap } from 'gsap';

import StackLogos from './StackLogos';

import { logos } from './logos';

export type Logo = keyof typeof logos;

export type ProjectStackProps = {
  frontEnd: Logo[];
  backEnd: Logo[];
  projectDescHeight: number;
  isFullDescription: boolean;
  shortDescriptionHeight: number;
  fullDescriptionHeight: number;
  setFullStackHeight: React.Dispatch<React.SetStateAction<number>>;
  setShortStackHeight: React.Dispatch<React.SetStateAction<number>>;
  fullStackHeight: number;
  shortStackHeight: number;
  toggleDesc: boolean;
  // wrapperHeight: number;
};

const ProjectStack = React.forwardRef(
  (
    {
      frontEnd,
      backEnd,
      setFullStackHeight,
      fullStackHeight,
      setShortStackHeight,
      shortStackHeight,
      projectDescHeight,
      isFullDescription,
      fullDescriptionHeight,
      shortDescriptionHeight,
      toggleDesc,
    }: ProjectStackProps,
    ref
  ) => {
    const localStackRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => localStackRef.current);

    //* stack height setters
    useEffect(() => {
      if (!localStackRef.current) return;

      const fHeight = localStackRef.current?.getBoundingClientRect().height;
      const sHeight = localStackRef.current?.getBoundingClientRect().height;
      if (!toggleDesc) {
        setFullStackHeight(fHeight);
      } else {
        setShortStackHeight(sHeight);
      }
    }, [localStackRef.current]);

    // console.log(localStackRef.current?.getBoundingClientRect());
    // console.log({ fullDescriptionHeight });

    //*stack anim
    // useLayoutEffect(() => {
    //   console.log({ fullStackHeight });
    //   if (!localStackRef.current) return;
    //   const ctx = gsap.context(() => {
    //     const tl = gsap.timeline({});

    //     if (toggleDesc) {
    //       tl.fromTo(
    //         localStackRef.current,
    //         {
    //           maxHeight: fullStackHeight + 'px',
    //           ease: 'power1.inOut',
    //           duration: 1.5,
    //         },
    //         {
    //           maxHeight: '100px',
    //         }
    //       );



    //     } else if (!toggleDesc) {
    //       tl.fromTo(
    //         localStackRef.current,
    //         {
    //           maxHeight: fullStackHeight + 'px',
    //         },
    //         {
    //           maxHeight: fullStackHeight + 'px',
    //           ease: 'none',
    //           duration: 1,
    //           // overflow: 'hidden',
    //         }
    //       );
    //     }
    //   });

    //   return () => ctx.revert();
    // }, [toggleDesc, fullStackHeight]);

    const renderLogos = (logosArray: Logo[]) => {
      return logosArray.map((item) => {
        const logoIcon = logos[item];
        if (logoIcon) {
          return (
            <li
              key={item}
              className='place-self-center flex flex-col justify-between  gap-2  w-full items-center h-full portrait:h-fit'
            >
              <StackLogos logoIcon={logoIcon} item={item} />
            </li>
          );
        }
        return null;
      });
    };

    return (
      <article
        ref={localStackRef}
        className='  border border-[#121212] landscape:h-full max-h-[100vh] w-full 6xl:mb-36 portrait:h-fit shrink-1 overflow-hidden'
      >
        <section className='h-full w-full p-2 lg:p-2 xl:p-5 xshort:p-1 portrait:max-h-full portrait:h-fit portra portrait:p-0 portrait:px-2'>
          <h2 className='text-center pb-3 2xl:pb-5 text-[.7rem] font-bold lg:text-[.8rem] xl:text-[1rem] 4xl:text-[1.1rem] 5xl:text-[1.2rem] portrait:text-[1.1rem] portrait:pt-4 portrait:pb-6'>
            //front-end
          </h2>
          <ul className='grid grid-cols-6 lg:grid-cols-5 3xl:grid-cols-6 gap-2 xl:gap-4 2xl:gap-6 w-full h-fit short:gap-2 short:grid-cols-6 xshort:gap-1 portrait:grid-cols-3 xshort:grid-cols-6 portrait:gap-5'>
            {renderLogos(frontEnd)}
          </ul>

          <h2 className='text-center pt-5 xl:pt-9 text-[.7rem] pb-2  2xl:pb-5 font-bold lg:text-[.8rem] xl:text-[1rem] 4xl:text-[1.1rem] 5xl:text-[1.2rem] short:pt-4 portrait:text-[1.1rem] portrait:pt-10 portrait:pb-5'>
            //back-end
          </h2>
          <ul className='grid grid-cols-6  lg:grid-cols-5 3xl:grid-cols-6 gap-2 xl:gap-4 2xl:gap-6 w-full h-fit xl:pb-2 2xl:pb-0 short:gap-2 short:grid-cols-6 xshort:gap-1 xshort:grid-cols-6 portrait:grid-cols-3 portrait:gap-5'>
            {renderLogos(backEnd)}
          </ul>
        </section>
      </article>
    );
  }
);

export default ProjectStack;
