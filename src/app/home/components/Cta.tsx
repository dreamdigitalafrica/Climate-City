'use client'

import ctaBgImage from '@/assets/images/blog/cta-bg-image.webp'
import Link from 'next/link'

const Cta = () => {
  return (
    <section className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-15 md:py-25 lg:py-45" style={{ backgroundImage: `url(${ctaBgImage.src})` }}>
      <div className="bg-dark/60 absolute inset-0 z-0"></div>

      <div className="container-small relative z-10 mx-auto text-center">
        <div className="mx-auto flex max-w-3xl flex-col items-center">
          <h2 className="mb-3.75 max-w-3xl text-3xl leading-[1.1] font-medium tracking-tight text-white md:text-5xl lg:text-6xl">Help shape a more sustainable African city</h2>
          <p className="md:text-md mb-5 max-w-lg text-sm leading-relaxed font-normal text-white md:mb-7.5 lg:mb-10">Connect with Mikoshel about the vision, partnerships and proposed opportunities within Climate City.</p>
          <Link href="/contact" className="bg-primary-1 hover:bg-default-800 hover:border-primary-1 text-default-800 inline-flex rounded-full border border-dashed border-transparent px-5 py-2.5 text-center font-medium transition-all duration-300 hover:text-white md:py-3.75">
            Start a conversation
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Cta
