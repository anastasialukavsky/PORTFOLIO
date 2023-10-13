import React, {useRef, useEffect, useState, useLayoutEffect} from 'react';
import {gsap} from 'gsap'
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

type Logo = keyof typeof logos;
export type ProjectStackProps = {
  frontEnd: Logo[];
  backEnd: Logo[];
  projectDescHeight: number;
  isFullDescription: boolean
};

export default function ProjectStack({
  frontEnd,
  backEnd,
  projectDescHeight,
  isFullDescription,
}: ProjectStackProps) {
  const stackRef = useRef<HTMLDivElement>(null);

  const [subtractedHeight, setSubtractedHeight] = useState<number | null>(null);

  useEffect(() => {
    const currentStackHeight = stackRef.current?.getBoundingClientRect().height;

    if (currentStackHeight && projectDescHeight > 0) {
      const heightDifference = currentStackHeight - projectDescHeight;
      setSubtractedHeight(heightDifference);
    }
  }, [projectDescHeight]);

  //  console.log('subtr', subtractedHeight)

  //   console.log('subtrH', subtractedHeight);

  useLayoutEffect(() => {
    // const ctx = gsap.context(() => {
    //   if (isFullDescription) gsap.from(stackRef.current, {});
    // });

    // return () => {
    //   ctx.revert();
    // };

    console.log(isFullDescription)
  }, [isFullDescription]);
  const renderLogos = (logosArray: Logo[]) => {
    return logosArray.map((item) => {
      const logoIcon = logos[item];
      if (logoIcon) {
        return (
          <li
            key={item}
            className='place-self-center flex flex-col justify-between  gap-2  w-fit items-center h-full'
          >
            <img src={logoIcon} alt={item} className='h-5 ' />
            <p className='text-center  text-[.5rem]'>{item}</p>
          </li>
        );
      }
      return null;
    });
  };
  return (
    <article ref={stackRef}>
      <p className='text-center pt-5 text-[.8rem] lg:text-[1rem] 2xl:text-[1.3rem] h-fit'>
        STACK
      </p>
      <section className='h-fit w-full border border-[#121212] p-2 lg:p-7 '>
        <h2 className='text-center pb-3 text-[.6rem] font-black'>
          //front-end
        </h2>
        <ul className='grid grid-cols-6 gap-2  w-full'>
          {renderLogos(frontEnd)}
        </ul>

        <h2 className='text-center pt-3 text-[.6rem] pb-2 font-black'>
          //back-end
        </h2>
        <ul className='grid grid-cols-5 gap-2  w-full'>
          {renderLogos(backEnd)}
        </ul>
      </section>
    </article>
  );
}
