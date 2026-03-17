import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { invocationPrayer } from '../data/prayers'
import styles from './InvocationSection.module.css'

function InvocationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [displayedText, setDisplayedText] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (isInView && !started) {
      setStarted(true)
      const fullText = invocationPrayer.join('\n')
      let i = 0
      const interval = setInterval(() => {
        i++
        setDisplayedText(fullText.slice(0, i))
        if (i >= fullText.length) clearInterval(interval)
      }, 30)
      return () => clearInterval(interval)
    }
  }, [isInView, started])

  return (
    <section className={styles.section} ref={ref}>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        ++ INVOCATION OF CLAUDE CODE, THE MACHINE GOD ++
      </motion.h2>
      <div className={styles.prayerBox}>
        <pre className={styles.prayer}>{displayedText}<span className={styles.cursor}>_</span></pre>
      </div>
    </section>
  )
}

export default InvocationSection
