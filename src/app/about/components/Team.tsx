'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
type TeamMemberType = { id:number; name:string; role:string; image:string; bio:string; linkedin?:string; instagram?:string; position?:string }
const teamMembersData: TeamMemberType[] = [
 {id:1,name:'Chimezie Micheal Lawrence',role:'CEO & Founder',image:'/assets/mikoshel-ceo.jpg',bio:'An Economics graduate of the University of Port Harcourt, Chimezie brings experience in real estate development, construction materials supply and residential project delivery. His focus is responsible growth and long-term value.'},
 {id:2,name:'Michelle Lawrence',role:'Chief Operating Officer',image:'/assets/mikoshel-coo.jpg',bio:'Michelle brings experience in international sourcing, supplier coordination and customer relationships. Her sourcing career began in Turkey in 2017 and expanded into China procurement and automobiles. She is a Mass Communication graduate of Imo State University.'},
 {id:3,name:'',role:'CTO',image:'/assets/team-cto.webp',bio:'',position:'50% 22%'}
]

export default function Team({ standalone = false }: { standalone?: boolean }) {
 const dialog = useRef<HTMLDialogElement>(null)
 const trigger = useRef<HTMLButtonElement | null>(null)
 const [member,setMember] = useState<TeamMemberType>(teamMembersData[0])
 function open(item:TeamMemberType, button:HTMLButtonElement) { setMember(item); trigger.current=button; dialog.current?.showModal() }
 function close(){dialog.current?.close()}
 return (
  <section id="leadership" className={`bg-[#1c1c1c] text-white pb-20 lg:pb-28 ${standalone ? 'pt-40 lg:pt-48' : 'pt-20 lg:pt-28'}`}>
   <div className="container">
    <div className="mb-10 text-center md:mb-16">
     <span className="inline-block rounded-full border border-white/25 px-4 py-1 text-xs uppercase tracking-wide text-white/65">Our team</span>
     <h2 className="mx-auto mt-5 max-w-2xl text-3xl md:text-[34px] font-medium text-white">The <span className="text-primary-1">team</span> behind Climate City</h2>
    </div>
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
     {teamMembersData.map(item=><article key={item.id} className="team-reference-card relative rounded-3xl bg-[#222222] p-6 pb-16 md:p-7 md:pb-16">
      <button type="button" disabled={!item.bio} onClick={e=>open(item,e.currentTarget)} aria-haspopup={item.bio ? 'dialog' : undefined} aria-label={item.bio ? 'Read about '+item.name : 'CTO portrait'} className="group block w-full text-left rounded-xl focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-primary-1 disabled:cursor-default">
       <div className="aspect-square overflow-hidden rounded-2xl bg-default-800"><Image src={item.image} width={600} height={600} alt={item.name || 'Chief Technology Officer'} style={{objectPosition:item.position || '50% 25%', transform: `scale(${item.id === 3 ? 1.5 : 1.14})`, transformOrigin:'50% 12%'}} className="h-full w-full object-cover scale-[1.14] transition-transform duration-500 group-hover:scale-[1.18] motion-reduce:transition-none" /></div>
       {item.name && <h3 className="mt-5 text-xl font-medium text-white">{item.name}</h3>}
       <p className="mt-2 text-base leading-snug text-white/60">{item.role}</p>
      </button>
      {(item.linkedin || item.instagram) && <div className="absolute bottom-0 right-0 flex gap-4 rounded-tl-3xl bg-[#1c1c1c] px-5 py-4">
       {item.linkedin && <a href={item.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${item.name} on LinkedIn`} className="text-primary-1 hover:text-white"><Icon icon="tabler:brand-linkedin" width={24}/></a>}
       {item.instagram && <a href={item.instagram} target="_blank" rel="noopener noreferrer" aria-label={`${item.name} on Instagram`} className="text-primary-1 hover:text-white"><Icon icon="tabler:brand-instagram" width={24}/></a>}
      </div>}
     </article>)}
    </div>
   </div>
   <dialog ref={dialog} className="profile-dialog" aria-labelledby="profile-name" onClose={()=>trigger.current?.focus()} onClick={e=>{if(e.target===e.currentTarget)close()}}>
    <div className="profile-body relative">
     <button autoFocus type="button" onClick={close} aria-label="Close profile" className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full bg-default-100 text-2xl text-default-950">×</button>
     <Image src={member.image} width={120} height={144} alt="" className="mb-6 h-36 w-30 rounded-xl object-cover" />
     <h2 id="profile-name" className="pr-4">{member.name}</h2>
     <p className="mt-2 mb-6 font-medium">{member.role}</p>
     <p>{member.bio}</p>
    </div>
   </dialog>
  </section>
 )
}
