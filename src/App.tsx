import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import WhyUs from './sections/WhyUs';
import EmergencyHighlight from './sections/EmergencyHighlight';
import Coverage from './sections/Coverage';
import HowItWorks from './sections/HowItWorks';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';
import StickyEmergencyBar from './components/StickyEmergencyBar';
import FloatingWhatsApp from './components/FloatingWhatsApp';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Refresh ScrollTrigger after all content loads
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-obsidian)' }}>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <WhyUs />
        <EmergencyHighlight />
        <Coverage />
        <HowItWorks />
        <Testimonials />
        <FAQ />
      </main>

      <Footer />

      {/* Floating conversion elements */}
      <StickyEmergencyBar />
      <FloatingWhatsApp />

      {/* Bottom padding for sticky bar */}
      <div className="h-20" />
    </div>
  );
}

export default App;
