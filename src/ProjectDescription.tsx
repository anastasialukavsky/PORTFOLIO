import React, { useState, useEffect, useRef, SetStateAction } from 'react';

export type ProjectDescProps = {
  description: string;
  projectDescHeight: number;
  setProjectDescHeight: React.Dispatch<React.SetStateAction<number>>;
};
export default function ProjectDescription({
  description,
  setProjectDescHeight,
  projectDescHeight,
}: ProjectDescProps) {
  const [toggleDesc, setToggleDesc] = useState(true);

  const descRef = useRef<HTMLDivElement>(null);
  const [shortDescriptionHeight, setShortDescriptionHeight] = useState(0);
  const [fullDescriptionHeight, setFullDescriptionHeight] = useState(0);

  let shortDescription = description.slice(0, 200);
  let fullDescription = description;

  const handleFullDescription = () => {
    if (shortDescription) {
      setToggleDesc((prev) => !prev);
    }
  };

  useEffect(() => {
    if (descRef.current) {
      // console.log('h', descRef.current.getBoundingClientRect());
      setShortDescriptionHeight(descRef.current.getBoundingClientRect().height);
    }
  }, [description]);

  useEffect(() => {
    if (descRef.current) {
      setFullDescriptionHeight(descRef.current.getBoundingClientRect().height);
    }
  }, [toggleDesc, description]);
  
  const heightDifference = fullDescriptionHeight - shortDescriptionHeight;
  
  useEffect(() => {

    setProjectDescHeight(heightDifference);
  }, [heightDifference])
  // console.log('diff', heightDifference);

  return (
    <article ref={descRef} className=' w-full h-fit'>
      {toggleDesc ? (
        <>
          {shortDescription}
          <span
            className='font-black underline'
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
