import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import me from '../public/bg/me-q30.webp';
import Navbar from './Navbar';

import linkedin from '../public/icons/linkedin.svg';
import github from '../public/icons/github.svg';
import gmail from '../public/icons/gmail.svg';
import html from '../public/icons/html-1.svg';
import adobePhotoshop from '../public/icons/adobe-photoshop.svg';
import axios from '../public/icons/axios-1.svg';
import blendr from '../public/icons/blender-1.svg';
import css from '../public/icons/css-3.svg';
import davinciResolve from '../public/icons/davinci-resolve-12.svg';
import docker from '../public/icons/docker.svg';
import electron from '../public/icons/electron-1.svg';
import figma from '../public/icons/figma-5.svg';
import git from '../public/icons/git-icon.svg';
import gsapIcon from '../public/icons/gsap.svg';
import javascript from '../public/icons/javascript-1.svg';
import mongodb from '../public/icons/mongodb.svg';
import nginx from '../public/icons/nginx-1.svg';
import nodejs from '../public/icons/nodejs-1.svg';
import postreSQL from '../public/icons/postgresql.svg';
import prisma from '../public/icons/prisma-3.svg';
import reactIcon from '../public/icons/react-2.svg';
import reactNative from '../public/icons/react-native-1.svg';
import redux from '../public/icons/redux.svg';
import sequelize from '../public/icons/sequelize.svg';
import stripe from '../public/icons/stripe-3.svg';
import tailwind from '../public/icons/tailwind-css-2.svg';
import threejs from '../public/icons/threejs-1.svg';
import typescript from '../public/icons/ts-logo-512.svg';
import vite from '../public/icons/vitejs.svg';
import zod from '../public/icons/zod.svg';
import postman from '../public/icons/postman.svg';
import mongoose from '../public/icons/mongoose.svg';
import express from '../public/icons/express-logo.svg';
import { Canvas } from '@react-three/fiber';
import ProgressBar from './ProgressBar';
import Blob from './Blob';

import { debounce } from 'lodash';
import Typewriter from './Typewriter';

gsap.registerPlugin(ScrollTrigger);

