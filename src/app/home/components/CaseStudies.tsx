'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

const caseStudiesData = [
 {id:1,title:'Museum & Cultural Centre',image:'/assets/new/earthlight-gallery.webp',alt:'Climate City architectural concept',caption:"African art, craft and shared cultural space."},
 {id:2,title:'Homes & Neighbourhoods',image:'/assets/new/courtyard-shops.webp',alt:'Climate City architectural concept',caption:"Neighbourhoods planned around daily needs."},
 {id:3,title:'Markets & Local Enterprise',image:'/assets/new/garden-galleria.webp',alt:'Climate City architectural concept',caption:"Places for local businesses to reach new customers."},
 {id:4,title:'Water & Green Spaces',image:'/assets/new/wetland-park-dam.webp',alt:'Climate City architectural concept',caption:"Water management with space for nature and recreation."},
 {id:5,title:'Hotel & Waterfront',image:'/assets/hotel-1.webp',alt:'Climate City architectural concept',caption:"Hospitality connected to culture and the landscape."}
]

const CaseStudies = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current
      const track = trackRef.current
      if (!container || !track) return

      if (window.innerWidth < 1024) {
        track.style.transform = ''
        return
      }

      const rect = container.getBoundingClientRect()
      const containerTop = rect.top + window.scrollY
      const containerHeight = container.offsetHeight
      const windowHeight = window.innerHeight

      const scrolled = window.scrollY - containerTop
      const maxScroll = containerHeight - windowHeight

      const maxTranslate = track.scrollWidth - window.innerWidth

      if (scrolled < 0) {
        track.style.transform = 'translate3d(0px, 0px, 0px)'
      } else if (scrolled > maxScroll) {
        track.style.transform = `translate3d(-${maxTranslate}px, 0px, 0px)`
      } else {
        const progress = scrolled / maxScroll
        const translate = progress * maxTranslate
        track.style.transform = `translate3d(-${translate}px, 0px, 0px)`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <section ref={containerRef} id="case-study-sticky-container" className="bg-default-100 relative w-full pt-25 md:pb-20 lg:h-[250vh] lg:pt-32.5 lg:pb-28">
      <div className="w-full lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-center lg:overflow-hidden">
        <div className="container mb-6 lg:mb-17.5">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="border-default-200 mb-3 inline-flex rounded-full border px-3.75 py-1">
                <span className="text-default-500 text-sm font-normal tracking-tight uppercase">Destinations</span>
              </div>
              <h2 className="text-default-950 text-3xl leading-tight font-medium md:text-[34px]">
                Discover <span className="text-default-600">Climate City</span>
              </h2>
            </div>
            <div className="shrink-0">
              <Link
                href="/explore.html"
                className="bg-primary-1 hover:bg-default-800 hover:border-primary-1 text-default-800 inline-flex rounded-full border border-dashed border-transparent px-5 py-2.5 text-center font-medium transition-all duration-300 hover:text-white md:py-3.75"
              >
                Explore the masterplan
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full overflow-hidden">
          <div
            ref={trackRef}
            id="case-study-track"
            className="scrollbar-hide grid w-full grid-cols-1 gap-7.5 px-4 pb-12 transition-transform duration-75 ease-out will-change-transform md:grid-cols-2 md:px-5 lg:flex lg:w-max lg:snap-none lg:snap-x lg:snap-mandatory lg:gap-12.5 lg:overflow-visible lg:overflow-x-auto lg:px-40 lg:pb-0"
          >
            {caseStudiesData.map((item) => (
              <div key={item.id} className="flex w-full shrink-0 flex-col justify-between overflow-hidden rounded-2xl bg-white transition-all duration-300 lg:max-w-200 lg:snap-start">
                <div className="grid grid-cols-1 items-stretch gap-5 p-3.75 md:grid-cols-2 md:gap-7.5 md:p-5 lg:px-7.5 lg:py-5.5">
                  <div className="flex flex-col gap-y-2.5 md:gap-y-5">
                    <h3 className="text-default-950 text-xl leading-snug font-medium lg:text-2xl">{item.title}</h3>

                    <Link href={`/explore.html#${["museum", "homes", "market", "landscape", "hotel"][item.id - 1]}`} className="text-default-700 hover:text-default-900 inline-flex items-center gap-1.5 font-normal transition-colors md:mt-0">
                      View destination
                    </Link>
                  </div>

                  <div className="h-80 overflow-hidden rounded-2xl md:h-39 lg:h-110">
                    <img src={item.image} alt={item.alt} className="h-full w-full object-cover" />
                  </div>

                  <p className="text-default-700 text-sm leading-relaxed md:col-span-2">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
