import React, { useLayoutEffect, useEffect, useRef } from 'react';

// import './index.css';
import Homepage from './Homepage';
import Test from './Test';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Blob from './Blob';
import { Canvas } from '@react-three/fiber';
import ProgressBar from './ProgressBar';


gsap.registerPlugin(ScrollTrigger);



function App() {


  return (
    <div className='min-h-screen h-full bg-[#121212] w-screen relative'>



      {/* <ProgressBar /> */}

      <Homepage />
    </div>
  );
}


export default App;
