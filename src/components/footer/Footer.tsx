'use client'

import footerVideoPoster from '@/assets/images/about/footer-video-poster.jpg'
import leafIcon from '@/assets/images/icons/leaf-icon.svg'
import shapeIcon from '@/assets/images/icons/shape.svg'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-dark relative overflow-hidden pt-15 pb-4 md:pt-25 md:pb-17.5 lg:pt-32.5">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video autoPlay muted loop playsInline className="h-full w-full object-cover" poster={footerVideoPoster.src}>
          <source src="/footer-video.mp4" type="video/mp4" />
        </video>
        <div className="bg-dark-950/20 absolute inset-0"></div>
      </div>

      <div className="relative z-10 container">
        <div className="relative grid grid-cols-1 items-stretch gap-5 lg:grid-cols-2 lg:gap-7.5">
          <div className="flex flex-col justify-between rounded-2xl bg-white p-3.75 shadow-lg md:p-5 lg:p-12.5">
            <div className="flex h-full flex-col justify-between gap-y-7.5 md:gap-y-12.5 lg:gap-y-21">
              <Link href="/home" className="inline-block max-w-fit">
                <img src="/assets/logo-green-compact.png" alt="Climate City" className="h-10 w-auto" />
              </Link>

              <div>
                <h2 className="text-default-950 mb-3.75 leading-tight font-medium md:text-2xl lg:mb-8.75 lg:text-3xl">
                  Help build <span className="text-default-600">Climate City’s future.</span>
                </h2>

                <p className="text-default-500 mb-3.75 text-base font-normal">Discuss your interest in Climate City.</p>

                <div className="w-full lg:max-w-lg">
                  <form onSubmit={(event)=>{event.preventDefault();const email=new FormData(event.currentTarget).get("email");window.location.href="https://wa.me/2347082064914?text="+encodeURIComponent("Climate City enquiry. Please contact me at "+email)}} className="border-default-200 focus-within:border-default-800 relative items-center rounded-full border bg-white p-1.5 transition-all md:flex">
                    <input name="email" aria-label="Your email address" type="email" required placeholder="Enter your email" className="text-default-700 placeholder:text-default-400 w-full border-0 bg-transparent py-1.5 ps-6 pe-4 text-base outline-none" />
                    <button
                      type="submit"
                      className="bg-primary-1 hover:bg-default-800 hover:border-primary-1 text-default-800 absolute start-0 top-14 rounded-full border border-dashed border-transparent px-5 py-2.5 text-nowrap transition-all duration-300 hover:text-white md:static"
                    >
                      Enquire
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <p className="text-default-500 text-md mt-17.5 font-medium md:mt-7.5 md:text-base lg:mt-17.5">
              Powered by{' '}
              <Link href="/mikoshel" target="_blank" className="text-default-800 hover:text-default-500 font-medium transition-colors">
                Mikoshel
              </Link>
            </p>
          </div>

          <div className="rounded-3xl bg-white p-3.75 shadow-lg md:p-5 lg:p-12.5">
            <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-0">
              <div className="border-default-200 border-dashed md:border-e md:border-b md:pe-5 md:pb-5 lg:pe-10 lg:pb-12.5">
                <h3 className="text-default-950 mb-3.75 text-xl font-medium md:mb-5 md:text-3xl lg:mb-6.25">Pages</h3>
                <div className="grid grid-cols-2 gap-x-7.5 gap-y-2.5 md:gap-x-11.5">
                  <div className="flex flex-col gap-y-2.5">
                    <Link href="/home" className="text-default-800 font-normal hover:underline hover:underline-offset-3">
                      Home
                    </Link>
                    <Link href="/about" className="text-default-800 font-normal hover:underline hover:underline-offset-3">
                      About
                    </Link>
                    <Link href="/sustainable-design" className="text-default-800 font-normal hover:underline hover:underline-offset-3">
                      Sustainable Design
                    </Link>
                  </div>

                  <div className="flex flex-col gap-y-2.5">
                    <Link href="/explore.html" className="text-default-800 font-normal hover:underline hover:underline-offset-3">
                      Explore City
                    </Link>
                    <Link href="/leadership" className="text-default-800 font-normal hover:underline hover:underline-offset-3">
                      Leadership
                    </Link>
                    <Link href="/contact" className="text-default-800 font-normal hover:underline hover:underline-offset-3">
                      Contact
                    </Link>
                  </div>
                </div>
              </div>

              <div className="border-default-200 border-dashed md:border-b md:ps-5 md:pb-5 lg:ps-10 lg:pb-10">
                <h3 className="text-default-950 mb-3.75 text-xl font-medium md:mb-5 md:text-3xl lg:mb-6.25">Address</h3>
                <div className="flex flex-col gap-y-2.5 md:gap-y-7.5">
                  <p className="text-default-600 leading-relaxed font-normal">Proposed development: Nasarawa State, Nigeria.</p>
                  <p className="text-default-600 leading-relaxed font-normal">Contact the team before arranging a visit.</p>
                </div>
              </div>

              <div className="border-default-200 border-dashed md:border-e md:border-b md:border-b-0 md:py-5 md:pe-5 lg:py-12.5 lg:pe-10">
                <h3 className="text-default-950 mb-3.75 text-xl font-medium md:mb-5 md:text-3xl lg:mb-6.25">Contact</h3>
                <div className="flex flex-col gap-y-2.5">
                  <Link href="https://wa.me/2347082064914" className="text-default-800 hover:text-default-600 font-normal transition-colors">
                    WhatsApp enquiries
                  </Link>
                  <Link href="tel:+2347082064914" className="text-default-800 hover:text-default-600 font-normal transition-colors">
                    +234 708 206 4914
                  </Link>
                </div>
              </div>

              <div className="md:py-5 md:ps-5 md:pt-5 lg:py-12.5 lg:ps-10 lg:pt-12.5">
                <h3 className="text-default-950 mb-3.75 text-xl font-medium md:mb-5 md:text-3xl lg:mb-6.25">Discover</h3>
                <div className="text-default-900 flex flex-col gap-2.5"><Link href="/mikoshel">About Mikoshel</Link><Link href="/leadership">Leadership</Link><Link href="/contact">Investor enquiries</Link></div>
              </div>
            </div>
          </div>

          <div className="absolute inset-s-1/2 top-79 z-20 h-14.25 w-8 -translate-x-1/2 md:top-76 lg:top-1/2 lg:-translate-y-1/2">
            <Image src={shapeIcon} alt="Connector" className="h-full w-full -rotate-90 object-contain lg:rotate-0" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
