'use client'

import about01 from '../../../../public/assets/new/business-district.webp'
import about02 from '../../../../public/assets/new/solar-building.webp'
import aboutImage02 from '../../../../public/assets/new/courtyard-exchange.webp'
import aboutIcon02 from '@/assets/images/icons/about-icon-02.svg'
import Image from 'next/image'
import Link from 'next/link'

const AboutInfo = () => {
  return (
    <section className="bg-default-100 py-20 lg:py-32.5">
      <div className="container">
        <div className="mx-auto mb-5 max-w-xl text-center md:mb-10 lg:mb-17.5 lg:max-w-3xl">
          <h2 className="text-default-950 mb-5 text-3xl leading-tight font-medium md:text-[34px]">
            Sustainability, <span className="text-default-600 font-medium">grounded in everyday life.</span>
          </h2>
          <div className="text-left space-y-5 text-default-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: "<p>Climate City is a proposed sustainable community in Nasarawa State, Africa, powered by Climate City. Its masterplan brings homes, essential services, enterprise and cultural tourism together.</p><p>Our philosophy is practical: use resources carefully, widen access to opportunity and respect the landscape. Shaded streets, mixed-income neighbourhoods and spaces for local businesses translate those priorities into daily life.</p><p>Development will be phased. Site studies, approvals and specialist partnerships will shape delivery, with infrastructure and long-term care considered from the outset.</p>" }} />
        </div>

        <div className="mx-auto mb-10 grid grid-cols-2 gap-3.75 md:grid-cols-3 md:gap-5 lg:w-5xl lg:grid-cols-12 lg:gap-7.5">
          <div className="h-55 overflow-hidden rounded-3xl md:h-75 lg:col-span-5">
            <Image src={about01} loading="eager" alt="Climate City business district" className="h-full w-full object-cover" />
          </div>

          <div className="h-55 overflow-hidden rounded-3xl md:h-75 lg:col-span-3">
            <Image src={aboutImage02} loading="eager" alt="Climate City sustainable architecture" className="h-full w-full object-cover" />
          </div>

          <div className="col-span-2 h-55 overflow-hidden rounded-3xl md:col-span-1 md:h-75 lg:col-span-4">
            <Image src={about02} loading="eager" alt="Solar-roofed building" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="mx-auto mb-5 flex max-w-5xl flex-col items-center justify-between gap-3.75 md:mb-10 md:flex-row md:items-start md:gap-10 lg:mb-17.5 lg:gap-16">
          <div className="order-2 text-center md:order-1">
            <p className="text-default-500 text-base leading-relaxed font-normal">Inclusion means mixed-income homes, accessible services and opportunities for host communities.</p>
          </div>
          <div className="order-1 flex justify-center md:order-2">
            <Image src={aboutIcon02} loading="eager" alt="Icon" className="mt-5 w-10 md:w-30" />
          </div>
          <div className="order-3 text-center md:order-3">
            <p className="text-default-500 text-base leading-relaxed font-normal">Responsible growth means planning infrastructure, operations and maintenance alongside buildings.</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-y-5 text-center">
          <p className="text-default-600 text-base font-normal">Rooted in Nasarawa. Looking to Africa’s urban future.</p>
          <Link href="/sustainable-design" className="bg-primary-1 hover:bg-default-800 hover:border-primary-1 text-default-800 inline-block rounded-full border border-dashed border-transparent px-5 py-2.5 text-nowrap transition-all duration-300 hover:text-white md:py-3.75">
            Explore sustainable design
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AboutInfo
