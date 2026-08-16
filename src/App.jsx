import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomScrollToTop from './components/CustomScrollToTop';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

const App = () => (
  <div className="min-h-screen overflow-hidden bg-[#080b0a] text-[#f2f5ef]">
    <div className="pointer-events-none fixed inset-0 z-0 opacity-60" aria-hidden="true">
      <div className="ambient-grid absolute inset-0" />
      <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-[#b8f24a]/8 blur-[120px]" />
      <div className="absolute -right-40 top-[44rem] h-96 w-96 rounded-full bg-emerald-400/5 blur-[140px]" />
    </div>

    <div className="relative z-10">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <CustomScrollToTop />
    </div>
  </div>
);

export default App;
