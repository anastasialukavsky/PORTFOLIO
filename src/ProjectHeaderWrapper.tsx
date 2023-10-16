import React from 'react';
import ProjectHeader from './ProjectHeader';
import ProjectButton from './ProjectButton';

interface ProjectWrapperProps {
  projectName: string;
  link: string;
}

const ProjectWrapper: React.FC<ProjectWrapperProps> = ({
  projectName,
  link,
}) => {
  return (
    <section className='flex flex-col w-full 6xl:pt-36 portrait:h-fit'>
      <ProjectHeader projectName={projectName} />
      <ProjectButton link={link} />
    </section>
  );
};

export default ProjectWrapper;
