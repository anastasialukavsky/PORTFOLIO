import React, { useLayoutEffect, useEffect, useRef } from 'react';
// import Blob2 from './Blob2';
// import { Canvas } from '@react-three/fiber';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// import './App.css';

function App() {
  // const blobRef = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   //  const blobElement = document.getElementById('blob');
  //   const blobElement = document.getElementById('#blob') as HTMLElement;

  //   const blobHeight = blobRef.current?.clientHeight;
  //   const windowHeight = window.innerHeight;
  //   const bodyHeight = document.body?.clientHeight;

  //   if (!blobHeight || !blobRef.current || !bodyHeight) return;
  //   console.log('hello');

  //   gsap.to(blobRef.current, {

  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: document.body,
  //       start: 'top top',
  //       end: 'bottom bottom',
  //       scrub: true,
  //       pin: true,
  //       // markers: true,
  //       pinSpacing: false,
  //     },
  //   });
  // }, [blobRef.current]);
  // const skillsSection = document.querySelector('.skills-section');
  // const blob = document.querySelector('#blob');

  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.to(blob, {
  //       ease: 'none',
  //       x: 200,
  //       scrollTrigger: {
  //         trigger: skillsSection,
  //         start: 'top top',
  //         end: 'center bottom',
  //         markers: true
  //       },
  //     });
  //   });

  //   return () => {
  //     ctx.revert();
  //   };
  // }, []);

  return (
    <div className='wrapper h-fit fixed z-[100] w-screen'>
      <div
        // ref={blobRef}
        id='blob'
        className='blob absolute top-[calc(50vh_-_40px)] right-1/2 h-20 w-20  bg-red-900'
      ></div>
    </div>
  );
}

export default App;
