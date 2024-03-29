import React, { useEffect } from 'react';

import Homepage from './Homepage';
import Lenis from '@studio-freight/lenis';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const lenis = new Lenis({
    duration: 2.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    wheelMultiplier: 1,
    infinite: false,
    smoothWheel: true,
  });



  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  {
    /**cursor animation for landscape md+ */
  }
  useEffect(() => {
    gsap.set('.ball', { xPercent: -50, yPercent: -50 });

    const ball = document.querySelector('.ball');
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.14;

    const xSet = gsap.quickSetter(ball, 'x', 'px');
    const ySet = gsap.quickSetter(ball, 'y', 'px');

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };

    const updateBallPosition = () => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const tickerUpdate = () => {
      updateBallPosition();
    };

    gsap.ticker.add(tickerUpdate);
    // ball?.style.pointerEvents = 'none';

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      gsap.ticker.remove(tickerUpdate);
    };
  }, []);

  return (
    <div className="min-h-screen h-full bg-[#353b3c] w-screen relative portrait:w-[100vw] selection:bg-pink-200 bg-[url('/bg/hero_noise.svg')] overflow-hidden">

      <Homepage />
      <div className='portrait:hidden ball mix-blend-difference w-[35px] h-[35px] md:fixed bg-white top-0 left-0 rounded-full pointer-events-none'></div>
    </div>
  );
}

export default App;
