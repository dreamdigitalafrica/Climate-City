import { Metadata } from 'next'
import ContactForm from './components/ContactForm'
import Faqs from './components/Faqs'
import Hero from './components/Hero'
import MapLocation from './components/MapLocation'

export const metadata: Metadata = {
  title: 'Contact',
}

const Page = () => {
  return (
    <>
      <Hero />
      <ContactForm />
      <MapLocation />
      <Faqs />
    </>
  )
}

export default Page
