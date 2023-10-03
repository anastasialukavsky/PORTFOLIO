import React, { useLayoutEffect, useEffect, useRef } from 'react';

import './App.css';
import Homepage from './Homepage';
import Test from './Test';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Blob from './Blob';
import { Canvas } from '@react-three/fiber';

function App() {
  const blobRef = useRef<HTMLDivElement>(null);
    const skillsSection = document.querySelector('.skills-section');

  useLayoutEffect(() => {
 const ctx = gsap.context(() => {

  // gsap.set(blobRef.current, {})
   gsap.to(blobRef.current, {
     ease: 'none',
     x: 300,
     scrollTrigger: {
       trigger: skillsSection,
       start: 'bottom bottom ',
       end: 'center bottom',
       markers: true,
     },
   });
 });

 return () => {
   ScrollTrigger.refresh();
   ctx.revert();
 };
  }, []);

  return (
    <div className='min-h-screen h-full bg-[#121212] w-screen relative'>
      <div ref={blobRef} className='blob-wrapper fixed   h-full  z-[100] w-full  top-[1/2] right-[1/2]'>
        <Canvas camera={{ position: [0.0, 0.0, 8.0] }} >
          <Blob />
        </Canvas>
      </div>
      <Homepage />
    </div>
  );
}

export default App;
