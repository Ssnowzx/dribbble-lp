import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import styles from './Pricing.module.css'

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$0',
      features: ['Basic Components', 'Community Access', 'React Only'],
      featured: false,
    },
    {
      name: 'Professional',
      price: '$49',
      features: ['All Components', 'Priority Support', 'Next.js Templates', 'Figma Files'],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: ['Unlimited Projects', 'Dedicated Support', 'White-labeling', 'Custom Animations'],
      featured: false,
    },
  ]

  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.header}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.title}
        >
          Premium Plans
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={styles.subtitle}
        >
          Choose the perfect tier for your design ambitions.
        </motion.p>
      </div>

      <div className={styles.grid}>
        {plans.map((plan, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: plan.featured ? 1.05 : 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`${styles.card} ${plan.featured ? styles.cardFeatured : ''}`}
          >
            <span className={styles.planName}>{plan.name}</span>
            <div className={styles.price}>{plan.price}{plan.price !== 'Custom' && <span>/mo</span>}</div>
            <div className={styles.features}>
              {plan.features.map((feature, i) => (
                <div key={i} className={styles.featureItem}>
                  <Check size={16} />
                  {feature}
                </div>
              ))}
            </div>
            <button className={`${styles.cta} ${plan.featured ? styles.ctaPrimary : styles.ctaSecondary}`}>
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Pricing
