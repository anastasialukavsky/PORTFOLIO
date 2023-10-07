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
// import { AttrPlugin } from 'gsap/AttrPlugin';

gsap.registerPlugin({
  scrollTrigger: ScrollTrigger,
  xPercent: gsap.utils.checkPrefix('xPercent'),
  yPercent: gsap.utils.checkPrefix('yPercent'),
});
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

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(mesh.current?.rotation, {
        y: '+=.5',
        repeat: -1,
        ease: 'none',
        repeatRefresh: true,
      });

      // gsap.to(mesh.current?.scale, {
      //   scaleX:1,
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

  useLayoutEffect(() => {
    gsap.registerPlugin({
      scrollTrigger: ScrollTrigger,
      xPercent: gsap.utils.checkPrefix('xPercent'),
      yPercent: gsap.utils.checkPrefix('yPercent'),
    });
    if (!mesh.current || !aboutSection) return;
    const ctx = gsap.context(() => {
      // const downTl = gsap.timeline({});

      gsap.to(mesh.current, {
        yPercent: 70,
        xPercent: 390,
        scrollTrigger: {
          trigger: aboutSection,
          start: 'center center',
          end: 'bottom 140%',
          scrub: 3,
        },
      });

      // return () => downTl.kill();
    }, mesh);
    return () => {
      ctx.revert();
    };
  });

  return (
    <mesh
      ref={mesh}
      scale={2.2}
      // scale={3.5}
      position={[0, 0, 0]}
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
