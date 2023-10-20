import { gsap } from "gsap";

export function animateHamburgerToX (isMenuOpen:boolean) {
  const tl = gsap.timeline();

  if (isMenuOpen) {
    tl.to('.line1', {
      y: 0,
      rotate: 0,
      duration: 0.3,
      ease: 'back',
      width: '100%',
    }).to(
      '.line2',
      { y: 0, rotate: 0, duration: 0.3, ease: 'back', width: '100%' },
      '-=0.3'
    );
  } else {
    tl.to('.line1', {
      y: -2,
      rotate: 50,
      duration: 0.3,
      ease: 'back',
      width: '55%',
    }).to(
      '.line2',
      { y: 9, rotate: -50, duration: 0.3, ease: 'back', width: '55%' },
      '-=0.3'
    );
  }
}
