import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const NAV_OFFSET = -72;
const EASE = 'power3.out';

let lenis = null;

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const startSmoothScroll = () => {
  if (prefersReducedMotion()) return () => {};

  lenis = new Lenis({ duration: 1.15, easing: (t) => 1 - Math.pow(1 - t, 4) });
  lenis.on('scroll', ScrollTrigger.update);

  const tick = (time) => lenis.raf(time * 1000);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);

  return () => {
    gsap.ticker.remove(tick);
    lenis.destroy();
    lenis = null;
  };
};

export const scrollToTarget = (target) => {
  if (lenis) {
    lenis.scrollTo(target, { offset: target === 0 ? 0 : NAV_OFFSET });
    return;
  }

  if (target === 0) {
    window.scrollTo({ top: 0 });
    return;
  }

  document.querySelector(target)?.scrollIntoView();
};

export const playIntro = (root) => {
  const timeline = gsap.timeline({ defaults: { ease: 'power4.out' } });

  timeline
    .from(root.querySelectorAll('[data-hero-line]'), { yPercent: 110, duration: 1.3, stagger: 0.12 })
    .from(root.querySelectorAll('[data-hero-fade]'), { y: 16, opacity: 0, duration: 0.9, stagger: 0.08 }, '-=0.9');

  return timeline;
};

export const animateOnScroll = (root) => {
  root.querySelectorAll('[data-reveal]').forEach((element) => {
    gsap.from(element, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: EASE,
      scrollTrigger: { trigger: element, start: 'top 88%', once: true },
    });
  });

  root.querySelectorAll('[data-rule]').forEach((element) => {
    gsap.from(element, {
      scaleX: 0,
      transformOrigin: 'left center',
      duration: 1.2,
      ease: 'power2.inOut',
      scrollTrigger: { trigger: element, start: 'top 92%', once: true },
    });
  });

  root.querySelectorAll('[data-words]').forEach((element) => {
    gsap.fromTo(
      element.querySelectorAll('[data-word]'),
      { opacity: 0.14 },
      {
        opacity: 1,
        stagger: 0.05,
        ease: 'none',
        scrollTrigger: { trigger: element, start: 'top 80%', end: 'bottom 55%', scrub: true },
      },
    );
  });

  root.querySelectorAll('[data-count]').forEach((element) => {
    const counter = { value: 0 };
    const target = Number(element.dataset.count);
    element.textContent = '0';

    gsap.to(counter, {
      value: target,
      duration: 1.6,
      ease: 'power2.out',
      scrollTrigger: { trigger: element, start: 'top 90%', once: true },
      onUpdate: () => {
        element.textContent = Math.round(counter.value);
      },
    });
  });
};

export { gsap, ScrollTrigger };
