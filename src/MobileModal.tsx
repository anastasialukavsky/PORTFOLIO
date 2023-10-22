import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { animateHamburgerToX } from './hamburgerAnimation';

import Lenis from '@studio-freight/lenis';

import linkedin from '/icons/linkedin.svg';
import github from '/icons/github.svg';
import gmail from '/icons/gmail.svg';

type Props = {
  openMenu: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileModal({
  openMenu,
  isMenuOpen,
  setIsMenuOpen,
}: Props) {
  const wrapperRef = useRef(null);
  const backdropRef = useRef(null);
  const iconRef = useRef(null);
  const [isMenuRendered, setIsMenuRendered] = useState(false);
  const menuAnimation = useRef<gsap.core.Timeline | null>(null);

  const textRevealClasses =
    'text-reveal inline-block h-[5.5%] overflow-visible font-logo text-[10vw]';

  const lenis = new Lenis();

  useEffect(() => {
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({});

      if (isMenuOpen) {
        // setIsMenuRendered(true);
        tl.to(backdropRef.current, {
          width: '100%',
          x: '0%',
          ease: 'sine.inOut',
          duration: 0.5,
          backdropFilter: 'blur(100px)',
        });

        tl.to(wrapperRef.current, {
          x: '15%',
          duration: 0.55,
          ease: 'expo',
        });

        tl.from(
          '.text-reveal',
          {
            opacity: 0,
            duration: 0.4,
            overflow: 'hidden',
            ease: 'sine.inOut',
            height: 0,
            yPercent: 100,
            stagger: 0.05,
          },
          'wrapperRef.current-=.4'
        );
        tl.to(iconRef.current, {
          display: 'flex',
          height: '23%',
          // ease: 'power4.inOut',
          duration: 0.6,
          // stagger: 3
          onComplete: () => setIsMenuRendered(true),
        });
        menuAnimation.current = tl;
      }
    });

    return () => {
      ctx.revert();
      menuAnimation.current = null;
    };
  }, [wrapperRef.current, isMenuOpen, setIsMenuRendered]);

  function closeMenu() {
    if (!menuAnimation.current) {
      setIsMenuOpen(false);
    } else {
      return menuAnimation.current
        .duration(menuAnimation.current.duration() / 1.5)
        .reverse()
        .then(() => {
          setIsMenuOpen(false);
        });
    }
  }

  //*prevent scroll when modal is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      {/**MM svg section */}
      <svg
        className='z-[260] pt-3  landscape:hidden portrait:w-32 portrait:h-16'
        onClick={
          !isMenuOpen
            ? () => {
                openMenu();
                animateHamburgerToX(isMenuOpen);
              }
            : () => {
                closeMenu();
                animateHamburgerToX(isMenuOpen);
              }
        }
        width='100'
        height='50'
        viewBox='0 0 50 50'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          className='line line1'
          x='10'
          y='15'
          width='50'
          height='.6'
          stroke='#fff'
          fill='#fff'
          rx='1'
        />
        <rect
          className='line line2'
          x='10'
          y='25'
          width='50'
          height='.6'
          stroke='#fff'
          fill='#fff'
          rx='1'
        />
      </svg>

      {/**MM body wrapper */}
      <div
        ref={backdropRef}
        className='bg-black/50 w-0 h-[100dvh] absolute left-0 top-0 landscape:hidden -translate-x-full    backdrop-blur'
      >
        <div
          ref={wrapperRef}
          className="landscape:hidden  absolute  top-0 left-0 portrait:h-[100dvh] portrait:w-[100svw] backdrop-blur-0  portrait:bg-[url('/bg/wrapper_blur_noise.svg')]  opacity-[80%] z-[250] transform translate-x-full"
        >
          <div className='flex flex-col items-center justify-center h-fit'>
            <a
              href='#home'
              className={`${textRevealClasses} fixed  top-[35%]`}
              onClick={() => {
                lenis.scrollTo('#home');
                closeMenu();
                animateHamburgerToX(isMenuOpen);
              }}
            >
              <span className='self-start text-[3vw] pr-2 '>00</span>
              HOME
            </a>

            <a
              href='#about'
              className={`${textRevealClasses} fixed  top-[41%]`}
              onClick={() => {
                lenis.scrollTo('#about');
                closeMenu();
                animateHamburgerToX(isMenuOpen);
              }}
            >
              <span className='self-start text-[3vw] pr-2 '>01</span>
              ABOUT
            </a>

            <a
              href='#skills'
              className={`${textRevealClasses} fixed  top-[47%]`}
              onClick={() => {
                lenis.scrollTo('#skills');
                closeMenu();
                animateHamburgerToX(isMenuOpen);
              }}
            >
              <span className='self-start text-[3vw] pr-2'>02</span>
              SKILLS
            </a>

            <a
              href='#projects-section-scroll-to'
              className={`${textRevealClasses} fixed  top-[53%]`}
              onClick={() => {
                lenis.scrollTo('#projects-section-scroll-to');
                closeMenu();
                animateHamburgerToX(isMenuOpen);
              }}
            >
              <span className='self-start text-[3vw] pr-2'>03</span>
              PROJECTS
            </a>

            <a
              href='#contact'
              className={`${textRevealClasses} fixed  top-[59%]`}
              onClick={() => {
                lenis.scrollTo('#contacts');
                closeMenu();
                animateHamburgerToX(isMenuOpen);
              }}
            >
              <span className='self-start text-[3vw] pr-2'>04</span>
              CONTACT
            </a>
          </div>
        </div>
        <div
          ref={iconRef}
          className='absolute bottom-5 flex-col gap-6 left-3 h-0 hidden'
        >
          <a
            id='m-linkedIn-link'
            role='link'
            accessKey='l'
            aria-label='LinkedIn'
            href='https://www.linkedin.com/in/anastasialukavsky/'
            target='_blank'
            rel='noopener noreferrer'
            className='w-10'
          >
            <img src={linkedin} alt='' className='' />
          </a>
          <a
            id='m-github-link'
            role='link'
            accessKey='h'
            aria-label='GitHub'
            href='https://github.com/anastasialukavsky'
            target='_blank'
            rel='noopener noreferrer'
            className='w-10'
          >
            <img src={github} alt='' className='' />
          </a>
          <img
            id='m-gmail-link'
            role='link'
            accessKey='g'
            aria-label='Gmail'
            src={gmail}
            alt=''
            className=' w-10'
            // onClick={handleEmailClick}
          />
        </div>
      </div>
    </>
  );
}
