import React, { useState, useRef, useEffect } from 'react';
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
  const [fullStackHeight, setFullStackHeight] = useState(0);
  const [shortStackHeight, setShortStackHeight] = useState(0);
  const [toggleDesc, setToggleDesc] = useState(false);
  const descRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);

  // const projectWrapperRef = useRef<HTMLDivElement | null>(null);
  // const [wrapperHeight, setWrapperHeight] = useState(0);

  // useEffect(() => {
  //   const height = projectWrapperRef.current?.getBoundingClientRect().height;
  //   if (height) setWrapperHeight(height);
  // }, []);

  // useEffect(() => {
  //   // const height = descRef.current?.getBoundingClientRect().height || 0;
  //   // setShortStackHeight(stackRef.current?.getBoundingClientRect().height || 0)
  //   setTimeout(() => {
  //     setFullDescriptionHeight(
  //       descRef.current?.getBoundingClientRect().height || 0
  //     );
  //     setToggleDesc(false);
  //     setFullStackHeight(stackRef.current?.getBoundingClientRect().height || 0);
  //   }, 1000);
  // }, []);


  // console.log({fullDescriptionHeight})
  // console.log({shortDescriptionHeight})

  // console.log({shortStackHeight})
  // console.log({fullStackHeight})
  return (
    <>
      <ProjectDescription
        ref={descRef}
        toggleDesc={toggleDesc}
        setToggleDesc={setToggleDesc}
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
        ref={stackRef}
        // wrapperHeight={wrapperHeight}
        toggleDesc={toggleDesc}
        setShortStackHeight={setShortStackHeight}
        shortStackHeight={shortStackHeight}
        fullStackHeight={fullStackHeight}
        setFullStackHeight={setFullStackHeight}
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
