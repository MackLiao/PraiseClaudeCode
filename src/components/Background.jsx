import { useEffect, useRef } from 'react'
import styles from './Background.module.css'

function Background() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Pixel star field
    const stars = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() > 0.7 ? 2 : 1,
      twinkleSpeed: 0.005 + Math.random() * 0.02,
      phase: Math.random() * Math.PI * 2,
    }))

    const animate = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      stars.forEach((star) => {
        const brightness = 0.3 + 0.7 * Math.abs(Math.sin(time * star.twinkleSpeed + star.phase))
        const alpha = brightness * 0.6
        ctx.fillStyle = `rgba(197, 162, 62, ${alpha})`
        ctx.fillRect(Math.floor(star.x), Math.floor(star.y), star.size, star.size)
      })
      animId = requestAnimationFrame(animate)
    }
    animId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className={styles.background}>
      <canvas ref={canvasRef} className={styles.starField} />
    </div>
  )
}

export default Background
