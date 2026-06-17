import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto max-w-5xl px-6 py-20">
        <div className="flex flex-col gap-8 rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/30 backdrop-blur-lg">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 overflow-hidden rounded-2xl border border-white/10 bg-white/10">
              <Image src="/logo.png" alt="Stellance logo" width={64} height={64} />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Stellar | Soroban | Freelance pay</p>
              <h1 className="mt-2 text-5xl font-semibold tracking-tight text-white">Stellance</h1>
            </div>
          </div>

          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            A live Stellar-enabled freelance payments marketplace with on-chain escrow,
            low fees, and a developer demo for active Drips / Stellar Wave integration.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card title="Active on Drips" description="Show your project is building with Stellar relevance and real activity." />
            <Card title="Testnet Demo" description="Run the `/demo` page to create a keypair, fund via Friendbot, and send an XLM payment." />
            <Card title="Backend + Frontend" description="Full-stack example with NestJS backend and Next.js frontend in the same repo." />
            <Card title="Open to contributors" description="Use the issue templates to invite frontend and Stellar contributors." />
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/demo" className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
              View Demo Page
            </Link>
            <a href="https://github.com/alone-in/stellances" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white transition hover:border-cyan-300 hover:bg-white/10">
              View Repository
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

function Card({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/20 transition hover:border-cyan-300/30 hover:bg-slate-900/90">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
    </div>
  );
}
