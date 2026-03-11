import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypewriterProps {
  text: string
  delay?: number
}

const Typewriter: React.FC<TypewriterProps> = ({ text, delay = 0.05 }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, delay * 1000)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, delay, text])

  return (
    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>
      <code>{displayText}</code>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        style={{ borderLeft: '2px solid white', marginLeft: '2px' }}
      />
    </pre>
  )
}

export default Typewriter
