'use client'

import serviceHeroImage from '../../../../../public/assets/new/climate-forum.webp'
import heroLeftShape from '@/assets/images/icons/hero-left-shape.svg'
import heroRightShape from '@/assets/images/icons/hero-right-shape.svg'
import Image from 'next/image'
import Link from 'next/link'

type OfferItemType = {
  id: number
  label: string
}

const offersData = [{"id": 1, "label": "Shaded streets"}, {"id": 2, "label": "Passive design"}, {"id": 3, "label": "Efficient buildings"}, {"id": 4, "label": "Connected habitats"}, {"id": 5, "label": "Water stewardship"}, {"id": 6, "label": "Local materials"}, {"id": 7, "label": "Solar energy"}, {"id": 8, "label": "Walkable neighbourhoods"}, {"id": 9, "label": "Long-term maintenance"}]

const Hero = () => {
  return (
    <section className="relative flex flex-col justify-between overflow-hidden pt-10 lg:pt-22">
      <Image src={serviceHeroImage} priority alt="Sustainable design" className="absolute inset-0 z-0 h-full w-full object-cover" />

      <div className="bg-dark/60 absolute inset-0 z-10"></div>

      <div className="relative z-20 container flex h-full grow flex-col items-center justify-end pt-16 text-center md:pt-24">
        <div className="mx-auto mb-7.5 max-w-3xl md:mb-10 lg:mb-35">
          <h1 className="mb-7.5 text-4xl leading-[1.1] font-medium text-white md:text-[80px]">Sustainable design</h1>
          <p className="text-md mx-auto mb-5 max-w-xl leading-relaxed font-normal text-white md:text-base">Designing for Nigeria’s climate, resources and everyday life, with people and the landscape considered together.</p>
          <Link href="/contact" className="bg-primary-1 hover:bg-default-800 hover:border-primary-1 text-default-800 inline-block rounded-full border border-dashed border-transparent px-5 py-2.5 font-medium text-nowrap transition-all duration-300 hover:text-white md:py-3.75">
            Discuss a partnership
          </Link>
        </div>

        <div className="bg-default-50 border-default-200/50 relative mx-auto mt-auto rounded-t-xl border border-b-0 px-2.5 pt-2.5 shadow-lg md:px-5 md:pt-5 lg:w-332 lg:px-7 lg:pt-8">
          <Image src={heroLeftShape} loading="eager" alt="Icon" className="absolute -start-[25px] bottom-0 size-[25px]" />
          <Image src={heroRightShape} loading="eager" alt="Icon" className="absolute -end-[25px] bottom-0 size-[25px]" />

          <h2 className="text-default-900 mb-5 text-center text-xl font-medium md:text-3xl">What guides the plan</h2>

          <div className="flex flex-wrap items-center justify-center gap-2.5 md:gap-3.75 lg:gap-5">
            {offersData.map((item) => (
              <div key={item.id} className="border-default-300 text-default-800 text-md rounded-md border border-dashed p-1.25 font-normal select-none lg:px-5 lg:py-2">
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
