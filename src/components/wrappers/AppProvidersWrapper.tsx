'use client'

import { preline } from '@/utils/preline'
import React, { useEffect } from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

const AppProvidersWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    preline.init()
    import('smoothscroll-for-websites').then((module) => {
      const SmoothScroll = module.default
      SmoothScroll()
    })
  }, [])

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default AppProvidersWrapper
