import React from 'react';
import { Layers, Shield, Wallet, Server } from 'lucide-react';

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

const Services = () => {
  return (
    <section id="services" className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What we do</h2>
          <p className="mt-3 text-gray-600">End-to-end delivery for Web3 products—from discovery and design to deployment and growth.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc, chips }) => (
            <div key={title} className="group relative rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-md">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
