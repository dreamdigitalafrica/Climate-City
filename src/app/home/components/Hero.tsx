'use client'

import { useEffect, useState } from 'react'

const title = 'Welcome to Climate City'
export default function Hero() {
  const [length, setLength] = useState(title.length)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    setLength(0)
    const start = performance.now()
    let frame: number
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / 8000)
      setLength(Math.floor(progress * title.length))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [])
  return (
    <section className="welcome-hero bg-default-950 relative min-h-screen overflow-hidden">
      <picture>
        <source media="(max-width: 640px)" srcSet="/assets/new/cultural-centre-1024.webp" />
        <img src="/assets/new/cultural-centre.webp" alt="Climate City cultural centre with shaded terraces and landscaped gardens" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-black/20" />
      <div className="container relative z-10 flex min-h-screen items-end pt-32 pb-20 md:pb-28">
        <h1 className="welcome-heading" aria-label={title}>
          <span aria-hidden="true" className="welcome-intro">{title.slice(0, Math.min(length, 10)) || '\u00a0'}</span>
          <span aria-hidden="true" className="welcome-name">{title.slice(11, length) || '\u00a0'}<span className={length < title.length ? 'typing-caret' : 'typing-caret finished'} /></span>
        </h1>
      </div>
    </section>
  )
}
