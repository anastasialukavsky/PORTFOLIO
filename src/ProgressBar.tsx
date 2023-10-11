import whiteDot from '../public/icons/white_dot.svg';
import blackDot from '../public/icons/black_dot.svg';

import { gsap } from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef, useEffect, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

type SectionsText = {
  'about-section': string;
  'skills-section': string;
  'projects-section': string;
  'contact-section': string;
  [key: string]: string; // Adding an index signature
};
export default function ProgressBar({mobileMenu}: {mobileMenu: boolean}) {
  const aboutSection = document.querySelector('.about-section');
  const skillsSection = document.querySelector('.skills-section');
  const projects = document.querySelector('.projects-section');
  const progressRef = useRef<HTMLDivElement>(null);

  const [currentSectionText, setCurrentSectionText] = useState('');



  useLayoutEffect(() => {
    const documentReadyState = document.readyState;
   

    const onDOMContentLoaded = () => {
      // gsap.registerPlugin(ScrollTrigger);

      const sectionsText: SectionsText = {
        'about-section': '// who i am ',
        'skills-section': '// what i know',
        'projects-section': '// what i made',
        'contact-section': '// hit me up',
      };

      const sections = Object.keys(sectionsText);
      sections.forEach((section) => {
        ScrollTrigger.create({
          trigger: `.${section}`,
          start: 'top 50%',
          scrub: true,
          onUpdate: (self) => {
            const currentSection = self.trigger;
            const sectionText = sectionsText[section];

            if (currentSection && progressRef.current) {
              setCurrentSectionText(sectionText);
            }
          },
        });
      });
    };

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
  });



  useLayoutEffect(() => {
    const onDOMContentLoaded = () => {
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.to('.progress-bar', {
          top: '10%',
          ease: 'slow',
          duration:2,
          scrollTrigger: {
            trigger: aboutSection,
            start: 'top 50%',
            end: 'center center',
            scrub: .6,
            // markers: true
          },
        });

        {mobileMenu && 
          gsap.to('.progress-bar', {
            top: '90%',
            scrollTrigger: {
              trigger: projects,
              start: 'top 40%',
              end: 'center center',
              scrub: true,
              // markers: true,
            },
          });
        }

        gsap.to('.hidden-dot', {
          display: 'block',
          position: 'absolute',
          top: mobileMenu ? '70%' : '40%',
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
    };

    if (document.readyState === 'complete') {
      onDOMContentLoaded();
    } else {
      document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', onDOMContentLoaded);
    };
  });

  return (
    <div
      ref={progressRef}
      className='progress-bar  fixed top-3/4 left-0 min-h-screen z-[200] w-12   mix-blend-difference'
    >
      <img src={whiteDot} alt='' className='w-2 ml-8' />
      <div className='w-[1px]  min-h-screen ml-9 bg-white mix-blend-difference '>
        <p
          className={` ${
            mobileMenu ? 'top-[65%]' : 'top-[37%]'
          } -rotate-90 font-mono z-50 absolute   lg:top-[36%]  -left-16 lg:-left-[68px] w-44  uppercase  text-[.8rem] lg:text-[1rem]`}
        >
          {currentSectionText}
        </p>
      </div>

      <img src={whiteDot} alt='' className='hidden-dot w-2 ml-8 hidden z-50' />
    </div>
  );
}
