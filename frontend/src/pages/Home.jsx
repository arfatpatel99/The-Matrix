import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WhatYouLearn from '../components/WhatYouLearn';
import AIDropshipping from '../components/AIDropshipping';
import Course from '../components/Course';
import Payment from '../components/Payment';
import Community from '../components/Community';
import Auth from '../components/Auth';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <Header />
      <Hero />
      <About />
      <WhatYouLearn />
      <AIDropshipping />
      <Course />
      <Payment />
      <Community />
      <Auth />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
