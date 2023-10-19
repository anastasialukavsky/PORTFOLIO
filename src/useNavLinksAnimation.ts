
import { useEffect } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";

export function useNavLinksAnimation() {

 useEffect(() => {
   const navLinks = document.querySelectorAll('.nav-text');

   navLinks.forEach((navLink) => {
     const splitText = new SplitType(navLink as HTMLElement, { types: 'chars' });
     const chars = splitText.chars;

     const handleHover = () => {
       gsap.set(chars, {
         transformOrigin: 'center center -7px',
         backfaceVisibility: 'hidden',
       });

       gsap.to(chars, {
         rotationX: '360',
         duration: 0.7,
         stagger: 0.04,
         ease: 'slow.inOut',
       });
     };

     navLink.addEventListener('mouseenter', handleHover);

     navLink.addEventListener('mouseleave', () => {
       gsap.to(chars, {
         rotationX: '0',
         duration: 0,
         stagger: 0.04,
         ease: 'slow',
       });
     });

     return () => {
       navLink.removeEventListener('mouseenter', handleHover);
       navLink.removeEventListener('mouseleave', () => {
         gsap.to(chars, {
           rotationX: '0',
           duration: 0,
           stagger: 0.04,
           ease: 'slow',
         });
       });
     };
   });
 }, []);

}