export default function Homepage() {
  const aboutSectionRef = useRef(null);
  const heroSectionRef = useRef(null);
  const skillContentRef = useRef(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    sectionId: string,
    isHorizontalScroll: boolean = false
  ) => {
    e.preventDefault();
    const target = document.querySelector(sectionId);

    if (target instanceof HTMLElement) {
      if (isHorizontalScroll) {
        const projectsSection = document.querySelector('.proj-try');
        if (projectsSection instanceof HTMLElement) {
          if (projectsSection.scrollLeft !== undefined) {
            const scrollLeft = target.offsetLeft - projectsSection.offsetLeft;
            projectsSection.scrollTo({
              left: scrollLeft,
              behavior: 'smooth',
            });
          }
        }
      } else {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth',
        });
      }
    }
  };

  const projectsSection = document.querySelector('.proj-try');
  useEffect(() => {
    console.log(window.location);
  }, [projectsSection]);

  useLayoutEffect(() => {
    if (
      !document.querySelector('.hero-section') ||
      !document.querySelector('.about-section') ||
      !document.querySelector('.devops-and-deployment-div') ||
      !document.querySelector('.backend-div') ||
      !document.querySelector('.right-div') ||
      !document.querySelector('.skills-section') ||
      !document.querySelector('.misc-div') ||
      // !projects || !projects.length ||
      !document.querySelector('.contact-section')
      // !document.querySelector('.projects-section')
    )
      return;

    const ctx = gsap.context(() => {
      const tl_01 = gsap.timeline({});
      const tl_02 = gsap.timeline({});
      const tl_03 = gsap.timeline({});
      const tl_04 = gsap.timeline({});
      const tl_05 = gsap.timeline({});
      const tl_06 = gsap.timeline({});
      const tl_07 = gsap.timeline({});
      const tl_08 = gsap.timeline({});
      const tl_09 = gsap.timeline({});
      const tl_10 = gsap.timeline({});
      const tl_11 = gsap.timeline({});
      const tl_12 = gsap.timeline({});
      const tl_13 = gsap.timeline({});
      const tl_14 = gsap.timeline({});
      const tl_15 = gsap.timeline({});

      tl_14.to('.hello-article', {
        opacity: 1,
        duration: 1.2,
        delay: 1,
        ease: 'expo',
      });
      tl_14.to('.hero-desc', {
        opacity: 1,
        duration: 1,
        delay: 4,
        ease: 'expo',
      });

      {
        /**hero section slide in */
      }
      tl_01.to('.hero-section', {
        yPercent: 100,
        ease: 'expo',
        duration: 1,
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top bottom',
          end: 'top top',
          scrub: 1.5,
          // markers: true
        },
      });

      {
        /**about-section bg color merge */
      }
      tl_02.to('.about-section', {
        backgroundColor: '#dfe0e2',
        immediateRender: false,
        duration: 5,
        ease: 'slow',
        scrollTrigger: {
          trigger: '.about-section',
          // scroller: '.container',
          // pin: true,
          scrub: 6,
          start: 'top bottom',
          end: '+=100%',
          // markers: true,
          // snap: .5,
        },
      });

      {
        /**about section pic anim */
      }
      {!mobileMenu && 
        tl_09.from('.pic', {
          // height: '100dvh',
          scale: 1.1,
          // opacity: 0,
          // width: '800%',
          // aspectRatio: '4/5',
          xPercent: 70,
          ease: 'expo.inOut',
          duration: 1,
          scrollTrigger: {
            trigger: '.about-section',
            start: 'top 7%',
            end: 'center 90%',
            scrub: 4,
            // pin: true,
            // markers: true,
          },
        });
      }
      tl_10.from('.bio-text', {
        opacity: 0,
        // xPercent: '10',
        ease: 'slow',
        duration: 3,
        scrollTrigger: {
          trigger: '.pic',
          start: mobileMenu ? 'top 30%' :  'top 15%',
          end: mobileMenu ? 'top 50%' : 'top 25%',
          markers: true,
          scrub: 4,
        },
      });
      tl_11.from('.pic-wrapper', {
        opacity: 0,
        xPercent: '10',
        ease: 'expo',
        scrollTrigger: {
          trigger: '.pic',
          start:  mobileMenu ? 'top 50%' : 'top 9%',
          end: 'center 90%',
          // markers: true,
          scrub: 3,
        },
      });
      tl_12.from('.firstname-lastname', {
        opacity: 0,
        // xPercent: '10',
        ease: 'slow',
        duration: 3,
        scrollTrigger: {
          trigger: '.pic',
          start: 'top 15%',
          end: 'top 17%',
          // markers: true,
          scrub: 4,
        },
      });
      
   



      tl_03.to('.backend-div', {
        yPercent: -50,
        ease: 'expo.inOut',
        duration: 3,
        // delay: 2,
        scrollTrigger: {
          trigger: '.backend-div',
          start: 'center bottom',
          end: ' bottom 80%',
          scrub: 2.5,
          // pin: true,
          // scrub: true
          // markers: true,
        },
      });

      tl_04.to('.devops-and-deployment-div', {
        yPercent: -50,
        ease: 'expo.inOut',
        duration: 3,
        // delay: 2,
        scrollTrigger: {
          trigger: '.devops-and-deployment-div',
          start: 'center bottom',
          end: ' bottom 80%',
          scrub: 2.5,
          // scrub: true
          // markers: true,
        },
      });

      tl_13.to('.misc-div', {
        yPercent: -50,
        ease: 'expo.inOut',
        duration: 3,
        // delay: 2,
        scrollTrigger: {
          trigger: '.misc-div',
          start: 'center bottom',
          end: ' bottom 80%',
          scrub: 2.5,
          // scrub: true
          // markers: true,
        },
      });

      // tl_05.set('.right-div', { position: 'sticky', top: 20 });
      tl_05.to('.right-div', {
        xPercent: -200,
        ease: 'none',
        // top: '75px',
        // position: 'relative',
        duration: 2,
        scrollTrigger: {
          trigger: '.misc-div',
          start: 'top 20%',
          end: '120% 10%',
          scrub: 3,
          // scrub: true,
          // markers: true,
        },
      });

      gsap.to('.right-div', {
        // top: '75px',
        scrollTrigger: {
          trigger: '.right-div',
          pin: true,
          start: 'top 75px',
          end: 'bottom bottom',
          endTrigger: '.projects-section',
        },
      });

      {
        /**skills section bg color merge */
      }
      tl_06.to('.skills-section', {
        backgroundColor: '#292e2f',
        immediateRender: false,
        duration: 4,
        ease: 'slow',
        scrollTrigger: {
          trigger: '.skills-section',
          // scroller: '.container',
          scrub: 5,
          start: 'top bottom',
          end: '+=100%',
        },
      });

      {
        /**projects sectino bg transition */
      }
      tl_07.to('.projects-section', {
        backgroundColor: '#fff',
        immediateRender: false,
        duration: 1,
        ease: 'slow',
        scrollTrigger: {
          trigger: '.projects-section',
          scrub: 4,
          start: 'top bottom',
          end: '+=100%',
          // markers: true
        },
      });

      {
        /**contact section bg transition */
      }

      tl_08.to('.contact-section', {
        backgroundColor: '#1d2021',
        immediateRender: false,
        duration: 1,
        scrollTrigger: {
          trigger: '.contact-section',
          scrub: 4,
          start: 'top bottom',
          end: '+=100%',
          // markers: true,
        },
      });
    });

    return () => {
      // ScrollTrigger.refresh();
      ctx.revert();
    };
  });

  const blobScale = useRef(1);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    // if (!projects || !projects.length || !projectsSection) return;
    const documentReadyState = document.readyState;

    const handleDOMContentLoaded = () => {
      const ctx = gsap.context(() => {
        const projectsSection = document.querySelector(
          '.projects-section'
        ) as HTMLElement;
        const projects = gsap.utils.toArray('.projects');

        {
          /**horizontal scroll anim */
        }

        gsap.to(projects, {
          // xPercent: -100 * (projects.length - 1),
          x: () => -1 * (projectsSection?.scrollWidth - innerWidth),
          ease: 'none',
          // delay:3,
          // duration: 5,
          scrollTrigger: {
            trigger: projectsSection,
            pin: true,
            start: 'top top',
            scrub: 1,
            // markers: true,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            refreshPriority: 1,
            end: () => '+=' + projectsSection?.offsetWidth,
            // end: () => '+=4000',
            // end: () => '+=' + (proj?.offsetWidth - window.innerWidth),
            // snap: {
            //   snapTo: 0.33,
            //   ease: 'expo.inOut',
            //   delay: 0,
            //   // duration: { min: 0.22, max: 0.31 },
            // },
            //!1st snap works better
            //  snap: {
            //    snapTo: 0.33,
            //    duration: 0.02,
            //    ease: 'power1.inOut',
            //  },
            //  snap: {
            //    snapTo: 1 / (projects.length - 1),
            //    inertia: false,
            //    duration: { min: 0.1, max: 0.1 },
            //  },
            //*test snaps
            //  snap: 1 / (projects.length - 1),
            //     snap: {
            // snapTo: 1 / (projects.length - 1),
            // duration: { min: 0.22, max: 0.31 },
            // delay: 0,
            // ease: "sine.inOut",
            //     },

            // onUpdate: () =>  {
            //   console.log('update')
            // }
          },
        });
      });
      return () => {
        ctx.revert();
      };
    };

    let funcCall: () => void;
    if (
      documentReadyState === 'complete' ||
      documentReadyState === 'interactive'
    ) {
      funcCall = handleDOMContentLoaded();
    } else {
      document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
      funcCall();
    };
  });

  {
    /**click handler for default email app */
  }
  const handleEmailClick = () => {
    window.location.href = 'mailto:lukavskyanastasia@gmail.com';
  };
  const ref = useRef(null);

  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     paused: true,
  //   });

  //   // letter animation
  //   tl.fromTo(
  //     '.anim-typewriter',
  //     {
  //       width: '0',
  //     },
  //     {
  //       width: '20.18em' /* same as CSS .line-1 width */,
  //       ease: 'steps(37)',
  //     },
  //     0
  //   );

  //   // text cursor animation
  //   tl.fromTo(
  //     '.anim-typewriter',
  //     {
  //       borderRightColor: 'rgba(255,255,255,0.75)',
  //     },
  //     {
  //       borderRightColor: 'rgba(255,255,255,0)',
  //       repeat: -1,
  //       ease: 'steps(37)',
  //     },
  //     0.5 // Add a delay of 0.5 seconds before this animation starts
  //   );

  //   tl.play();
  // }, []);

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

  return (
    <main className='container relative w-[100vw] h-full min-h-screen z-0 text-white portrait:w-[100vw]'>
      <Navbar scrollToSection={scrollToSection} mobileMenu={mobileMenu} />
      <div
        // ref={blobScale}
        className='blob-wrapper  fixed self-center md:h-[99dvh] h-[100svh] w-[100svw]  z-[100] md:w-[100dvw] m-auto bottom-0 right-0 '
      >
        <Canvas
          ref={ref}
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
      {/**hero section */}
      <section
        id='home'
        className='hero-section  h-[100dvh] relative z-[100]  flex flex-col justify-center items-center md:-translate-y-[30%] md:pt-96 portrait:w-[100svw] portrait:h-[100vh]'
      >
        <p className='hello-article self-end xs:pr-4 pr-[5%] font-mono text-[2.7vw] md:text-[1vw] opacity-0 portrait:fixed portrait:top-[37%]'>
          hello, i am
        </p>

        <h1
          id='text'
          className='anim-typewriter font-dida text-[6.7vw] z-[150] relative leading-none text-center portrait:text-[13.5vw]  portrait:self-center portrait:top-0'
        >
          <Typewriter name='ANASTASIA LUKAVSKY' text='FULLSTACK DEVELOPER' />
        </h1>

        <div className='hero-desc font-mono self-start pl-[7%] lowercase xs:w-[70%] md:w-[38%] portrait:text-[3vw] pt-[1%] portrait:pt-3 portrait:w-full md:text-[1.2vw] 5xl:text-[1vw] opacity-0'>
          <p>Crafting Digital Experiences from Front to Back</p>
          <p> Bringing Ideas to Life with Code and Creativity</p>
        </div>
      </section>
      <ProgressBar mobileMenu={mobileMenu} />

      {/**about section */}
      <section
        id='about'
        className='about z-[150] flex font-mono portrait:w-[100vw] w-[100svw] relative portrait:bg-[#353b3c] '
      >
        <div className='about-section  portrait:w-[100svw] h-[100dvh] w-full bg-[#353b3c] flex relative top-0 '>
          <div className='md:flex  gap-[9%] w-[80%] max-h-[70%] min-h-[60%] self-center items-center mx-auto  portrait'>
            <div className=' about-me-details-wrapper w-full h-fit '>
              <div
                className={` ${
                  mobileMenu ? 'h-[47%] w-[70vw] left-16 top-36' : 'h-[62%] w-[36vw]'
                } pic-wrapper  bg-[#383838] absolute max-h-[75%] min-h-[40%] short:min-h-[82%]  3xl:min-h-[77%] 4xl:min-h-[78%] 5xl:min-h-[85%] 6xl:min-h-[87%]`}
              ></div>
              <img
                src={me}
                alt='photo of the creator :)'
                className='pic aspect-[4/5] z-10 object-cover h-fit 3xl:aspect-[9/11] short:aspect-[9/11] 5xl:object-contain 5xl:aspect-[8/11] relative md:-right-3 -top-4 -right-8   portrait:h-[95vw] portrait:aspect-auto'
              />
            </div>

            <p className='bio-text font-mono text-[#121212] w-full lowercase  md:pr-8 md:text-[1.5vw] 2xl:text-[1.2rem] leading-tight text-[.8rem] pt-5 portrait:ml-2'>
              I am a fullstack web developer based in Brooklyn, NY, with a keen
              eye for detail and a drive for creating exceptional digital
              experiences. My journey in web development has been an exciting
              exploration, where each stage of the development process, from
              system design to user interface design, has become a source of joy
              and fulfillment.
            </p>
          </div>
          <div className='firstname-lastname md:flex flex-col justify-end items-end hidden uppercase text-[#121212] bottom-[7vw] absolute left-[10%] font-mono text-left w-fit h-fit text-[1rem] short:bottom-3 3xl:bottom-10 5xl:bottom-7'>
            <p className='about'>anastasia</p>
            <p>//lukavsky</p>
          </div>
        </div>
      </section>
      {/**skills section */}
      <section
        id='skills'
        className='skills-section font-mono  md:text-[1vw]  flex w-[100svw] bg-white  '
      >
        {/* <span className='text-[5vw] h-fit md:hidden p-5 text-white'>//SKILLS</span> */}
        <div className='front-end-section  md:text-[1.3vw] 4xl:text-[1rem]   flex w-[100vw]'>
          <div className='flex flex-col w-full basis-0 md:basis-1/2 pt-20 lg:pt-96  ml-[37px] portrait:w-[90vw]'>
            <div className='frontend-div   min-h-[80dvh] w-[100vw]   md:w-full md:basis-1/2 border-b portrait:w-[90vw] md:pb-20'>
              <div className='flex flex-col   p-20  portrait:w-full  justify-center 5xl:items-center gap-2 xl:gap-10'>
                <p className=' self-center portrait:pb-14'>
                  //front-end development
                </p>
                <ul className=' grid grid-cols-3 gap-10 4xl:gap-10 5xl:gap-24 w-full '>
                  <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:-rotate-12 '>
                    <img src={html} alt='HTML' className='w-12 5xl:w-16 ' />
                  </li>
                  <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:rotate-12'>
                    <img
                      src={javascript}
                      alt='JavaScript'
                      className='w-12 5xl:w-16'
                    />
                  </li>
                  <li className='place-self-center'>
                    <img
                      src={css}
                      alt='CSS'
                      className='w-12 5xl:w-16 hover:scale-125 ease-out duration-300 transition-all transform hover:-rotate-12'
                    />
                  </li>
                  <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:rotate-12'>
                    <img
                      src={typescript}
                      alt='TypeScript'
                      className='w-12 5xl:w-16'
                    />
                  </li>
                  <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:-rotate-12'>
                    <img
                      src={reactIcon}
                      alt='React'
                      className='w-12 5xl:w-16 hover:scale-125 ease-out duration-300 transition-all transform hover:-rotate-12'
                    />
                  </li>
                  <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:-rotate-12'>
                    <img src={redux} alt='Redux' className='w-12 5xl:w-16' />
                  </li>
                  <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:rotate-12'>
                    <img
                      src={tailwind}
                      alt='Tailwind CSS'
                      className='w-12 5xl:w-16'
                    />
                  </li>
                  <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:-rotate-12'>
                    <img src={gsapIcon} alt='GSAP' className='w-12 5xl:w-16' />
                  </li>
                  <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:rotate-12'>
                    <img src={vite} alt='Vite' className='w-12 5xl:w-16' />
                  </li>
                  <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:-rotate-12'>
                    <img
                      src={reactNative}
                      alt='React Native'
                      className='w-16 5xl:w-24'
                    />
                  </li>
                  <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:-rotate-12'>
                    <img
                      src={threejs}
                      alt='Three.js'
                      className='w-12 5xl:w-16'
                    />
                  </li>
                  <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:rotate-12'>
                    <img
                      src={electron}
                      alt='Electron'
                      className='w-12 5xl:w-16'
                    />
                  </li>
                </ul>
              </div>
            </div>

            <div className='backend-div bg-[#292e2f]   min-h-[80dvh] w-[100vw] md:w-full md:basis-1/2 border-t portrait:w-[90svw] pt-36'>
              <div className=' ft-section flex flex-col  p-20 portrait:w-fit justify-center 5xl:items-center gap-2 xl:gap-10'>
                <p className=' self-center portrait:pb-14'>
                  //back-end development
                </p>
                <ul className=' grid grid-cols-3 gap-10 4xl:gap-10 5xl:gap-14'>
                  <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:-rotate-12 mix-blend-difference'>
                    <img src={nodejs} alt='NodeJS' className='w-17 5xl:w-20 ' />
                  </li>
                  <li className='place-self-center  hover:scale-125 ease-out duration-300 transition-all transform hover:rotate-12'>
                    <img
                      src={express}
                      alt='ExpressJS'
                      className='w-12 5xl:w-20 '
                    />
                  </li>
                  <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:-rotate-12'>
                    <img src={axios} alt='Axios' className='w-20 5xl:w-24 ' />
                  </li>
                  <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:rotate-12'>
                    <img
                      src={postreSQL}
                      alt='PostgreSQL'
                      className='w-14 5xl:w-20 '
                    />
                  </li>
                  <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:-rotate-12'>
                    <img
                      src={sequelize}
                      alt='Sequelize'
                      className='w-14 5xl:w-20'
                    />
                  </li>
                  <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:rotate-12'>
                    <img
                      src={prisma}
                      alt='Prisma'
                      className='w-14 5xl:w-32 mix-blend-difference'
                    />
                  </li>
                  <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:-rotate-12'>
                    <img
                      src={mongodb}
                      alt='MongoDB'
                      className='w-14 5xl:w-24 '
                    />
                  </li>
                  <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:rotate-12'>
                    <img
                      src={mongoose}
                      alt='Mongoose'
                      className='w-20 5xl:w-28 '
                    />
                  </li>
                  <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:-rotate-12'>
                    <img src={zod} alt='Mongoose' className='w-20 5xl:w-28 ' />
                  </li>
                </ul>
              </div>
            </div>

            <div className='devops-and-deployment-div    min-h-[80dvh] w-[100vw] md:w-full md:basis-1/2  border-t portrait:w-[90svw] pt-36'>
              <div className='ft-section flex flex-col  p-20  portrait:w-fit  justify-center 5xl:items-center gap-2 xl:gap-10'>
                <p className='self-center portrait:pb-14'>
                  //devops and deployment
                </p>
                <ul className=' grid grid-cols-3 gap-10 4xl:gap-10 5xl:gap-14 '>
                  <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:rotate-12'>
                    <img src={git} alt='Git' className='w-14 5xl:w-20 ' />
                  </li>
                  <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:-rotate-12'>
                    <img src={github} alt='GutHub' className='w-14 5xl:w-20 ' />
                  </li>
                  <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:rotate-12'>
                    <img src={nginx} alt='Nginx' className='w-14 5xl:w-20 ' />
                  </li>
                  <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:-rotate-12'>
                    <img src={docker} alt='Docker' className='w-14 5xl:w-20 ' />
                  </li>
                  <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:rotate-12'>
                    <img
                      src={postman}
                      alt='Postman'
                      className='w-14 5xl:w-20 '
                    />
                  </li>
                </ul>
              </div>
            </div>

            <div className='misc-div left-div    min-h-[80dvh] w-[100vw] md:w-full md:basis-1/2  border-t portrait:w-[90svw] pt-36'>
              <div className='ft-section flex flex-col  p-20  portrait:w-fit  justify-center 5xl:items-center gap-2 xl:gap-10'>
                <p className='self-center portrait:pb-14'>//misc</p>
                <ul className='grid grid-cols-3 gap-10 4xl:gap-10 5xl:gap-14   '>
                  <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:-rotate-12'>
                    <img src={blendr} alt='Blendr' className='w-14 5xl:w-20 ' />
                  </li>
                  <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:rotate-12'>
                    <img src={figma} alt='Figma' className='w-14 5xl:w-20 ' />
                  </li>
                  <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:-rotate-12'>
                    <img
                      src={davinciResolve}
                      alt='Davinci Resolve'
                      className='w-14 5xl:w-20 '
                    />
                  </li>
                  <li className='place-self-center col-span-full hover:scale-125 ease-out duration-300 transition-all transform hover:rotate-12'>
                    <img
                      src={adobePhotoshop}
                      alt='Adobe Photoshop'
                      className='w-10 5xl:w-20 '
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/**blob placement section */}
          <div className=' skills-section right-div  border-l   md:basis-1/2 hidden     h-screen    md:flex w-fit items-center bg-white'>
            {/* <p className='font-dida text-[6vw] text-center'></p> */}
          </div>
        </div>
      </section>
      {/**projects section */}
      {/* <div id='projects-section-scroll-to'></div> */}
      <section
        id='projects-section-scroll-to'
        className='projects-section flex pt-[11dvh]  z-[150] relative bg-[#292e2f] overflow-x-hidden  portrait:pt-14 w-[100vw]'
      >
        <div className='proj-try flex flex-none  overflow-x-scroll '>
          <div className='projects h-screen w-[100vw] flex pt-2 justify-center portrait:w-[200svw]'>
            <div className='w-[90vw] portrait:w-[200svw] h-[85dvh] md:flex  flex border border-black   gap-3 lg:gap-10 p-4 portrait:h-[90svh]'>
              <div className=" md:h-full portrait:bg-cover  bg-contain lg:bg-cover  bg-no-repeat basis-1/2 bg-[url('/public/bg/mock3-q30.webp')] portrait:h-full portrait:basis-full"></div>

              <div className='mobile-proj basis-1/2 portrait:basis-full h-fit font-mono text-[#121212] md:text-[1vw] text-[2vw] flex flex-col items-center justify-center 5xl:px-20 6xl:px-36 6xl:py-16 5xl:py-10  4xl:self-center portrait:pl-5 '>
                <p className='text-center md:text-[1rem] lg:text-[1.2rem] 2xl:text-[2rem] text-[5vw] pt-5 md:pt-0 short:text-[1.6rem]'>
                  ASTORIA
                </p>
                <p className='leading-tight text-[.9rem] md:text-[.6rem] lg:text-[.8rem] 2xl:text-[.9rem] xl:pt-4 '>
                  ASTORIA is a sophisticated e-commerce web platform
                  meticulously designed for a diverse audience, ensuring
                  pleantly seamless shopping experience. We prioritized an
                  intuitive user interface to facilitate effortless navigation
                  and an aesthetically pleasing design. Leveraging technologies
                  such as React.js and Node.js, alongside server-side caching,
                  we significantly enhanced site performance and provided
                  real-time updates, leaving the room for future scalability.
                  Our team adeptly handled the integration of third-party
                  payment gateway, ensuring a swift and secure user checkout
                  process.
                </p>
                <p className='text-center pt-5 text-[.8rem] lg:text-[1rem] 2xl:text-[1.3rem]'>
                  STACK
                </p>
                <div className='h-fit w-full border border-[#121212] p-5 lg:p-7 text-[.8rem] md:text-[.6rem] lg:text-[.8rem] lg:leading-[1.4] 2xl:text-[.9rem] leading-[1.1] flex justify-between xl:leading-normal xl:pl-10 4xl:max-w-[70%] 6xl:max-w-[50%] short:leading-[1.1]'>
                  <ul className='list-disc'>
                    //front-end
                    <li>React</li>
                    <li>Vite</li>
                    <li>Redux</li>
                    <li>GSAP/Framer Motion</li>
                    <li>Fuse JS</li>
                    <li>Tailwind CSS</li>
                    <li>Lenis</li>
                    <li>Day JS</li>
                    <li>Chart JS</li>
                    <li>Axios</li>
                    <li>Zod</li>
                    <li>Stripe</li>
                    <li>React Hot Toast</li>
                  </ul>

                  <ul className=' list-disc'>
                    //back-end
                    <li>Node JS</li>
                    <li>Express JS</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>Zod</li>
                    <li>Passport JS/JSON Web Token</li>
                    <li>Passport JS</li>
                    <li>Stripe</li>
                    <li>Nginx</li>
                    <li>Docker</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className='projects last-project h-screen w-[100vw] flex pt-2 justify-center portrait:w-[200svw]'>
            <div className='w-[90vw] portrait:w-[200svw] h-[85dvh] md:flex  flex border border-black   gap-3 lg:gap-10 p-4 portrait:h-[90svh]'>
              <div className=" md:h-full  bg-contain lg:bg-cover  bg-no-repeat basis-1/2 bg-[url('/public/bg/mock_plants1-q30.webp')] portrait:bg-cover  portrait:h-full portrait:basis-full"></div>

              <div className='mobile-proj basis-1/2 portrait:basis-full h-fit font-mono text-[#121212] md:text-[1vw] text-[2vw] flex flex-col items-center justify-center 5xl:px-20 6xl:px-36 6xl:py-16 5xl:py-10 4xl:self-center '>
                <p className='text-center md:text-[1rem] lg:text-[1.2rem] 2xl:text-[2rem] text-[5vw] pt-5 md:pt-0 short:text-[1.6rem]'>
                  PLANTS&CO 2.0
                </p>
                <p className='leading-tight text-[.6rem] lg:text-[.8rem] 2xl:text-[.9rem] xl:pt-4'>
                  PLANTS&CO 2.0 embodies a dynamic e-commerce platform, artfully
                  fusing sleek design with robust functionality. Evolving from
                  its early release, which was built by a group of four young
                  and talented engineers as a school project, this version
                  stands out with significant UI rebranding, full
                  responsiveness, and meticulous bug fixes on both client and
                  server sides. Powered by React and driven by Node.js, this
                  website provides an engaging and immersive shopping
                  experience. Engineered for both speed and responsiveness, it
                  ensures effortless browsing and purchasing across all devices,
                  leaving room for future server scalability. Our team
                  successfully integrated secure third-party payment gateways,
                  additionally providing personalized product recommendations to
                  enhance the shopping journey, adding a layer of tailor-made
                  convenience. Built with users and support personnel in mind,
                  PLANTS&CO 2.0 also features a sales and inventory admin
                  dashboard allowing to manage website sales reports with ease.
                </p>
                <p className='text-center pt-5 text-[.8rem] lg:text-[1rem] 2xl:text-[1.3rem]'>
                  STACK
                </p>
                <div className='h-fit w-full border border-[#121212]  p-5 lg:p-7 text-[.6rem] lg:text-[.8rem] 2xl:text-[.9rem] flex justify-between leading-[1.1] xl:leading-normal xl:pl-10 4xl:max-w-[70%]  6xl:max-w-[50%] short:leading-[1.1]'>
                  <ul className='list-disc'>
                    //front-end
                    <li>React</li>
                    <li>Vite</li>
                    <li>Redux</li>
                    <li>Tailwind CSS</li>
                    <li>Framer Motion</li>
                    <li>React Hot Toast</li>
                    <li>Axios</li>
                  </ul>

                  <ul className=' list-disc'>
                    //back-end
                    <li>Express JS</li>
                    <li>Node JS</li>
                    <li>JSON Web Token</li>
                    <li>Postress</li>
                    <li>Sequelize</li>
                    <li>Stripe</li>
                    <li>Nginx</li>
                    <li>Docker</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className='projects h-screen w-[100vw] flex pt-2 justify-center portrait:w-[200svw]'>
            <div className='w-[90vw] portrait:w-[200svw] h-[85dvh] md:flex  flex border border-black   gap-3 lg:gap-10 p-4 portrait:h-[90svh]'>
              <div className=" md:h-full  bg-contain lg:bg-cover  bg-no-repeat basis-1/2 bg-[url('/public/bg/mock3-q30.webp')] portrait:bg-cover  portrait:h-full portrait:basis-full"></div>

              <div className='basis-1/2 portrait:basis-full h-fit font-mono text-[#121212] md:text-[1vw] text-[2vw] flex flex-col items-center justify-center 5xl:px-20 6xl:px-36 6xl:py-16 5xl:py-10 4xl:self-center'>
                <p className='text-center md:text-[1rem] lg:text-[1.2rem] font-bold 2xl:text-[2rem] text-[5vw] pt-5 md:pt-0 short:text-[1.6rem]'>
                  SHROOM 3.0
                </p>
                <p className='leading-tight text-[.6rem] 2xl:text-[.9rem] lg:text-[.8rem] xl:pt-4'>
                  SHHROOM 3.0 is a collaborative project that evolved from its
                  early versions during development, culminating in its recent
                  deployment. SHHROOM 3.0 offers an unexpected and fun spin on
                  the globally recognized Zoom platform, facilitating seamless
                  connections among friends and families across the globe with
                  just a click. At its core, SHHROOM 3.0 provides an immersive
                  and unique user experience, greeting a user with a
                  meticulously crafted 3D room, setting the stage for an
                  engaging journey. Our relentless commitment to security and
                  privacy drove us to implement end-to-end encryption for a
                  custom-built chat feature, turning SHHROOM 3.0 into a testing
                  ground for this essential functionality. It's worth noting the
                  evolution of SHHROOM 3.0 through its releases. The initial
                  release featured a real-time web video chat application, while
                  the subsequent release introduced a desktop video and chat
                  application built using Electron and a variety of other
                  technologies.
                </p>
                <p className='text-center lg:pt-5 text-[.8rem] lg:text-[1rem] 2xl:text-[1.3rem]'>
                  STACK
                </p>
                <div className='h-fit w-full border border-[#121212]  p-2 text-[.6rem] 2xl:text-[.9rem] leading-[1] flex  justify-between pl-5 lg:text-[.8rem] lg:leading-[1.1] lg:p-5 xl:leading-normal xl:px-10 4xl:max-w-[70%]  6xl:max-w-[50%] short:leading-[1.1]'>
                  <ul className='list-disc '>
                    //front-end
                    <li>React</li>
                    <li>Vite</li>
                    <li>Redux</li>
                    <li>Tailwind CSS</li>
                    <li>Three JS/ React Fiber/ DREI</li>
                    <li>SocketIO</li>
                    <li>JSON Web Token</li>
                    <li>Axios</li>
                    <li>Zod</li>
                    <li>TweetNaCl</li>
                    <li>Peer JS</li>
                  </ul>

                  <ul className='  list-disc'>
                    //back-end
                    <li>Node JS</li>
                    <li>Express JS</li>
                    <li>Postgress</li>
                    <li>Sequelize</li>
                    <li>Zod</li>
                    <li>Nginx</li>
                    <li>Docker</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className='projects h-screen w-[100vw] flex pt-2 justify-center portrait:w-[200svw]'>
            <div className='w-[90vw] portrait:w-[200svw] h-[85dvh] md:flex  flex border border-black   gap-3 lg:gap-10 p-4 portrait:h-[90svh]'>
              <div className=" md:h-full  bg-contain lg:bg-cover  bg-no-repeat basis-1/2 bg-[url('/public/bg/lb_mockup-q30.webp')] portrait:h-full portrait:basis-full portrait:bg-cover "></div>

              <div className='basis-1/2 portrait:basis-full h-fit font-mono text-[#121212] md:text-[1vw] text-[2vw] flex flex-col items-center justify-center 5xl:px-20 6xl:px-36 6xl:py-16 5xl:py-10 4xl:self-center'>
                <p className='text-center md:text-[1rem] lg:text-[1.rem] 2xl:text-[2rem] text-[5vw] pt-5 md:pt-0 short:text-[1.6rem]'>
                  LUNCH BUDDY 2.0
                </p>
                <p className='leading-tight text-[.6rem] lg:text-[.8rem] 2xl:text-[.9rem] xl:pt-4'>
                  LUNCH BUDDY 2.0 revolutionizes lunchtime networking for busy
                  individuals, facilitating meaningful connections during brief
                  breaks. Recognizing the challenge of aligning schedules with
                  friends, we've crafted a platform allowing users to instantly
                  connect with like-minded individuals, ensuring a companion
                  during lunch. Our hand-crafted matching algorithm ensures
                  users are paired based on shared social and professional
                  interests, cuisine preferences, and even dietary restrictions,
                  including allowing users to set desired search radius as well
                  as pick a restaraunt for an upcoming meeting from a provided
                  restaraunt list. Privacy and security are our utmost
                  priorities, and as such, users' personal data and locations
                  remain confidential and never exposed. Integration of
                  third-party APIs like Google Maps API and Yelp Fusion API
                  unlocked a multitude of opportunities to enhance the platform.
                  LUNCH BUDDY 2.0 showcases significant UI rebranding,
                  comprehensive server and client-side bug fixes, seamless
                  cross-browser and cross-device responsiveness, and the
                  introduction of a dark mode to elevate user experience.
                </p>
                <p className='text-center lg:pt-3 text-[.8rem] lg:text-[1rem] 2xl:text-[1.3rem]'>
                  STACK
                </p>
                <div className='h-fit w-full border border-[#121212] p-1 lg:p-3 text-[.6rem] 2xl:text-[.9rem] flex justify-between leading-[1.1]  lg:text-[.8rem] lg:pl-6 xl:leading-normal xl:pl-10 4xl:max-w-[70%]  6xl:max-w-[50%] pl-5 short:leading-[1.1]'>
                  <ul className='list-disc'>
                    //front-end
                    <li>React</li>
                    <li>Redux</li>
                    <li>Vite</li>
                    <li>Tailwind CSS</li>
                    <li>GSAP/Framer Motion</li>
                    <li>React Hot Toast</li>
                    <li>Axios</li>
                  </ul>

                  <ul className=' list-disc'>
                    //back-end
                    <li>Node JS</li>
                    <li>Express JS</li>
                    <li>SocketIO</li>
                    <li>Geolib</li>
                    <li>Yelp Fusion API</li>
                    <li>Google Maps API</li>
                    <li>JSON Web Token</li>
                    <li>Postgress</li>
                    <li>Sequelize</li>
                    <li>Nginx</li>
                    <li>Docker</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/**contact section */}
      <section
        id='contact'
        className='contact-section  font-mono portrait:w-[100svw] w-[100svw] h-[100vh] relative'
      >
        <div className='h-screen w-screen  relative '>
          <div className='flex  justify-between  portrait:bg-none bg-cover h-[100svh] portrait:mx-5   mx-36 items-center '>
            <div className=' h-screen w-full md:basis-1/2  relative z-[120] gap-9 text-white mix-blend-difference flex flex-col items-center justify-center overflow-x-hidden'>
              <p className='md:text-[1.5vw] text-[5vw] 3xl:text-[1vw] whitespace-nowrap '>
                let's connect
              </p>
              <a
                id='link'
                href='https://www.linkedin.com/in/anastasialukavsky/'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:scale-125 ease-out duration-300 transition-all transform hover:rotate-12'
              >
                <img src={linkedin} alt='' className=' md:w-[4vw] w-[10vw]' />
              </a>
              <a
                id='link'
                href='https://github.com/anastasialukavsky'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:scale-125 ease-out duration-300 transition-all transform hover:-rotate-12'
              >
                <img src={github} alt='' className='md:w-[4vw] w-[11vw]' />
              </a>
              <img
                id='link'
                src={gmail}
                alt=''
                className=' md:w-[4vw] w-[10vw] hover:scale-125 ease-out duration-300 transition-all transform hover:rotate-12'
                onClick={handleEmailClick}
              />
            </div>
            <div className='md:h-screen object-cover h-0 md:basis-1/2 '></div>
          </div>
        </div>
      </section>
    </main>
  );
}
