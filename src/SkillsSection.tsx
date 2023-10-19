import github from '../public/icons/github.svg';
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
import tailwind from '../public/icons/tailwind-css-2.svg';
import threejs from '../public/icons/threejs-1.svg';
import typescript from '../public/icons/ts-logo-512.svg';
import vite from '../public/icons/vitejs.svg';
import zod from '../public/icons/zod.svg';
import postman from '../public/icons/postman.svg';
import mongoose from '../public/icons/mongoose.svg';
import express from '../public/icons/express-logo.svg';



export default function SkillsSection() {
  return (
    <section
      id='skills'
      className="skills-section font-mono  md:text-[1vw]  flex w-[100svw]   bg-[url('/bg/skills_noise.svg')]"
    >
      <div className='front-end-section  md:text-[1.3vw] 4xl:text-[1rem]   flex w-[100vw]'>
        <div className='flex flex-col min-w-[50vw] portrait:basis-0 landscape:basis-1/2 pt-20 lg:pt-96  ml-[37px] portrait:w-[90vw]'>
          <div className='frontend-div   min-h-[80dvh] w-fit   md:w-full md:basis-1/2  portrait:w-[91vw] md:pb-20'>
            <div className='flex flex-col  p-10 lg:p-20  portrait:w-full  justify-center 5xl:items-center gap-2 xl:gap-10'>
              <p className=' self-center portrait:pb-14 pb-5 text-[.9rem] 4xl:text-[1rem] 5xl:text-[1.1rem]'>
                //front-end development
              </p>
              <ul className=' grid grid-cols-3 gap-10 4xl:gap-10 5xl:gap-14  '>
                <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:-rotate-12 '>
                  <img src={html} alt='HTML' className='w-12 5xl:w-16 ' />
                </li>
                <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:rotate-12'>
                  <img
                    src={javascript}
                    alt='JavaScript'
                    className='w-12 5xl:w-16'
                  />
                </li>
                <li className='place-self-center'>
                  <img
                    src={css}
                    alt='CSS'
                    className='w-12 5xl:w-16 hover:scale-125 ease-out duration-300 transition-all transform hover:-rotate-12'
                  />
                </li>
                <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:rotate-12'>
                  <img
                    src={typescript}
                    alt='TypeScript'
                    className='w-12 5xl:w-16'
                  />
                </li>
                <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:-rotate-12'>
                  <img
                    src={reactIcon}
                    alt='React'
                    className='w-12 5xl:w-16 hover:scale-125 ease-out duration-300 transition-all transform hover:-rotate-12'
                  />
                </li>
                <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:-rotate-12'>
                  <img src={redux} alt='Redux' className='w-12 5xl:w-16' />
                </li>
                <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:rotate-12'>
                  <img
                    src={tailwind}
                    alt='Tailwind CSS'
                    className='w-12 5xl:w-16'
                  />
                </li>
                <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:-rotate-12'>
                  <img src={gsapIcon} alt='GSAP' className='w-12 5xl:w-16' />
                </li>
                <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:rotate-12'>
                  <img src={vite} alt='Vite' className='w-12 5xl:w-16' />
                </li>
                <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:-rotate-12'>
                  <img
                    src={reactNative}
                    alt='React Native'
                    className='w-16 5xl:w-24'
                  />
                </li>
                <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:-rotate-12'>
                  <img src={threejs} alt='Three.js' className='w-12 5xl:w-16' />
                </li>
                <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:rotate-12'>
                  <img
                    src={electron}
                    alt='Electron'
                    className='w-12 5xl:w-16'
                  />
                </li>
              </ul>
            </div>
          </div>

          <div className='backend-div  border-t  min-h-[80dvh] w-fit md:w-full md:basis-1/2 portrait:w-[91svw] pt-36'>
            <div className=' ft-section flex flex-col  p-10 lg:p-20 portrait:w-fit justify-center 5xl:items-center gap-2 xl:gap-10'>
              <p className=' self-center portrait:pb-14 pb-5 text-[.9rem] 4xl:text-[1rem] 5xl:text-[1.1rem]'>
                //back-end development
              </p>
              <ul className=' grid grid-cols-3 gap-10 4xl:gap-10 5xl:gap-14'>
                <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:-rotate-12 '>
                  <img
                    src={nodejs}
                    alt='NodeJS'
                    className='w-16 5xl:w-24 mix-blend-difference'
                  />
                </li>
                <li className='place-self-center  hover:scale-125 ease-out duration-300 transition-all transform hover:rotate-12'>
                  <img
                    src={express}
                    alt='ExpressJS'
                    className='w-12 5xl:w-20 '
                  />
                </li>
                <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:-rotate-12'>
                  <img src={axios} alt='Axios' className='w-20 5xl:w-24 ' />
                </li>
                <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:rotate-12'>
                  <img
                    src={postreSQL}
                    alt='PostgreSQL'
                    className='w-14 5xl:w-16 '
                  />
                </li>
                <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:-rotate-12'>
                  <img
                    src={sequelize}
                    alt='Sequelize'
                    className='w-14 5xl:w-16'
                  />
                </li>
                <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:rotate-12'>
                  <img
                    src={prisma}
                    alt='Prisma'
                    className='w-14 5xl:w-16 mix-blend-difference'
                  />
                </li>
                <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:-rotate-12'>
                  <img src={mongodb} alt='MongoDB' className='w-14 5xl:w-24 ' />
                </li>
                <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:rotate-12'>
                  <img
                    src={mongoose}
                    alt='Mongoose'
                    className='w-20 5xl:w-28 '
                  />
                </li>
                <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:-rotate-12'>
                  <img src={zod} alt='Mongoose' className='w-20 5xl:w-20 ' />
                </li>
              </ul>
            </div>
          </div>
          <div className='devops-and-deployment-div    min-h-[80dvh]  landscape:w-full md:basis-1/2  border-t portrait:w-[91svw] pt-36'>
            <div className='ft-section flex flex-col  p-10 lg:p-20  portrait:w-full  justify-center 5xl:items-center gap-2 xl:gap-10'>
              <p className='self-center portrait:pb-14 pb-5 text-[.9rem] 4xl:text-[1rem] 5xl:text-[1.1rem]'>
                //devops and deployment
              </p>
              <ul className=' grid grid-cols-3 gap-10 4xl:gap-10 5xl:gap-14 '>
                <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:rotate-12'>
                  <img src={git} alt='Git' className='w-14 5xl:w-20 ' />
                </li>
                <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:-rotate-12'>
                  <img src={github} alt='GutHub' className='w-14 5xl:w-20 ' />
                </li>
                <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:rotate-12'>
                  <img src={nginx} alt='Nginx' className='w-14 5xl:w-20 ' />
                </li>
                <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:-rotate-12'>
                  <img src={docker} alt='Docker' className='w-14 5xl:w-20' />
                </li>
                <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:rotate-12'>
                  <img src={postman} alt='Postman' className='w-14 5xl:w-20 ' />
                </li>
              </ul>
            </div>
          </div>
          <div className='misc-div left-div    min-h-[80dvh] landscape:w-full md:basis-1/2  border-t portrait:w-[91svw] pt-36'>
            <div className='ft-section flex flex-col p-10  lg:p-20  portrait:w-full  justify-center 5xl:items-center gap-2 xl:gap-10'>
              <p className='self-center portrait:pb-14 pb-5 text-[.9rem] 4xl:text-[1rem] 5xl:text-[1.1rem]'>
                //misc
              </p>
              <ul className='grid grid-cols-3 gap-10 4xl:gap-10 5xl:gap-14   '>
                <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:-rotate-12'>
                  <img src={blendr} alt='Blendr' className='w-14 5xl:w-20 ' />
                </li>
                <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:rotate-12'>
                  <img src={figma} alt='Figma' className='w-14 5xl:w-20 ' />
                </li>
                <li className='place-self-center hover:scale-125 ease-out duration-300 transition-all transform hover:-rotate-12'>
                  <img
                    src={davinciResolve}
                    alt='Davinci Resolve'
                    className='w-14 5xl:w-20 '
                  />
                </li>
                <li className='place-self-center col-span-full hover:scale-125 ease-out duration-300 transition-all transform hover:rotate-12'>
                  <img
                    src={adobePhotoshop}
                    alt='Adobe Photoshop'
                    className='w-12 5xl:w-20 '
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/**blob placement section */}
        <div className=" skills-section right-div  border-l   landscape:basis-1/2 hidden     h-screen   landscape:flex landscape:min-w-[50vw]  items-center  bg-[url('/bg/skills_noise.svg')]"></div>
      </div>
    </section>
  );
}
