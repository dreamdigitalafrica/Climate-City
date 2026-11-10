'use client'

import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import fleetIcon from '@/assets/images/icons/Fleet-management-icon.svg'
import flowerIcon from '@/assets/images/icons/flower-icon.svg'
import locationIcon from '@/assets/images/icons/location-icon.svg'
import truckIcon from '@/assets/images/icons/truck-icon.svg'

import serviceItem1 from '@/assets/images/blog/service-item-01.svg'
import serviceItem2 from '@/assets/images/blog/service-item-02.svg'
import serviceItem3 from '@/assets/images/blog/service-item-03.svg'
import serviceItem4 from '@/assets/images/blog/service-item-04.svg'

type ServiceType = {
  id: number
  title: string
  desc: string
  icon: StaticImageData
  illustration: StaticImageData
  altIcon: string
  altIllustration: string
}

const servicesData = [
 {id:1,title:'Climate-responsive buildings',desc:'Shade and natural airflow first, to reduce reliance on mechanical cooling.',icon:flowerIcon,illustration:serviceItem1,altIcon:'',altIllustration:'Template illustration'},
 {id:2,title:'Connected mobility',desc:'Shorter everyday journeys through connected walking, cycling and shared transport routes.',icon:truckIcon,illustration:serviceItem2,altIcon:'',altIllustration:'Template illustration'},
 {id:3,title:'Water and landscape',desc:'Capture rain, manage runoff and support planting suited to the site.',icon:locationIcon,illustration:serviceItem3,altIcon:'',altIllustration:'Template illustration'},
 {id:4,title:'Efficient city services',desc:'Plan energy, water and maintenance together for dependable services.',icon:fleetIcon,illustration:serviceItem4,altIcon:'',altIllustration:'Template illustration'}
]

const Services = () => {
  return (
    <section className="bg-dark py-20 text-white md:py-25 lg:py-32.5">
      <div className="container">
        <div className="mb-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between lg:mb-17.5">
          <div className="md:max-w-xl">
            <div className="border-default-500 mb-2.5 inline-flex rounded-full border px-3.75 py-1.25">
              <span className="text-default-500 text-xs font-normal tracking-tight uppercase md:text-sm">Sustainable design</span>
            </div>
            <h2 className="text-3xl leading-tight font-medium text-white md:text-[34px]">
              Designed for comfort.<br />Planned to <span className="text-primary-1">use less.</span>
            </h2>
          </div>

          <div className="flex gap-4">
            <button type="button" className="service-prev border-default-300 flex size-10 items-center justify-center rounded-full border border-dashed text-white transition-all hover:border-white/15 hover:bg-white/30 md:size-12.5" aria-label="Previous slide">
              <Icon icon="tabler:arrow-narrow-left" className="size-5" />
            </button>
            <button type="button" className="service-next border-default-300 flex size-10 items-center justify-center rounded-full border border-dashed text-white transition-all hover:border-white/15 hover:bg-white/30 md:size-12.5" aria-label="Next slide">
              <Icon icon="tabler:arrow-narrow-right" className="size-5" />
            </button>
          </div>
        </div>

        <div className="swiper serviceSwiper overflow-hidden!">
          <Swiper
            modules={[Navigation]}
            className="serviceSwiper overflow-hidden!"
            loop={true}
            speed={600}
            spaceBetween={40}
            slidesPerView={1}
            navigation={{
              nextEl: '.service-next',
              prevEl: '.service-prev',
            }}
            breakpoints={{
              768: {
                slidesPerView: 1.2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {servicesData.map((service, index) => (
              <SwiperSlide key={service.id} className="h-auto!">
                <Link href="/sustainable-design" className="group relative flex w-full flex-col justify-between gap-y-7.5 overflow-hidden rounded-2xl bg-white/3 p-3.75 text-start transition-all duration-300 md:gap-y-12.5 md:px-7.5 md:pt-7.5 md:pb-10 lg:gap-y-37.5">
                  <div className="z-10 flex flex-col items-start gap-y-5">
                    <div>
                      <Image src={service.icon} alt={service.altIcon} className={index === 1 ? 'h-9 w-13' : 'size-9'} />
                    </div>
                    <h3 className="text-2xl font-medium text-white">{service.title}</h3>
                    <p className="text-default-300 mb-2.5 text-base leading-relaxed font-normal">{service.desc}</p>
                    <div className="bg-dark hover:bg-primary-1 hover:text-dark inline-flex rounded-full px-5 py-2.5 font-medium text-white transition-all duration-300">Our design approach</div>
                  </div>
                  <div className="pointer-events-none">
                    <Image src={service.illustration} alt={service.altIllustration} className="h-34" />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Services
