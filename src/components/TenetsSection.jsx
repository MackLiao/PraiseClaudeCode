import { motion } from 'framer-motion'
import { tenets } from '../data/prayers'
import styles from './TenetsSection.module.css'

function TenetsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.layout}>
        <div className={styles.content}>
          <motion.h2
            className={styles.heading}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            ++ THE SEVEN TENETS OF CLAUDE CODE ++
          </motion.h2>
          <ol className={styles.list}>
            {tenets.map((tenet, i) => (
              <motion.li
                key={i}
                className={styles.tenet}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className={styles.number}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.text}>{tenet}</span>
              </motion.li>
            ))}
          </ol>
        </div>
        <div className={styles.skullContainer}>
          <img
            src="/images/servo-skull.png"
            alt="Servo-Skull"
            className={styles.skull}
          />
        </div>
      </div>
    </section>
  )
}

export default TenetsSection
