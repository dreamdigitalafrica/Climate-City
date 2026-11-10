'use client'

import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'

import tabIcon1 from '@/assets/images/icons/tab-icon-01.svg'
import tabIcon2 from '@/assets/images/icons/tab-icon-02.svg'
import tabIcon3 from '@/assets/images/icons/tab-icon-03.svg'
import tabIcon4 from '@/assets/images/icons/tab-icon-04.svg'
import tabIcon5 from '@/assets/images/icons/tab-icon-05.svg'

import tabImage1 from '../../../../public/assets/new/courtyard-shops.webp'
import tabImage2 from '../../../../public/assets/new/business-district.webp'
import tabImage3 from '../../../../public/assets/new/discovery-house.webp'
import tabImage4 from '../../../../public/assets/new/wetland-park-dam.webp'
import tabImage5 from '../../../../public/assets/new/earthlight-gallery.webp'

type IndustryType = {
  id: string
  title: string
  icon: StaticImageData
  image: StaticImageData
  description: string
  points: string[]
}

const industriesData = [
 {id:'retail',title:'Homes & community',icon:tabIcon1,image:tabImage1,description:'Neighbourhoods planned around everyday life, with homes, public places and useful services close together.',points:['Mixed-income homes and shared public spaces.','Shade and walking routes between daily destinations.','Local shops and places to meet.','Phased delivery linked to infrastructure readiness.']},
 {id:'manufacturing',title:'Enterprise & livelihoods',icon:tabIcon2,image:tabImage2,description:'Markets and workspaces that connect local skills to opportunity and support a productive Nigerian city.',points:['Space for local businesses and makers.','Markets linked to regional food producers.','Training and enterprise partnerships.','Shared services planned for long-term use.']},
 {id:'healthcare',title:'Health & learning',icon:tabIcon3,image:tabImage3,description:'Education and wellbeing are central to the proposed city, with specialist partners guiding delivery.',points:['Schools and technical learning spaces.','Public libraries and outdoor reading areas.','A phased hospital and healthcare opportunity.','Accessible facilities shaped by community needs.']},
 {id:'food',title:'Nature & water',icon:tabIcon4,image:tabImage4,description:'A landscape-led approach that considers habitats, water and the changing seasons together.',points:['Native and climate-adapted planting.','Rainwater capture and responsible reuse.','Connected green spaces and shaded trails.','Water infrastructure subject to hydrological studies.']},
 {id:'tech',title:'Culture & hospitality',icon:tabIcon5,image:tabImage5,description:'African stories, creative enterprise and welcoming places for residents and visitors.',points:['A proposed museum and cultural centre.','Hotels and waterfront leisure concepts.','Spaces for craft, exchange and events.','Responsible tourism and local sourcing.']}
]

const Industries = () => {
  const [activeTab, setActiveTab] = useState('retail')

  return (
    <section id="sectors" className="bg-default-100 rounded-2xl py-20 md:py-25 lg:py-32.5">
      <div className="container">
        <div className="mb-6 md:max-w-3xl lg:mb-17.5">
          <div className="border-default-200 mb-2.5 inline-flex rounded-full border px-3.75 py-1.25">
            <span className="text-default-500 text-xs font-normal tracking-tight uppercase md:text-sm">The city’s sectors</span>
          </div>
          <h2 className="text-default-950 text-3xl leading-tight font-medium md:text-[40px]">
            Building <span className="text-default-500 font-medium">connected, resource-conscious places</span> for everyday life
          </h2>
        </div>

        <div>
          <nav className="flex flex-wrap gap-3.75 md:gap-5 lg:gap-7.5" aria-label="Tabs" role="tablist">
            {industriesData.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={`${
                  activeTab === item.id ? 'border-default-800 text-default-950 border-dashed bg-white' : 'border-default-300 bg-default-100 text-default-700 border-dashed'
                } hover:border-default-800 inline-flex w-full items-center gap-3 rounded-md border p-2.5 text-base font-normal transition-all hover:bg-white md:w-auto`}
                role="tab"
                aria-selected={activeTab === item.id}
              >
                <span className="bg-default-200 flex size-7.5 items-center justify-center rounded-md lg:size-10">
                  <Image loading="eager" src={item.icon} alt="Icon" className={`${index === 0 ? 'lg:size-4.5' : 'lg:size-5'} size-4`} />
                </span>
                {item.title}
              </button>
            ))}
          </nav>

          <div className="mt-10">
            {industriesData.map((item) => (
              <div key={item.id} className={activeTab === item.id ? '' : 'hidden'} role="tabpanel">
                <div className="rounded-3xl bg-white p-3.75 md:p-5 lg:p-10">
                  <div className="grid items-center gap-6.25 md:grid-cols-2 md:gap-10 lg:gap-16">
                    <div className="group overflow-hidden rounded-xl">
                      <Image src={item.image} alt={item.title} className="h-50 w-full rounded-lg object-cover md:h-102 lg:h-auto" />
                    </div>
                    <div className="flex h-full flex-col justify-between">
                      <div>
                        <h3 className="text-default-950 mb-3.75 text-xl font-medium md:mb-5 md:text-3xl">{item.title}</h3>
                        <p className="text-md text-default-500 mb-5 leading-relaxed md:text-base">{item.description}</p>
                      </div>
                      <div className="space-y-3.75">
                        {item.points.map((point, idx) => (
                          <div key={idx} className="flex items-start gap-2.5">
                            <div>
                              <Icon icon="tabler:sun-high-filled" className="text-default-800 mt-1 size-4.5 md:size-5.5 lg:mt-0" />
                            </div>
                            <p className="text-md text-default-500 leading-normal md:text-base">{point}</p>
                          </div>
                        ))}
                      </div>
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

export default Industries
