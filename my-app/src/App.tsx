import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { initAnimations } from './utils/animations';

function App() {
  useEffect(() => {
    // Initialize animations after component mounts
    initAnimations();
    
    // Update page title
    document.title = "Salem Zenati | Web Developer for Businesses";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;