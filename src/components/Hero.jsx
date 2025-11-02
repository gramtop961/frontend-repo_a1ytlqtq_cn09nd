import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-white">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlays for readability (won't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-1 text-xs font-medium text-gray-700 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          Web3 Integrations • Fintech • Modern Software
        </span>
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          @nous/labs
          <span className="block bg-gradient-to-r from-fuchsia-600 via-sky-600 to-emerald-600 bg-clip-text text-transparent">
            Blockchain Integrations & Software Development
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-base text-gray-700 sm:text-lg">
          We design and ship production-grade Web3 experiences: secure smart contracts, seamless wallet flows, and high‑throughput infrastructure—crafted for scale.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#services"
            className="group inline-flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Explore Services
            <svg className="h-4 w-4 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-white/80 px-5 py-3 text-sm font-medium text-gray-900 ring-1 ring-black/10 backdrop-blur transition hover:bg-white"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
