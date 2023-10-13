import React from 'react'
import linkedin from '../public/icons/linkedin.svg';
import github from '../public/icons/github.svg';
import gmail from '../public/icons/gmail.svg';
import html from '../public/icons/html-1.svg';
import adobePhotoshop from '../public/icons/adobe-photoshop.svg';
import axios from '../public/icons/axios-1.svg';
import blendr from '../public/icons/blender-1.svg';
import css from '../public/icons/css-3.svg';
import davinciResolve from '../public/icons/davinci-resolve-12.svg';
import docker from '../public/icons/docker.svg';
import electron from '../public/icons/electron-1.svg';
import figma from '../public/icons/figma-5.svg';
import git from '../public/icons/git-icon.svg';
import gsapIcon from '../public/icons/gsap.svg';
import javascript from '../public/icons/javascript-1.svg';
import mongodb from '../public/icons/mongodb.svg';
import nginx from '../public/icons/nginx-1.svg';
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
 'React Hot Toast': rht,
 Lenis: lenis,
 FuseJS: fusejs,
 'Framer Motion': framer,
 PassportJS: passportjs,

};

type Logo = keyof typeof logos;
export type ProjectStackProps =  {
  frontEnd: Logo[]
  backEnd: Logo[]
}


export default function ProjectStack({frontEnd, backEnd}: ProjectStackProps) {
  console.log(frontEnd)

    const renderLogos = (logosArray: Logo[]) => {
      return logosArray.map((item) => {
        const logoIcon = logos[item];
        if (logoIcon) {
          return (
            <li key={item} className='place-self-center flex flex-col justify-between  gap-2  w-fit items-center h-full'>
              <img src={logoIcon} alt={item} className='w-7 5xl:w-16' />
              <p className='text-center whitespace-nowrap text-[.5rem]'>{item}</p>
            </li>
          );
        }
        return null;
      });
    };
  return (
    <section className='h-fit w-full  lg:p-7 '>
      <h2 className='text-center'>//front-end</h2>
      <ul className='grid grid-cols-5 gap-2 4xl:gap-10 5xl:gap-24 w-full'>
        {renderLogos(frontEnd)}
      </ul>


      <h2 className='text-center pt-3'>//back-end</h2>
      <ul className='grid grid-cols-5 gap-2 4xl:gap-10 5xl:gap-24 w-full'>
        {renderLogos(backEnd)}
      </ul>
    </section>
  );
}
