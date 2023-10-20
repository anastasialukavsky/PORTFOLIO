import whiteDot from '../public/icons/white_dot.svg';

import { gsap } from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

type SectionsText = {
  'about-section': string;
  'skills-section': string;
  'projects-section': string;
  'contact-section': string;
  [key: string]: string; // Adding an index signature
};


export default function ProgressBar() {
  const aboutSection = document.querySelector('.about-section');
  const progressRef = useRef<HTMLDivElement>(null);

  const [currentSectionText, setCurrentSectionText] = useState('');

  useLayoutEffect(() => {

    const documentReadyState = document.readyState;
    
    function onDOMContentLoaded () {
      const sectionsText: SectionsText = {
        'about-section': '// who i am ',
        'skills-section': '// what i know',
        'projects-section': '// what i made',
        'contact-section': '// get in touch',
      };
      
      const sections = Object.keys(sectionsText);
      sections.forEach((section) => {
        ScrollTrigger.create({
          trigger: `.${section}`,
          start: 'top 50%',
          scrub: true,
          onUpdate: (self) => {
            console.log(section)
            const currentSection = self.trigger;
            const sectionText = sectionsText[section];

            if (currentSection && progressRef.current && currentSectionText !== sectionText) {
              setCurrentSectionText(sectionText);
            }
          },
        });
      });
    }

    if (
      documentReadyState === 'complete' ||
      documentReadyState === 'interactive'
    ) {
      onDOMContentLoaded();
    } else {
      document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', onDOMContentLoaded);
    };
  }, []);



  useLayoutEffect(() => {
    if (!progressRef.current) return;

      const ctx = gsap.context(() => {
        gsap.to(progressRef.current, {
          top: '15%',
          ease: 'slow',
          // position: 'fixed',
          duration: 2,
          scrollTrigger: {
            trigger: aboutSection,
            start: 'top 50%',
            end: 'center center',
            scrub: 0.6,
            // markers: true
          },
        });

        gsap.to('.hidden-dot', {
          display: 'block',
          position: 'absolute',
          top: '40%',
          // y: '50%',
          scrollTrigger: {
            trigger: aboutSection,
            start: 'top 40%',
            end: 'center center',
            scrub: true,
            // markers: true,
          },
        });
      });

      return () => {
        ctx.revert();
      };
    

 
  }, [progressRef.current]);

  return (
    <div
      role='progressbar'
      id='progress-bar'
      aria-label='progress'
      aria-labelledby='progressbar'
      ref={progressRef}
      className='w-5
      progress-bar fixed top-[80%] left-0 min-h-screen z-[200]  mix-blend-difference'
    >
      <img
        src={whiteDot}
        alt=''
        className='ml-5 w-2'
      />
      <div
        className='ml-6
         w-[1px]  min-h-screen bg-white mix-blend-difference'
      >
        <p
          className='-left-20 top-[36vh]
            -rotate-90 font-mono z-50 absolute   lg:top-[36%]  lg:-left-[68px] w-44  uppercase  text-[.8rem] lg:text-[1rem] xshort:text-[.9rem]'
        >
          {currentSectionText}
        </p>
      </div>

      <img
        src={whiteDot}
        alt=''
        className='ml-5
         hidden-dot w-2 hidden z-50 portrait:top-[120%]'
      />
    </div>
  );
}
