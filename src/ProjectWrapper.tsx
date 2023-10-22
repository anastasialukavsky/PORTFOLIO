import React, { useState, useRef, } from 'react';
import ProjectDescription from './ProjectDescription';
import ProjectStack from './ProjectStack';
import { Logo } from './ProjectStack';

export type ProjectDescProps = {
  description: string;
  frontEnd: Logo[];
  backEnd: Logo[];
};

export default function ProjectWrapper({
  description,
  frontEnd,
  backEnd,
}: ProjectDescProps) {
  const [isFullDescription, setIsFullDescription] = useState(false);
  const [shortDescriptionHeight, setShortDescriptionHeight] = useState(0);
  const [toggleDesc, setToggleDesc] = useState(false);
  const descRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <ProjectDescription
        ref={descRef}
        toggleDesc={toggleDesc}
        setToggleDesc={setToggleDesc}
        shortDescriptionHeight={shortDescriptionHeight}
        setShortDescriptionHeight={setShortDescriptionHeight}
        description={description}
        setIsFullDescription={setIsFullDescription}
        isFullDescription={isFullDescription}
      />
      <p className='text-center text-[.8rem] lg:text-[1rem] 2xl:text-[1.3rem] pt-3 font-bold xshort:pt-0 portrait:text-[1.1rem] 3xl:pt-1'>
        STACK
      </p>
      <ProjectStack
        ref={stackRef}
        frontEnd={frontEnd}
        backEnd={backEnd}
      />
    </>
  );
}
