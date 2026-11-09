import { Metadata } from 'next'
import Faqs from './components/Faqs'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Solutions from './components/Solutions'

export const metadata: Metadata = {
  title: 'Sustainable Design',
}

const Page = () => {
  return (
    <>
      <Hero />
      <Solutions />
      <Pricing />
      <Faqs />
    </>
  )
}

export default Page
