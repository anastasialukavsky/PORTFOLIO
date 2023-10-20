
import me from '../public/bg/me-q30.webp';


export default function AboutSection() {
  return (
    <section
      id='about'
      className='about z-[150] flex font-mono  w-[100vw] relative bg-[#353b3c] landscape:xshort:w-[100svw] landscape:xshort:h-[100svh]'
    >
      <div className='about-section h-[115vh] w-full bg-[#353b3c] flex relative top-0 justify-center items-center flex-col'>
        <div className=' md:flex gap-[5%] short:gap-0 3xl:gap-[1%] w-[80%]  3xl:w-[70%] 5xl:w-[60%] landscape:xshort:w-[60%] 6xl:w-[50%] max-h-[70vh] self-center items-center mx-auto portrait:flex-col '>
          <div className='basis-1/2 '>
            <div className=' pic-wrapper h-fit max-w-fit flex z-0 bg-[#383838]'>
              <img
                src={me}
                alt='photo of the creator :)'
                className='pic aspect-auto  bg-contain portrait:h-full portrait:w-fit portrait:-right-3 z-50 h-[70vh] w-fit relative -right-4 -top-4'
              />
            </div>
          </div>

          <p className='bio-text font-mono text-[#121212] w-fit lowercase short:mr-20 xshort:mr-10  4xl:mr-10 md:text-[1.5vw] 2xl:text-[1.2rem] leading-tight text-[.9rem] pt-5 portrait:ml-2 landscape:xshort:text-[.7rem] landscape:short:text-[.9rem] basis-1/2'>
            I am a fullstack web developer based in Brooklyn, NY, with a keen
            eye for detail and a drive for creating exceptional digital
            experiences. My journey in web development has been an exciting
            exploration, where each stage of the development process, from
            system design to user interface design, has become a source of joy
            and fulfillment.
          </p>
        </div>
        <div className='firstname-lastname md:flex w-full flex-col hidden uppercase text-[#121212]  relative self-start  font-mono  text-[.8rem] xl:text-[.9rem] 4xl:text-[1rem] 5xl:text-[1.1rem] mt-2 left-[10%] 3xl:left-[15%] 5xl:left-[20%] 6xl:left-[25%]'>
          <p className='about'>anastasia</p>
          <p>//lukavsky</p>
        </div>
      </div>
    </section>
  );
}
