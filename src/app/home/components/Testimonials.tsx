'use client'

import testimonialBg from '@/assets/images/about/testimonial-bg.webp'
import testimonialShape from '@/assets/images/icons/testimonial-shape.svg'
import Image, { StaticImageData } from 'next/image'

type TestimonialType = {
  id: number
  name: string
  role: string
  desc: string
  image?: StaticImageData
}

const testimonialsData = [
 {id:1,name:'People',desc:'Plan mixed-income homes and accessible public spaces so more people can take part in city life.'},
 {id:2,name:'Nature',desc:'Keep habitats and water systems connected as the city develops.'},
 {id:3,name:'Opportunity',desc:'Create space for local traders, producers and skills training alongside new investment.'},
 {id:4,name:'Culture',desc:'Give African artists and makers a place in the visitor economy.'},
 {id:5,name:'Stewardship',desc:'Plan for maintenance, resource use and service quality beyond construction.'}
]

const Testimonials = () => {
  return (
    <section className="philosophy-section relative overflow-hidden bg-cover bg-center bg-no-repeat py-20 md:py-25 lg:py-32.5" style={{ backgroundImage: `url(${testimonialBg.src})` }}>
      <div className="bg-dark/60 absolute inset-0 z-0"></div>

      <div className="relative z-10 container text-center">
        <div className="mx-auto mb-6 lg:mb-17.5">
          <h2 className="mb-2.5 text-3xl leading-tight font-medium text-white md:text-[34px] lg:mb-4">
            Progress that <span className="text-primary-1">people can share.</span>
          </h2>
          <p className="mx-auto max-w-sm text-base font-normal text-white/80">Our commitments guide the proposed city, from its streets to its economy.</p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-5 text-start md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {testimonialsData.map((item, index) => (
            <div key={item.id} className="relative rounded-xl bg-white p-3.75 md:p-5">
              <div className="flex h-full flex-col justify-between gap-y-7.5 md:gap-y-10 lg:gap-y-10">
                <div className={`flex items-center gap-3.75 min-h-14`}>
                  <div className="flex flex-col gap-y-0.75">
                    <h3 className="text-default-950 text-lg font-medium">{item.name}</h3>

                  </div>
                </div>
                <p className="text-default-700 text-base leading-relaxed font-normal">{item.desc}</p>
              </div>
              {index < testimonialsData.length - 1 && <Image src={testimonialShape} loading="eager" alt="Connector" className="absolute -inset-e-6.5 top-1/2 z-20 hidden h-12 w-7 -translate-y-1/2 lg:block" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
