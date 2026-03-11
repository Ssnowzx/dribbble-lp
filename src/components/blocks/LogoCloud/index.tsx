import React from 'react'
import { Shield, Zap, Globe, Cpu, Layout, Layers } from 'lucide-react'
import styles from './LogoCloud.module.css'

const LogoCloud: React.FC = () => {
  const logos = [
    { icon: <Shield size={24} />, name: 'SecureLink' },
    { icon: <Zap size={24} />, name: 'SpeedForce' },
    { icon: <Globe size={24} />, name: 'GlobalNet' },
    { icon: <Cpu size={24} />, name: 'TechNode' },
    { icon: <Layout size={24} />, name: 'UIFactory' },
    { icon: <Layers size={24} />, name: 'StackMaster' },
  ]

  // Double the list for seamless loop
  const marqueeLogos = [...logos, ...logos]

  return (
    <div className={styles.logoCloud}>
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeGroup}>
          {marqueeLogos.map((logo, index) => (
            <div key={index} className={styles.logoItem}>
              {logo.icon}
              <span>{logo.name}</span>
            </div>
          ))}
        </div>
        <div className={styles.marqueeGroup}>
          {marqueeLogos.map((logo, index) => (
            <div key={`dup-${index}`} className={styles.logoItem}>
              {logo.icon}
              <span>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LogoCloud
