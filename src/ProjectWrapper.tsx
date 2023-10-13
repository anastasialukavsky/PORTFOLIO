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

  // console.log('diff', projectDescHeight);

  return (
    <>
      <ProjectDescription
        description={description}
        setIsFullDescription={setIsFullDescription}
        isFullDescription={isFullDescription}
        projectDescHeight={projectDescHeight}
        setProjectDescHeight={setProjectDescHeight}
      />

      <ProjectStack
        frontEnd={frontEnd}
        backEnd={backEnd}
        isFullDescription={isFullDescription}
        projectDescHeight={projectDescHeight}
      />
    </>
  );
}
