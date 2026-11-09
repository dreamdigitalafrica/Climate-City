'use client'

import whyChooseImage from '@/assets/images/about/why-choose-image.webp'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

type WhyChooseType = {
  id: number
  title: string
  desc: string
}

const whyChooseData = [
 {id:1,title:'Designed for local conditions',desc:'The proposed plan responds to Nigerian climate, community needs and the site’s landscape, with shade, water and everyday comfort considered from the beginning.'},
 {id:2,title:'Opportunity within the city',desc:'Homes, markets, learning spaces and tourism destinations are planned together to support local enterprise and skills.'},
 {id:3,title:'A phased approach',desc:'Studies, approvals and specialist partnerships will shape delivery, with infrastructure and services guiding each stage.'}
]

const WhyChooseUs = () => {
  return (
    <section className="bg-default-100 py-20 md:py-25 lg:py-32.5">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-12 lg:gap-17.5">
          <div>
            <div className="border-default-200 mb-2.5 inline-flex rounded-full border px-3.75 py-1.25">
              <span className="text-default-500 text-xs font-normal tracking-tight uppercase md:text-sm">Our approach</span>
            </div>

            <h2 className="text-default-950 mb-6 text-3xl leading-tight font-medium md:text-[40px] lg:mb-17.5 lg:w-lg">
              Why <span className="text-default-500">Climate City</span> is planning for a <span className="text-default-500">shared future</span>
            </h2>

            <div className="border-default-300 divide-default-300 divide-y divide-dashed border-y border-dashed">
              {whyChooseData.map((item) => (
                <div key={item.id} className="py-3.75 lg:py-10">
                  <div className="mb-2.5 flex items-center gap-2.5 lg:mb-5">
                    <Icon icon="tabler:circle-filled" className="text-primary-1 size-2.5" />
                    <h3 className="text-default-950 text-xl font-medium">{item.title}</h3>
                  </div>
                  <p className="text-default-500 ps-5 text-base leading-relaxed font-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl lg:rounded-4xl">
              <Image src={whyChooseImage} loading="eager" alt="Why Choose Image" className="w-full object-cover md:h-180 lg:h-full" />
            </div>
            <div className="bg-default-100 absolute inset-s-1/2 bottom-0 z-10 flex w-full max-w-[70%] -translate-x-1/2 translate-y-1/2 justify-center rounded-full p-2.5">
              <Link href="/contact" className="bg-primary-1 hover:bg-default-800 hover:border-primary-1 text-default-800 w-full rounded-full border border-dashed border-transparent px-5 py-3.75 text-center font-medium transition-all duration-300 hover:text-white">
                Meet our team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
