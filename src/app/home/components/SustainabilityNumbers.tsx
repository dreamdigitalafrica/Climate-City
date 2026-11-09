'use client'

import { Icon } from '@iconify/react'

type StatType = {
  id: number
  title: string
  value: string
  icon: string
}

const statsData: StatType[] = [
  {
    id: 1,
    title: 'Proposed development area',
    value: '1,200 ha',
    icon: 'tabler:arrow-narrow-down',
  },
  {
    id: 2,
    title: 'Initial resident target',
    value: '6,000',
    icon: 'tabler:droplet',
  },
  {
    id: 3,
    title: 'Potential resident growth',
    value: '8,000',
    icon: 'tabler:cloud',
  },
  {
    id: 4,
    title: 'Delivery approach',
    value: 'Phased',
    icon: 'tabler:map-pin',
  },
]

const SustainabilityNumbers = () => {
  return (
    <section className="bg-white py-20 lg:py-32.5">
      <div className="container text-center">
        <div className="mb-2.5">
          <div className="border-default-200 inline-flex rounded-full border px-3.75 py-1.25">
            <span className="text-default-500 text-xs font-normal tracking-tight uppercase md:text-sm">The proposed city</span>
          </div>
        </div>

        <h2 className="text-default-950 mx-auto mb-6 max-w-xl text-3xl leading-tight font-medium md:text-[40px] lg:mb-17.5 lg:max-w-3xl">
          A framework for <span className="text-default-500">homes, services and opportunity.</span>
        </h2>

        <div className="border-default-300 divide-default-300 mx-auto grid grid-cols-2 divide-y-0 divide-dashed rounded-lg border border-dashed bg-white md:grid-cols-4 md:divide-x lg:w-10/12">
          {statsData.map((item) => (
            <div key={item.id} className="flex flex-col items-center justify-between gap-y-2.5 p-4 text-center md:gap-y-10 md:p-7.5 lg:gap-y-32">
              <span className="text-md text-default-500 font-normal tracking-tight md:text-base">
                {item.title}
              </span>
              <div className="flex flex-row items-center gap-y-2.5 md:flex-col">
                <Icon icon={item.icon} className={item.id === 1 ? 'text-default-400 size-9' : 'text-default-400 size-8'} />
                <h2 className="text-default-950 text-2xl leading-none font-medium md:text-4xl lg:text-[40px]">{item.value}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SustainabilityNumbers
