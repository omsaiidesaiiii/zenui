"use client";
import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight,
  Copy,
  LayoutDashboard,
  Palette,
  Pointer,
  Check,
  Layers,
  Terminal,
  Moon,
  Code
} from 'lucide-react';
import DarkVeil from './DarkVeil';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e2e1] selection:bg-[#006239] selection:text-white font-sans">
      {/* Nav Shell */}
      <nav className="fixed top-0 w-full z-50 bg-neutral-700/10 backdrop-blur-xl border-b border-emerald-500/15 shadow-2xl shadow-emerald-500/5">
        <div className="flex justify-between items-center h-16 px-6 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-black text-neutral-100 tracking-tighter">ZenUI</Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/docs" className="text-[#3ecf8e] border-b-2 border-[#3ecf8e] pb-1 tracking-tight font-bold">Docs</Link>
              <Link href="/components" className="text-neutral-400 hover:text-[#3ecf8e] transition-colors tracking-tight font-bold">Components</Link>
              <Link href="https://github.com" className="text-neutral-400 hover:text-[#3ecf8e] transition-colors tracking-tight font-bold">GitHub</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="uiverse-btn !w-[120px] !h-[35px] text-[12px]">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none mt-10" style={{ height: '800px' }}>
          <DarkVeil 
            color={[0.243, 0.812, 0.557]}
            hueShift={0}
            noiseIntensity={0}
            scanlineIntensity={0}
            speed={0.5}
            scanlineFrequency={0}
            warpAmount={0}
          />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] max-w-full h-[800px] pointer-events-none z-[1]" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(62, 207, 142, 0.1) 0%, transparent 70%)' }}></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#3d4a3d]/20 bg-[#1c1b1b] text-[#ffffff] text-xs font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#006239] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#006239]"></span>
            </span>
            New Components Added
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            Build UI faster, <br/>
            <span className="text-[#3ecf8e] italic">Scale like a pro</span>
          </h1>
          <p className="text-lg md:text-xl text-[#c8c6c5] max-w-2xl mx-auto mb-10 leading-relaxed">
            An obsidian-grade component library designed for the technical elite. Copy-paste components that feel like a high-end IDE.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="uiverse-btn !w-full sm:!w-[180px] !h-[56px] text-ls">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto bg-[#2a2a2a] text-[#e5e2e1] font-bold px-8 py-4 rounded-xl border border-[#3d4a3d]/10 hover:bg-[#3a3939] transition-all">
              View Components
            </button>
          </div>
        </div>
      </section>

      {/* CLI Section */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#0e0e0e] rounded-xl border border-[#3d4a3d]/15 p-1 shadow-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-[#3d4a3d]/10 bg-[#201f1f]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-[10px] text-[#c8c6c5] font-mono ml-4 opacity-50 uppercase tracking-widest">terminal</div>
            </div>
            <div className="p-6 font-mono text-sm sm:text-base flex justify-between items-center bg-[#0e0e0e]">
              <div className="flex gap-4">
                <span className="text-[#006239] shrink-0">$</span>
                <span className="text-[#e5e2e1]">npx zenui@latest <span className="text-[#ffb5ab]">init</span></span>
              </div>
              <button className="p-2 rounded-lg hover:bg-[#201f1f] transition-colors text-[#c8c6c5] hover:text-[#3ecf8e]">
                <Copy className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Component Showcase (Bento Grid) */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-start mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Atomic Precision</h2>
            <p className="text-[#c8c6c5] max-w-xl">Every component is machined to perfection. No bloat, just pure performance and obsidian aesthetics.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Large Card */}
            <div className="md:col-span-2 group relative bg-[#111111] border border-[#1f1f1f] rounded-xl overflow-hidden p-8 hover:border-[#249c66]/40 hover:-translate-y-1 transition-all duration-300 delay-150 shadow-2xl shadow-transparent hover:shadow-black/50">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00643c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <LayoutDashboard className="w-6 h-6 text-[#00643c] group-hover:text-[#249c66] transition-colors" />
                  <h3 className="text-xl font-bold">Interactive Shells</h3>
                </div>
                <div className="flex flex-col md:flex-row gap-6 mt-12">
                  <div className="flex-1 bg-[#1c1b1b] p-6 rounded-lg border border-[#3d4a3d]/10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-8 w-24 bg-[#201f1f] rounded animate-pulse"></div>
                      <div className="h-6 w-6 rounded-full bg-[#00643c]/20"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-2 w-full bg-[#353534] rounded"></div>
                      <div className="h-2 w-3/4 bg-[#353534] rounded"></div>
                    </div>
                  </div>
                  <div className="flex-1 space-y-4 text-white">
                    <button className="uiverse-btn !w-full !h-[48px] font-bold">Deploy Now</button>
                    <button className="w-full border border-[#3d4a3d]/20 hover:border-[#249c66] hover:text-[#249c66] py-3 rounded-lg text-sm text-[#c8c6c5] transition-all duration-300">Cancel Transaction</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Small Card */}
            <div className="group relative bg-[#111111] border border-[#1f1f1f] rounded-xl overflow-hidden p-8 hover:border-[#249c66]/40 hover:-translate-y-1 transition-all duration-300 delay-150 shadow-2xl shadow-transparent hover:shadow-black/50">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00643c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <Palette className="w-6 h-6 text-[#00643c] group-hover:text-[#249c66] transition-colors" />
                  <h3 className="text-xl font-bold">Smart Tokens</h3>
                </div>
                <p className="text-sm text-[#c8c6c5] mb-8">Dynamic surface tiers that adapt to your layout hierarchy automatically.</p>
                <div className="mt-auto grid grid-cols-2 gap-2">
                  <div className="h-12 bg-[#201f1f] rounded-md transition-colors group-hover:bg-[#252525]"></div>
                  <div className="h-12 bg-[#2a2a2a] rounded-md transition-colors group-hover:bg-[#252525]"></div>
                  <div className="h-12 bg-[#353534] rounded-md transition-colors group-hover:bg-[#252525]"></div>
                  <div className="h-12 bg-[#3a3939] rounded-md transition-colors group-hover:bg-[#252525]"></div>
                </div>
              </div>
            </div>

            {/* Micro Interactions */}
            <div className="group relative bg-[#111111] border border-[#1f1f1f] rounded-xl overflow-hidden p-8 hover:border-[#249c66]/40 hover:-translate-y-1 transition-all duration-300 delay-150 shadow-2xl shadow-transparent hover:shadow-black/50">
              <div className="flex items-center gap-3 mb-4">
                <Pointer className="w-6 h-6 text-[#00643c] group-hover:text-[#249c66] transition-colors" />
                <h3 className="text-xl font-bold">Micro-Interactions</h3>
              </div>
              <div className="flex items-center justify-center py-8">
                <div className="flex items-center gap-2 p-2 bg-[#201f1f] rounded-full border border-[#3d4a3d]/10 group-hover:border-[#249c66]/30 transition-all duration-300">
                  <div className="w-8 h-8 rounded-full bg-[#00643c] group-hover:bg-[#249c66] text-white flex items-center justify-center transition-colors">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="px-3 text-sm font-medium">Action Completed</span>
                </div>
              </div>
            </div>

            {/* Layered Navigation */}
            <div className="md:col-span-2 group relative bg-[#111111] border border-[#1f1f1f] rounded-xl overflow-hidden p-8 hover:border-[#249c66]/40 hover:-translate-y-1 transition-all duration-300 delay-150 shadow-2xl shadow-transparent hover:shadow-black/50">
              <div className="flex items-center gap-3 mb-4">
                <Layers className="w-6 h-6 text-[#00643c] group-hover:text-[#249c66] transition-colors" />
                <h3 className="text-xl font-bold">Layered Navigation</h3>
              </div>
              <div className="bg-[#0e0e0e] border border-[#3d4a3d]/10 rounded-lg p-2 mt-6">
                <div className="flex gap-4 p-4 border-b border-[#3d4a3d]/10">
                  <div className="h-3 w-12 bg-[#006239]/20 rounded"></div>
                  <div className="h-3 w-12 bg-[#353534] rounded"></div>
                  <div className="h-3 w-12 bg-[#353534] rounded"></div>
                </div>
                <div className="p-4 h-24">
                  <div className="h-full w-full border-2 border-dashed border-[#3d4a3d]/20 rounded"></div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Frameworks */}
      <section className="py-12 px-6 border-y border-[#3d4a3d]/5">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c8c6c5] mb-12 opacity-50">Optimized for your stack</p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 grayscale opacity-40 hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-3 font-bold text-2xl tracking-tighter">
              <span className="text-[#e5e2e1]">Next.js</span>
            </div>
            <div className="flex items-center gap-3 font-bold text-2xl tracking-tighter">
              <span className="text-[#61DAFB]">React</span>
            </div>
            <div className="flex items-center gap-3 font-bold text-2xl tracking-tighter">
              <span className="text-[#FFC107]">Vite</span>
            </div>
            <div className="flex items-center gap-3 font-bold text-2xl tracking-tighter">
              <span className="text-[#06B6D4]">Tailwind</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-[#0e0e0e]/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="group p-8 space-y-4 rounded-xl bg-[#131313] border border-[#3d4a3d]/5 hover:border-[#249c66]/20 transition-all duration-300 delay-150">
              <Terminal className="w-8 h-8 text-[#00643c] group-hover:scale-110 transition-transform duration-300 delay-150" />
              <h4 className="text-lg font-bold">CLI Tool</h4>
              <p className="text-sm text-[#c8c6c5] leading-relaxed">Initialize projects and add components directly from your command line in seconds.</p>
            </div>
            <div className="group p-8 space-y-4 rounded-xl bg-[#131313] border border-[#3d4a3d]/5 hover:border-[#249c66]/20 transition-all duration-300 delay-150">
              <Copy className="w-8 h-8 text-[#00643c] group-hover:scale-110 transition-transform duration-300 delay-150" />
              <h4 className="text-lg font-bold">Copy-Paste</h4>
              <p className="text-sm text-[#c8c6c5] leading-relaxed">No npm bloat. Copy the source code directly into your project and own it forever.</p>
            </div>
            <div className="group p-8 space-y-4 rounded-xl bg-[#131313] border border-[#3d4a3d]/5 hover:border-[#249c66]/20 transition-all duration-300 delay-150">
              <Moon className="w-8 h-8 text-[#00643c] group-hover:scale-110 transition-transform duration-300 delay-150" />
              <h4 className="text-lg font-bold">Dark First</h4>
              <p className="text-sm text-[#c8c6c5] leading-relaxed">Engineered for the eyes of developers. Obsidian tones are at the core of every component.</p>
            </div>
            <div className="group p-8 space-y-4 rounded-xl bg-[#131313] border border-[#3d4a3d]/5 hover:border-[#249c66]/20 transition-all duration-300 delay-150">
              <Code className="w-8 h-8 text-[#00643c] group-hover:scale-110 transition-transform duration-300 delay-150" />
              <h4 className="text-lg font-bold">Total DX</h4>
              <p className="text-sm text-[#c8c6c5] leading-relaxed">Fully typed with TypeScript and built with accessibility as a first-class citizen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#006239]/5 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Start building in seconds</h2>
          <p className="text-[#c8c6c5] mb-12 text-lg">Join 10,000+ developers building high-end interfaces with ZenUI.</p>
          <button className="uiverse-btn mx-auto !w-[220px] !h-[64px] text-lg">
            Get Started for Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-6 border-t border-emerald-500/10 bg-neutral-950">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="text-lg font-bold text-neutral-200 mb-4">ZenUI</div>
            <p className="font-sans text-sm text-neutral-500 mb-6 max-w-xs">Built for the technical elite. The UI library that doesn't hold you back.</p>
            <p className="font-sans text-xs text-neutral-600">© 2024 ZenUI. Built for the technical elite.</p>
          </div>
          <div>
            <h5 className="text-neutral-100 font-bold mb-4 text-sm">Product</h5>
            <ul className="space-y-2">
              <li><Link href="#" className="text-neutral-500 hover:text-[#3ecf8e] transition-colors text-sm">Documentation</Link></li>
              <li><Link href="#" className="text-neutral-500 hover:text-[#3ecf8e] transition-colors text-sm">Changelog</Link></li>
              <li><Link href="#" className="text-neutral-500 hover:text-[#3ecf8e] transition-colors text-sm">Components</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-neutral-100 font-bold mb-4 text-sm">Legal</h5>
            <ul className="space-y-2">
              <li><Link href="#" className="text-neutral-500 hover:text-[#3ecf8e] transition-colors text-sm">Privacy</Link></li>
              <li><Link href="#" className="text-neutral-500 hover:text-[#3ecf8e] transition-colors text-sm">Terms</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-neutral-100 font-bold mb-4 text-sm">Community</h5>
            <ul className="space-y-2">
              <li><Link href="#" className="text-neutral-500 hover:text-[#3ecf8e] transition-colors text-sm">Twitter</Link></li>
              <li><Link href="#" className="text-neutral-500 hover:text-[#3ecf8e] transition-colors text-sm">Discord</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}