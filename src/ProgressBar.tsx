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
export default function ProgressBar({ mobileMenu }: { mobileMenu: boolean }) {
  const aboutSection = document.querySelector('.about-section');
  const skillsSection = document.querySelector('.skills-section');
  const projects = document.querySelector('.projects-section');
  const progressRef = useRef<HTMLDivElement>(null);

  const [currentSectionText, setCurrentSectionText] = useState('');

  useLayoutEffect(() => {
    const documentReadyState = document.readyState;

    const onDOMContentLoaded = () => {
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
  }, [currentSectionText, progressRef.current]);





  useLayoutEffect(() => {
    console.log('hi');
    if (!progressRef.current || !mobileMenu) return;
    const onDOMContentLoaded = () => {
      const ctx = gsap.context(() => {
        gsap.to(progressRef.current, {
          top: '15%',
          ease: 'slow',
          position: 'fixed',
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
    };

    if (document.readyState === 'complete') {
      onDOMContentLoaded();
    } else {
      document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', onDOMContentLoaded);
    };
  }, [mobileMenu]);


    useLayoutEffect(() => {
      console.log('hi');
      if (!progressRef.current) return;
      const onDOMContentLoaded = () => {
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
      role='progressbar'
      id='progress-bar'
      aria-label='progress'
      aria-labelledby='progressbar'
      ref={progressRef}
      className={`${
        mobileMenu ? 'w-5' : 'w-12'
      } progress-bar fixed top-3/4 left-0 min-h-screen z-[200]  mix-blend-difference`}
    >
      <img
        src={whiteDot}
        alt=''
        className={`${mobileMenu ? 'ml-5' : 'ml-8'} w-2`}
      />
      <div
        className={`${
          mobileMenu ? 'ml-6' : ' ml-9'
        } w-[1px]  min-h-screen bg-white mix-blend-difference`}
      >
        <p
          className={`${
            mobileMenu ? '-left-20 top-[36%]' : '-left-16 top-[33%]'
          }  -rotate-90 font-mono z-50 absolute   lg:top-[36%]  lg:-left-[68px] w-44  uppercase  text-[.8rem] lg:text-[1rem] xshort:text-[.9rem]`}
        >
          {currentSectionText}
        </p>
      </div>

      <img
        src={whiteDot}
        alt=''
        className={`${
          mobileMenu ? 'ml-5' : 'ml-8'
        } hidden-dot w-2 hidden z-50 portrait:top-[120%]`}
      />
    </div>
  );
}
