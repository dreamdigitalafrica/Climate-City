'use client'

import aboutImage01 from '@/assets/images/about/about-image-01.webp'
import aboutImage02 from '@/assets/images/about/about-image-02.webp'
import aboutImage03 from '@/assets/images/about/about-image-03.webp'
import aboutIcon01 from '@/assets/images/icons/about-icon-01.svg'
import aboutIcon02 from '@/assets/images/icons/about-icon-02.svg'
import aboutIcon03 from '@/assets/images/icons/about-icon-03.svg'
import aboutTitleIcon from '@/assets/images/icons/about-title-icon.svg'
import Image from 'next/image'
import Link from 'next/link'

const DrivingChange = () => {
  return (
    <section className="py-20 md:py-25 lg:py-32.5">
      <div className="container">
        <div className="flex flex-col items-center gap-2.5">
          <div>
            <Image src={aboutTitleIcon} alt="Sun Icon" className="size-7.5 md:size-9.5" />
          </div>
          <div className="border-default-200 mb-2.5 rounded-full border px-3.75 py-1.25">
            <span className="text-default-500 text-sm font-normal tracking-tight uppercase">Driving Change</span>
          </div>
        </div>

        <h2 className="text-default-900 mx-auto text-center text-3xl leading-[1.2] font-medium md:mb-6 md:max-w-xl md:text-[40px] lg:mb-12 lg:max-w-3xl">
          At Climate City, we are <span className="text-default-400">redefining</span> urban living by bringing sustainability into <span className="text-default-400">every day.</span>
        </h2>

        <div className="mx-auto grid grid-cols-3 items-center gap-3.75 md:gap-7.5 lg:w-6xl lg:gap-10">
          <div className="mt-8 aspect-3/4 overflow-hidden rounded-3xl md:mt-20">
            <Image src={aboutImage01} alt="Winding Road" className="h-full w-full object-cover" />
          </div>

          <div className="aspect-3/4 overflow-hidden rounded-3xl">
            <Image src={aboutImage02} alt="Wind Turbines" className="h-full w-full object-cover" />
          </div>

          <div className="mt-8 aspect-3/4 overflow-hidden rounded-3xl md:mt-20">
            <Image src={aboutImage03} alt="Lush forest and lake" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-y-10 lg:gap-y-17.5">
          <Link href="/about" className="bg-primary-1 hover:bg-default-800 hover:border-primary-1 text-default-800 rounded-full border border-dashed border-transparent px-5 py-2.5 text-nowrap transition-all duration-300 hover:text-white md:py-3.75">
            More about us
          </Link>

          <div className="flex items-center gap-5 md:gap-12.5 lg:gap-20">
            <div className="flex flex-col gap-y-2.5">
              <Image src={aboutIcon01} alt="" className="mx-auto size-6" />
              <span className="text-md text-default-500 text-center font-normal md:text-base">Connected places</span>
            </div>

            <div className="flex flex-col gap-y-2.5">
              <Image src={aboutIcon02} alt="" className="mx-auto size-6" />
              <span className="text-md text-default-500 text-center font-normal md:text-base">Resource-conscious design</span>
            </div>

            <div className="flex flex-col gap-y-2.5">
              <Image src={aboutIcon03} alt="" className="mx-auto size-6" />
              <span className="text-md text-default-500 text-center font-normal md:text-base">Local opportunity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DrivingChange
