import { useEffect, useState, useRef } from 'react';
import hamburger from '../public/icons/hamburger.svg';
import x from '../public/icons/x.svg';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import Lenis from '@studio-freight/lenis';
import { ScrollToPlugin } from 'gsap/all';
gsap.registerPlugin(CustomEase, ScrollToPlugin);

type ScrollToSection = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  sectionId: string,
  isHorizontalScroll: boolean
) => void;

interface NavbarProps {
  scrollToSection: ScrollToSection;
  mobileMenu: boolean;
}

export default function Navbar({ scrollToSection, mobileMenu }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const testRef = useRef<HTMLAnchorElement>(null);
  const wrapperRef = useRef(null);

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
      return () => ctx.revert();
    }
  }, [wrapperRef.current, isMenuOpen]);

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

  const animateHamburgerToX = () => {
    const tl = gsap.timeline();

    if (isMenuOpen) {
      tl.to('.line1', { y: 0, rotate: 0, duration: 0.3, ease: 'back' }).to(
        '.line2',
        { y: 0, rotate: 0, duration: 0.3, ease: 'back' },
        '-=0.3'
      );
    } else {
      tl.to('.line1', { y: -9, rotate: 50, duration: 0.3, ease: 'back' }).to(
        '.line2',
        { y: 20, rotate: -53, duration: 0.3, ease: 'back' },
        '-=0.3'
      );
    }
  };
  const lenis = new Lenis();
  const toggleMenu = () => {
    setIsMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <nav
      className={`${
        isMenuOpen ? '' : ' mix-blend-difference'
      } w-screen  portrait:h-[52px] lg:h-[75px] text-white fixed top-0 left-0 z-[205] border-b portrait:w-[100svw] xshort:h-[50px]`}
    >
      <div className='navigation-wrapper  flex justify-between pl-[3%] pr-[5%] relative '>
        {/**logo */}

        <a href='#home' onClick={(e) => scrollToSection(e, '#home', false)}>
          <p className='font-logo  text-[3.5rem] lg:text-[5rem] leading-none xshort:text-[3rem]'>
            .a
          </p>
        </a>

        {/**mobile nav hamburger */}
        <svg
          className='z-[260] pt-2  md:hidden'
          onClick={() => {
            toggleMenu();
            animateHamburgerToX();
          }}
          width='60'
          height='50'
          viewBox='0 0 50 50'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            className='line line1'
            x='10'
            y='15'
            width='50'
            height='1'
            stroke='#fff'
            fill='#fff'
            rx='1'
          />
          <rect
            className='line line2'
            x='10'
            y='25'
            width='50'
            height='1'
            stroke='#fff'
            fill='#fff'
            rx='1'
          />
        </svg>

        {/**mobile nav dropdown */}

        <div
          ref={wrapperRef}
          className='md:hidden absolute  top-0 left-0 h-[100dvh] w-[100svw] backdrop-blur-0  bg-[#2f2f2f] opacity-[99%] z-[250] transform translate-x-full '
        >
          <div className='flex flex-col items-center justify-center h-full'>
            <a
              href='#home'
              className='font-mono text-[7vw] border-b'
              onClick={(e) => {
                scrollToSection(e, '#home', false);
                toggleMenu();
              }}
            >
              <span className='self-start text-[3vw] pr-2 '>00</span>
              HOME
            </a>

            <a
              href='#about'
              className='font-mono text-[7vw] border-b'
              onClick={(e) => {
                scrollToSection(e, '#about', false);
                toggleMenu();
              }}
            >
              <span className='self-start text-[3vw] pr-2 '>01</span>
              ABOUT
            </a>

            <a
              href='#skills'
              className='font-mono text-[7vw] border-b'
              onClick={(e) => {
                scrollToSection(e, '#skills', false);
                toggleMenu();
              }}
            >
              <span className='self-start text-[3vw] pr-2'>02</span>
              SKILLS
            </a>

            <a
              href='#projects-section-scroll-to'
              className='font-mono text-[7vw] border-b'
              onClick={(e) => {
                scrollToSection(e, '#projects-section-scroll-to', true);
                toggleMenu();
              }}
            >
              <span className='self-start text-[3vw] pr-2'>03</span>
              PROJECTS
            </a>

            <a
              href='#contact'
              className='font-mono text-[7vw] border-b '
              onClick={(e) => {
                scrollToSection(e, '#contact', false);
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
            href='#home'
            onClick={(e) => scrollToSection(e, '#home', false)}
            className='text-white font-mono'
          >
            home
          </a>
          <a
            href='#about'
            onClick={(e) => lenis.scrollTo('#about')}
            className='text-white font-mono'
          >
            about
          </a>

          <a
            href='#skills'
            onClick={(e) => lenis.scrollTo('#skills')}
            className='text-white font-mono'
          >
            skills
          </a>

          <a
            ref={testRef}
            href='#projects-section-scroll-to'
            className='text-white font-mono'
          >
            projects
          </a>

          <a
            href='#contact'
            onClick={(e) => lenis.scrollTo('#contacts')}
            className='text-white font-mono'
          >
            contact
          </a>
        </div>
      </div>
    </nav>
  );
}
