'use client'

import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import blog01 from '../../../../public/assets/new/ribbon-gallery.webp'
import blog02 from '../../../../public/assets/new/wetland-park-dam.webp'
import blog03 from '../../../../public/assets/new/garden-galleria.webp'
import blog05 from '../../../../public/assets/new/climate-commons-university.webp'

type BlogType = {
  id: number
  title: string
  image: StaticImageData
  category: string
  date: string
  link: string
}

const blogsData = [
 {id:1,title:'Shade before cooling',image:blog01,category:'Design',date:'Our approach',link:'/sustainable-design'},
 {id:2,title:'Water, wetlands and resilience',image:blog02,category:'Water',date:'Our approach',link:'/sustainable-design'},
 {id:3,title:'Space for Nigerian enterprise',image:blog03,category:'Enterprise',date:'Our approach',link:'/about'},
 {id:4,title:'Learning beyond the classroom',image:blog05,category:'Education',date:'Our approach',link:'/home#sectors'}
]

const Blog = () => {
  return (
    <section className="bg-white py-20 md:py-25 lg:py-32.5">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-7.5 md:grid-cols-2 md:gap-10 lg:grid-cols-12 lg:gap-12.5">
          <div className="lg:col-span-5">
            <div className="border-default-200 mb-3 inline-flex rounded-full border px-3.75 py-1">
              <span className="text-default-500 text-xs font-normal tracking-tight uppercase md:text-sm">Our thinking</span>
            </div>
            <h2 className="text-default-950 text-3xl leading-tight font-medium md:text-[34px] lg:w-xl">
              Sustainability <span className="text-default-600">in the details.</span>
            </h2>
          </div>

          <div className="group/slider relative w-full px-6 text-end md:px-0 lg:col-span-7">
            <div className="swiper blogSwiper overflow-hidden">
              <Swiper
                modules={[Navigation, Autoplay]}
                className="blogSwiper overflow-hidden"
                loop={true}
                speed={600}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: '.blog-next',
                  prevEl: '.blog-prev',
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 1,
                  },
                  1024: {
                    slidesPerView: 2,
                  },
                }}
              >
                {blogsData.map((item) => (
                  <SwiperSlide key={item.id} className="h-auto!">
                    <Link href={item.link} className="group block w-full text-start">
                      <div className="relative mb-4 aspect-5/5 overflow-hidden rounded-2xl lg:aspect-4/5">
                        <Image src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="from-dark/40 pointer-events-none absolute inset-0 bg-gradient-to-b"></div>
                        <div className="absolute inset-s-5 inset-e-5 top-5 z-10 flex items-center gap-2">
                          <span className="bg-primary-1 text-default-950 inline-flex rounded-full px-2.5 py-1.25 text-sm font-normal">{item.category}</span>

                        </div>
                      </div>
                      <h3 className="text-default-950 text-lg leading-snug font-medium transition-colors duration-300 md:text-xl">{item.title}</h3>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <button type="button" className="blog-prev text-default-400 absolute top-[40%] -left-4 z-10 flex size-15 -translate-y-1/2 items-center justify-center rounded-full bg-white transition-all duration-300 md:-left-8 lg:size-17.5" aria-label="Previous slide">
              <span className="border-default-300 flex size-10 items-center justify-center rounded-full border border-dashed lg:size-12.5">
                <Icon icon="tabler:arrow-left" className="size-5 lg:size-6" />
              </span>
            </button>

            <button type="button" className="blog-next text-default-400 absolute -inset-e-4 top-[40%] z-10 flex size-15 -translate-y-1/2 items-center justify-center rounded-full bg-white transition-all duration-300 md:-right-8 lg:size-17.5" aria-label="Next slide">
              <span className="border-default-300 flex size-10 items-center justify-center rounded-full border border-dashed lg:size-12.5">
                <Icon icon="tabler:arrow-right" className="size-5 lg:size-6" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
