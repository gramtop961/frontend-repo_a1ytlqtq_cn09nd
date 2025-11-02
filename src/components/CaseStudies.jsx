import React from 'react';

const items = [
  {
    name: 'Cross-chain Treasury Automation',
    blurb: 'Automated multi-chain payouts with risk controls, approvals, and on-chain reporting.',
    tags: ['EVM', 'Gnosis Safe', 'Indexing'],
  },
  {
    name: 'NFT Ticketing at Scale',
    blurb: 'Gas-optimized minting, QR validation, and instant wallet creation for mainstream users.',
    tags: ['ERC-721A', 'AA Wallets', 'Edge'],
  },
  {
    name: 'DeFi Liquidity Routing',
    blurb: 'High-throughput order routing engine with latency-aware node selection and analytics.',
    tags: ['MEV-aware', 'Rust', 'Telemetry'],
  },
];

const CaseStudies = () => {
  return (
    <section id="work" className="relative bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Selected work</h2>
          <p className="mt-3 text-gray-600">A glimpse into the kinds of systems we design, secure, and scale.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((card) => (
            <article key={card.name} className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-gradient-to-tr from-fuchsia-500/10 to-sky-500/10 blur-2xl" />
              <h3 className="text-lg font-semibold text-gray-900">{card.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{card.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {card.tags.map((t) => (
                  <span key={t} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 ring-1 ring-black/5">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
