import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import CTA from './components/CTA';

const App = () => {
  const handleNav = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Elevated sticky nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/70 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" onClick={(e) => handleNav(e, 'home')} className="text-sm font-semibold tracking-tight">@nous/labs</a>
          <nav className="flex items-center gap-6 text-sm text-gray-700">
            <a href="#services" onClick={(e) => handleNav(e, 'services')} className="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-fuchsia-500 after:to-sky-500 after:transition-all hover:after:w-full">Services</a>
            <a href="#work" onClick={(e) => handleNav(e, 'work')} className="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-sky-500 after:to-emerald-500 after:transition-all hover:after:w-full">Work</a>
            <a href="#contact" onClick={(e) => handleNav(e, 'contact')} className="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-emerald-500 after:to-fuchsia-500 after:transition-all hover:after:w-full">Contact</a>
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
