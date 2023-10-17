import React, {
  useState,
  useEffect,
  useRef,
  SetStateAction,
  useLayoutEffect,
} from 'react';
import { gsap } from 'gsap';
import { setQuaternionFromProperEuler } from 'three/src/math/MathUtils.js';

export type ProjectDescProps = {
  description: string;
  projectDescHeight: number;
  setProjectDescHeight: React.Dispatch<React.SetStateAction<number>>;
  setIsFullDescription: React.Dispatch<React.SetStateAction<boolean>>;
  isFullDescription: boolean;
  setShortDescriptionHeight: React.Dispatch<React.SetStateAction<number>>;
  shortDescriptionHeight: number;
  fullDescriptionHeight: number;
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
  const [toggleDesc, setToggleDesc] = useState(false);
  const descRef = useRef<HTMLDivElement>(null);

  //set initial projectHeight to 0

  let shortDescription = description.slice(0, 200) + '...';
  let fullDescription = description;

  const handleFullDescription = () => {
    setToggleDesc((prev) => !prev);
    setIsFullDescription((prev) => !prev);
  };

  // useLayoutEffect(() => {
  //   // console.log(isFullDescription)
  //   console.log({projectDescHeight})
  //   console.log({ shortDescriptionHeight });
  //   console.log({ fullDescriptionHeight });

  //   if(isFullDescription) {

  //     const ctx = gsap.context(() => {
  //       gsap.to(descRef.current, {
  //         height: fullDescriptionHeight,
  //         ease: 'none',
  //         duration: 2
  //       })
  //     })
  //     return () => ctx.revert()
  //   }
  // }, [isFullDescription])

  // useLayoutEffect(() => {
  //   if (!descRef.current) return;

  //   if (isFullDescription) {
  //     gsap.to(descRef.current, {
  //       height: fullDescriptionHeight,
  //       ease: 'power1.inOut', // Adjust the easing if needed
  //       duration: 2,
  //     });
  //   } else {
  //     gsap.to(descRef.current, {
  //       height: shortDescriptionHeight,
  //       ease: 'power1.inOut', // Adjust the easing if needed
  //       duration: 2,
  //     });
  //   }
  // }, [isFullDescription, shortDescriptionHeight, fullDescriptionHeight]);
  useEffect(() => {
    if (!descRef.current) return;

    if (toggleDesc) {
      setProjectDescHeight(descRef.current.getBoundingClientRect().height);

      setShortDescriptionHeight(descRef.current.getBoundingClientRect().height);
    } else {
      // setFullDescriptionHeight(descRef.current.getBoundingClientRect().height);

      setProjectDescHeight(heightDifference);
    }
  }, [toggleDesc, projectDescHeight]);



  useEffect(() => {
    
      setTimeout(() => {
        setToggleDesc(true);
        setFullDescriptionHeight(descRef.current?.getBoundingClientRect().height || 0)
      }, 100);
  
  }, []);
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
    <article
      ref={descRef}
      className='desc-content w-full max-h-fit h-full lg:text-[.8rem] xl:text-[.9rem] 4xl:text-[1rem] text-[.6rem] 6xl:text-[1.1rem] leading-tight 2xl:leading-normal portrait:text-[1rem] portrait:pl-2 portrait:h-full overflow-hidden shrink-0'
    >
      {toggleDesc ? (
        <>
          {shortDescription}
          <span
            className='font-bold underline '
            onClick={handleFullDescription}
          >
            see more
          </span>
        </>
      ) : (
        <>
          {fullDescription}
          <span className='font-bold underline' onClick={handleFullDescription}>
            see less
          </span>
        </>
      )}
    </article>
  );
}
