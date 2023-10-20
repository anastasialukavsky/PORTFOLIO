import React, { useLayoutEffect } from 'react';
import ProjectWrapper from './ProjectWrapper';
import ProjectHeaderWrapper from './ProjectHeaderWrapper';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
type ProjectSectionProps = {
  mobileMenu: boolean;
};
export default function ProjectsSection({ mobileMenu }: ProjectSectionProps) {
  useLayoutEffect(() => {

    if(mobileMenu) return
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

       if(mobileMenu) {
        return
       } else {

         gsap.to(projects, {
           // xPercent: -100 * (projects.length - 1),
           x: mobileMenu
           ? ''
           : () => -1 * (projectsSection?.scrollWidth - innerWidth),
           ease: 'none',
           // delay:3,
           // duration: 5,
            scrollTrigger: {
              trigger: projectsSection,
              pin: mobileMenu ? false : true,
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
        }
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
  }, [mobileMenu]);



  return (
    <section
      id='projects-section-scroll-to'
      className='projects-section flex pt-[11dvh] portrait:pt-[5dvh] xshort:pt-[13dvh] z-[150] relative bg-[#292e2f] landscape:overflow-x-hidden w-[100vw] portrait:flex-col'
    >
      <div className='proj-try flex flex-none landscape:overflow-x-scroll portrait:flex-col  portrait:gap-0  portrait:h-full '>
        <div className='projects landscape:h-screen w-[100vw] flex landscape:pt-2 justify-center  pl-10 portrait:w-[100svw]  portrait:min-h-fit portrait:flex-col portrait:pl-0 '>
          <div className='w-[90vw] h-[85dvh] xshort:h-[80dvh] md:flex  flex border border-[#121212] gap-3 lg:gap-5 p-4 xshort:p-2 xl:p-6 4xl:p-8 3xl:gap-0 xl:gap-8 3xl:px-20 4xl:px-28 5xl:px-10  portrait:flex-col portrait:w-[100svw]  portrait:h-[190vh] '>
            <div className=" md:h-full portrait:bg-contain  bg-cover 3xl:bg-contain 5xl:bg-cover  bg-no-repeat basis-1/2 bg-[url('/public/bg/mock3-q30.webp')] portrait:basis-full portrait:max-h-[57vh] portrait:w-full  portrait:aspect-[2/3] "></div>

            <div className='basis-1/2 portrait:basis-full h-fit portrait:h-full'>
              <ProjectHeaderWrapper
                projectName='ASTORIA'
                link='https://astoriaskincare.co/'
              />

              <div className='font-mono text-[#121212]  flex flex-col items-center justify-between  5xl:px-20 6xl:px-36 6xl:py-16 5xl:py-10  4xl:self-center portrait:pl-5   max-h-[69svh] min-h-[69svh] lg:min-h-[72svh] lg:max-h-[72svh] 2xl:min-h-[71svh] 2xl:max-h-[71svh] 3xl:max-h-[68svh] 3xl:min-h-[68svh] short:min-h-[66svh] short:max-h-[66svh]  xshort:justify-between portrait:min-h-[110vh] portrait:max-h-[110vh] xshort:max-h-[64svh] xshort:min-h-[64svh] portrait:justify-center'>
                <ProjectWrapper
                  frontEnd={[
                    'React',
                    'Vite',
                    'Redux',
                    'TailwindCSS',
                    'GSAP',
                    'Axios',
                    'FuseJS',
                    'FramerMotion',
                    'Lenis',
                    'ReactHotToast',
                    'Stripe',
                    'Zod',
                  ]}
                  backEnd={[
                    'NodeJS',
                    'ExpressJS',
                    'MongoDB',
                    'Mongoose',
                    'Zod',
                    'Nginx',
                    'Docker',
                    'PassportJS',
                  ]}
                  description='ASTORIA is a sophisticated e-commerce web platform meticulously designed
                  for a diverse audience, ensuring pleantly seamless shopping experience. We
                  prioritized an intuitive user interface to facilitate effortless
                  navigation and an aesthetically pleasing design. Leveraging technologies
                  such as React.js and Node.js, alongside server-side caching, we
      significantly enhanced site performance and provided real-time updates,
      leaving the room for future scalability. Our team adeptly handled the
      integration of third-party payment gateway, ensuring a swift and secure
      user checkout process.'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='projects  landscape:h-screen w-[100vw] flex landscape:pt-2 justify-center  pl-10 portrait:w-[100svw]  portrait:min-h-fit  portrait:flex-col portrait:pl-0'>
          <div className='w-[90vw]  h-[85dvh] xshort:h-[80dvh] md:flex  flex border border-[#121212]  xshort:p-2  gap-3 lg:gap-5 p-4 xl:p-6 4xl:p-8 3xl:gap-0 xl:gap-8   3xl:px-20 4xl:px-28 5xl:px-10  portrait:flex-col portrait:w-[100svw]  portrait:h-[185vh]'>
            <div className=" md:h-full portrait:bg-contain bg-cover 3xl:bg-contain 5xl:bg-cover bg-no-repeat basis-1/2 bg-[url('/public/bg/mock_plants1-q30.webp')]  portrait:basis-full  portrait:max-h-[57vh] portrait:w-full  portrait:aspect-[1/3]"></div>

            <div className=' basis-1/2 portrait:basis-full h-fit portrait:h-full'>
              <ProjectHeaderWrapper
                projectName='PLANTS&CO 2.0'
                link='https://www.plantsandco.shop/'
              />
              <div className=' font-mono text-[#121212]  flex flex-col items-center justify-between  5xl:px-20 6xl:px-36 6xl:py-16 5xl:py-10   4xl:self-center  max-h-[69svh] min-h-[69svh]  lg:min-h-[72svh] lg:max-h-[72svh] 2xl:min-h-[71svh] 2xl:max-h-[71svh] 3xl:max-h-[68svh] 3xl:min-h-[68svh] short:min-h-[66svh] short:max-h-[66svh]  xshort:justify-between  portrait:min-h-[95vh]  portrait:pl-5 xshort:max-h-[64svh] xshort:min-h-[64svh] portrait:justify-center'>
                <ProjectWrapper
                  description=' PLANTS&CO 2.0 embodies a dynamic e-commerce platform, artfully
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
                  dashboard allowing to manage website sales reports with ease.'
                  frontEnd={[
                    'React',
                    'Vite',
                    'Redux',
                    'TailwindCSS',
                    'Axios',
                    'FramerMotion',
                    'Stripe',
                    'ReactHotToast',
                  ]}
                  backEnd={[
                    'NodeJS',
                    'ExpressJS',
                    'Sequelize',
                    'PostgreSQL',
                    'Nginx',
                    'Docker',
                    'JWT',
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='projects landscape:h-screen w-[100vw] flex landscape:pt-2 justify-center pl-10 portrait:w-[100svw]  portrait:min-h-fit  portrait:flex-col portrait:pl-0'>
          <div className='w-[90vw] h-[85dvh] xshort:h-[80dvh] md:flex  flex border border-[#121212]  xshort:p-2  gap-3 lg:gap-5 p-4 xl:p-6 4xl:p-8 3xl:gap-0 xl:gap-8   3xl:px-20 4xl:px-28 5xl:px-10 portrait:flex-col portrait:w-[100svw]   portrait:h-[195vh]'>
            <div className=" md:h-full portrait:bg-contain  bg-cover 3xl:bg-contain 5xl:bg-cover bg-no-repeat basis-1/2 bg-[url('/public/bg/shhroom_mockup-q30.webp')] portrait:basis-full portrait:max-h-[57vh] portrait:w-full  portrait:aspect-[2/3]"></div>

            <div className=' basis-1/2 portrait:basis-full h-fit portrait:h-full'>
              <ProjectHeaderWrapper
                projectName='SHHROOM 3.0'
                link='https://shhroom.live/'
              />
              <div className=' font-mono text-[#121212]   flex flex-col items-center justify-between  5xl:px-20 6xl:px-36 6xl:py-16 5xl:py-10  4xl:self-center max-h-[69svh] min-h-[69svh]  lg:min-h-[72svh] lg:max-h-[72svh] 2xl:min-h-[71svh] 2xl:max-h-[71svh] 3xl:max-h-[68svh] 3xl:min-h-[68svh]  short:min-h-[66svh] short:max-h-[66svh]  xshort:justify-between portrait:min-h-[110vh] portrait:pl-5 portrait:pb-10 xshort:max-h-[64svh] xshort:min-h-[64svh] portrait:justify-center'>
                <ProjectWrapper
                  description="SHHROOM 3.0 is a collaborative project that evolved from its
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
                  technologies."
                  frontEnd={[
                    'React',
                    'Vite',
                    'Redux',
                    'TailwindCSS',
                    'Axios',
                    'ThreeJS',
                    'ReactFiber',
                    'TweetNaCl',
                    'Zod',
                    'SocketIO',
                    'JWT',
                    'Blendr',
                  ]}
                  backEnd={[
                    'NodeJS',
                    'ExpressJS',
                    'Sequelize',
                    'PostgreSQL',
                    'Nginx',
                    'Docker',
                    'Zod',
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='projects landscape:h-screen w-[100vw] flex landscape:pt-2 justify-center portrait:w-[100svw]  portrait:min-h-fit portrait:flex-col portrait:pl-0'>
          <div className='w-[90vw]  h-[85dvh]  xshort:h-[80dvh] md:flex  flex border border-[#121212] xshort:p-2 gap-3 lg:gap-5 p-4 xl:p-6 4xl:p-8 3xl:gap-0 xl:gap-8   3xl:px-20 4xl:px-28 5xl:px-10 portrait:flex-col portrait:w-[100svw]   portrait:h-[185vh] portrait:border-b-none portrait:border-transparent '>
            <div className=" md:h-full portrait:bg-contain bg-cover 3xl:bg-contain 5xl:bg-cover bg-no-repeat basis-1/2 bg-[url('/public/bg/lb_mockup-q30.webp')] portrait:basis-full portrait:max-h-[57vh] portrait:w-full  portrait:aspect-[1/3] "></div>

            <div className=' basis-1/2 portrait:basis-full h-fit portrait:h-full'>
              <ProjectHeaderWrapper
                projectName='LUNCH BUDDY 2.0'
                link='https://lunchbuddy.co/'
              />
              <div className=' font-mono text-[#121212]  flex flex-col items-center justify-between  5xl:px-20 6xl:px-36 6xl:py-16 5xl:py-10  4xl:self-center max-h-[69svh] min-h-[69svh]  lg:min-h-[72svh] lg:max-h-[72svh] 2xl:min-h-[71svh] 2xl:max-h-[71svh] 3xl:max-h-[68svh] 3xl:min-h-[68svh] short:min-h-[66svh] short:max-h-[66svh] xshort:justify-between  portrait:min-h-[110svh]  portrait:pl-5 xshort:max-h-[64svh] xshort:min-h-[64svh]  portrait:justify-center'>
                <ProjectWrapper
                  description="LUNCH BUDDY 2.0 revolutionizes lunchtime networking for busy
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
                  introduction of a dark mode to elevate user experience."
                  frontEnd={[
                    'React',
                    'Vite',
                    'Redux',
                    'TailwindCSS',
                    'Axios',
                    'ReactHotToast',
                    'GSAP',
                    'FramerMotion',
                    'JWT',
                  ]}
                  backEnd={[
                    'NodeJS',
                    'ExpressJS',
                    'Sequelize',
                    'SocketIO',
                    'PostgreSQL',
                    'Nginx',
                    'GoogleMapsAPI',
                    'Docker',
                    'YelpFusionAPI',
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
