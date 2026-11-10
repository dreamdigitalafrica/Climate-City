'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function Cta() {
  const video = useRef<HTMLVideoElement>(null)
  const [paused, setPaused] = useState(false)
  const manualPause = useRef(false)
  useEffect(() => {
    const el = video.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    manualPause.current = reduce
    setPaused(reduce)
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !manualPause.current) el.play().catch(() => setPaused(true))
      else el.pause()
    }, { threshold: .1 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  function toggle() {
    const el = video.current
    if (!el) return
    if (el.paused) { manualPause.current = false; el.play().then(() => setPaused(false)).catch(() => setPaused(true)) }
    else { manualPause.current = true; el.pause(); setPaused(true) }
  }
  return (
    <section className="dam-film relative overflow-hidden py-24 md:py-32 lg:py-45">
      <video ref={video} muted loop playsInline preload="metadata" poster="/assets/new/wetland-park-dam.webp" className="absolute inset-0 h-full w-full object-cover" aria-label="Drone flyover of the Climate City Wetland Park Dam concept">
        <source src="/assets/video/wetland-park-dam.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/45" />
      <div className="container relative z-10 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-white text-3xl md:text-5xl lg:text-5xl font-medium leading-tight tracking-tight">Water sustains the city.</h2>
          <p className="mx-auto mt-6 mb-8 max-w-xl text-base md:text-lg leading-relaxed text-white/95">Our wetland and reservoir concept brings water management, habitat and public space into one landscape.</p>
          <Link href="/contact" className="inline-flex rounded-full bg-primary-1 px-6 py-3 text-default-950 font-medium hover:bg-white transition-colors">Start a conversation</Link>
        </div>
      </div>
      <button type="button" onClick={toggle} aria-label={paused ? 'Play landscape video' : 'Pause landscape video'} className="absolute right-5 bottom-5 z-20 rounded-full border border-white/40 bg-black/35 px-4 py-2 text-sm text-white">{paused ? 'Play' : 'Pause'}</button>
    </section>
  )
}
