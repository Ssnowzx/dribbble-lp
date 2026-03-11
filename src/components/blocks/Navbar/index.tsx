import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Menu, X, Hexagon } from 'lucide-react'
import styles from './Navbar.module.css'

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  
  // Transform values for sticky effect
  const width = useTransform(scrollY, [0, 100], ['90%', '95%'])
  const top = useTransform(scrollY, [0, 100], ['1.5rem', '1rem'])
  const backgroundColor = useTransform(
    scrollY, 
    [0, 100], 
    ['rgba(255, 255, 255, 0.03)', 'rgba(0, 0, 0, 0.4)']
  )

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#features' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Pricing', href: '#pricing' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ width, top, backgroundColor }}
        className={styles.navbar}
      >
        <div className={styles.logo}>
          <Hexagon size={24} fill="white" />
          <span>dribbble.</span>
        </div>

        <div className={styles.navLinks}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={styles.link}>
              {link.name}
            </a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.cta}
          >
            Get Started
          </motion.button>
        </div>

        <button 
          className={styles.mobileToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={styles.mobileMenu}
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={styles.link}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className={styles.cta}>Get Started</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
