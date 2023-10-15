import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import html from '../public/icons/html-1.svg';
import axios from '../public/icons/axios.svg';
import blendr from '../public/icons/blender-1.svg';
import css from '../public/icons/css-3.svg';
import docker from '../public/icons/docker.svg';
import electron from '../public/icons/electron-1.svg';
import figma from '../public/icons/figma-5.svg';
import git from '../public/icons/git-icon.svg';
import gsapIcon from '../public/icons/gsap.svg';
import javascript from '../public/icons/javascript-1.svg';
import mongodb from '../public/icons/mongodb.svg';
import nginx from '../public/icons/nginx.svg';
import nodejs from '../public/icons/nodejs-1.svg';
import postreSQL from '../public/icons/postgresql.svg';
import prisma from '../public/icons/prisma-3.svg';
import reactIcon from '../public/icons/react-2.svg';
import reactNative from '../public/icons/react-native-1.svg';
import redux from '../public/icons/redux.svg';
import sequelize from '../public/icons/sequelize.svg';
import stripe from '../public/icons/stripe-3.svg';
import tailwind from '../public/icons/tailwind-css-2.svg';
import threejs from '../public/icons/threejs-1.svg';
import typescript from '../public/icons/ts-logo-512.svg';
import vite from '../public/icons/vitejs.svg';
import zod from '../public/icons/zod.svg';
import postman from '../public/icons/postman.svg';
import mongoose from '../public/icons/mongoose.svg';
import express from '../public/icons/express-logo.svg';
import rht from '../public/icons/rht.svg';
import lenis from '../public/icons/lenis.svg';
import fusejs from '../public/icons/fuse.svg';
import framer from '../public/icons/framer-motion.svg';
import passportjs from '../public/icons/passport.svg';
import jwt from '../public/icons/jwt-3.svg';
import peerjs from '../public/icons/peerjs.svg';
import tweetnacl from '../public/icons/tweet.svg';
import reactFiber from '../public/icons/fiber.svg';
import socketio from '../public/icons/socket-io.svg';
import yelpFusionAPI from '../public/icons/yelp-1.svg';
import googleMapsAPI from '../public/icons/google-maps.svg';

const logos = {
  NodeJS: nodejs,
  HTML: html,
  Axios: axios,
  Blender: blendr,
  CSS: css,
  Docker: docker,
  Electron: electron,
  Figma: figma,
  Git: git,
  GSAP: gsapIcon,
  JavaScript: javascript,
  MongoDB: mongodb,
  Nginx: nginx,
  PostgreSQL: postreSQL,
  Prisma: prisma,
  React: reactIcon,
  ReactNative: reactNative,
  Redux: redux,
  Sequelize: sequelize,
  Stripe: stripe,
  TailwindCSS: tailwind,
  ThreeJS: threejs,
  TypeScript: typescript,
  Vite: vite,
  Zod: zod,
  Postman: postman,
  Mongoose: mongoose,
  ExpressJS: express,
  ReactHotToast: rht,
  Lenis: lenis,
  FuseJS: fusejs,
  FramerMotion: framer,
  PassportJS: passportjs,
  JWT: jwt,
  TweetNaCl: tweetnacl,
  PeerJS: peerjs,
  ReactFiber: reactFiber,
  SocketIO: socketio,
  Blendr: blendr,
  YelpFusionAPI: yelpFusionAPI,
  GoogleMapsAPI: googleMapsAPI,
};

export type Logo = keyof typeof logos;
export type ProjectStackProps = {
  frontEnd: Logo[];
  backEnd: Logo[];
  projectDescHeight: number;
  isFullDescription: boolean;
  shortDescriptionHeight: number;
  fullDescriptionHeight: number;
};

