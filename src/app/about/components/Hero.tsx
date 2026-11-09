'use client'

import aboutHeroImage from '@/assets/images/about/about-hero-image.jpg'
import heroLeftShape from '@/assets/images/icons/hero-left-shape.svg'
import heroRightShape from '@/assets/images/icons/hero-right-shape.svg'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

type StatType = {
  id: number
  title: string
  value: string
  icon: string
}

const statsData: StatType[] = [
  { id: 1, title: 'Proposed development area', value: '1,200 ha', icon: 'tabler:arrow-narrow-down' },
  { id: 2, title: 'Initial resident target', value: '6,000', icon: 'tabler:droplet' },
  { id: 3, title: 'Potential resident growth', value: '8,000', icon: 'tabler:cloud' },
]

const Hero = () => {
  return (
    <section className="bg-default-950 relative overflow-hidden pt-32 md:pt-36 lg:pt-46">
      <Image src={aboutHeroImage} priority alt="About Image" className="absolute inset-0 z-0 h-full w-full object-cover" />

      <div className="from-dark absolute inset-0 z-10 bg-gradient-to-r to-transparent"></div>

      <div className="relative z-20 container flex flex-col lg:justify-end lg:pb-40">
        <div className="grid w-full grid-cols-1 gap-12 md:gap-5 lg:grid-cols-12 lg:gap-2.5">
          <div className="lg:col-span-7">
            <h1 className="mb-2.5 text-4xl leading-[1.1] font-medium text-white md:text-[80px]">
              About <br className="hidden lg:block" />
              Climate City
            </h1>
            <p className="text-md mb-5 font-normal text-white md:mb-7.5 md:w-lg md:text-base">A proposed 1,200-hectare sustainable community in Nasarawa, Nigeria. Homes, nature, enterprise and culture are brought together through a phased development vision.</p>
            <Link href="/contact" className="bg-primary-1 hover:bg-default-800 hover:border-primary-1 text-default-800 inline-block rounded-full border border-dashed border-transparent px-5 py-2.5 text-nowrap transition-all duration-300 hover:text-white md:py-3.75">
              Get in touch
            </Link>
          </div>

          <div className="flex items-end justify-end lg:col-span-5 lg:mt-0">
            <div className="bg-default-100 relative flex w-full flex-col justify-end rounded-lg p-3.75 md:w-md md:p-5 lg:absolute lg:inset-e-40 lg:bottom-30 lg:-mb-36 lg:w-xl lg:p-7.5">
              <div className="relative">
                <div className="divide-default-300 grid grid-cols-2 gap-2.5 divide-y-0 divide-dashed md:grid-cols-3 md:gap-0 md:divide-x">
                  {statsData.map((item) => (
                    <div
                      key={item.id}
                      className={
                        item.id === 3
                          ? 'col-span-2 flex flex-col justify-between gap-y-2.5 pt-0 first:ps-0 last:pe-0 md:col-span-1 md:gap-y-7.5 md:px-5 lg:gap-y-10 lg:px-10'
                          : 'flex flex-col justify-between gap-y-2.5 first:ps-0 last:pe-0 md:gap-y-7.5 md:px-5 md:pb-0 lg:gap-y-10 lg:px-10'
                      }
                    >
                      <span className="text-md text-default-500 leading-relaxed font-normal tracking-tight md:text-base">
                        {item.title}
                      </span>
                      <div className="flex items-center gap-2">
                        <Icon icon={item.icon} className="text-default-400 size-5 lg:size-8" />
                        <h2 className="text-default-950 leading-none font-medium md:text-xl lg:text-2xl">{item.value}</h2>
                      </div>
                    </div>
                  ))}
                </div>

                <Image src={heroRightShape} loading="eager" alt="Icon" className="absolute -inset-e-8 -bottom-4 block md:-inset-e-9.75 md:-bottom-5 lg:-inset-e-13.75 lg:-bottom-1.5" />
                <Image src={heroLeftShape} loading="eager" alt="Icon" className="absolute -start-8 -bottom-4 block md:-inset-s-9.75 md:-bottom-5 lg:-inset-s-13.75 lg:-bottom-1.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
