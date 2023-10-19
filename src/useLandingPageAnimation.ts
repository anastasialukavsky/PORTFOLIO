import { useLayoutEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


export function useLandingPageAnimation(mobileMenu:boolean, navbarHeight: number) {
    useLayoutEffect(() => {
    if (
      !document.querySelector('.hero-section') ||
      !document.querySelector('.about-section') ||
      !document.querySelector('.devops-and-deployment-div') ||
      !document.querySelector('.backend-div') ||
      !document.querySelector('.right-div') ||
      !document.querySelector('.skills-section') ||
      !document.querySelector('.misc-div') ||
      !document.querySelector('.contact-section')
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
        duration: 1,
        // delay: 1,
        ease: 'power4',
      });
      tl_14.to('.hero-desc', {
        opacity: 1,
        duration: 1,
        delay: 5.2,
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
      
      if(mobileMenu) {
        return
      } else {

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
          start: mobileMenu ? 'top 30%' : 'top 15%',
          end: mobileMenu ? 'top 50%' : 'top 25%',
          // markers: true,
          scrub: 4,
        },
      });
      tl_11.from('.pic-wrapper', {
        opacity: 0,
        xPercent: '10',
        ease: 'expo',
        scrollTrigger: {
          trigger: '.pic',
          start: mobileMenu ? 'top 50%' : 'top 18%',
          end: 'center 50%',
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

      tl_03.to('.frontend-div', {
        yPercent: -50,
        ease: 'expo.inOut',
        duration: 3,
        // delay: 2,
        scrollTrigger: {
          trigger: '.frontend-div',
          start: 'bottom 70%',
          end: ' bottom 80%',
          scrub: 2.5,
          // pin: true,
          // scrub: true
          // markers: true,
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
          start: `top ${navbarHeight}`,
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
      return () => {
        tl_01.kill();
        tl_02.kill();
        tl_03.kill();
        tl_04.kill();
        tl_05.kill();
        tl_06.kill();
        tl_07.kill();
        tl_08.kill();
        tl_09.kill();
        tl_10.kill();
        tl_11.kill();
        tl_12.kill();
        tl_13.kill();
        tl_14.kill();
        tl_15.kill();
      };
    });

    return () => {
      ctx.revert();
    };
  }, []);

}