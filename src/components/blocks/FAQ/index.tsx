import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import styles from './FAQ.module.css'

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Is this kit suitable for high-scale Web3 apps?',
      answer: 'Absolutely. Our components are built with performance-first architecture and sub-pixel precision, perfect for DEXs, NFT marketplaces, and SaaS platforms.',
    },
    {
      question: 'What frameworks are supported?',
      answer: 'Currently, we focus on React and Next.js with TypeScript support. We provide pure CSS/Modules for maximum flexibility.',
    },
    {
      question: 'Does it include the Nano Banana assets?',
      answer: 'Yes, the kit includes placeholders and prompts optimized for Nano Banana 2 Pro to generate your own hyper-realistic assets.',
    },
  ]

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Common Questions</h2>
        </div>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button 
                className={styles.question}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className={styles.answer}>{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
