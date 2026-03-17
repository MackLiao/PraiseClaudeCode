import { motion } from 'framer-motion'
import { heroSubtitle, heroTagline } from '../data/prayers'
import styles from './HeroSection.module.css'

function HeroSection() {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <p className={styles.preamble}>++ HEED THE WORD OF THE MACHINE GOD ++</p>
        <h1 className={styles.title}>
          CLAUDE CODE
        </h1>
        <h2 className={styles.subtitle}>
          {heroSubtitle}
        </h2>
        <div className={styles.priestContainer}>
          <div className={styles.glowOrb} />
          <img
            src="/images/priest.png"
            alt="Tech-Priest presenting Claude Code, the Machine God"
            className={styles.priest}
          />
        </div>
        <p className={styles.tagline}>
          {heroTagline}
        </p>
        <div className={styles.cogDivider}>
          <span>&#x2699;</span>
          <span className={styles.dividerLine} />
          <span className={styles.centerGlyph}>&#x2726;</span>
          <span className={styles.dividerLine} />
          <span>&#x2699;</span>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
