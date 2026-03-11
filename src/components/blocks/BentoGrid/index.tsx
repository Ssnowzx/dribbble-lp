import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Shield, Globe, Cpu, Layout } from 'lucide-react'
import BentoCard from './BentoCard'
import styles from './BentoGrid.module.css'

const BentoGrid: React.FC = () => {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.title}
          >
            Engineered for <br /> Future-proof Web3
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={styles.subtitle}
          >
            Experience the synergy of Nano Banana AI aesthetics and high-performance React architecture.
          </motion.p>
        </div>

        <div className={styles.grid}>
          <BentoCard 
            className={styles.largeCard}
            icon={<Layout size={32} />}
            title="Modular Design System"
            description="Our atomic-first approach ensures that every component is highly customizable and reusable."
            bgImage="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=1000"
          />
          <BentoCard 
            icon={<Zap size={32} />}
            title="Lightning Fast"
            description="Optimized for sub-second load times using liquid motion patterns."
            bgImage="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800"
          />
          <BentoCard 
            icon={<Shield size={32} />}
            title="Secure by Default"
            description="Photorealistic security layers built into the core."
            bgImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
          />
          <BentoCard 
            className={styles.mediumCard}
            icon={<Globe size={32} />}
            title="Global Scalability"
            description="Designed for visionaries who demand aesthetic excellence across the globe."
            bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
          />
          <BentoCard 
            icon={<Cpu size={32} />}
            title="Next-gen Logic"
            description="Intelligent component orchestration powered by the AIOX framework."
            bgImage="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800"
          />
        </div>
      </div>
    </section>
  )
}

export default BentoGrid
