import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import Lenis from '@studio-freight/lenis';
import { ScrollToPlugin } from 'gsap/all';
// import { useNavLinksAnimation } from './useNavLinksAnimation';

import MobileModal from './MobileModal';

gsap.registerPlugin(CustomEase, ScrollToPlugin);

export type NavbarProps = {
  setNavbarHeight: React.Dispatch<React.SetStateAction<number>>;
};
export default function Navbar({ setNavbarHeight }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const projectsScrollToRef = useRef<HTMLAnchorElement>(null);
  const navRef = useRef<HTMLElement | null>(null);

  // useNavLinksAnimation();
  useEffect(() => {
    const navHeight = navRef.current?.getBoundingClientRect().height;
    if (navHeight) setNavbarHeight(navHeight);
  }, []);

  const lenis = new Lenis();

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  useEffect(() => {
    if (!projectsScrollToRef?.current) return;

    const handleScroll = () => {
      const y = projectsScrollToRef.current?.offsetHeight;
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
    projectsScrollToRef.current?.addEventListener('click', handleScroll);

    return () => {
      projectsScrollToRef.current?.removeEventListener('click', handleScroll);
    };
  });


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
            isMenuOpen ? '' : lenis.scrollTo('#home'); 
            
          }}
        >
          <p className='logo inline-block overflow-visible font-logo  text-[3.5rem] lg:text-[5rem] leading-none xshort:text-[3rem] z-[20] relative h-full w-fit'>
            .a
          </p>
        </a>

        <MobileModal
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          openMenu={openMenu}
        />




        {/**primary nav */}
        <div className='hidden landscape:flex uppercase  gap-4 text-[1.3vw] xl:text-[1.1vw] absolute top-4 right-7 4xl:text-[.9vw] 5xl:text-[.7vw]'>
          <a
            href='#home'
            onClick={() => lenis.scrollTo('#home')}
            className='nav-text text-clip text-white font-mono h-full'
          >
            home
          </a>
          <a
            href='#about'
            onClick={() => lenis.scrollTo('#about')}
            className='nav-text text-clip text-white font-mono'
          >
            about
          </a>

          <a
            href='#skills'
            onClick={() => lenis.scrollTo('#skills')}
            className='nav-text text-clip text-white font-mono'
          >
            skills
          </a>

          <a
            ref={projectsScrollToRef}
            href='#projects-section-scroll-to'
            className='nav-text text-clip text-white font-mono'
          >
            projects
          </a>

          <a
            href='#contact'
            onClick={() => lenis.scrollTo('#contacts')}
            className='nav-text text-clip text-white font-mono'
          >
            contact
          </a>
        </div>
      </div>
    </nav>
  );
}
