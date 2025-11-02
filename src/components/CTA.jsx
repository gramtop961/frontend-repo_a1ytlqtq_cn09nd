import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-gray-900 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(168,85,247,0.25),transparent)]" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Build the future with @nous/labs
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mx-auto mt-3 max-w-2xl text-gray-300"
        >
          Whether you need an end-to-end product team or a focused integration, we deliver fast without compromising security.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="mailto:hello@nouslabs.xyz?subject=Project%20Inquiry%20—%20@nous/labs"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-gray-900 transition hover:-translate-y-0.5 hover:bg-gray-100"
          >
            Email us
          </a>
          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-lg bg-gray-800 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-gray-700"
          >
            Back to top
          </a>
        </motion.div>
        <p className="mt-8 text-xs text-gray-400">© {new Date().getFullYear()} @nous/labs. All rights reserved.</p>
      </div>
    </section>
  );
};

export default CTA;
