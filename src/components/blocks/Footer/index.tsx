import React from 'react'
import { Hexagon, Twitter, Github, Linkedin } from 'lucide-react'
import styles from './Footer.module.css'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brandInfo}>
            <div className={styles.logo}>
              <Hexagon size={28} fill="white" />
              <span>dribbble.</span>
            </div>
            <p className={styles.tagline}>
              Crafting premium UI experiences for the next generation of Web3 and SaaS applications.
            </p>
          </div>

          <div className={styles.column}>
            <h4>Product</h4>
            <div className={styles.links}>
              <a href="#" className={styles.link}>Features</a>
              <a href="#" className={styles.link}>Showcase</a>
              <a href="#" className={styles.link}>UI Kit</a>
              <a href="#" className={styles.link}>Pricing</a>
            </div>
          </div>

          <div className={styles.column}>
            <h4>Resources</h4>
            <div className={styles.links}>
              <a href="#" className={styles.link}>Documentation</a>
              <a href="#" className={styles.link}>Support</a>
              <a href="#" className={styles.link}>Blog</a>
              <a href="#" className={styles.link}>Community</a>
            </div>
          </div>

          <div className={styles.newsletter}>
            <h4>Newsletter</h4>
            <p>Get the latest updates on new components and features.</p>
            <div className={styles.form}>
              <input type="email" placeholder="Email address" className={styles.input} />
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 dribbble premium. All rights reserved.</p>
          <div className={styles.socials}>
            <a href="#" className={styles.link}><Twitter size={18} /></a>
            <a href="#" className={styles.link}><Github size={18} /></a>
            <a href="#" className={styles.link}><Linkedin size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
