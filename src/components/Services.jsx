import React from 'react';
import { Layers, Shield, Wallet, Server } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Layers,
    title: 'Blockchain Integrations',
    desc: 'Bridging your app with on-chain data, events, and transactions using robust indexing and secure middleware.',
    chips: ['EVM', 'Solana', 'Subgraphs', 'Oracles'],
  },
  {
    icon: Shield,
    title: 'Smart Contracts & Audits',
    desc: 'Design, implementation, and security reviews for production-grade protocols and business logic.',
    chips: ['Solidity', 'Best Practices', 'Test Suites'],
  },
  {
    icon: Wallet,
    title: 'Wallets & Payments',
    desc: 'Smooth onboarding with multi-wallet support, fiat ramps, custody, and gas-abstracted UX.',
    chips: ['WalletConnect', 'Account Abstraction', 'On/Off-Ramps'],
  },
  {
    icon: Server,
    title: 'Infra & DevOps',
    desc: 'From scalable APIs to reliable node providers, we ship systems that stay fast under load.',
    chips: ['Observability', 'CI/CD', 'Edge Compute'],
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.08 * i, duration: 0.45 } }),
};

const Services = () => {
  return (
    <section id="services" className="relative bg-white py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_500px_at_80%_0%,rgba(56,189,248,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What we do</h2>
          <p className="mt-3 text-gray-600">End-to-end delivery for Web3 products—from discovery and design to deployment and growth.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc, chips }, i) => (
            <motion.div
              key={title}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="group relative rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition will-change-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100" style={{ background: 'conic-gradient(from 180deg at 50% 50%, rgba(147,51,234,0.08), rgba(14,165,233,0.08), rgba(16,185,129,0.08), rgba(147,51,234,0.08))' }} />
              <div className="relative">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-sky-500/20 text-fuchsia-600 ring-1 ring-inset ring-fuchsia-500/30">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {chips.map((c) => (
                    <span key={c} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 ring-1 ring-black/5">{c}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
