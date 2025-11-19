import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PuzzleSection } from './components/PuzzleSection';
import { Membership } from './components/Membership';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <PuzzleSection />
        <Testimonials />
        <Membership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
