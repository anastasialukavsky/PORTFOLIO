import React, {useState, useEffect} from 'react'


export type ProjectDescProps = {
  description: string
}
export default function ProjectDescription({description}: ProjectDescProps) {

  const [toggleDesc, setToggleDesc] = useState(true);


  let shortDescription = description.slice(0, 200);
  let fullDescription = description.slice( 200, description.length);

  const handleFullDescription = () => {
    if (fullDescription) {
      setToggleDesc((prev) => !prev);
    } 
  };
  // useEffect(() => {
  //   handleFullDescription();
  // }, [toggleDesc]);


  return (
    <article className='leading-tight text-[.9rem] md:text-[.6rem] lg:text-[.8rem] 2xl:text-[.9rem] xl:pt-4 w-full '>
      {toggleDesc ? (
        <>
          {shortDescription}
          <span className='font-black' onClick={handleFullDescription}>
            see more
          </span>
        </>
      ) : (
        <>
          {fullDescription}
          <span className='font-black' onClick={handleFullDescription}>
            see less
          </span>
        </>
      )}
    </article>
  );
}
