import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import CTA from './components/CTA';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Simple sticky nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-sm font-semibold tracking-tight">@nous/labs</a>
          <nav className="flex items-center gap-4 text-sm text-gray-700">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#work" className="hover:text-gray-900">Work</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-14">
        <Hero />
        <Services />
        <CaseStudies />
        <CTA />
      </main>
    </div>
  );
};

export default App;
