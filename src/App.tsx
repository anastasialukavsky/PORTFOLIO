import React, { useLayoutEffect, useEffect, useRef } from 'react';

// import './index.css';
import Homepage from './Homepage';
import Lenis from '@studio-freight/lenis';
import Test from './Test';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Blob from './Blob';
import { Canvas } from '@react-three/fiber';
import ProgressBar from './ProgressBar';


gsap.registerPlugin(ScrollTrigger);



function App() {

   const lenis = new Lenis({
     duration: 2.2,
     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
     // orientation: 'vertical',
     // gestureOrientation: 'vertical',
     wheelMultiplier: 1,
     smoothTouch: false,
     touchMultiplier: 2,
     infinite: false,
     // lerp: 3,
     // duration: 1,
     smoothWheel: true,
   });

   //   lenis.on('scroll', ScrollTrigger.update);

   // lenis.on('scroll', (e: any) => {
    // bg - [#a977cb];
    // 343a40
    // 353b3c
    // [#1d1d1d]
   //   // console.log(e);
   // });

   function raf(time: number) {
     lenis.raf(time);
     requestAnimationFrame(raf);
   }

   requestAnimationFrame(raf);
  return (
    <div className='min-h-screen h-full bg-[#353b3c] w-screen relative portrait:w-[100vw]'>
      {/* <ProgressBar /> */}

      <Homepage />
    </div>
  );
}


export default App;
