'use client'

type TagType = {
  id: number
  name: string
}

const tagsData: TagType[] = [
  { id: 1, name: 'Shaded streets' },
  { id: 2, name: 'Local enterprise' },
  { id: 3, name: 'Efficient services' },
  { id: 4, name: 'Habitat care' },
  { id: 5, name: 'Clean air' },
  { id: 6, name: 'Skills and learning' },
  { id: 7, name: 'Carbon footprint' },
  { id: 8, name: 'Positive impact' },
]

const MissionVision = () => {
  return (
    <section className="bg-white py-20 lg:py-32.5">
      <div className="container">
        <div className="mb-6 lg:mb-17.5">
          <div className="border-default-200 mb-2.5 inline-flex rounded-full border px-3.75 py-1.25">
            <span className="text-default-500 text-xs font-normal tracking-tight uppercase md:text-sm">Our philosophy</span>
          </div>
          <h2 className="text-default-950 text-3xl leading-tight font-medium md:text-[34px]">
            People, nature and opportunity: <span className="text-default-500 font-medium">our guiding approach</span> explained
          </h2>
        </div>

        <div className="border-default-300 rounded-lg border border-dashed bg-white">
          <div className="divide-default-300 grid grid-cols-1 divide-y-0 divide-dashed md:grid-cols-2 md:divide-x">
            <div className="p-3.75 md:p-5 lg:p-7.5">
              <h3 className="text-default-950 mb-3.75 text-3xl font-medium md:mb-5 lg:mb-7.5">Mission</h3>
              <p className="text-default-500 text-base leading-relaxed font-normal">
                At <span className="text-default-950 font-medium">Climate City</span>, our ambition is to make resource-conscious living practical and comfortable. We plan homes, public spaces and essential services together, with local livelihoods and environmental care shaping development decisions.
              </p>
            </div>

            <div className="p-3.75 md:p-5 lg:p-7.5">
              <h3 className="text-default-950 mb-3.75 text-3xl font-medium md:mb-5 lg:mb-7.5">Vision</h3>
              <p className="text-default-500 mb-5 text-base leading-relaxed font-normal lg:mb-7.5">
                We aim to develop an African model of urban living that communities can learn from and adapt. Delivery will be phased, with site studies, approvals, funding and specialist partnerships shaping the final plan.
              </p>

              <div className="flex flex-wrap gap-2.5">
                {tagsData.map((tag) => (
                  <span key={tag.id} className="bg-default-100/50 text-default-500 rounded-md px-3.5 py-1.5 text-sm font-normal transition-colors">
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision
