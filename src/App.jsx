import { useLayoutEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Marquee from './sections/Marquee';
import About from './sections/About';
import Experience from './sections/Experience';
import Work from './sections/Work';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Contact from './sections/Contact';
import { animateOnScroll, gsap, playIntro, prefersReducedMotion, startSmoothScroll } from './lib/motion';

const App = () => {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined;

    const stopSmoothScroll = startSmoothScroll();
    const context = gsap.context(() => {
      playIntro(rootRef.current);
      animateOnScroll(rootRef.current);
    }, rootRef);

    return () => {
      context.revert();
      stopSmoothScroll();
    };
  }, []);

  return (
    <div ref={rootRef} className="min-h-screen bg-paper text-ink">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
