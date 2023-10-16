import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import Lenis from '@studio-freight/lenis';
import { ScrollToPlugin } from 'gsap/all';
import SplitType from 'split-type';
gsap.registerPlugin(CustomEase, ScrollToPlugin);

export type NavbarProps = {
  setNavbarHeight: React.Dispatch<React.SetStateAction<number>>;
};
export default function Navbar({ setNavbarHeight }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const testRef = useRef<HTMLAnchorElement>(null);
  const wrapperRef = useRef(null);
  const navText = new SplitType('a.nav-text', { types: 'chars' });
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const navHeight = navRef.current?.getBoundingClientRect().height;
    if (navHeight) setNavbarHeight(navHeight);
  }, []);

  // const navTextAnchor = document.querySelector('a.nav-text');
  // const navChars = navText.chars;
  // console.log(navText);

  // const navTextRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  // const handleRef = (index: number) => (el: HTMLAnchorElement | null) => {
  //   navTextRefs.current[index] = el;
  // };
  const lenis = new Lenis();
  const toggleMenu = () => {
    setIsMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  {
    /**navbar wrapper animation */
  }
  useEffect(() => {
    if (!wrapperRef.current) return;

    if (isMenuOpen) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({});

        tl.to(wrapperRef.current, {
          x: '0%',
          // backdropFilter: 'blur(20px)',
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

        tl.from('.logo', {
          // scale: 1.4,
          opacity: 0,

          height: 0,
          overflow: 'hidden',
          yPercent: 100,
          ease: 'expo',
          duration: 0.6,
          // delay: .01
        });
      });

      return () => ctx.revert();
    } else if (!isMenuOpen) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({});

        tl.from(
          wrapperRef.current,
          {
            duration: 0.55,
            x: '0%',
            ease: 'expo',
          },
          '<'
        );
      });
      return () => {
        ctx.revert();
      };
    }
  }, [wrapperRef.current, isMenuOpen]);

  // const navTextRef = useRef<HTMLAnchorElement>(null);

  const navTextRef = useRef<Array<HTMLAnchorElement | null>>([]);

  // const handleRef = (idx: number) => (el: HTMLAnchorElement | null) => {
  //   navTextRef.current[index] = el;
  // };

  // useEffect(() => {
  //   const handleHover = (idx) => {
  //     const navText = new SplitType('a.nav-text', { types: 'chars' });

  //     const chars = navText.chars;
  //     gsap.fromTo(
  //       chars,
  //       {
  //         y: 100,
  //         opacity: 0,
  //       },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         stagger: 0.05,
  //         duration: 2,
  //         ease: 'power4.out',
  //       }
  //     );
  //   };

  //   handleRef.current?.addEventListener('mouseover', handleHover(idx));

  //   return () =>
  //     navTextRef.current?.removeEventListener('mouseover', handleHover);
  // }, [navTextRef.current]);

  useEffect(() => {
    if (!testRef?.current) return;

    const handleScroll = () => {
      let y = testRef.current?.offsetHeight;
      const ctx = gsap.context(() => {
        gsap.to(window, {
          scrollTo: {
            y: y,
            autoKill: false,
          },
          duration: 1,
        });
      });
      ctx.revert();
    };
    handleScroll();
    testRef.current?.addEventListener('click', handleScroll);

    return () => {
      testRef.current?.removeEventListener('click', handleScroll);
    };
  });

  {
    /** hamburger animation */
  }
  const animateHamburgerToX = () => {
    const tl = gsap.timeline();

    if (isMenuOpen) {
      tl.to('.line1', {
        y: 0,
        rotate: 0,
        duration: 0.3,
        ease: 'back',
        width: '100%',
      }).to(
        '.line2',
        { y: 0, rotate: 0, duration: 0.3, ease: 'back', width: '100%' },
        '-=0.3'
      );
    } else {
      tl.to('.line1', {
        y: -2,
        rotate: 50,
        duration: 0.3,
        ease: 'back',
        width: '55%',
      }).to(
        '.line2',
        { y: 9, rotate: -50, duration: 0.3, ease: 'back', width: '55%' },
        '-=0.3'
      );
    }
  };

  const textRevealClasses =
    'text-reveal inline-block h-[5.5%] overflow-visible font-logo text-[10vw]';

  return (
    <nav
      ref={navRef}
      className={`${
        isMenuOpen ? '' : ' mix-blend-difference'
      } w-screen  portrait:h-[60px] lg:h-[75px] text-white fixed top-0 left-0 z-[205] border-b portrait:w-[100svw] xshort:h-[50px]`}
    >
      <div className='navigation-wrapper flex justify-between pl-[3%] pr-[5%] relative portrait:pr-[1%]'>
        {/**logo */}

        <a
          className='h-fit w-fit'
          href='#home'
          onClick={() => {
            lenis.scrollTo('#home');
            toggleMenu();
          }}
        >
          <p className='logo inline-block overflow-visible font-logo  text-[3.5rem] lg:text-[5rem] leading-none xshort:text-[3rem] z-[20] relative h-full w-fit'>
            .a
          </p>
        </a>

        {/**mobile nav hamburger */}
        <svg
          className='z-[260] pt-3  md:hidden w-fit h-fit'
          onClick={() => {
            toggleMenu();
            animateHamburgerToX();
          }}
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

        {/**mobile nav dropdown */}

        <div
          ref={wrapperRef}
          className='md:hidden absolute  top-0 left-0 h-[100dvh] w-[100svw] backdrop-blur-0  portrait:bg-[#353b3c]  opacity-[99%] z-[250] transform translate-x-full '
        >
          <div className='flex flex-col items-center justify-center h-full'>
            <a
              href='#home'
              className={`${textRevealClasses} fixed  top-[35%]`}
              onClick={() => {
                lenis.scrollTo('#home');
                toggleMenu();
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
                toggleMenu();
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
                toggleMenu();
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
                toggleMenu();
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
                toggleMenu();
              }}
            >
              <span className='self-start text-[3vw] pr-2'>04</span>
              CONTACT
            </a>
          </div>
        </div>

        {/**primary nav */}
        <div className='hidden md:flex uppercase  gap-4 text-[1.3vw] xl:text-[1.1vw] absolute top-4 right-7 4xl:text-[.9vw] 5xl:text-[.7vw]'>
          <a
            // ref={navTextRef}
            href='#home'
            onClick={() => lenis.scrollTo('#home')}
            className='nav-text text-clip text-white font-mono'
          >
            home
          </a>
          <a
            // ref={navTextRef}
            // ref={textRef}
            href='#about'
            onClick={() => lenis.scrollTo('#about')}
            className='nav-text text-white font-mono'
          >
            about
          </a>

          <a
            // ref={textRef}
            // ref={navTextRef}
            href='#skills'
            onClick={() => lenis.scrollTo('#skills')}
            className='nav-text text-white font-mono'
          >
            skills
          </a>

          <a
            // ref={textRef}
            // ref={handleRef(0)}
            ref={testRef}
            href='#projects-section-scroll-to'
            className='nav-text text-white font-mono'
          >
            projects
          </a>

          <a
            // ref={textRef}
            // ref={navTextRef}
            href='#contact'
            onClick={() => lenis.scrollTo('#contacts')}
            className='nav-text text-white font-mono'
          >
            contact
          </a>
        </div>
      </div>
    </nav>
  );
}
