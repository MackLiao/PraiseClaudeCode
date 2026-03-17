import { motion } from 'framer-motion'
import LitanyCard from './LitanyCard'
import { litanies } from '../data/prayers'
import styles from './LitanyCards.module.css'

function LitanyCards() {
  return (
    <section className={styles.section}>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        ++ SACRED LITANIES OF CLAUDE CODE ++
      </motion.h2>
      <div className={styles.layout}>
        <div className={styles.guardian}>
          <img
            src="/images/skiarii.png"
            alt="Skitarii Guardian"
            className={styles.guardianImg}
          />
        </div>
        <div className={styles.grid}>
          {litanies.map((litany, i) => (
            <LitanyCard key={litany.title} title={litany.title} text={litany.text} index={i} />
          ))}
        </div>
        <div className={styles.guardian}>
          <img
            src="/images/skiarii.png"
            alt="Skitarii Guardian"
            className={`${styles.guardianImg} ${styles.flipped}`}
          />
        </div>
      </div>
    </section>
  )
}

export default LitanyCards
