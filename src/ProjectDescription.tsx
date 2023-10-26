import React, {
  // useState,
  useEffect,
  useLayoutEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { gsap } from 'gsap';

export type ProjectDescProps = {
  description: string;
  isFullDescription: boolean;
  setIsFullDescription: React.Dispatch<React.SetStateAction<boolean>>;
  shortDescriptionHeight: number;
  setShortDescriptionHeight: React.Dispatch<React.SetStateAction<number>>;
  toggleDesc: boolean;
  setToggleDesc: React.Dispatch<React.SetStateAction<boolean>>;
};
const ProjectDescription = React.forwardRef(
  (
    {
      description,
      isFullDescription,
      setIsFullDescription,
      shortDescriptionHeight,
      setShortDescriptionHeight,
      toggleDesc,
      setToggleDesc,
    }: 
    ProjectDescProps,
    ref
  ) => {
    const shortDescription = description.slice(0, 190) + '...';
    const fullDescription = description;
    const localDescRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => localDescRef.current);

    const handleDescriptionToggle = () => {
      setToggleDesc((prev) => !prev);
    };

    //*desc height setters
    useEffect(() => {
      if (!localDescRef.current) return;
      if (!toggleDesc) {
        setShortDescriptionHeight(
          localDescRef.current.getBoundingClientRect().height
        );
      }
    }, []);

    //*desc anim
    useLayoutEffect(() => {
      if (!localDescRef.current || !shortDescriptionHeight) return;
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({});

        if (toggleDesc) {
          setIsFullDescription(true);

          tl.fromTo(
            localDescRef.current,
            {
              maxHeight: shortDescriptionHeight + 'px',
            },
            {
              maxHeight: '100dvh',
              ease: 'power3.in',
              duration: 1.3,
            }
          );
        } else if (!toggleDesc) {
          tl.fromTo(
            localDescRef.current,
            {
              maxHeight: '60dvh',
            },
            {
              ease: 'power1',
              duration: 0.7,
              maxHeight: shortDescriptionHeight + 'px',
              onComplete: () => setIsFullDescription(false),
            }
          );
        }
      });

      return () => ctx.revert();
    }, [toggleDesc, shortDescriptionHeight]);

    return (
      <div
        ref={localDescRef}
        className='desc-content lg:min-h-[100px] 3xl:min-h-[60px] min-h-[60px] w-full max-h-full  h-full lg:text-[.8rem] xl:text-[.9rem]  2xl:text-[1rem] text-[.7rem] 6xl:text-[1.1rem] leading-[1] 2xl:leading-normal portrait:text-[1rem] portrait:pl-2 portrait:h-full overflow-hidden shrink-0 2xl:py-1 short:leading-[1] short:text-[.9rem] xshort:leading-3 xshort:text-[.7rem] pb-1 portrait:md:leading-normal portrait:md:text-[1.1rem] short:min-h-[30px]'
      >
        {isFullDescription ? (
          <>
            {fullDescription}
            <span
              className='font-bold underline cursor-pointer'
              onClick={handleDescriptionToggle}
            >
              see less
            </span>
          </>
        ) : (
          <>
            {shortDescription}
            <span
              className='font-bold underline cursor-pointer'
              onClick={handleDescriptionToggle}
            >
              see more
            </span>
          </>
        )}
      </div>
    );
  }
);
export default ProjectDescription;
