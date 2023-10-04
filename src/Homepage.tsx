import { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import me from '../public/bg/me.jpg';
import Navbar from './Navbar';

import linkedin from '../public/icons/linkedin.svg';
import github from '../public/icons/github.svg';
import gmail from '../public/icons/gmail.svg';
import { Canvas } from '@react-three/fiber';
import Blob from './Blob';


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

  const projects = gsap.utils.toArray('.projects');

  useLayoutEffect(() => {
    if (
      !document.querySelector('.hero-section') ||
      !document.querySelector('.about-section') ||
      !document.querySelector('.devops-and-deployment-div') ||
      !document.querySelector('.backend-div') ||
      !document.querySelector('.right-div') ||
      !document.querySelector('.skills-section') ||
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


      console.log('hello')

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
        /**bg color merge */
      }
      tl_02.to('.about-section', {
        backgroundColor: '#FFFFFF',
        immediateRender: false,
        scrollTrigger: {
          trigger: '.about-section',
          // scroller: '.container',
          scrub: true,
          start: 'top bottom',
          end: '+=100%',
          // markers: true,
          // snap: .5,
        },
      });

      tl_03.to('.backend-div', {
        yPercent: -60,
        ease: 'expo',
        duration: 1,
        // delay: 2,
        scrollTrigger: {
          trigger: '.backend-div',
          start: 'top 90%',
          end: 'bottom bottom',
          scrub: 1.5,
          // scrub: true
          // markers: true,
        },
      })
        tl_04.to('.devops-and-deployment-div', {
          yPercent: -60,
          ease: 'expo',
          duration: 1,
          // delay: 2,
          scrollTrigger: {
            trigger: '.devops-and-deployment-div',
            start: 'top 90%',
            end: 'bottom bottom',
            scrub: 1.5,
            // scrub: true
            // markers: true,
          },
        })
        tl_05.to('.right-div', {
          xPercent: -200,
          ease: 'none',
          duration: 2,
          scrollTrigger: {
            trigger: '.misc-div',
            start: 'top top',
            end: '120% 10%',
            scrub: 1,
            // scrub: true,
            // markers: true,
          },
        });

      {
        /**skills section bg color merge */
      }
      tl_06.to('.skills-section', {
        backgroundColor: '#121212',
        immediateRender: false,
        duration: 3.4,
        scrollTrigger: {
          trigger: '.skills-section',
          // scroller: '.container',
          scrub: 3.8,
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
        backgroundColor: '#121212',
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


      tl_09.to('.blob-wrapper', {
        ease: 'none',
        x: 700,
        //  scaleY: 3,
        //  scaleX: 3,

        scrollTrigger: {
          trigger: '.about-section',
          start: 'top center',
          end: 'center bottom',

          // markers: true,
          scrub: 4,
          // pin: true,
        },
      });
      {
        /**horizontal scroll anim */
      }
      // tl_10.to(projects, {
      //   xPercent: -100 * (projects.length - 1),
      //   ease: 'none',
      //   duration: 2,
      //   scrollTrigger: {
      //     trigger: '.projects-section',
      //     pin: true,
      //     scrub: 2,
      //     end: '+=4000',
      //     snap: {
      //       snapTo: 0.33,
      //       duration: 0.02,
      //       ease: 'power1.inOut',
      //     },
      //     // markers: true,
      //   },
      // });
    });

    return () => {
      // ScrollTrigger.refresh();
      ctx.revert();
    };
  });






  {
    /**click handler for default email app */
  }
  const handleEmailClick = () => {
    window.location.href = 'mailto:lukavskyanastasia@gmail.com';
  };

  return (
    <main className='container relative w-[100vw] h-full min-h-screen  text-white '>
      <Navbar scrollToSection={scrollToSection} />
      {/* <ProgressBar/> */}

      <div
        // ref={blobRef}
        className='blob-wrapper fixed   h-[50vh]  z-[100] w-[50vw] p-3 top-1/2 right-1/2 -translate-y-[50%] translate-x-[50%]'
      >
        <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
          <Blob />
        </Canvas>
      </div>


      

      {/**hero section */}
      <section
        id='home'
        className='hero-section  h-screen  flex flex-col justify-center items-center  xs:-translate-y-[30%] md:-translate-y-[10%]'
      >
        <p className='self-end xs:pr-4 pr-[5%] font-mono xs:text-[1.8vw] md:text-[.8vw]'>
          hello, i am
        </p>
        <h1
          id='text'
          className='font-dida  text-[6.7vw] leading-none text-center'
        >
          FULLSTACK DEVELOPER
        </h1>

        <div className='font-mono self-start pl-[7%] lowercase xs:w-[70%] md:w-[38%] xs:text-[2.2vw] pt-[1%]  md:text-[1.2vw] '>
          <p>Crafting Digital Experiences from Front to Back</p>
          <p> Bringing Ideas to Life with Code and Creativity</p>
        </div>
      </section>

      {/**about section */}
      <section
        id='about'
        className='about z-[150] flex font-mono  relative border'
      >
        <p className='text-[#121212] z-50 absolute top-4 left-4 text-[5vw] md:hidden '>
          //ABOUT
        </p>
        <div className='about-section  h-[100dvh] w-full bg-[#121212] flex relative top-0 '>
          <div className='md:flex  gap-[9%] w-[80%] max-h-[70%] min-h-[60%] self-center items-center mx-auto  '>
            <div className=' about-me-details-wrapper w-full h-fit'>
              <div className='bg-[#121212]  h-full'>
                <img
                  src={me}
                  alt='photo of the creator'
                  className='pic aspect-[4/5] object-cover h-fit relative xs:-right-3 -top-4 -right-8 xs:aspect-auto'
                />
              </div>
            </div>

            <p className='bio-text font-mono text-[#121212] w-full lowercase  md:pr-8 md:text-[1.5vw] leading-tight text-[2.5vw] pt-5'>
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
          <div className='firstname-lastname md:flex flex-col justify-end items-end hidden uppercase text-[#121212] bottom-[7vw] absolute left-[10%] font-mono text-left w-fit h-fit text-[1.5vw]  '>
            <p className='about'>anastasia</p>
            <p>//lukavsky</p>
          </div>
        </div>
      </section>

      {/**skills section */}
      <section
        id='skills'
        className='skills-section font-mono  md:text-[1vw] flex w-screen bg-white  '
      >
        {/* <span className='text-[5vw] h-fit md:hidden p-5 text-white'>//SKILLS</span> */}
        <div className='front-end-section text-[4vw]  md:text-[1.3vw]  flex w-[100vw]  '>
          <div className='flex flex-col w-full basis-0 md:basis-1/2 pt-20 md:pt-96 '>
            <div className='frontend-div   min-h-[80dvh] w-[100vw] md:w-full md:basis-1/2 border-b'>
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

            <div className='backend-div bg-[#121212]   min-h-[80dvh] w-[100vw] md:w-full md:basis-1/2 border-t'>
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

            <div className='devops-and-deployment-div bg-[#121212]   min-h-[80dvh] w-[100vw] md:w-full md:basis-1/2  border-t'>
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
          <div className=' skills-section right-div h-0 border-l  md:h-[100dvh] basis-0 md:basis-1/2 hidden sticky top-0  md:flex  items-center bg-white'>
            <p className='font-dida text-[6vw] text-center'>3d?</p>
          </div>
        </div>
      </section>

      {/**projects section */}
      <section
        id='projects-section-scroll-to'
        className='projects-section flex pt-[11dvh]  z-[200] bg-[#121212] '
      >
        <div className='  flex flex-none  overflow-x-scroll '>
          <div className='projects h-screen w-[100vw] flex pt-2 justify-center '>
            <div className='w-[90vw]  h-[85dvh] md:flex  flex border border-black  gap-3 p-4'>
              <div className='bg-[#121212] md:h-full h-[40%] basis-1/2'></div>

              <div className='basis-1/2 h-fit font-mono text-[#121212] md:text-[1vw] text-[2vw] flex flex-col items-center justify-center'>
                <p className='text-center md:text-[3vw] text-[5vw] pt-5 md:pt-0'>
                  ASTORIA
                </p>
                <p className='leading-tight'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  quaerat deleniti officia dolorum rem cupiditate animi
                  laudantium molestiae accusantium. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Non quaerat deleniti officia
                  dolorum rem cupiditate animi laudantium molestiae accusantium.
                </p>
                <p className='text-center pt-5'>STACK</p>
                <div className='h-fit w-fit border border-[#121212] p-5'>
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
                <p className='text-center text-[3vw]'>ASTORIA</p>
                <p className='leading-tight'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  quaerat deleniti officia dolorum rem cupiditate animi
                  laudantium molestiae accusantium. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Non quaerat deleniti officia
                  dolorum rem cupiditate animi laudantium molestiae accusantium.
                </p>
                <p className='text-center pt-5'>STACK</p>
                <div className='h-fit w-fit border border-[#121212] p-5'>
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
                <p className='text-center text-[3vw]'>ASTORIA</p>
                <p className='leading-tight'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  quaerat deleniti officia dolorum rem cupiditate animi
                  laudantium molestiae accusantium. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Non quaerat deleniti officia
                  dolorum rem cupiditate animi laudantium molestiae accusantium.
                </p>
                <p className='text-center pt-5'>STACK</p>
                <div className='h-fit w-fit border border-[#121212] p-5'>
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
                <p className='text-center text-[3vw]'>ASTORIA</p>
                <p className='leading-tight'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  quaerat deleniti officia dolorum rem cupiditate animi
                  laudantium molestiae accusantium. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Non quaerat deleniti officia
                  dolorum rem cupiditate animi laudantium molestiae accusantium.
                </p>
                <p className='text-center pt-5'>STACK</p>
                <div className='h-fit w-fit border border-[#121212] p-5'>
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
              <p className='md:text-[1.2vw] text-[5vw]'>contact me </p>
              <a
                href='https://www.linkedin.com/in/anastasialukavsky/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={linkedin} alt='' className=' md:w-[4vw] w-[10vw]' />
              </a>
              <a
                href='https://github.com/anastasialukavsky'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={github} alt='' className='md:w-[4vw] w-[10vw]' />
              </a>
              <img
                src={gmail}
                alt=''
                className=' md:w-[4vw] w-[10vw] '
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
