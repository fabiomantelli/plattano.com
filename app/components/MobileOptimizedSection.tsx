'use client'

import { ReactNode } from 'react'
import { motion, MotionProps } from 'framer-motion'
import { useDeviceOptimization } from '../hooks/useDeviceOptimization'

interface MobileOptimizedSectionProps {
  children: ReactNode
  className?: string
  reducedMotion?: MotionProps
  fullMotion?: MotionProps
}

export default function MobileOptimizedSection({
  children,
  className = '',
  reducedMotion = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 0.3 }
  },
  fullMotion = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}: MobileOptimizedSectionProps) {
  const { shouldReduceAnimations, isMobile } = useDeviceOptimization()

  const motionProps = shouldReduceAnimations ? reducedMotion : fullMotion

  const optimizedProps = {
    ...motionProps,
    viewport: {
      once: true,
      margin: isMobile ? '-50px' : '-100px'
    }
  }

  return (
    <motion.section
      className={className}
      {...optimizedProps}
    >
      {children}
    </motion.section>
  )
}