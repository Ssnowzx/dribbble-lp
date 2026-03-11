import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Play } from 'lucide-react'
import styles from './Hero.module.css'

const Hero: React.FC = () => {
  // Animation variants optimized for high-fidelity assets
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.6,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { 
        duration: 1, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    },
  }

  return (
    <section className={styles.hero}>
      {/* CSS-based Liquid Background (Instant Premium Look) */}
      <div className={styles.liquidOrb} style={{ top: '-10%', left: '-10%' }} />
      <div className={styles.liquidOrb} style={{ bottom: '-10%', right: '-10%', animationDelay: '-5s' }} />

      {/* High-Fidelity Cinematic Video (Points to local assets for best quality) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className={styles.videoBackground}
      >
        {/* Usando o vídeo local da pasta public/ para garantir que o Vite o carregue corretamente */}
        <source src="/VIDEOHERO.mp4" type="video/mp4" />
        <source 
          src="https://cdn.pixabay.com/vimeo/478330105/dark-478330105.mp4?width=1280&hash=8b5f3a0c0b8b5f3a0c0b8b5f3a0c0b8b5f3a0c0b" 
          type="video/mp4" 
        />
      </video>
      
      {/* Luxury Grading & Textures */}
      <div className={styles.overlayTop} />
      <div className={styles.overlayBottom} />
      <div className={styles.grainEffect} />
      <div className={styles.vignette} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={styles.content}
      >
        <motion.div variants={itemVariants} className={styles.badge}>
          <span className={styles.badgePulse} />
          Premium UI Kit v2.0
        </motion.div>

        <motion.h1 variants={itemVariants} className={styles.title}>
          Experience the <br /> 
          <span className={styles.titleAccent}>Peak of Aesthetic.</span>
        </motion.h1>

        <motion.p variants={itemVariants} className={styles.subtitle}>
          Hyper-realistic textures meet sub-pixel precision. Powered by Nano Banana generation for visionaries who settle for nothing less than cinematic perfection.
        </motion.p>

        <motion.div variants={itemVariants} className={styles.actions}>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255, 255, 255, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            className={styles.primaryCTA}
          >
            Start Creating
            <ArrowUpRight size={18} />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.08)' }}
            whileTap={{ scale: 0.95 }}
            className={styles.secondaryCTA}
          >
            <Play size={16} fill="white" />
            Watch Showreel
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
