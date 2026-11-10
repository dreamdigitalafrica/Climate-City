'use client'

import Link from 'next/link'

type PricingPlanType = {
  id: number
  title: string
  description: string
  price: string
  period: string
  features: string[]
  link: string
  buttonClass: string
}

const pricingPlansData = [{"id": 1, "title": "Site and feasibility", "description": "Establish the conditions that will guide responsible development.", "price": "Study", "period": "", "features": ["Site investigations", "Environmental assessment", "Infrastructure planning", "Community engagement"], "link": "/contact", "buttonClass": "bg-default-950 hover:bg-primary-1 border-primary-1 text-white hover:text-default-950"}, {"id": 2, "title": "Design and partnerships", "description": "Develop the plan with qualified specialists and delivery partners.", "price": "Design", "period": "", "features": ["Architecture and engineering", "Service-provider partnerships", "Approvals and funding", "Phased delivery strategy"], "link": "/contact", "buttonClass": "bg-primary-1 border-transparent hover:border-primary-1 hover:bg-default-950 text-default-950 hover:text-white"}, {"id": 3, "title": "Delivery and stewardship", "description": "Align construction with services and long-term management.", "price": "Care", "period": "", "features": ["Infrastructure readiness", "Phased construction", "Operations and maintenance", "Performance review"], "link": "/contact", "buttonClass": "bg-default-950 hover:bg-primary-1 border-primary-1 text-white hover:text-default-950"}]

const Pricing = () => {
  return (
    <section className="bg-white py-20 md:py-25 lg:py-32">
      <div className="container">
        <div className="mx-auto mb-6 max-w-3xl text-center lg:mb-17.5">
          <h2 className="text-default-900 text-3xl leading-[1.1] font-medium md:text-[34px]">Plan. Test. Deliver.</h2>
        </div>

        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 lg:gap-12.5">
          {pricingPlansData.map((item) => (
            <div key={item.id} className="bg-default-100/90 flex flex-col justify-between rounded-xl p-5 transition-all duration-300 lg:p-7.5">
              <div>
                <h4 className="text-default-950 pb-2.5 text-xl font-medium md:text-[22px]">{item.title}</h4>
                <div className="border-default-300 mb-2.5 border-t border-dashed"></div>
                <p className="text-default-500 mb-3.75 text-sm leading-relaxed font-normal">{item.description}</p>
                <div className="flex items-baseline">
                  <h4 className="text-default-950 text-[22px] font-medium md:text-3xl">{item.price}</h4>
                  <span className="text-default-500 text-base font-normal">{item.period}</span>
                </div>
              </div>

              <div>
                <div className="py-5 md:py-7.5">
                  <Link href={item.link} className={`flex items-center justify-center rounded-full border border-dashed px-5 py-2.5 text-center font-medium transition-all duration-300 md:py-3.75 ${item.buttonClass}`}>
                    Discuss the project
                  </Link>
                </div>

                <ul className="list-inside list-disc space-y-2.5 text-start">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="text-default-600 font-normal">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
