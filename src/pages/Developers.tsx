import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, BookOpen, MessageSquare, ArrowUpRight, Github } from 'lucide-react';

const DevLink = ({ title, icon: Icon, description }: any) => (
  <a href="#" className="glass p-10 rounded-[32px] group flex flex-col justify-between hover:bg-white/[0.06] transition-all">
    <div>
      <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center mb-8 text-white/80 group-hover:text-white transition-colors">
        <Icon size={28} />
      </div>
      <h3 className="text-2xl font-medium mb-4">{title}</h3>
      <p className="text-white/40 leading-relaxed text-sm">{description}</p>
    </div>
    <div className="mt-8 flex items-center text-white/20 group-hover:text-white transition-colors gap-2 text-xs font-bold uppercase tracking-widest">
      Visit <ArrowUpRight size={14} />
    </div>
  </a>
);

const DevelopersPage: React.FC = () => {
  return (
    <div className="pt-40 pb-32 px-6 max-w-[1300px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full glass w-fit mb-8 animate-pulse">
            <Terminal size={14} className="text-white" />
            <span className="text-[12px] font-bold tracking-[0.1em] uppercase text-white/80">SDK v2.4.1 — Now Live</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-medium mb-10 tracking-tighter bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
            Built for <br /> Builders
          </h1>
          <p className="text-xl text-white/50 leading-relaxed mb-12">
            Explore our comprehensive developer ecosystem. From SDKs to real-time APIs, we provide the tools to build the future of decentralized experiences.
          </p>
          <div className="flex gap-4">
             <button className="glass px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-white/10 transition-all">
                <Github size={20} />
                Explore Github
             </button>
          </div>
        </motion.div>
        
        <div className="relative">
           <div className="absolute inset-0 bg-white/5 blur-[120px] rounded-full" />
           <div className="glass p-1 rounded-[32px] relative">
              <div className="flex items-center gap-2 px-6 py-4 border-b border-white/10">
                 <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20" />
                 </div>
                 <span className="text-[11px] text-white/30 ml-4 font-mono tracking-widest italic uppercase">integration-test.js</span>
              </div>
              <pre className="p-10 text-sm font-mono text-white/70 overflow-x-auto leading-relaxed">
                 <code>{`import { EOS } from "@eos-sdk/core";

const app = new EOS({
  apiKey: "GENESIS_KEY",
  network: "mainnet"
});

// Real-time event subscription
app.subscribe("block", (data) => {
  console.log("New block at 0.5s speed:", data.id);
});`}</code>
              </pre>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <DevLink title="Documentation" icon={BookOpen} description="Read our core guides on network architecture and consensus." />
        <DevLink title="SDK References" icon={Code2} description="Explore APIs for React, Go, Flutter, and Rust integration." />
        <DevLink title="Developer API" icon={Terminal} description="Direct gRPC and REST access for high-speed indexing." />
        <DevLink title="Support Forum" icon={MessageSquare} description="Connect with the core engineering team on Discord." />
      </div>
    </div>
  );
};

export default DevelopersPage;
