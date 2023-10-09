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
// import { AttrPlugin } from 'gsap/AttrPlugin';

gsap.registerPlugin(ScrollTrigger);
// import { useControls } from 'leva';

export default function Blob() {
  const mesh = useRef<Mesh | null>(null);
  const hover = useRef(false);

  const materialProps = {
    wireframe: true,
  };

  // const [opacity, setOpacity] = useState(1);

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
      // material.opacity = materialProps.opacity;
      // material.transparent = materialProps.opacity < 1;
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

      // mesh.current.position.x = lerp(
      //   currentPosition.x,
      //   targetPosition.x,
      //   lerpFactor
      // );
      // mesh.current.position.y = lerp(
      //   currentPosition.y,
      //   targetPosition.y,
      //   lerpFactor
      // );
    }
  });

  useFrame((state) => {
    const { mouse } = state;
    if (mesh.current) {
      mesh.current.position.x = (mousePosition.x / window.innerWidth) * 3 - 1;
      mesh.current.position.y = -(mousePosition.y / window.innerHeight) * 2 + 1;

      // console.log(mesh.current.scale)
      // mesh.current.scale.set(2.2 * scale, 2.2 * scale, 2.2 * scale)
    }
  });
  // console.log('mesh', mesh.current);

  useEffect(() => {
    if (!mesh.current) return; // Ensure mesh.current is available
    let ctx = gsap.context(() => {
      gsap.to(mesh.current?.rotation, {
        // x: '+=20',
        y: '+=.2',
        repeat: -1,
        ease: 'none',
        repeatRefresh: true,
        //  scrollTrigger: {
        //   trigger: aboutSection,
        //   start: 'center center',
        //   end: 'bottom 140%',
        //   scrub: 3,
        // },
      });

      // gsap.to(mesh.current, {
      //   // rotate: 900,
      //   scrollTrigger: {
      //     trigger: aboutSection,
      //     start: 'center center',
      //     end: 'bottom 140%',
      //     scrub: 3,
      //   },
      // });
    }, mesh);

    return () => ctx.revert();
  });

  const aboutSection = document.querySelector('.about-section');
  const devopsSection = document.querySelector('.devops-and-deployment-div');
  const miscSection = document.querySelector('.misc-div');
  const contactSection = document.querySelector('.contact-section');

  // useLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   if (!mesh.current || !aboutSection) return;
  //   const ctx = gsap.context(() => {
  //     // const downTl = gsap.timeline({});

  //       const downTl = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: aboutSection,
  //           start: 'center center',
  //           end: 'bottom 140%',
  //           scrub: 3,
  //         },
  //       });

  //       downTl.to(mesh.current.position, {
  //         ease: 'none',
  //         y: 70,
  //         x: 390,
  //         duration: 1,
  //       });

  //     // return () => downTl.kill();
  //   });
  //   return () => {
  //     ctx.revert();
  //   };
  // });

  const { camera } = useThree();
  let meshPosition = mesh.current ? mesh.current.position : new THREE.Vector3();

  console.log('meshpos', camera)

  const position = { x: 0, y: 0, z: 9.9 };
  useLayoutEffect(() => {
    gsap.registerPlugin({
      scrollTrigger: ScrollTrigger,
      xPercent: gsap.utils.checkPrefix('xPercent'),
      yPercent: gsap.utils.checkPrefix('yPercent'),
    });

    if (!mesh.current || !aboutSection) return;
    const ctx = gsap.context(() => {
      let prevPos = 0;

      // gsap.to(position, {
      //   // yPercent: 70,
      //   // z: .1,
      //   x: 40,
      //   // y: 1,
      //   repeatRefresh: true,
      //   scrollTrigger: {
      //     trigger: aboutSection,
      //     start: 'center center',
      //     end: 'bottom 140%',
      //     scrub: 3,

      //   },
      //   onUpdate: () => {
      //     // console.log('mesh', mesh.current)
      //     // mesh.current?.translateY(position.y - mesh.current?.position.y)
      //     // mesh.current?.translateZ(position.z - mesh.current?.position.z)
      //     mesh.current?.translateX(position.x - mesh.current?.position.x)
      //     // prevPos = position.z
      //     // prevPos = position.x
      //     // console.log(prevPos)
      //     console.log(mesh.current?.position)
      //     // mesh.current?.translateZ(position.z);
      //     // mesh.current?.translateY(position.x);
      //     // mesh.current!.position = new THREE.Vector3(0,0,position.z);
      //     // mesh.current?.updateMatrix();
      //   }
      // });
      // const newPosition = { x: -4.9, y: 1, z: 6 };
      gsap.to(position, {
        z: 6,
        x: -4.9,
        y: 1,
        // repeatRefresh: true,
        scrollTrigger: {
          trigger: aboutSection,
          start: 'center center',
          end: 'bottom bottom',
          scrub: 3,
          markers: true,
        },
        onUpdate: () => {
          camera.translateY(position.y - camera.position.y);
          camera.translateZ(position.z - camera.position.z);
          camera.translateX(position.x - camera.position.x);

          // mesh.current?.translateZ(position.z);
          // mesh.current?.translateY(position.x);
          // mesh.current!.position = new THREE.Vector3(0,0,position.z);
          // mesh.current?.updateMatrix();
        },
      });
      // let zoom = 1;
      // // const nzoom = { x: 1, y: 1, z: 3 };
 const prevPosition = { x: -4.9, y: 1, z: 6 };
 gsap.to(prevPosition, {
   repeatRefresh: true,
   z:15,
   x: -2.9,
  //  y: 1,
   scrollTrigger: {
     trigger: miscSection,
      start: 'bottom bottom',
      // end: 'bottom 140%',
     endTrigger: contactSection,
     scrub: 3,
     markers: true
   },
   onUpdate: () => {
      // camera.translateY(prevPosition.y - camera.position.y);
     camera.translateZ(prevPosition.z - camera.position.z);
    //  console.log(camera.prevPosition);
     //  console.log('NP', prevPosition);
     //  console.log()
     camera.translateX(prevPosition.x - camera.position.x);
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
