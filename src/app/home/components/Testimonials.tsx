'use client'

import testimonialBg from '@/assets/images/about/testimonial-bg.webp'
import testimonialShape from '@/assets/images/icons/testimonial-shape.svg'
import testimonial01 from '@/assets/images/team/testimonial-image-01.webp'
import testimonial02 from '@/assets/images/team/testimonial-image-02.webp'
import testimonial03 from '@/assets/images/team/testimonial-image-03.webp'
import testimonial04 from '@/assets/images/team/testimonial-image-04.webp'
import Image, { StaticImageData } from 'next/image'

type TestimonialType = {
  id: number
  name: string
  role: string
  desc: string
  image?: StaticImageData
}

const testimonialsData = [
 {id:1,name:'People',role:'Our philosophy',desc:'Everyday needs should shape the places we build, from homes to public spaces.',image:testimonial01},
 {id:2,name:'Nature',role:'Our philosophy',desc:'Landscape, habitats and water are part of the plan from the beginning.',image:testimonial02},
 {id:3,name:'Opportunity',role:'Our philosophy',desc:'Local skills, enterprise and learning should grow alongside the city.',image:testimonial03},
 {id:4,name:'Culture',role:'Our philosophy',desc:'African identity belongs in the architecture, experiences and stories of the city.'},
 {id:5,name:'Stewardship',role:'Our philosophy',desc:'Long-term care of buildings and services matters as much as their construction.',image:testimonial04}
]

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-20 md:py-25 lg:py-32.5" style={{ backgroundImage: `url(${testimonialBg.src})` }}>
      <div className="bg-dark/60 absolute inset-0 z-0"></div>

      <div className="relative z-10 container text-center">
        <div className="mx-auto mb-6 lg:mb-17.5">
          <h2 className="mb-2.5 text-3xl leading-tight font-medium text-white md:text-[40px] lg:mb-4">
            The ideas that <span className="text-primary-1">guide Climate City</span>
          </h2>
          <p className="mx-auto max-w-sm text-base font-normal text-white/80">Our philosophy for a proposed African sustainable community</p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-5 text-start md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {testimonialsData.map((item, index) => (
            <div key={item.id} className="relative rounded-xl bg-white p-3.75 md:p-5">
              <div className="flex h-full flex-col justify-between gap-y-7.5 md:gap-y-10 lg:gap-y-28.5">
                <div className={`flex items-center gap-3.75 ${!item.image ? 'mb-5' : ''}`}>
                  {item.image && <Image src={item.image} loading="lazy" alt="Template portrait placeholder" className="size-11.5 rounded-full object-cover" />}
                  <div className="flex flex-col gap-y-0.75">
                    <h3 className="text-default-950 text-lg font-medium">{item.name}</h3>
                    <span className="text-md text-default-500 font-normal">{item.role}</span>
                  </div>
                </div>
                <p className="text-default-500 text-base leading-relaxed font-normal">{item.desc}</p>
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
