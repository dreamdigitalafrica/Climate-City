'use client'

import technologyImage from '@/assets/images/blog/technology-image.png'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

type TechnologyFeatureType = {
  id: number
  title: string
}

const technologyFeaturesData: TechnologyFeatureType[] = [
  { id: 1, title: 'Solar and battery storage' },
  { id: 2, title: 'Efficient buildings and cooling' },
  { id: 3, title: 'Water capture and safe reuse' },
  { id: 4, title: 'Metering and service monitoring' },
  { id: 5, title: 'Shared mobility connections' },
]

const Technology = () => {
  return (
    <section className="pb-20 lg:pb-32.5">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 lg:gap-0">
          <div className="flex flex-col items-start md:col-span-12 lg:col-span-4">
            <h2 className="text-default-950 mb-5 text-3xl leading-tight font-medium md:text-[40px] lg:mb-7.5">
              <span className="text-default-500">Low-emission</span> city services
              <br />
              powered by <span className="text-default-500">innovation</span>
            </h2>

            <Link
              href="/sustainable-design"
              className="bg-primary-1 hover:bg-default-800 hover:border-primary-1 text-default-800 inline-flex rounded-full border border-dashed border-transparent px-5 py-2.5 text-center font-medium transition-all duration-300 hover:text-white md:py-3.75"
            >
              Explore the approach
            </Link>
          </div>

          <div className="flex justify-center md:col-span-6 lg:col-span-5 lg:me-32">
            <div className="w-full">
              <Image src={technologyImage} loading="eager" alt="Technology Image" className="h-auto w-full object-contain" />
            </div>
          </div>

          <div className="flex flex-col gap-y-5 md:col-span-6 md:gap-y-7.5 lg:col-span-3 lg:gap-y-22.5">
            <p className="text-default-500 text-base leading-relaxed font-normal">Climate City plans to combine practical design with efficient infrastructure. Systems will be selected through site studies and specialist engineering.</p>

            <div className="space-y-3.75">
              {technologyFeaturesData.map((item) => (
                <div key={item.id} className="flex items-center gap-2.5">
                  <Icon icon="tabler:sun-high-filled" className="text-default-800 size-4.5" />
                  <span className="text-default-500 text-base font-normal">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technology
