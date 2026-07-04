import { useEffect } from 'react';
import Lenis from 'lenis';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import About from './components/About';
import MonthlyReport from './components/MonthlyReport';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import TarotBackground from './components/TarotBackground';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-ivory text-dark font-body selection:bg-primary/20 selection:text-primary relative overflow-hidden">
      <TarotBackground />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <MonthlyReport />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
