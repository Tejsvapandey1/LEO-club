import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import BoardSection from './components/BoardSection';
import EventsSection from './components/EventsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "LEO Club VIT | Leadership Through Service";
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <AboutSection />
      <BoardSection />
      <EventsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;