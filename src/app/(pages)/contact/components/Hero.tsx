'use client'

import contactHeroImage from '../../../../../public/assets/new/contact-green-avenue.webp'
import heroLeftShape from '@/assets/images/icons/hero-left-shape.svg'
import heroRightShape from '@/assets/images/icons/hero-right-shape.svg'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative flex flex-col justify-between overflow-hidden pt-10 lg:pt-22">
      <Image src={contactHeroImage} priority alt="Tree-lined Climate City avenue with solar-powered homes, cycle lanes and public transport" className="absolute inset-0 z-0 h-full w-full object-cover" />

      <div className="bg-dark/40 absolute inset-0 z-10"></div>

      <div className="relative z-20 container flex h-full grow flex-col items-center justify-end pt-16 text-center md:pt-24">
        <div className="mx-auto mb-7.5 max-w-3xl md:mb-10 lg:mb-35">
          <h1 className="mb-2.5 text-4xl leading-[1.1] font-medium text-white md:text-[64px]">Contact us</h1>
          <p className="text-md mx-auto max-w-lg leading-relaxed font-normal text-white md:mb-5 md:text-base">Speak with Mikoshel about partnerships, investment or the proposed city.</p>
        </div>

        <div className="bg-default-50 border-default-200/50 relative mx-auto mt-auto rounded-t-xl border border-b-0 px-3.75 pt-3.75 shadow-lg md:w-2xl md:px-7 md:pt-6 lg:w-6xl lg:pt-7">
          <Image src={heroLeftShape} loading="eager" alt="Icon" className="absolute -start-6.25 bottom-0 size-6.25" />
          <Image src={heroRightShape} loading="eager" alt="Icon" className="absolute -end-6.25 bottom-0 size-6.25" />

          <div className="divide-default-300 grid grid-cols-1 items-start gap-5 divide-dashed md:grid-cols-3 md:gap-12.5 md:divide-x">
            <div className="flex flex-col items-center gap-y-3.75 text-center md:gap-y-5 lg:gap-y-10">
              <h3 className="text-default-900 text-xl font-medium md:mb-3.75 lg:text-[22px]">Call Mikoshel</h3>
              <div className="flex flex-col gap-1.5">
                <Link href="tel:+2347082064914" className="text-default-600 hover:text-default-800 text-base font-normal underline-offset-4 transition-colors hover:underline">
                  +234 708 206 4914
                </Link>
                <Link href="mailto:enquires@theclimatecity.com" className="text-default-600 hover:text-default-800 text-base font-normal underline-offset-4 transition-colors hover:underline">
                  enquires@theclimatecity.com
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center gap-y-3.75 text-center md:gap-y-5 lg:gap-y-10">
              <h3 className="text-default-900 text-xl font-medium md:mb-3.75 lg:text-[22px]">Start a conversation</h3>
              <div className="flex flex-col gap-1.5">
                <Link href="#enquiry" className="text-default-600 hover:text-default-800 text-base font-normal underline-offset-4 transition-colors hover:underline">
                  Use the enquiry form
                </Link>
                <Link href="mailto:enquires@theclimatecity.com" className="text-default-600 hover:text-default-800 text-base font-normal underline-offset-4 transition-colors hover:underline">
                  Email the team
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center gap-y-3.75 text-center md:gap-y-5 lg:gap-y-10">
              <h3 className="text-default-900 text-xl font-medium md:mb-3.75 lg:text-[22px]">Plan your visit</h3>
              <div className="text-default-600 flex flex-col gap-1.5 text-base font-normal">
                <div>Nasarawa State, Africa</div>
                <div>Visits by prior arrangement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
