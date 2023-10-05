import whiteDot from '../public/icons/white_dot.svg';
import blackDot from '../public/icons/black_dot.svg';

import { gsap } from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef, useEffect, useState } from 'react';

type SectionsText = {
  'about-section': string;
  'skills-section': string;
  'projects-section': string;
  'contact-section': string;
  [key: string]: string; // Adding an index signature
};
export default function ProgressBar() {
  const aboutSection = document.querySelector('.about-section');
  const skillsSection = document.querySelector('.skills-section');
  const progressRef = useRef<HTMLDivElement>(null);

  const [currentSectionText, setCurrentSectionText] = useState('');

  const sectionsText:SectionsText = {
    'about-section': '// who i am ',
    'skills-section': '// what i know',
    'projects-section': '// what i made',
    'contact-section': '// hit me up'
  };


  useEffect(() => {
    if (
      !document.querySelector('.about-section') ||
      !document.querySelector('.skills-section')
    )
      return;

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

  });

  console.log('currentTxt', currentSectionText);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // console.log(sections);
      gsap.to('.progress-bar', {
        top: '10%',
        ease: 'expo',
        scrollTrigger: {
          trigger: aboutSection,
          start: 'top 50%',
          end: 'center center',
          scrub: true,
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
          start: 'top center',
          end: 'center center',
          scrub: true,
          // markers: true,
        },
      });

      // gsap.to('.who-i-am', {
      //   display: 'block',
      //   // position: 'absolute',
      //   opacity: 1,
      //   // left: '-60%',
      //   // marginLeft: '-25px',
      //   // top: '40%',
      //   y: '-10%',
      //   ease: 'slow',
      //   duration: 2,
      //   // y: '50%',
      //   scrollTrigger: {
      //     trigger: aboutSection,
      //     start: 'center center',
      //     end: 'center center',
      //     scrub: 2,
      //     // pin: true,
      //     markers: true,
      //   },
      // });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={progressRef}
      className='progress-bar fixed top-3/4 left-0 min-h-screen z-[300] w-12   mix-blend-difference'
    >
      <p
        className={`who-i-am -rotate-90 font-mono z-50 absolute top-[37%] left-0 pb-16 whitespace-nowrap font-[1rem]  uppercase  `}
      >
        {currentSectionText}
      </p>

      <img src={whiteDot} alt='' className='w-2 ml-8' />
      <img src={whiteDot} alt='' className='hidden-dot w-2 ml-8 hidden z-50' />
      <div className='w-[1px]  min-h-screen ml-9 bg-white mix-blend-difference'></div>
    </div>
  );
}

// gsap.to('.what-i-know', {
//   display: 'block',
//   // position: 'absolute',
//   opacity: 1,
//   // left: '-60%',
//   // marginLeft: '-25px',
//   // top: '40%',
//   y: '-10%',
//   ease: 'slow',
//   duration: 2,
//   // y: '50%',
//   scrollTrigger: {
//     trigger: skillsSection,
//     start: 'center center',
//     end: 'center center',
//     scrub: 2,
//     // pin: true,
//     markers: true,
//   },
// });
