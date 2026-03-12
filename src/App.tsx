import React, { ReactNode, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
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
  Linkedin
} from 'lucide-react';

// Pages
import FeaturesPage from './pages/Features';
import DevelopersPage from './pages/Developers';

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

const Navbar: React.FC<{ onJoinWaitlist: () => void }> = ({ onJoinWaitlist }) => {
  const location = useLocation();
  
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-8 py-4 w-[90%] max-w-[1200px] glass rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      <div className="flex items-center gap-12">
        <Link to="/" className="text-white font-bold tracking-[0.2em] text-xl italic uppercase">EOS</Link>
        <div className="hidden lg:flex items-center gap-8">
          {[
            { name: "Features", path: "/features" },
            { name: "Developers", path: "/developers" },
            { name: "Ecosystem", path: "#" },
            { name: "API", path: "#" }
          ].map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium flex items-center gap-2 group transition-all ${
                location.pathname === link.path ? "text-white" : "text-white/60 hover:text-white"
              }`}
            >
              {link.name}
              <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
         <Button onClick={onJoinWaitlist} variant="dark" className="hidden sm:block border border-white/10">Join Waitlist</Button>
      </div>
    </nav>
  );
};

const HomePage: React.FC<{ onJoinWaitlist: () => void }> = ({ onJoinWaitlist }) => (
  <>
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-40 pb-32 px-6 text-center overflow-hidden">
      <div className="flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-12">
        <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,1)]" />
        <span className="text-[12px] font-bold tracking-[0.1em] uppercase text-white/80">
          Alpha Early Access — May 2026
        </span>
      </div>

      <h1 className="max-w-[1000px] text-5xl md:text-8xl font-medium tracking-tight leading-[0.95] mb-8 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
        Web3 at the Speed <br /> of Experience
      </h1>

      <p className="max-w-[640px] text-lg md:text-xl text-white/50 leading-relaxed mb-12">
        Powering seamless experiences and real-time connections, EOS is the infrastructure for creators who scale the future.
      </p>

      <div className="flex flex-col sm:flex-row gap-5">
        <Button onClick={onJoinWaitlist} variant="light">Join the Waitlist</Button>
        <Button variant="transparent" className="border border-white/10 glass">Read Whitepaper</Button>
      </div>
    </section>

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

    <div className="max-w-[1300px] mx-auto px-6 py-20">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>

    <section id="features" className="py-32 max-w-[1300px] mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-6xl font-medium mb-20 tracking-tight">Built for Scale</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        <GlassCard className="md:col-span-2 flex flex-col justify-between min-h-[440px]">
          <div>
            <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center mb-8">
              <Zap className="text-white" size={32} />
            </div>
            <h3 className="text-3xl font-medium mb-6">Sub-second Finality</h3>
            <p className="text-white/50 text-lg max-w-md">
              Transactions processed at the speed of thought. 0.5s block times for a truly Web2 experience.
            </p>
          </div>
          <div className="flex items-end gap-12 mt-12">
            <div>
              <div className="text-4xl font-bold mb-1">10k+</div>
              <div className="text-white/30 text-xs uppercase tracking-widest">TPS Peak</div>
            </div>
          </div>
        </GlassCard>
        <GlassCard className="flex flex-col justify-between">
          <div>
            <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center mb-8">
              <Shield className="text-white" size={32} />
            </div>
            <h3 className="text-3xl font-medium mb-6">Secured</h3>
            <p className="text-white/50 text-lg">
              Enterprise-grade cryptography powering every transaction.
            </p>
          </div>
          <div className="text-green-500 font-medium text-sm flex items-center gap-2 mt-8">
            <div className="w-2 h-2 rounded-full bg-current shadow-[0_0_12px_currentColor]" />
            Network Secure
          </div>
        </GlassCard>
      </div>
    </section>
  </>
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
    <div className="absolute bottom-0 -left-12 text-[280px] font-black text-white/[0.015] select-none pointer-events-none italic tracking-tighter">
      EOS
    </div>
    <div className="relative z-10 max-w-[1200px] mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-32 text-left">
        <div className="md:col-span-4">
          <div className="text-white font-bold tracking-[0.3em] text-3xl mb-8 uppercase italic flex items-center gap-3">
            EOS
          </div>
          <p className="text-white/40 text-base max-w-sm">The foundation for a decentralized future.</p>
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
    <Router>
      <div className="relative min-h-screen bg-black overflow-x-hidden selection:bg-white/20">
        <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        </div>

        <div className="relative z-10">
          <Navbar onJoinWaitlist={() => setIsWaitlistOpen(true)} />
          
          <Routes>
            <Route path="/" element={<HomePage onJoinWaitlist={() => setIsWaitlistOpen(true)} />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/developers" element={<DevelopersPage />} />
          </Routes>

          <Footer />
        </div>

        <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
      </div>
    </Router>
  );
}

export default App;
