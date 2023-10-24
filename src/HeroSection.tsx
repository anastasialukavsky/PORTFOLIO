import React from 'react'
import Typewriter from './Typewriter';
export default function HeroSection() {
  return (
    <>
      <section className='hero-section  h-[100dvh] relative z-[100]  flex flex-col justify-center items-center md:-translate-y-[30%] md:pt-96 portrait:w-[100svw] portrait:h-[100vh] landscape:xshort:w-[100svw] landscape:xshort:h-[100svh] portrait:md:translate-y-[10%]'>
        <p className='hello-article self-end xs:pr-4 pr-[5%] font-mono   opacity-0 portrait:fixed portrait:top-[26%] text-[.9rem] md:text-[1.2vw] portrait:md:text-[1rem]'>
          hello, i am
        </p>
        <h1
          id='text'
          className='anim-typewriter font-dida text-[6.7vw] z-[150] relative leading-none text-center portrait:text-[13.5vw]  portrait:self-center portrait:top-[29%] xshort:whitespace-nowrap portrait:fixed landscape:md:whitespace-nowrap'
        >
          <Typewriter name='ANASTASIA LUKAVSKY' text='FULLSTACK DEVELOPER' />
        </h1>

        <div className='hero-desc font-mono self-start pl-[7%] lowercase xs:w-[70%] md:w-[38%] portrait:text-[.9rem] pt-[1%] portrait:pb-5 portrait:w-full md:text-[1.4vw] 5xl:text-[1vw] opacity-0 portrait:md:-translate-y-[190%] portrait:md:text-[1rem]'>
          <p>Crafting Digital Experiences from Front to Back</p>
          <p>Bringing Ideas to Life with Code and Creativity</p>
        </div>
      </section>
    </>
  );
}
