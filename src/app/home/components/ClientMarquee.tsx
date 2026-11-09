'use client'

import client1 from '@/assets/images/client/client-image-01.svg'
import client2 from '@/assets/images/client/client-image-02.svg'
import client3 from '@/assets/images/client/client-image-03.svg'
import client4 from '@/assets/images/client/client-image-04.svg'
import client5 from '@/assets/images/client/client-image-05.svg'
import client6 from '@/assets/images/client/client-image-06.svg'
import Image, { StaticImageData } from 'next/image'

type ClientLogoType = {
  id: number
  logo: StaticImageData
}

const clientLogosData: ClientLogoType[] = [
  { id: 1, logo: client1 },
  { id: 2, logo: client2 },
  { id: 3, logo: client3 },
  { id: 4, logo: client4 },
  { id: 5, logo: client5 },
  { id: 6, logo: client6 },
]

const ClientMarquee = () => {
  return (
    <section className="overflow-hidden bg-white pb-20 md:pb-25 lg:pb-32.5">
      <div className="container"><p className="text-default-500 mb-5 text-center text-sm">Template brand placeholders — partnerships to be announced.</p>
        <div className="bg-default-100 relative flex w-full gap-12.5 overflow-hidden rounded-2xl p-5 select-none lg:gap-45 lg:px-12.5 lg:py-10">
          <div className="animate-marquee-left flex min-w-full shrink-0 items-center justify-around gap-12.5 lg:gap-45">
            {clientLogosData.map((item) => (
              <Image key={item.id} src={item.logo} alt="Template logo placeholder" className="h-5 w-auto lg:h-6" />
            ))}
          </div>
          <div className="animate-marquee-left flex min-w-full shrink-0 items-center justify-around gap-12.5 lg:gap-45" aria-hidden="true">
            {clientLogosData.map((item) => (
              <Image key={`dup-${item.id}`} src={item.logo} alt="Template logo placeholder" className="h-5 w-auto lg:h-6" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientMarquee
