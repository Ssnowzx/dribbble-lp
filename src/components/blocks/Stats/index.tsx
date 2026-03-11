import React from 'react'
import { motion } from 'framer-motion'
import styles from './Stats.module.css'

const Stats: React.FC = () => {
  const stats = [
    { value: '500k+', label: 'Active Users' },
    { value: '2.4B+', label: 'Transactions' },
    { value: '0.6ms', label: 'Average Latency' },
  ]

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {stats.map((stat, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={styles.statItem}
          >
            <span className={styles.value}>{stat.value}</span>
            <span className={styles.label}>{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Stats
