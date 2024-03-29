import React from 'react';
import linkedin from '/icons/linkedin.svg';
import github from '/icons/github.svg';
import gmail from '/icons/gmail.svg';

export default function ContactSection() {



  //**   click handler for default email app */
  const handleEmailClick = () => {
    window.location.href = 'mailto:lukavskyanastasia@gmail.com';
  };

  return (
    <section
      id='contact'
      className="contact-section  font-mono portrait:w-[100svw] w-[100svw] h-[100vh] relative portrait:h-[100vh]  bg-[url('/bg/contact_noise.svg')]"
    >
      <div className='h-screen w-screen  relative '>
        <div className='flex  justify-between  portrait:bg-none bg-cover h-[100svh] portrait:mx-5   mx-36 items-center '>
          <div className=' h-screen w-full landscape:basis-1/2  relative z-[120] gap-9 text-white mix-blend-difference flex flex-col items-center justify-center overflow-x-hidden landscape:translate-x-[25%]'>
            <p className='md:text-[1.5vw] text-[5vw] 3xl:text-[1vw] whitespace-nowrap portrait:md:text-[1.7rem]'>
              let's connect
            </p>
            <a
              id='linkedIn-link'
              role='link'
              accessKey='l'
              aria-label='LinkedIn'
              href='https://www.linkedin.com/in/anastasialukavsky/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:scale-125 ease-out duration-300 transition-all transform hover:rotate-12'
            >
              <img
                src={linkedin}
                alt=''
                className=' landscape:md:w-[4vw] landscape:5xl:w-[3vw] w-[10vw]'
              />
            </a>
            <a
              id='github-link'
              role='link'
              accessKey='h'
              aria-label='GitHub'
              href='https://github.com/anastasialukavsky'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:scale-125 ease-out duration-300 transition-all transform hover:-rotate-12'
            >
              <img
                src={github}
                alt=''
                className='landscape:md:w-[4vw] landscape:5xl:w-[3vw] w-[11vw]'
              />
            </a>
            <img
              id='gmail-link'
              role='link'
              accessKey='g'
              aria-label='Gmail'
              src={gmail}
              alt=''
              className=' landscape:md:w-[4vw] landscape:5xl:w-[3vw] w-[10vw] hover:scale-125 ease-out duration-300 transition-all transform hover:rotate-12'
              onClick={handleEmailClick}
            />
          </div>
          <div className='landscape:h-screen object-cover portrait:h-0 landscape:basis-1/2 '></div>
        </div>
      </div>
    </section>
  );
}
