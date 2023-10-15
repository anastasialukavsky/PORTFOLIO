import React, { useState } from 'react';
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
  const [projectDescHeight, setProjectDescHeight] = useState(0);
  const [isFullDescription, setIsFullDescription] = useState(false);
    const [shortDescriptionHeight, setShortDescriptionHeight] = useState(0);
    const [fullDescriptionHeight, setFullDescriptionHeight] = useState(0);

  // console.log('diff', projectDescHeight);

  return (
    <>
      <ProjectDescription
        shortDescriptionHeight={shortDescriptionHeight}
        fullDescriptionHeight={fullDescriptionHeight}
        setShortDescriptionHeight={setShortDescriptionHeight}
        setFullDescriptionHeight={setFullDescriptionHeight}
        description={description}
        setIsFullDescription={setIsFullDescription}
        isFullDescription={isFullDescription}
        projectDescHeight={projectDescHeight}
        setProjectDescHeight={setProjectDescHeight}
      />
      <p className='text-center text-[.8rem] lg:text-[1rem] 2xl:text-[1.3rem] pt-3 font-bold xshort:pt-0 portrait:text-[1.1rem]'>
        STACK
      </p>
      <ProjectStack
        shortDescriptionHeight={shortDescriptionHeight}
        fullDescriptionHeight={fullDescriptionHeight}
        frontEnd={frontEnd}
        backEnd={backEnd}
        isFullDescription={isFullDescription}
        projectDescHeight={projectDescHeight}
      />
    </>
  );
}
