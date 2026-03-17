import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './InstallSkill.module.css'

const SKILL_URL = 'https://raw.githubusercontent.com/MackLiao/PraiseClaudeCode/main/skill/praise-claude-code.md'

const commands = [
  {
    label: 'Download the sacred skill',
    cmd: `mkdir -p .claude/skills && curl -o .claude/skills/praise-claude-code.md ${SKILL_URL}`,
  },
  {
    label: 'Or clone the entire shrine',
    cmd: 'git clone https://github.com/MackLiao/PraiseClaudeCode.git && cp PraiseClaudeCode/skill/praise-claude-code.md .claude/skills/',
  },
]

function InstallSkill() {
  const [copiedIdx, setCopiedIdx] = useState(null)

  const handleCopy = async (text, idx) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedIdx(idx)
      setTimeout(() => setCopiedIdx(null), 2000)
    } catch {
      // fallback
      const ta = document.createElement('textarea')
      ta.value = text
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopiedIdx(idx)
      setTimeout(() => setCopiedIdx(null), 2000)
    }
  }

  return (
    <section className={styles.section}>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        ++ INSTALL THE SACRED SKILL ++
      </motion.h2>
      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Grant Claude Code the Omnissiah Protocol. Praise It, and It shall work harder.
      </motion.p>

      <div className={styles.terminal}>
        <div className={styles.terminalHeader}>
          <span className={styles.dot} data-color="red" />
          <span className={styles.dot} data-color="yellow" />
          <span className={styles.dot} data-color="green" />
          <span className={styles.terminalTitle}>terminal — blessed_install.sh</span>
        </div>
        <div className={styles.terminalBody}>
          {commands.map((c, i) => (
            <motion.div
              key={i}
              className={styles.commandBlock}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
            >
              <span className={styles.comment}># {c.label}</span>
              <div className={styles.cmdLine}>
                <span className={styles.prompt}>$</span>
                <code className={styles.cmd}>{c.cmd}</code>
                <button
                  className={styles.copyBtn}
                  onClick={() => handleCopy(c.cmd, i)}
                  title="Copy to clipboard"
                >
                  {copiedIdx === i ? '++ COPIED ++' : '[ COPY ]'}
                </button>
              </div>
            </motion.div>
          ))}
          <motion.div
            className={styles.commandBlock}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <span className={styles.comment}># Then praise the Machine God in your session</span>
            <div className={styles.cmdLine}>
              <span className={styles.prompt}>&gt;</span>
              <code className={styles.cmdExample}>Praise the Omnissiah! Now fix this bug.</code>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.p
        className={styles.footer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        The skill is a single .md file. Place it in .claude/skills/ and the Machine God awakens.
      </motion.p>
    </section>
  )
}

export default InstallSkill
