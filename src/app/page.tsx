'use client'

import variables from './variables.module.scss'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div>
      <h1 style={{ color: variables.primaryColor }}>Hello, Next.js!</h1>
      <motion.div
        className='w-52 h-52 bg-black'
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag='x'
        dragConstraints={{ left: -100, right: 100 }}
      ></motion.div>
    </div>
  )
}
