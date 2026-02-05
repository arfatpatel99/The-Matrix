import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import WhatYouLearn from '../components/WhatYouLearn';
import AIDropshipping from '../components/AIDropshipping';
import Course from '../components/Course';
import Community from '../components/Community';
import Auth from '../components/Auth';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <Hero />
      <About />
      <WhatYouLearn />
      <AIDropshipping />
      <Course />
      <Community />
      <Auth />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
