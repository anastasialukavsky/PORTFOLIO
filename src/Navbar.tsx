import { useEffect, useState, useRef } from 'react';
import hamburger from '../public/icons/hamburger.svg';
import x from '../public/icons/x.svg';
import { gsap } from 'gsap';

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
  const wrapperRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  //prevent scroll on overflow
  // useEffect(() => {
  //   document.body.style.overflow = 'hidden';
  //   return () => {
  //     document.body.style.overflow = '';
  //   };
  // }, []);

  useEffect(() => {

    if (!wrapperRef.current) return;





      if (isMenuOpen) {
        const ctx = gsap.context(() => {
          const tl = gsap.timeline({});

          tl.set(wrapperRef.current, { display: 'block' });
          tl.to(wrapperRef.current, {
            // height: 0,
            y: '+=100%',
            duration: 0.55,
            ease: 'expo',
          });
        });

        return () => ctx.revert();
      } else {
        if (!isMenuOpen) {
          const ctx = gsap.context(() => {
            const tl = gsap.timeline({});

            // tl.set(wrapperRef.current, { display: 'block' })
            tl.from(
              wrapperRef.current,
              {
                // height: 0,
                duration: 0.5,
                y: '+=100%',
                ease: 'power1.in',
              },
              '<'
            ).set(wrapperRef.current, { display: 'none' });
          });
          return () => ctx.revert();
        }
      }
  }, [wrapperRef.current]);

  return (
    <nav
      className={`${
        isMenuOpen ? '' : ' mix-blend-difference'
      } w-screen  h-[52px] lg:h-[75px] text-white fixed top-0 left-0 z-[205] border-b portrait:w-[100svw]`}
    >
      <div className='navigation-wrapper  flex justify-between pl-[3%] pr-[5%] relative '>
        {/**logo */}
        <p className='font-logo  text-[3.5rem] lg:text-[5rem] leading-none'>
          .a
        </p>

        {/**mobile nav hamburger */}
        {isMenuOpen ? (
          <img
            src={x}
            alt='x icon'
            className='w-[10vw] xs:flex md:hidden z-[260] p-3'
            onClick={closeMenu}
          />
        ) : (
          <img
            src={hamburger}
            alt='hamburger icon'
            className='w-[10vw] xs:flex md:hidden'
            onClick={toggleMenu}
          />
        )}

        {/**mobile nav dropdown */}
        {isMenuOpen && (
          <div
            ref={wrapperRef}
            className='md:hidden absolute  top-0 left-0 h-[100dvh] w-[100svw] bg-[#353b3c] z-[250] -translate-y-full '
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
        )}

        {/**primary nav */}
        <div className='hidden md:flex uppercase  gap-4 text-[1.1vw] absolute top-4 right-7 4xl:text-[.9vw] 5xl:text-[.7vw]'>
          <a
            href='#home'
            onClick={(e) => scrollToSection(e, '#home', false)}
            className='text-white font-mono'
          >
            home
          </a>
          <a
            href='#about'
            onClick={(e) => scrollToSection(e, '#about', false)}
            className='text-white font-mono'
          >
            about
          </a>

          <a
            href='#skills'
            onClick={(e) => scrollToSection(e, '#skills', false)}
            className='text-white font-mono'
          >
            skills
          </a>

          <a
            href='#projects'
            onClick={(e) => scrollToSection(e, '#projects', true)}
            className='text-white font-mono'
          >
            projects
          </a>

          <a
            href='#contact'
            onClick={(e) => scrollToSection(e, '#contact', false)}
            className='text-white font-mono'
          >
            contact
          </a>
        </div>
      </div>
    </nav>
  );
}
