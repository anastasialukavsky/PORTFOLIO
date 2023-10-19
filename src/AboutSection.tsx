import React from 'react'
import me from '../public/bg/me-q30.webp';


type AboutSectionProps = {
  mobileMenu: boolean
}

export default function AboutSection({mobileMenu}: AboutSectionProps) {
  return (
    <section
      id='about'
      className="about z-[150] flex font-mono  w-[100svw] relative bg-[#353b3c]  bg-[url('/bg/about_noise.svg')] landscape:xshort:w-[100svw] landscape:xshort:h-[100svh] "
    >
      <div className='about-section  portrait:w-[100svw] h-[115dvh] w-full bg-[#353b3c] flex relative top-0 '>
        <div className='md:flex gap-[9%] w-[80%] max-h-[70%] min-h-[60%] self-center items-center mx-auto portrait:flex-col'>
          <div className=' about-me-details-wrapper w-full h-fit '>
            <div
              className={` ${
                mobileMenu
                  ? 'h-[55svh] w-[70vw] left-16 top-32'
                  : 'h-[62%] w-[36vw]'
              } pic-wrapper  bg-[#383838] absolute max-h-[53%] min-h-[37%] short:min-h-[71%]  3xl:min-h-[68%] 4xl:min-h-[68%] 5xl:min-h-[75%] 6xl:min-h-[76%] landscape:xshort:max-w-[27%] landscape:xshort:min-h-[60%] lg:min-h-[54%] 5xl:w-[27%] 5xl:left-[14%]`}
            ></div>
            <img
              src={me}
              alt='photo of the creator :)'
              className='pic aspect-[4/5] z-10 object-cover h-fit 3xl:aspect-[9/11] short:aspect-[9/11] 5xl:object-contain 5xl:aspect-[11/11] relative md:-right-3 -top-4 -right-8   portrait:h-[95vw] portrait:aspect-auto landscape:xshort:h-[70vh]'
            />
          </div>

          <p className='bio-text font-mono text-[#121212] w-full lowercase  md:pr-8 md:text-[1.5vw] 2xl:text-[1.2rem] leading-tight text-[.9rem] pt-5 portrait:ml-2 landscape:xshort:text-[.7rem] landscape:short:text-[.9rem]'>
            I am a fullstack web developer based in Brooklyn, NY, with a keen
            eye for detail and a drive for creating exceptional digital
            experiences. My journey in web development has been an exciting
            exploration, where each stage of the development process, from
            system design to user interface design, has become a source of joy
            and fulfillment.
          </p>
        </div>
        <div className='firstname-lastname md:flex flex-col justify-end items-end hidden uppercase text-[#121212] bottom-[12vw] lg:bottom-36 2xl:bottom-52 xl:bottom-44 absolute left-[10%] font-mono text-left w-fit h-fit text-[.8rem] xl:text-[.9rem] short:bottom-20 3xl:bottom-24 5xl:bottom-20 6xl:bottom-28 5xl:left-[14%] landscape:xshort:bottom-20 4xl:bottom-32 4xl:text-[1rem] 5xl:text-[1.1rem]'>
          <p className='about'>anastasia</p>
          <p>//lukavsky</p>
        </div>
      </div>
    </section>
  );
}
