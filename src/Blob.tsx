import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Mesh, ShaderMaterial } from 'three';
import * as THREE from 'three';
import vertexShader from './shaders/vertexShader';
import fragmentShader from './shaders/fragmentShader';
import { useFrame } from '@react-three/fiber';
import { MathUtils } from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { useThree } from '@react-three/fiber';

gsap.registerPlugin(ScrollTrigger);


export default function Blob({ mobileMenu }: { mobileMenu: boolean }) {
  const mesh = useRef<Mesh | null>(null);
  const hover = useRef(false);

  const materialProps = {
    wireframe: true,
  };

 

  const uniforms = useMemo(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.5 },
    };
  }, []);

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
      const material = mesh.current.material as ShaderMaterial;

      material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();
      material.uniforms.u_intensity.value = MathUtils.lerp(
        material.uniforms.u_intensity.value,
        hover.current ? 1 : 0.15,
        0.02
      );
    }
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // const intensityFactor = 0.5;
  // const lerpFactor = 1.1;

  // // helper function for linear interpolation
  // const lerp = (start: number, end: number, alpha: number) => {
  //   return start * (1 - alpha) + end * alpha;
  // };

  // const updateBlobPosition = () => {
  //   if (mesh.current) {
  //     const currentPosition = mesh.current.position;
  //     const targetPosition = {
  //       x: (mousePosition.x / window.innerWidth) * 2 - 1,
  //       y: -(mousePosition.y / window.innerHeight) * 2 + 1,
  //     };

  //     const newPosition = {
  //       x: lerp(currentPosition.x, targetPosition.x, lerpFactor),
  //       y: lerp(currentPosition.y, targetPosition.y, lerpFactor),
  //       z: currentPosition.z,
  //     };

  //     mesh.current.position.set(newPosition.x, newPosition.y, newPosition.z);
  //   }

  //   requestAnimationFrame(updateBlobPosition);
  // };
  // useEffect(() => {
  //   const handleMouseMove = (event: MouseEvent) => {
  //     const { clientX, clientY } = event;
  //     setMousePosition({ x: clientX, y: clientY });
  //   };

  //   window.addEventListener('mousemove', handleMouseMove);

  //   updateBlobPosition();

  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);

  useFrame(() => {
    if (mesh.current) {
      const currentPosition = mesh.current.position;
      const targetPosition = {
        x: (mousePosition.x / window.innerWidth) * 2 - 1,
        y: -(mousePosition.y / window.innerHeight) * 2 + 1,
      };


    }
  });

  useFrame((state) => {
    const { mouse } = state;
    if (mesh.current) {
      mesh.current.position.x = (mousePosition.x / window.innerWidth) * 3 - 1;
      mesh.current.position.y = -(mousePosition.y / window.innerHeight) * 2 + 1;

    }
  });


  useEffect(() => {
    if (!mesh.current) return; 
    const ctx = gsap.context(() => {
      gsap.to(mesh.current?.rotation, {
 
        y: '+=.2',
        repeat: -1,
        ease: 'none',
        repeatRefresh: true,

      });

    }, mesh);

    return () => ctx.revert();
  }, []);

  const aboutSection = document.querySelector('.about-section');
  const devopsSection = document.querySelector('.devops-and-deployment-div');
  const miscSection = document.querySelector('.misc-div');
  const contactSection = document.querySelector('.contact-section');


  const { camera } = useThree();



  const position = { x: 0, y: 0, z: 9.9 };
  useLayoutEffect(() => {
    gsap.registerPlugin({
      scrollTrigger: ScrollTrigger,

    });

    if (!mesh.current || !aboutSection) return;
    const ctx = gsap.context(() => {

      gsap.from(position, {
        z: 0,
        x: 0,
        y: 4.8,
        duration: 1.2,
        ease: 'expo',

        onUpdate: () => {
          camera.translateY(position.y - camera.position.y);
          camera.translateZ(position.z - camera.position.z);
          camera.translateX(position.x - camera.position.x);
        },
      });
      gsap.to(position, {
        x: mobileMenu ? -4 : -5.3,
        y: mobileMenu ? 8 : 1,
        z: mobileMenu ? 6 : 3,
        delay: 4,

        scrollTrigger: {
          trigger: aboutSection,
          start: 'center center',
          end: 'bottom bottom',
          scrub: 3,
        },
        onUpdate: () => {
          camera.translateY(position.y - camera.position.y);
          camera.translateZ(position.z - camera.position.z);
          camera.translateX(position.x - camera.position.x);
        },
      });

      const prevPosition = { x: -5.3, y: 1, z: 3 };
      const mobilePrevPosition = {x:-4 , y:8,  z: 6}
      gsap.to(mobileMenu ? mobilePrevPosition : prevPosition, {
        repeatRefresh: true,
        z: mobileMenu ? 6 : 15,
        x: mobileMenu ? 3 : -4.9,
        y: mobileMenu ? 5 : 0,
        scrollTrigger: {
          trigger: miscSection,
          start: mobileMenu ? 'bottom 290%' : 'bottom bottom',
          end: mobileMenu ? 'bottom bottom' : '',
          endTrigger: contactSection,
          scrub: 3,
      
        },
        onUpdate: () => {
          mobileMenu ? camera.translateY(mobilePrevPosition.y - camera.position.y) : camera.translateY(prevPosition.y - camera.position.y);
          mobileMenu ? camera.translateZ(mobilePrevPosition.z - camera.position.z) : camera.translateZ(prevPosition.z - camera.position.z);
          mobileMenu ? camera.translateX(mobilePrevPosition.x - camera.position.x) : camera.translateX(prevPosition.x - camera.position.x);
          
        },
      });


    });
    return () => {
      ctx.revert();
    };
  }, [camera]);

  return (
    <mesh
      ref={mesh}
      scale={2.1}
      // scale={3.5}
      // position={[0, 0, 0]}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
      // material={meshMaterial}
    >
      <icosahedronGeometry args={[2, 20]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        {...materialProps}
      />
    </mesh>
  );
}
