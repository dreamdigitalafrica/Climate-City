'use client'

import location1 from '@/assets/images/blog/location-01.jpg'
import location2 from '@/assets/images/blog/location-02.jpg'
import location3 from '@/assets/images/blog/location-03.jpg'
import location4 from '@/assets/images/blog/location-04.jpg'
import mapImage from '@/assets/images/blog/map-image.png'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type LocationItemType = {
  id: number
  title: string
  image: StaticImageData
  email: string
  phone: string
  phonelink: string
  desktopPosition: string
}

const locationsData: LocationItemType[] = [
  {
    id: 1,
    title: 'General enquiries',
    image: location1,
    email: 'enquires@theclimatecity.com',
    phone: '+234 708 206 4914',
    phonelink: '+2347082064914',
    desktopPosition: 'left-[6%] top-[32%]',
  },
  {
    id: 2,
    title: 'Partnership enquiries',
    image: location2,
    email: 'enquires@theclimatecity.com',
    phone: '+234 708 206 4914',
    phonelink: '+2347082064914',
    desktopPosition: 'left-[36%] top-[8%]',
  },
  {
    id: 3,
    title: 'Investor enquiries',
    image: location3,
    email: 'enquires@theclimatecity.com',
    phone: '+234 708 206 4914',
    phonelink: '+2347082064914',
    desktopPosition: 'left-[32%] top-[65%]',
  },
  {
    id: 4,
    title: 'Visitor enquiries',
    image: location4,
    email: 'enquires@theclimatecity.com',
    phone: '+234 708 206 4914',
    phonelink: '+2347082064914',
    desktopPosition: 'left-[68%] top-[68%]',
  },
]

const MapLocation = () => {
  return (
    <section className="bg-dark relative overflow-hidden py-20 text-white md:py-25 lg:py-32">
      <div className="container">
        <div className="mx-auto mb-6 max-w-xl text-center lg:mb-17.5 lg:max-w-3xl">
          <h2 className="text-3xl leading-[1.2] font-medium text-white md:text-[34px]">
            Connect with <span className="text-primary-1">the right conversation</span> about Climate City
          </h2>
        </div>

        <div className="relative mx-auto hidden w-full max-w-6xl lg:block">
          <Image src={mapImage} alt="Template map placeholder; enquiry categories are not office locations" className="pointer-events-none h-auto w-full select-none" />

          <div className="absolute inset-0">
            {locationsData.map((item) => (
              <div key={item.id} className={`absolute ${item.desktopPosition} z-20`}>
                <div className="hs-tooltip inline-block [--placement:bottom-start] [--trigger:click]">
                  <button type="button" className="hs-tooltip-toggle text-default-950 hover:bg-default-100 relative block cursor-pointer rounded-md bg-white px-2.5 py-1 text-xs font-semibold whitespace-nowrap shadow-lg transition-colors md:px-3.75 md:py-1.5">
                    {item.title}
                    <span className="absolute -bottom-1.5 left-6 -translate-x-1/2 border-x-[6px] border-t-[6px] border-x-transparent border-t-white"></span>
                  </button>
                  <div className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible invisible absolute z-30 inline-block w-[280px] rounded-2xl bg-white p-4.5 text-start opacity-0 shadow-xl transition-[opacity,margin] duration-300">
                    <div className="absolute -top-1 left-6 size-2.5 -translate-x-1/2 rotate-45 bg-white"></div>
                    <div className="flex flex-col gap-2.5">
                      <h4 className="text-md text-default-900 font-medium">{item.title}</h4>
                      <div className="bg-default-100 h-42 overflow-hidden rounded-xl md:h-24">
                        <Image src={item.image} alt={item.title} className="h-full w-full object-cover" />
                      </div>
                      <div className="text-default-800 flex flex-col gap-1 text-sm font-normal">
                        <Link href="mailto:enquires@theclimatecity.com" className="hover:text-primary-1 transition-colors">
                          {item.email}
                        </Link>
                        <Link href={`tel:${item.phonelink}`} className="hover:text-primary-1 transition-colors">
                          {item.phone}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Image src={mapImage} alt="Template map placeholder; enquiry categories are not office locations" className="pointer-events-none block h-auto w-full select-none lg:hidden" />

        <div className="mt-8 block md:mt-12 lg:hidden">
          <div className="grid grid-cols-1 justify-center justify-items-center gap-6.25 md:grid-cols-3">
            {locationsData.map((item) => (
              <div key={`mobile-${item.id}`} className={`flex w-full flex-col items-start gap-y-4 md:max-w-[280px] md:items-center ${item.id === 4 ? 'sm:col-span-2 sm:mt-4 md:col-span-1 md:mt-0' : ''}`}>
                <div className="text-default-950 relative rounded-full bg-white px-3.75 py-1.5 text-xs font-normal whitespace-nowrap shadow-lg">
                  {item.title}
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 border-x-[6px] border-t-[6px] border-x-transparent border-t-white"></span>
                </div>
                <div className="w-full rounded-xl bg-white p-2.5 text-start shadow-xl md:p-4.5">
                  <div className="flex flex-col gap-2.5">
                    <h4 className="text-md text-default-900 font-medium">{item.title}</h4>
                    <div className="bg-default-100 h-42 overflow-hidden rounded-xl md:h-24">
                      <Image src={item.image} alt={item.title} className="h-full w-full object-cover" />
                    </div>
                    <div className="text-default-800 flex flex-col gap-1 text-sm font-normal">
                      <Link href="mailto:enquires@theclimatecity.com" className="hover:text-primary-1 transition-colors">
                        {item.email}
                      </Link>
                      <Link href={`tel:${item.phonelink}`} className="hover:text-primary-1 transition-colors">
                        {item.phone}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MapLocation
