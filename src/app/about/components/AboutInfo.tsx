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
          <h2 className="text-default-950 mb-5 text-3xl leading-tight font-medium md:text-[40px]">
            An African vision for <span className="text-default-500 font-medium">connected places</span> and <span className="text-default-500 font-medium">everyday opportunity</span>
          </h2>
          <div className="text-left space-y-5 text-default-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: "<p>Climate City is a proposed sustainable community in Nasarawa State, Nigeria, powered by Mikoshel. It brings housing, essential services, enterprise and culture into one connected plan, with the ambition to make resource-conscious living practical, comfortable and economically productive.</p><p>Our philosophy begins with a simple responsibility: the places we build should improve people\u2019s lives while respecting the land and resources they depend on. That means considering the home, the street, the workplace and the wider landscape together\u2014from shade and natural ventilation to reliable services, responsible water use and access to everyday needs.</p><p>Environmental care and economic opportunity belong in the same conversation. We aim to create space for local businesses, skilled work, education and responsible investment, alongside mixed-income homes and shared public places. Host communities, African enterprise and cultural identity are central to that ambition.</p><p>The landscape is part of the city\u2019s infrastructure. Native and climate-adapted planting, connected habitats and site-appropriate water systems will guide a plan that responds to local ecology. Schools, healthcare, markets and cultural destinations will give residents and visitors reasons to learn, work and spend time here.</p><p>Starting in Nigeria, we want to develop a model of urban living that other African communities can learn from and adapt. Delivery will be phased, with site studies, specialist partnerships and measurable performance shaping how the vision becomes reality.</p>" }} />
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
            <p className="text-default-500 text-base leading-relaxed font-normal">We intend to connect mixed-income homes with learning, healthcare, markets and cultural destinations, making everyday needs easier to reach.</p>
          </div>
          <div className="order-1 flex justify-center md:order-2">
            <Image src={aboutIcon02} loading="eager" alt="Icon" className="mt-5 w-10 md:w-30" />
          </div>
          <div className="order-3 text-center md:order-3">
            <p className="text-default-500 text-base leading-relaxed font-normal">Shade, natural ventilation, responsible water use and efficient services will be developed through site studies and specialist partnerships.</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-y-5 text-center">
          <p className="text-default-600 text-base font-normal">Starting in Nigeria, with lessons to share across Africa.</p>
          <Link href="/sustainable-design" className="bg-primary-1 hover:bg-default-800 hover:border-primary-1 text-default-800 inline-block rounded-full border border-dashed border-transparent px-5 py-2.5 text-nowrap transition-all duration-300 hover:text-white md:py-3.75">
            Explore sustainable design
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AboutInfo
