"use client";
import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight,
  Copy,
  Terminal,
  Moon,
  Code
} from 'lucide-react';
import { motion } from 'framer-motion';
import DarkVeil from './DarkVeil';

export default function LandingPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#0a0a0a] text-[#e5e2e1] selection:bg-[#006239] selection:text-white font-sans"
    >
      {/* Nav Shell */}
      <nav className="fixed top-0 w-full z-50 bg-neutral-700/10 backdrop-blur-xl border-b border-gray-500/15 shadow-2xl shadow-emerald-500/5">
        <div className="flex justify-between items-center h-16 px-6 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-black text-neutral-100 tracking-tighter">Zen<span className="text-[#3ecf8e]">UI</span></Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/docs" className="text-[#3ecf8e] border-b-2 border-[#3ecf8e] pb-1 tracking-tight font-bold">Docs</Link>
              <Link href="/components" className="text-neutral-400 hover:text-[#3ecf8e] transition-colors tracking-tight font-bold">Components</Link>
              <Link href="https://github.com/omsaiidesaiiii" className="text-neutral-400 hover:text-[#3ecf8e] transition-colors tracking-tight font-bold">GitHub</Link>
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
            <Link href="/components" className="uiverse-btn !w-full sm:!w-[180px] !h-[56px] text-ls">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/components" className="w-full sm:w-auto bg-[#2a2a2a] text-[#e5e2e1] font-bold px-8 py-4 rounded-xl border border-[#3d4a3d]/10 hover:bg-[#3a3939] transition-all text-center">
              View Components
            </Link>
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
                <span className="text-[#e5e2e1] select-all">npx zen-ui-cli@latest <span className="text-[#ffb5ab]">init</span></span>
              </div>
              <button 
                onClick={() => navigator.clipboard.writeText("npx zenui@latest init")}
                className="p-2 rounded-lg hover:bg-[#201f1f] transition-colors text-[#c8c6c5] hover:text-[#3ecf8e]"
              >
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
            <h2 className="text-3xl font-bold tracking-tight mb-4">Production-Ready Components</h2>
            <p className="text-[#c8c6c5] max-w-xl">Fully accessible, customizable components built with Tailwind CSS. Drop them directly into your Next.js applications.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Large Card: Form Elements */}
            <div className="md:col-span-2 group relative bg-[#111111] border border-[#1f1f1f] rounded-xl overflow-hidden hover:border-[#249c66]/40 hover:-translate-y-1 transition-all duration-300 shadow-2xl shadow-transparent hover:shadow-black/50 flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00643c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex flex-col md:flex-row h-full">
                
                <div className="p-8 md:w-1/2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Form Elements</h3>
                    <p className="text-[#c8c6c5] text-sm mb-8">Accessible, customizable form controls with built-in validation states, floating labels, and flawless focus rings.</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 bg-[#201f1f] hover:bg-[#2a2a2a] text-[#e5e2e1] px-4 py-2 rounded-lg text-sm transition-colors border border-[#3d4a3d]/20 hover:border-[#249c66]/50">
                      <Copy className="w-4 h-4" /> Copy Code
                    </button>
                    <button className="text-[#3ecf8e] text-sm font-semibold hover:text-[#249c66] transition-colors">
                      View Docs →
                    </button>
                  </div>
                </div>

                <div className="p-8 md:w-1/2 bg-[#171717] border-l border-[#1f1f1f] flex items-center justify-center">
                  <div className="w-full max-w-sm space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#8e8e8e]">EMAIL ADDRESS</label>
                      <input type="email" placeholder="you@company.com" className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-sm text-[#e5e2e1] focus:outline-none focus:border-[#3ecf8e] focus:ring-1 focus:ring-[#3ecf8e] transition-all" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#8e8e8e]">PASSWORD</label>
                      <input type="password" placeholder="••••••••" className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-sm text-[#e5e2e1] focus:outline-none focus:border-[#3ecf8e] focus:ring-1 focus:ring-[#3ecf8e] transition-all" />
                    </div>
                    <button className="uiverse-btn !w-full !max-w-none !h-[42px] font-bold text-sm mt-2">
                       Sign In
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Small Card: Button Styles */}
            <div className="group relative bg-[#111111] border border-[#1f1f1f] rounded-xl overflow-hidden hover:border-[#249c66]/40 hover:-translate-y-1 transition-all duration-300 shadow-2xl shadow-transparent hover:shadow-black/50 flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00643c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="p-8 bg-[#171717] border-b border-[#1f1f1f] h-[240px] flex items-center justify-center relative z-10">
                <div className="flex flex-col gap-3 w-full max-w-[200px]">
                  <button className="uiverse-btn !w-full !max-w-none !h-[42px] font-bold text-sm">Primary Action</button>
                  <button className="border border-[#2a2a2a] bg-[#111111] text-[#e5e2e1] font-semibold py-2.5 px-4 rounded-lg hover:bg-[#201f1f] hover:border-[#3d4a3d] transition-colors w-full text-sm">Secondary</button>
                  <button className="text-[#8e8e8e] font-semibold py-2 px-4 rounded-lg hover:text-[#e5e2e1] hover:bg-[#201f1f] transition-colors w-full text-sm">Ghost Button</button>
                </div>
              </div>

              <div className="p-6 relative z-10 flex-col flex justify-between h-[180px]">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Buttons</h3>
                  <p className="text-[#c8c6c5] text-sm line-clamp-2">A core set of buttons with precise padding, typography, and interactive states.</p>
                </div>
                <div className="flex justify-between items-center mt-4 border-t border-[#3d4a3d]/10 pt-4">
                  <button className="text-[#c8c6c5] hover:text-white transition-colors flex items-center gap-2 text-sm" title="Copy Code">
                    <Copy className="w-4 h-4" /> Copy
                  </button>
                  <button className="text-[#3ecf8e] text-sm font-semibold hover:text-[#249c66] transition-colors">
                    View
                  </button>
                </div>
              </div>
            </div>

            {/* Small Card: Modal / Dialog */}
            <div className="group relative bg-[#111111] border border-[#1f1f1f] rounded-xl overflow-hidden hover:border-[#249c66]/40 hover:-translate-y-1 transition-all duration-300 shadow-2xl shadow-transparent hover:shadow-black/50 flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00643c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="p-8 bg-[#171717] border-b border-[#1f1f1f] h-[240px] flex items-center justify-center relative z-10 w-full overflow-hidden">
                <div className="bg-[#111111] border border-[#2a2a2a] rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] w-full max-w-[280px] p-5 cursor-pointer hover:border-[#3ecf8e]/40 transition-all duration-300 transform group-hover:scale-[1.02]">
                  <h4 className="text-white font-semibold mb-2 text-sm">Delete Project</h4>
                  <p className="text-[#8e8e8e] text-xs mb-4 leading-relaxed">Are you sure? This action cannot be undone and will permanently delete your data.</p>
                  <div className="flex gap-2 justify-end">
                    <div className="px-3 py-1.5 text-xs font-semibold text-[#c8c6c5] bg-[#201f1f] rounded-lg hover:bg-[#2a2a2a] transition-colors">Cancel</div>
                    <div className="px-3 py-1.5 text-xs font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors">Delete</div>
                  </div>
                </div>
              </div>

              <div className="p-6 relative z-10 flex-col flex justify-between h-[180px]">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Dialogs</h3>
                  <p className="text-[#c8c6c5] text-sm line-clamp-2">Interruptive overlays for critical user actions, fully accessible with focus traps.</p>
                </div>
                <div className="flex justify-between items-center mt-4 border-t border-[#3d4a3d]/10 pt-4">
                  <button className="text-[#c8c6c5] hover:text-white transition-colors flex items-center gap-2 text-sm" title="Copy Code">
                    <Copy className="w-4 h-4" /> Copy
                  </button>
                  <button className="text-[#3ecf8e] text-sm font-semibold hover:text-[#249c66] transition-colors">
                    View
                  </button>
                </div>
              </div>
            </div>

            {/* Large Card: Navigation / UI */}
            <div className="md:col-span-2 group relative bg-[#111111] border border-[#1f1f1f] rounded-xl overflow-hidden hover:border-[#249c66]/40 hover:-translate-y-1 transition-all duration-300 shadow-2xl shadow-transparent hover:shadow-black/50 flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00643c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row h-full">
                <div className="p-8 md:w-1/2 flex flex-col justify-between order-2 md:order-1">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Navigation Components</h3>
                    <p className="text-[#c8c6c5] text-sm mb-8">Responsive navigation bars, pill-shaped segment controls, and tab groups with smooth, accessible states.</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 bg-[#201f1f] hover:bg-[#2a2a2a] text-[#e5e2e1] px-4 py-2 rounded-lg text-sm transition-colors border border-[#3d4a3d]/20 hover:border-[#249c66]/50">
                      <Copy className="w-4 h-4" /> Copy Code
                    </button>
                    <button className="text-[#3ecf8e] text-sm font-semibold hover:text-[#249c66] transition-colors">
                      View Docs →
                    </button>
                  </div>
                </div>

                <div className="p-8 md:w-1/2 bg-[#171717] border-l border-[#1f1f1f] flex flex-col items-center justify-center order-1 md:order-2">
                  <div className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg p-1.5 flex gap-1 mb-8 shadow-inner shadow-black/20">
                    <button className="flex-1 text-center py-2 text-xs font-semibold bg-[#201f1f] text-white rounded shadow-sm border border-[#3d4a3d]/20 transition-all">Account</button>
                    <button className="flex-1 text-center py-2 text-xs font-semibold text-[#c8c6c5] hover:text-white rounded border border-transparent hover:bg-[#1a1a1a] transition-all">Security</button>
                    <button className="flex-1 text-center py-2 text-xs font-semibold text-[#c8c6c5] hover:text-white rounded border border-transparent hover:bg-[#1a1a1a] transition-all">Billing</button>
                  </div>
                  <div className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl px-4 py-3 flex justify-between items-center shadow-lg">
                     <span className="text-sm font-black text-white tracking-tighter">Zen<span className="text-[#3ecf8e]">UI</span></span>
                     <div className="flex gap-5">
                       <span className="text-xs font-semibold text-[#8e8e8e] hover:text-white transition-colors cursor-pointer">Modules</span>
                       <span className="text-xs font-semibold text-white cursor-pointer relative after:absolute after:bottom-[-16px] after:left-0 after:w-full after:h-[2px] after:bg-[#3ecf8e]">Pricing</span>
                       <span className="text-xs font-semibold text-[#8e8e8e] hover:text-white transition-colors cursor-pointer">Docs</span>
                     </div>
                  </div>
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
          <Link href="/components" className="uiverse-btn mx-auto !w-[220px] !h-[64px] text-lg">
            Get Started for Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-6 border-t border-emerald-500/10 bg-neutral-950">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="text-lg font-bold text-neutral-200 mb-4">ZenUI</div>
            <p className="font-sans text-sm text-neutral-500 mb-6 max-w-xs">Built for the technical elite. The UI library that doesn&apos;t hold you back.</p>
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
    </motion.div>
  );
}