import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import WhatYouLearn from '../components/WhatYouLearn';
import Course from '../components/Course';
import TradingRoom from '../components/TradingRoom';
import Auth from '../components/Auth';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <Hero />
      <About />
      <WhatYouLearn />
      <Course />
      <TradingRoom />
      <Auth />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
