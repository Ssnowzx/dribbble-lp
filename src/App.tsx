import React, { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Zap, 
  Shield, 
  Layers, 
  Cpu, 
  Code2, 
  CheckCircle2, 
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
  Database,
  Globe,
  RefreshCcw,
  Lock,
  Terminal,
  BookOpen,
  MessageSquare,
  ArrowUpRight
} from 'lucide-react';

// Components
import WaitlistModal from './components/modals/WaitlistModal';

// --- Shared UI Components ---

interface ButtonProps {
  children: ReactNode;
  variant?: "dark" | "light" | "transparent";
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, variant = "dark", className = "", onClick }) => {
  const isDark = variant === "dark";
  const isLight = variant === "light";
  
  return (
    <button 
      onClick={onClick}
      className={`relative group rounded-full p-[1px] bg-gradient-to-b from-white/20 to-transparent overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] ${className}`}
    >
      <div
        className={`relative rounded-full px-8 py-3.5 text-sm font-medium flex items-center justify-center overflow-hidden transition-all duration-500 ${
          isDark ? "bg-black text-white" : isLight ? "bg-white text-black" : "bg-transparent text-white"
        }`}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/60 via-white/10 to-transparent blur-sm pointer-events-none opacity-50 mix-blend-screen" />
        <span className="relative z-10">{children}</span>
      </div>
    </button>
  );
};

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = "" }) => (
  <div className={`glass glass-hover p-8 md:p-12 rounded-[32px] overflow-hidden ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
    {children}
  </div>
);

// --- Sections ---

const Navbar: React.FC<{ onJoinWaitlist: () => void }> = ({ onJoinWaitlist }) => (
  <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-8 py-4 w-[90%] max-w-[1200px] glass rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
    <div className="flex items-center gap-12">
      <a href="#" className="text-white font-bold tracking-[0.2em] text-xl italic uppercase">EOS</a>
      <div className="hidden lg:flex items-center gap-8">
        {["Features", "Developers", "Ecosystem", "Waitlist"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-white/60 hover:text-white transition-all text-sm font-medium flex items-center gap-2 group"
          >
            {link}
            <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
        ))}
      </div>
    </div>
    <div className="flex items-center gap-4">
       <Button onClick={onJoinWaitlist} variant="dark" className="hidden sm:block border border-white/10">Join Waitlist</Button>
    </div>
  </nav>
);

const LogoCloud: React.FC = () => (
  <section className="relative z-10 py-20 border-y border-white/5 bg-black/20 backdrop-blur-md">
    <div className="max-w-[1200px] mx-auto px-6 text-center">
      <p className="text-white/30 text-[11px] font-bold tracking-[0.3em] uppercase mb-12">Trusted by ecosystem leaders</p>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
        {['ETHEREUM', 'POLYGON', 'SOLANA', 'AVALANCHE', 'COINBASE'].map((logo) => (
          <span key={logo} className="text-white text-lg font-bold tracking-[0.2em]">{logo}</span>
        ))}
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, description }: any) => (
  <GlassCard className="group">
    <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center mb-8 text-white/80 group-hover:text-white transition-colors">
      <Icon size={28} />
    </div>
    <h3 className="text-2xl font-medium mb-4">{title}</h3>
    <p className="text-white/40 leading-relaxed text-sm">{description}</p>
  </GlassCard>
);

const Features: React.FC = () => (
  <section id="features" className="py-32 max-w-[1300px] mx-auto px-6">
    <div className="text-center mb-24">
      <h2 className="text-4xl md:text-7xl font-medium mb-6 tracking-tight bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">The Network for the Infinite</h2>
      <p className="text-white/40 text-lg max-w-xl mx-auto">High-performance infrastructure for the next billion users.</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { icon: Zap, title: "0.5s Finality", desc: "Transactions move as fast as light. No more waiting." },
        { icon: Shield, title: "Failsafe Design", desc: "Multi-layered redundancy ensures 99.99% uptime." },
        { icon: Layers, title: "Elastic Scale", desc: "Infrastructure that grows with your users instantly." },
        { icon: Cpu, title: "Modular Stack", desc: "Swap any component to fit your technical needs." },
        { icon: Database, title: "Real-time Index", desc: "Access on-chain data with our native engine." },
        { icon: Globe, title: "Global Consensus", desc: "Distributed across 5,000+ nodes for true trust." },
        { icon: RefreshCcw, title: "Auto-Healing", desc: "Self-correcting protocols that isolate faulty nodes." },
        { icon: Lock, title: "ZK-Native", desc: "Built-in support for zero-knowledge privacy." }
      ].map(f => <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.desc} />)}
    </div>
  </section>
);

const DevExperience: React.FC = () => (
  <section id="developers" className="py-32 max-w-[1300px] mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
      <div>
        <div className="flex items-center gap-2.5 px-4 py-2 rounded-full glass w-fit mb-8">
          <Terminal size={16} className="text-white/80" />
          <span className="text-[12px] font-bold tracking-[0.1em] uppercase text-white/80">SDK v2.4.1 Live</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-medium mb-8 leading-[1.1] tracking-tight">Build with EOS SDK</h2>
        <ul className="space-y-6 mb-12">
          {[
            "Universal SDK for Web, Mobile and Desktop",
            "Automated Smart Contract auditing",
            "One-click deployment to EOS Mainnet"
          ].map(item => (
            <li key={item} className="flex items-start gap-4">
              <CheckCircle2 className="text-white mt-1" size={20} />
              <span className="text-white/50 text-lg">{item}</span>
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
           <Button variant="light">Read Documentation</Button>
           <Button variant="transparent" className="glass border border-white/5">Github</Button>
        </div>
      </div>
      <GlassCard className="bg-black/80 border-white/20 p-2 shadow-2xl relative">
         <div className="flex items-center gap-2 px-6 py-4 border-b border-white/10">
            <div className="flex gap-1.5">
               <div className="w-3 h-3 rounded-full bg-red-500/20" />
               <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
               <div className="w-3 h-3 rounded-full bg-green-500/20" />
            </div>
            <span className="text-[11px] text-white/30 ml-4 font-mono">deploy-contract.ts</span>
         </div>
         <pre className="p-8 text-sm font-mono text-white/70 overflow-x-auto leading-relaxed">
            <code>{`import { EOS } from "@eos-sdk/core";

const app = new EOS({
  apiKey: process.env.EOS_KEY,
  network: "mainnet"
});

// Deploying with sub-second finality
await app.contracts.deploy("./vault.wasm");`}</code>
         </pre>
      </GlassCard>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="relative pt-64 pb-16 bg-black overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent to-black pointer-events-none z-0" />
    <div 
      className="absolute inset-0 pointer-events-none opacity-[0.07]" 
      style={{ 
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0), linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
        backgroundSize: '4px 4px, 40px 40px, 40px 40px',
        maskImage: 'linear-gradient(to bottom, transparent, black 200px)'
      }} 
    />
    <div className="absolute bottom-0 -left-12 text-[280px] font-black text-white/[0.015] select-none pointer-events-none italic tracking-tighter uppercase">EOS</div>
    <div className="relative z-10 max-w-[1200px] mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-32 text-left">
        <div className="md:col-span-4">
          <div className="text-white font-bold tracking-[0.3em] text-3xl mb-8 uppercase italic">EOS</div>
          <p className="text-white/40 text-base max-w-sm">The foundation for a decentralized future. Scaling experiences, empowering creators.</p>
        </div>
        <div className="md:col-span-8 grid grid-cols-3 gap-12">
          {["Network", "Developers", "Ecosystem"].map(title => (
            <div key={title}>
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8">{title}</h4>
              <ul className="space-y-4">
                {["Links", "More", "Docs"].map(link => (
                  <li key={link}><a href="#" className="text-white/30 hover:text-white transition-all text-sm">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-12 border-t border-white/5 flex justify-between items-center text-white/20 text-xs">
        <span>© 2026 EOS Foundation</span>
        <div className="flex gap-8">
          <Twitter size={20} />
          <Github size={20} />
          <Linkedin size={20} />
        </div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden selection:bg-white/20">
      {/* BACKGROUND VIDEO */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </div>

      <div className="relative z-10">
        <Navbar onJoinWaitlist={() => setIsWaitlistOpen(true)} />
        
        {/* HERO */}
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-40 pb-32 px-6 text-center overflow-hidden">
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-12 animate-pulse">
            <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,1)]" />
            <span className="text-[12px] font-bold tracking-[0.1em] uppercase text-white/80">Alpha Early Access — May 2026</span>
          </div>
          <h1 className="max-w-[1000px] text-5xl md:text-8xl font-medium tracking-tight leading-[0.95] mb-8 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
            Web3 at the Speed <br /> of Experience
          </h1>
          <p className="max-w-[640px] text-lg md:text-xl text-white/50 leading-relaxed mb-12">
            Powering seamless experiences and real-time connections, EOS is the infrastructure for creators who scale the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <Button onClick={() => setIsWaitlistOpen(true)} variant="light">Join the Waitlist</Button>
            <Button variant="transparent" className="border border-white/10 glass">Read Whitepaper</Button>
          </div>
        </section>

        <LogoCloud />
        
        <div className="max-w-[1300px] mx-auto px-6 py-20">
           <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <Features />
        <DevExperience />
        
        {/* FINAL CTA */}
        <section id="waitlist" className="py-40 px-6 text-center">
           <GlassCard className="max-w-4xl mx-auto py-24">
              <h2 className="text-4xl md:text-7xl font-medium mb-8 tracking-tighter">Ready for Genesis?</h2>
              <p className="text-white/50 text-xl max-w-xl mx-auto mb-12">Join the foundation of the new internet. Early access spots are limited.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                 <input type="email" placeholder="Enter your email" className="flex-1 bg-white/5 border border-white/10 rounded-full px-8 py-4 outline-none focus:border-white/40 transition-all" />
                 <Button onClick={() => setIsWaitlistOpen(true)} variant="light">Join <ArrowRight size={16} className="ml-2 inline" /></Button>
              </div>
           </GlassCard>
        </section>

        <Footer />
      </div>

      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </div>
  );
}

export default App;
