import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import me from '../public/bg/me.jpg';
import Navbar from './Navbar';

import linkedin from '../public/icons/linkedin.svg';
import github from '../public/icons/github.svg';
import gmail from '../public/icons/gmail.svg';
import { Canvas } from '@react-three/fiber';
import ProgressBar from './ProgressBar';
import Blob from './Blob';

import { debounce } from 'lodash';

gsap.registerPlugin(ScrollTrigger);

export default function Homepage() {
  const aboutSectionRef = useRef(null);
  const heroSectionRef = useRef(null);
  const skillContentRef = useRef(null);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    sectionId: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(sectionId);

    if (target instanceof HTMLElement) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth',
      });
    }
  };

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

      // tl_09.from('.pic', {
      //   // height: '100dvh',
      //   scale: 1.2,
      //   // opacity: 0,
      //   // width: '800%',
      //   // aspectRatio: '4/5',
      //   xPercent: 70,
      //   ease: 'expo.inOut',
      //   duration: 1,
      //   scrollTrigger: {
      //     trigger: '.about-section',
      //     start: 'top top',
      //     end: 'bottom 90%',
      //     scrub: 4,
      //     pin: true,
      //     // markers: true,
      //   }
      // })
      // tl_10.from('.bio-text', {
      //   opacity: 0,
      //   // xPercent: '10',
      //   ease: 'slow',
      //   duration: 3,
      //   scrollTrigger: {
      //     trigger: '.pic',
      //     start: 'top top',
      //     end: 'top 35%',
      //     // markers: true,
      //     scrub: 4,
      //   }
      // })
      // tl_11.from('.pic-wrapper', {
      //   opacity: 0,
      //   xPercent: '10',
      //   ease: 'expo',
      //   scrollTrigger: {
      //     trigger: '.pic',
      //     start: 'top 7%',
      //     end: 'top 15%',
      //     // markers: true,
      //     scrub: 3,
      //   }
      // })
      // tl_12.from('.firstname-lastname', {
      //   opacity: 0,
      //   // xPercent: '10',
      //   ease: 'slow',
      //   duration: 3,
      //   scrollTrigger: {
      //     trigger: '.pic',
      //     start: 'top 5%',
      //     end: 'top 29%',
      //     // markers: true,
      //     scrub: 4,
      //   }
      // })

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


  console.log(blobScale.current);
  useLayoutEffect(() => {
    const resetBlob = () => {
      gsap.set('.blob-wrapper', {
        // x: 0,
        // paddingTop: 0,
        scale: 1,
      });
    };

    // const downTl = gsap.timeline({
    //   // yPercent: '20%',
    //   scrollTrigger: {
    //     trigger: '.about-section',
    //     start: 'center center',
    //     end: 'bottom 140%',
    //     // pin:true,
    //     scrub: 3,
    //     markers: true,
    //     immediateRender: false,


    //     // onEnter: () => {
    //     //   setScale(.7)
    //     // },
    //     // onEnterBack: () => {
    //     //   setScale(1)
    //     // }
    //   },
    // });

    // downTl.to('.blob-wrapper', {
    //   // height: '90dvh',
    //   // width: '60dvw',
    //   // opacity: 1.6,
    //   // translateY: '4%',
    //   // opacity:1,
    //   ease: 'none',
    //   y: 70,
    //   // rotate: -100,
    //   // rotateX: -800,
    //   // marginTop: '90px',
    //   x: 390,
    //   // scale: .7,
    //   duration: 1,
    // });

    // downTl.set('.blob-wrapper', {scale:.7})

    // downTl.to('.blob-wrapper', {
    //   // x: 390,
    //   rotate: 100,
    //   // y: 70,
    //   ease: 'none'
    // })

    // downTl.to(blobScale, {
    //   current: 0.7,

    //   onUpdate: () => {
    //      debounce(() => setScale(blobScale.current), 100)();
    //     // console.log(blobScale.current);
    //   },
    // });

    // const miscTl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '.misc-div',
    //     start: 'top 10%',
    //     end: '120% 10%',
    //     markers: true,
    //     onEnter: () => {
    //       resetBlob();
    //     },
    //     onLeave: () => {
    //       // Reverse the animation smoothly when scrolling back
    //       const reverseTl = gsap.timeline();
    //       reverseTl.to('.blob-wrapper', {
    //         ease: 'none',
    //         x: 650,
    //         scale: 1.2,
    //         duration: 1,
    //       });
    //     },
    //   },
    // });

    // miscTl.to('.blob-wrapper', {
    //   ease: 'none',
    //   x: -700,
    //   scale: 1.2,
    //   duration: 2,
    // });

    const contactTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.contact-section',
        start: '-30% 10%',
        end: 'center center',
        scrub: 1,
        // markers: true,
        onEnter: () => {
          resetBlob();
        },
      },
    });

    contactTl.to('.blob-wrapper', {
      ease: 'none',
      // scale: 2,
      y: 100,
      // rotate: -100,
      // x: 350,
      // scaleY: 1.5,
      // scaleX: .5,
      // height: '115dvh',
      // width: '130dvw',
      // duration: 5,
    });

    return () => {
      // downTl.kill();
      // miscTl.kill();
      contactTl.kill();
    };
  });

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
            snap: {
              snapTo: 0.33,
              ease: 'expo.inOut',
              delay: 0,
              // duration: { min: 0.22, max: 0.31 },
            },
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

  return (
    <main className='container relative w-[100vw] h-full min-h-screen z-0 text-white'>
      <Navbar scrollToSection={scrollToSection} />

      <div
        // ref={blobScale}
        className='blob-wrapper fixed self-center h-[99dvh]   z-[100] w-[90dvw] m-auto bottom-0 right-0 '
      >
        <Canvas
          camera={{ position: [0.0, 0.0, 9.9] }}
          gl={{
            powerPreference: 'high-performance',
            alpha: true,
            antialias: true,
            stencil: false,
            depth: true,
          }}
        >
          <Blob />
        </Canvas>
      </div>

      {/**hero section */}
      <section
        id='home'
        className='hero-section  h-[100dvh] relative z-[100]  flex flex-col justify-center items-center  xs:-translate-y-[30%] pt-96'
      >
        <p className='self-end xs:pr-4 pr-[5%] font-mono xs:text-[1.8vw] md:text-[.8vw]'>
          hello, i am
        </p>

        <h1
          id='text'
          className='font-dida text-[6.7vw] z-[150] relative leading-none text-center'
        >
          FULLSTACK DEVELOPER
        </h1>

        <div className='font-mono self-start pl-[7%] lowercase xs:w-[70%] md:w-[38%] xs:text-[2.2vw] pt-[1%]  md:text-[1.2vw] 5xl:text-[1vw]'>
          <p>Crafting Digital Experiences from Front to Back</p>
          <p> Bringing Ideas to Life with Code and Creativity</p>
        </div>
      </section>

      <div className=''>
        <ProgressBar />
      </div>

      {/**about section */}
      <section id='about' className='about z-[150] flex font-mono  relative '>
        <p className='text-[#121212] z-50 absolute top-4 left-4 text-[5vw] md:hidden '>
          //ABOUT
        </p>
        <div className='about-section  h-[100dvh] w-full bg-[#353b3c] flex relative top-0 '>
          <div className='md:flex  gap-[9%] w-[80%] max-h-[70%] min-h-[60%] self-center items-center mx-auto  '>
            <div className=' about-me-details-wrapper w-full h-fit '>
              <div className='pic-wrapper  bg-[#383838] absolute max-h-[75%] min-h-[40%] h-[67%] w-[36vw] 3xl:min-h-[77%] 4xl:min-h-[78%] 5xl:min-h-[85%]'></div>
              <img
                src={me}
                alt='photo of the creator'
                className='pic aspect-[4/5] z-10 object-cover h-fit 3xl:aspect-[9/11] 5xl:aspect-[11/11] relative xs:-right-3 -top-4 -right-8 xs:aspect-auto'
              />
            </div>

            <p className='bio-text font-mono text-[#121212] w-full lowercase  md:pr-8 md:text-[1.5vw] 2xl:text-[1.2rem] leading-tight text-[2.5vw] pt-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              aspernatur corporis? Eos pariatur aspernatur officiis hic tempora
              molestiae dolor natus fugiat consequatur eius iste deserunt
              commodi ex voluptate, impedit aperiam suscipit iure ipsam. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              aspernatur corporis? Eos pariatur aspernatur officiis hic tempora
              molestiae dolor natus fugiat consequatur eius iste deserunt
              commodi ex
            </p>
          </div>
          <div className='firstname-lastname md:flex flex-col justify-end items-end hidden uppercase text-[#121212] bottom-[7vw] absolute left-[10%] font-mono text-left w-fit h-fit text-[1rem]  3xl:bottom-10 5xl:bottom-7'>
            <p className='about'>anastasia</p>
            <p>//lukavsky</p>
          </div>
        </div>
      </section>

      {/**skills section */}
      <section
        id='skills'
        className='skills-section font-mono  md:text-[1vw]  flex w-screen bg-white  '
      >
        {/* <span className='text-[5vw] h-fit md:hidden p-5 text-white'>//SKILLS</span> */}
        <div className='front-end-section  md:text-[1.3vw] 4xl:text-[1rem]  flex w-[100vw]'>
          <div className='flex flex-col w-full basis-0 md:basis-1/2 pt-20 md:pt-96 ml-[37px] '>
            <div className='frontend-div   min-h-[80dvh] w-[100vw]   md:w-full md:basis-1/2 border-b'>
              <div className='flex flex-col   p-20 '>
                <ul className='list-disc  '>//front-end development</ul>
                <li>html</li>
                <li>html</li>
                <li>html</li>
                <li>html</li>
                <li>html</li>
                <li>html</li>
              </div>
            </div>

            <div className='backend-div bg-[#292e2f]   min-h-[80dvh] w-[100vw] md:w-full md:basis-1/2 border-t'>
              <div className=' ft-section flex flex-col  p-20 '>
                <ul className='list-disc '>//back-end development</ul>
                <li>html</li>
                <li>html</li>
                <li>html</li>
                <li>html</li>
                <li>html</li>
                <li>html</li>
              </div>
            </div>

            <div className='devops-and-deployment-div    min-h-[80dvh] w-[100vw] md:w-full md:basis-1/2  border-t'>
              <div className='ft-section flex flex-col  p-20 '>
                <ul className='list-disc  '>//devops and deployment</ul>
                <li>html</li>
                <li>html</li>
                <li>html</li>
                <li>html</li>
                <li>html</li>
                <li>html</li>
              </div>
            </div>

            <div className='misc-div left-div    min-h-[80dvh] w-[100vw] md:w-full md:basis-1/2  border-t '>
              <div className='ft-section flex flex-col  p-20 '>
                <ul className='list-disc  '>//misc</ul>
                <li>html</li>
                <li>html</li>
                <li>html</li>
                <li>html</li>
                <li>html</li>
                <li>html</li>
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
      <section
        id='projects-section-scroll-to'
        className='projects-section flex pt-[11dvh]  z-[150] relative bg-[#292e2f] overflow-x-hidden'
      >
        <div className=' flex flex-none  overflow-x-scroll '>
          <div className='projects h-screen w-[100vw] flex pt-2 justify-center '>
            <div className='w-[90vw]  h-[85dvh] md:flex  flex border border-black  gap-3 p-4'>
              <div className="bg-[#b93c3c] md:h-full h-[40%] bg-cover basis-1/2 bg-[url('/public/bg/mock1.jpg')] "></div>

              <div className='basis-1/2 h-fit font-mono text-[#121212] md:text-[1vw] text-[2vw] flex flex-col items-center justify-center'>
                <p className='text-center md:text-[1.7rem] 2xl:text-[2rem] text-[5vw] pt-5 md:pt-0'>
                  ASTORIA
                </p>
                <p className='leading-tight text-[.7rem] 2xl:text-[.9rem]'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  quaerat deleniti officia dolorum rem cupiditate animi
                  laudantium molestiae accusantium. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Non quaerat deleniti officia
                  dolorum rem cupiditate animi laudantium molestiae accusantium.
                </p>
                <p className='text-center pt-5 text-[1rem] 2xl:text-[1.3rem]'>
                  STACK
                </p>
                <div className='h-fit w-fit border border-[#121212] p-5 text-[.7rem] 2xl:text-[.9rem]'>
                  <ul>//front-end</ul>
                  <li>html</li>
                  <li>html</li>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio laboriosam porro illo
                  </li>
                  <li>html</li>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio laboriosam porro illo
                  </li>
                  <li>html</li>
                  <ul className='pt-5'>//back-end</ul>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio laboriosam porro illo?
                  </li>
                  <li>html</li>
                  <li>html</li>
                  <li>html</li>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio laboriosam porro illo?
                  </li>
                  <li>html</li>
                  <li>html</li>
                  <li>html</li>
                </div>
              </div>
            </div>
          </div>

          <div className='projects h-screen w-[100vw] flex pt-2 justify-center  '>
            <div className='w-[90vw] h-[85dvh] flex  border border-black  gap-3 p-4'>
              <div className='bg-[#121212] h-full basis-1/2'></div>

              <div className='basis-1/2 h-fit font-mono text-[#121212] text-[1vw] flex flex-col items-center justify-center'>
                <p className='text-center md:text-[1.7rem] text-[3vw] 2xl:text-[2rem]'>
                  ASTORIA
                </p>
                <p className='leading-tight text-[.7rem] 2xl:text-[.9rem]'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  quaerat deleniti officia dolorum rem cupiditate animi
                  laudantium molestiae accusantium. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Non quaerat deleniti officia
                  dolorum rem cupiditate animi laudantium molestiae accusantium.
                </p>
                <p className='text-center pt-5 text-[1rem] 2xl:text-[1.3rem]'>
                  STACK
                </p>
                <div className='h-fit w-fit border border-[#121212] p-5 text-[.7rem] 2xl:text-[.9rem]'>
                  <ul>//front-end</ul>
                  <li>html</li>
                  <li>html</li>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio laboriosam porro illo
                  </li>
                  <li>html</li>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio laboriosam porro illo
                  </li>
                  <li>html</li>
                  <ul className='pt-5'>//back-end</ul>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio laboriosam porro illo?
                  </li>
                  <li>html</li>
                  <li>html</li>
                  <li>html</li>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio laboriosam porro illo?
                  </li>
                  <li>html</li>
                  <li>html</li>
                  <li>html</li>
                </div>
              </div>
            </div>
          </div>

          <div className='projects h-screen w-[100vw] flex pt-2 justify-center'>
            <div className='w-[90vw] h-[85dvh] flex  border border-black  gap-3 p-4'>
              <div className='bg-[#121212] h-full basis-1/2'></div>

              <div className='basis-1/2 h-fit font-mono text-[#121212] text-[1vw] flex flex-col items-center justify-center'>
                <p className='text-center md:text-[1.7rem] text-[3vw] 2xl:text-[2rem]'>
                  ASTORIA
                </p>
                <p className='leading-tight text-[.7rem] 2xl:text-[.9rem]'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  quaerat deleniti officia dolorum rem cupiditate animi
                  laudantium molestiae accusantium. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Non quaerat deleniti officia
                  dolorum rem cupiditate animi laudantium molestiae accusantium.
                </p>
                <p className='text-center pt-5 text-[1rem] 2xl:text-[1.3rem]'>
                  STACK
                </p>
                <div className='h-fit w-fit border border-[#121212] p-5 text-[.7rem] 2xl:text-[.9rem]'>
                  <ul>//front-end</ul>
                  <li>html</li>
                  <li>html</li>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio laboriosam porro illo
                  </li>
                  <li>html</li>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio laboriosam porro illo
                  </li>
                  <li>html</li>
                  <ul className='pt-5'>//back-end</ul>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio laboriosam porro illo?
                  </li>
                  <li>html</li>
                  <li>html</li>
                  <li>html</li>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio laboriosam porro illo?
                  </li>
                  <li>html</li>
                  <li>html</li>
                  <li>html</li>
                </div>
              </div>
            </div>
          </div>

          <div className='projects h-screen w-[100vw] flex pt-2 justify-center'>
            <div className='w-[90vw] h-[85dvh] flex  border border-black  gap-3 p-4'>
              <div className='bg-[#121212] h-full basis-1/2'></div>

              <div className='basis-1/2 h-fit font-mono text-[#121212] text-[1vw] flex flex-col items-center justify-center'>
                <p className='text-center md:text-[1.7rem] text-[3vw] 2xl:text-[2rem]'>
                  ASTORIA
                </p>
                <p className='leading-tight text-[.7rem] 2xl:text-[.9rem]'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  quaerat deleniti officia dolorum rem cupiditate animi
                  laudantium molestiae accusantium. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Non quaerat deleniti officia
                  dolorum rem cupiditate animi laudantium molestiae accusantium.
                </p>
                <p className='text-center pt-5 text-[1rem] 2xl:text-[1.3rem]'>
                  STACK
                </p>
                <div className='h-fit w-fit border border-[#121212] p-5 text-[.7rem] 2xl:text-[.9rem]'>
                  <ul>//front-end</ul>
                  <li>html</li>
                  <li>html</li>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio laboriosam porro illo
                  </li>
                  <li>html</li>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio laboriosam porro illo
                  </li>
                  <li>html</li>
                  <ul className='pt-5'>//back-end</ul>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio laboriosam porro illo?
                  </li>
                  <li>html</li>
                  <li>html</li>
                  <li>html</li>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio laboriosam porro illo?
                  </li>
                  <li>html</li>
                  <li>html</li>
                  <li>html</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/**contact section */}
      <section id='contact' className='contact-section bg-[#fff] font-mono'>
        <div className='h-screen w-screen  relative '>
          <div className='flex  justify-between'>
            <div className=' h-screen w-full md:basis-1/2 gap-9 text-white mix-blend-difference flex flex-col items-center justify-center overflow-x-hidden'>
              <p className='md:text-[1.2vw] text-[5vw] 3xl:text-[1vw]'>contact me </p>
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
                <img src={github} alt='' className='md:w-[4vw] w-[10vw]' />
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
