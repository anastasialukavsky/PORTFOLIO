import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';

import Navbar from './Navbar';
import ProgressBar from './ProgressBar';
import Blob from './Blob';
import AboutSection from './AboutSection';
import HeroSection from './HeroSection';
import ContactSection from './ContactSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import { useLandingPageAnimation } from './useLandingPageAnimation';
import MobileProgressBar from './MobileProgressBar';

export default function Homepage() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useLandingPageAnimation(mobileMenu, navbarHeight);

  useEffect(() => {
    const checkDimensions = () => {
      if (window.innerWidth < 650 || window.innerHeight < 450) {
        setMobileMenu(true);
      } else {
        setMobileMenu(false);
      }
    };

    window.addEventListener('resize', checkDimensions);
    checkDimensions();

    return () => {
      window.removeEventListener('resize', checkDimensions);
    };
  }, []);

  // const [h, setH] = useState(0)
  // const [w, setW] = useState(0)
  // useEffect(() => {
  //   setH(window.innerHeight)
  //   setW(window.innerWidth)
  //   // console.log(window.innerWidth)
  // }, [])

  return (
    <main
      id='home'
      className='container relative w-[100vw] h-full min-h-screen z-0 text-white'
    >
      <Navbar setNavbarHeight={setNavbarHeight} />
      <div className='blob-wrapper fixed self-center md:h-[100dvh] h-[100svh] w-[100svw]  z-[100] md:w-[100dvw] m-auto bottom-0 right-0  landscape:xshort:w-[100svw] landscape:xshort:h-[100svh]'>
        <Canvas
          camera={{ position: [1.0, 0.0, 9.9] }}
          gl={{
            powerPreference: 'high-performance',
            alpha: true,
            antialias: true,
            stencil: false,
            depth: true,
          }}
        >
          <Blob mobileMenu={mobileMenu} />
        </Canvas>
      </div>
{/* 
      <div className='text-8xl'>
      <p>height:{h}</p>
      <p>width:{w}</p>
      </div> */}
      {/**hero section */}
      <HeroSection />
      {/**progress bar */}

      {mobileMenu ? (
        <MobileProgressBar />
      ) : (
        <ProgressBar mobileMenu={mobileMenu} />
      )}

      {/**about section */}
      <AboutSection mobileMenu={mobileMenu} />
      {/**skills section */}
      <SkillsSection />
      {/**projects section */}
      <ProjectsSection mobileMenu={mobileMenu} />

      {/**contact section */}
      <ContactSection />
    </main>
  );
}
