'use client'

import riverPoster from '@/assets/images/hero/River.jpg'
import heroLeftShape from '@/assets/images/icons/hero-left-shape.svg'
import heroRightShape from '@/assets/images/icons/hero-right-shape.svg'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="bg-default-950 relative min-h-screen overflow-hidden">
      <video autoPlay muted loop playsInline poster={riverPoster.src} className="absolute inset-0 z-0 h-full w-full object-cover">
        <source src="/River-Landscape.webm" type="video/webm" />
      </video>

      <div className="bg-dark/50 absolute inset-0 z-10"></div>

      <div className="relative z-20 container flex flex-col pt-28 pb-0 md:pt-32 lg:min-h-screen lg:justify-end lg:pt-0 lg:pb-24">
        <div className="grid w-full grid-cols-1 gap-17.5 lg:grid-cols-12 lg:gap-2.5">
          <div className="lg:col-span-7">
            <h1 className="mb-3.75 text-4xl leading-[1.1] font-medium text-white md:mb-5 md:text-[56px] lg:text-[80px]">Climate City. A new way to live.</h1>
            <p className="text-md mb-3.75 font-normal text-white md:mb-7.5 md:w-xl md:text-base lg:w-2xl">A proposed sustainable community in Nigeria, bringing homes, nature, enterprise and culture into one connected plan.</p>
            <Link href="/explore.html" className="bg-primary-1 hover:bg-default-800 hover:border-primary-1 text-default-800 inline-block rounded-full border border-dashed border-transparent px-5 py-2.5 text-nowrap transition-all duration-300 hover:text-white md:py-3.75">
              Explore Climate City
            </Link>
          </div>

          <div className="lg:col-span-5 lg:mt-0">
            <div>
              <Link href="/about" className="relative flex flex-col justify-end rounded-lg bg-white p-3.75 md:w-xl md:p-5 lg:absolute lg:inset-e-40 lg:bottom-30 lg:-mb-36 lg:w-md lg:p-7.5">
                <div className="relative">
                  <h2 className="text-default-800 mb-3.75 text-xl font-medium md:mb-5">A connected vision for Climate City</h2>

                  <div>
                    <img src="/images/blog/blog-01.avif" alt="" className="h-62.5 w-full rounded-lg object-cover md:h-50" />
                  </div>

                  <div className="mt-5 flex items-center gap-4 md:gap-7.5">
                    <div className="space-y-3">
                      <span className="text-default-800 text-sm font-normal">Proposed development area</span>
                      <h2 className="text-default-500 text-xl">1,200 ha</h2>
                    </div>

                    <div className="border-default-400 space-y-3 border-s border-dashed ps-4 md:ps-12">
                      <span className="text-default-800 text-sm font-normal">Delivery approach</span>
                      <h2 className="text-default-500 text-xl">Phased</h2>
                    </div>
                  </div>

                  <Image src={heroRightShape} loading="eager" alt="Icon" className="absolute -inset-e-8 -bottom-4 block md:-inset-e-9.75 md:-bottom-5 lg:-inset-e-13.75 lg:-bottom-1.5" />
                  <Image src={heroLeftShape} loading="eager" alt="Icon" className="absolute -start-8 -bottom-4 block md:-inset-s-9.75 md:-bottom-5 lg:-inset-s-13.75 lg:-bottom-1.5" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
