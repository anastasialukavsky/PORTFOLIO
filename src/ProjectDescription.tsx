import React, { useState, useEffect, useRef, SetStateAction, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

export type ProjectDescProps = {
  description: string;
  projectDescHeight: number;
  setProjectDescHeight: React.Dispatch<React.SetStateAction<number>>;
  setIsFullDescription: React.Dispatch<React.SetStateAction<boolean>>;
  isFullDescription: boolean;
  setShortDescriptionHeight: React.Dispatch<React.SetStateAction<number>>;
  shortDescriptionHeight: number;
  fullDescriptionHeight:number
  setFullDescriptionHeight: React.Dispatch<React.SetStateAction<number>>;
};
export default function ProjectDescription({
  description,
  isFullDescription,
  setIsFullDescription,
  setProjectDescHeight,
  projectDescHeight,
  fullDescriptionHeight,
  shortDescriptionHeight,
  setFullDescriptionHeight,
  setShortDescriptionHeight,
}: ProjectDescProps) {
  const [toggleDesc, setToggleDesc] = useState(true);
  const descRef = useRef<HTMLDivElement>(null);

  //set initial projectHeight to 0

  let shortDescription = description.slice(0, 200) + '...';
  let fullDescription = description;

  const handleFullDescription = () => {
    setToggleDesc((prev) => !prev);
    setIsFullDescription((prev) => !prev);
  };

  console.log(isFullDescription)
  // useLayoutEffect(() => {

  //   if(isFullDescription) {

  //     const ctx = gsap.context(() => {
  //       gsap.to(descRef.current, {
  //         height: fullDescriptionHeight,
  //         ease: 'none',
  //         duration: 1
  //       })
  //     })
  //     return () => ctx.revert()
  //   }
  // }, [isFullDescription])


  useEffect(() => {
    if (!descRef.current) return;

    if (toggleDesc) {
      setProjectDescHeight(0);
      setShortDescriptionHeight(descRef.current.getBoundingClientRect().height);
    } else {
      setFullDescriptionHeight(descRef.current.getBoundingClientRect().height);
      setProjectDescHeight(heightDifference);
    }
  }, [toggleDesc, projectDescHeight]);

  // console.log(descRef.current)
  // console.log({ isFullDescription });
  // console.log({ shortDescriptionHeight });
  // console.log({ fullDescriptionHeight });
  // console.log({ shortDescription });
  // console.log({ fullDescription });

  const heightDifference = fullDescriptionHeight - shortDescriptionHeight;
  // console.log({ heightDifference });

  // console.log({projectDescHeight})
  // useEffect(() => {
  //   // setProjectDescHeight(heightDifference);
  //   // console.log({ heightDifference });
  // }, [heightDifference, projectDescHeight]);
  // console.log('diff', heightDifference);

  return (
    <article ref={descRef} className='stack-content w-full h-fit lg:text-[.8rem] xl:text-[.9rem] text-[.6rem] leading-tight'>
      {toggleDesc ? (
        <>
          {shortDescription}
          <span
            className='font-black underline '
            onClick={handleFullDescription}
          >
            see more
          </span>
        </>
      ) : (
        <>
          {fullDescription}
          <span
            className='font-black underline'
            onClick={handleFullDescription}
          >
            see less
          </span>
        </>
      )}
    </article>
  );
}