export default function ProjectStack({
  frontEnd,
  backEnd,
  projectDescHeight,
  isFullDescription,
  fullDescriptionHeight,
  shortDescriptionHeight,
}: ProjectStackProps) {
  const stackRef = useRef<HTMLDivElement>(null);

  const [subtractedHeight, setSubtractedHeight] = useState<number | 0>(0);

  // useEffect(() => {
  //   const currentStackHeight = stackRef.current?.getBoundingClientRect().height;

  //   if (currentStackHeight && projectDescHeight > 0) {
  //     const heightDifference = currentStackHeight - projectDescHeight;
  //     setSubtractedHeight(heightDifference);
  //   }
  // }, [projectDescHeight]);

  //  console.log('subtr', subtractedHeight)

  //   console.log('subtrH', subtractedHeight);
  const currentHeight = stackRef.current?.getBoundingClientRect().height || 0;
  // console.log({ projectDescHeight });
  useEffect(() => {
    if (stackRef.current && projectDescHeight > 0) {
      setSubtractedHeight(currentHeight - projectDescHeight);
    }
  }, [projectDescHeight]);

  const stackContent = document
    .querySelector('.stack-content')


  const stackContentHeight = document
    .querySelector('.stack-content')?.getBoundingClientRect().height;

  // console.log(stackContent?.getBoundingClientRect().height)
  // console.log(stackContentHeight)

  // useEffect(() => {
  //   // console.log(stackContentHeight);
  // }, [stackContentHeight]);


  console.log(shortDescriptionHeight)
  console.log(fullDescriptionHeight)
  useLayoutEffect(() => {
    if (!currentHeight) return;

    const revertAnimation = () => {
      gsap.from(stackRef.current, {
        height: currentHeight - projectDescHeight,
        ease: 'none',
        duration: 0.2,
      });
    };

    if (projectDescHeight && projectDescHeight > 0) {
      const tl = gsap.timeline({});

      const ctx = gsap.context(() => {
        gsap.to(stackRef.current, {
          height: currentHeight - projectDescHeight,
          ease: 'none',
          duration: 0.2,
        });

        // tl.to(stackContent, {
        //   height:
        // })
        // if(isFullDescription) {
        //   gsap.to(stackContent, {
        //     height: fullDescriptionHeight,
        //     ease:'none',
        //     duration: .2
        //   });
        // }
      });
      return () => {
        ctx.revert();
      };
    } else {
      revertAnimation();
    }
  }, [projectDescHeight]);

  const renderLogos = (logosArray: Logo[]) => {
    return logosArray.map((item) => {
      const logoIcon = logos[item];
      if (logoIcon) {
        return (
          <li
            key={item}
            className='place-self-center flex flex-col justify-between  gap-2  w-full items-center h-full'
          >
            <img
              src={logoIcon}
              alt=''
              className='h-6 w-6 lg:h-8 lg:w-8 xl:h-10 xl:w-11 2xl:w-16 short:w-10 short:h-8 xshort:h-4 xshort:w-8 portrait:w-16 portrait:h-8'
            />
            <p className='text-center  text-[.5rem] lg:text-[.7rem] xl:text-[.8rem] 5xl:text-[.9rem] 6xl:text-[1rem] portrait:text-[.9rem]'>
              {item}
            </p>
          </li>
        );
      }
      return null;
    });
  };

  return (
    <article
      ref={stackRef}
      className=' border border-[#121212] h-full w-full 6xl:mb-36 portrait:h-fit'
    >
      <section className='h-full w-full p-2 lg:p-2 xl:p-5 overflow-hidden xshort:p-1'>
        <h2 className='text-center pb-3 2xl:pb-5 text-[.7rem] font-bold lg:text-[.8rem] xl:text-[1rem] 4xl:text-[1.1rem] 5xl:text-[1.2rem] portrait:text-[1.1rem] portrait:pt-4 portrait:pb-6'>
          //front-end
        </h2>
        <ul className='grid grid-cols-6 lg:grid-cols-5 3xl:grid-cols-6 gap-2 xl:gap-4 2xl:gap-6 w-full h-fit short:gap-2 short:grid-cols-6 xshort:gap-2 portrait:grid-cols-3 portrait:gap-5'>
          {renderLogos(frontEnd)}
        </ul>

        <h2 className='text-center pt-5 xl:pt-9 text-[.7rem] pb-2  2xl:pb-5 font-bold lg:text-[.8rem] xl:text-[1rem] 4xl:text-[1.1rem] 5xl:text-[1.2rem] short:pt-4 portrait:text-[1.1rem] portrait:pt-10 portrait:pb-5'>
          //back-end
        </h2>
        <ul className='grid grid-cols-6  lg:grid-cols-5 3xl:grid-cols-6 gap-2 xl:gap-4 2xl:gap-6 w-full h-fit xl:pb-2 2xl:pb-0 short:gap-2 short:grid-cols-6 xshort:gap-2 portrait:grid-cols-3 portrait:gap-5'>
          {renderLogos(backEnd)}
        </ul>
      </section>
    </article>
  );
}
