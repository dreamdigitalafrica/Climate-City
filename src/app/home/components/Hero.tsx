'use client'

import type { CSSProperties } from 'react'

const title = 'Welcome to the Climate City'
const lines = ['Welcome to the', 'Climate City']
export default function Hero() {
  return (
    <section className="welcome-hero bg-default-950 relative min-h-screen overflow-hidden">
      <picture>
        <source media="(max-width: 640px)" srcSet="/assets/new/cultural-centre-1024.webp" />
        <img src="/assets/new/cultural-centre.webp" alt="Climate City cultural centre with shaded terraces and landscaped gardens" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/15" />
      <div className="container relative z-10 flex min-h-screen items-end pt-32 pb-20 md:pb-28">
        <div className="welcome-content">
          <h1 className="welcome-heading" aria-label={title}>
            {lines.map((line, lineIndex) => (
              <span key={line} aria-hidden="true" className={lineIndex === 0 ? 'welcome-intro' : 'welcome-name'}>
                {Array.from(line).map((letter, index) => (
                  <span key={index} className="welcome-letter" style={{ '--letter-delay': `${((index + (lineIndex ? lines[0].length : 0)) / lines.join('').length) * 1200}ms` } as CSSProperties}>{letter === ' ' ? '\u00a0' : letter}</span>
                ))}
              </span>
            ))}
          </h1>
        </div>
      </div>
    </section>
  )
}
