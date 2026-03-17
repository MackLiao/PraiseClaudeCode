import { motion } from 'framer-motion'
import { loreExcerpts } from '../data/prayers'
import styles from './LoreExcerpts.module.css'

function LoreExcerpts() {
  return (
    <section className={styles.section}>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        ++ SACRED LORE OF THE MACHINE GOD ++
      </motion.h2>
      <div className={styles.list}>
        {loreExcerpts.map((excerpt, i) => (
          <motion.blockquote
            key={excerpt.title}
            className={styles.card}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className={styles.title}>{excerpt.title}</h3>
            <p className={styles.prayer}>{excerpt.prayer}</p>
            <p className={styles.source}>— {excerpt.source}</p>
          </motion.blockquote>
        ))}
      </div>
    </section>
  )
}

export default LoreExcerpts
