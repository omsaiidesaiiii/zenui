import React from 'react';
import Link from 'next/link';
import { 
  Terminal, 
  Copy, 
  ChevronRight, 
  Layout, 
  Moon, 
  Zap, 
  Code, 
  CircleCheck,
  Box,
  Layers,
  Sparkles
} from 'lucide-react';

// Custom SVG components for brand icons removed in Lucide v0.400+
const GitHub = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Twitter = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#22c55e]/30 selection:text-white font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full border-b border-[#1f1f1f] bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#22c55e] to-teal-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white/20 blur-sm group-hover:blur-md transition-all"></div>
                <Layout className="w-4 h-4 text-white relative z-10" />
              </div>
              <span className="font-bold text-xl tracking-tight">ZenUI</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-[#9ca3af]">
              <Link href="/docs" className="hover:text-white transition-colors">Docs</Link>
              <Link href="/components" className="hover:text-white transition-colors">Components</Link>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="https://github.com" target="_blank" className="text-[#9ca3af] hover:text-white transition-colors hidden sm:block">
              <GitHub className="w-5 h-5" />
            </Link>
            <Link href="/login" className="text-sm font-medium text-[#9ca3af] hover:text-white transition-colors hidden sm:block">
              Sign In
            </Link>
            <button className="h-9 px-4 rounded-md bg-[#22c55e] hover:bg-[#1ea34d] text-black font-semibold text-sm transition-all shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_rgba(34,197,94,0.5)]">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#22c55e]/10 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-[#1f1f1f] text-sm text-[#9ca3af] mb-8 hover:border-[#22c55e]/50 transition-colors cursor-pointer">
              <Sparkles className="w-4 h-4 text-[#22c55e]" />
              <span>Introducing ZenUI Pro Components</span>
              <ChevronRight className="w-4 h-4" />
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[1.1] mb-6">
              Build UI faster. <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-teal-400 drop-shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                Scale like a pro.
              </span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#9ca3af] mb-10 leading-relaxed font-light">
              A premium, open-source UI component library designed for modern web apps. 
              Beautifully styled, accessible, and ready to drop into your Next.js project.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto h-12 px-8 rounded-lg bg-[#22c55e] hover:bg-[#1ea34d] text-black font-semibold text-md transition-all shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] flex items-center justify-center gap-2">
                Start Building <ChevronRight className="w-4 h-4" />
              </button>
              <button className="w-full sm:w-auto h-12 px-8 rounded-lg bg-[#111111] hover:bg-[#1a1a1a] border border-[#1f1f1f] hover:border-[#333] text-white font-medium text-md transition-all flex items-center justify-center gap-2">
                <Box className="w-4 h-4 text-[#9ca3af]" /> View Components
              </button>
            </div>
          </div>
        </section>

        {/* Code / CLI Section */}
        <section className="py-12 relative z-20">
          <div className="max-w-3xl mx-auto px-6">
            <div className="rounded-xl border border-[#1f1f1f] bg-[#111111]/80 backdrop-blur-xl p-4 shadow-2xl relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#22c55e]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#333]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#333]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#333]"></div>
                </div>
                <div className="text-xs text-[#9ca3af] font-mono flex items-center gap-2">
                  <Terminal className="w-3 h-3" /> terminal
                </div>
              </div>
              <div className="relative bg-[#0a0a0a] rounded-lg p-5 font-mono text-sm sm:text-base text-gray-300 flex items-center justify-between group/code border border-[#1f1f1f]">
                <div className="flex items-center gap-3 overflow-x-auto">
                  <span className="text-[#22c55e] select-none">➜</span>
                  <span className="text-[#9ca3af]">~</span>
                  <span className="text-white">npx <span className="text-[#22c55e]">zenui@latest</span> init</span>
                </div>
                <button className="p-2 rounded-md hover:bg-[#1f1f1f] text-[#9ca3af] hover:text-white transition-colors opacity-0 group-hover/code:opacity-100 focus:opacity-100 flex-shrink-0">
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Framework Support */}
        <section className="py-10 border-t border-b border-[#1f1f1f] bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-sm font-medium text-[#9ca3af] mb-6 uppercase tracking-wider">Works seamlessly with</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
              <div className="flex items-center gap-2"><Layers className="w-6 h-6" /> <span className="font-semibold text-lg">Next.js</span></div>
              <div className="flex items-center gap-2"><Code className="w-6 h-6" /> <span className="font-semibold text-lg">React</span></div>
              <div className="flex items-center gap-2"><Zap className="w-6 h-6" /> <span className="font-semibold text-lg">Vite</span></div>
              <div className="flex items-center gap-2"><Box className="w-6 h-6" /> <span className="font-semibold text-lg">Remix</span></div>
            </div>
          </div>
        </section>

        {/* Component Showcase (Grid) */}
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Crafted for perfection.</h2>
              <p className="text-[#9ca3af] text-lg max-w-2xl">Copy and paste beautifully designed components directly into your application. Fully customizable and accessible.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Component Card 1 */}
              <div className="group rounded-2xl border border-[#1f1f1f] bg-[#111111] overflow-hidden hover:border-[#22c55e]/40 transition-all duration-300 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[#22c55e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-6 border-b border-[#1f1f1f] h-48 flex items-center justify-center bg-[#0a0a0a] relative overflow-hidden">
                  {/* Grid background pattern */}
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                  
                  <button className="relative z-10 h-10 px-6 rounded-lg bg-white text-black font-medium text-sm hover:!bg-[#22c55e] hover:!text-black transition-colors duration-300 shadow-lg">
                    Primary Button
                  </button>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-1 text-white group-hover:text-[#22c55e] transition-colors">Interactive Buttons</h3>
                  <p className="text-[#9ca3af] text-sm">Multiple variants, sizes, and states. Micro-animations included.</p>
                </div>
              </div>

              {/* Component Card 2 */}
              <div className="group rounded-2xl border border-[#1f1f1f] bg-[#111111] overflow-hidden hover:border-[#22c55e]/40 transition-all duration-300 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[#22c55e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-6 border-b border-[#1f1f1f] h-48 flex items-center justify-center bg-[#0a0a0a] relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                  
                  <div className="relative z-10 w-full max-w-[240px] bg-[#111111] border border-[#1f1f1f] rounded-xl p-4 shadow-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500"></div>
                      <div>
                        <div className="h-3 w-20 bg-[#2a2a2a] rounded mb-1.5"></div>
                        <div className="h-2 w-12 bg-[#1f1f1f] rounded"></div>
                      </div>
                    </div>
                    <div className="h-6 w-full bg-[#1a1a1a] rounded mt-2 border border-[#2a2a2a]"></div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-1 text-white group-hover:text-[#22c55e] transition-colors">Data Cards</h3>
                  <p className="text-[#9ca3af] text-sm">Versatile card layouts for dashboards, profiles, and statistics.</p>
                </div>
              </div>

              {/* Component Card 3 */}
              <div className="group rounded-2xl border border-[#1f1f1f] bg-[#111111] overflow-hidden hover:border-[#22c55e]/40 transition-all duration-300 relative lg:col-span-1 md:col-span-2">
                <div className="absolute inset-0 bg-gradient-to-b from-[#22c55e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-6 border-b border-[#1f1f1f] h-48 flex items-center justify-center bg-[#0a0a0a] relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                  
                  <div className="relative z-10 bg-[#111111] border border-[#1f1f1f] rounded-lg p-1.5 shadow-xl flex items-center gap-1">
                    <div className="px-3 py-1.5 rounded-md bg-[#22c55e] text-black text-xs font-semibold">Overview</div>
                    <div className="px-3 py-1.5 rounded-md text-[#9ca3af] hover:text-white text-xs font-medium cursor-pointer transition-colors">Integrations</div>
                    <div className="px-3 py-1.5 rounded-md text-[#9ca3af] hover:text-white text-xs font-medium cursor-pointer transition-colors">Settings</div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-1 text-white group-hover:text-[#22c55e] transition-colors">Navigation Tabs</h3>
                  <p className="text-[#9ca3af] text-sm">Animated, accessible tabs with fluid layout transitions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-[#0d0d0d] border-y border-[#1f1f1f]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-[#111111] border border-[#1f1f1f] flex items-center justify-center mb-5 text-[#22c55e]">
                  <Terminal className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">CLI Tool</h3>
                <p className="text-[#9ca3af] text-sm leading-relaxed">Add components to your project via command line. No more manual copying of complex files.</p>
              </div>
              
              <div className="flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-[#111111] border border-[#1f1f1f] flex items-center justify-center mb-5 text-[#22c55e]">
                  <Copy className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Copy & Paste</h3>
                <p className="text-[#9ca3af] text-sm leading-relaxed">Don't want to use the CLI? Just copy and paste the code. You own the code completely.</p>
              </div>

              <div className="flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-[#111111] border border-[#1f1f1f] flex items-center justify-center mb-5 text-[#22c55e]">
                  <Moon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Dark Mode First</h3>
                <p className="text-[#9ca3af] text-sm leading-relaxed">Designed specifically for dark mode with perfect contrast, subtle gradients, and glows.</p>
              </div>

              <div className="flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-[#111111] border border-[#1f1f1f] flex items-center justify-center mb-5 text-[#22c55e]">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Developer Experience</h3>
                <p className="text-[#9ca3af] text-sm leading-relaxed">Built with TypeScript, Tailwind CSS, and Framer Motion. Exceptional DX right out of the box.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#22c55e]/5 pointer-events-none"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#22c55e]/20 blur-[150px] rounded-full pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Start building in seconds.
            </h2>
            <p className="text-xl text-[#9ca3af] mb-10 max-w-2xl mx-auto">
              Join thousands of developers building fast, beautiful, accessible web applications with ZenUI.
            </p>
            <button className="h-14 px-10 rounded-lg bg-white hover:bg-gray-100 text-black font-bold text-lg transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]">
              Get Started for Free
            </button>
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-[#9ca3af]">
              <div className="flex items-center gap-2">
                <CircleCheck className="w-4 h-4 text-[#22c55e]" /> MIT License
              </div>
              <div className="flex items-center gap-2">
                <CircleCheck className="w-4 h-4 text-[#22c55e]" /> 100+ Components
              </div>
              <div className="flex items-center gap-2 hidden sm:flex">
                <CircleCheck className="w-4 h-4 text-[#22c55e]" /> Weekly Updates
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1f1f1f] bg-[#050505] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
            <div className="col-span-2 lg:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded bg-gradient-to-br from-[#22c55e] to-teal-600 flex items-center justify-center">
                  <Layout className="w-3 h-3 text-white" />
                </div>
                <span className="font-bold text-lg tracking-tight">ZenUI</span>
              </Link>
              <p className="text-[#9ca3af] text-sm max-w-sm mb-6">
                A premium, beautifully designed UI library for modern React and Next.js applications.
              </p>
              <div className="flex items-center gap-4 text-[#9ca3af]">
                <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="hover:text-white transition-colors"><GitHub className="w-5 h-5" /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-sm text-white">Resources</h4>
              <ul className="space-y-3 text-sm text-[#9ca3af]">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Components</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Figma File</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm text-white">Company</h4>
              <ul className="space-y-3 text-sm text-[#9ca3af]">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm text-white">Legal</h4>
              <ul className="space-y-3 text-sm text-[#9ca3af]">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">License</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#1f1f1f] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#9ca3af]">
            <p>© {new Date().getFullYear()} ZenUI Inc. All rights reserved.</p>
            <div className="flex items-center gap-1">
              <span>Designed with</span>
              <span className="text-[#22c55e]">♥</span>
              <span>for developers</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}