'use client'

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type TeamMemberType = {
  id: number
  name: string
  role: string
  image: string
  bio: string
}

const teamMembersData: TeamMemberType[] = [
 {id:1,name:'Chimezie Micheal Lawrence',role:'CEO & Founder',image:'/assets/mikoshel-ceo.jpg',bio:'An Economics graduate of the University of Port Harcourt, Chimezie brings experience in real estate development, construction materials supply and residential project delivery. His focus is responsible growth and long-term value.'},
 {id:2,name:'Michelle Lawrence',role:'Chief Operating Officer',image:'/assets/mikoshel-coo.jpg',bio:'Michelle brings experience in international sourcing, supplier coordination and customer relationships. Her sourcing career began in Turkey in 2017 and expanded into China procurement and automobiles. She is a Mass Communication graduate of Imo State University.'}
]

const Team = () => {
  return (
    <section id="leadership" className="bg-[#1c1c1c] py-20 text-white lg:py-32.5">
      <div className="container text-center">
        <div className="mb-6 max-w-xl md:mx-auto lg:mb-17.5">
          <div className="border-default-500 mb-2.5 inline-flex rounded-full border px-3.75 py-1.25">
            <span className="text-default-400 text-sm font-normal tracking-tight uppercase">Our team</span>
          </div>
          <h2 className="text-3xl leading-tight font-medium text-white md:text-[40px]">
            The <span className="text-primary-1">team</span> behind Mikoshel
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 text-start sm:grid-cols-3 lg:grid-cols-4 lg:gap-7.5">
          {teamMembersData.map((item) => (
            <div key={item.id} className="bg-dark group relative overflow-hidden rounded-2xl bg-[url('/images/icons/team-icon.svg')] bg-[size:100%_100%] bg-center bg-no-repeat p-3.75 lg:p-7.5">
              <div className="team-image-wrap bg-default-800 mb-3.75 aspect-5/5 w-full overflow-hidden rounded-xl">
                <Image src={item.image} width={449} height={540} loading="lazy" alt={item.name} className="team-image h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="team-info relative z-10 pe-10">
                <h3 className="team-title mb-1 text-lg font-medium text-white">{item.name}</h3>
                <div className="team-job-title text-default-400 text-sm font-normal">{item.role}</div><p className="mt-4 text-sm leading-relaxed text-default-300">{item.bio}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
