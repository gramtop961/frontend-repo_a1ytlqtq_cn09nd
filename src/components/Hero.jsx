import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-white">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Readability overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          Web3 Integrations • Fintech • Modern Software
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mx-auto max-w-5xl text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
        >
          @nous/labs
          <span className="relative block">
            <span className="bg-gradient-to-r from-fuchsia-600 via-sky-600 to-emerald-600 bg-clip-text text-transparent">
              Blockchain Integrations & Software Development
            </span>
            <span className="pointer-events-none absolute inset-x-10 -bottom-1 h-px bg-gradient-to-r from-fuchsia-500/40 via-sky-500/40 to-emerald-500/40" />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-2xl text-base text-gray-700 sm:text-lg"
        >
          We design and ship production-grade Web3 experiences: secure smart contracts, seamless wallet flows, and high‑throughput infrastructure—crafted for scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={() => scrollToId('services')}
            className="group inline-flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-gray-800 active:translate-y-0"
          >
            Explore Services
            <svg className="h-4 w-4 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
          <button
            onClick={() => scrollToId('contact')}
            className="inline-flex items-center gap-2 rounded-lg bg-white/85 px-5 py-3 text-sm font-medium text-gray-900 ring-1 ring-black/10 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white active:translate-y-0"
          >
            Get in touch
          </button>
        </motion.div>

        {/* Floating accent badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="pointer-events-none mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {['Security-first', 'Protocol‑grade', 'DX obsessed'].map((b) => (
            <span key={b} className="rounded-full bg-white/70 px-3 py-1 text-xs text-gray-700 ring-1 ring-black/10 backdrop-blur">
              {b}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
