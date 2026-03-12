import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Layers, Cpu, Database, Globe, RefreshCcw, Lock } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }: any) => (
  <div className="glass p-10 rounded-[32px] group hover:bg-white/[0.06] transition-all">
    <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center mb-8 text-white/80 group-hover:text-white transition-colors">
      <Icon size={28} />
    </div>
    <h3 className="text-2xl font-medium mb-4">{title}</h3>
    <p className="text-white/40 leading-relaxed">{description}</p>
  </div>
);

const FeaturesPage: React.FC = () => {
  return (
    <div className="pt-40 pb-32 px-6 max-w-[1300px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-32"
      >
        <h1 className="text-6xl md:text-8xl font-medium mb-8 tracking-tighter bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
          The Network <br /> for the Infinite
        </h1>
        <p className="text-xl text-white/40 max-w-2xl mx-auto">
          Every layer of EOS is engineered for sub-second precision and ultimate resilience. Explore the core pillars of our ecosystem.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard 
          icon={Zap} 
          title="0.5s Finality" 
          description="Transactions move as fast as light. No more waiting for block confirmations."
        />
        <FeatureCard 
          icon={Shield} 
          title="Failsafe Design" 
          description="Multi-layered redundancy ensures 99.99% uptime for your decentralized apps."
        />
        <FeatureCard 
          icon={Layers} 
          title="Elastic Scale" 
          description="Infrastructure that grows with your users, from genesis to a billion transactions."
        />
        <FeatureCard 
          icon={Cpu} 
          title="Modular Stack" 
          description="Swap any component of the stack to fit your specific technical requirements."
        />
        <FeatureCard 
          icon={Database} 
          title="Real-time Indexing" 
          description="Access on-chain data instantly with our native indexing engine."
        />
        <FeatureCard 
          icon={Globe} 
          title="Global Consensus" 
          description="Distributed across 5,000+ nodes for true decentralization and trust."
        />
        <FeatureCard 
          icon={RefreshCcw} 
          title="Auto-Healing" 
          description="Self-correcting network protocols that detect and isolate faulty nodes."
        />
        <FeatureCard 
          icon={Lock} 
          title="ZK-Native" 
          description="Built-in support for zero-knowledge proofs to protect user privacy."
        />
      </div>
    </div>
  );
};

export default FeaturesPage;
