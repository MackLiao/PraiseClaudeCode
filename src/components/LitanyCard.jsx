import { motion } from 'framer-motion'
import styles from './LitanyCard.module.css'

function LitanyCard({ title, text, index }) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className={styles.cogIcon}>&#x2699;</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </motion.div>
  )
}

export default LitanyCard
