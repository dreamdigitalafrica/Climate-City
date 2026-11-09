'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

type CaseStudyStatType = {
  label: string
  value: string
}

type CaseStudyType = {
  id: number
  title: string
  image: string
  alt: string
  stats: CaseStudyStatType[]
}

const caseStudiesData = [
 {id:1,title:'Museum & Cultural Centre',image:'/images/about/case-study-01.avif',alt:'Template image placeholder',stats:[{label:'Experience',value:'Culture'},{label:'Gallery concept',value:'7 spaces'},{label:'Status',value:'Proposed'}]},
 {id:2,title:'Homes & Neighbourhoods',image:'/images/about/case-study-02.avif',alt:'Template image placeholder',stats:[{label:'Approach',value:'Mixed-use'},{label:'Delivery',value:'Phased'}]},
 {id:3,title:'Markets & Local Enterprise',image:'/images/about/case-study-03.avif',alt:'Template image placeholder',stats:[{label:'Focus',value:'Livelihoods'},{label:'Connections',value:'Local'}]},
 {id:4,title:'Water & Green Spaces',image:'/images/about/case-study-04.avif',alt:'Template image placeholder',stats:[{label:'Approach',value:'Site-led'},{label:'Focus',value:'Resilience'},{label:'Status',value:'Proposed'}]},
 {id:5,title:'Hotel & Waterfront',image:'/images/about/case-study-05.webp',alt:'Template image placeholder',stats:[{label:'Experience',value:'Hospitality'},{label:'Status',value:'Concept'}]}
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
              <h2 className="text-default-950 text-3xl leading-tight font-medium md:text-[40px]">
                A connected city: <span className="text-default-500">places to discover</span> across the masterplan
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

                    <Link href="/explore.html" className="text-default-500 hover:text-default-900 inline-flex items-center gap-1.5 font-normal transition-colors md:mt-0">
                      View detail
                    </Link>
                  </div>

                  <div className="h-80 overflow-hidden rounded-2xl md:h-39 lg:h-110">
                    <img src={item.image} alt={item.alt} className="h-full w-full object-cover" />
                  </div>

                  <div
                    className={`border-default-200 bg-default-50/30 divide-default-200 grid grid-cols-1 gap-x-7.5 gap-y-5 divide-y rounded-lg border border-dashed p-3.75 md:col-span-2 lg:divide-y-0 lg:divide-dashed lg:p-5 ${
                      item.stats.length === 3 ? 'lg:grid-cols-3 lg:divide-x' : 'lg:grid-cols-2 lg:divide-x'
                    }`}
                  >
                    {item.stats.map((stat, index) => (
                      <div key={index} className="flex flex-col justify-between gap-y-2.5 lg:gap-y-5">
                        <span className="text-default-800 text-sm font-normal">{stat.label}</span>
                        <h4 className="text-default-500 mb-5 text-3xl font-medium lg:mb-0 lg:text-[40px]">{stat.value}</h4>
                      </div>
                    ))}
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

export default CaseStudies
