import React from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import styles from './BentoCard.module.css'

interface BentoCardProps {
  title: string
  description: string
  icon: React.ReactNode
  className?: string
  bgImage?: string
}

const BentoCard: React.FC<BentoCardProps> = ({ title, description, icon, className, bgImage }) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div 
      className={`${styles.card} ${className}`}
      onMouseMove={handleMouseMove}
    >
      {bgImage && (
        <div 
          className={styles.bgImage} 
          style={{ backgroundImage: `url(${bgImage})` }} 
        />
      )}
      <div className={styles.overlay} />
      <motion.div 
        className={styles.glow}
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.1),
              transparent 80%
            )
          `
        }}
      />
      
      <div className={styles.content}>
        <div className={styles.icon}>{icon}</div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}

export default BentoCard
