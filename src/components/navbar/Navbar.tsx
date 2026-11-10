'use client'

import shapeIcon from '@/assets/images/icons/shape.svg'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export type NavigationType = {
  label: string
  route: string
}

const menuData: NavigationType[] = [
  { label: 'About Us', route: '/about' },
  { label: 'Sustainability', route: '/sustainable-design' },
  { label: 'Contact Us', route: '/contact' },
  { label: 'Insights', route: '/insights' },
]

const Navbar = () => {
  const pathname = usePathname()

  useEffect(() => {
    const overlay = document.getElementById('mobile-menu')
    if (overlay && (window as any).HSOverlay) {
      ;(window as any).HSOverlay.close(overlay)
    }
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.nav-sticky')
      if (navbar) {
        if (window.scrollY >= 80) {
          navbar.classList.add('nav-sticky-on')
        } else {
          navbar.classList.remove('nav-sticky-on')
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isRouteActive = (route: string) => {
    if (route === '/home' && pathname === '/') return true
    return pathname === route
  }

  return (
    <header>
      <div className="nav-sticky navbar fixed inset-x-0 top-0 z-120 w-full! transition-all duration-300">
        <div className="container py-3.5 md:py-4 lg:py-5">
          <div className="flex w-full items-center gap-2 md:gap-2.25">
            <div className="relative w-full grow rounded-full bg-white px-3 py-3 shadow-lg md:px-5 md:py-4">
              <div className="flex w-full items-center justify-between">
                <Link href="/" className="flex items-center">
                  <img src="/assets/logo-green-compact.png" alt="" className="h-5 w-auto" /><span className="ms-1.5 text-base sm:text-xl font-medium text-default-950">Climate City</span>
                </Link>

                <div id="navbar" className="ml-auto hidden items-center gap-1 lg:flex">
                  {menuData.map((item) => {
                    const active = isRouteActive(item.route)
                    return (
                      <Link key={item.route} href={item.route} className={`text-default-800 flex items-center gap-1 px-3 xl:px-5 text-base font-normal transition-all ${active ? 'active' : ''}`}>
                        {item.label}
                      </Link>
                    )
                  })}
                </div>

                <Image src={shapeIcon} alt="" className="absolute -inset-e-3 z-10 h-6 w-3.75" />
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-1.25 rounded-full bg-white p-1.5 md:p-2 shadow-lg">
              <Link href="/explore.html" className="bg-primary-1 hover:bg-default-800 hover:border-primary-1 text-default-800 rounded-full border border-dashed border-transparent px-3 md:px-5 py-2.5 text-sm md:text-base text-nowrap transition-all duration-300 hover:text-white">
                Explore
              </Link>
            </div>

            <button
              type="button"
              className="text-default-900 hover:bg-default-50 flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg transition-all md:size-14 lg:hidden"
              data-hs-overlay="#mobile-menu"
              aria-controls="mobile-menu"
              aria-label="Toggle navigation"
            >
              <Icon icon="tabler:menu-2" className="size-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className="hs-overlay hs-overlay-open:translate-y-0 md:hs-overlay-open:top-21 hs-overlay-open:top-18 hs-overlay-open:opacity-100 fixed inset-x-0 top-0 z-110 mx-4 h-auto -translate-y-full transform overflow-hidden rounded-lg bg-white opacity-0 shadow-xl transition-all duration-300 [--body-scroll:true] md:mx-5 lg:hidden"
        role="dialog"
        tabIndex={-1}
        aria-label="Navigation"
      >
        <div className="flex max-h-[70vh] flex-col overflow-y-auto p-3">
          {[...menuData, { label: 'Explore', route: '/explore.html' }].map((item) => {
            const active = isRouteActive(item.route)
            return (
              <Link key={'mobile-' + item.route} href={item.route} className={`group text-default-600 hover:text-primary-1 flex items-center p-1.5 text-sm font-medium transition-all ${active ? 'active' : ''}`}>
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>
    </header>
  )
}

export default Navbar
