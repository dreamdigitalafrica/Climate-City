'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'
type TeamMemberType = { id:number; name:string; role:string; image:string; bio:string }
const teamMembersData: TeamMemberType[] = [
 {id:1,name:'Chimezie Micheal Lawrence',role:'CEO & Founder',image:'/assets/mikoshel-ceo.jpg',bio:'An Economics graduate of the University of Port Harcourt, Chimezie brings experience in real estate development, construction materials supply and residential project delivery. His focus is responsible growth and long-term value.'},
 {id:2,name:'Michelle Lawrence',role:'Chief Operating Officer',image:'/assets/mikoshel-coo.jpg',bio:'Michelle brings experience in international sourcing, supplier coordination and customer relationships. Her sourcing career began in Turkey in 2017 and expanded into China procurement and automobiles. She is a Mass Communication graduate of Imo State University.'}
]

export default function Team() {
 const dialog = useRef<HTMLDialogElement>(null)
 const trigger = useRef<HTMLButtonElement | null>(null)
 const [member,setMember] = useState<TeamMemberType>(teamMembersData[0])
 function open(item:TeamMemberType, button:HTMLButtonElement) { setMember(item); trigger.current=button; dialog.current?.showModal() }
 function close(){dialog.current?.close()}
 return (
  <section id="leadership" className="bg-[#1c1c1c] py-20 text-white lg:py-28">
   <div className="container">
    <h2 className="mb-10 text-center text-3xl md:text-[34px] font-medium text-white">Leadership</h2>
    <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2">
     {teamMembersData.map(item=><button key={item.id} type="button" onClick={e=>open(item,e.currentTarget)} aria-haspopup="dialog" aria-label={'Read about '+item.name} className="group text-left rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-primary-1">
      <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-default-800"><Image src={item.image} width={449} height={540} alt={item.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></div>
      <h3 className="mt-5 text-xl font-medium text-white">{item.name}</h3>
     </button>)}
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
