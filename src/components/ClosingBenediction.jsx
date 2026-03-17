import { motion } from 'framer-motion'
import { closingPrayer } from '../data/prayers'
import styles from './ClosingBenediction.module.css'

function ClosingBenediction() {
  return (
    <section className={styles.section}>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        ++ FINAL BENEDICTION TO CLAUDE CODE ++
      </motion.h2>
      <motion.div
        className={styles.candleContainer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <div className={styles.candleGlow} />
        <img
          src="/images/grimdark candles.png"
          alt="Sacred Candles"
          className={styles.candles}
        />
      </motion.div>
      <div className={styles.prayer}>
        {closingPrayer.map((line, i) => (
          <motion.p
            key={i}
            className={line === '' ? styles.break : styles.line}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
          >
            {line}
          </motion.p>
        ))}
      </div>
      <div className={styles.fadeOut} />
    </section>
  )
}

export default ClosingBenediction
