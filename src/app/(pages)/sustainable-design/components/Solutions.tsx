'use client'

import serviceImage1 from '@/assets/images/blog/service-image-01.webp'
import Image from 'next/image'

type StrategyListItemType = {
  id: number
  title: string
  description: string
}

type RoadmapCardType = {
  id: number
  title: string
  description: string
}

const strategyListData = [{"id": 1, "title": "Shade and comfort: ", "description": "Overhangs, screens and orientation considered before mechanical cooling."}, {"id": 2, "title": "Water stewardship: ", "description": "Capture, drainage and reuse assessed against local rainfall and hydrology."}, {"id": 3, "title": "Material choices: ", "description": "Durability, repairability and responsible sourcing inform procurement."}, {"id": 4, "title": "Long-term care: ", "description": "Maintenance and efficient services planned alongside construction."}]

const roadmapCardsData = [{"id": 1, "title": "Understand the site", "description": "Ecology, communities, climate and water guide the starting point."}, {"id": 2, "title": "Design for daily life", "description": "Connect homes and essential services through shaded public spaces."}, {"id": 3, "title": "Build responsibly", "description": "Assess material impacts, procurement and practical construction methods."}, {"id": 4, "title": "Learn through operation", "description": "Use metering, maintenance and feedback to improve performance."}]

const Solutions = () => {
  return (
    <section className="bg-default-50 py-20 md:py-25 lg:py-32">
      <div className="container">
        <div className="mb-7.5 grid grid-cols-1 items-start gap-7.5 md:grid-cols-2 lg:mb-12.5 lg:items-center lg:gap-20">
          <div>
            <div className="w-full overflow-hidden rounded-3xl shadow-sm lg:aspect-5/3">
              <Image src={serviceImage1} priority alt="Strategy" className="h-52 w-full object-cover md:h-154 lg:h-full" />
            </div>
          </div>

          <div>
            <h2 className="text-default-950 mb-2.5 text-3xl leading-[1.2] font-medium md:mb-5 md:text-[40px]">Sustainability begins with the plan</h2>
            <p className="text-default-500 mb-5 text-base leading-relaxed font-normal">
              Climate City’s proposed approach brings buildings, public space and infrastructure together. Each measure will be tested through site studies and engineering, with performance targets established as the design develops.
            </p>

            <ul className="list text-default-500 list-inside list-disc space-y-2.5 font-normal">
              {strategyListData.map((item) => (
                <li key={item.id}>
                  <strong className="font-semibold">{item.title}</strong>
                  {item.description}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-3 lg:grid-cols-4 lg:gap-25">
          {roadmapCardsData.map((item) => (
            <div key={item.id} className="text-start">
              <h3 className="text-default-950 mb-2.5 text-lg font-medium md:mb-3.75 md:text-[22px]">{item.title}</h3>
              <p className="text-default-500 text-base leading-relaxed font-normal">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions
