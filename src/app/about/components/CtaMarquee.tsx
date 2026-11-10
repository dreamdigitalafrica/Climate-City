'use client'

import client1 from '@/assets/images/client/client-image-01.svg'
import client2 from '@/assets/images/client/client-image-02.svg'
import client3 from '@/assets/images/client/client-image-03.svg'
import client4 from '@/assets/images/client/client-image-04.svg'
import client5 from '@/assets/images/client/client-image-05.svg'
import client6 from '@/assets/images/client/client-image-06.svg'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

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

const CtaMarquee = () => {
  return (
    <section className="bg-default-100 overflow-hidden py-20 lg:py-32.5">
      <div className="container text-center">
        <div className="mx-auto mb-15 flex max-w-5xl flex-col items-center lg:mb-32.5">
          <h2 className="text-default-950 mb-2.5 text-3xl leading-tight font-medium md:text-5xl lg:text-5xl">Partner with Climate City</h2>
          <p className="text-default-500 mb-3.75 max-w-lg text-base leading-relaxed font-normal md:mb-6 lg:mb-10">Discuss development, operations or local enterprise with Mikoshel.</p>
          <Link href="/contact" className="bg-primary-1 hover:bg-default-800 hover:border-primary-1 text-default-800 inline-block rounded-full border border-dashed border-transparent px-5 py-2.5 text-nowrap transition-all duration-300 hover:text-white md:py-3.75">
            Start a conversation
          </Link>
        </div>

        <div className="bg-default-50 relative flex w-full gap-12.5 overflow-hidden rounded-2xl p-5 select-none lg:gap-45 lg:px-12.5 lg:py-10">
          <div className="animate-marquee-left flex min-w-full shrink-0 items-center justify-around gap-12.5 lg:gap-45">
            {clientLogosData.map((item) => (
              <Image key={item.id} src={item.logo} alt="Template brand placeholder" className="h-5 w-auto lg:h-6" />
            ))}
          </div>
          <div className="animate-marquee-left flex min-w-full shrink-0 items-center justify-around gap-12.5 lg:gap-45" aria-hidden="true">
            {clientLogosData.map((item) => (
              <Image key={`dup-${item.id}`} src={item.logo} alt="Template brand placeholder" className="h-5 w-auto lg:h-6" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaMarquee
