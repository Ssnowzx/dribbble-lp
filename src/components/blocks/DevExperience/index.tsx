import React from 'react'
import { motion } from 'framer-motion'
import Typewriter from './Typewriter'
import styles from './DevExperience.module.css'

const DevExperience: React.FC = () => {
  const codeText = `import { UIKit } from '@dribbble/premium';

const LandingPage = () => {
  return (
    <UIKit.Container>
      <UIKit.Hero 
        title="Future of Web3" 
        glow={true}
        animation="staggered"
      />
      <UIKit.BentoGrid />
    </UIKit.Container>
  );
};

export default LandingPage;`

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.title}
          >
            Built for developers.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={styles.description}
          >
            Easy to use, easy to customize. Our code is as clean as our designs.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={styles.mockup}
        >
          <div className={styles.toolbar}>
            <div className={`${styles.dot} ${styles.red}`} />
            <div className={`${styles.dot} ${styles.yellow}`} />
            <div className={`${styles.dot} ${styles.green}`} />
            <span className={styles.fileName}>App.tsx — Premium UI Kit</span>
          </div>
          <div className={styles.editorBody}>
            <Typewriter text={codeText} delay={0.03} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DevExperience
