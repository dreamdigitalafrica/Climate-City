'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'
type TeamMemberType = { id:number; name:string; role:string; image:string; bio:string; linkedin?:string; x?:string; position?:string }
const teamMembersData: TeamMemberType[] = [
 {id:1,name:'Chimezie Micheal Lawrence',role:'CEO & Founder',linkedin:'https://www.linkedin.com/in/micheal-lawrence-195228449/',image:'/assets/mikoshel-ceo-clear.webp',bio:'An Economics graduate of the University of Port Harcourt, Chimezie brings experience in real estate development, construction materials supply and residential project delivery. His focus is responsible growth and long-term value.'},
 {id:2,name:'Michelle Lawrence',role:'Chief Operating Officer',image:'/assets/mikoshel-coo-clear.webp',bio:'Michelle brings experience in international sourcing, supplier coordination and customer relationships. Her sourcing career began in Turkey in 2017 and expanded into China procurement and automobiles. She is a Mass Communication graduate of Imo State University.'},
 {id:3,name:'Chibuzo Ogbonnaya',role:'Chief Technology Officer',linkedin:'https://www.linkedin.com/in/kingmezo/',image:'/assets/team-cto.webp',bio:"Chibuzo Ogbonnaya is a development practitioner and technology leader focused on sustainable communities, digital inclusion and economic opportunity across Africa. As Chief Technology Officer at Climate City, he brings experience in education technology, youth development and community engagement to the relationship between technology, people and place.\n\nHis work with Chaise and Reves African Youth and Children Development Foundation advances digital skills, access to education and pathways to work for underserved young people. His project leadership in the Office of the Senior Special Assistant to the President on Community Engagement centres on inclusive development and partnerships across sectors.\n\nHis international engagement includes affiliations with United Nations Youth Affairs and UNICEF Office of Research – Innocenti, alongside a Youth Climate Fellowship under the UNFCCC. At Climate City, his focus is on connecting digital innovation with community participation, skills development and opportunities to contribute to a more sustainable African economy.",position:'50% 22%'},
 {id:4,name:'Ndupu Michael Chukwuemeka',role:'Chief Financial Officer',image:'/assets/team-cfo.webp',linkedin:'https://www.linkedin.com/in/ndupu-michael',bio:'Ndupu Michael Chukwuemeka is a business development professional with experience in financial services, client relationship management, sales execution and operational improvement. His work centres on identifying opportunities, building partnerships and creating systems that support sustainable business growth.\n\nAs Chief Financial Officer at Climate City, he brings a focus on strategy, disciplined execution and long-term value. His interests span strategic partnerships, growth strategy and business transformation, connecting people, processes and performance.'}
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
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
     {teamMembersData.map(item=><article key={item.id} className="team-reference-card relative rounded-3xl bg-[#222222] p-6 pb-16 md:p-7 md:pb-16">
      <button type="button" disabled={!item.bio} onClick={e=>open(item,e.currentTarget)} aria-haspopup={item.bio ? 'dialog' : undefined} aria-label={item.bio ? 'Read about '+item.name : 'CTO portrait'} className="group block w-full text-left rounded-xl focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-primary-1 disabled:cursor-default">
       <div className="aspect-square overflow-hidden rounded-2xl bg-default-800"><Image src={item.image} width={600} height={600} alt={item.name || 'Chief Technology Officer'} style={{objectPosition:'50% 0%', ...(item.id === 3 ? {transform:'scale(1.65)',transformOrigin:'50% 0%'} : {})}} className="h-full w-full object-cover" /></div>
       {item.name && <h3 className="mt-5 text-xl font-medium text-white">{item.name}</h3>}
       <p className="mt-2 text-base leading-snug text-white/60">{item.role}</p>
      </button>
      <div className="team-social-wrap absolute bottom-0 right-0 flex items-center gap-1 rounded-tl-3xl bg-[#1c1c1c] pl-3 pt-2" aria-label={`${item.name || item.role} social profiles`}>
       <SocialProfile network="LinkedIn" url={item.linkedin} name={item.name || item.role} />
       <SocialProfile network="X" url={item.x} name={item.name || item.role} />
      </div>
     </article>)}
    </div>
   </div>
   <dialog ref={dialog} className="profile-dialog" aria-labelledby="profile-name" onClose={()=>trigger.current?.focus()} onClick={e=>{if(e.target===e.currentTarget)close()}}>
    <div className="profile-body relative">
     <button autoFocus type="button" onClick={close} aria-label="Close profile" className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full bg-default-100 text-2xl text-default-950">×</button>
     <Image src={member.image} width={120} height={144} alt="" className="mb-6 h-36 w-30 rounded-xl object-cover object-top" />
     <h2 id="profile-name" className="pr-4">{member.name}</h2>
     <p className="mt-2 mb-6 font-medium">{member.role}</p>
     <div className="space-y-4">{member.bio.split('\n\n').map((paragraph,index)=><p key={index}>{paragraph}</p>)}</div>
     {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block underline underline-offset-4">View LinkedIn profile</a>}
    </div>
   </dialog>
  </section>
 )
}

function SocialProfile({ network, url, name }: { network: 'LinkedIn' | 'X'; url?: string; name: string }) {
 const icon = <svg viewBox="0 0 24 24" width="23" height="23" fill="currentColor" aria-hidden="true">
  {network === 'LinkedIn' ? <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96C2 21.32 2.69 22 3.55 22h16.9c.86 0 1.55-.68 1.55-1.52V3.52C22 2.68 21.31 2 20.45 2ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.11-.02-2.53-1.54-2.53-1.55 0-1.79 1.21-1.79 2.45v4.73H9.52V9.2h2.83v1.31h.04c.39-.74 1.36-1.53 2.8-1.53 3 0 3.56 1.98 3.56 4.55v5.22Z" /> : <path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-7.42L5.56 22H2.43l8.17-9.34L.8 2h6.4l4.43 6.77L18.9 2Zm-1.1 18h1.73L6.25 3.88H4.4L17.8 20Z" />}
 </svg>
 const classes = 'flex size-11 items-center justify-center rounded-full text-primary-1 transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-primary-1 motion-reduce:transform-none'
 return url ? <a className={classes} href={url} target="_blank" rel="noopener noreferrer" aria-label={`${name} on ${network}`}>{icon}</a> : <span className={classes} role="link" aria-disabled="true" aria-label={`${name} on ${network}: profile link pending`} title={`${network} profile link coming soon`}>{icon}</span>
}
