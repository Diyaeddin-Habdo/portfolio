import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ScrollToTop from 'react-scroll-to-top';
import CustomScrollToTop from './components/customScrollToTop';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />

      <CustomScrollToTop />

      {/* <ScrollToTop
        top={400} color="#3b82f6"
      /> */}
    </div>
  );
}

export default App;